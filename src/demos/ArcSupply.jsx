import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import useCart from "../demo-kit/useCart";
import CartDrawer from "../demo-kit/CartDrawer";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/arc-supply";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/shop`, label: "Shop" },
  { to: `${BASE}/about`, label: "About" },
];

const CATS = ["All", "Outerwear", "Trousers", "Knitwear", "Accessories"];

const PRODUCTS = [
  {
    id: "canvas-field-jacket",
    name: "Canvas Field Jacket",
    price: 4200,
    cat: "Outerwear",
    stock: "In stock",
    sizes: ["S", "M", "L", "XL"],
    art: "linear-gradient(135deg,#B9B5A8,#5A574E)",
    note: "Waxed 12oz canvas, brass hardware, cut for layering.",
  },
  {
    id: "selvedge-work-trouser",
    name: "Selvedge Work Trouser",
    price: 3800,
    cat: "Trousers",
    stock: "In stock",
    sizes: ["28", "30", "32", "34"],
    art: "linear-gradient(135deg,#6E7A86,#2C333A)",
    note: "Dense 14oz denim with a double-stitched seat that outlasts the season.",
  },
  {
    id: "waxed-tote-small",
    name: "Waxed Tote, small",
    price: 2100,
    cat: "Accessories",
    stock: "3 left",
    sizes: [],
    art: "linear-gradient(135deg,#8A6F4D,#3E3223)",
    note: "Holds a laptop, a book, and your lunch. Waxed so rain just beads off.",
  },
  {
    id: "merino-half-zip",
    name: "Merino Half-Zip",
    price: 3400,
    cat: "Knitwear",
    stock: "In stock",
    sizes: ["S", "M", "L", "XL"],
    art: "linear-gradient(135deg,#9A8B7A,#4A4036)",
    note: "18.5-micron merino, knitted to keep its shape across a whole winter.",
  },
  {
    id: "leather-belt-brown",
    name: "Leather Belt, brown",
    price: 1600,
    cat: "Accessories",
    stock: "In stock",
    sizes: ["30", "32", "34", "36"],
    art: "linear-gradient(135deg,#6E4A2E,#2E1E10)",
    note: "Full-grain bridle leather that ages instead of wearing out.",
  },
  {
    id: "deck-shoe-natural",
    name: "Deck Shoe, natural",
    price: 3900,
    cat: "Accessories",
    stock: "Sold out",
    sizes: ["7", "8", "9", "10"],
    art: "linear-gradient(135deg,#C9B79A,#6E5B3C)",
    note: "Hand-stitched uppers on a non-marking sole. Back each spring.",
  },
];

const fmt = (n) => "৳" + n.toLocaleString("en-IN");

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header({ cart, openCart }) {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-[#EFEEE7]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-serif italic text-[19px]">
          Arc Supply
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10.5px] uppercase tracking-wide text-ink/50 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-ink ${active === l.label.toLowerCase() ? "text-ink" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <button
            onClick={openCart}
            className="font-mono text-[10.5px] uppercase tracking-wide border border-ink/20 px-3 py-2 hover:border-ink/50"
          >
            Cart ({cart.count})
          </button>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-ink/10 text-ink" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-ink/40">
      Arc Supply — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 pb-14 md:grid-cols-2 md:pt-24 md:pb-20">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink/45">Autumn collection</span>
        <h1 className="mt-4 font-serif text-[38px] italic leading-[1.05] sm:text-[50px]">
          Made in small batches.
        </h1>
        <p className="mt-4 max-w-[40ch] text-[14.5px] leading-relaxed text-ink/60">
          Twelve pieces, restocked twice a year. Everything is cut and sewn within 60km of our
          workshop, in fabrics we've used for a decade.
        </p>
        <Link
          to={`${BASE}/shop`}
          className="mt-7 inline-block bg-ink px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#EFEEE7] transition-colors hover:bg-ink/80"
        >
          Shop the collection
        </Link>
      </div>
      <div
        className="aspect-[4/5] border border-ink/10"
        style={{ background: "linear-gradient(135deg,#121319,#4A4436)" }}
      >
        <div className="flex h-full items-end p-4">
          <span className="font-mono text-[9.5px] uppercase tracking-wide text-[#EFEEE7]/50">
            Workshop, Dhamrai — cut 03
          </span>
        </div>
      </div>
    </section>
  );
}

function Featured({ cart, openCart }) {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-[26px] italic">This season</h2>
          <Link to={`${BASE}/shop`} className="font-mono text-[10.5px] uppercase tracking-wide text-ink/50 hover:text-ink">
            All products →
          </Link>
        </div>
        <div className="grid gap-px bg-ink/10 sm:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} cart={cart} openCart={openCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, cart, openCart }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="group flex flex-col bg-[#EFEEE7] p-5">
      <Link to={`${BASE}/product/${p.id}`} className="block">
        <div
          className="mb-4 aspect-square transition-colors group-hover:opacity-90"
          style={{ background: p.art }}
        />
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-[15px]">{p.name}</h3>
            <span className={`font-mono text-[10px] uppercase tracking-wide ${p.stock === "Sold out" ? "text-ink/35" : "text-[#2F5D45]"}`}>
              {p.stock}
            </span>
          </div>
          <span className="font-mono text-[12px]">{fmt(p.price)}</span>
        </div>
      </Link>
      <button
        onClick={() => {
          if (p.stock === "Sold out") return;
          cart.add({ id: p.id, name: p.name, price: p.price, art: p.art });
          setAdded(true);
          setTimeout(() => setAdded(false), 1400);
          openCart();
        }}
        disabled={p.stock === "Sold out"}
        className={`mt-4 border py-2.5 font-mono text-[10.5px] uppercase tracking-wide transition-colors ${
          p.stock === "Sold out"
            ? "cursor-not-allowed border-ink/10 text-ink/30"
            : added
            ? "border-ink bg-ink text-[#EFEEE7]"
            : "border-ink/20 hover:border-ink"
        }`}
      >
        {p.stock === "Sold out" ? "Sold out" : added ? "Added ✓" : "Add to cart"}
      </button>
    </div>
  );
}

function GoodToKnow() {
  return (
    <section className="border-t border-ink/10 bg-ink text-[#EFEEE7]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-[26px] italic">A workshop, not a warehouse.</h2>
            <p className="mt-4 max-w-[46ch] text-[14px] leading-relaxed text-[#EFEEE7]/60">
              Arc Supply is five people and one cutting table. We'd rather sell out of something
              good than keep a hundred mediocre things in stock — so when it's gone, it's gone
              until next season.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#EFEEE7]/10 pt-8">
              <Stat value="60km" label="Radius our fabrics travel" valueClass="text-[#EFEEE7]" />
              <Stat value="2x/yr" label="Restock schedule" valueClass="text-[#EFEEE7]" />
              <Stat value="14 days" label="No-questions returns" valueClass="text-[#EFEEE7]" />
            </div>
          </div>
          <div>
            <h2 className="mb-6 font-mono text-[11px] uppercase tracking-wide text-[#EFEEE7]/50">Good to know</h2>
            <div className="flex flex-col">
              {[
                ["Sizing", "Cut generously, so you can size down if you're between. Exchanges are free."],
                ["Shipping", "Flat ৳120 across Bangladesh, free over ৳5,000. Orders leave within two days."],
                ["Restocks", "Twice a year, announced here first. Sold-out pieces rarely come back."],
                ["Returns", "14 days, no questions, as long as it's unworn. We mean it."],
              ].map(([q, a]) => (
                <div key={q} className="grid grid-cols-[120px_1fr] gap-4 border-b border-[#EFEEE7]/10 py-4">
                  <span className="font-serif text-[14px]">{q}</span>
                  <p className="text-[13px] leading-relaxed text-[#EFEEE7]/55">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {done ? (
          <p className="font-serif text-[22px] italic text-ink/70">You're on the list. See you at the drop.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="font-serif text-[24px] italic">Twice a year, in your inbox.</h2>
              <p className="mt-3 max-w-[40ch] text-[13.5px] leading-relaxed text-ink/55">
                One email when the collection drops, one when it's about to sell out. Nothing
                monthly, nothing promotional.
              </p>
            </div>
            <form
              className="flex max-w-sm gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input
                type="email"
                required
                className="flex-1 border border-ink/20 bg-transparent px-3.5 py-3 text-[13px]"
                placeholder="you@email.com"
              />
              <button className="bg-ink px-4 font-mono text-[10.5px] uppercase tracking-wide text-[#EFEEE7] transition-colors hover:bg-ink/80">
                Join
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

function HomePage({ cart, openCart }) {
  return (
    <>
      <Hero />
      <Featured cart={cart} openCart={openCart} />
      <GoodToKnow />
      <Newsletter />
    </>
  );
}

function ShopPage({ cart, openCart }) {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("Featured");
  let items = PRODUCTS.filter((p) => cat === "All" || p.cat === cat);
  if (sort === "Price, low–high") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "Price, high–low") items = [...items].sort((a, b) => b.price - a.price);
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink/45">Shop</span>
        <h2 className="mt-3 font-serif text-[34px] italic">All products</h2>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <FilterChips
            options={CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-ink/15 text-ink/55 hover:border-ink/40"
            activeClassName="bg-ink text-[#EFEEE7] border-ink"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-ink/15 bg-transparent px-3 py-2 text-[12px] font-mono uppercase tracking-wide text-ink/70"
          >
            {["Featured", "Price, low–high", "Price, high–low"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <p className="mt-6 font-mono text-[10.5px] uppercase tracking-wide text-ink/40">
          {items.length} {items.length === 1 ? "piece" : "pieces"} · every item ships within two days
        </p>
        <div className="mt-6 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} p={p} cart={cart} openCart={openCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage({ cart, openCart }) {
  const params = useParams();
  const slug = (params["*"] || "").split("/").filter(Boolean)[1];
  const p = PRODUCTS.find((x) => x.id === slug) || PRODUCTS[0];
  const [size, setSize] = useState(p.sizes[0] || "One size");
  const [added, setAdded] = useState(false);
  const related = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3);
  const soldOut = p.stock === "Sold out";
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <Link to={`${BASE}/shop`} className="font-mono text-[10.5px] uppercase tracking-wide text-ink/45 hover:text-ink">
          ← Back to shop
        </Link>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="aspect-[4/5] border border-ink/10" style={{ background: p.art }}>
            <div className="flex h-full items-end p-4">
              <span className="font-mono text-[9.5px] uppercase tracking-wide text-[#EFEEE7]/70">{p.name}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/45">{p.cat}</span>
            <h2 className="mt-2 font-serif text-[30px] italic">{p.name}</h2>
            <span className={`mt-1 font-mono text-[10px] uppercase tracking-wide ${soldOut ? "text-ink/35" : "text-[#2F5D45]"}`}>
              {p.stock}
            </span>
            <p className="mt-5 max-w-[46ch] text-[14px] leading-relaxed text-ink/60">{p.note}</p>
            <div className="mt-6 font-mono text-[22px]">{fmt(p.price)}</div>
            {p.sizes.length > 0 && (
              <div className="mt-6">
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/50">Size</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`border px-3.5 py-2 text-[13px] transition-colors ${
                        size === s ? "border-ink bg-ink text-[#EFEEE7]" : "border-ink/20 hover:border-ink/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => {
                if (soldOut) return;
                cart.add({ id: p.id, name: `${p.name} (${size})`, price: p.price, art: p.art });
                setAdded(true);
                setTimeout(() => setAdded(false), 1400);
                openCart();
              }}
              disabled={soldOut}
              className={`mt-8 py-4 font-mono text-[11px] uppercase tracking-wide transition-colors ${
                soldOut
                  ? "cursor-not-allowed bg-ink/10 text-ink/30"
                  : added
                  ? "bg-[#2F5D45] text-white"
                  : "bg-ink text-[#EFEEE7] hover:bg-ink/85"
              }`}
            >
              {soldOut ? "Sold out — back next season" : added ? "Added to cart ✓" : `Add to cart · ${fmt(p.price)}`}
            </button>
            <div className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6">
              {[
                ["Shipping", "Two days within Dhaka, three across Bangladesh. Free over ৳5,000."],
                ["Returns", "14 days, unworn. Exchanges always free."],
                ["Care", "Air out, wash cold, dry flat. Your jacket will forgive you."],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink/45">{k}</span>
                  <p className="text-[13px] text-ink/60">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 font-serif text-[22px] italic">More from {p.cat.toLowerCase()}</h3>
            <div className="grid gap-px bg-ink/10 sm:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.id} p={r} cart={cart} openCart={openCart} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink/45">About</span>
        <h2 className="mt-3 max-w-[16ch] font-serif text-[34px] italic leading-tight">
          Five people, one cutting table.
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink/60">
            Arc Supply started in 2016 with a single jacket pattern and a borrowed cutting table.
            We still make that jacket, and we still cut by hand — because when you cut by hand you
            can't help noticing when a fabric is wrong, a seam is drifting, or a colour has changed
            since last season.
          </p>
          <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink/60">
            We keep the line small on purpose. Twelve pieces, twice a year. Every one of them is a
            thing we'd wear ourselves — which is the only test that's survived eight years.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-3">
          {[
            ["2016", "First jacket, first order, first sell-out"],
            ["60km", "Furthest our fabric travels to the workshop"],
            ["2x/yr", "Restocks. Sold out means sold out."],
          ].map(([k, v]) => (
            <div key={k} className="bg-[#EFEEE7] p-6">
              <div className="font-serif text-[28px] italic">{k}</div>
              <p className="mt-2 text-[13px] text-ink/55">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, shop: ShopPage, product: ProductPage, about: AboutPage };

export default function ArcSupply() {
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const pageProps = { cart, openCart: () => setCartOpen(true) };
  return (
    <div className="min-h-screen bg-[#EFEEE7] font-body text-ink">
      <Header cart={cart} openCart={() => setCartOpen(true)} />
      <DemoPage pages={PAGES} pageProps={pageProps} />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        format={fmt}
        accent="#121319"
        panelClassName="bg-white text-ink border-l border-ink/10"
        onCheckout={() => setCartOpen(false)}
        checkoutLabel="Checkout (demo)"
      />
      <DemoBadge siteId="arc-supply" />
    </div>
  );
}
