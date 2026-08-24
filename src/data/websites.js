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
      "Mono Studio is built for a small creative team that wants their homepage to feel like a poster, not a brochure. Full interactive demo is being finished — the product page shows a large static preview of the current build.",
    demoUrl: null,
    hasFullDemo: false,
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
    demoUrl: null,
    hasFullDemo: false,
    featured: false,
    accent: "#2F5D45",
    theme: "light",
    preview: "cafe",
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
