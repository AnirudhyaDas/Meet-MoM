import whisper

model = whisper.load_model("medium")

def transcribe(wav_path: str) -> str:
    result = model.transcribe(wav_path, fp16=False)
    return result["text"]
