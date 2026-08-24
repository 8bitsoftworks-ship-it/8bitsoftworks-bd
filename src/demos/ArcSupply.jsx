import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const PRODUCTS = [
  { name: "Canvas Field Jacket", price: 4200, stock: "In stock" },
  { name: "Selvedge Work Trouser", price: 3800, stock: "In stock" },
  { name: "Waxed Tote, small", price: 2100, stock: "3 left" },
  { name: "Merino Half-Zip", price: 3400, stock: "In stock" },
  { name: "Leather Belt, brown", price: 1600, stock: "In stock" },
  { name: "Deck Shoe, natural", price: 3900, stock: "Sold out" },
];

export default function ArcSupply() {
  const [cart, setCart] = useState(0);
  return (
    <div className="min-h-screen bg-[#EFEEE7] text-[#121319] font-body">
      <header className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-[19px]">Arc Supply</span>
          <nav className="hidden sm:flex gap-8 font-mono text-[10.5px] uppercase tracking-wide text-ink/50">
            <a href="#shop" className="hover:text-ink">Shop</a>
            <a href="#about" className="hover:text-ink">About</a>
          </nav>
          <button onClick={() => setCart((c) => c + 1)} className="font-mono text-[10.5px] uppercase tracking-wide border border-ink/20 px-3 py-2 hover:border-ink/50">
            Cart ({cart})
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wide text-ink/45">Autumn collection</span>
          <h1 className="font-serif italic text-[38px] sm:text-[50px] leading-[1.05] mt-4">
            Made in small batches.
          </h1>
          <p className="text-ink/60 text-[14.5px] mt-4 max-w-[40ch] leading-relaxed">
            Twelve pieces, restocked twice a year. Everything is cut and sewn
            within 60km of our workshop, in fabrics we've used for a decade.
          </p>
          <a href="#shop" className="inline-block mt-7 font-mono text-[11px] uppercase tracking-wide bg-ink text-[#EFEEE7] px-5 py-3.5 hover:bg-ink/80 transition-colors">
            Shop the collection
          </a>
        </div>
        <div className="aspect-[4/5] bg-gradient-to-br from-ink/10 to-ink/[0.03] border border-ink/10" />
      </section>

      <section id="shop" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-mono text-[11px] uppercase tracking-wide text-ink/50">All products</h2>
            <span className="font-mono text-[11px] text-ink/40">{PRODUCTS.length} items</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-[#EFEEE7] p-5 group">
                <div className="aspect-square bg-ink/[0.06] mb-4 group-hover:bg-ink/10 transition-colors" />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-[15px]">{p.name}</h3>
                    <span className={`font-mono text-[10px] uppercase tracking-wide ${p.stock === "Sold out" ? "text-ink/35" : "text-[#2F5D45]"}`}>
                      {p.stock}
                    </span>
                  </div>
                  <span className="font-mono text-[12px]">৳{p.price.toLocaleString("en-IN")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-ink/10 bg-ink text-[#EFEEE7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
          <h2 className="font-serif italic text-[26px]">A workshop, not a warehouse.</h2>
          <p className="text-[#EFEEE7]/60 text-[14px] leading-relaxed max-w-[46ch]">
            Arc Supply is five people and one cutting table. We'd rather sell
            out of something good than keep a hundred mediocre things in
            stock — so when it's gone, it's gone until next season.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-ink/40">
        Arc Supply — Demo website
      </footer>
      <DemoBadge siteId="arc-supply" />
    </div>
  );
}
