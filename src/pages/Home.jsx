import { useState } from "react";
import { Link } from "react-router-dom";
import PreviewFrame from "../components/PreviewFrame";
import { websites, formatPrice } from "../data/websites";

const heroSites = websites.filter((w) => w.featured).slice(0, 4);
const indexSites = websites.slice(0, 8);

function CatalogIndex() {
  const [active, setActive] = useState(null);
  return (
    <div className="border-t border-ink/15">
      {indexSites.map((site, i) => (
        <Link
          key={site.id}
          to={`/websites/${site.id}`}
          onMouseEnter={() => setActive(site.id)}
          onMouseLeave={() => setActive(null)}
          className="group relative flex items-center justify-between border-b border-ink/15 py-4 md:py-5 gap-4"
        >
          <div className="flex items-center gap-4 md:gap-8 min-w-0">
            <span className="font-mono text-[11px] text-muted w-7 shrink-0">
              {String(i + 1).padStart(3, "0")}
            </span>
            <span className="font-display text-[20px] md:text-[28px] text-ink group-hover:text-mint-dim transition-colors truncate">
              {site.name}
            </span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wide text-muted shrink-0">
              {site.category}
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <span className="font-mono text-[12px] text-ink font-tabular">{formatPrice(site.price)}</span>
            <span className="font-mono text-[10px] uppercase text-muted group-hover:text-ink transition-colors hidden md:inline">
              View →
            </span>
          </div>

          {/* preview flyout */}
          <div
            className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+24px)] w-56 aspect-[4/3] pointer-events-none transition-all duration-300 ease-studio z-10 ${
              active === site.id ? "opacity-100 translate-x-[calc(100%+8px)]" : "opacity-0"
            }`}
          >
            <PreviewFrame variant={site.preview} accent={site.accent} name={site.name} className="h-full w-full shadow-xl" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative border-b border-ink/10 bg-ink text-paper grid-texture overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mint mb-5">
              8BiT Softworks / Studio &amp; Catalog
            </span>
            <h1 className="font-display font-semibold text-[42px] leading-[1.02] sm:text-[54px] lg:text-[64px] tracking-tight text-paper">
              Websites,
              <br />
              already built.
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-paper/70 max-w-[46ch]">
              Skip the blank canvas. Pick a site, make it yours, and launch —
              or let us build something from scratch.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/websites"
                className="font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 bg-mint text-ink hover:bg-paper transition-colors"
              >
                Browse Ready-Made Sites
              </Link>
              <Link
                to="/custom"
                className="font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 border border-paper/25 text-paper hover:border-paper/60 transition-colors"
              >
                Request a Custom Build
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-3 md:gap-4 self-center">
            {heroSites.map((site, i) => (
              <Link
                key={site.id}
                to={`/websites/${site.id}`}
                className={`group block ${i === 0 ? "col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <div className="absolute inset-0 transition-transform duration-500 ease-studio group-hover:scale-[1.05]">
                    <PreviewFrame
                      variant={site.preview}
                      accent={site.accent}
                      name={site.name}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-1.5 font-mono text-[9px] uppercase tracking-wide text-paper/50">
                  <span>{site.name}</span>
                  <span>{site.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED / CATALOG INDEX */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">Catalog</span>
            <h2 className="font-display font-semibold text-[28px] md:text-[36px] text-ink leading-tight mt-2">
              A few things we've already made.
            </h2>
          </div>
          <p className="text-[14px] text-muted max-w-[36ch]">
            Start with a finished idea. Make it yours.
          </p>
        </div>

        <CatalogIndex />

        <div className="mt-8 flex justify-end">
          <Link
            to="/websites"
            className="font-mono text-[11px] uppercase tracking-wide px-4 py-2.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors"
          >
            View full catalog →
          </Link>
        </div>
      </section>

      {/* HOSTING PROMO */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-18">
        <div className="border border-ink/10 bg-ink text-paper grid-texture p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 bg-mint text-ink inline-block">
              Included with every purchase
            </span>
            <h2 className="font-display font-semibold text-[26px] md:text-[34px] leading-tight mt-4">
              3 months free hosting,
              <br className="hidden sm:block" /> in collaboration with 8BiT Softworks.
            </h2>
            <p className="text-paper/65 text-[14px] mt-3 max-w-[52ch] leading-relaxed">
              Every site we sell comes with hosting arranged and set up for
              you — free for the first three months, then at our partner's
              standard rate (or move anywhere you like). No technical setup
              on your end.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:text-right">
            <Link
              to="/websites"
              className="font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 bg-mint text-ink hover:bg-paper transition-colors text-center"
            >
              Pick a site
            </Link>
            <Link
              to="/how-it-works"
              className="font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 border border-paper/25 text-paper hover:border-paper/60 transition-colors text-center"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-y border-ink/10 bg-ink/[0.02]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-18">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {[
              ["01", "Browse", "Find a design that fits."],
              ["02", "Preview", "Explore the live demo."],
              ["03", "Choose", "Buy it as-is or request changes."],
              ["04", "Customize", "We adapt it to your business."],
              ["05", "Launch", "Your website goes live."],
            ].map(([n, title, desc]) => (
              <div key={n} className="border-t border-ink/15 pt-4">
                <span className="font-mono text-[11px] text-mint-dim">{n}</span>
                <h3 className="font-display font-semibold text-[16px] text-ink mt-2">{title}</h3>
                <p className="text-[13px] text-muted mt-1.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <div className="border border-ink/10 p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[44ch]">
            <h2 className="font-display font-semibold text-[26px] md:text-[32px] text-ink leading-tight">
              Nothing here fit? We'll build it.
            </h2>
            <p className="text-[14px] text-muted mt-3 leading-relaxed">
              Tell us what you're trying to build. We'll turn the idea into a
              real website — no template required.
            </p>
          </div>
          <Link
            to="/custom"
            className="shrink-0 font-mono text-[12px] uppercase tracking-wide px-6 py-4 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
          >
            Request a Custom Build
          </Link>
        </div>
      </section>
    </div>
  );
}
