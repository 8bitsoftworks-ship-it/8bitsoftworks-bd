import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const BEERS = [
  { name: "Foghorn Lager", style: "Helles lager", abv: "4.8", ibu: "18", desc: "Our everyday pint. Pale, dry, and dangerously easy to have two of. Brewed with local barley and a long cold rest." },
  { name: "Mooring Pale", style: "West Coast pale ale", abv: "5.6", ibu: "38", desc: "Pine and grapefruit from dry-hopping, with a clean bitter finish that keeps the next pour honest." },
  { name: "Salty Dog", style: "Gose", abv: "4.2", ibu: "8", desc: "Sea salt and coriander, a little tart, made for warm afternoons on the deck. Our most argued-over name." },
  { name: "Keelhaul Stout", style: "Oatmeal stout", abv: "6.4", ibu: "30", desc: "Roast coffee and dark chocolate over a soft oat body. Named for the harbour tradition, not the punishment." },
  { name: "Tide Line IPA", style: "New England IPA", abv: "6.8", ibu: "45", desc: "Juicy, hazy, and huge on aroma. Citra and Mosaic, with enough bitterness to remind you it is a beer." },
  { name: "Anchor Porter", style: "Robust porter", abv: "5.9", ibu: "34", desc: "Molasses, toasted grain, and a hint of smoke. Aged a week longer than the rest because it asked nicely." },
];

const EVENTS = [
  ["Taproom trivia", "Wednesdays, 7pm", "Teams of five, a rotating quiz master, and the keelhaul as the losing team's shot."],
  ["Live folk night", "Thursdays, 8pm", "Three acts, no cover, whiskey sours by the back bar."],
  ["Brewery tour", "Saturdays, 2pm", "Walk the grain room, watch a brew day, taste straight from the tank."],
  ["Keg kickoff", "First Sunday, noon", "The fresh keg taps at noon. Regulars have opinions about which one should go first."],
];

export default function HarborHops() {
  const [beer, setBeer] = useState(0);
  const current = BEERS[beer];
  return (
    <div className="min-h-screen bg-[#15110C] text-[#F0E7D8] font-body">
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#15110C]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-serif text-[20px]">Harbor <span className="italic text-[#D89A3C]">&amp;</span> Hops</a>
          <nav className="hidden gap-8 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#F0E7D8]/55 sm:flex">
            <a href="#beers" className="hover:text-[#F0E7D8]">Beers</a>
            <a href="#taproom" className="hover:text-[#F0E7D8]">Taproom</a>
            <a href="#story" className="hover:text-[#F0E7D8]">Story</a>
            <a href="#events" className="hover:text-[#F0E7D8]">Events</a>
          </nav>
          <a href="#visit" className="border border-[#D89A3C]/50 text-[#D89A3C] px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide hover:bg-[#D89A3C] hover:text-[#15110C]">Order a flight</a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D89A3C]">Brewery &amp; taproom — Est. 2014</span>
          <h1 className="mt-5 font-serif text-[54px] leading-[1.02] sm:text-[80px]">
            Liquid made where <span className="italic text-[#D89A3C]">the tide comes in.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#F0E7D8]/55">
            Six beers on tap, a short list of what pairs with them, and a room
            full of dock lights. Brewed three blocks from the water, poured the
            way the brewer intended — which is cold.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#beers" className="bg-[#D89A3C] px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#15110C] hover:bg-[#E8B355]">See the taps</a>
            <a href="#taproom" className="border border-white/20 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#F0E7D8]/70 hover:border-[#D89A3C] hover:text-[#D89A3C]">Taproom hours</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-[#D89A3C]/20 blur-3xl" />
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(rgba(216,154,60,0.25) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="relative flex h-[380px] items-end justify-center">
            <div className="absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 rounded-[50%] bg-[#D89A3C]/10 blur-2xl" />
            <div className="relative h-72 w-40 overflow-hidden border-x border-b border-[#F0E7D8]/30" style={{ borderRadius: "0 0 16px 16px", backgroundImage: "linear-gradient(to bottom, rgba(216,154,60,0.5) 0%, rgba(181,121,43,0.55) 55%, rgba(122,78,22,0.75) 100%)" }}>
              <div className="absolute inset-x-0 top-0 h-12 bg-[#F0E7D8]/85" style={{ borderRadius: "0 0 10px 10px" }} />
              <div className="absolute inset-x-3 top-4 h-1 bg-[#F0E7D8]/90" />
              <div className="absolute inset-x-3 top-6 h-1 bg-[#F0E7D8]/60" />
              <div className="absolute left-1/2 top-20 h-1 w-2/3 -translate-x-1/2 bg-[#F0E7D8]/40" />
              <div className="absolute left-1/2 top-32 h-1 w-1/2 -translate-x-1/2 bg-[#F0E7D8]/35" />
              <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 30% 60%, rgba(240,231,216,0.5) 0 2px, transparent 3px), radial-gradient(circle at 62% 72%, rgba(240,231,216,0.4) 0 1.5px, transparent 2.5px), radial-gradient(circle at 45% 55%, rgba(240,231,216,0.4) 0 1.5px, transparent 2.5px)", backgroundSize: "40px 40px" }} />
            </div>
            <span className="absolute right-4 top-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#F0E7D8]/50">6 taps · poured cold</span>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-[#D89A3C] py-3">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-0 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0 items-center">
              {["Fresh keg Sunday", "Trivia Wednesday", "Live folk Thursday", "Brewery tour Saturday"].map((item) => (
                <span key={item} className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#15110C]">
                  <span className="px-6">{item}</span>
                  <span className="text-[#15110C]/50">●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section id="beers" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D89A3C]">01 — The taps</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">Six beers, <span className="italic">current lineup.</span></h2>
          </div>
          <p className="hidden max-w-[30ch] text-[13px] leading-relaxed text-[#F0E7D8]/50 md:block">
            Rotating with the season. ABV and IBU listed because someone will ask anyway.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col">
            {BEERS.map((b, i) => (
              <button key={b.name} onClick={() => setBeer(i)} className={`flex items-baseline justify-between gap-4 border-b border-white/10 py-4 text-left transition-colors ${beer === i ? "" : "hover:bg-white/[0.03]"}`}>
                <span className="flex items-baseline gap-4">
                  <span className={`font-mono text-[10px] ${beer === i ? "text-[#D89A3C]" : "text-[#F0E7D8]/30"}`}>0{i + 1}</span>
                  <span className={`font-serif text-[20px] ${beer === i ? "text-[#F0E7D8]" : "text-[#F0E7D8]/45"}`}>{b.name}</span>
                </span>
                <span className={`font-mono text-[11px] tracking-wide ${beer === i ? "text-[#D89A3C]" : "text-[#F0E7D8]/35"}`}>{b.abv}% ABV</span>
              </button>
            ))}
          </div>
          <div className="relative flex flex-col justify-between border border-white/10 bg-[#1E1811] p-8">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#D89A3C]/15 blur-3xl" />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D89A3C]">{current.style}</span>
              <h3 className="mt-3 font-serif text-[34px] leading-tight">{current.name}</h3>
              <p className="mt-4 max-w-[42ch] text-[14px] leading-relaxed text-[#F0E7D8]/55">{current.desc}</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
              <div className="bg-[#1E1811] p-4">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#F0E7D8]/40">Alcohol</span>
                <p className="mt-1 font-serif text-[28px] text-[#D89A3C]">{current.abv}%</p>
              </div>
              <div className="bg-[#1E1811] p-4">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#F0E7D8]/40">Bitterness</span>
                <p className="mt-1 font-serif text-[28px] text-[#D89A3C]">{current.ibu} IBU</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="taproom" className="border-t border-white/10 bg-[#1E1811]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D89A3C]">02 — Taproom</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">Come as you are, <span className="italic">leave as a regular.</span></h2>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-relaxed text-[#F0E7D8]/55">
              A forty-seat room, a long bar, and a deck that faces the harbour.
              Dogs on the deck, kids until nine, and a kitchen that stops taking
              orders when the fryer says so.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
              {[["Mon–Thu", "3pm – 11pm"], ["Fri–Sat", "12pm – 1am"], ["Sunday", "12pm – 10pm"], ["Kitchen", "Until 9:30pm"]].map(([d, h]) => (
                <div key={d} className="bg-[#1E1811] p-4">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D89A3C]">{d}</p>
                  <p className="mt-1 font-serif text-[17px] text-[#F0E7D8]">{h}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[#D89A3C]/10 blur-3xl" />
            <div className="relative flex h-full min-h-[320px] items-end overflow-hidden border border-white/10 bg-[#15110C] p-6" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(216,154,60,0.05) 0 1px, transparent 1px 64px), radial-gradient(circle at 80% 15%, rgba(216,154,60,0.25), transparent 45%)" }}>
              <div className="absolute left-8 top-8 h-2 w-24 bg-[#D89A3C]/70" style={{ borderRadius: "2px" }} />
              <div className="absolute left-8 top-14 h-2 w-16 bg-[#D89A3C]/40" />
              <div className="absolute right-8 top-8 flex gap-3">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="block h-8 w-8 rounded-full border border-[#D89A3C]/40" style={{ background: `radial-gradient(circle at 50% 70%, rgba(216,154,60,${0.5 - i * 0.12}), rgba(21,17,12,0.8))` }} />
                ))}
              </div>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#F0E7D8]/50">Harbor deck</p>
                  <p className="mt-1 font-serif text-[22px] text-[#F0E7D8]">40 dock-facing seats</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#D89A3C]">Dogs welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D89A3C]">03 — Story</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">Started with a kettle <span className="italic">and a stubborn streak.</span></h2>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-relaxed text-[#F0E7D8]/55">
              Two homebrewers, one disused sail loft, and a landlord who agreed
              to a month-to-month lease. A decade later we brew on a ten-barrel
              system, fill our own cans, and still mop the floor ourselves on
              Monday mornings.
            </p>
            <div className="mt-8 flex items-center gap-6 border-l-2 border-[#D89A3C] pl-5">
              <span className="font-serif text-[56px] leading-none text-[#D89A3C]/40">12</span>
              <p className="text-[12px] leading-relaxed text-[#F0E7D8]/50">Years of brewing within sight of the water — salt air, honest hours.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["10 bbl", "brew house"], ["40k", "litres a year"], ["6", "beers on tap"], ["100%", "recycled grain"]].map(([n, label], i) => (
              <div key={label} className={`relative overflow-hidden border border-white/10 p-6 ${i === 1 ? "mt-8" : ""}`} style={{ backgroundImage: `radial-gradient(circle at 70% 20%, rgba(216,154,60,${0.18 + i * 0.05}), transparent 50%), linear-gradient(160deg, #1E1811, #15110C)` }}>
                <span className="font-serif text-[40px] leading-none text-[#D89A3C]">{n}</span>
                <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-[#F0E7D8]/45">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="border-t border-white/10 bg-[#1E1811]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D89A3C]">04 — On the board</span>
          <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">The room has <span className="italic">a calendar.</span></h2>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {EVENTS.map(([name, when, blurb], i) => (
              <div key={name} className="group flex flex-col justify-between bg-[#1E1811] p-6 transition-colors hover:bg-[#241C12]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D89A3C]">{when}</span>
                  <h3 className="mt-6 font-serif text-[22px] leading-snug">{name}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#F0E7D8]/50">{blurb}</p>
                </div>
                <span className="mt-8 font-mono text-[40px] leading-none text-[#D89A3C]/15">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D89A3C]/15 blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(216,154,60,0.25) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#D89A3C]">Visit the taproom</span>
          <h2 className="mx-auto mt-4 max-w-[18ch] font-serif text-[38px] leading-[1.05] sm:text-[56px]">
            The cans are good. <span className="italic text-[#D89A3C]">The deck is better.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#top" className="bg-[#D89A3C] px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-[#15110C] hover:bg-[#E8B355]">Order a flight</a>
            <a href="#top" className="border border-white/20 px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-[#F0E7D8]/70 hover:border-[#D89A3C] hover:text-[#D89A3C]">Harbor Street 40</a>
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F0E7D8]/35">Cans to go · Growlers filled · Coasters free</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#F0E7D8]/30">
        Harbor &amp; Hops — Brewed three blocks from the water — Demo website
      </footer>
      <DemoBadge siteId="harbor-hops" dark />
    </div>
  );
}
