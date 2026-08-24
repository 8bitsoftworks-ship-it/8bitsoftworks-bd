import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const LISTINGS = [
  { area: "Banani", type: "3 BHK · 1,850 sqft", price: "৳4.2M", tag: "For sale" },
  { area: "Dhanmondi", type: "2 BHK · 1,240 sqft", price: "৳2.8M", tag: "For sale" },
  { area: "Gulshan", type: "Office · 2,400 sqft", price: "৳95k/mo", tag: "Rent" },
  { area: "Uttara", type: "Duplex · 3,100 sqft", price: "৳6.5M", tag: "For sale" },
  { area: "Bashundhara", type: "Studio · 610 sqft", price: "৳38k/mo", tag: "Rent" },
  { area: "Mohakhali", type: "1 BHK · 980 sqft", price: "৳1.9M", tag: "For sale" },
];

const AREAS = ["Banani", "Dhanmondi", "Gulshan", "Uttara", "Bashundhara", "Mohakhali"];

export default function Openlot() {
  const [filter, setFilter] = useState("All");
  const shown = LISTINGS.filter((l) => filter === "All" || l.area === filter);
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#1C1913] font-body">
      <header className="border-b border-[#1C1913]/10 sticky top-0 bg-[#F3EFE7]/95 backdrop-blur z-40">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-[15px] tracking-tight">OPENLOT</span>
          <nav className="hidden sm:flex gap-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#1C1913]/55">
            <a href="#listings" className="hover:text-[#1C1913]">Listings</a>
            <a href="#areas" className="hover:text-[#1C1913]">Neighbourhoods</a>
            <a href="#contact" className="hover:text-[#1C1913]">Contact</a>
          </nav>
          <a href="#contact" className="font-mono text-[10.5px] uppercase tracking-wide bg-[#C77B2C] text-white px-3.5 py-2 hover:bg-[#1C1913] transition-colors">
            List your property
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C77B2C]">Dhaka's property brokerage</span>
        <h1 className="font-display font-semibold text-[40px] sm:text-[58px] leading-[1.02] mt-4">
          Find the flat the listing photos<br className="hidden sm:block" /> couldn't capture.
        </h1>
        <p className="text-[#1C1913]/60 text-[15px] mt-5 max-w-[48ch] mx-auto leading-relaxed">
          Every property is visited, measured, and photographed by us before
          it goes up. What you see is what the floor plan actually says.
        </p>
        <form className="mt-9 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <select className="flex-1 border border-[#1C1913]/15 bg-white px-4 py-3.5 text-[13.5px] text-[#1C1913]">
            <option>Buy</option>
            <option>Rent</option>
          </select>
          <select className="flex-1 border border-[#1C1913]/15 bg-white px-4 py-3.5 text-[13.5px] text-[#1C1913]">
            <option>Any neighbourhood</option>
            {AREAS.map((a) => <option key={a}>{a}</option>)}
          </select>
          <button type="submit" className="font-mono text-[11px] uppercase tracking-wide bg-[#C77B2C] text-white px-6 py-3.5 hover:bg-[#1C1913] transition-colors">
            Search
          </button>
        </form>
      </section>

      <section id="listings" className="border-t border-[#1C1913]/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", ...AREAS].map((a) => (
              <button
                key={a}
                onClick={() => setFilter(a)}
                className={`font-mono text-[10px] uppercase tracking-wide px-3 py-1.5 border transition-colors ${
                  filter === a ? "bg-[#1C1913] text-[#F3EFE7] border-[#1C1913]" : "border-[#1C1913]/15 text-[#1C1913] hover:border-[#1C1913]/40"
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1913]/10">
            {shown.map((l) => (
              <div key={l.area + l.type} className="bg-[#F3EFE7] group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#C77B2C]/25 to-transparent group-hover:from-[#C77B2C]/40 transition-colors">
                  <span className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-wide bg-[#F3EFE7] text-[#1C1913] px-2 py-1">
                    {l.tag}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-display font-semibold text-[16px]">{l.area}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-wide text-[#1C1913]/45">{l.type}</span>
                    </div>
                    <span className="font-mono text-[13px] text-[#C77B2C]">{l.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[11px] text-[#1C1913]/45 mt-4">{shown.length} of 234 verified listings</p>
        </div>
      </section>

      <section id="areas" className="border-t border-[#1C1913]/10 bg-[#1C1913] text-[#F3EFE7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display font-semibold text-[26px] mb-8">Neighbourhood guides we actually wrote.</h2>
          <div className="grid sm:grid-cols-3 gap-px bg-[#F3EFE7]/10">
            {[
              ["Banani", "Where the rental market actually stands, block by block."],
              ["Dhanmondi", "Old money, old buildings, and where the light still comes in."],
              ["Gulshan", "The honest version of the most expensive square foot in town."],
            ].map(([a, d]) => (
              <div key={a} className="bg-[#1C1913] p-6">
                <h3 className="font-display font-semibold text-[18px] text-[#C77B2C]">{a}</h3>
                <p className="text-[13px] text-[#F3EFE7]/60 mt-2 leading-relaxed">{d}</p>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#F3EFE7]/40 mt-4 inline-block">Read the guide →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 md:py-18 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-semibold text-[24px]">Talk to a human.</h2>
          <p className="text-[#1C1913]/60 text-[14px] mt-3 max-w-[42ch] leading-relaxed">
            Viewings are one-on-one and never rushed. If we don't have the
            right property, we'll say so and point you somewhere useful.
          </p>
          <div className="mt-7 font-mono text-[13px] space-y-2">
            <p className="text-[#C77B2C]">hello@openlot.re</p>
            <p>+880 1X-XXXX XXXX</p>
            <p className="text-[#1C1913]/45">Open 9am–7pm, closed Fridays</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#C77B2C]/30 to-transparent border border-[#1C1913]/10" />
          <div className="aspect-[4/3] bg-gradient-to-tr from-[#C77B2C]/20 to-transparent border border-[#1C1913]/10" />
          <div className="aspect-[4/3] bg-gradient-to-bl from-[#C77B2C]/25 to-transparent border border-[#1C1913]/10" />
          <div className="aspect-[4/3] bg-gradient-to-tl from-[#C77B2C]/20 to-transparent border border-[#1C1913]/10" />
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1C1913]/40">
        Openlot — Demo website
      </footer>
      <DemoBadge siteId="openlot" />
    </div>
  );
}
