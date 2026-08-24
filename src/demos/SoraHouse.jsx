import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const MENU = {
  Snacks: [
    ["Smoked almonds, chili salt", "420৳"],
    ["Yuzu butter bread", "380৳"],
    ["Pickled shiitake", "350৳"],
  ],
  Mains: [
    ["Charred aubergine, miso glaze", "980৳"],
    ["Slow-roast duck, plum", "1,650৳"],
    ["Grilled sea bass, brown butter", "1,450৳"],
  ],
  Wine: [
    ["House red, by the glass", "550৳"],
    ["Natural orange, bottle", "3,200৳"],
    ["Sommelier's pick", "Ask us"],
  ],
};

export default function SoraHouse() {
  const [tab, setTab] = useState("Mains");
  return (
    <div className="min-h-screen bg-[#161310] text-[#EDE7DD] font-body">
      <header className="border-b border-white/10 sticky top-0 bg-[#161310]/95 backdrop-blur z-40">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-[19px]">Sora House</span>
          <nav className="hidden sm:flex gap-7 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#EDE7DD]/60">
            <a href="#menu" className="hover:text-[#EDE7DD]">Menu</a>
            <a href="#about" className="hover:text-[#EDE7DD]">About</a>
            <a href="#visit" className="hover:text-[#EDE7DD]">Visit</a>
          </nav>
          <a href="#visit" className="font-mono text-[10.5px] uppercase tracking-wide border border-[#E7A33E]/50 text-[#E7A33E] px-3.5 py-2 hover:bg-[#E7A33E]/10">
            Book a table
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E7A33E]">Dinner only — Tue–Sun</span>
        <h1 className="font-serif text-[46px] sm:text-[64px] leading-[1.02] mt-5 max-w-[16ch]">
          Dinner, <span className="italic text-[#E7A33E]">done properly.</span>
        </h1>
        <p className="text-[#EDE7DD]/60 text-[15px] mt-6 max-w-[48ch] leading-relaxed">
          A short, seasonal menu built around live fire and good produce.
          Fourteen seats at the counter, the rest at low tables. No tasting
          menu theatrics — just food we'd order twice.
        </p>
        <a href="#visit" className="inline-block mt-8 font-mono text-[11px] uppercase tracking-wide bg-[#E7A33E] text-[#161310] px-5 py-3.5 hover:bg-[#EDE7DD] transition-colors">
          Reserve a table
        </a>
      </section>

      <section id="menu" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="font-serif italic text-[26px] mb-8">This week's menu</h2>
          <div className="flex gap-1 mb-8">
            {Object.keys(MENU).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-mono text-[10.5px] uppercase tracking-wide px-4 py-2 border-b-2 transition-colors ${
                  tab === t ? "border-[#E7A33E] text-[#EDE7DD]" : "border-transparent text-[#EDE7DD]/40 hover:text-[#EDE7DD]/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {MENU[tab].map(([dish, price]) => (
              <div key={dish} className="flex justify-between items-baseline border-b border-white/10 pb-4">
                <span className="text-[15px]">{dish}</span>
                <span className="font-mono text-[13px] text-[#E7A33E]">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-[#1D1914]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#E7A33E]/25 to-transparent border border-white/10" />
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-wide text-[#E7A33E]">About</span>
            <h2 className="font-serif text-[26px] mt-3 leading-tight">Small room, open kitchen.</h2>
            <p className="text-[#EDE7DD]/60 text-[14px] mt-3 leading-relaxed max-w-[42ch]">
              Sora House opened in 2021 with one grill, one wine list, and a
              belief that dinner shouldn't need an explanation. The kitchen
              faces the room — you'll see everything that happens to your food.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="font-serif italic text-[26px] mb-8">What regulars say</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              ["“The only tasting menu in the city where you're not thinking about the menu.”", "— Anika, weekly regular"],
              ["“We came for the duck. We stayed for the wine list.”", "— Rahim & Nusrat"],
              ["“Fourteen seats means you can actually watch the cooking. It's a show, quietly.”", "— Meena, food writer"],
            ].map(([quote, who]) => (
              <div key={who} className="border border-white/10 p-5 flex flex-col justify-between">
                <p className="text-[13px] text-[#EDE7DD]/75 leading-relaxed italic">{quote}</p>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#E7A33E] mt-5">{who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 grid sm:grid-cols-3 gap-8">
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#E7A33E]">Hours</span>
            <p className="text-[14px] mt-2 text-[#EDE7DD]/70">Tue–Sun, 6pm–11pm</p>
          </div>
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#E7A33E]">Location</span>
            <p className="text-[14px] mt-2 text-[#EDE7DD]/70">14 Lake Circus, Dhaka</p>
          </div>
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#E7A33E]">Reservations</span>
            <p className="text-[14px] mt-2 text-[#EDE7DD]/70">+880 1XX‑XXX‑XXX</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#EDE7DD]/35">
        Sora House — Demo website
      </footer>
      <DemoBadge siteId="sora-house" dark />
    </div>
  );
}
