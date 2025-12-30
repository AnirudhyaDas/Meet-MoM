from fastapi import FastAPI
from app.api.websocket import router as ws_router
from app.api.meetings import router as meeting_router

app = FastAPI(title="Meet MoM Backend")

app.include_router(ws_router)
app.include_router(meeting_router)

@app.get("/")
def health_check():
    return {"status": "running"}
