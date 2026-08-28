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

const BASE = "/demos/the-day-of";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/services`, label: "Services" },
  { to: `${BASE}/gallery`, label: "Gallery" },
  { to: `${BASE}/enquiry`, label: "Enquiry" },
];

const ACCENT = "#D9837A";

const PACKAGES = [
  {
    name: "The Essentials",
    price: "From ৳1,80,000",
    desc: "A planner for the final six weeks — logistics, vendors, and a schedule everyone can follow.",
    features: ["Six weeks of planning", "Vendor coordination", "Day-of timeline", "One planner on site"],
  },
  {
    name: "The Full Day",
    price: "From ৳3,50,000",
    desc: "From the first venue visit to the last guest leaving — the whole event, handled.",
    features: ["Full planning from day one", "Venue & vendor booking", "On-site team of three", "Budget management"], highlighted: true,
  },
  {
    name: "The Celebration",
    price: "From ৳5,00,000",
    desc: "For weddings and big parties that need staging, styling, and a production crew.",
    features: ["Design & styling", "Lighting & staging", "Guest management", "Weekend event crew"],
  },
];

const CATS = ["All", "Weddings", "Corporate", "Private"];

const GALLERY = [
  { title: "Aisha & Omar — courtyard", cat: "Weddings", bg: "linear-gradient(135deg,#D9837A,#5A2420)" },
  { title: "Annual dinner — ballroom", cat: "Corporate", bg: "linear-gradient(135deg,#8A9BB0,#2E3A48)" },
  { title: "Fortieth birthday — rooftop", cat: "Private", bg: "linear-gradient(135deg,#D9A26B,#6E4A26)" },
  { title: "Table styling — detail", cat: "Weddings", bg: "linear-gradient(135deg,#B08968,#4A3220)" },
  { title: "Product launch — warehouse", cat: "Corporate", bg: "linear-gradient(135deg,#7A8B5E,#333D26)" },
  { title: "Anniversary dinner — garden", cat: "Private", bg: "linear-gradient(135deg,#6E9B4E,#2E4520)" },
  { title: "Mehndi afternoon — villa", cat: "Weddings", bg: "linear-gradient(135deg,#E5B56B,#7A4A1E)" },
  { title: "Team retreat — resort", cat: "Corporate", bg: "linear-gradient(135deg,#5B8C9B,#2A434C)" },
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#2B201C]/10 bg-[#FBF7F2]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-serif text-[18px] italic">
          The Day Of
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#2B201C]/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#2B201C] ${active === l.label.toLowerCase() ? "text-[#2B201C]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/enquiry`}
            className="bg-[#D9837A] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white transition-colors hover:bg-[#2B201C]"
          >
            Start planning
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#2B201C]/10 text-[#2B201C]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2B201C]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#2B201C]/40">
      The Day Of — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D9837A]">
        Weddings · corporate · private events
      </span>
      <h1 className="mt-5 max-w-[18ch] font-serif text-[44px] leading-[1.05] sm:text-[62px]">
        You plan the guest list. <span className="italic text-[#D9837A]">We plan the day.</span>
      </h1>
      <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-[#2B201C]/60">
        Event planners for the days people remember — weddings, launches, and the party that
        needs to go right. One team, one timeline, zero last-minute phone calls to you.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          to={`${BASE}/enquiry`}
          className="bg-[#D9837A] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#2B201C]"
        >
          Start planning
        </Link>
        <Link
          to={`${BASE}/gallery`}
          className="border border-[#2B201C]/20 px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#2B201C] hover:border-[#2B201C]/50"
        >
          See our events
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#2B201C]/10 pt-8">
        <Stat value="120+" label="Events planned" />
        <Stat value="9 yrs" label="In the business" />
        <Stat value="0" label="Worried clients (we hope)" />
      </div>
    </section>
  );
}

function HomePreview() {
  const featured = GALLERY.slice(0, 4);
  return (
    <section className="border-t border-[#2B201C]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-[28px] italic">Recent events</h2>
          <Link to={`${BASE}/gallery`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#2B201C]/50 hover:text-[#2B201C]">
            Full gallery →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featured.map((g) => (
            <div key={g.title} className="aspect-[3/4] border border-[#2B201C]/10" style={{ background: g.bg }}>
              <div className="flex h-full flex-col justify-end p-3">
                <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/70">{g.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-[#2B201C]/10 bg-[#2B201C] text-[#FBF7F2]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-8 font-serif text-[28px] italic">From people who were there</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["“They ran our wedding like it was the only one they'd ever done. Not a single thing went missing.”", "Aisha & Omar"],
            ["“The launch looked effortless, which means it absolutely wasn't. Worth every taka.”", "Mehjabin, brand lead"],
            ["“We handed over the brief and stopped thinking. That's the whole review.”", "Farid, fortieth birthday"],
          ].map(([q, who]) => (
            <div key={who} className="flex flex-col justify-between border border-white/10 p-5">
              <p className="text-[13px] italic leading-relaxed text-[#FBF7F2]/75">{q}</p>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#D9837A]">{who}</span>
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
      <HomePreview />
      <Testimonials />
    </>
  );
}

function ServicesPage() {
  return (
    <section className="border-t border-[#2B201C]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-[36px] italic">How we work</h2>
        <p className="mt-3 max-w-[48ch] text-[14px] text-[#2B201C]/60">
          Every event starts with a conversation and ends with a checklist that survives contact
          with reality. Pick a starting point — we'll shape the rest around it.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <PriceTier key={p.name} {...p} accent={ACCENT} cta="Enquire about this" className="bg-white" />
          ))}
        </div>
        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-wide text-[#2B201C]/45">
          Every package includes the venue walkthroughs · nothing is outsourced
        </p>
      </div>
    </section>
  );
}

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const items = GALLERY.filter((g) => cat === "All" || g.cat === cat);
  return (
    <section className="border-t border-[#2B201C]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-[36px] italic">Gallery</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] text-[#2B201C]/60">
          A few of the days we've been part of. Every photo is from an event we planned, staged,
          or — usually — both.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <FilterChips
            options={CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#2B201C]/15 text-[#2B201C]/55 hover:border-[#2B201C]/40"
            activeClassName="bg-[#D9837A] text-white border-[#D9837A]"
          />
          <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#2B201C]/40">
            {items.length} {items.length === 1 ? "event" : "events"}
          </span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((g, i) => (
            <button
              key={g.title}
              onClick={() => setLightbox(i)}
              className="group aspect-[3/4] border border-[#2B201C]/10 text-left transition-transform hover:scale-[1.02]"
              style={{ background: g.bg }}
            >
              <div className="flex h-full flex-col justify-end p-3">
                <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/70">{g.title}</span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-wide text-white/40 group-hover:underline">View →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onMove={(d) => setLightbox((i) => (i + d + items.length) % items.length)} />
    </section>
  );
}

function EnquiryPage() {
  return (
    <section className="border-t border-[#2B201C]/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-[36px] italic">Start the conversation.</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-[#2B201C]/60">
            Tell us about the day — date, size, and the one thing that has to be right. We'll come
            back within two days with thoughts, not a sales deck.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Stat value="2 days" label="Reply time" />
            <Stat value="Free" label="First consultation" />
            <Stat value="In person" label="Or video, your call" />
          </div>
        </div>
        <div className="border border-[#2B201C]/10 bg-white p-6 md:p-8">
          <BookingForm
            accent={ACCENT}
            submitLabel="Send enquiry"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name" },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { key: "type", label: "Event type", type: "select", options: ["Wedding", "Corporate", "Private party", "Not sure yet"], placeholder: "What are we planning?" },
              { key: "guests", label: "Guests", type: "select", options: ["Under 50", "50–150", "150–300", "300+"], placeholder: "Rough headcount" },
              { key: "date", label: "Date (if set)", type: "date" },
              { key: "notes", label: "Anything else", type: "text", placeholder: "Venue, budget, the one thing that has to be right", required: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, services: ServicesPage, gallery: GalleryPage, enquiry: EnquiryPage };

export default function TheDayOf() {
  return (
    <div className="min-h-screen bg-[#FBF7F2] font-body text-[#2B201C]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="the-day-of" />
    </div>
  );
}
