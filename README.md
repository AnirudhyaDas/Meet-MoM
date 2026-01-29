# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📁 Featured Project Architecture (meetMoM-backend)

```bash
meetMoM-backend/
├── 🚀 app/                      # Main Application Logic (FastAPI)
│   ├── ⚡ supabase_client.py    # Supabase initialization
│   ├── 🧠 models/               # Pydantic models for Supabase
│   └── 🏗️ main.py                # Entry point
├── 🧪 tests/                    # Pytest suite
├── 🐳 docker-compose.yml        # Container orchestration
└── 📄 README.md
<details>
  <summary><b>📂 View full directory tree</b></summary>
  └── 📂 app/
      ├── ⚙️ config.py              # Configuration settings
      ├── 🧪 schemas/               # Request/Response validation
      ├── 🛣️ api/                   # API v1 & WebSocket routes
      │   └── v1/endpoints/         # Auth, Meetings, Transcripts
      ├── 💼 services/              # Business logic (Supabase Service)
      ├── 🧠 ai/                    # ML components (Speech-to-Text)
      ├── 🔐 auth/                  # Supabase Auth integration
      ├── 👷 workers/               # Background tasks
      └── 🛠️ utils/                 # File & Time utilities
</details> ```
