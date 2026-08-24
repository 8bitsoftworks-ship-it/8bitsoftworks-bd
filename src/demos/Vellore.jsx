import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const TRIPS = [
  { place: "Lisbon", days: "8 days", price: "€1,400", note: "Azulejos, long lunches, and the coast by train." },
  { place: "Kyoto", days: "10 days", price: "€2,100", note: "Temples before the crowds, then a ryokan in the hills." },
  { place: "Rajasthan", days: "12 days", price: "€1,700", note: "Palaces, stepwells, and one very patient camelshop." },
];

const ITINERARY = [
  ["Day 1–2", "Settle in", "A walkable neighbourhood base, a market dinner, and nothing on the schedule."],
  ["Day 3–5", "The slow middle", "Two long day-trips chosen for how they feel, not how they photograph."],
  ["Day 6–7", "One day off", "No plan at all. The best days on every trip, reliably."],
];

export default function Vellore() {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen bg-[#F4EFE8] text-[#1E1B16] font-body">
      <header className="border-b border-[#1E1B16]/10 sticky top-0 bg-[#F4EFE8]/95 backdrop-blur z-40">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-[15px] tracking-tight">VELLORE</span>
          <nav className="hidden sm:flex gap-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#1E1B16]/55">
            <a href="#trips" className="hover:text-[#1E1B16]">Trips</a>
            <a href="#how" className="hover:text-[#1E1B16]">How it works</a>
            <a href="#notes" className="hover:text-[#1E1B16]">Notes</a>
          </nav>
          <a href="#enquire" className="font-mono text-[10.5px] uppercase tracking-wide bg-[#E75E3B] text-white px-3.5 py-2 hover:bg-[#1E1B16] transition-colors">
            Plan a trip
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E75E3B]">Curated travel, 6 travellers max</span>
          <h1 className="font-display font-semibold text-[40px] sm:text-[58px] leading-[1.02] mt-4">
            Trips we'd take ourselves.
          </h1>
          <p className="text-[#1E1B16]/60 text-[15px] mt-5 max-w-[44ch] leading-relaxed">
            Small, hand-built itineraries to places we've actually been. You
            get the route, the contacts, and one human on call — not a tour
            bus and a clipboard.
          </p>
          <a href="#trips" className="inline-block mt-7 font-mono text-[11px] uppercase tracking-wide bg-[#E75E3B] text-white px-5 py-3.5 hover:bg-[#1E1B16] transition-colors">
            See current trips
          </a>
        </div>

        <div className="flex flex-col gap-2">
          {TRIPS.map((t, i) => (
            <button
              key={t.place}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`text-left border px-4 py-3.5 transition-colors ${active === i ? "border-[#E75E3B] bg-white" : "border-[#1E1B16]/10 bg-transparent hover:border-[#1E1B16]/30"}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-[15px]">{t.place}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/50">{t.days} · {t.price}</span>
              </div>
              <p className={`text-[12.5px] mt-1 ${active === i ? "text-[#1E1B16]/70" : "text-[#1E1B16]/45"}`}>{t.note}</p>
            </button>
          ))}
        </div>
      </section>

      <section id="trips" className="border-t border-[#1E1B16]/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E1B16]/50 mb-8">Featured trips</h2>
          <div className="grid sm:grid-cols-3 gap-px bg-[#1E1B16]/10">
            {TRIPS.map((t) => (
              <div key={t.place} className="bg-[#F4EFE8] group">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#E75E3B]/30 to-transparent mb-4 group-hover:from-[#E75E3B]/45 transition-colors" />
                <div className="p-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-semibold text-[18px]">{t.place}</span>
                    <span className="font-mono text-[11px] text-[#E75E3B]">{t.price}</span>
                  </div>
                  <p className="text-[12.5px] text-[#1E1B16]/55 mt-2 leading-relaxed">{t.note}</p>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/45 mt-3 inline-block">{t.days} · max 6</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="border-t border-[#1E1B16]/10 bg-[#1E1B16] text-[#F4EFE8]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <h2 className="font-display font-semibold text-[26px] leading-tight">How a trip comes together.</h2>
            <p className="text-[#F4EFE8]/60 text-[14px] mt-3 max-w-[40ch] leading-relaxed">
              Every itinerary is written from memory of the place — not from a
              database. That's the whole point.
            </p>
          </div>
          <div className="flex flex-col">
            {ITINERARY.map(([days, title, body]) => (
              <div key={days} className="grid sm:grid-cols-[90px_1fr] gap-2 sm:gap-6 border-b border-[#F4EFE8]/10 py-5">
                <span className="font-mono text-[11px] uppercase tracking-wide text-[#E75E3B]">{days}</span>
                <div>
                  <h3 className="font-display font-semibold text-[16px]">{title}</h3>
                  <p className="text-[#F4EFE8]/55 text-[13.5px] mt-1 leading-relaxed max-w-[52ch]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            ["6 max", "Group size. Ever."],
            ["1 human", "On call from booking to airport."],
            ["0 commisions", "We don't take cuts from hotels."],
          ].map(([n, d]) => (
            <div key={n} className="border-t border-[#E75E3B] pt-4">
              <div className="font-display font-semibold text-[22px] text-[#E75E3B]">{n}</div>
              <p className="text-[13.5px] text-[#1E1B16]/60 mt-1.5">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="notes" className="border-t border-[#1E1B16]/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18 grid sm:grid-cols-3 gap-8">
          <div className="sm:col-span-2">
            <h2 className="font-mono text-[11px] uppercase tracking-wide text-[#1E1B16]/50 mb-6">Trip notes</h2>
            <div className="flex flex-col">
              {[
                ["Visa & insurance", "We handle the research; you handle the forms. We tell you exactly which one."],
                ["Packing", "A per-trip packing list written by someone who's been. No gear upselling."],
                ["The one rule", "If you'd rather wander, you're allowed to. Nothing is compulsory except breakfast."],
              ].map(([t, d]) => (
                <div key={t} className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 py-5 border-b border-[#1E1B16]/10">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-[#E75E3B]">{t}</span>
                  <p className="text-[13.5px] text-[#1E1B16]/65 leading-relaxed max-w-[52ch]">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:col-span-1">
            <h2 className="font-mono text-[11px] uppercase tracking-wide text-[#1E1B16]/50 mb-6">What travellers say</h2>
            <div className="border border-[#1E1B16]/10 p-5">
              <p className="text-[13.5px] text-[#1E1B16]/75 leading-relaxed italic">
                "The Kyoto trip was the first holiday where nobody had to
                decide anything. It just worked."
              </p>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/45 mt-4 block">— Arif, travelled June 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section id="enquire" className="border-t border-[#1E1B16]/10 bg-[#E75E3B] text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-semibold text-[26px] md:text-[30px]">Tell us where you'd like to go.</h2>
            <p className="text-white/80 text-[14px] mt-1.5">We'll come back within two days with a route and a rough price.</p>
          </div>
          <a href="mailto:hello@vellore.travel" className="shrink-0 font-mono text-[11px] uppercase tracking-wide bg-[#1E1B16] text-white px-6 py-4 hover:bg-white hover:text-[#1E1B16] transition-colors">
            hello@vellore.travel
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/40">
        Vellore — Demo website
      </footer>
      <DemoBadge siteId="vellore" />
    </div>
  );
}
