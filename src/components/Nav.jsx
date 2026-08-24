import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/websites", label: "Websites" },
  { to: "/custom", label: "Custom Builds" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-ink/10" : "bg-paper border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <img src="/logo.jpg" alt="8BiT Softworks" className="h-8 w-8 object-cover" />
          <div className="leading-[0.95]">
            <div className="font-display font-semibold text-[13px] tracking-tight text-ink">8BiT</div>
            <div className="font-mono text-[9px] tracking-[0.15em] text-muted">SOFTWORKS</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono text-[11px] tracking-wide uppercase transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/websites"
            className="font-mono text-[11px] uppercase tracking-wide px-3 py-2 border border-ink/15 text-ink hover:border-ink/40 transition-colors"
          >
            Browse Sites
          </Link>
          <Link
            to="/custom"
            className="font-mono text-[11px] uppercase tracking-wide px-3 py-2 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
          >
            Request a Build
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 h-9 w-9"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-studio border-t ${
          open ? "max-h-96 border-ink/10" : "max-h-0 border-transparent"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1 bg-paper">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-mono text-[13px] uppercase tracking-wide py-2.5 text-ink border-b border-ink/10 last:border-0"
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <Link
              to="/websites"
              onClick={() => setOpen(false)}
              className="font-mono text-[12px] uppercase tracking-wide px-3 py-2.5 border border-ink/15 text-center"
            >
              Browse Sites
            </Link>
            <Link
              to="/custom"
              onClick={() => setOpen(false)}
              className="font-mono text-[12px] uppercase tracking-wide px-3 py-2.5 bg-ink text-paper text-center"
            >
              Request a Build
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
