import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const MENU = {
  Coffee: [
    ["Espresso", "৳120"],
    ["Flat white", "৳180"],
    ["Filter, rotating", "৳160"],
    ["Cold brew", "৳200"],
  ],
  Bread: [
    ["Sourdough, toasted", "৳150"],
    ["Baguette", "৳110"],
    ["Cinnamon roll", "৳140"],
  ],
  Small: [
    ["Avocado toast", "৳260"],
    ["Granola bowl", "৳240"],
    ["Soup of the day", "৳220"],
  ],
};

export default function EmberGrain() {
  const [tab, setTab] = useState("Coffee");
  return (
    <div className="min-h-screen bg-[#F2EEE4] text-[#2A2418] font-body">
      <header className="border-b border-[#2A2418]/10 sticky top-0 bg-[#F2EEE4]/95 backdrop-blur z-40">
        <div className="mx-auto max-w-4xl px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-[18px] italic">Ember & Grain</span>
          <nav className="hidden sm:flex gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#2A2418]/55">
            <a href="#menu" className="hover:text-[#2A2418]">Menu</a>
            <a href="#about" className="hover:text-[#2A2418]">About</a>
            <a href="#visit" className="hover:text-[#2A2418]">Visit</a>
          </nav>
          <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">Open now · 7a–4p</span>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-14 md:pt-24 md:pb-20 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5D45]">42 Gulshan Ave</span>
        <h1 className="font-serif text-[44px] sm:text-[60px] leading-[1.02] mt-5">
          Coffee, bread,<br />
          <span className="italic text-[#2F5D45]">and not much else.</span>
        </h1>
        <p className="text-[#2A2418]/60 text-[15px] mt-6 max-w-[46ch] mx-auto leading-relaxed">
          A neighbourhood café with a short menu, a loud grinder, and a
          regulars' table you'll probably have to share.
        </p>
        <a href="#menu" className="inline-block mt-8 font-mono text-[11px] uppercase tracking-wide bg-[#2F5D45] text-[#F2EEE4] px-5 py-3.5 hover:bg-[#2A2418] transition-colors">
          See the menu
        </a>
      </section>

      <section id="menu" className="border-t border-[#2A2418]/10">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-18">
          <h2 className="font-serif italic text-[24px] mb-6">What's on today</h2>
          <div className="flex gap-1 mb-8">
            {Object.keys(MENU).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-mono text-[10.5px] uppercase tracking-wide px-4 py-2 border-b-2 transition-colors ${
                  tab === t ? "border-[#2F5D45] text-[#2A2418]" : "border-transparent text-[#2A2418]/40 hover:text-[#2A2418]/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-col">
            {MENU[tab].map(([item, price]) => (
              <div key={item} className="flex justify-between items-baseline border-b border-[#2A2418]/10 py-3.5">
                <span className="text-[14.5px]">{item}</span>
                <span className="font-mono text-[12.5px] text-[#2F5D45]">{price}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-[#2A2418]/40 mt-5">
            Pastries change with the morning · filter rotates weekly
          </p>
        </div>
      </section>

      <section id="about" className="border-t border-[#2A2418]/10 bg-[#2A2418] text-[#F2EEE4]">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-18 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif italic text-[24px] leading-tight">Five years of the same four walls.</h2>
          </div>
          <div className="flex flex-col gap-4 text-[13.5px] text-[#F2EEE4]/65 leading-relaxed">
            <p>
              Ember & Grain opened in 2021 with a used roaster we still swear
              by. We bake in the morning, grind to order, and close when the
              bread runs out — which is how we keep the menu this small.
            </p>
            <p>
              Regulars get a nod, newcomers get a menu, and everyone gets
              asked how their day's going. That's the whole hospitality
              model.
            </p>
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-4xl px-6 py-14 md:py-18 grid sm:grid-cols-3 gap-8">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">Hours</span>
          <p className="text-[13.5px] mt-2 text-[#2A2418]/70">Mon–Sun<br />7a–4p<br />Kitchen till 2p</p>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">Find us</span>
          <p className="text-[13.5px] mt-2 text-[#2A2418]/70">42 Gulshan Ave<br />Dhaka 1212<br />Behind the banyan</p>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">Say hi</span>
          <p className="text-[13.5px] mt-2 text-[#2A2418]/70">hello@emberandgrain.cafe<br />+880 1X-XXXX XXXX</p>
        </div>
      </section>

      <footer className="border-t border-[#2A2418]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#2A2418]/40">
        Ember & Grain — Demo website
      </footer>
      <DemoBadge siteId="ember-grain" />
    </div>
  );
}
