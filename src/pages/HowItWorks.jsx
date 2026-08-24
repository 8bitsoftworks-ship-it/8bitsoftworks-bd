import { Link } from "react-router-dom";
import { HOSTING } from "../data/siteConfig";

const STEPS = [
  ["01", "Browse", "Find a design that fits.", "Filter the catalog by category, price, or what's currently featured."],
  ["02", "Preview", "Explore the live demo.", "Every site opens as a real, working demo — click through it like a visitor would."],
  ["03", "Choose", "Buy it as-is or request changes.", "Ready-made sites can be purchased directly, or sent through customization first."],
  ["04", "Customize", "We adapt it to your business.", "Logo, colors, type, copy, images, and structure — adjusted to fit what you actually do."],
  ["05", "Launch", "Your website goes live.", "We handle deployment assistance so the site ends up live on your domain."],
];

export default function HowItWorks() {
  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24">
          <span className="font-mono text-[11px] uppercase tracking-wide text-mint">Process</span>
          <h1 className="font-display font-semibold text-[32px] md:text-[46px] mt-3 leading-tight">
            How it works.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 md:px-8 py-14 md:py-20">
        <div className="flex flex-col">
          {STEPS.map(([n, title, sub, body]) => (
            <div key={n} className="grid sm:grid-cols-[80px_1fr] gap-3 sm:gap-8 border-t border-ink/10 py-8">
              <span className="font-mono text-[13px] text-mint-dim">{n}</span>
              <div>
                <h2 className="font-display font-semibold text-[20px] text-ink">{title}</h2>
                <p className="text-[13.5px] text-ink/70 mt-1">{sub}</p>
                <p className="text-[13.5px] text-muted mt-2 max-w-[56ch] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hosting promo */}
        <div className="mt-10 border border-mint-dim/40 bg-mint/10 p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-4 items-center">
          <div>
            <div className="font-display font-semibold text-[18px] text-ink">
              {HOSTING.title} on every purchase.
            </div>
            <p className="text-[13.5px] text-muted mt-1.5 max-w-[56ch] leading-relaxed">{HOSTING.note}</p>
          </div>
          <Link
            to="/websites"
            className="shrink-0 font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors text-center"
          >
            Pick a site →
          </Link>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display font-semibold text-[18px] text-ink">
              Need something completely different?
            </h3>
          </div>
          <Link to="/custom" className="font-mono text-[12px] uppercase tracking-wide px-5 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors shrink-0">
            Request a Custom Build →
          </Link>
        </div>
      </div>
    </div>
  );
}
