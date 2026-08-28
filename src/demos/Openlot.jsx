import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import Lightbox from "../demo-kit/Lightbox";
import BookingForm from "../demo-kit/BookingForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/openlot";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/listings`, label: "Listings" },
  { to: `${BASE}/contact`, label: "Contact" },
];

const ACCENT = "#C77B2C";

const LISTINGS = [
  {
    id: "14-lake-road",
    area: "Banani",
    type: "House",
    beds: "4 BHK",
    size: "1,850 sqft",
    price: "৳4.2M",
    priceNum: 4200000,
    tag: "For sale",
    year: "2023",
    art: "linear-gradient(135deg,#C77B2C,#5A3311)",
    blurb: "Standalone house with a real garden in the back and morning light in the kitchen.",
    amenities: ["Garden", "3 parking", "Generator backup", "Servant quarter"],
  },
  {
    id: "silver-tower-9a",
    area: "Dhanmondi",
    type: "Apartment",
    beds: "3 BHK",
    size: "1,240 sqft",
    price: "৳2.8M",
    priceNum: 2800000,
    tag: "For sale",
    year: "2021",
    art: "linear-gradient(135deg,#8A9BB0,#3A4657)",
    blurb: "Corner unit on a quiet road, low floor, and light in three rooms until late afternoon.",
    amenities: ["Lift", "Generator backup", "2 parking", "Clubhouse"],
  },
  {
    id: "green-field-plot",
    area: "Uttara",
    type: "Land",
    beds: "Plot",
    size: "5 katha",
    price: "৳6.5M",
    priceNum: 6500000,
    tag: "For sale",
    year: "—",
    art: "linear-gradient(135deg,#6E9B4E,#2E4520)",
    blurb: "Flat, rectangular plot with clear title and utilities at the boundary. Ready to build.",
    amenities: ["Corner plot", "Road access", "Gas line", "Water connection"],
  },
  {
    id: "maple-street-11",
    area: "Gulshan",
    type: "House",
    beds: "5 BHK",
    size: "3,100 sqft",
    price: "৳95k/mo",
    priceNum: 95000,
    tag: "For rent",
    year: "2019",
    art: "linear-gradient(135deg,#B08968,#4A3220)",
    blurb: "Family house on a tree-lined street, recently refreshed, walking distance to two schools.",
    amenities: ["Garden", "2 parking", "Backup power", "Solar water heater"],
  },
  {
    id: "riverside-3b",
    area: "Bashundhara",
    type: "Apartment",
    beds: "2 BHK",
    size: "980 sqft",
    price: "৳38k/mo",
    priceNum: 38000,
    tag: "For rent",
    year: "2022",
    art: "linear-gradient(135deg,#5B8C9B,#2A434C)",
    blurb: "Compact two-bedroom with a balcony over the green belt. Ideal for a small family.",
    amenities: ["Lift", "Balcony", "1 parking", "Gym"],
  },
  {
    id: "orchard-meadow",
    area: "Mohakhali",
    type: "Land",
    beds: "Plot",
    size: "3 katha",
    price: "৳1.9M",
    priceNum: 1900000,
    tag: "For sale",
    year: "—",
    art: "linear-gradient(135deg,#7A8B5E,#333D26)",
    blurb: "Quiet residential plot in a gated development, ten minutes from the airport road.",
    amenities: ["Gated community", "Road access", "Drainage", "Compound walls"],
  },
];

const TYPES = ["All", "House", "Apartment", "Land"];
const PRICE_SORTS = ["Featured", "Price: low–high", "Price: high–low"];

function useSub() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean);
}

function useActive() {
  return useSub()[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#1C1913]/10 bg-[#F3EFE7]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-display text-[15px] font-semibold tracking-tight">
          OPENLOT
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#1C1913]/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#1C1913] ${active === l.label.toLowerCase() ? "text-[#1C1913]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/contact`}
            className="bg-[#C77B2C] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white transition-colors hover:bg-[#1C1913]"
          >
            List your property
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#1C1913]/10 text-[#1C1913]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1C1913]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1C1913]/40">
      Openlot — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center md:pt-24 md:pb-16">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C77B2C]">Dhaka's property brokerage</span>
      <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.02] sm:text-[58px]">
        Find the flat the listing photos
        <br className="hidden sm:block" /> couldn't capture.
      </h1>
      <p className="mx-auto mt-5 max-w-[48ch] text-[15px] leading-relaxed text-[#1C1913]/60">
        Every property is visited, measured, and photographed by us before it goes up. What you
        see is what the floor plan actually says.
      </p>
      <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#1C1913]/10 pt-8 text-left">
        <Stat value="234" label="Verified listings" />
        <Stat value="100%" label="Visited by us" />
        <Stat value="0" label="Surprise fees" />
      </div>
    </section>
  );
}

function FeaturedListings() {
  const featured = LISTINGS.slice(0, 3);
  return (
    <section className="border-t border-[#1C1913]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-[26px] font-semibold">Fresh on the market</h2>
          <Link to={`${BASE}/listings`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#1C1913]/50 hover:text-[#1C1913]">
            All listings →
          </Link>
        </div>
        <div className="grid gap-px bg-[#1C1913]/10 sm:grid-cols-3">
          {featured.map((l) => (
            <ListingCard key={l.id} l={l} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ListingCard({ l }) {
  return (
    <Link to={`${BASE}/property/${l.id}`} className="group bg-[#F3EFE7]">
      <div className="relative aspect-[4/3]" style={{ background: l.art }}>
        <span className="absolute left-2 top-2 bg-[#F3EFE7] px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-[#1C1913]">
          {l.tag}
        </span>
        <span className="absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-wide text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
          View →
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="font-display text-[16px] font-semibold">{l.area}</h3>
            <span className="font-mono text-[10px] uppercase tracking-wide text-[#1C1913]/45">{l.type} · {l.beds} · {l.size}</span>
          </div>
          <span className="font-mono text-[13px] text-[#C77B2C]">{l.price}</span>
        </div>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedListings />
    </>
  );
}

function ListingsPage() {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [q, setQ] = useState("");
  let items = LISTINGS.filter(
    (l) =>
      (type === "All" || l.type === type) &&
      (l.area.toLowerCase().includes(q.toLowerCase()) ||
        l.beds.toLowerCase().includes(q.toLowerCase()) ||
        q === "")
  );
  if (sort === "Price: low–high") items = [...items].sort((a, b) => a.priceNum - b.priceNum);
  if (sort === "Price: high–low") items = [...items].sort((a, b) => b.priceNum - a.priceNum);
  return (
    <section className="border-t border-[#1C1913]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <h2 className="font-display text-[34px] font-semibold">Listings</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] text-[#1C1913]/60">
          Every one visited, measured, and photographed by us. Filter by type or search by
          neighbourhood.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <FilterChips
              options={TYPES}
              active={type}
              onChange={setType}
              chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#1C1913]/15 text-[#1C1913]/55 hover:border-[#1C1913]/40"
              activeClassName="bg-[#1C1913] text-[#F3EFE7] border-[#1C1913]"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search neighbourhood or beds…"
              className="w-56 border border-[#1C1913]/15 bg-white px-3 py-2 text-[12.5px] text-[#1C1913] placeholder:text-[#1C1913]/40"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-[#1C1913]/15 bg-transparent px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-[#1C1913]/70"
          >
            {PRICE_SORTS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <p className="mt-6 font-mono text-[11px] text-[#1C1913]/45">
          {items.length} of 234 verified listings
        </p>
        <div className="mt-6 grid gap-px bg-[#1C1913]/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l) => (
            <ListingCard key={l.id} l={l} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyPage() {
  const [, slug] = useSub();
  const l = LISTINGS.find((x) => x.id === slug) || LISTINGS[0];
  const [lightbox, setLightbox] = useState(null);
  const photos = [
    { label: `${l.area} — exterior`, bg: l.art },
    { label: `${l.area} — interior 01`, bg: "linear-gradient(135deg,#B08968,#4A3220)" },
    { label: `${l.area} — interior 02`, bg: "linear-gradient(135deg,#8A9BB0,#3A4657)" },
    { label: `${l.area} — floor plan`, bg: "linear-gradient(135deg,#C77B2C,#5A3311)" },
  ];
  const other = LISTINGS.filter((x) => x.id !== l.id).slice(0, 3);
  return (
    <section className="border-t border-[#1C1913]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <Link to={`${BASE}/listings`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#1C1913]/45 hover:text-[#1C1913]">
          ← Back to listings
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative grid grid-cols-2 gap-3">
              {photos.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => setLightbox(i)}
                  className="aspect-[4/3] border border-[#1C1913]/10 transition-transform hover:scale-[1.02]"
                  style={{ background: p.bg }}
                  aria-label={p.label}
                >
                  <span className="flex h-full items-end p-2 font-mono text-[9px] uppercase tracking-wide text-white/60">
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#C77B2C]">{l.tag}</span>
                <h2 className="mt-1 font-display text-[32px] font-semibold">{l.area}</h2>
                <p className="font-mono text-[11px] uppercase tracking-wide text-[#1C1913]/50">
                  {l.type} · {l.beds} · {l.size}
                </p>
              </div>
              <span className="font-mono text-[22px] text-[#C77B2C]">{l.price}</span>
            </div>
            <p className="mt-6 max-w-[46ch] text-[14px] leading-relaxed text-[#1C1913]/65">{l.blurb}</p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#1C1913]/10 pt-6">
              <Stat value={l.beds} label="Bedrooms" />
              <Stat value={l.size} label="Floor area" />
              <Stat value={l.year} label="Built" />
            </div>
            <div className="mt-8">
              <h3 className="mb-3 font-mono text-[10.5px] uppercase tracking-wide text-[#1C1913]/50">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {l.amenities.map((a) => (
                  <span key={a} className="border border-[#1C1913]/15 px-3 py-1.5 text-[12px] text-[#1C1913]/70">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 border border-[#1C1913]/10 bg-white p-6 md:p-8">
          <h3 className="font-display text-[20px] font-semibold">Arrange a viewing</h3>
          <p className="mt-2 mb-6 text-[12.5px] text-[#1C1913]/55">
            One-on-one, never rushed. We'll bring the floor plan and the honest answer to “what's
            wrong with it?”
          </p>
          <BookingForm
            accent={ACCENT}
            submitLabel="Request viewing"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name", required: true },
              { key: "phone", label: "Phone", placeholder: "+880 …", required: true },
              { key: "date", label: "Preferred date", type: "date", required: true },
              { key: "slot", label: "Slot", type: "select", options: ["Morning (10–12)", "Afternoon (2–5)", "Evening (5–7)"], placeholder: "Pick a window" },
            ]}
          />
        </div>
        <div className="mt-16">
          <h3 className="mb-6 font-display text-[22px] font-semibold">More properties</h3>
          <div className="grid gap-px bg-[#1C1913]/10 sm:grid-cols-3">
            {other.map((o) => (
              <ListingCard key={o.id} l={o} />
            ))}
          </div>
        </div>
      </div>
      <Lightbox items={photos} index={lightbox} onClose={() => setLightbox(null)} onMove={(d) => setLightbox((i) => (i + d + photos.length) % photos.length)} />
    </section>
  );
}

function ContactPage() {
  return (
    <section className="border-t border-[#1C1913]/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:py-18 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[30px] font-semibold">Talk to a human.</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-[#1C1913]/60">
            Viewings are one-on-one and never rushed. If we don't have the right property, we'll
            say so and point you somewhere useful.
          </p>
          <div className="mt-8 space-y-2 font-mono text-[13px]">
            <p className="text-[#C77B2C]">hello@openlot.re</p>
            <p>+880 1X-XXXX XXXX</p>
            <p className="text-[#1C1913]/45">Open 9am–7pm, closed Fridays</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#1C1913]/10 pt-8">
            <Stat value="1-on-1" label="Viewings, always" />
            <Stat value="24 hrs" label="Reply time" />
            <Stat value="0" label="Broker pressure" />
          </div>
        </div>
        <div className="border border-[#1C1913]/10 bg-white p-6 md:p-8">
          <h3 className="font-display text-[20px] font-semibold">Tell us what you need</h3>
          <p className="mt-2 mb-6 text-[12.5px] text-[#1C1913]/55">
            Buying, renting, or selling — we'll come back with something useful, not a sales pitch.
          </p>
          <BookingForm
            accent={ACCENT}
            submitLabel="Send enquiry"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { key: "interest", label: "I'm looking to", type: "select", options: ["Buy", "Rent", "Sell / list my property", "Just researching"], placeholder: "Select one" },
              { key: "budget", label: "Budget", type: "select", options: ["Under ৳1M", "৳1M – ৳3M", "৳3M – ৳6M", "৳6M+"], placeholder: "Rough budget" },
              { key: "notes", label: "Anything else", type: "text", placeholder: "Neighbourhoods, timing, must-haves…", required: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, listings: ListingsPage, property: PropertyPage, contact: ContactPage };

export default function Openlot() {
  return (
    <div className="min-h-screen bg-[#F3EFE7] font-body text-[#1C1913]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="openlot" />
    </div>
  );
}
