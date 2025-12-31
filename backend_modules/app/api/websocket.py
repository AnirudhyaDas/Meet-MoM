from fastapi import APIRouter, WebSocket
from app.services.stt_service import transcribe_audio

router = APIRouter()

@router.websocket("/ws/transcribe")
async def transcribe_ws(websocket: WebSocket):
    await websocket.accept()
    audio_buffer = b""

    try:
        while True:
            data = await websocket.receive_bytes()
            audio_buffer += data

            # process every few seconds
            if len(audio_buffer) > 16000 * 5:  # ~5 sec audio
                text = transcribe_audio(audio_buffer)
                await websocket.send_json({"text": text})
                audio_buffer = b""

    except Exception:
        await websocket.close()
