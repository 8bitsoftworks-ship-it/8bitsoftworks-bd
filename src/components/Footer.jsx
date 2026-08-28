import { Link } from "react-router-dom";
import { STUDIO, HOSTING } from "../data/siteConfig";
import { useAuth } from "../data/auth";

export default function Footer() {
  const user = useAuth();
  return (
    <footer className="no-print border-t border-ink/10 bg-paper">
      {/* Hosting promo strip */}
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 bg-mint text-ink shrink-0">
              Included
            </span>
            <div>
              <div className="font-display font-semibold text-[16px] text-paper">
                {HOSTING.title} on every purchase
              </div>
              <p className="text-[12.5px] text-paper/60 mt-0.5">
                In collaboration with 8BiT Softworks — we set it up for you.
              </p>
            </div>
          </div>
          <Link
            to="/websites"
            className="shrink-0 btn-dark-ghost"
          >
            Get a site →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/logo.jpg" alt="8BiT Softworks" className="h-7 w-7 object-cover" />
            <div className="leading-[0.95]">
              <div className="font-display font-semibold text-[12px] text-ink">8BiT</div>
              <div className="font-mono text-[8px] tracking-[0.15em] text-muted">SOFTWORKS</div>
            </div>
          </div>
          <p className="text-[13px] text-muted leading-relaxed max-w-[22ch]">
            A small studio that builds websites worth using.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Studio</div>
          <ul className="flex flex-col gap-2 text-[13px] text-ink">
            <li><Link to="/websites" className="hover:text-mint-dim">Websites</Link></li>
            <li><Link to="/showcase" className="hover:text-mint-dim">Showcase</Link></li>
            <li><Link to="/custom" className="hover:text-mint-dim">Custom Builds</Link></li>
            <li><Link to="/how-it-works" className="hover:text-mint-dim">How It Works</Link></li>
            <li><Link to="/about" className="hover:text-mint-dim">About</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Categories</div>
          <ul className="flex flex-col gap-2 text-[13px] text-ink">
            <li><Link to="/websites?category=Restaurant" className="hover:text-mint-dim">Restaurant</Link></li>
            <li><Link to="/websites?category=Ecommerce" className="hover:text-mint-dim">Ecommerce</Link></li>
            <li><Link to="/websites?category=SaaS" className="hover:text-mint-dim">SaaS</Link></li>
            <li><Link to="/websites?category=Portfolio" className="hover:text-mint-dim">Portfolio</Link></li>
            <li><Link to="/websites?category=Real Estate" className="hover:text-mint-dim">Real Estate</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Account</div>
          <ul className="flex flex-col gap-2 text-[13px] text-ink">
            <li><Link to={user ? "/account" : "/login"} className="hover:text-mint-dim">{user ? "My account" : "Sign in"}</Link></li>
            {!user && <li><Link to="/login?mode=signup" className="hover:text-mint-dim">Create an account</Link></li>}
            <li><Link to="/showcase" className="hover:text-mint-dim">Showcase</Link></li>
            <li><Link to="/admin" className="hover:text-mint-dim">Admin</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Contact</div>
          <ul className="flex flex-col gap-2 text-[13px] text-ink">
            <li><a href={`mailto:${STUDIO.email}`} className="hover:text-mint-dim">{STUDIO.email}</a></li>
            <li><Link to="/contact" className="hover:text-mint-dim">Send a message</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[10px] text-muted">
        <span>© {new Date().getFullYear()} {STUDIO.name}. All builds original.</span>
        <span className="flex items-center gap-4">
          <span>{STUDIO.location}</span>
        </span>
      </div>
    </footer>
  );
}
