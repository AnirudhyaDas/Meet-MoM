from supabase import create_client, Client
from backend.app.config import settings
import logging

logger = logging.getLogger(__name__)


class SupabaseClient:
    _instance: Client = None

    @classmethod
    def get_client(cls) -> Client:
        if cls._instance is None:
            try:
                cls._instance = create_client(
                    settings.SUPABASE_URL,
                    settings.SUPABASE_ANON_KEY
                )
                logger.info("Supabase client initialized successfully")
            except Exception as e:
                logger.error(f"Failed to initialize Supabase client: {e}")
                raise
        return cls._instance

    @classmethod
    def get_admin_client(cls) -> Client:
        """Get client with service role key for admin operations"""
        if not settings.SUPABASE_SERVICE_ROLE_KEY:
            raise ValueError("SUPABASE_SERVICE_ROLE_KEY not configured")

        return create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_SERVICE_ROLE_KEY
        )

    @classmethod
    async def test_connection(cls) -> bool:
        """Test Supabase connection"""
        try:
            client = cls.get_client()
            # Simple query to test connection
            result = client.table('users').select('count', count='exact').limit(1).execute()
            return True
        except Exception as e:
            logger.error(f"Supabase connection test failed: {e}")
            return False


# Global supabase client instance
supabase = SupabaseClient.get_client()