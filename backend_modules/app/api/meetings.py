from fastapi import APIRouter
from app.services.summary_service import generate_summary

router = APIRouter(prefix="/meetings")

@router.post("/{meeting_id}/summary")
def get_summary(meeting_id: str, transcript: str):
    summary = generate_summary(transcript)
    return summary
