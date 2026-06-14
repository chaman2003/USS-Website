<div align="center">

<img src="./public/logo-opt.webp" alt="Unity Software Solution Logo" width="120" />

# Unity Software Solution

**Corporate website & content marketing platform for USS — a Bengaluru-based software studio.**

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

[🌐 Live Site](https://unitysoftwaresolution.com) · [📬 Contact](https://unitysoftwaresolution.com/contact) · [📖 Blog](https://unitysoftwaresolution.com/blog) · [💼 Work](https://unitysoftwaresolution.com/work)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Pages & Routes](#-pages--routes)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Motion Engine](#-motion-engine)
- [Content System](#-content-system)
- [Services](#-services)
- [Portfolio](#-portfolio)
- [Blog](#-blog)
- [Team](#-team)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Performance & Accessibility](#-performance--accessibility)
- [SEO](#-seo)

---

## 🏢 Overview

This is the official marketing and corporate website for **Unity Software Solution (USS)** — a software development studio based in Bengaluru, India. The site serves four core purposes:

| Purpose | Description |
|---|---|
| 🎯 **Lead Generation** | Services showcase, portfolio case studies, and a Formspree-backed contact form |
| 🏅 **Credibility** | Team profiles, client work, a detailed engagement process, and company values |
| ✍️ **Content Marketing** | 32 long-form blog posts across 5 categories targeting the Indian tech/startup audience |
| 🧑‍💻 **Recruiting** | Careers page covering culture, internships, and open roles |

The visual identity is a **dark-luxe** aesthetic — near-black backgrounds, gold accents (`hsl(44, 80%)` scale), editorial serif headings (Fraunces), monospace labels (JetBrains Mono), ambient animated glows, and a distinctive 3D orbiting icon system on the homepage hero.

---

## 📄 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero orbital system, tech marquee, stats counter, 9-service bento grid, capability marquee, "Why USS" pillars, 5-step process, featured work |
| `/services` | **Services** | Full detail for all 9 services with sticky anchor navigation rail |
| `/about` | **About** | Company story, mission, customer segments, team cards, process timeline, values |
| `/work` | **Portfolio** | Case study cards + "USS Lab" AI demo section |
| `/work/[slug]` | **Case Study Detail** | Overview, objectives, tech groups, modules, architecture diagram, workflow |
| `/blog` | **Blog** | Posts grouped by category with sticky category rail |
| `/blog/[slug]` | **Blog Post** | Article with sticky TOC sidebar, structured data, back link |
| `/contact` | **Contact** | Formspree form, location info, social links |
| `/careers` | **Careers** | Culture, how we work, what we look for, open roles, internship program |
| `/faq` | **FAQ** | 6 categories, 22 Q&As, `FAQPage` JSON-LD structured data |
| `/privacy-policy` | **Privacy Policy** | GDPR-aligned policy (last updated June 2026) |
| `/terms-and-conditions` | **Terms** | T&Cs, governed by Indian law, jurisdiction: Bengaluru |
| `/404` | **Not Found** | Custom 404 with helpful navigation links |

---

## 🛠 Tech Stack

### Core Framework

| Tool | Version | Role |
|---|---|---|
| [Astro](https://astro.build) | `^5.12` | Static site framework — zero JS by default, island architecture |
| [TypeScript](https://www.typescriptlang.org) | `^5.8` | Strict mode throughout; `astro check` enforced |
| [Tailwind CSS v4](https://tailwindcss.com) | `^4.1` | Utility-first CSS via `@tailwindcss/vite` plugin |

### Integrations & Plugins

| Package | Purpose |
|---|---|
| `@astrojs/sitemap` | Auto-generated XML sitemap for SEO |
| `@tailwindcss/vite` | First-class Tailwind v4 Vite integration |
| Zod (via Astro) | Content collection schema validation |

### Dev & Test

| Package | Purpose |
|---|---|
| `vitest ^3.2` | Unit test runner |
| `happy-dom ^15` | DOM environment for contact form tests |
| `@testing-library/dom` | DOM querying utilities |
| `node-html-parser` | HTML parsing in tests |
| `wrangler ^4` | Cloudflare Workers / Pages tooling |

### External Services

| Service | Purpose |
|---|---|
| [Formspree](https://formspree.io) | Contact form submissions (honeypot + client-side validation) |
| Netlify / Vercel / Cloudflare | Deployment targets (all configs present) |

---

## 📁 Project Structure

```
uss/
├── public/                     # Static assets served at root
│   ├── logo.png / logo.webp
│   ├── logo-opt.png / .webp    # Optimised logo (used in header + hero)
│   ├── zoomed-logo.png
│   ├── og-default.jpg          # Default Open Graph image
│   ├── robots.txt
│   ├── _headers                # Cloudflare / Netlify HTTP security headers
│   └── people/                 # Team member photos
│       ├── sunil-b.jpg
│       ├── chaman-s.jpg
│       └── abhinav-karthik.jpg
│
├── src/
│   ├── components/
│   │   ├── fx/                 # Visual effect components
│   │   │   ├── GlowField.astro       # Ambient gold glow orbs (hero/section/subtle)
│   │   │   ├── Marquee.astro         # Dual-row infinite text marquee
│   │   │   └── TechMarquee.astro     # Dual-row tech-logo marquee (inline SVGs)
│   │   │
│   │   ├── layout/             # Site-wide chrome
│   │   │   ├── Header.astro          # Sticky navbar — glass-pill scroll morph + mobile menu
│   │   │   ├── Footer.astro          # Three-column link groups + social icons
│   │   │   ├── Logo.astro            # Brand lockup (emblem + wordmark)
│   │   │   ├── SkipLink.astro        # Accessibility skip-to-content
│   │   │   └── ThemeToggle.astro     # Light/dark toggle (localStorage, no-FOUC)
│   │   │
│   │   ├── seo/
│   │   │   └── SEOHead.astro         # Title, description, canonical, OG, Twitter cards
│   │   │
│   │   └── ui/                 # Reusable content components
│   │       ├── BlogPostCard.astro
│   │       ├── Button.astro          # primary / secondary / ghost + magnetic hover
│   │       ├── CaseStudyCard.astro   # Challenge / approach / outcome layout
│   │       ├── ClosingCTA.astro      # Shared page-end CTA band
│   │       ├── ContactForm.astro     # Formspree + honeypot + validation
│   │       ├── FaqItem.astro         # <details>/<summary> accordion
│   │       ├── PillarCard.astro      # Numbered card with hover accent line
│   │       ├── PlaceholderCard.astro # "Coming Soon" dashed placeholder
│   │       ├── ServiceCard.astro     # Service bento card (tilt + spotlight effects)
│   │       ├── ServiceIcon.astro     # Inline SVG icons per service ID
│   │       └── TeamMemberCard.astro  # Photo, role, bio, LinkedIn link
│   │
│   ├── content/
│   │   ├── config.ts                 # Zod schemas for blog + work collections
│   │   ├── blog/                     # 32 Markdown blog posts
│   │   └── work/                     # 2 JSON case study entries
│   │       ├── pvs-promoters.json
│   │       └── fashion-garment-platform.json
│   │
│   ├── data/                   # Typed static data modules
│   │   ├── services.ts               # 9 service definitions
│   │   ├── team.ts                   # 3 team member profiles
│   │   ├── pillars.ts                # 4 "Why USS" pillars
│   │   ├── processSteps.ts           # 5-step engagement process
│   │   ├── values.ts                 # 4 company values
│   │   └── faq.ts                    # 6 categories · 22 Q&A entries
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro          # Root HTML shell (fonts, theme, header, footer, motion)
│   │   └── BlogPostLayout.astro      # Blog article shell (TOC sidebar, structured data)
│   │
│   ├── pages/                  # File-based routing (13 routes + dynamic slugs)
│   │
│   ├── scripts/
│   │   └── motion.ts                 # Vanilla JS motion engine — zero dependencies
│   │
│   └── styles/
│       ├── global.css                # Tailwind + design tokens + keyframes + utilities
│       └── typography.css            # .rich-text prose styles for blog/legal pages
│
├── tests/                      # Vitest test suite
├── astro.config.ts
├── tsconfig.json
├── vitest.config.ts
├── netlify.toml
├── vercel.json
└── package.json
```

---

## 🎨 Design System

The entire design system lives in `src/styles/global.css` as a Tailwind v4 `@theme` block alongside custom CSS utilities and animations.

### Color Palette

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | `#fafaf9` | `#0a0a0a` | Page background |
| `--color-surface` | `#ffffff` | `#111111` | Card surfaces |
| `--color-border` | `#e5e5e5` | `#1f1f1f` | Borders, dividers |
| `--color-text` | `#1a1a1a` | `#e8e8e8` | Body text |
| `--color-text-muted` | `#737373` | `#737373` | Secondary text |
| `--color-gold` | `#c19315` | `#e9b935` | Primary brand accent |
| `--color-gold-muted` | `#c1931530` | `#e9b93520` | Subtle gold tints |

### Typography

| Font | Use |
|---|---|
| **Fraunces** (serif) | Display headings — editorial, high contrast |
| **Inter** (sans-serif) | Body text, UI labels |
| **JetBrains Mono** (monospace) | Code, eyebrow labels, data values |

### Custom Utilities

| Class | Effect |
|---|---|
| `text-gold-gradient` | Gold-to-amber gradient text fill |
| `eyebrow` | Uppercase monospace label styling |
| `grain` | SVG noise texture overlay |
| `spotlight` | Cursor-following radial glow (via JS) |
| `text-shimmer` | Animated shimmering text highlight |
| `full-bleed` | Full-viewport-width breakout |

### Keyframe Animations (12)

`aurora-drift` · `float-slow` · `shimmer` · `marquee-x` · `word-rise` · `pulse-glow` · `spin-slow` · `orbit-revolve` · `star-twinkle` · `orb-drift` · `halo-spin` · `hero-rise`

---

## ⚡ Motion Engine

`src/scripts/motion.ts` is a single vanilla TypeScript file loaded once from `BaseLayout`. It has **zero runtime dependencies** and drives all interactive behaviour:

| Function | Behaviour |
|---|---|
| `initScroll` | Batched `rAF` loop — header glass morph, scroll progress bar, parallax layers |
| `initReveal` | `IntersectionObserver` fade-in for `.reveal` elements |
| `initCounters` | Count-up animation for `[data-count]` stat numbers |
| `initSpotlight` | Cursor-following radial glow on `[data-spotlight]` cards |
| `initTilt` | 3D perspective tilt on `[data-tilt]` cards |
| `initMagnetic` | Scale-on-hover for `[data-magnetic]` buttons |
| `initScrollSpy` | Active section highlight for sticky anchor rails |
| `initOrbitTilt` | Pointer-driven 3D tilt for the hero orbital icon ring |
| `initOrbitVisibility` | Pauses all 80+ orbit CSS animations when hero is off-screen |

All DOM reads and writes are batched inside a single `requestAnimationFrame` loop. The 80-element hero orbit suspends automatically via `IntersectionObserver` when scrolled out of view.

---

## 📦 Content System

Powered by [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) with **Zod schemas** in `src/content/config.ts`.

### Blog Collection (`src/content/blog/`)

Markdown files with YAML frontmatter:

```yaml
title: "..."
description: "..."
pubDate: 2025-XX-XX
author: "Unity Software Solution"
tags: ["tag1", "tag2"]
category: "AI" # AI | Web Development | Startups | Cybersecurity | E-Commerce
```

**32 published posts** across 5 categories:

| Category | Posts |
|---|---|
| 🤖 AI | 7 |
| 🌐 Web Development | 7 |
| 🚀 Startups | 6 |
| 🔐 Cybersecurity | 6 |
| 🛒 E-Commerce | 6 |

### Work Collection (`src/content/work/`)

JSON files for portfolio case studies:

```json
{
  "title": "...",
  "slug": "...",
  "status": "live | in-progress",
  "summary": "...",
  "tech": ["Next.js", "MongoDB", "..."],
  "modules": [],
  "challenge": "...",
  "approach": "...",
  "outcome": "..."
}
```

---

## 🛡️ Services

USS offers 9 service lines, with **AI-Enabled Applications** flagged as the company's primary differentiator:

1. **Web Development** — Astro, Next.js, React, performance-first builds
2. **Mobile App Development** — Cross-platform native apps
3. **Custom Software Development** — Bespoke business logic and tooling
4. **AI-Enabled Applications** ⭐ — Voice agents, RAG pipelines, WhatsApp bots, LLM automation, Twilio/Plivo integrations
5. **ERP Systems** — Full business process automation
6. **E-Commerce Platforms** — Headless storefronts, D2C solutions
7. **API Integration** — Third-party connectors and webhooks
8. **Cloud Infrastructure & DevOps** — AWS/GCP, Docker, CI/CD pipelines
9. **Cybersecurity** — Secure development, audits, zero-trust architecture

---

## 💼 Portfolio

### PVS Promoters ✅ Live
> **Real estate business website** — [pvs-promoters.com](https://pvs-promoters.com)

- **Stack:** Next.js (SSR), React, MongoDB Atlas, JWT auth, Docker
- **Modules:** Home, About, Services, Projects/Gallery, Contact, Responsive nav
- USS's first completed and live client project

### Fashion Garment Platform 🔄 In Progress
> **Three-system fashion commerce ecosystem** (2026)

- **E-Commerce Storefront** — Customer-facing product catalogue and checkout
- **Agent/Reseller Portal** — MLM agent network with automatic commission calculation and referral-driven order flow
- **ERP Back-Office** — Inventory, order management, garment measurement records
- **Stack:** Next.js, Node.js, MongoDB, Razorpay, WhatsApp Business API, Docker

---

## 📝 Blog

32 long-form articles targeting the Indian tech and startup audience. Highlights include:

- *AI Agents in Production Workflows* — practical automation patterns
- *Astro Islands Architecture* — deep-dive on partial hydration
- *India DPDP Compliance Guide* — data privacy for Indian businesses
- *Zero-Trust Architecture for SMBs* — practical security hardening
- *India D2C E-Commerce Growth* — market trends and strategy
- *Bengaluru Startup Ecosystem* — local startup landscape

All posts include `BlogPosting` JSON-LD structured data for rich search results.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=20`
- **npm** `>=10`

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-org/uss-website.git
cd uss-website

# Install dependencies
npm install

# Copy env and fill in your Formspree endpoint
cp .env.example .env

# Start dev server
npm run dev
# → http://localhost:4321
```

### Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run `astro check` (TypeScript + Astro diagnostics) |
| `npm run test` | Run the Vitest test suite |

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in your values:

| Variable | Required | Description |
|---|---|---|
| `PUBLIC_FORMSPREE_ENDPOINT` | ✅ Yes | Formspree form endpoint URL — powers the `/contact` form |
| `RESEND_API_KEY` | ☑️ Optional | Resend API key for a server-side email fallback |
| `SITE_URL` | ☑️ Optional | Override the canonical site URL (defaults to `https://unitysoftwaresolution.com`) |

> **Never commit `.env`** — it is already in `.gitignore`.

---

## 🧪 Testing

Tests live in `tests/` and run with [Vitest](https://vitest.dev) in a `happy-dom` environment.

```bash
npm run test
```

The suite covers the contact form's client-side validation logic using `@testing-library/dom` and `node-html-parser` for HTML assertions.

---

## 📡 Deployment

The project is configured for three deployment targets — pick one.

### Netlify (recommended)

`netlify.toml` is pre-configured with build settings, security headers, and a custom 404 redirect.

```
Build command:  npm run build
Publish dir:    dist
Node version:   20
```

### Vercel

`vercel.json` is pre-configured with equivalent security headers and build settings.

```bash
vercel deploy
```

### Cloudflare Pages

`public/_headers` provides Cloudflare-compatible HTTP security headers.

```bash
npx wrangler pages deploy dist
```

All three configs set these security headers on every route:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## ♿ Performance & Accessibility

- **Zero framework JS** — Astro outputs pure HTML/CSS; `motion.ts` is the only JS bundle (~5 KB)
- **Skip link** — visible-on-focus skip-to-content for keyboard users
- **ARIA** — `aria-current`, `aria-label`, `aria-expanded` on all interactive elements
- **Keyboard trap** — Mobile menu traps focus; `Escape` closes it
- **Reduced motion** — Full `@media (prefers-reduced-motion: reduce)` override block disables all animations
- **Orbit pause** — Hero's 80+ CSS animations suspend via `IntersectionObserver` when off-screen, saving GPU cycles
- **No FOUC** — Theme applied by an inline `<script>` before first paint using `localStorage`
- **rAF batching** — All scroll and pointer handlers batch DOM reads/writes in one `requestAnimationFrame` to avoid layout thrashing

---

## 🔍 SEO

- **Per-page meta** — unique `<title>`, `<meta name="description">`, canonical URL on every page
- **Open Graph + Twitter Cards** — via `SEOHead.astro`
- **Sitemap** — auto-generated at `/sitemap-index.xml` via `@astrojs/sitemap`
- **Structured data**
  - `FAQPage` JSON-LD on `/faq`
  - `BlogPosting` JSON-LD on each blog post
- **robots.txt** — allows all crawlers, points to sitemap

---

<div align="center">

Made with ☕ by Unity Software Solution

[unitysoftwaresolution.com](https://unitysoftwaresolution.com) · [LinkedIn](https://linkedin.com/company/unity-software-solution) · [contact@unitysoftwaresolution.com](mailto:contact@unitysoftwaresolution.com)

</div>
