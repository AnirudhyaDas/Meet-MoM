from pydantic_settings import BaseSettings
from typing import List, Optional
from functools import lru_cache


class Settings(BaseSettings):
    # Application
    APP_NAME: str = "MeetMoM"
    ENVIRONMENT: str = "development"  # development, staging, production
    DEBUG: bool = False
    API_V1_STR: str = "/api/v1"

    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8080"]

    # Supabase
    SUPABASE_URL: str
    SUPABASE_ANON_KEY: str
    SUPABASE_SERVICE_ROLE_KEY: Optional[str] = None

    # Supabase Storage
    SUPABASE_STORAGE_BUCKET: str = "audio-files"

    # JWT Settings (aligned with Supabase)
    JWT_SECRET: Optional[str] = None  # Supabase handles JWT
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days

    # AI/ML Services
    OPENAI_API_KEY: Optional[str] = None
    WHISPER_MODEL: str = "base"  # tiny, base, small, medium, large
    SUMMARIZATION_MODEL: str = "facebook/bart-large-cnn"
    ENABLE_GPU: bool = False
    PRELOAD_AI_MODELS: bool = True

    # Audio Processing
    MAX_AUDIO_FILE_SIZE: int = 100 * 1024 * 1024  # 100MB
    SUPPORTED_AUDIO_FORMATS: List[str] = ["wav", "mp3", "m4a", "ogg", "webm"]

    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 60
    RATE_LIMIT_PER_HOUR: int = 1000

    # WebSocket
    WEBSOCKET_MAX_CONNECTIONS: int = 1000

    # Redis (for background tasks)
    REDIS_URL: Optional[str] = "redis://localhost:6379/0"

    @property
    def CORS_ORIGINS(self) -> List[str]:
        return self.BACKEND_CORS_ORIGINS

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()