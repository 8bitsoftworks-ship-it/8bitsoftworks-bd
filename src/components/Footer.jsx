import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
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
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-muted mb-3">Contact</div>
          <ul className="flex flex-col gap-2 text-[13px] text-ink">
            <li><a href="mailto:hello@8bitsoftworks.com" className="hover:text-mint-dim">hello@8bitsoftworks.com</a></li>
            <li><Link to="/contact" className="hover:text-mint-dim">Send a message</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[10px] text-muted">
        <span>© {new Date().getFullYear()} 8BiT Softworks. All builds original.</span>
        <span>Dhaka, BD — remote-first</span>
      </div>
    </footer>
  );
}
