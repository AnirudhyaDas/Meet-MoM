from pydantic_settings import BaseSettings
from typing import List, Optional
from functools import lru_cache
import secrets


class Settings(BaseSettings):
    # Application
    APP_NAME: str = "MeetNotes"
    ENVIRONMENT: str = "development"  # development, staging, production
    DEBUG: bool = False
    SECRET_KEY: str = secrets.token_urlsafe(32)
    API_V1_STR: str = "/api/v1"

    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:8080"]

    # Database
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_USER: str = "meetnotes"
    POSTGRES_PASSWORD: str = "meetnotes"
    POSTGRES_DB: str = "meetnotes"
    DATABASE_URL: Optional[str] = None

    # Redis
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    REDIS_DB: int = 0

    # Storage
    STORAGE_PROVIDER: str = "local"  # local, s3, gcs
    AWS_ACCESS_KEY_ID: Optional[str] = None
    AWS_SECRET_ACCESS_KEY: Optional[str] = None
    AWS_REGION: str = "us-east-1"
    S3_BUCKET_NAME: str = "meetnotes-audio"

    # AI/ML Services
    OPENAI_API_KEY: Optional[str] = None
    WHISPER_MODEL: str = "base"  # tiny, base, small, medium, large
    SUMMARIZATION_MODEL: str = "facebook/bart-large-cnn"
    ENABLE_GPU: bool = False
    PRELOAD_AI_MODELS: bool = True

    # Audio Processing
    MAX_AUDIO_FILE_SIZE: int = 100 * 1024 * 1024  # 100MB
    SUPPORTED_AUDIO_FORMATS: List[str] = ["wav", "mp3", "m4a", "ogg", "webm"]

    # Security
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    ALGORITHM: str = "HS256"

    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 60
    RATE_LIMIT_PER_HOUR: int = 1000

    # WebSocket
    WEBSOCKET_MAX_CONNECTIONS: int = 1000
    WEBSOCKET_PING_INTERVAL: int = 20
    WEBSOCKET_PING_TIMEOUT: int = 40

    @property
    def CORS_ORIGINS(self) -> List[str]:
        return self.BACKEND_CORS_ORIGINS

    @property
    def ALLOWED_HOSTS(self) -> List[str]:
        if self.ENVIRONMENT == "production":
            return ["meetnotes.com", "api.meetnotes.com"]
        return ["*"]

    @property
    def ASYNC_DATABASE_URL(self) -> str:
        if self.DATABASE_URL:
            return self.DATABASE_URL
        return f"postgresql+asyncpg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}/{self.POSTGRES_DB}"

    @property
    def SYNC_DATABASE_URL(self) -> str:
        return self.ASYNC_DATABASE_URL.replace("asyncpg", "psycopg2")

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
