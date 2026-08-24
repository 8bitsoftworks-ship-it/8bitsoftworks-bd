import { Link } from "react-router-dom";
import PreviewFrame from "./PreviewFrame";
import { formatPrice } from "../data/websites";

export default function WebsiteCard({ site, size = "default" }) {
  const tall = size === "tall";
  return (
    <div className="group border border-ink/10 bg-white/40 hover:border-ink/25 transition-colors duration-300 flex flex-col">
      <Link to={`/websites/${site.id}`} className="block">
        <div className={`relative overflow-hidden ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
          <div className="absolute inset-0 transition-transform duration-500 ease-studio group-hover:scale-[1.04]">
            <PreviewFrame variant={site.preview} accent={site.accent} name={site.name} className="h-full w-full" />
          </div>
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300" />
          <div className="absolute top-2 right-2 font-mono text-[9px] uppercase tracking-wide px-1.5 py-0.5 bg-paper/90 text-ink translate-y-[-6px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            View demo →
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/websites/${site.id}`}>
              <h3 className="font-display font-semibold text-[15px] text-ink leading-tight hover:text-mint-dim transition-colors">
                {site.name}
              </h3>
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-wide text-muted">{site.category}</span>
          </div>
          <span className="font-mono text-[12px] text-ink font-tabular whitespace-nowrap">
            {formatPrice(site.price)}
          </span>
        </div>

        <p className="text-[13px] text-muted leading-relaxed flex-1">{site.description}</p>

        <div className="flex gap-2 pt-1">
          <Link
            to={`/websites/${site.id}`}
            className="flex-1 text-center font-mono text-[10px] uppercase tracking-wide py-2 border border-ink/15 text-ink hover:border-ink/40 transition-colors"
          >
            View Demo
          </Link>
          <Link
            to={`/customize/${site.id}`}
            className="flex-1 text-center font-mono text-[10px] uppercase tracking-wide py-2 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
          >
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
}
