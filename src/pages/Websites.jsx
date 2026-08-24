import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import WebsiteCard from "../components/WebsiteCard";
import { websites, categories } from "../data/websites";

const SORTS = ["Featured", "Newest", "Popular", "Price: Low to High", "Price: High to Low"];

export default function Websites() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("Featured");
  const [maxPrice, setMaxPrice] = useState(20000);

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category === "All") next.delete("category");
    else next.set("category", category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    let list = websites.filter((w) => w.price <= maxPrice);
    if (category !== "All") list = list.filter((w) => w.category === category);

    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "Featured") list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    // "Newest" / "Popular" fall back to catalog order — no timestamp/analytics data yet
    return list;
  }, [category, sort, maxPrice]);

  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16">
          <span className="font-mono text-[11px] uppercase tracking-wide text-mint">Marketplace</span>
          <h1 className="font-display font-semibold text-[32px] md:text-[44px] mt-2 leading-tight">
            Find your starting point.
          </h1>
          <p className="text-paper/65 text-[15px] mt-2 max-w-[46ch]">
            Professionally designed websites, ready to personalize.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14">
        {/* Filters */}
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex flex-wrap gap-2">
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
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-ink/10 pt-5">
            <label className="flex items-center gap-3 text-[12px] text-muted font-mono">
              MAX PRICE
              <input
                type="range"
                min="5000"
                max="20000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-40 accent-ink"
              />
              <span className="text-ink font-tabular">৳{maxPrice.toLocaleString("en-IN")}</span>
            </label>

            <label className="flex items-center gap-3 text-[12px] text-muted font-mono">
              SORT
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-ink/15 bg-transparent px-2 py-1.5 text-ink"
              >
                {SORTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <span className="sm:ml-auto font-mono text-[11px] text-muted">
              {filtered.length} site{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="border border-dashed border-ink/20 py-20 text-center">
            <p className="text-muted text-[14px]">
              Nothing matches those filters yet. Try widening the price range.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((site, i) => (
              <WebsiteCard key={site.id} site={site} size={i % 5 === 0 ? "tall" : "default"} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
