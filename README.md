# naoto-shima

**Naoto Shima — Hopepage.** 島 直人の二言語（JP / EN）パーソナルサイト。
[naoto-shima.vercel.app](https://naoto-shima.vercel.app/) の内容を、Phantom スタイルリファレンス
（Aubergine `#3c315b` × Ghost Lavender `#e2dffe` のモノクロマティックな紫、weight 350 の軽いタイポグラフィ、
100px のピル型ナビ／ボタン、24px 角丸カード、フラットな面、ゴーストマスコット）で再構築し、
Cloudflare Workers の静的アセット配信で本番稼働させています。

## Stack

- **React 18 + TypeScript**, built with **Vite** (multi-page: `/` and `/case-aiops`)
- Pure CSS with design tokens as custom properties (`src/styles.css`) — no CSS framework
- **Vitest + Testing Library** for component tests
- **Cloudflare Workers static assets** via Wrangler (`wrangler.jsonc`), deployed by GitHub Actions

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173  (/ and /case-aiops)
```

## Common commands

| Command             | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR.                               |
| `npm run build`     | Type-check and build the static site into `dist/`.      |
| `npm run preview`   | Serve the production build locally (port 4173).         |
| `npm run lint`      | ESLint.                                                 |
| `npm run typecheck` | `tsc --noEmit`.                                         |
| `npm test`          | Vitest component tests.                                 |
| `npm run deploy`    | Build and `wrangler deploy` to Cloudflare.              |
| `npm run cf:dev`    | Serve `dist/` through the local Workers runtime.        |

## Project layout

```
index.html            Top page entry
case-aiops.html       Case study page entry (served at /case-aiops)
public/assets/        Portrait, SENSUI photo, favicons, OG image
public/_headers       Cloudflare static-asset headers
public/404.html       Custom not-found page
src/content.ts        Bilingual content dictionary (single source of truth)
src/styles.css        Phantom tokens + component styles
src/components/       Ghost mascot, pills/tags, header, page sections
src/pages/            HomePage, CasePage
wrangler.jsonc        Cloudflare Workers static-assets config
.github/workflows/    CI (PRs) and deploy (main → Cloudflare)
```

## Deployment (Cloudflare)

The site is deployed as a **Workers static-assets project** named `naoto-shima`.

### Automatic (GitHub Actions)

Every push to `main` runs lint / typecheck / tests / build and then `wrangler deploy`.
Add these repository secrets (Settings → Secrets and variables → Actions):

| Secret                  | Value                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | API token with the **Workers Scripts: Edit** permission (the "Edit Cloudflare Workers" template works). |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID shown in the Cloudflare dashboard sidebar (Workers & Pages → Overview).  |

### Manual

```bash
export CLOUDFLARE_API_TOKEN=...   # or `npx wrangler login`
export CLOUDFLARE_ACCOUNT_ID=...
npm run deploy
```

The first deploy creates `https://naoto-shima.<your-subdomain>.workers.dev`.
To serve a custom domain, add a `routes` entry with `custom_domain: true` to `wrangler.jsonc`
(or attach the domain under Workers & Pages → naoto-shima → Settings → Domains & Routes).

## Design reference

See `DESIGN.md` for the Phantom style reference this build follows (tokens, type scale, components, do's and don'ts).
