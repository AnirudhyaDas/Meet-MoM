from fastapi import FastAPI

app = FastAPI(title="Meet MoM Backend")

@app.get("/")
def health_check():
    return {"status": "running"}

