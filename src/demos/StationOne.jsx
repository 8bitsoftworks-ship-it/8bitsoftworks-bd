import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const AMENITIES = [
  ["24/7 access", "Your fob opens the door at 3am, because deadlines do not keep office hours."],
  ["Fast WiFi", "Symmetrical fiber, enterprise mesh, and a spare ethernet drop in every room."],
  ["Private booths", "Phone booths and focus rooms you can book from your phone, no desk required."],
  ["Meeting rooms", "Four rooms with real walls, one with a harbor view, all with screens that work."],
  ["Café & bar", "Barista coffee in the morning, kombucha and beer as the afternoon sags."],
  ["Print studio", "High-speed printing, scanning, and a plotter that the architects love."],
  ["Bike storage", "Covered racks, tools, and a pump that is not secretly a donation drive."],
  ["Wellness room", "A quiet room for the things that are not meetings. Showers included."],
];

const PLANS = [
  { name: "Drop-In", blurb: "A desk for the day, no strings.", monthly: "15", annual: "15", unit: "/day", annualUnit: "/day", tag: null, features: ["Access 9am – 6pm", "Café & lounge included", "Unlimited WiFi", "Bring a friend once a month"] },
  { name: "Member", blurb: "Your home base, flex seat included.", monthly: "189", annual: "158", unit: "/month", annualUnit: "/month", tag: "Most popular", features: ["24/7 access, any flex desk", "4 meeting room hours a month", "Phone booth priority", "10% off café & events"] },
  { name: "Desk", blurb: "The same desk, every day, yours.", monthly: "349", annual: "291", unit: "/month", annualUnit: "/month", tag: null, features: ["Dedicated desk, lockable storage", "Unlimited meeting rooms", "Mail handling & address", "Guest passes for clients"] },
];

const FAQS = [
  ["What is the minimum commitment?", "Drop-in is pay-as-you-go. Memberships are month-to-month, and annual plans just make the month cheaper — you can still leave anytime."],
  ["Can I bring a guest?", "Members get guest passes: drop-ins can host one, desk holders get them on request. Everyone checks in at the front desk."],
  ["Are there quiet zones?", "Each floor is zoned — silent desk areas, a phone-booth row, and open collaborative space. The zoning is enforced gently but consistently."],
  ["Is parking available?", "There is street parking, a paid garage across the street, and covered bike storage in the basement. The train stop is a four-minute walk."],
  ["Do you host events?", "Every Thursday. Breakfast talks, demo nights, and the occasional very competitive board game tournament. Members present free."],
];

export default function StationOne() {
  const [annual, setAnnual] = useState(false);
  const [open, setOpen] = useState(0);
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1E2430] font-body">
      <header className="sticky top-0 z-40 border-b border-[#1E2430]/10 bg-[#F5F7FA]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-[19px] font-semibold tracking-tight">
            <span className="block h-3.5 w-3.5 bg-[#5B7DB1]" style={{ borderRadius: "50%" }} />
            Station One
          </a>
          <nav className="hidden gap-8 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1E2430]/55 sm:flex">
            <a href="#amenities" className="hover:text-[#1E2430]">Amenities</a>
            <a href="#plans" className="hover:text-[#1E2430]">Plans</a>
            <a href="#community" className="hover:text-[#1E2430]">Community</a>
            <a href="#location" className="hover:text-[#1E2430]">Location</a>
          </nav>
          <a href="#visit" className="bg-[#5B7DB1] px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white hover:bg-[#4A6796]">Book a tour</a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5B7DB1]">Coworking · Studio · Events</span>
          <h1 className="mt-5 font-display text-[56px] font-bold leading-[0.98] tracking-tight sm:text-[84px]">
            A better place to make <span className="text-[#5B7DB1]">things happen.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#1E2430]/60">
            Station One is a four-floor coworking building for founders,
            freelancers, and small teams who are tired of working from coffee
            shops. Good desks, real walls, and a community that actually shows up.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#plans" className="bg-[#1E2430] px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white hover:bg-[#5B7DB1]">See plans & pricing</a>
            <a href="#visit" className="border border-[#1E2430]/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#1E2430]/70 hover:border-[#5B7DB1] hover:text-[#5B7DB1]">Book a tour</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-[#5B7DB1]/20 blur-3xl" />
          <div className="relative overflow-hidden border border-[#1E2430]/10 bg-[#E9EEF5]" style={{ backgroundImage: "radial-gradient(rgba(91,125,177,0.18) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(91,125,177,0.08) 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, rgba(91,125,177,0.08) 0 1px, transparent 1px 56px)", backgroundSize: "16px 16px, 56px 56px, 56px 56px" }}>
            <div className="grid grid-cols-3 gap-4 p-6">
              {[8, 6, 7, 4, 10, 5, 6, 3, 7].map((h, i) => (
                <div key={i} className={`border ${i === 4 ? "border-[#5B7DB1] bg-[#5B7DB1]/25 shadow-[0_0_44px_rgba(91,125,177,0.4)]" : "border-[#5B7DB1]/25 bg-[#5B7DB1]/10"}`} style={{ height: `${h * 2.1}rem` }} />
              ))}
            </div>
            <span className="absolute left-4 top-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5B7DB1]/70">Floor 4 — open plan</span>
            <span className="absolute bottom-4 right-4 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5B7DB1]/70">92% occupied</span>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1E2430]/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-12 sm:grid-cols-4">
          {[["400+", "members"], ["12k ft²", "of workspace"], ["9", "meeting rooms"], ["24/7", "access, always"]].map(([n, label]) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="font-display text-[42px] font-bold leading-none tracking-tight text-[#1E2430]">{n}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#1E2430]/45">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5B7DB1]">01 — Amenities</span>
            <h2 className="mt-3 font-display text-[34px] font-bold tracking-tight sm:text-[46px]">Everything but the <span className="text-[#5B7DB1]">excuses.</span></h2>
          </div>
          <p className="hidden max-w-[30ch] text-[13px] leading-relaxed text-[#1E2430]/55 md:block">
            The stuff that makes a workspace feel finished. Nothing on this list is a nicer-way-of-saying.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-[#1E2430]/10 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map(([name, blurb], i) => (
            <div key={name} className="group relative bg-[#F5F7FA] p-6 transition-colors hover:bg-white">
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#5B7DB1]">0{i + 1}</span>
              <h3 className="mt-6 font-display text-[19px] font-semibold tracking-tight">{name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#1E2430]/55">{blurb}</p>
              <span className="mt-6 block h-px w-8 bg-[#5B7DB1] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="border-t border-[#1E2430]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5B7DB1]">02 — Plans</span>
              <h2 className="mt-3 font-display text-[34px] font-bold tracking-tight sm:text-[46px]">Pricing that <span className="text-[#5B7DB1]">scales with you.</span></h2>
            </div>
            <div className="flex border border-[#1E2430]/15">
              <button onClick={() => setAnnual(false)} className={`px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide ${!annual ? "bg-[#1E2430] text-white" : "text-[#1E2430]/55"}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide ${annual ? "bg-[#1E2430] text-white" : "text-[#1E2430]/55"}`}>Annual — save 16%</button>
            </div>
          </div>
          <div className="mt-12 grid gap-px bg-[#1E2430]/10 md:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`relative flex flex-col p-7 ${p.tag === "Most popular" ? "bg-[#5B7DB1] text-white" : "bg-white"}`}>
                {p.tag && <span className="absolute right-5 top-5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/80">{p.tag}</span>}
                <h3 className="font-display text-[22px] font-semibold tracking-tight">{p.name}</h3>
                <p className={`mt-1 text-[12px] ${p.tag === "Most popular" ? "text-white/75" : "text-[#1E2430]/55"}`}>{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-[48px] font-bold leading-none tracking-tight">${annual ? p.annual : p.monthly}</span>
                  <span className={`font-mono text-[11px] uppercase tracking-wide ${p.tag === "Most popular" ? "text-white/70" : "text-[#1E2430]/45"}`}>{annual ? p.annualUnit : p.unit}</span>
                </div>
                <ul className="mt-7 flex flex-1 flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-baseline gap-2 text-[13px] ${p.tag === "Most popular" ? "text-white/85" : "text-[#1E2430]/65"}`}>
                      <span className={p.tag === "Most popular" ? "text-white/60" : "text-[#5B7DB1]"}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#visit" className={`mt-8 block py-3 text-center font-mono text-[11px] uppercase tracking-wide transition-colors ${p.tag === "Most popular" ? "bg-white text-[#5B7DB1] hover:bg-[#1E2430] hover:text-white" : "border border-[#1E2430]/25 text-[#1E2430]/70 hover:border-[#5B7DB1] hover:text-[#5B7DB1]"}`}>Start here</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#1E2430]/40">Annual billing locks your rate for a year — no deposit required.</p>
        </div>
      </section>

      <section id="community" className="border-t border-[#1E2430]/10 bg-[#E9EEF5]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5B7DB1]">03 — Community</span>
          <h2 className="mt-3 font-display text-[34px] font-bold tracking-tight sm:text-[46px]">The building has <span className="text-[#5B7DB1]">a pulse.</span></h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="relative overflow-hidden border border-[#1E2430]/10 bg-white p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#5B7DB1]/20 blur-3xl" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5B7DB1]">Weekly pulse</span>
              <p className="mt-4 font-display text-[22px] font-semibold leading-snug tracking-tight">
                Thursday breakfasts, demo nights, and a board game tournament that is taken far too seriously.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex">
                  {["S", "M", "T", "J", "K"].map((c, i) => (
                    <span key={c} className="-ml-2 first:ml-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#5B7DB1]/40 bg-white font-display text-[11px] font-bold text-[#5B7DB1]" style={{ background: `linear-gradient(135deg, ${i % 2 ? "#E9EEF5" : "#DCE4EF"}, #ffffff)` }}>{c}</span>
                  ))}
                </div>
                <p className="text-[12px] leading-relaxed text-[#1E2430]/55">400+ members across design, code, and the occasional very serious cake business.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["Northwind Co", "Luma Studio", "Fieldwork", "Halfcourt", "Meridian Labs", "Oak & Ember"].map((m, i) => (
                <div key={m} className={`flex h-28 items-center justify-center border border-[#1E2430]/10 bg-white p-4 transition-colors hover:border-[#5B7DB1]/50 ${i % 2 ? "sm:translate-y-4" : ""}`} style={{ backgroundImage: "radial-gradient(rgba(91,125,177,0.15) 1px, transparent 1px)", backgroundSize: "12px 12px" }}>
                  <span className="text-center font-display text-[14px] font-semibold tracking-tight text-[#1E2430]/60">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="border-t border-[#1E2430]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5B7DB1]">04 — Location</span>
              <h2 className="mt-3 font-display text-[34px] font-bold tracking-tight sm:text-[46px]">Four minutes <span className="text-[#5B7DB1]">from the train.</span></h2>
              <p className="mt-5 max-w-[44ch] text-[14px] leading-relaxed text-[#1E2430]/60">
                48 Station Avenue, above the old post office. The main line stops
                four minutes away, the bus is at the corner, and the basement
                holds 60 bikes.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px bg-[#1E2430]/10">
                {[["Train", "Main line — 4 min"], ["Bus", "Corner stop — 1 min"], ["Bikes", "60 racks, tools, pump"], ["Coffee", "8 shops within a block"]].map(([k, v]) => (
                  <div key={k} className="bg-white p-4">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#5B7DB1]">{k}</p>
                    <p className="mt-1 text-[14px] text-[#1E2430]/70">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-[#5B7DB1]/10 blur-3xl" />
              <div className="relative h-full min-h-[300px] overflow-hidden border border-[#1E2430]/10 bg-[#E9EEF5] p-6" style={{ backgroundImage: "radial-gradient(rgba(91,125,177,0.2) 1px, transparent 1px), repeating-linear-gradient(0deg, transparent 0 23px, rgba(91,125,177,0.12) 23px 24px), repeating-linear-gradient(90deg, transparent 0 23px, rgba(91,125,177,0.12) 23px 24px)", backgroundSize: "16px 16px, 24px 24px, 24px 24px" }}>
                <div className="absolute left-10 top-1/2 h-1.5 w-1/3 bg-[#5B7DB1]/40" style={{ transform: "rotate(-8deg)" }} />
                <div className="absolute right-8 top-1/4 h-1.5 w-1/4 bg-[#5B7DB1]/30" style={{ transform: "rotate(12deg)" }} />
                <div className="absolute bottom-8 right-10 h-10 w-10 border-2 border-[#5B7DB1] bg-[#5B7DB1]/20" />
                <span className="absolute left-6 top-5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5B7DB1]/70">Map, exaggerated</span>
                <span className="absolute bottom-4 left-6 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5B7DB1]">48 Station Ave</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-[#1E2430]/10 bg-[#E9EEF5]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5B7DB1]">05 — FAQ</span>
              <h2 className="mt-3 font-display text-[34px] font-bold tracking-tight sm:text-[46px]">The questions <span className="text-[#5B7DB1]">everyone asks.</span></h2>
              <a href="#visit" className="mt-6 inline-block bg-[#1E2430] px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white hover:bg-[#5B7DB1]">Ask us anything else</a>
            </div>
            <div className="flex flex-col">
              {FAQS.map(([q, a], i) => (
                <button key={q} onClick={() => setOpen(i)} className="border-b border-[#1E2430]/10 py-5 text-left">
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <span className={`font-mono text-[10px] ${open === i ? "text-[#5B7DB1]" : "text-[#1E2430]/35"}`}>0{i + 1}</span>
                      <h3 className={`font-display text-[18px] font-semibold tracking-tight ${open === i ? "text-[#1E2430]" : "text-[#1E2430]/60"}`}>{q}</h3>
                    </div>
                    <span className={`font-mono text-[14px] transition-colors ${open === i ? "text-[#5B7DB1]" : "text-[#1E2430]/30"}`}>{open === i ? "−" : "+"}</span>
                  </div>
                  <p className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"}`}>
                    <span className="overflow-hidden text-[13px] leading-relaxed text-[#1E2430]/55">{a}</span>
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="relative overflow-hidden bg-[#1E2430]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5B7DB1]/25 blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(91,125,177,0.6) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9DB6DC]">Tours run daily, 11am</span>
          <h2 className="mx-auto mt-4 max-w-[18ch] font-display text-[38px] font-bold leading-[1.02] tracking-tight text-white sm:text-[58px]">
            Come see the floor <span className="text-[#9DB6DC]">you would be working from.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#top" className="bg-[#5B7DB1] px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-white hover:bg-[#9DB6DC] hover:text-[#1E2430]">Book a tour</a>
            <a href="#top" className="border border-white/25 px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-white/70 hover:border-[#5B7DB1] hover:text-white">hello@stationone.example</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1E2430] px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-white/30">
        Station One — 48 Station Avenue — Demo website
      </footer>
      <DemoBadge siteId="station-one" dark={false} />
    </div>
  );
}
