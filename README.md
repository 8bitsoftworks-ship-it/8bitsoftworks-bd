# 8BiT Softworks

A premium ready-made website studio: browse a catalog of finished websites,
preview them live, customize them, or request a fully custom build.

Built with **React + Vite + Tailwind CSS**, deployable for free on Cloudflare
Pages (or any static host).

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
  demos/                   # 12 fully built, visually distinct demo websites
                           # (Sora House, Northline, Kairo, Arc Supply,
                           # Forma, Field Notes, Mono Studio, Ember & Grain,
                           # Vellore, Healwise, Ledger & Pine, Openlot) —
                           # reachable at /demos/:id
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

## Deploying to Cloudflare Pages (free)

1. Push this project to a GitHub repository.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** and
   select the repo.
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Cloudflare will give you a free `*.pages.dev` URL immediately;
   a custom domain can be attached later from the same dashboard.

`public/_redirects` is included so client-side routing (React Router) works
correctly — all paths fall back to `index.html`. No build-time configuration
file is required for Cloudflare Pages; the `public/` folder is copied to the
root of the published site.

### Alternative free hosts

- **Netlify** — works too; a `netlify.toml` is kept in the repo if you ever
  want to switch (build command `npm run build`, publish dir `dist`).
- **GitHub Pages** — works too, but you'll need to set `base` in
  `vite.config.js` to your repo name and add a `404.html` → `index.html`
  redirect trick for SPA routing.

## Payments

Checkout (`src/pages/Checkout.jsx`) is a functional purchase flow:
- **Payment methods**: RedotPay (UID `1899721816`), bKash and Nagad
  (`01325575123`), selectable in the checkout.
- **Verification details**: RedotPay requires a Sender UID + Transaction ID;
  bKash/Nagad require the sender's phone number + Transaction ID.
- **Hosting**: every purchase includes 3 months free hosting, arranged in
  collaboration with 8BiT Softworks.
- **Footer-credit discount**: buyers can opt in to a 2% discount by agreeing
  to a small "Designed by 8BiT Softworks" credit in their site footer.
- **Submission**: confirming an order opens a pre-filled email to
  `8bit.softworks@gmail.com` with the full order summary, which the studio
  then verifies manually (no payment provider / backend required for the
  static site).

All account details live in `src/data/siteConfig.js` — edit them there and
they update everywhere.

## Forms & email

The Custom Builds, Customize, Contact, and Checkout forms all submit by
opening a pre-filled email to `8bit.softworks@gmail.com` (set in
`src/data/siteConfig.js`). To switch to a form backend later, replace the
`mailto:` handlers with your provider's POST endpoint.

## Environment variables

None are required for the current build. If you add a payment provider,
form backend (e.g. Formspree, Resend), or analytics later, document the
required keys here and load them via Vite's `import.meta.env.VITE_*`
convention.

## Notes on content

Website names, prices, and demo content (Sora House, Northline, Kairo, Arc
Supply, Forma, Field Notes, Mono Studio, Ember & Grain, Vellore, Healwise,
Ledger & Pine, Openlot) are original placeholder businesses created for
this project — not real clients. Swap them out for real case studies as the
studio takes on real work.
