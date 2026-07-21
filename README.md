<div align="center">

<img src="./public/logo-opt.webp" alt="Unity Software Solution Logo" width="120" />

# Unity Software Solution

**Corporate website & content marketing platform for USS — a Bengaluru-based software studio.**

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)

[🌐 Live Site](https://unitysoftwaresolution.com) · [📬 Contact](https://unitysoftwaresolution.com/contact) · [📖 Blog](https://unitysoftwaresolution.com/blog) · [💼 Work](https://unitysoftwaresolution.com/work)

</div>

---

## Getting Started

### Prerequisites

- **Node.js** `>=20`
- **npm** `>=10`

### Install & Run

```bash
git clone https://github.com/your-org/uss-website.git
cd uss-website
npm install
cp .env.example .env
npm run dev
# → http://localhost:4321
```

### Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | TypeScript + Astro diagnostics |
| `npm run test` | Run Vitest test suite |

---

## Environment Variables

Copy `.env.example` to `.env`:

| Variable | Required | Description |
|---|---|---|
| `PUBLIC_FORMSPREE_ENDPOINT` | ✅ | Formspree form endpoint for `/contact` |
| `RESEND_API_KEY` | ☑️ | Optional server-side email fallback |
| `SITE_URL` | ☑️ | Override canonical URL (defaults to `https://unitysoftwaresolution.com`) |

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| [Astro](https://astro.build) | `^5.12` | Static site framework |
| [TypeScript](https://www.typescriptlang.org) | `^5.8` | Strict mode throughout |
| [Tailwind CSS v4](https://tailwindcss.com) | `^4.1` | Utility-first CSS via Vite plugin |

---

## Deployment

### Cloudflare Pages

```bash
npx wrangler pages deploy dist
```

### Netlify

`netlify.toml` is pre-configured. Build command: `npm run build`, publish dir: `dist`.

### Vercel

`vercel.json` is pre-configured. Run `vercel deploy`.

---

<div align="center">

Made with ☕ by Unity Software Solution

[unitysoftwaresolution.com](https://unitysoftwaresolution.com) · [uss@unitysoftwaresolution.com](mailto:uss@unitysoftwaresolution.com)

</div>
