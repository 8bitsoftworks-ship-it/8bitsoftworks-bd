import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import Lightbox from "../demo-kit/Lightbox";
import BookingForm from "../demo-kit/BookingForm";
import PriceTier from "../demo-kit/PriceTier";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/hallow";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/portfolio`, label: "Portfolio" },
  { to: `${BASE}/pricing`, label: "Pricing" },
  { to: `${BASE}/book`, label: "Book" },
];

const ACCENT = "#C6A15B";

const WORK = [
  { title: "Noor — editorial", cat: "Editorial", bg: "linear-gradient(135deg,#3A3A38,#141413)" },
  { title: "Thea & Sam — city hall", cat: "Couples", bg: "linear-gradient(135deg,#C9B79A,#6E5B3C)" },
  { title: "Arif — in the workshop", cat: "Portraits", bg: "linear-gradient(135deg,#4A4A46,#1C1C1A)" },
  { title: "Sadia — golden hour", cat: "Portraits", bg: "linear-gradient(135deg,#D8A36B,#7A4A22)" },
  { title: "Maya & Jonas — riverside", cat: "Couples", bg: "linear-gradient(135deg,#7E8C86,#37423C)" },
  { title: "Studio light study", cat: "Editorial", bg: "linear-gradient(135deg,#E4DCCB,#9B8B6C)" },
  { title: "Dina — on location", cat: "Portraits", bg: "linear-gradient(135deg,#2F2F2D,#0F0F0E)" },
  { title: "The long table — feature", cat: "Editorial", bg: "linear-gradient(135deg,#B0492F,#5A2314)" },
];

const CATS = ["All", "Portraits", "Couples", "Editorial"];

const PRICING = [
  {
    name: "Portrait",
    price: "৳2,500",
    desc: "A single session, one location, 15 edited images within a week.",
    features: ["90 minutes", "15 edited images", "One outfit change", "Online gallery"],
  },
  {
    name: "Couples",
    price: "৳4,000",
    desc: "A relaxed two-hour session for two, delivered as a full story.",
    features: ["2 hours", "30 edited images", "Two locations", "Print release"],
    highlighted: true,
  },
  {
    name: "Editorial",
    price: "From ৳8,000",
    desc: "For publications and brands — brief-driven, art-directed shoots.",
    features: ["Half or full day", "Full usage license", "Assistant included", "Same-week selects"],
  },
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#F6F3EC]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-serif text-[17px] tracking-wide">
          Hallow
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-[0.14em] text-black/50 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-black ${active === l.label.toLowerCase() ? "text-black underline underline-offset-4" : ""}`}
              style={active === l.label.toLowerCase() ? { textDecorationColor: ACCENT } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/book`}
            className="font-mono text-[10.5px] uppercase tracking-wide px-3.5 py-2 text-white transition-opacity hover:opacity-85"
            style={{ background: ACCENT }}
          >
            Book a session
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-black/10 text-black" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-black/35">
      Hallow — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
        Portrait & editorial studio
      </span>
      <h1 className="mt-5 max-w-[18ch] font-serif text-[44px] leading-[1.05] sm:text-[60px]">
        Light you can <span className="italic" style={{ color: ACCENT }}>keep.</span>
      </h1>
      <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-black/55">
        Photographs of people — for yourself, for each other, and for the page. Shot on film
        and digital, printed on cotton rag, and delivered as an edit, not a dump.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          to={`${BASE}/book`}
          className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-opacity hover:opacity-85"
          style={{ background: ACCENT }}
        >
          Book a session
        </Link>
        <Link
          to={`${BASE}/portfolio`}
          className="border border-black/20 px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-black hover:border-black/50"
        >
          View portfolio
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
        <Stat value="9 yrs" label="Shooting" />
        <Stat value="120+" label="Sessions / year" />
        <Stat value="3 days" label="First selects" />
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = WORK.slice(0, 4);
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-[26px]">Recent work</h2>
          <Link to={`${BASE}/portfolio`} className="font-mono text-[10.5px] uppercase tracking-wide text-black/50 hover:text-black">
            Full portfolio →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featured.map((w) => (
            <div key={w.title} className="aspect-[3/4] border border-black/10" style={{ background: w.bg }}>
              <div className="flex h-full items-end p-3">
                <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/70">{w.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
    </>
  );
}

function PortfolioPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const items = WORK.filter((w) => cat === "All" || w.cat === cat);
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-[34px]">Portfolio</h2>
        <p className="mt-3 max-w-[44ch] text-[14px] text-black/55">
          A selection. Every session is edited by hand — nothing is run through a preset.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <FilterChips
            options={CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-black/15 text-black/60 hover:border-black/40"
            activeClassName="text-white"
          />
          <span className="font-mono text-[10.5px] uppercase tracking-wide text-black/40">
            {items.length} {items.length === 1 ? "shot" : "shots"}
          </span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((w, i) => (
            <button
              key={w.title}
              onClick={() => setLightbox(i)}
              className="group aspect-[3/4] border border-black/10 text-left transition-transform hover:scale-[1.02]"
              style={{ background: w.bg }}
            >
              <div className="flex h-full flex-col justify-end p-3">
                <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/70">{w.title}</span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-wide text-white/40 group-hover:underline">
                  View →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        items={items}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onMove={(d) => setLightbox((i) => (i + d + items.length) % items.length)}
      />
    </section>
  );
}

function PricingPage() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-[34px]">Packages</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] text-black/55">
          Every package includes an in-person or video consult, an online gallery, and the
          print release. Travel beyond Dhaka billed at cost.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRICING.map((t) => (
            <PriceTier
              key={t.name}
              {...t}
              accent={ACCENT}
              cta="Book this package"
              className="bg-white"
            />
          ))}
        </div>
        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-wide text-black/40">
          Gift vouchers available — redeemable within a year.
        </p>
      </div>
    </section>
  );
}

function BookPage() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-[34px]">Book a session</h2>
          <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-black/55">
            Tell us what you're after and a date you're hoping for. We reply within a day,
            usually faster — with real suggestions, not a price list.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Stat value="48 hrs" label="Reply time" />
            <Stat value="50%" label="Deposit holds your date" />
          </div>
        </div>
        <div className="border border-black/10 bg-white p-6 md:p-8">
          <BookingForm
            accent={ACCENT}
            submitLabel="Send enquiry"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { key: "type", label: "Session type", type: "select", options: ["Portrait", "Couples", "Editorial", "Not sure yet"], placeholder: "What are we shooting?" },
              { key: "date", label: "Preferred date", type: "date" },
              { key: "notes", label: "Notes", type: "text", placeholder: "Location, mood, people — anything that helps", required: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, portfolio: PortfolioPage, pricing: PricingPage, book: BookPage };

export default function Hallow() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] font-body text-black">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="hallow" />
    </div>
  );
}
