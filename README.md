# naoto-shima

**Island Notes** — a small full-stack demo app used to exercise the Cloud Agent
development environment. Visitors can post a short note and see everyone's notes.

## Stack

- **web** — React 18 + TypeScript, built with Vite.
- **server** — Express 4 + TypeScript REST API, notes persisted to a JSON file.
- npm **workspaces** tie the two packages together.

## Prerequisites

- Node.js >= 20 (developed against Node 22).

## Getting started

```bash
npm install          # install all workspace dependencies
npm run dev          # start API (:3001) and web dev server (:5173) together
```

Then open http://localhost:5173. The Vite dev server proxies `/api/*` to the
API on port 3001.

## Common commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run the API and web dev servers in parallel. |
| `npm run build` | Type-check + build both workspaces. |
| `npm run lint` | Lint the whole repo with ESLint. |
| `npm run typecheck` | Type-check both workspaces. |
| `npm test` | Run the server (Vitest + Supertest) and web (Vitest + Testing Library) tests. |

## API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check. |
| `GET` | `/api/notes` | List notes (newest first). |
| `POST` | `/api/notes` | Create a note. Body: `{ "author": string, "message": string }`. |
