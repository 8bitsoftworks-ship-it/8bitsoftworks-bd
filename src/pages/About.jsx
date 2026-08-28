import { Link } from "react-router-dom";

const OFFERINGS = [
  "Ready-made websites",
  "Custom websites",
  "Ecommerce experiences",
  "Landing pages",
  "Web applications",
  "Design systems",
];

export default function About() {
  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24">
          <span className="font-mono text-[11px] uppercase tracking-wide text-mint">About</span>
          <h1 className="font-display font-semibold text-[32px] md:text-[46px] mt-3 leading-tight max-w-[18ch]">
            A small digital workshop making websites worth using.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 flex flex-col gap-5 text-[15px] text-ink/85 leading-relaxed">
            <p>
              8BiT Softworks was created out of a simple annoyance: most businesses don’t need a six-week discovery process to get a website – they need a good one, fast, that doesn’t look like everyone else’s.
            </p>
            <p>
              So we build finished websites first, show them as real working demos and let people buy what they see. If it needs to be different – different name, different colors, different structure all-together – we do that too.
            </p>
            <p>
              We're not a template marketplace and we're not a traditional
              agency. We're closer to a small software studio that happens to
              specialize in the front door of a business.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-wide text-muted mb-4">We build</h2>
            <ul className="flex flex-col gap-2.5">
              {OFFERINGS.map((o) => (
                <li key={o} className="text-[13.5px] text-ink border-b border-ink/10 pb-2.5">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ink/10 pt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/websites" className="btn-primary">Browse Ready-Made Sites</Link>
          <Link to="/custom" className="btn-ghost">Request a Custom Build</Link>
        </div>
      </div>
    </div>
  );
}
