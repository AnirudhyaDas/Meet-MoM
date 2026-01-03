from datetime import datetime

def format_transcript(text: str):
    return {
        "timestamp": datetime.utcnow().isoformat(),
        "text": text
    }
