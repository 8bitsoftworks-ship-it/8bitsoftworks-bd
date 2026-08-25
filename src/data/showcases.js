// Showcase data helpers.
//
// The public showcase is a live gallery: the admin pastes the URL of a finished
// website build, and visitors see the site's index page embedded in an iframe.
//
// Persistence is browser-local (a static site has no backend). Admin-added
// entries live under a single localStorage key and are layered on top of a
// small set of read-only seeded entries so the page is never empty.

import { ADMIN } from "./siteConfig";

// Seeded entries — the studio's own finished builds, always shown first.
export const seededShowcases = [
  {
    id: "seed-sora-house",
    url: "./#/demos/sora-house",
    title: "Sora House",
    category: "Restaurant",
    description: "A quiet, dinner-only restaurant site built around one thing: the tasting menu.",
    featured: true,
    seeded: true,
  },
  {
    id: "seed-northline",
    url: "./#/demos/northline",
    title: "Northline",
    category: "Architecture",
    description: "An architecture studio site that gets out of the way of the work.",
    featured: true,
    seeded: true,
  },
  {
    id: "seed-kairo",
    url: "./#/demos/kairo",
    title: "Kairo",
    category: "SaaS",
    description: "A product site for a small, technical SaaS team.",
    featured: false,
    seeded: true,
  },
  {
    id: "seed-arc-supply",
    url: "./#/demos/arc-supply",
    title: "Arc Supply",
    category: "Ecommerce",
    description: "A small-batch goods shop laid out like a print catalog.",
    featured: false,
    seeded: true,
  },
];

export const SHOWCASE_KEY = ADMIN.localStorageKey;

export function normalizeUrl(input) {
  const value = String(input || "").trim();
  if (!value) return null;
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const parsed = new URL(candidate);
    const host = parsed.hostname;
    if (!host || (host !== "localhost" && !host.includes("."))) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export function domainOf(url) {
  const raw = String(url || "");
  if (!/^https?:\/\//i.test(raw)) return raw.replace(/^\.\//, "");
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return raw;
  }
}

export function titleFromUrl(url) {
  const domain = domainOf(url);
  const base = domain.split(".")[0];
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : domain;
}

// Human-friendly address for the browser chrome — external domains as-is,
// internal demo links shown as 8bit.site/<route>.
export function displayAddress(url) {
  const raw = String(url || "");
  if (/^https?:\/\//i.test(raw)) return domainOf(raw);
  const match = raw.match(/#\/(.+)$/);
  return match ? `8bit.site/${match[1]}` : raw;
}

export function loadShowcases() {
  try {
    const raw = localStorage.getItem(SHOWCASE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveShowcases(list) {
  try {
    localStorage.setItem(SHOWCASE_KEY, JSON.stringify(list));
  } catch {
    // storage unavailable — the in-memory list still works for the session
  }
}

export function addShowcase(entry) {
  const list = loadShowcases();
  const next = [
    ...list,
    {
      id: `show-${Date.now().toString(36)}`,
      createdAt: Date.now(),
      featured: false,
      ...entry,
    },
  ];
  saveShowcases(next);
  return next;
}

export function updateShowcase(id, patch) {
  const list = loadShowcases().map((s) => (s.id === id ? { ...s, ...patch } : s));
  saveShowcases(list);
  return list;
}

export function removeShowcase(id) {
  const list = loadShowcases().filter((s) => s.id !== id);
  saveShowcases(list);
  return list;
}

export function allShowcases() {
  const stored = loadShowcases();
  const seeded = seededShowcases.map((s, i) => ({ ...s, order: i }));
  const custom = stored.map((s, i) => ({ ...s, seeded: false, order: seededShowcases.length + i }));
  return [...seeded, ...custom].sort((a, b) => b.featured - a.featured || a.order - b.order);
}

export function showcaseCategories() {
  const seen = new Set();
  allShowcases().forEach((s) => {
    if (s.category) seen.add(s.category);
  });
  return ["All", ...Array.from(seen).sort()];
}
