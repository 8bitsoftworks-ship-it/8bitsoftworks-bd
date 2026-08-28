import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const SERVICES = {
  Grooming: [
    ["Bath & blow-dry", "Full wash, double-dry, nail trim, and a scent your sofa can live with.", "From $45", "60 min"],
    ["Cut & style", "Breed-aware clipping with a groomer who actually reads the chart.", "From $75", "90 min"],
    ["Paw-dicure", "Nail, pad, and fur hygiene for the fastidious.", "From $20", "25 min"],
  ],
  Daycare: [
    ["Half day", "Supervised play in size-matched groups, morning or afternoon.", "$28 / visit", "4 hrs"],
    ["Full day", "Play, nap, snacks, and a photo at pick-up.", "$42 / visit", "8 hrs"],
    ["Member plans", "Ten or twenty visits at a friendlier rate.", "From $23 / visit", "Flexible"],
  ],
  Boarding: [
    ["Standard suite", "A cozy cot, twice-daily walks, and a human on site overnight.", "$58 / night", "Overnight"],
    ["Executive suite", "A bigger cot, private garden time, and a nightly report card.", "$82 / night", "Overnight"],
    ["Holiday care", "Festive menus and extra walks when the calendar fills up.", "From $68 / night", "Overnight"],
  ],
  Training: [
    ["Puppy school", "Socialisation, sit, stay, and the art of a clean home.", "From $180", "6 sessions"],
    ["Manners 101", "Leash work, recall, and door etiquette for grown dogs.", "From $220", "6 sessions"],
    ["Private coaching", "One-on-one work on the habits that matter to you.", "From $95", "45 min"],
  ],
};

const PRICES = [
  { name: "Day Pass", blurb: "For the occasional working day.", monthly: "42", annual: "42", unit: "/day", annualUnit: "/day", tag: null, features: ["Playtime in size-matched groups", "Midday nap in a quiet room", "Pick-up photo, every visit", "Trained handlers on-site"] },
  { name: "The Regular", blurb: "For dogs with strong opinions about routine.", monthly: "145", annual: "1450", unit: "/month", annualUnit: "/yr", tag: "Most popular", features: ["10 daycare visits", "1 grooming session monthly", "Priority boarding booking", "Quarterly check-in call"] },
  { name: "All-In", blurb: "The full club, no maths required.", monthly: "295", annual: "2950", unit: "/month", annualUnit: "/yr", tag: "Best value", features: ["Unlimited daycare", "Monthly grooming, any service", "10% off boarding & retail", "Multi-dog household discount"] },
];

const QUOTES = [
  ["Our lab sprints to the door. That is the whole review.", "Hannah R. — daycare member"],
  ["The grooming team fixed a matted mess two vets had given up on. Gentle, patient, done.", "Dev M. — grooming client"],
  ["We booked boarding for a conference week. The nightly photos kept us sane.", "Priya & Sam — boarding family"],
];

const MARQUEE = ["Daycare", "Grooming", "Boarding", "Training", "Puppy school", "Holiday care"];

export default function FetchClub() {
  const [tab, setTab] = useState("Grooming");
  const [annual, setAnnual] = useState(false);
  return (
    <div className="min-h-screen bg-[#FBF6F0] text-[#2A2018] font-body">
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      <header className="sticky top-0 z-40 border-b border-[#2A2018]/10 bg-[#FBF6F0]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-serif text-[20px]">
            <span className="block h-4 w-4 bg-[#E8763B]" style={{ borderRadius: "2px 8px 8px 8px" }} />
            Fetch Club
          </a>
          <nav className="hidden gap-8 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#2A2018]/55 sm:flex">
            <a href="#services" className="hover:text-[#2A2018]">Services</a>
            <a href="#gallery" className="hover:text-[#2A2018]">Gallery</a>
            <a href="#pricing" className="hover:text-[#2A2018]">Pricing</a>
          </nav>
          <a href="#visit" className="bg-[#E8763B] px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white hover:bg-[#D2602B]">Book a visit</a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#E8763B]">Grooming · Daycare · Boarding · Training</span>
          <h1 className="mt-5 font-serif text-[54px] leading-[1.02] sm:text-[80px]">
            Where good dogs <span className="italic text-[#E8763B]">go all day.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#2A2018]/60">
            Fetch Club is a full-service club for dogs: a grooming salon,
            a supervised daycare, a boarding house, and a training floor —
            all under one roof, with staff who know every guest by name.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="bg-[#2A2018] px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#FBF6F0] hover:bg-[#E8763B]">Book a visit</a>
            <a href="#services" className="border border-[#2A2018]/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#2A2018]/70 hover:border-[#E8763B] hover:text-[#E8763B]">Browse services</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-[#E8763B]/20 blur-3xl" />
          <div className="relative overflow-hidden border border-[#2A2018]/10 bg-[#F3E3D2]" style={{ backgroundImage: "radial-gradient(rgba(232,118,59,0.22) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
            <div className="mx-auto mt-10 h-52 w-44 rounded-t-full border-2 border-[#E8763B]/50 bg-gradient-to-b from-[#E8763B]/30 to-[#E8763B]/5" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#E0B98E]" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(42,32,24,0.08) 0 2px, transparent 2px 24px)" }} />
            <div className="absolute bottom-16 left-8 right-8 h-20 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 50% 65%, #E8763B 0 8px, transparent 9px), radial-gradient(circle at 22% 32%, #E8763B 0 4px, transparent 5px), radial-gradient(circle at 45% 20%, #E8763B 0 4px, transparent 5px), radial-gradient(circle at 68% 22%, #E8763B 0 4px, transparent 5px), radial-gradient(circle at 82% 38%, #E8763B 0 4px, transparent 5px)", backgroundSize: "64px 64px" }} />
            <span className="absolute right-4 top-4 rounded-full border border-[#E8763B]/50 bg-[#FBF6F0]/80 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#E8763B]">Open 7 days</span>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#2A2018]/10 bg-[#E8763B] py-3">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-0 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0 items-center">
              {MARQUEE.map((item) => (
                <span key={item} className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-white">
                  <span className="px-6">{item}</span>
                  <span className="text-white/50">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#E8763B]">01 — Services</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">Four doors, <span className="italic">one welcome mat.</span></h2>
          </div>
          <p className="hidden max-w-[30ch] text-[13px] leading-relaxed text-[#2A2018]/55 md:block">
            Every service is handled by trained staff, never rotated volunteers.
            Your dog meets the same people every visit.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-1">
          {Object.keys(SERVICES).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide transition-colors ${tab === t ? "bg-[#E8763B] text-white" : "bg-[#2A2018]/5 text-[#2A2018]/55 hover:bg-[#2A2018]/10"}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-px bg-[#2A2018]/10 md:grid-cols-3">
          {SERVICES[tab].map(([name, blurb, price, time]) => (
            <div key={name} className="group relative flex flex-col justify-between bg-[#FBF6F0] p-6 transition-colors hover:bg-[#F3E3D2]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E8763B]">{time}</span>
                <h3 className="mt-8 font-serif text-[24px] leading-snug">{name}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[#2A2018]/55">{blurb}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-[#2A2018]/10 pt-4">
                <span className="font-serif text-[20px] text-[#E8763B]">{price}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#2A2018]/35 transition-colors group-hover:text-[#E8763B]">Book →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="border-t border-[#2A2018]/10 bg-[#F3E3D2]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#E8763B]">02 — Gallery</span>
          <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">A day in the <span className="italic">club.</span></h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {[
              ["Yard play", "col-span-2 row-span-2", "radial-gradient(circle at 30% 40%, rgba(232,118,59,0.45), transparent 45%), linear-gradient(160deg, #F3E3D2 0%, #E0B98E 100%)"],
              ["Grooming station", "", "repeating-linear-gradient(45deg, rgba(42,32,24,0.06) 0 1px, transparent 1px 12px), radial-gradient(circle at 70% 25%, rgba(232,118,59,0.4), transparent 50%), #EAD8C4"],
              ["Quiet room nap", "", "radial-gradient(ellipse at 50% 100%, rgba(232,118,59,0.35), transparent 60%), #E5CFB4"],
              ["Puppy class", "", "repeating-linear-gradient(0deg, rgba(232,118,59,0.08) 0 1px, transparent 1px 16px), radial-gradient(circle at 50% 40%, rgba(232,118,59,0.3), transparent 45%), #F0E2CF"],
              ["Pool day", "", "radial-gradient(circle at 50% 20%, rgba(232,118,59,0.5), transparent 55%), linear-gradient(0deg, #D9B08A 0%, #EFDCC2 100%)"],
            ].map(([label, span, bg]) => (
              <div key={label} className={`group relative min-h-[140px] overflow-hidden border border-[#2A2018]/10 p-4 ${span}`} style={{ backgroundImage: bg }}>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#E8763B]/25 blur-2xl" />
                <span className="absolute bottom-3 left-4 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#2A2018]/55">{label}</span>
                <span className="absolute right-4 top-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#E8763B] opacity-0 transition-opacity group-hover:opacity-100">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#E8763B]">03 — Pricing</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">Fair rates, <span className="italic">no surprise fees.</span></h2>
          </div>
          <div className="flex border border-[#2A2018]/15">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide ${!annual ? "bg-[#2A2018] text-[#FBF6F0]" : "text-[#2A2018]/55"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide ${annual ? "bg-[#2A2018] text-[#FBF6F0]" : "text-[#2A2018]/55"}`}>Annual — 2 months free</button>
          </div>
        </div>
        <div className="mt-12 grid gap-px bg-[#2A2018]/10 md:grid-cols-3">
          {PRICES.map((p) => (
            <div key={p.name} className={`relative flex flex-col p-7 ${p.tag === "Most popular" ? "bg-[#E8763B] text-white" : "bg-[#FBF6F0]"}`}>
              {p.tag && (
                <span className={`absolute right-5 top-5 font-mono text-[9.5px] uppercase tracking-[0.16em] ${p.tag === "Most popular" ? "text-white/80" : "text-[#E8763B]"}`}>{p.tag}</span>
              )}
              <h3 className="font-serif text-[24px]">{p.name}</h3>
              <p className={`mt-1 text-[12px] ${p.tag === "Most popular" ? "text-white/75" : "text-[#2A2018]/55"}`}>{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-[44px] leading-none">${annual ? p.annual : p.monthly}</span>
                <span className={`font-mono text-[11px] uppercase tracking-wide ${p.tag === "Most popular" ? "text-white/70" : "text-[#2A2018]/45"}`}>{annual ? p.annualUnit : p.unit}</span>
              </div>
              <ul className="mt-7 flex flex-1 flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-baseline gap-2 text-[13px] ${p.tag === "Most popular" ? "text-white/85" : "text-[#2A2018]/65"}`}>
                    <span className={p.tag === "Most popular" ? "text-white/60" : "text-[#E8763B]"}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#visit" className={`mt-8 block py-3 text-center font-mono text-[11px] uppercase tracking-wide transition-colors ${p.tag === "Most popular" ? "bg-white text-[#E8763B] hover:bg-[#2A2018] hover:text-white" : "border border-[#2A2018]/25 text-[#2A2018]/70 hover:border-[#E8763B] hover:text-[#E8763B]"}`}>Join the club</a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#2A2018]/10 bg-[#F3E3D2]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#E8763B]">04 — Testimonials</span>
            <span className="hidden font-serif text-[56px] italic leading-none text-[#2A2018]/15 sm:block">“</span>
          </div>
          <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">The humans <span className="italic">speak.</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {QUOTES.map(([q, who]) => (
              <figure key={who} className="flex flex-col justify-between border border-[#2A2018]/10 bg-[#FBF6F0] p-6">
                <blockquote className="font-serif text-[16px] italic leading-relaxed text-[#2A2018]/80">“{q}”</blockquote>
                <figcaption className="mt-8 font-mono text-[10px] uppercase tracking-wide text-[#E8763B]">{who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="relative overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#E8763B]/15 blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 65%, #E8763B 0 5px, transparent 6px), radial-gradient(circle at 22% 32%, #E8763B 0 2.5px, transparent 3.5px), radial-gradient(circle at 45% 20%, #E8763B 0 2.5px, transparent 3.5px), radial-gradient(circle at 68% 22%, #E8763B 0 2.5px, transparent 3.5px), radial-gradient(circle at 82% 38%, #E8763B 0 2.5px, transparent 3.5px)", backgroundSize: "48px 48px" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#E8763B]">Come say hello</span>
          <h2 className="mx-auto mt-4 max-w-[20ch] font-serif text-[38px] leading-[1.05] sm:text-[56px]">
            First visit is a <span className="italic text-[#E8763B]">tour, not a test.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[14px] leading-relaxed text-[#2A2018]/60">
            Bring your dog by any weekday morning. We will show you the floor,
            let them sniff a friend, and answer every question before you commit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#top" className="bg-[#E8763B] px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-white hover:bg-[#D2602B]">Book a tour</a>
            <a href="#top" className="border border-[#2A2018]/25 px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-[#2A2018]/70 hover:border-[#E8763B] hover:text-[#E8763B]">hello@fetchclub.example</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2A2018]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#2A2018]/35">
        Fetch Club — 7 days, 8am–7pm — Demo website
      </footer>
      <DemoBadge siteId="fetch-club" dark={false} />
    </div>
  );
}
