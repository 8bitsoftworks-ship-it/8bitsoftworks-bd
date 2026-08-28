import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import ContactForm from "../demo-kit/ContactForm";
import Stat from "../demo-kit/Stat";
import Accordion from "../demo-kit/Accordion";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/mono-studio";

const NAV = [
  { key: "home", to: BASE, label: "Home" },
  { key: "work", to: `${BASE}/work`, label: "Work" },
  { key: "about", to: `${BASE}/about`, label: "About" },
  { key: "contact", to: `${BASE}/contact`, label: "Contact" },
];

const CATS = ["All", "Branding", "Web", "Art Direction"];

const WORK = [
  {
    num: "01",
    name: "Field Notes Archive",
    cats: ["Branding", "Web"],
    year: "2024",
    desc: "A publishing system for a personal archive — markdown in, designed site out. Type, layout, and a visual language the owner can actually edit.",
  },
  {
    num: "02",
    name: "Northline Site",
    cats: ["Web"],
    year: "2024",
    desc: "A quiet site for an architecture studio that needed to get out of the way of its own work. Oversized type, hairline grid, zero decoration.",
  },
  {
    num: "03",
    name: "Sora House Identity",
    cats: ["Art Direction", "Branding"],
    year: "2023",
    desc: "Identity for a fourteen-seat restaurant — a wordmark set in a vintage serif, a menu card, and a booking system that looks like it was printed.",
  },
  {
    num: "04",
    name: "Openlot Listings",
    cats: ["Web"],
    year: "2023",
    desc: "A dense listings interface for a real-estate team. Speed was the brief; we shipped a grid that holds a thousand rows without breaking a sweat.",
  },
  {
    num: "05",
    name: "Forma Club System",
    cats: ["Branding", "Web"],
    year: "2022",
    desc: "A full identity and booking site for a fitness studio — signage, schedule cards, and a web app that feels like a gym noticeboard, on purpose.",
  },
  {
    num: "06",
    name: "Ledger & Pine",
    cats: ["Art Direction", "Web"],
    year: "2022",
    desc: "Editorial direction and site for an accounting firm that wanted to look competent rather than clever. Green and ink, no metaphors about balance.",
  },
  {
    num: "07",
    name: "Vellore Trip Books",
    cats: ["Branding", "Art Direction"],
    year: "2021",
    desc: "Print-inspired booklets and a web itinerary system for a boutique travel outfit. Every trip reads like a chapter, not a package deal.",
  },
  {
    num: "08",
    name: "Signal Type Specimen",
    cats: ["Art Direction"],
    year: "2020",
    desc: "A self-initiated specimen for a display face we kept using on jobs. Painted lettering, one colour, thirty-two pages, no apologies.",
  },
];

const SERVICES = [
  ["Brand", "Logos, identities, and the two-page guidelines that actually get used."],
  ["Web", "Sites built to be fast, editable, and to not embarrass you in six months."],
  ["Design systems", "The shared vocabulary so your product stops looking like a collage."],
];

const PRINCIPLES = [
  {
    title: "Small team, senior hands",
    body: "You talk to the people who will do the work — not a sales layer, not a delivery team that appears after the contract. Six people, all of them still making.",
  },
  {
    title: "Poster first, brochure second",
    body: "We design the one thing you'd hang on a wall before we design the website. If the poster isn't strong, no amount of page templates will fix it.",
  },
  {
    title: "We finish things",
    body: "The last ten percent is where most projects die. We bill for it, we schedule for it, and we're unreasonably proud of shipping.",
  },
];

const STATS = [
  ["12", "years in practice"],
  ["40+", "projects shipped"],
  ["6", "people, no juniors in the room"],
  ["3", "days average reply"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#F4F0E9]/15 bg-[#121319]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#F4F0E9]">
          MONO STUDIO
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10.5px] uppercase tracking-wide text-[#F4F0E9]/60 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#F4F0E9] ${active === l.key ? "text-[#FF4F3F]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/contact`}
            className="bg-[#FF4F3F] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-[#121319] transition-colors hover:bg-white"
          >
            Start a project
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-[#121319] border-[#F4F0E9]/15 text-[#F4F0E9]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-[#F4F0E9]/15 bg-[#121319] px-6 py-8 font-mono text-[10px] uppercase tracking-wide text-[#F4F0E9]/55">
      <span>Mono Studio — Demo website</span>
      <span className="hidden sm:block">We're currently booking Q3</span>
    </footer>
  );
}

function WorkRow({ work, open, onToggle }) {
  return (
    <div className="border-b border-[#F4F0E9]/10">
      <button
        onClick={onToggle}
        className={`grid w-full grid-cols-[50px_1fr_auto] items-center gap-3 py-5 text-left sm:grid-cols-[70px_1fr_1fr_60px] sm:gap-6 ${
          open ? "text-[#FF4F3F]" : "text-[#F4F0E9]"
        }`}
      >
        <span className="font-mono text-[11px] text-[#F4F0E9]/40">{work.num}</span>
        <span className="font-display text-[18px] font-semibold transition-transform sm:text-[22px] group-hover:translate-x-1">
          {work.name}
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-wide text-[#F4F0E9]/45 sm:block">
          {work.cats.join(" · ")}
        </span>
        <span className="text-right font-mono text-[11px] text-[#F4F0E9]/35">{work.year}</span>
      </button>
      {open && (
        <p className="max-w-[64ch] pb-6 text-[13.5px] leading-relaxed text-[#F4F0E9]/60">{work.desc}</p>
      )}
    </div>
  );
}

function HomePage() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20 md:pb-20 md:pt-28">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#121319]/60">
          Creative studio · Dhaka
        </span>
        <h1 className="mt-5 max-w-[10ch] font-display text-[52px] font-semibold leading-[0.9] tracking-tight sm:text-[76px] md:text-[104px]">
          WE MAKE THE THING YOU'RE AVOIDING.
        </h1>
        <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row">
          <p className="max-w-[34ch] font-mono text-[11px] uppercase tracking-wide text-[#121319]/65">
            Brand, web, and design systems for teams who've been "meaning to".
          </p>
          <Link
            to={`${BASE}/work`}
            className="w-fit border border-[#121319]/30 px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-[#121319] transition-colors hover:bg-[#121319] hover:text-[#FF4F3F]"
          >
            See the work ↓
          </Link>
        </div>
      </section>
      <section className="bg-[#121319] text-[#F4F0E9]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F0E9]/45">
              Selected work
            </h2>
            <Link to={`${BASE}/work`} className="font-mono text-[11px] text-[#FF4F3F] hover:text-[#F4F0E9]">
              All work →
            </Link>
          </div>
          <div className="flex flex-col">
            {WORK.slice(0, 4).map((w, i) => (
              <WorkRow key={w.num} work={w} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-2 font-display text-[15px] font-semibold uppercase tracking-wide text-[#121319]/45">
          {["Brand", "Web", "Art direction", "Design systems", "Print", "Motion"].map((w, i) => (
            <span key={w} className="flex items-baseline gap-8">
              {i > 0 && <span className="text-[#FF4F3F]">/</span>}
              {w}
            </span>
          ))}
        </div>
      </section>
      <section className="border-t border-[#121319]/15">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map(([n, d]) => (
              <Stat key={n} value={n} label={d} valueClass="text-[#FF4F3F]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WorkPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(0);
  const items = WORK.filter((w) => cat === "All" || w.cats.includes(cat));
  return (
    <section className="bg-[#121319] text-[#F4F0E9]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F3F]">
          The work index
        </span>
        <h2 className="mt-4 font-display text-[34px] font-semibold leading-[0.95] tracking-tight sm:text-[48px]">
          Everything we've shipped since 2020.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <FilterChips
            options={CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#F4F0E9]/20 text-[#F4F0E9]/55 hover:border-[#FF4F3F]/60"
            activeClassName="bg-[#FF4F3F] text-[#121319] border-[#FF4F3F]"
          />
          <span className="font-mono text-[11px] uppercase tracking-wide text-[#F4F0E9]/40">
            {items.length} project{items.length === 1 ? "" : "s"} · click a row for the story
          </span>
        </div>
        <div className="mt-10 flex flex-col">
          {items.length === 0 && (
            <p className="py-16 text-center text-[14px] text-[#F4F0E9]/40">
              Nothing in that discipline yet.
            </p>
          )}
          {items.map((w, i) => (
            <WorkRow key={w.num} work={w} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F3F]">About</span>
        <h2 className="mt-4 max-w-[16ch] font-display text-[34px] font-semibold leading-[0.95] tracking-tight sm:text-[52px]">
          A small studio that would rather be loud than busy.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="max-w-[58ch] text-[15px] leading-relaxed text-[#F4F0E9]/65">
            Mono Studio is six people in Dhanmondi, Dhaka. We work on identity, web, and the systems
            that keep both alive after launch. Most of our clients come to us with a project they've
            been postponing — we're the ones who make them stop postponing it.
          </p>
          <p className="max-w-[58ch] text-[15px] leading-relaxed text-[#F4F0E9]/65">
            We keep the roster small and the opinions large. If a job doesn't need us, we say so in
            the first call — and we've pointed more than a few people at a template, or at someone
            who'd do it better. The work we take is the work we can do proudly.
          </p>
        </div>
      </section>
      <section className="border-t border-[#121319]/15 bg-[#FF4F3F] text-[#121319]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-px bg-[#121319]/15 sm:grid-cols-3">
            {SERVICES.map(([n, d]) => (
              <div key={n} className="bg-[#FF4F3F] p-6">
                <h3 className="font-display text-[18px] font-semibold">{n}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#121319]/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-[22px] font-semibold tracking-tight">How we work</h2>
          <Accordion items={PRINCIPLES} className="divide-[#F4F0E9]/15" openClass="text-[#F4F0E9]/65" />
        </div>
      </section>
      <section className="border-t border-[#121319]/15">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map(([n, d]) => (
              <Stat key={n} value={n} label={d} valueClass="text-[#FF4F3F]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="bg-[#121319] text-[#F4F0E9]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F3F]">Contact</span>
        <h2 className="mt-4 max-w-[14ch] font-display text-[34px] font-semibold leading-[0.95] tracking-tight sm:text-[52px]">
          Have a thing you've been putting off?
        </h2>
        <p className="mt-5 max-w-[46ch] text-[14.5px] leading-relaxed text-[#F4F0E9]/55">
          One twenty-minute call is usually enough to know if we're the right size. If we're not,
          we'll say who is.
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="grid gap-8 sm:grid-cols-2">
              <Stat value="hello@monostudio.co" label="Email us" valueClass="text-[16px] text-[#FF4F3F]" />
              <Stat value="+880 1X-XXXX XXXX" label="Call or text" valueClass="text-[16px]" />
            </div>
            <div className="border-t border-[#F4F0E9]/15 pt-6">
              <div className="font-mono text-[10.5px] uppercase tracking-wide text-[#FF4F3F]">Studio</div>
              <p className="mt-2 text-[14px] text-[#F4F0E9]/70">
                Studio 07, Building C, Dhanmondi, Dhaka 1209. Ring the bell marked with the red square.
              </p>
            </div>
            <div className="border-t border-[#F4F0E9]/15 pt-6">
              <div className="font-mono text-[10.5px] uppercase tracking-wide text-[#FF4F3F]">Office hours</div>
              <p className="mt-2 text-[14px] text-[#F4F0E9]/70">
                Mon–Fri, 10:00–18:00. We check email last thing at night, against our better judgement.
              </p>
            </div>
          </div>
          <div className="border border-[#F4F0E9]/20 p-6 md:p-8 [&_input]:border-[#F4F0E9]/25 [&_textarea]:border-[#F4F0E9]/25">
            <h3 className="font-display text-[18px] font-semibold">Tell us about the thing</h3>
            <p className="mt-2 mb-6 text-[12.5px] text-[#F4F0E9]/45">
              A few lines about the project, the deadline you're imagining, and why now.
            </p>
            <ContactForm
              name="Your name"
              email="Email"
              message="What's the thing you've been avoiding?"
              submitLabel="Send the enquiry"
              accent="#FF4F3F"
              successMessage="Thanks — we read everything. Expect a reply within three working days, usually with a recommendation either way."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, work: WorkPage, about: AboutPage, contact: ContactPage };

export default function MonoStudio() {
  return (
    <div className="min-h-screen bg-[#FF4F3F] font-body text-[#121319]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="mono-studio" dark />
    </div>
  );
}
