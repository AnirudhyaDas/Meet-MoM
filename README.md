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
<details open>
  <summary><b>Click to expand project structure 📂</b></summary>
  
```bash
meetMoM-backend/
├── app/
│   ├── __init__.py
│   ├── main.py                    # FastAPI application entry
│   ├── config.py                  # Configuration settings
│   ├── dependencies.py            # Dependency injection
│   ├── supabase_client.py         # Supabase client setup
│   ├── models/                    # Pydantic models for Supabase
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── meeting.py
│   │   ├── transcript.py
│   │   └── summary.py
│   ├── schemas/                   # Request/Response schemas
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── meeting.py
│   │   └── summary.py
│   ├── api/                       # API routes
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── auth.py
│   │   │   │   ├── meetings.py
│   │   │   │   ├── transcripts.py
│   │   │   │   ├── summaries.py
│   │   │   │   └── realtime.py
│   │   │   └── api.py
│   │   └── websocket.py
│   ├── services/                  # Business logic services
│   │   ├── __init__.py
│   │   ├── supabase_service.py    # Supabase operations
│   │   ├── audio_service.py
│   │   ├── transcription_service.py
│   │   ├── summary_service.py
│   │   ├── meeting_service.py
│   │   └── storage_service.py     # Supabase Storage
│   ├── workers/                   # Background workers
│   │   ├── __init__.py
│   │   └── tasks.py
│   ├── ai/                        # AI/ML components
│   │   ├── __init__.py
│   │   ├── speech_to_text.py
│   │   ├── summarizer.py
│   │   └── nlp_processor.py
│   ├── auth/                      # Authentication
│   │   ├── __init__.py
│   │   ├── supabase_auth.py
│   │   └── dependencies.py
│   └── utils/                     # Utilities
│       ├── __init__.py
│       ├── file_handlers.py
│       ├── time_utils.py
│       └── validators.py
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── test_api/
├── requirements/
│   ├── base.txt
│   ├── dev.txt
│   └── prod.txt
├── docker-compose.yml
├── .env.example
├── .gitignore
├── pyproject.toml
├── Makefile
└── README.md
