import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import Accordion from "../demo-kit/Accordion";
import FilterChips from "../demo-kit/FilterChips";
import BookingForm from "../demo-kit/BookingForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/healwise";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/services`, label: "Services" },
  { to: `${BASE}/practitioners`, label: "Practitioners" },
  { to: `${BASE}/book`, label: "Book" },
];

const ACCENT = "#1F8F69";

const SERVICES = [
  {
    title: "Physiotherapy",
    price: "৳1,200 · 45 min",
    body: "Back, neck, and joint pain — hands-on treatment with a written plan you can follow at home. Most people feel movement change within two sessions.",
  },
  {
    title: "Osteopathy",
    price: "৳1,500 · 50 min",
    body: "Whole-body assessment and gentle manual treatment for stiffness, old injuries, and the kind of tension that shows up as headaches.",
  },
  {
    title: "Sports massage",
    price: "৳1,000 · 40 min",
    body: "Recovery work for runners, lifters, and anyone who overdid it on Monday. Deep, deliberate, and followed by what to do tonight.",
  },
  {
    title: "Occupational health",
    price: "৳1,800 · 60 min",
    body: "Desk setup, repetitive strain, and return-to-work programmes for local teams. Half assessment, half fixing your actual workspace.",
  },
  {
    title: "Home visits",
    price: "From ৳2,500",
    body: "For post-surgery recovery and people who can't travel. A physio comes to you, same assessment, same written plan.",
  },
];

const SPECIALTIES = ["All", "Physiotherapy", "Osteopathy", "Sports"];

const PRACTITIONERS = [
  { name: "Nadia Rahman", role: "Principal Physio", special: "Physiotherapy", exp: "14 yrs", bio: "Ex-national team clinic. The one everyone's colleague recommends.", bg: "linear-gradient(135deg,#1F8F69,#0A3D2B)" },
  { name: "Sakib Hasan", role: "Osteopath", special: "Osteopathy", exp: "8 yrs", bio: "Trained in London, homegrown patience. Quiet hands, precise questions.", bg: "linear-gradient(135deg,#3E8E7E,#14453B)" },
  { name: "Runa Akter", role: "Sports Therapist", special: "Sports", exp: "11 yrs", bio: "Marathon medic and run club founder. Speaks fluent 'it hurts when I…'.", bg: "linear-gradient(135deg,#2B7A5E,#0F3326)" },
  { name: "Fahim Islam", role: "Senior Physio", special: "Physiotherapy", exp: "9 yrs", bio: "Specialist in shoulder and neck rehab, with a knack for explaining what's actually wrong.", bg: "linear-gradient(135deg,#57A98F,#1B4A39)" },
];

const WHY = [
  ["45 min", "Every session, including the first one."],
  ["Written plan", "You leave with exercises, not vague advice."],
  ["1-week check-in", "We call, you tell us if it's better."],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#1C2620]/10 bg-[#F4F8F4]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-display text-[16px] font-semibold tracking-tight">
          Healwise
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-wide text-[#1C2620]/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#1C2620] ${active === l.label.toLowerCase() ? "text-[#1C2620]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/book`}
            className="bg-[#1F8F69] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white transition-colors hover:bg-[#1C2620]"
          >
            Book an appointment
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#1C2620]/10 text-[#1C2620]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1C2620]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1C2620]/40">
      Healwise — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-14 md:grid-cols-2 md:pt-24 md:pb-20">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1F8F69]">Clinic · Dhanmondi</span>
        <h1 className="mt-4 font-display text-[38px] font-semibold leading-[1.03] sm:text-[54px]">
          Feel better,
          <br />
          <span className="italic text-[#1F8F69]">measured.</span>
        </h1>
        <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#1C2620]/60">
          Every visit starts with an assessment, ends with a written plan, and follows up in a
          week. We treat the problem, not the appointment slot.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            to={`${BASE}/book`}
            className="bg-[#1F8F69] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#1C2620]"
          >
            Book now
          </Link>
          <Link
            to={`${BASE}/services`}
            className="border border-[#1C2620]/20 px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#1C2620] transition-colors hover:border-[#1C2620]/50"
          >
            See services
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-[4/5] border border-[#1C2620]/10" style={{ background: "linear-gradient(135deg,#1F8F69,#0A3D2B)" }}>
          <div className="flex h-full items-end p-3">
            <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/60">Assessment room — 01</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8">
          <div className="aspect-[4/3] border border-[#1C2620]/10" style={{ background: "linear-gradient(135deg,#57A98F,#1B4A39)" }} />
          <div className="border border-[#1C2620]/10 bg-white p-4">
            <span className="font-mono text-[10px] uppercase tracking-wide text-[#1F8F69]">Next available</span>
            <div className="mt-1 font-display text-[18px] font-semibold">Today, 4:30pm</div>
            <p className="mt-0.5 text-[12px] text-[#1C2620]/55">Physio · 45 min · ৳1,200</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="grid gap-8 sm:grid-cols-3">
        {WHY.map(([n, d]) => (
          <div key={n} className="border-t-2 border-[#1F8F69] pt-4">
            <div className="font-display text-[20px] font-semibold text-[#1F8F69]">{n}</div>
            <p className="mt-1 text-[13px] text-[#1C2620]/60">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
    </>
  );
}

function ServicesPage() {
  return (
    <section className="border-t border-[#1C2620]/10">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">What we do</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-[#1C2620]/60">
          Five services, one approach: assess first, treat second, write everything down. Prices
          are per session and the first visit is the same length as every other.
        </p>
        <div className="mt-8 border-t border-[#1C2620]/10">
          <Accordion
            items={SERVICES}
            defaultOpen={0}
            className="text-[#1C2620]"
            openClass="text-[#1C2620]/70"
          />
        </div>
        <p className="mt-6 font-mono text-[10.5px] uppercase tracking-wide text-[#1C2620]/45">
          Not sure which one? Book and say “advise me” — we'll route you.
        </p>
      </div>
    </section>
  );
}

function PractitionersPage() {
  const [special, setSpecial] = useState("All");
  const shown = PRACTITIONERS.filter((p) => special === "All" || p.special === special);
  return (
    <section className="border-t border-[#1C2620]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">Practitioners</h2>
        <p className="mt-3 max-w-[44ch] text-[14px] text-[#1C2620]/60">
          Four clinicians, each with a specialty they've done thousands of times. Every
          appointment is with a named person — never “whoever's free.”
        </p>
        <div className="mt-8">
          <FilterChips
            options={SPECIALTIES}
            active={special}
            onChange={setSpecial}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#1C2620]/15 text-[#1C2620]/55 hover:border-[#1C2620]/40"
            activeClassName="bg-[#1F8F69] text-white border-[#1F8F69]"
          />
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((p) => (
            <div key={p.name} className="flex flex-col">
              <div className="mb-4 aspect-square border border-[#1C2620]/10" style={{ background: p.bg }} />
              <h3 className="font-display text-[16px] font-semibold">{p.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#1F8F69]">{p.role} · {p.exp}</span>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#1C2620]/55">{p.bio}</p>
              <Link
                to={`${BASE}/book`}
                className="mt-4 border border-[#1F8F69]/40 py-2 text-center font-mono text-[10px] uppercase tracking-wide text-[#1F8F69] transition-colors hover:bg-[#1F8F69] hover:text-white"
              >
                Book {p.name.split(" ")[0]}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookPage() {
  return (
    <section className="border-t border-[#1C2620]/10 bg-[#1C2620] text-[#F4F8F4]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[30px] font-semibold leading-tight">Book an appointment.</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-[#F4F8F4]/60">
            Tell us what's going on and we'll suggest the right person. Same-week appointments
            usually available.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#F4F8F4]/10 pt-8">
            <Stat value="4.9" label="Patient rating" valueClass="text-[#F4F8F4]" />
            <Stat value="Same wk" label="Usually available" valueClass="text-[#F4F8F4]" />
            <Stat value="1 wk" label="Check-in call" valueClass="text-[#F4F8F4]" />
          </div>
          <div className="mt-8 space-y-1.5 font-mono text-[11px] text-[#F4F8F4]/70">
            <p>House 12, Road 9, Dhanmondi, Dhaka</p>
            <p>hello@healwise.clinic</p>
            <p>Open Mon–Sat, 9am–8pm</p>
          </div>
        </div>
        <div className="border border-[#1F8F69]/40 bg-[#1C2620] p-6 md:p-8">
          <BookingForm
            accent={ACCENT}
            submitLabel="Request appointment"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name", required: true },
              { key: "phone", label: "Phone", placeholder: "+880 …", required: true },
              { key: "service", label: "Service", type: "select", options: ["Physiotherapy", "Osteopathy", "Sports massage", "Occupational health", "Home visit", "Not sure — advise me"], placeholder: "What do you need?" },
              { key: "date", label: "Preferred date", type: "date", required: true },
              { key: "notes", label: "Briefly, what's going on?", type: "text", placeholder: "Where it hurts, how long, what makes it better", required: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, services: ServicesPage, practitioners: PractitionersPage, book: BookPage };

export default function Healwise() {
  return (
    <div className="min-h-screen bg-[#F4F8F4] font-body text-[#1C2620]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="healwise" />
    </div>
  );
}
