import { Link, Navigate } from "react-router-dom";
import WebsiteCard from "../components/WebsiteCard";
import { useAuth, logOut } from "../data/auth";
import { getWebsiteById, formatPrice } from "../data/websites";

function OrderRow({ order }) {
  return (
    <div className="border border-ink/10 px-4 py-3.5 flex flex-wrap items-center justify-between gap-2">
      <div className="min-w-0">
        <span className="font-mono text-[11px] text-mint-dim block">{order.id}</span>
        <span className="text-[13.5px] text-ink block truncate">{order.site}</span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-muted">
          {order.method} · {order.date}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[12px] text-ink font-tabular">{formatPrice(order.total)}</span>
        <span className="font-mono text-[9px] uppercase tracking-wide px-2 py-1 border border-ink/15 text-muted">
          {order.status}
        </span>
      </div>
    </div>
  );
}

export default function Account() {
  const user = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  const favorites = user.favorites
    .map((id) => getWebsiteById(id))
    .filter(Boolean);

  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mint">Account</span>
              <h1 className="font-display font-semibold text-[32px] md:text-[42px] mt-2 leading-tight">
                {user.name}
              </h1>
              <p className="text-paper/65 text-[14px] mt-2">{user.email}</p>
            </div>
            <button
              type="button"
              onClick={() => logOut()}
              className="btn-dark-ghost"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-16 flex flex-col gap-14">
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-semibold text-[22px] text-ink">Saved websites</h2>
            <Link to="/websites" className="font-mono text-[10.5px] uppercase tracking-wide text-muted hover:text-ink transition-colors">
              Browse catalog →
            </Link>
          </div>
          {favorites.length === 0 ? (
            <div className="border border-dashed border-ink/20 py-16 text-center">
              <p className="text-[14px] text-muted">Nothing saved yet.</p>
              <p className="text-[13px] text-muted mt-1">
                Hit "Save" on any website and it will show up here.
              </p>
              <Link to="/websites" className="btn-ghost inline-flex mt-6">
                Find a website
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {favorites.map((site) => (
                <WebsiteCard key={site.id} site={site} />
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-semibold text-[22px] text-ink">Order history</h2>
            <span className="font-mono text-[10px] uppercase tracking-wide text-muted">
              {user.orders.length} order{user.orders.length !== 1 ? "s" : ""}
            </span>
          </div>
          {user.orders.length === 0 ? (
            <div className="border border-dashed border-ink/20 py-16 text-center">
              <p className="text-[14px] text-muted">
                No orders yet. When you confirm a purchase, it shows up here.
              </p>
              <Link to="/websites" className="btn-ghost inline-flex mt-6">
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {user.orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-ink/10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-[18px] text-ink">Need something built?</h3>
            <p className="text-[13.5px] text-muted mt-1">
              Tell us what you're trying to build and we'll quote it.
            </p>
          </div>
          <Link to="/custom" className="btn-primary shrink-0">
            Request a custom build
          </Link>
        </section>
      </div>
    </div>
  );
}
