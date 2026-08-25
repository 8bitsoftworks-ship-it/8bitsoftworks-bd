# Design: Admin Showcase Panel, Email Attachments Fix, UI Polish

Date: 2026-08-24
Project: 8BiT Softworks (React + Vite + Tailwind, static site)

## 1. Admin panel + live showcase (localStorage)

Static site, no backend. Approved approach: localStorage persistence.

### Routes
- `/admin` — Admin panel. Gated by a passcode (`STUDIO.adminPasscode`, default
  `8bit-admin`, client-side only — an acknowledged limit of static hosting).
- `/showcase` — Public gallery of showcases.

### Admin panel (`src/pages/Admin.jsx`)
- Passcode gate; "Unlock" sets `localStorage["8bit_admin_authed"] = "1"`.
- Add form: URL (validated + normalized to `https://`), title (auto-derived
  from domain when blank), category (datalist of known categories), optional
  description, featured toggle. Live iframe preview of the entered URL before
  adding.
- Manage list of admin-added entries: feature/unfeature, inline edit
  (title/category/description), remove. Entries stored under
  `localStorage["8bit_showcases_v1"]`.
- Seeded entries (the internal demo sites) are read-only and always shown on
  the public page.

### Data helpers (`src/data/showcases.js`)
- `normalizeUrl(input)` — prepends `https://`, validates via `URL`.
- `domainOf(url)` — hostname minus `www.`.
- `loadShowcases()`, `saveShowcases(list)` — JSON in localStorage.
- `seededShowcases` — small curated set of the internal demo sites.

### Showcase page (`src/pages/Showcase.jsx`)
- Header + category filter + count.
- Grid of `ShowcaseCard`s: seeds first, then stored entries.

### Showcase card (`src/components/ShowcaseCard.jsx`)
- Fake browser chrome (URL bar) + live `<iframe>` of the site index
  (lazy-loaded, `referrerPolicy="no-referrer"`).
- Best-effort blocked-embed detection via `IntersectionObserver` + load timer;
  fallback overlay offers "Open directly".
- Persistent "Visit site ↗" action (opens the real URL in a new tab).

## 2. Email attachments fix (form service)

`mailto:` cannot carry attachments. Approved approach: free form backend
(FormSubmit.co AJAX) that emails the recipient with real file attachments.

### `src/data/siteConfig.js`
- Add `FORM_ENDPOINT = https://formsubmit.co/ajax/{STUDIO.email}` (kept in sync
  with the studio email).
- Add `ADMIN.passcode`.

### `src/pages/Custom.jsx`
- Submit via `fetch` POST (FormData: all fields + selected files +
  `_subject`, `_template=table`, `_replyto`).
- On success: existing success screen (message updated).
- On failure: fall back to `mailto:` with selected filenames listed, so a
  submission is never lost. Also surface any API error message.
- File input gets `name="attachment"` and `multiple`.

### `src/pages/Customize.jsx`
- Same pattern for the logo upload: include the file in FormData; fallback to
  the existing `mailto:` on failure.

### One-time owner setup
- FormSubmit emails an activation link on first submission; the owner clicks it
  once. After that, submissions (with attachments) arrive at the Gmail inbox.

## 3. UI polish (identity preserved)

No color changes; same fonts, sharp corners, mono labels, grid texture.

### `src/index.css` component classes
- `.btn-primary`, `.btn-ghost`, `.btn-dark-ghost`, `.btn-sm`, `.chip`,
  `.chip-on`, `.field`, `.field-sm`, `.label` — applied across pages for
  consistent hover/active/disabled/focus states.

### Component / page polish
- `WebsiteCard`: subtle hover lift (soft shadow + border darken), consistent
  buttons.
- `Nav`: add Showcase link; refine scroll state; tighter gaps.
- `Footer`: add Showcase + Admin links; refine promo strip and bottom bar.
- `Home`: hero stats strip (catalog count, free-hosting months, reply time).
- Forms (Custom, Customize, Contact, Checkout, Websites, WebsiteDetail, Admin):
  unify inputs, chips, and buttons via the component classes.
- Showcase: loading and empty states.

## Verification
- `npm run lint` (oxlint) and `npm run build` pass.
- Manual: dev server, add a showcase on `/admin`, confirm it appears on
  `/showcase`, confirm card preview + visit flow.
