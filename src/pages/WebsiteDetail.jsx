import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import PreviewFrame from "../components/PreviewFrame";
import WebsiteCard from "../components/WebsiteCard";
import { getWebsiteById, formatPrice, websites } from "../data/websites";
import { HOSTING } from "../data/siteConfig";

const DEVICE_SIZES = {
  Desktop: "w-full aspect-[16/9]",
  Tablet: "w-full max-w-[520px] mx-auto aspect-[4/3]",
  Mobile: "w-full max-w-[260px] mx-auto aspect-[9/16]",
};

const INCLUDES = [
  "Complete website, all pages",
  "Responsive design",
  "Mobile version included",
  "Full source files",
  "Basic SEO setup",
  "Working contact form",
  "Deployment assistance",
  "Basic customization guidance",
];

export default function WebsiteDetail() {
  const { id } = useParams();
  const site = getWebsiteById(id);
  const [device, setDevice] = useState("Desktop");

  if (!site) return <Navigate to="/websites" replace />;

  const related = websites.filter((w) => w.id !== site.id && w.category === site.category).slice(0, 3);
  const fallback = websites.filter((w) => w.id !== site.id).slice(0, 3);
  const relatedSites = related.length ? related : fallback;

  return (
    <div>
      {/* Hero preview */}
      <section className="border-b border-ink/10 bg-ink/[0.02]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10 pb-8 md:pt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <div>
              <Link to="/websites" className="font-mono text-[10.5px] uppercase tracking-wide text-muted hover:text-ink">
                ← Back to catalog
              </Link>
              <h1 className="font-display font-semibold text-[32px] md:text-[46px] text-ink mt-2 leading-tight">
                {site.name}
              </h1>
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                {site.category} / {site.tags.join(" · ")}
              </span>
            </div>
            <div className="text-right">
              <div className="font-mono text-[11px] uppercase tracking-wide text-muted">Price</div>
              <div className="font-display font-semibold text-[26px] text-ink font-tabular">
                {formatPrice(site.price)}
              </div>
            </div>
          </div>

          {/* Device controls */}
          {site.hasFullDemo && (
            <div className="flex gap-1 mb-4">
              {Object.keys(DEVICE_SIZES).map((d) => (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  className={device === d ? "chip-on" : "chip"}
                >
                  {d}
                </button>
              ))}
            </div>
          )}

          <div className={`${DEVICE_SIZES[device]} transition-all duration-300 ease-studio`}>
            <PreviewFrame
              variant={site.preview}
              accent={site.accent}
              name={site.name}
              className="h-full w-full"
              url={`8bit.site/${site.id}`}
            />
          </div>
          {!site.hasFullDemo && (
            <p className="font-mono text-[10.5px] text-muted mt-3">
              Full interactive demo in progress — shown above is the current build.
            </p>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to={`/checkout/${site.id}`}
              className="btn-primary"
            >
              Buy This Website
            </Link>
            <Link
              to={`/customize/${site.id}`}
              className="btn-ghost"
            >
              Customize This Website
            </Link>
            {site.hasFullDemo && (
              <a
                href={site.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 text-ink hover:text-mint-dim transition-colors underline underline-offset-4"
              >
                Open Live Demo ↗
              </a>
            )}
          </div>

          {/* Hosting promo */}
          <div className="mt-6 border border-mint-dim/40 bg-mint/10 px-4 py-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wide text-mint-dim shrink-0">Included</span>
            <p className="text-[13px] text-ink">
              <strong>{HOSTING.title}</strong> on every purchase, in collaboration with 8BiT Softworks.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-display font-semibold text-[20px] text-ink mb-3">About this site</h2>
          <p className="text-[14.5px] text-muted leading-relaxed">{site.longDescription}</p>

          <div className="mt-10 border-t border-ink/10 pt-8">
            <h2 className="font-display font-semibold text-[20px] text-ink mb-4">What you get</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13.5px] text-ink">
                  <span className="text-mint-dim mt-0.5">＋</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-8">
            <h2 className="font-display font-semibold text-[20px] text-ink mb-2">
              Want this one, but not exactly like this?
            </h2>
            <p className="text-[13.5px] text-muted leading-relaxed max-w-[60ch] mb-4">
              We can adjust logo, colors, typography, text, images, sections, pages,
              contact information, and your product or service content — small layout
              changes included.
            </p>
            <Link
              to={`/customize/${site.id}`}
              className="inline-flex btn-ghost"
            >
              Request Customization
            </Link>
          </div>
        </div>

        <aside className="border border-ink/10 p-6 h-fit sticky top-24">
          <div className="font-mono text-[10px] uppercase tracking-wide text-muted mb-4">Pricing</div>
          <div className="flex flex-col gap-4 text-[13px]">
            <div className="flex justify-between border-b border-ink/10 pb-3">
              <span className="text-ink">Ready-Made</span>
              <span className="font-tabular text-ink">{formatPrice(site.price)}</span>
            </div>
            <div className="flex justify-between border-b border-ink/10 pb-3">
              <span className="text-ink">+ Customization</span>
              <span className="font-tabular text-ink">from {formatPrice(site.price + 6000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink">Fully Custom</span>
              <span className="text-muted">Let's talk</span>
            </div>
          </div>
          <p className="text-[11.5px] text-muted mt-4 leading-relaxed">
            Prices are examples and can change based on your requirements.
          </p>
        </aside>
      </section>

      {relatedSites.length > 0 && (
        <section className="border-t border-ink/10 mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
          <h2 className="font-display font-semibold text-[22px] text-ink mb-6">
            More like this
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedSites.map((s) => (
              <WebsiteCard key={s.id} site={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
