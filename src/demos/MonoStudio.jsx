import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const WORK = [
  ["01", "Field Notes Archive", "Brand · Web", "2024"],
  ["02", "Northline Site", "Web", "2024"],
  ["03", "Sora House Identity", "Brand", "2023"],
  ["04", "Openlot Listings", "Web · Product", "2023"],
  ["05", "Forma Club System", "Brand · Web", "2022"],
  ["06", "Ledger & Pine", "Web", "2022"],
];

export default function MonoStudio() {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen bg-[#FF4F3F] text-[#121319] font-body">
      <header className="border-b border-[#121319]/15 sticky top-0 bg-[#FF4F3F]/95 backdrop-blur z-40">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-[12px] uppercase tracking-[0.16em]">MONO STUDIO</span>
          <nav className="hidden sm:flex gap-8 font-mono text-[10.5px] uppercase tracking-wide text-[#121319]/70">
            <a href="#work" className="hover:text-[#121319]">Work</a>
            <a href="#services" className="hover:text-[#121319]">Services</a>
            <a href="#contact" className="hover:text-[#121319]">Contact</a>
          </nav>
          <a href="#contact" className="font-mono text-[10.5px] uppercase tracking-wide bg-[#121319] text-[#FF4F3F] px-3.5 py-2 hover:bg-white transition-colors">
            Start a project
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#121319]/60">Creative studio · Dhaka</span>
        <h1 className="font-display font-semibold text-[52px] sm:text-[76px] md:text-[104px] leading-[0.9] tracking-tight mt-5 max-w-[10ch]">
          WE MAKE THE THING YOU'RE AVOIDING.
        </h1>
        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-[#121319]/65 max-w-[34ch]">
            Brand, web, and design systems for teams who've been "meaning to".
          </p>
          <a href="#work" className="font-mono text-[11px] uppercase tracking-wide border border-[#121319]/30 px-5 py-3 w-fit hover:bg-[#121319] hover:text-[#FF4F3F] transition-colors">
            See the work ↓
          </a>
        </div>
      </section>

      <section id="work" className="border-t border-[#121319]/15 bg-[#121319] text-[#F4F0E9]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F4F0E9]/45">Selected work</h2>
            <span className="font-mono text-[11px] text-[#F4F0E9]/35">2022 – 2024</span>
          </div>
          <div className="flex flex-col">
            {WORK.map(([n, name, type, year], i) => (
              <button
                key={n}
                onMouseEnter={() => setActive(i)}
                className={`group grid grid-cols-[50px_1fr_auto] sm:grid-cols-[70px_1fr_1fr_60px] items-center gap-3 sm:gap-6 border-b border-[#F4F0E9]/10 py-5 text-left transition-colors ${
                  active === i ? "text-[#FF4F3F]" : "text-[#F4F0E9]"
                }`}
              >
                <span className="font-mono text-[11px] text-[#F4F0E9]/40">{n}</span>
                <span className="font-display font-semibold text-[18px] sm:text-[22px] group-hover:translate-x-1 transition-transform">{name}</span>
                <span className="hidden sm:block font-mono text-[11px] uppercase tracking-wide text-[#F4F0E9]/45">{type}</span>
                <span className="font-mono text-[11px] text-[#F4F0E9]/35 text-right">{year}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-[#121319]/15">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid sm:grid-cols-3 gap-px bg-[#121319]/15">
          {[
            ["Brand", "Logos, identities, and the two-page guidelines that actually get used."],
            ["Web", "Sites built to be fast, editable, and to not embarrass you in six months."],
            ["Design systems", "The shared vocabulary so your product stops looking like a collage."],
          ].map(([n, d]) => (
            <div key={n} className="bg-[#FF4F3F] p-6">
              <h3 className="font-display font-semibold text-[18px]">{n}</h3>
              <p className="text-[13px] text-[#121319]/70 mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[#121319]/15 bg-[#121319] text-[#F4F0E9]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display font-semibold text-[34px] sm:text-[44px] leading-[1.02]">
              Have a thing you've been putting off?
            </h2>
            <p className="text-[#F4F0E9]/55 text-[14.5px] mt-4 max-w-[40ch] leading-relaxed">
              One 20-minute call is usually enough to know if we're the right
              size. If we're not, we'll say who is.
            </p>
          </div>
          <div className="font-mono text-[13px] space-y-3 md:text-right">
            <p className="text-[#FF4F3F]">hello@monostudio.co</p>
            <p className="text-[#F4F0E9]/70">+880 1X-XXXX XXXX</p>
            <p className="text-[#F4F0E9]/40">Studio 07, Building C, Dhanmondi</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#121319]/15 px-6 py-8 flex justify-between font-mono text-[10px] uppercase tracking-wide text-[#121319]/55">
        <span>Mono Studio — Demo website</span>
        <span className="hidden sm:block">We're currently booking Q3</span>
      </footer>
      <DemoBadge siteId="mono-studio" dark />
    </div>
  );
}
