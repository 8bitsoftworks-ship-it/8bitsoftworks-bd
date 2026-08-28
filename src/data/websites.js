// Central catalog. Add a new ready-made website by adding an entry here.
// `hasFullDemo` sites have a complete interactive demo under /demos/:id
// Sites without a full demo still show a large static preview on their product page.

export const categories = [
  "All",
  "Restaurant",
  "Architecture",
  "SaaS",
  "Ecommerce",
  "Fitness",
  "Portfolio",
  "Agency",
  "Café",
  "Travel",
  "Wellness",
  "Finance",
  "Real Estate",
  "Education",
  "Events",
  "Photography",
  "Beauty",
  "Legal",
  "Pet Care",
  "Brewery",
  "Coworking",
];

export const websites = [
  {
    id: "sora-house",
    name: "Sora House",
    category: "Restaurant",
    price: 12000,
    tags: ["Restaurant", "Food", "Hospitality"],
    description:
      "A quiet dinner-only restaurant site built around one thing: the tasting menu. Dark, low-glare, easy to read on a phone at a table.",
    longDescription:
      "Sora House is built for restaurants that don't need a slideshow of stock food photography — they need hours, a menu, and a way to book a table. The layout is dark and calm, the typography leans on a serif for warmth, and the menu is laid out like a printed card rather than a scrolling wall of dishes.",
    demoUrl: "/demos/sora-house",
    hasFullDemo: true,
    featured: true,
    accent: "#E7A33E",
    theme: "dark",
    preview: "restaurant",
  },
  {
    id: "northline",
    name: "Northline",
    category: "Architecture",
    price: 15000,
    tags: ["Architecture", "Studio", "Portfolio"],
    description:
      "An architecture studio site that gets out of the way of the work. Oversized type, hairline grids, black-and-white project blocks.",
    longDescription:
      "Northline is built for practices whose best marketing is the buildings themselves. There's no hero video, no gradient — just a confident type scale, a rigid grid, and project pages that let photography do the talking.",
    demoUrl: "/demos/northline",
    hasFullDemo: true,
    featured: true,
    accent: "#121319",
    theme: "light",
    preview: "architecture",
  },
  {
    id: "kairo",
    name: "Kairo",
    category: "SaaS",
    price: 16000,
    tags: ["SaaS", "Product", "Startup"],
    description:
      "A product site for a small, technical SaaS team. Terminal-green accents, monospace metadata, an interface preview instead of a hero illustration.",
    longDescription:
      "Kairo is aimed at small technical teams shipping developer tools — the kind of product where the interface itself is the best pitch. The homepage leads with a simplified product panel, keeps copy short, and uses monospace type for anything that reads like configuration.",
    demoUrl: "/demos/kairo",
    hasFullDemo: true,
    featured: true,
    accent: "#39D9A0",
    theme: "dark",
    preview: "saas",
  },
  {
    id: "arc-supply",
    name: "Arc Supply",
    category: "Ecommerce",
    price: 18000,
    tags: ["Ecommerce", "Fashion", "Retail"],
    description:
      "A small-batch goods shop laid out like a print catalog: high-contrast type, a tight product grid, no banner carousel.",
    longDescription:
      "Arc Supply is built for a maker selling a small, considered range rather than a warehouse of SKUs. The product grid is editorial rather than transactional, sizing and stock are shown plainly, and checkout stays out of the way until it's needed.",
    demoUrl: "/demos/arc-supply",
    hasFullDemo: true,
    featured: true,
    accent: "#121319",
    theme: "light",
    preview: "ecommerce",
  },
  {
    id: "forma",
    name: "Forma",
    category: "Fitness",
    price: 13000,
    tags: ["Fitness", "Studio", "Booking"],
    description:
      "A class-based fitness studio site: a real weekly schedule, instructor list, and a booking CTA that's never more than one scroll away.",
    longDescription:
      "Forma is built for a single-location training studio that lives and dies by its class schedule. The homepage puts this week's timetable near the top, keeps the palette high-energy but not loud, and treats every page as a step toward a booked class.",
    demoUrl: "/demos/forma",
    hasFullDemo: true,
    featured: false,
    accent: "#FF6A3D",
    theme: "light",
    preview: "fitness",
  },
  {
    id: "field-notes",
    name: "Field Notes",
    category: "Portfolio",
    price: 8000,
    tags: ["Portfolio", "Personal", "Writing"],
    description:
      "A quiet personal site laid out like a running index of work and writing. Monospace metadata, no hero image, fast to read.",
    longDescription:
      "Field Notes is for people whose work speaks for itself — designers, writers, engineers who want a home for their projects without performing a personal brand. Everything is indexed, dated, and searchable by feel rather than by filter.",
    demoUrl: "/demos/field-notes",
    hasFullDemo: true,
    featured: false,
    accent: "#39D9A0",
    theme: "light",
    preview: "portfolio",
  },
  {
    id: "mono-studio",
    name: "Mono Studio",
    category: "Agency",
    price: 17000,
    tags: ["Agency", "Creative", "Branding"],
    description:
      "A loud, confident agency site for a small creative team — oversized type on a signal-red field, sparse copy, work-first navigation.",
    longDescription:
      "Mono Studio is built for a small creative team that wants their homepage to feel like a poster, not a brochure. Oversized type, a signal-red field, and a work index that lets the projects do the talking.",
    demoUrl: "/demos/mono-studio",
    hasFullDemo: true,
    featured: false,
    accent: "#FF4F3F",
    theme: "dark",
    preview: "agency",
  },
  {
    id: "ember-grain",
    name: "Ember & Grain",
    category: "Café",
    price: 9500,
    tags: ["Café", "Food", "Local"],
    description:
      "A neighbourhood café site: hours, a short seasonal menu, and a map. Nothing that needs updating more than once a season.",
    longDescription:
      "Ember & Grain is built for a small café that needs to be found, not sold. Warm paper tones, a slab serif for the menu, and a layout that a café owner could realistically keep up to date themselves.",
    demoUrl: "/demos/ember-grain",
    hasFullDemo: true,
    featured: false,
    accent: "#2F5D45",
    theme: "light",
    preview: "cafe",
  },
  {
    id: "vellore",
    name: "Vellore",
    category: "Travel",
    price: 14000,
    tags: ["Travel", "Tours", "Hospitality"],
    description:
      "A boutique travel company site built around curated trips — destination-led pages, an itinerary section, and a book-a-trip flow that stays simple.",
    longDescription:
      "Vellore is for a small travel outfit selling hand-built itineraries rather than package deals. The homepage leads with a rotating destination strip, trips are laid out as editorial cards, and every page funnels towards a booking enquiry without a clunky widget.",
    demoUrl: "/demos/vellore",
    hasFullDemo: true,
    featured: false,
    accent: "#E75E3B",
    theme: "light",
    preview: "travel",
  },
  {
    id: "healwise",
    name: "Healwise",
    category: "Wellness",
    price: 13500,
    tags: ["Wellness", "Clinic", "Health"],
    description:
      "A calm, trustworthy clinic site: services, practitioners, and an appointment flow — teal tones, generous spacing, no stock-photo chaos.",
    longDescription:
      "Healwise is built for a wellness or physio clinic that wants patients to feel reassured before they even call. Service cards, a practitioner grid, and a simple appointment enquiry form — all in a palette chosen to feel clean rather than clinical.",
    demoUrl: "/demos/healwise",
    hasFullDemo: true,
    featured: false,
    accent: "#1F8F69",
    theme: "light",
    preview: "wellness",
  },
  {
    id: "ledger-pine",
    name: "Ledger & Pine",
    category: "Finance",
    price: 15500,
    tags: ["Finance", "Accounting", "Consulting"],
    description:
      "An accounting firm site that trades fancy visuals for trust: services, team, and a clear “talk to us” path on a restrained green-and-ink palette.",
    longDescription:
      "Ledger & Pine is for a firm whose credibility comes from plain competence. The site leads with what they do for each kind of client, names the team, and keeps every call-to-action about starting a conversation — never about bells and whistles.",
    demoUrl: "/demos/ledger-pine",
    hasFullDemo: true,
    featured: false,
    accent: "#2F5D45",
    theme: "light",
    preview: "finance",
  },
  {
    id: "openlot",
    name: "Openlot",
    category: "Real Estate",
    price: 17500,
    tags: ["Real Estate", "Property", "Listings"],
    description:
      "A property brokerage site with a searchable listing grid, neighbourhood guides, and a serious IDX-style listings layout.",
    longDescription:
      "Openlot is built for a real estate team whose livelihood is the listings page. The grid is dense but legible, each property card carries price and key facts at a glance, and the neighbourhood guides are written to be genuinely useful rather than marketing-flavoured.",
    demoUrl: "/demos/openlot",
    hasFullDemo: true,
    featured: false,
    accent: "#C77B2C",
    theme: "light",
    preview: "realestate",
  },
  {
    id: "meridian",
    name: "Meridian",
    category: "Education",
    price: 15000,
    tags: ["Education", "Courses", "Learning"],
    description:
      "A dark, focused online-courses site for a teaching studio — course catalogue, pricing toggle, and an enroll flow that respects your time.",
    longDescription:
      "Meridian is built for a small teaching studio selling live online courses rather than a sprawling learning platform. A warm accent on a dark field keeps it calm while courses get filtered by track, pricing toggles between monthly and annual, and every page moves toward enrollment without guilt-tripping copy.",
    demoUrl: "/demos/meridian",
    hasFullDemo: true,
    featured: true,
    accent: "#FFD84D",
    theme: "dark",
    preview: "education",
  },
  {
    id: "the-day-of",
    name: "The Day Of",
    category: "Events",
    price: 16000,
    tags: ["Events", "Weddings", "Planning"],
    description:
      "An event-planning studio site with a warm, serif-led voice — service packages, a filterable gallery, and a conversation-first enquiry form.",
    longDescription:
      "The Day Of is for an event planner whose clients are deciding on the biggest day of their lives. The tone is warm and confident, packages are laid out plainly, and the gallery filters by wedding, corporate, and private events so clients can see the work that looks like theirs.",
    demoUrl: "/demos/the-day-of",
    hasFullDemo: true,
    featured: true,
    accent: "#D9837A",
    theme: "light",
    preview: "events",
  },
  {
    id: "hallow",
    name: "Hallow",
    category: "Photography",
    price: 14000,
    tags: ["Photography", "Portfolio", "Studio"],
    description:
      "A portrait and editorial photography studio site — a filterable portfolio, honest packages, and a booking form that treats every enquiry like a person.",
    longDescription:
      "Hallow is built for a photographer whose portfolio is the product and whose personality is the reason clients book. Work filters by portrait, couples, and editorial, packages are priced without opacity, and the booking page asks the questions a real consultation would.",
    demoUrl: "/demos/hallow",
    hasFullDemo: true,
    featured: true,
    accent: "#C6A15B",
    theme: "light",
    preview: "photography",
  },
  {
    id: "atelier-nine",
    name: "Atelier Nine",
    category: "Beauty",
    price: 13000,
    tags: ["Beauty", "Salon", "Booking"],
    description:
      "A calm salon site for hair, skin, and nails — services filtered by category, an atelier team page, and a booking flow built around named appointments.",
    longDescription:
      "Atelier Nine is for a salon that sells calm and competence in equal measure. Services are organized by hair, skin, and nails with plain prices, the team page introduces the actual people you'll book, and appointments are always made with a named therapist — never 'whoever's free'.",
    demoUrl: "/demos/atelier-nine",
    hasFullDemo: true,
    featured: false,
    accent: "#A24E3F",
    theme: "light",
    preview: "beauty",
  },
  {
    id: "barrett-cole",
    name: "Barrett & Cole",
    category: "Legal",
    price: 16500,
    tags: ["Legal", "Law Firm", "Professional"],
    description:
      "A law firm site built for trust: practice areas laid out like a docket, a no-nonsense attorney index, and a consultation request that reads like a real form.",
    longDescription:
      "Barrett & Cole is for a firm that wins business on credibility, not buzzwords. The homepage leads with practice areas in a clear, indexed layout, names the attorneys with their focus areas, and keeps every call-to-action pointed at a consultation — no animation, no fluff.",
    demoUrl: "/demos/barrett-cole",
    hasFullDemo: true,
    featured: false,
    accent: "#9A6B4F",
    theme: "light",
    preview: "legal",
  },
  {
    id: "fetch-club",
    name: "Fetch Club",
    category: "Pet Care",
    price: 11000,
    tags: ["Pet Care", "Local", "Services"],
    description:
      "A dog-walking and pet-care service site: a plain-language services grid, monthly plans with a real toggle, and a map area that says 'we come to you'.",
    longDescription:
      "Fetch Club is built for a local pet-care operator who wants bookings, not brand theater. Services are priced plainly with a monthly/one-off toggle, the team is human-sized, and the copy treats the pet owner like a neighbor rather than a lead.",
    demoUrl: "/demos/fetch-club",
    hasFullDemo: true,
    featured: false,
    accent: "#E8763B",
    theme: "light",
    preview: "petcare",
  },
  {
    id: "harbor-hops",
    name: "Harbor Hops",
    category: "Brewery",
    price: 12500,
    tags: ["Brewery", "Food", "Hospitality"],
    description:
      "A brewery site with the taps up front: a rotating tap list, a food menu, and event nights — amber type on a dark, taproom-feel field.",
    longDescription:
      "Harbor Hops is for a brewery whose tap list changes faster than its website can usually keep up. The homepage leads with the current taps in a plain list, adds the food menu and event nights below, and stays dark and warm like the room itself.",
    demoUrl: "/demos/harbor-hops",
    hasFullDemo: true,
    featured: false,
    accent: "#D89A3C",
    theme: "dark",
    preview: "brewery",
  },
  {
    id: "station-one",
    name: "Station One",
    category: "Coworking",
    price: 15000,
    tags: ["Coworking", "Workspace", "Membership"],
    description:
      "A coworking space site with membership plans on a monthly/annual toggle, a tour-booking flow, and the neighborhood worked into the design.",
    longDescription:
      "Station One is for a coworking space selling memberships, not day passes. The plans are on a real monthly/annual toggle, the amenities are listed like a spec sheet, and the whole site is built to move someone from 'curious' to 'book a tour'.",
    demoUrl: "/demos/station-one",
    hasFullDemo: true,
    featured: false,
    accent: "#5B7DB1",
    theme: "light",
    preview: "coworking",
  },
];

export const pricingTiers = [
  {
    name: "Ready-Made",
    price: "৳8,000–18,000",
    description: "The site exactly as shown in the demo, deployed with your content swapped in.",
    features: [
      "Full source files",
      "Responsive + mobile version",
      "Basic SEO setup",
      "Contact form wired up",
      "Deployment assistance",
    ],
  },
  {
    name: "Ready-Made + Customization",
    price: "Starting at ৳18,000",
    description: "A ready-made site adapted to your brand: colors, type, copy, images, and section changes.",
    features: [
      "Everything in Ready-Made",
      "Logo, color & type changes",
      "Content rewritten for your business",
      "Section additions or removals",
      "One round of revisions included",
    ],
    highlighted: true,
  },
  {
    name: "Fully Custom",
    price: "Let's talk",
    description: "A website built from your brief — new layout, new components, your requirements.",
    features: [
      "Custom design & build",
      "Scoped to your requirements",
      "Direct collaboration with the studio",
      "Timeline based on complexity",
    ],
  },
];

export function getWebsiteById(id) {
  return websites.find((w) => w.id === id);
}

export function formatPrice(value) {
  if (typeof value !== "number") return value;
  return "৳" + value.toLocaleString("en-IN");
}
