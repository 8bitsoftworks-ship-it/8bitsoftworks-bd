import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ShowcaseCard from "../components/ShowcaseCard";
import { allShowcases, showcaseCategories } from "../data/showcases";

export default function Showcase() {
  const [category, setCategory] = useState("All");
  const items = useMemo(() => allShowcases(), []);
  const categories = useMemo(() => showcaseCategories(), [items]);

  const filtered = useMemo(() => {
    if (category === "All") return items;
    return items.filter((s) => s.category === category);
  }, [items, category]);

  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper grid-texture">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mint">
            8BiT Softworks / Live showcase
          </span>
          <h1 className="font-display font-semibold text-[32px] md:text-[46px] mt-3 leading-tight max-w-[20ch]">
            Built. Live. <span className="text-paper/50">In production.</span>
          </h1>
          <p className="text-paper/65 text-[15px] mt-3 max-w-[52ch] leading-relaxed">
            Every card embeds the real index page of a finished build. Preview it
            right here, or open the live site in a new tab.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border transition-colors ${
                category === c
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/15 text-ink hover:border-ink/40"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-muted">
            {filtered.length} build{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-dashed border-ink/20 py-20 text-center">
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Empty category</p>
            <p className="text-[14px] text-ink mt-2">
              No builds under {category} yet — check back soon.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <ShowcaseCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="mt-14 border-t border-ink/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-[18px] text-ink">
              Want a build like these?
            </h3>
            <p className="text-[13.5px] text-muted mt-1 max-w-[52ch]">
              Every site in our catalog can be customized, or we can build
              something new from scratch.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/websites"
              className="font-mono text-[11px] uppercase tracking-wide px-4 py-2.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors"
            >
              Browse catalog →
            </Link>
            <Link
              to="/custom"
              className="font-mono text-[11px] uppercase tracking-wide px-4 py-2.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
            >
              Request a build
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
