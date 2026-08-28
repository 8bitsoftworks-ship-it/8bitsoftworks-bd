import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import BookingForm from "../demo-kit/BookingForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/atelier-nine";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/services`, label: "Services" },
  { to: `${BASE}/team`, label: "Team" },
  { to: `${BASE}/booking`, label: "Booking" },
];

const ACCENT = "#A24E3F";

const SERVICE_CATS = ["All", "Hair", "Skin", "Nails"];

const SERVICES = [
  { name: "Cut & finish", cat: "Hair", price: "৳1,200", time: "60 min", desc: "A consult, a cut that suits your hair's nature, and a finish that survives real life." },
  { name: "Colour", cat: "Hair", price: "From ৳2,500", time: "2–3 hrs", desc: "Single process, balayage, or a full change — with a strand test first, always." },
  { name: "Deep-conditioning ritual", cat: "Hair", price: "৳1,800", time: "45 min", desc: "Steam, oil, and a mask chosen for your hair's actual needs." },
  { name: "Signature facial", cat: "Skin", price: "৳2,200", time: "60 min", desc: "Cleanse, exfoliate, extract, mask — the full reset, done by a therapist, not a machine." },
  { name: "Brightening treatment", cat: "Skin", price: "৳2,800", time: "75 min", desc: "For dullness and uneven tone. A gentle series you can repeat monthly." },
  { name: "Express facial", cat: "Skin", price: "৳1,200", time: "30 min", desc: "The lunch-break version — clean, bright, and back at your desk glowing." },
  { name: "Manicure & pedicure", cat: "Nails", price: "৳1,500", time: "75 min", desc: "Cuticle care, shaping, and polish that's actually dry before you leave." },
  { name: "Gel colour", cat: "Nails", price: "৳1,800", time: "60 min", desc: "Long-lasting colour with proper prep and removal the way it should be done." },
];

const TEAM = [
  { name: "Meher Jahan", role: "Lead stylist", exp: "12 yrs", bio: "Colour specialist who insists on the strand test and a cup of tea before every chair.", bg: "linear-gradient(135deg,#A24E3F,#3D1812)" },
  { name: "Sharmin Akter", role: "Skin therapist", exp: "9 yrs", bio: "Facialist known for the express facial — thirty minutes, zero shortcuts.", bg: "linear-gradient(135deg,#C97A6A,#5A2A20)" },
  { name: "Nabila Chowdhury", role: "Nail artist", exp: "7 yrs", bio: "Precision on cuticles, brave on colour. Books out two weeks ahead for a reason.", bg: "linear-gradient(135deg,#8A5A4E,#332019)" },
  { name: "Tahsin Rahman", role: "Junior stylist", exp: "4 yrs", bio: "Trained entirely in-house. The best person in the building to explain what's possible.", bg: "linear-gradient(135deg,#B26B5C,#4A2218)" },
];

const HOME_SERVICES = [
  ["Cut & finish", "From ৳1,200", "Hair"],
  ["Signature facial", "৳2,200", "Skin"],
  ["Gel colour", "৳1,800", "Nails"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#2A1A16]/10 bg-[#FAF6F1]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-serif text-[18px] tracking-wide">
          Atelier Nine
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#2A1A16]/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#2A1A16] ${active === l.label.toLowerCase() ? "text-[#2A1A16]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/booking`}
            className="bg-[#A24E3F] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white transition-colors hover:bg-[#2A1A16]"
          >
            Book now
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#2A1A16]/10 text-[#2A1A16]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2A1A16]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#2A1A16]/40">
      Atelier Nine — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 pb-14 md:grid-cols-2 md:pt-24 md:pb-20">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A24E3F]">Hair · skin · nails — Gulshan</span>
        <h1 className="mt-4 font-serif text-[42px] leading-[1.05] sm:text-[58px]">
          Time for yourself, <span className="italic text-[#A24E3F]">booked properly.</span>
        </h1>
        <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#2A1A16]/60">
          A calm studio with nine chairs, no music blaring, and treatments that start on time.
          You come in stressed; you leave a version of yourself that remembered to breathe.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            to={`${BASE}/booking`}
            className="bg-[#A24E3F] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#2A1A16]"
          >
            Book an appointment
          </Link>
          <Link
            to={`${BASE}/services`}
            className="border border-[#2A1A16]/20 px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#2A1A16] hover:border-[#2A1A16]/50"
          >
            See services
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-[4/5] border border-[#2A1A16]/10" style={{ background: "linear-gradient(135deg,#A24E3F,#3D1812)" }}>
          <div className="flex h-full items-end p-3">
            <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/60">The colour room — 02</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8">
          <div className="aspect-[4/3] border border-[#2A1A16]/10" style={{ background: "linear-gradient(135deg,#C97A6A,#5A2A20)" }} />
          <div className="border border-[#2A1A16]/10 bg-white p-4">
            <span className="font-mono text-[10px] uppercase tracking-wide text-[#A24E3F]">Next available</span>
            <div className="mt-1 font-serif text-[18px]">Today, 3:00pm</div>
            <p className="mt-0.5 text-[12px] text-[#2A1A16]/55">Cut & finish · 60 min</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="border-t border-[#2A1A16]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-[28px] italic">Most booked this month</h2>
          <Link to={`${BASE}/services`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#2A1A16]/50 hover:text-[#2A1A16]">
            All services →
          </Link>
        </div>
        <div className="flex flex-col">
          {HOME_SERVICES.map(([name, price, cat]) => (
            <div key={name} className="flex items-baseline justify-between border-b border-[#2A1A16]/10 py-4">
              <div>
                <span className="font-serif text-[16px]">{name}</span>
                <span className="ml-3 font-mono text-[9.5px] uppercase tracking-wide text-[#A24E3F]">{cat}</span>
              </div>
              <span className="font-mono text-[13px] text-[#A24E3F]">{price}</span>
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
      <ServicesPreview />
    </>
  );
}

function ServicesPage() {
  const [cat, setCat] = useState("All");
  const items = SERVICES.filter((s) => cat === "All" || s.cat === cat);
  return (
    <section className="border-t border-[#2A1A16]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-[36px] italic">Services</h2>
        <p className="mt-3 max-w-[48ch] text-[14px] text-[#2A1A16]/60">
          Eight treatments, priced plainly. Every one ends with the honest answer to “how do I
          keep this going at home?”
        </p>
        <div className="mt-8">
          <FilterChips
            options={SERVICE_CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#2A1A16]/15 text-[#2A1A16]/55 hover:border-[#2A1A16]/40"
            activeClassName="bg-[#A24E3F] text-white border-[#A24E3F]"
          />
        </div>
        <div className="mt-8 flex flex-col">
          {items.map((s) => (
            <div key={s.name} className="grid gap-2 border-b border-[#2A1A16]/10 py-5 md:grid-cols-[1fr_auto] md:items-baseline">
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-[17px]">{s.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#2A1A16]/45">{s.cat} · {s.time}</span>
                </div>
                <p className="mt-1 max-w-[56ch] text-[13px] leading-relaxed text-[#2A1A16]/55">{s.desc}</p>
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-1">
                <span className="font-mono text-[14px] text-[#A24E3F]">{s.price}</span>
                <Link
                  to={`${BASE}/booking`}
                  className="border border-[#A24E3F]/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[#A24E3F] transition-colors hover:bg-[#A24E3F] hover:text-white"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10.5px] uppercase tracking-wide text-[#2A1A16]/45">
          First visit? Mention this page for 10% off any single treatment.
        </p>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <section className="border-t border-[#2A1A16]/10 bg-[#2A1A16] text-[#FAF6F1]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-[36px] italic">The atelier</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] text-[#FAF6F1]/55">
          Four people you'll actually see, every visit. No rotation of strangers — you book a
          person, and that person knows your hair, your skin, and your small talk.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((t) => (
            <div key={t.name}>
              <div className="mb-4 aspect-square border border-white/10" style={{ background: t.bg }} />
              <h3 className="font-serif text-[17px]">{t.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#C97A6A]">{t.role} · {t.exp}</span>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#FAF6F1]/55">{t.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4">
          {[
            ["Quiet hours", "Tue & Wed mornings are audio-free. Book them if you need the silence."],
            ["Walk-ins", "Rarely — the chair map is usually full. Call ahead and we'll find a spot."],
            ["Sensitive skin", "Tell us when booking. We carry a patch test for everything, no judgement."],
          ].map(([q, a]) => (
            <div key={q} className="grid gap-1 border-b border-white/10 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
              <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#C97A6A]">{q}</span>
              <p className="max-w-[56ch] text-[13.5px] leading-relaxed text-[#FAF6F1]/60">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingPage() {
  return (
    <section className="border-t border-[#2A1A16]/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-[36px] italic">Book an appointment.</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-[#2A1A16]/60">
            Pick a service, pick a person, pick a time. We confirm by text within the hour —
            and if your preferred slot is gone, we'll say so instead of quietly overbooking.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Stat value="60 min" label="Average wait: zero" />
            <Stat value="24 hrs" label="Free rescheduling" />
            <Stat value="On time" label="Or the treatment is free" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {[
              ["Address", "House 4, Road 11, Gulshan 1, Dhaka"],
              ["Hours", "Tue–Sun, 10am–8pm. Closed Mondays."],
              ["Phone", "+880 1X-XXXX XXXX"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-4 border-b border-[#2A1A16]/10 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#A24E3F]">{k}</span>
                <p className="text-[13px] text-[#2A1A16]/65">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[#2A1A16]/10 bg-white p-6 md:p-8">
          <BookingForm
            accent={ACCENT}
            submitLabel="Request appointment"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name", required: true },
              { key: "phone", label: "Phone", placeholder: "+880 …", required: true },
              { key: "service", label: "Service", type: "select", options: SERVICES.map((s) => s.name), placeholder: "What would you like?" },
              { key: "person", label: "Preferred person", type: "select", options: TEAM.map((t) => t.name).concat(["No preference"]), placeholder: "Who would you like?" },
              { key: "date", label: "Date", type: "date", required: true },
              { key: "time", label: "Time", type: "select", options: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"], placeholder: "Pick a slot" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, services: ServicesPage, team: TeamPage, booking: BookingPage };

export default function AtelierNine() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] font-body text-[#2A1A16]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="atelier-nine" />
    </div>
  );
}
