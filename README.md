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
backend/
├── 📂 app/
│   ├── 🚀 main.py                # FastAPI application entry
│   ├── ⚙️ config.py              # Configuration settings
│   ├── 🛠️ dependencies.py        # Dependency injection
│   ├── 🗄️ database.py            # Database connection (PostgreSQL)
│   ├── 🧠 ai/                    # AI/ML components (Whisper & NLP)
│   │   ├── 🎙️ speech_to_text.py
│   │   └── 📝 summarizer.py
│   ├── 🏗️ models/                # SQLAlchemy models
│   ├── 🧪 schemas/               # Pydantic schemas (Validation)
│   ├── 🛣️ api/                   # API routes & WebSockets
│   ├── 💼 services/              # Core Business Logic
│   └── 👷 workers/               # Celery tasks / Background jobs
├── 💾 alembic/                   # Database migrations
├── 🧪 tests/                     # Pytest suite
├── 🐳 docker/                    # Docker & Nginx config
├── 📋 requirements/              # Dependency management
└── 📄 README.md
