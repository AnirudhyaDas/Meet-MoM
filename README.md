# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend Folder Structure 
```bash
meetnotes-backend/
├── app/
│   ├── __init__.py
│   ├── main.py                    # FastAPI application entry
│   ├── config.py                  # Configuration settings
│   ├── dependencies.py            # Dependency injection
│   ├── database.py                # Database connection
│   ├── models/                    # SQLAlchemy models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── meeting.py
│   │   ├── transcript.py
│   │   └── summary.py
│   ├── schemas/                   # Pydantic schemas
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── meeting.py
│   │   └── summary.py
│   ├── api/                       # API routes
│   │   ├── __init__.py
│   │   ├── v1/                    # API version 1
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── auth.py
│   │   │   │   ├── meetings.py
│   │   │   │   ├── transcripts.py
│   │   │   │   └── summaries.py
│   │   │   └── api.py             # API router
│   │   └── websocket.py           # WebSocket endpoints
│   ├── core/                      # Core business logic
│   │   ├── __init__.py
│   │   ├── security.py            # Authentication & authorization
│   │   └── exceptions.py          # Custom exceptions
│   ├── services/                  # Business logic services
│   │   ├── __init__.py
│   │   ├── audio_service.py       # Audio processing
│   │   ├── transcription_service.py
│   │   ├── summary_service.py
│   │   ├── meeting_service.py
│   │   └── storage_service.py     # Cloud storage
│   ├── workers/                   # Celery tasks/background workers
│   │   ├── __init__.py
│   │   ├── tasks.py
│   │   └── celery_app.py
│   ├── ai/                        # AI/ML components
│   │   ├── __init__.py
│   │   ├── speech_to_text.py
│   │   ├── summarizer.py
│   │   ├── nlp_processor.py
│   │   └── models/                # ML model loading & inference
│   │       ├── __init__.py
│   │       └── whisper_handler.py
│   └── utils/                     # Utilities
│       ├── __init__.py
│       ├── file_handlers.py
│       ├── time_utils.py
│       └── validators.py
├── alembic/                       # Database migrations
│   ├── versions/
│   └── alembic.ini
├── tests/                         # Test suite
│   ├── __init__.py
│   ├── conftest.py
│   ├── test_api/
│   └── test_services/
├── requirements/
│   ├── base.txt
│   ├── dev.txt
│   └── prod.txt
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── nginx/
├── .env.example
├── .gitignore
├── pyproject.toml
├── Makefile
└── README.md
