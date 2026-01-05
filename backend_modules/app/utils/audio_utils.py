import subprocess
import tempfile

def convert_webm_to_wav(chunks):
    with tempfile.NamedTemporaryFile(suffix=".webm", delete=False) as webm:
        for chunk in chunks:
            webm.write(chunk)

    wav_file = tempfile.NamedTemporaryFile(suffix=".wav", delete=False)

    subprocess.run([
        "ffmpeg",
        "-y",
        "-i", webm.name,
        "-ac", "1",
        "-ar", "16000",
        wav_file.name
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    return wav_file.name
