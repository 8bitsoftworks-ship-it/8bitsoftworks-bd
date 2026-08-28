import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import BookingForm from "../demo-kit/BookingForm";
import PriceTier from "../demo-kit/PriceTier";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/forma";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/schedule`, label: "Schedule" },
  { to: `${BASE}/classes`, label: "Classes" },
  { to: `${BASE}/trainers`, label: "Trainers" },
  { to: `${BASE}/book`, label: "Book" },
];

const ACCENT = "#FF6A3D";

const CLASS_TYPES = ["All", "Strength", "Conditioning", "Mobility"];

const SCHEDULE = [
  { day: "Mon", time: "06:00", cls: "Strength", coach: "Rafi", spots: "Open" },
  { day: "Mon", time: "18:00", cls: "Conditioning", coach: "Mimi", spots: "3 spots" },
  { day: "Tue", time: "06:00", cls: "Strength", coach: "Tanvir", spots: "Open" },
  { day: "Tue", time: "19:00", cls: "Mobility", coach: "Mimi", spots: "Open" },
  { day: "Wed", time: "06:00", cls: "Strength", coach: "Rafi", spots: "Open" },
  { day: "Wed", time: "18:00", cls: "Mobility", coach: "Mimi", spots: "5 spots" },
  { day: "Thu", time: "06:00", cls: "Strength", coach: "Tanvir", spots: "Full" },
  { day: "Fri", time: "17:30", cls: "Conditioning", coach: "Rafi", spots: "Open" },
  { day: "Fri", time: "18:45", cls: "Mobility", coach: "Mimi", spots: "Open" },
  { day: "Sat", time: "08:00", cls: "Conditioning", coach: "Tanvir", spots: "2 spots" },
];

const CLASSES = [
  {
    name: "Strength",
    desc: "Barbell, dumbbell, and bodyweight work in a small group — built around your numbers, not a generic template.",
    focus: "Technique · progressive load · 50 min",
  },
  {
    name: "Conditioning",
    desc: "Intervals, circuits, and engine work. The hour that makes everything else feel easy.",
    focus: "Work capacity · pacing · 45 min",
  },
  {
    name: "Mobility",
    desc: "Slow, precise joint work for people who sit at a desk and lift heavy. Bring your tightest hip.",
    focus: "Range of motion · breathing · 40 min",
  },
];

const TRAINERS = [
  { name: "Rafi Hasan", role: "Head coach — strength", bio: "15 years coaching. Built Forma's programming from a whiteboard and a stopwatch.", bg: "linear-gradient(135deg,#FF6A3D,#3D1A0D)" },
  { name: "Mimi Chowdhury", role: "Mobility & recovery", bio: "Former physio assistant who turned her own back injury into a whole class.", bg: "linear-gradient(135deg,#3D3D3D,#111)" },
  { name: "Tanvir Alam", role: "Conditioning coach", bio: "Track background, marathon medals, and a belief that you can always do one more.", bg: "linear-gradient(135deg,#C25730,#61290F)" },
];

const MEMBERSHIP = [
  { name: "Drop-in", price: "৳600", desc: "Per class, no commitment.", features: ["Any class", "No membership", "Book up to 24h ahead"] },
  { name: "Monthly", price: "৳3,500", desc: "Unlimited classes, one location.", features: ["Unlimited classes", "Guest pass every month", "Pause anytime"], highlighted: true },
  { name: "Off-peak", price: "৳2,200", desc: "All classes before 5pm, Mon–Fri.", features: ["Weekday mornings", "Same coaching", "Freeze up to 14 days"] },
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#181818]/10 bg-[#FAFAF7]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-display text-[16px] font-semibold tracking-tight">
          FORMA
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-wide text-[#181818]/50 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#181818] ${active === l.label.toLowerCase() ? "text-[#181818]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/book`}
            className="bg-[#FF6A3D] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-[#181818] transition-colors hover:bg-[#181818] hover:text-[#FF6A3D]"
          >
            Book a class
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#181818]/10 text-[#181818]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#181818]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#181818]/40">
      Forma — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
      <h1 className="font-display text-[42px] font-semibold leading-[0.98] tracking-tight sm:text-[62px]">
        Strength.
        <br />
        On a schedule.
      </h1>
      <p className="mt-6 max-w-[44ch] text-[15px] leading-relaxed text-[#181818]/55">
        Small-group strength and conditioning, six days a week. One location, real coaching, a
        schedule that doesn't change every month.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          to={`${BASE}/schedule`}
          className="bg-[#181818] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#FAFAF7] transition-colors hover:bg-[#FF6A3D] hover:text-[#181818]"
        >
          See this week's classes
        </Link>
        <Link
          to={`${BASE}/book`}
          className="border border-[#181818]/20 px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#181818] hover:border-[#181818]/50"
        >
          Book your first class
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#181818]/10 pt-8">
        <Stat value="6 days" label="A week, same coaches" />
        <Stat value="8 max" label="People per class" />
        <Stat value="1st" label="Class is free" />
      </div>
    </section>
  );
}

function WeekPreview() {
  const week = SCHEDULE.slice(0, 4);
  return (
    <section className="border-t border-[#181818]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-[26px] font-semibold">This week</h2>
          <Link to={`${BASE}/schedule`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#181818]/50 hover:text-[#181818]">
            Full schedule →
          </Link>
        </div>
        <div className="flex flex-col">
          {week.map((s, i) => (
            <div key={i} className="flex items-center justify-between border-b border-[#181818]/10 py-4">
              <div className="flex items-center gap-4 sm:gap-8">
                <span className="w-8 font-mono text-[11px] text-[#181818]/45">{s.day}</span>
                <span className="w-12 font-mono text-[11px] text-[#181818]/45">{s.time}</span>
                <span className="font-display text-[15px] font-semibold">{s.cls}</span>
              </div>
              <span className={`font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 ${s.spots === "Full" ? "bg-[#181818]/10 text-[#181818]/40" : "bg-[#FF6A3D]/15 text-[#c04d24]"}`}>
                {s.spots}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStay() {
  return (
    <section className="border-t border-[#181818]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-8 font-mono text-[11px] uppercase tracking-wide text-[#181818]/50">Why people stay</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["“Six classes a week, same coaches, no surprises. That's the whole appeal.”", "— Farzana, member 2 yrs"],
            ["“The 6am session is the most consistent hour of my week.”", "— Imran"],
            ["“I moved three times and never left. Nothing else comes close.”", "— Shreya"],
          ].map(([quote, who]) => (
            <div key={who} className="flex flex-col justify-between border border-[#181818]/10 p-5">
              <p className="text-[13px] italic leading-relaxed text-[#181818]/70">{quote}</p>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#FF6A3D]">{who}</span>
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
      <WeekPreview />
      <WhyStay />
    </>
  );
}

function SchedulePage() {
  const [type, setType] = useState("All");
  const rows = SCHEDULE.filter((s) => type === "All" || s.cls === type);
  return (
    <section className="border-t border-[#181818]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">This week</h2>
        <p className="mt-3 max-w-[44ch] text-[14px] text-[#181818]/55">
          Six days, three class types, eight people max. Book up to a week ahead.
        </p>
        <div className="mt-8">
          <FilterChips
            options={CLASS_TYPES}
            active={type}
            onChange={setType}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#181818]/15 text-[#181818]/55 hover:border-[#181818]/40"
            activeClassName="bg-[#181818] text-[#FAFAF7] border-[#181818]"
          />
        </div>
        <div className="mt-8 flex flex-col">
          {rows.map((s, i) => (
            <div key={i} className="grid grid-cols-[44px_56px_1fr_auto] items-center gap-3 border-b border-[#181818]/10 py-4 sm:grid-cols-[44px_56px_1fr_120px_auto]">
              <span className="font-mono text-[11px] text-[#181818]/45">{s.day}</span>
              <span className="font-mono text-[11px] text-[#181818]/45">{s.time}</span>
              <span className="font-display text-[15px] font-semibold">{s.cls}</span>
              <span className="hidden font-mono text-[10px] uppercase tracking-wide text-[#181818]/40 sm:block">{s.coach}</span>
              <span className={`font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 ${s.spots === "Full" ? "bg-[#181818]/10 text-[#181818]/40" : "bg-[#FF6A3D]/15 text-[#c04d24]"}`}>
                {s.spots}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10.5px] uppercase tracking-wide text-[#181818]/40">
          {rows.length} classes · drop-ins welcome if a spot is open
        </p>
      </div>
    </section>
  );
}

function ClassesPage() {
  return (
    <section className="border-t border-[#181818]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">Classes</h2>
        <p className="mt-3 max-w-[44ch] text-[14px] text-[#181818]/55">
          Three formats, taught by the same small group of coaches. Everything is written for the
          people in the room, not for a screen.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CLASSES.map((c, i) => (
            <div key={c.name} className="flex flex-col border border-[#181818]/10 p-6">
              <div className="mb-4 aspect-[4/3] border border-[#181818]/10" style={{ background: TRAINERS[i].bg }} />
              <h3 className="font-display text-[18px] font-semibold">{c.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#181818]/55">{c.desc}</p>
              <span className="mt-4 font-mono text-[10px] uppercase tracking-wide text-[#FF6A3D]">{c.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainersPage() {
  return (
    <section className="border-t border-[#181818]/10 bg-[#181818] text-[#FAFAF7]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">Coaches</h2>
        <p className="mt-3 max-w-[44ch] text-[14px] text-[#FAFAF7]/55">
          Three coaches, full time, no freelancers cycling through. They're here when you're here.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {TRAINERS.map((t) => (
            <div key={t.name}>
              <div className="mb-4 aspect-square border border-white/10" style={{ background: t.bg }} />
              <h3 className="font-display text-[16px] font-semibold">{t.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#FF6A3D]">{t.role}</span>
              <p className="mt-1.5 text-[12.5px] text-[#FAFAF7]/55">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookPage() {
  return (
    <section className="border-t border-[#181818]/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[34px] font-semibold">Book a class</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-[#181818]/55">
            Your first class is free. Pick a class and a time and we'll confirm by text — you'll
            get a session plan before you walk in.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Stat value="8 max" label="People per class" />
            <Stat value="48 hrs" label="Free cancellation" />
          </div>
          <h3 className="mt-10 mb-4 font-mono text-[11px] uppercase tracking-wide text-[#181818]/50">Membership</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {MEMBERSHIP.map((m) => (
              <PriceTier key={m.name} {...m} accent={ACCENT} cta="Choose" className="bg-white" />
            ))}
          </div>
        </div>
        <div className="border border-[#181818]/10 bg-white p-6 md:p-8">
          <BookingForm
            accent={ACCENT}
            submitLabel="Book my first class"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name", required: true },
              { key: "phone", label: "Phone", placeholder: "+880 …", required: true },
              { key: "class", label: "Class", type: "select", options: CLASS_TYPES.slice(1), placeholder: "Which class?" },
              { key: "time", label: "Preferred slot", type: "select", options: ["Mon 06:00", "Mon 18:00", "Tue 06:00", "Tue 19:00", "Wed 06:00", "Fri 17:30", "Sat 08:00"], placeholder: "Pick a slot" },
              { key: "experience", label: "Training background", type: "select", options: ["New to the gym", "Some lifting", "Trained before, came back", "Competitive"], placeholder: "Where are you starting?" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, schedule: SchedulePage, classes: ClassesPage, trainers: TrainersPage, book: BookPage };

export default function Forma() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-body text-[#181818]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="forma" />
    </div>
  );
}
