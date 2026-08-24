# 8BiT Softworks

A premium ready-made website studio: browse a catalog of finished websites,
preview them live, customize them, or request a fully custom build.

Built with **React + Vite + Tailwind CSS**, deployable for free on Netlify
(or any static host).

## Add your logo

Drop your `logo.jpg` into the `public/` folder before deploying:

```
public/logo.jpg
```

It's already referenced in the nav, footer, and favicon (`src/components/Nav.jsx`,
`src/components/Footer.jsx`, `index.html`). A square image works best.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/websites.js       # the website catalog — add new products here
  components/             # Nav, Footer, WebsiteCard, PreviewFrame, DemoBadge
  pages/                   # Home, Websites (marketplace), WebsiteDetail,
                           # Custom, Customize, Checkout, About, HowItWorks,
                           # Contact, NotFound
  demos/                   # 6 fully built, visually distinct demo websites
                           # (Sora House, Northline, Kairo, Arc Supply,
                           # Forma, Field Notes) — reachable at /demos/:id
```

### Adding a new ready-made website

1. Add an entry to the `websites` array in `src/data/websites.js`.
2. Add a matching mini-preview composition in
   `src/components/PreviewFrame.jsx` (used on cards, the homepage index,
   and product pages) — give it its own `variant` key so it doesn't look
   like a reused template.
3. Optionally build a full interactive demo page under `src/demos/` and
   route it in `src/App.jsx`, then set `hasFullDemo: true` and `demoUrl` on
   the catalog entry.

Prices, categories, and copy all live in that one data file — nothing about
the catalog is hard-coded into the marketplace or product-page components.

## Deploying to Netlify (free)

1. Push this project to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub** and
   select the repo.
3. Build settings are already defined in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify will give you a free `*.netlify.app` URL immediately;
   a custom domain can be attached later from the same dashboard.

`public/_redirects` is included so client-side routing (React Router) works
correctly on Netlify's static hosting — all paths fall back to `index.html`.

### Alternative free hosts

- **GitHub Pages** — works too, but you'll need to set `base` in
  `vite.config.js` to your repo name and add a `404.html` → `index.html`
  redirect trick for SPA routing.
- **Cloudflare Pages** — same build command/output directory as Netlify;
  no extra config needed beyond the build settings above.

## Payments

Checkout (`src/pages/Checkout.jsx`) is built as a full purchase flow —
website selection, customer details, customization choice, order summary,
payment step, confirmation — but the payment step is intentionally a
placeholder. No payment provider is wired up. To go live, integrate
Stripe, Paddle, Polar, or Lemon Squeezy at that step (the flow is already
structured to drop a provider's checkout/embed in as step 5).

## Environment variables

None are required for the current build. If you add a payment provider,
form backend (e.g. Formspree, Resend), or analytics later, document the
required keys here and load them via Vite's `import.meta.env.VITE_*`
convention.

## Notes on content

Website names, prices, and demo content (Sora House, Northline, Kairo, Arc
Supply, Forma, Field Notes, Mono Studio, Ember & Grain) are original
placeholder businesses created for this project — not real clients. Swap
them out for real case studies as the studio takes on real work.
