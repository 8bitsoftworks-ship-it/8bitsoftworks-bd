# Demo Websites Upgrade + 4 New Sites

Date: 2026-08-27
Status: Approved by user (sections 1-3 summarized; user said "proceed, finish")

## Goal

Make all 12 existing pre-built demo websites more professional and feature-rich:
- Multi-page depth (real sub-pages, deep-linkable, e.g. `/demos/sora-house/menu`)
- Richer sections and visual polish
- Interactive business logic (filters, carts, booking/contact forms, accordions, lightboxes, pricing toggles)
- Add 4 new demo sites: Education/coaching, Events, Photography, Beauty/salon

## Approach (chosen by user: Hybrid)

Shared routing + shared interactive primitives (`src/demo-kit/`), but each demo keeps its own
bespoke header/footer/palette/typography and composes primitives its own way.

## Architecture

### Routing
- `App.jsx`: replace 12 explicit demo routes with one catch-all
  `<Route path="/demos/:id/*" element={<DemoView />} />`.
- `src/pages/DemoView.jsx`: resolves `:id` via `getWebsiteById`; unknown id -> redirect `/websites`.
  Renders the demo root component looked up from a registry map.
- Each demo root reads sub-path from `useParams()["*"]` and renders a page from its local `pages` map.
- Demo nav uses React Router `<Link>` to sub-paths (deep-linkable, refreshable).
- Unknown sub-path -> render demo home.

### Shared primitives (`src/demo-kit/`)
- `DemoPage.jsx` — sub-path -> page resolver
- `MobileNav.jsx` — hamburger nav for demo headers
- `Accordion.jsx` — collapsible sections (one open)
- `FilterChips.jsx` — category filter chips
- `Lightbox.jsx` — gallery viewer (prev/next/close)
- `PricingToggle.jsx` — monthly/annual switch
- `useCart.js` + `CartDrawer.jsx` — add/remove/qty/subtotal cart
- `QuantityStepper.jsx` — qty control
- `BookingForm.jsx` — date/time/select fields + confirmation state (fake submit)
- `ContactForm.jsx` — name/email/message + success state
- `Stat.jsx`, `SectionHeading.jsx`, `PriceTier.jsx` — presentational

All primitives accept `className` for theming; demos stay visually distinct.

## Per-demo plan (12 existing)

| Demo | Pages | Interactions |
|---|---|---|
| Sora House | Home, Menu, About, Visit/Reserve | menu tabs + dietary filter, reserve form |
| Northline | Home, Work, Project×5, About, Contact | project filter, contact form |
| Kairo | Home, Product, Pricing, Docs | pricing toggle, docs accordion, signup form |
| Arc Supply | Home, Shop, Product×6, About | cart (drawer, qty), shop filter, size selector |
| Forma | Home, Schedule, Classes, Trainers, Book | schedule filter, booking form |
| Field Notes | Index, Note×5, About | search + year filter |
| Mono Studio | Home, Work, About, Contact | work filter, contact form |
| Ember & Grain | Home, Menu, About, Visit | menu filter |
| Vellore | Home, Trips, Trip detail×3, Book | region filter, itinerary accordion, enquiry |
| Healwise | Home, Services, Practitioners, Book | service accordion, practitioner filter, booking |
| Ledger & Pine | Home, Services, Team, FAQ, Contact | FAQ accordion, contact form |
| Openlot | Home, Listings, Property×3, Contact | search + filters + sort, lightbox, enquiry |

## New sites (4)

| id | Name | Category | Accent | Preview variant |
|---|---|---|---|---|
| meridian | Meridian | Education | #FFD84D | education |
| the-day-of | The Day Of | Events | #D9837A | events |
| hallow | Hallow | Photography | #C6A15B | photography |
| atelier-nine | Atelier Nine | Beauty | #A24E3F | beauty |

Each: 3-4 sub-pages + interactivity (filters, lightbox, pricing tiers, booking/enquiry forms).

## Data wiring
- `src/data/websites.js`: add 4 entries + categories Education, Events, Photography, Beauty.
- `src/components/PreviewFrame.jsx`: add 4 variants.
- `src/pages/DemoView.jsx`: registry of all 16 demos.

## Verification
- `npm run build` passes, `npx oxlint src` clean.
- Spot-check each demo route + a sub-page route in dev.
