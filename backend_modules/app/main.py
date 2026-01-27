from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from contextlib import asynccontextmanager
import logging
from datetime import datetime

from backend.app.config import settings
from backend.app.supabase_client import SupabaseClient
from backend.app.api.v1.api import api_router
from backend.app.api.websocket import websocket_router
from backend.app.auth.dependencies import get_current_user
from backend.app.models.user import User

# Configure logging
logging.basicConfig(
    level=logging.INFO if settings.ENVIRONMENT == "production" else logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan context manager for startup/shutdown events"""
    # Startup
    logger.info("Starting MeetNotes Backend with Supabase...")

    # Test Supabase connection
    if await SupabaseClient.test_connection():
        logger.info("✅ Supabase connection successful")
    else:
        logger.error("❌ Supabase connection failed")

    # Initialize AI models if enabled
    if settings.PRELOAD_AI_MODELS:
        try:
            from backend.app.ai.speech_to_text import SpeechToTextEngine
            from backend.app.ai.summarizer import SummaryEngine

            await SpeechToTextEngine.get_instance()
            await SummaryEngine.get_instance()
            logger.info("✅ AI models loaded successfully")
        except Exception as e:
            logger.warning(f"Failed to preload AI models: {e}")

    yield

    # Shutdown
    logger.info("Shutting down MeetNotes Backend...")


# Create FastAPI app
app = FastAPI(
    title="MeetNotes API",
    description="AI-powered meeting transcription and summarization with Supabase",
    version="1.0.0",
    docs_url="/docs" if settings.ENVIRONMENT != "production" else None,
    redoc_url="/redoc" if settings.ENVIRONMENT != "production" else None,
    openapi_url="/openapi.json" if settings.ENVIRONMENT != "production" else None,
    lifespan=lifespan
)

# Add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["*"] if settings.ENVIRONMENT == "development" else ["meetMoM.com", "api.meetMoM.com"]
)

app.add_middleware(GZipMiddleware, minimum_size=1000)

# Include routers
app.include_router(api_router, prefix="/api/v1")
app.include_router(websocket_router, prefix="/ws")


# Health check endpoints
@app.get("/")
async def root():
    return {
        "status": "healthy",
        "service": "MeetMoM Backend",
        "version": "1.0.0",
        "database": "Supabase",
        "timestamp": datetime.utcnow().isoformat()
    }


@app.get("/health")
async def health_check():
    """Comprehensive health check"""
    from backend.app.supabase_client import SupabaseClient
    from backend.app.services.storage_service import check_storage_connection

    db_status = await SupabaseClient.test_connection()
    storage_status = await check_storage_connection()

    return {
        "status": "healthy" if db_status and storage_status else "degraded",
        "database": "healthy" if db_status else "unhealthy",
        "storage": "healthy" if storage_status else "unhealthy",
        "timestamp": datetime.utcnow().isoformat()
    }


@app.get("/protected")
async def protected_route(current_user: User = Depends(get_current_user)):
    """Example protected route"""
    return {
        "message": f"Hello {current_user.email}",
        "user_id": current_user.id,
        "is_authenticated": True
    }


# Error handlers
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )


@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    logger.error(f"Unhandled exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"},
    )