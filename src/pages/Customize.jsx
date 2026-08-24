import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getWebsiteById } from "../data/websites";

const PAGES = ["Home", "About", "Services", "Contact"];

function LivePreview({ brand, accent, secondary, heroTitle, heroDesc, ctaText, page, theme }) {
  const dark = theme === "dark";
  return (
    <div
      className={`h-full w-full flex flex-col border ${
        dark ? "bg-[#121319] border-white/10" : "bg-white border-ink/10"
      }`}
    >
      <div
        className={`flex items-center justify-between px-5 py-3.5 border-b ${
          dark ? "border-white/10" : "border-ink/10"
        }`}
      >
        <span
          className="font-display font-semibold text-[13px] tracking-tight"
          style={{ color: accent }}
        >
          {brand || "Your Brand"}
        </span>
        <div className={`hidden sm:flex gap-4 font-mono text-[9px] uppercase tracking-wide ${dark ? "text-white/40" : "text-ink/40"}`}>
          {PAGES.map((p) => (
            <span key={p} className={p === page ? (dark ? "text-white" : "text-ink") : ""}>
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 py-8 gap-4">
        <h3
          className={`font-display font-semibold text-[22px] md:text-[30px] leading-[1.05] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {heroTitle || "A headline for your website"}
        </h3>
        <p className={`text-[13px] max-w-[42ch] ${dark ? "text-white/55" : "text-ink/55"}`}>
          {heroDesc || "A short line describing what you do and who it's for."}
        </p>
        <div className="flex gap-2 pt-1">
          <span
            className="font-mono text-[10px] uppercase tracking-wide px-4 py-2.5 inline-block w-fit"
            style={{ background: accent, color: dark ? "#121319" : "#fff" }}
          >
            {ctaText || "Get Started"}
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-wide px-4 py-2.5 border w-fit ${
              dark ? "border-white/20 text-white" : "border-ink/15 text-ink"
            }`}
          >
            Learn More
          </span>
        </div>
      </div>

      <div className={`grid grid-cols-3 gap-px ${dark ? "bg-white/10" : "bg-ink/10"}`}>
        {[0, 1, 2].map((i) => (
          <div key={i} className={`aspect-[4/3] ${dark ? "bg-[#121319]" : "bg-white"}`} style={{ borderTop: `2px solid ${i === 0 ? accent : secondary}` }} />
        ))}
      </div>
    </div>
  );
}

export default function Customize() {
  const { id } = useParams();
  const site = getWebsiteById(id);

  const [brand, setBrand] = useState(site?.name || "");
  const [accent, setAccent] = useState(site?.accent || "#39D9A0");
  const [secondary, setSecondary] = useState("#2B2E38");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const [ctaText, setCtaText] = useState("Get Started");
  const [contactEmail, setContactEmail] = useState("");
  const [page, setPage] = useState("Home");
  const [sent, setSent] = useState(false);

  if (!site) return <Navigate to="/websites" replace />;

  return (
    <div>
      <div className="border-b border-ink/10 px-5 md:px-8 py-6 flex items-center justify-between gap-4">
        <div>
          <Link to={`/websites/${site.id}`} className="font-mono text-[10.5px] uppercase tracking-wide text-muted hover:text-ink">
            ← Back to {site.name}
          </Link>
          <h1 className="font-display font-semibold text-[22px] md:text-[28px] text-ink mt-1">
            Make it yours.
          </h1>
        </div>
        <button
          onClick={() => setSent(true)}
          className="font-mono text-[11px] uppercase tracking-wide px-4 md:px-5 py-3 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors shrink-0"
        >
          Request These Changes
        </button>
      </div>

      {sent && (
        <div className="mx-5 md:mx-8 mt-6 border border-mint-dim/40 bg-mint/10 px-4 py-3 text-[13px] text-ink">
          Changes noted — we'll follow up by email with a quote and timeline for {site.name}.
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_380px]">
        {/* Preview */}
        <div className="p-5 md:p-8 lg:border-r border-ink/10">
          <div className="aspect-[16/10] w-full">
            <LivePreview
              brand={brand}
              accent={accent}
              secondary={secondary}
              heroTitle={heroTitle}
              heroDesc={heroDesc}
              ctaText={ctaText}
              page={page}
              theme={site.theme}
            />
          </div>
          <p className="font-mono text-[10.5px] text-muted mt-3">
            This is a prototype preview — the final build matches {site.name}'s full layout.
          </p>
        </div>

        {/* Controls */}
        <div className="p-5 md:p-8 flex flex-col gap-8">
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Brand</h2>
            <div className="flex flex-col gap-3">
              <input
                className="border border-ink/15 px-3 py-2.5 text-[13px] bg-transparent"
                placeholder="Brand name"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <label className="text-[12px] text-muted flex items-center justify-between border border-dashed border-ink/20 px-3 py-2.5">
                Upload logo
                <input type="file" className="text-[11px] max-w-[120px]" />
              </label>
              <div className="flex gap-3">
                <label className="flex-1 text-[12px] text-muted flex items-center justify-between border border-ink/15 px-3 py-2">
                  Primary
                  <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} className="h-6 w-8 bg-transparent" />
                </label>
                <label className="flex-1 text-[12px] text-muted flex items-center justify-between border border-ink/15 px-3 py-2">
                  Secondary
                  <input type="color" value={secondary} onChange={(e) => setSecondary(e.target.value)} className="h-6 w-8 bg-transparent" />
                </label>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Content</h2>
            <div className="flex flex-col gap-3">
              <input
                className="border border-ink/15 px-3 py-2.5 text-[13px] bg-transparent"
                placeholder="Hero title"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
              />
              <textarea
                className="border border-ink/15 px-3 py-2.5 text-[13px] bg-transparent"
                placeholder="Hero description"
                rows={2}
                value={heroDesc}
                onChange={(e) => setHeroDesc(e.target.value)}
              />
              <input
                className="border border-ink/15 px-3 py-2.5 text-[13px] bg-transparent"
                placeholder="CTA text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
              />
              <input
                className="border border-ink/15 px-3 py-2.5 text-[13px] bg-transparent"
                placeholder="Contact email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Pages</h2>
            <div className="flex flex-wrap gap-2">
              {PAGES.map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border transition-colors ${
                    page === p ? "bg-ink text-paper border-ink" : "border-ink/15 text-ink hover:border-ink/40"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
