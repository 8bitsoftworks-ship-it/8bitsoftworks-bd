import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 md:px-8 py-28 text-center">
      <span className="font-mono text-[11px] text-muted">404</span>
      <h1 className="font-display font-semibold text-[28px] text-ink mt-3">
        This page isn't built yet.
      </h1>
      <p className="text-[14px] text-muted mt-2">
        Maybe it's still in the catalog. Maybe it never existed.
      </p>
      <Link to="/" className="inline-block mt-8 font-mono text-[12px] uppercase tracking-wide px-5 py-3 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
        Back to home
      </Link>
    </div>
  );
}
