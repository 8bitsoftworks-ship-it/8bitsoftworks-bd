# Design: Customer Accounts, Demo Redesign + New Demos, Expanded Customization

Date: 2026-08-24
Project: 8BiT Softworks (React + Vite + Tailwind, static site)

## 1. Customer accounts (client-side)

Static site, no backend. Accounts persist in localStorage; passwords hashed
with SHA-256 via Web Crypto (never stored plaintext).

### `src/data/auth.js`
- `signUp({ name, email, password })` — validates, rejects duplicate email,
  hashes password, stores user, opens a session.
- `logIn({ email, password })` — verifies hash, opens session.
- `logOut()`, `getCurrentUser()`, `useAuth()` hook (listens to an
  `8bit_auth_change` event + `storage` events).
- Favorites: `toggleFavorite(siteId)`, `isFavorite(siteId)`.
- Orders: `addOrder(order)` — recorded on the signed-in account.

Storage keys: `8bit_users_v1`, `8bit_session_v1`.

### Pages / wiring
- `/login` — "Sign in" / "Create account" toggle, validation + inline errors,
  redirects back to the originating page (favorites route here when signed out).
- `/account` — profile (name/email), logout, saved websites grid, order history.
- Website cards + detail page get a "Save" toggle.
- Checkout `confirmOrder` records the order when signed in.
- Nav shows Sign in (signed out) / Account (signed in); footer links to both.

## 2. Demo redesign + 4 new demos

### Redesign all 12 existing demos (`src/demos/*.jsx`)
Rich, non-generic layouts: oversized display type, layered CSS-built imagery
(gradients + repeating patterns + dot grids + radial glows — no flat gradient
blocks, no external images), 5-7 sections each (stats, services/features,
gallery grids, testimonials, pricing/process, contact/footer CTA), asymmetric
grids, hover interactions, responsive. Niche identity + accent + theme kept.

### 4 new demos, each integrated into catalog + card previews + routes
| id | Name | Category | Accent | Theme | Preview variant |
|----|------|----------|--------|-------|-----------------|
| barrett-cole | Barrett & Cole | Legal | `#9A6B4F` | light | legal |
| fetch-club | Fetch Club | Pet Care | `#E8763B` | light | petcare |
| harbor-hops | Harbor & Hops | Brewery | `#D89A3C` | dark | brewery |
| station-one | Station One | Coworking | `#5B7DB1` | light | coworking |

Catalog entries added to `src/data/websites.js` (+ new categories), new mini
previews in `src/components/PreviewFrame.jsx`, routes in `src/App.jsx`.

## 3. Expanded customization (`src/pages/Customize.jsx`)

### New design controls
- 8 font presets (add Condensed, Neo-Grotesk, Rounded Sans, Elegant Serif).
- Spacing density: Compact / Comfortable / Spacious.
- Hero layout: Left aligned / Centered / Split / Overlay.
- Corner style: Sharp / Soft / Rounded (buttons, cards, images).
- Section ordering: move up/down across About, Services, Testimonials, Contact.
- Animation: Subtle / None.

### New content controls
- About: title + paragraph.
- Services: 3 editable cards (name + description).
- Testimonials: 3 editable quotes (quote + attribution).
- Footer / copyright text.
- Existing: brand, logo, colors, theme, button style, hero title/desc/CTA,
  contact email, social links, section visibility, preview page.

`PrintPreview` reflects every control; request email includes all choices.

## Verification
- `npm run lint`, `npm run build`, dev-server smoke test.
- Manual: signup/login/logout, save favorite, confirm an order, add demo to
  showcase; demo pages render and are navigable.
