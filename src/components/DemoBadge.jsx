import { Link } from "react-router-dom";

export default function DemoBadge({ siteId, dark }) {
  return (
    <Link
      to={`/websites/${siteId}`}
      className={`fixed bottom-4 right-4 z-50 font-mono text-[9.5px] uppercase tracking-wide px-3 py-2 border backdrop-blur transition-colors ${
        dark
          ? "bg-black/60 border-white/15 text-white/70 hover:text-white"
          : "bg-white/80 border-ink/15 text-ink/60 hover:text-ink"
      }`}
    >
      Demo by 8BiT Softworks ↗
    </Link>
  );
}
