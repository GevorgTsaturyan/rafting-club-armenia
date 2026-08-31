# Rafting Club Armenia

Production-ready, multilingual, SEO-first website for **Rafting Club Armenia** —
guided whitewater rafting on the **Debed River** in Lori, Armenia.

Built with **Nuxt 3 + Vue 3 + TypeScript**, statically generated (no server
runtime required), and deployable to **Cloudflare Pages** (or any static host).

- Languages: **English** (default), **Armenian**, **Russian**
- Localized URLs: `/en/…`, `/hy/…`, `/ru/…`
- Technical SEO: canonical, hreflang (+ x-default), sitemap, robots, JSON-LD, OG/Twitter
- No invented business data — prices, phone, email, reviews etc. are placeholders

---

## Requirements

- **Node.js ≥ 18.18** (developed on 18.20). Node 20+ also works.
- npm (or pnpm/yarn)

> This project pins `nuxi` and `nitropack` (see `overrides` in `package.json`)
> to versions compatible with Node 18. On Node 20+ you can remove those overrides.

## Getting started

```bash
npm install          # install dependencies
npm run dev          # local dev server → http://localhost:3000 (redirects to /en)
```

## Build (static)

```bash
npm run generate     # outputs a fully static site to dist
npx serve dist   # preview the static build locally
```

There is **no** `npm start` / SSR server in production — the site is 100% static.

## Deploy to Cloudflare Pages

**Option A — Git integration (recommended)**

| Setting | Value |
| --- | --- |
| Build command | `npm run generate` |
| Build output directory | `dist` |
| Node version | set `NODE_VERSION=18.20.0` (or `20`) in env vars |

**Option B — Direct upload / Wrangler**

```bash
npm run generate
npx wrangler pages deploy dist
```

`public/_redirects` sends `/` → `/en/` (server 302). `public/index.html` is a
host-agnostic fallback for any host that doesn't read `_redirects`.

## Environment variables

Copy `.env.example` → `.env`. All are optional; the site builds without them.

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_SITE_URL` | Canonical base URL (default `https://raftingclubarmenia.com`) |
| `NUXT_PUBLIC_GA_ID` | Google Analytics 4 ID. Empty = analytics fully disabled |
| `NUXT_PUBLIC_CONTACT_ENDPOINT` | Booking/contact form POST endpoint. Empty = form runs in offline/validate mode with a `mailto:` fallback |

## Project structure

```
config/site.ts          # single source of truth for business data + placeholders
content/{en,hy,ru}.ts    # long-form localized page content (typed)
locales/{en,hy,ru}.json  # short UI micro-copy (nav, buttons, a11y labels)
types/content.ts         # content model shared by all locales
components/               # reusable UI (header, footer, hero, tours, gallery, forms…)
composables/             # SEO, structured data, content, page-meta helpers
pages/                   # one file per page; localized slugs set in nuxt.config
public/images/           # drop real photos here (see public/images/README.md)
```

## What you still need to provide

Everything below is isolated so it can be filled in without touching component code:

1. **Business details** — edit `config/site.ts` (search for `PLACEHOLDER_`):
   phone, email, WhatsApp, address, map URL, social links, geo coordinates.
2. **Prices & tour durations** — currently "on request". Set real values in
   `content/{en,hy,ru}.ts` (`tours[].duration`, `prices.rows[].price`).
3. **Photographs** — add the files listed in `public/images/README.md`
   (filenames are pre-set and SEO-friendly; a gradient placeholder shows until then).
4. **Logo & icons** — replace `public/images/logo/rafting-club-armenia-logo.svg`
   and add `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, plus a
   `1200×630` `public/images/og/rafting-club-armenia-og.jpg`.
5. **Analytics** — set `NUXT_PUBLIC_GA_ID` when you have a GA4 property.
6. **Contact backend** — set `NUXT_PUBLIC_CONTACT_ENDPOINT` (e.g. a serverless
   function, Formspree, Web3Forms) to enable direct form submission.

## Post-launch SEO checklist (outside the code)

- Verify the domain in **Google Search Console**; submit `/sitemap_index.xml`.
- Add the site to **Bing Webmaster Tools**.
- Create/claim a **Google Business Profile** (huge for local + map visibility).
- Build genuine backlinks (tourism directories, partners, travel blogs).
- Add real reviews/ratings only through a legitimate source — then structured
  data for `AggregateRating` can be added (do not fabricate).
- Keep publishing useful content (seasons, guides, trip reports).
