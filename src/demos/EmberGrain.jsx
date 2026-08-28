import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import Lightbox from "../demo-kit/Lightbox";
import ContactForm from "../demo-kit/ContactForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/ember-grain";
const ACCENT = "#2F5D45";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/menu`, label: "Menu" },
  { to: `${BASE}/about`, label: "About" },
  { to: `${BASE}/visit`, label: "Visit" },
];

const MENU = {
  Coffee: [
    ["Espresso", "৳120"],
    ["Flat white", "৳180"],
    ["Batch brew", "৳140"],
    ["Filter, rotating", "৳160"],
    ["Cold brew", "৳200"],
    ["Chai latte", "৳180"],
  ],
  Food: [
    ["Avocado toast", "৳260"],
    ["Granola bowl", "৳240"],
    ["Soup of the day", "৳220"],
    ["Grilled cheese, sourdough", "৳290"],
    ["Ham & cheese croissant", "৳280"],
    ["Buttered baguette", "৳110"],
  ],
  Pastry: [
    ["Sourdough, toasted", "৳150"],
    ["Cinnamon roll", "৳140"],
    ["Butter croissant", "৳130"],
    ["Banana bread, slice", "৳150"],
    ["Seasonal scone", "৳160"],
    ["Espresso cookie", "৳90"],
  ],
};

const CATS = ["Coffee", "Food", "Pastry"];

const SEASONAL = {
  name: "Kacha amar mango cold brew",
  price: "৳240",
  note: "Steeped 24 hours with this season's mango, a little lime, and no sugar.",
};

const GALLERY = [
  { label: "The counter — 01", bg: "linear-gradient(135deg,#2F5D45,#183027)" },
  { label: "The regulars' table — 02", bg: "linear-gradient(135deg,#E7D9B8,#B49A6A)" },
  { label: "Morning bake — 03", bg: "linear-gradient(135deg,#C97B43,#7A3F1E)" },
  { label: "Corner light — 04", bg: "linear-gradient(135deg,#A9B79C,#5C6B4F)" },
];

const HOURS = [
  ["Open", "Mon–Sun, 7a–4p"],
  ["Kitchen", "Until 2p"],
  ["Bake out", "Fresh bread at 8a, most days"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#2A2418]/10 bg-[#F2EEE4]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link to={BASE} className="font-serif text-[18px] italic">
          Ember & Grain
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.14em] text-[#2A2418]/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#2A2418] ${active === l.label.toLowerCase() ? "text-[#2F5D45]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/visit`}
            className="bg-[#2F5D45] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-[#F2EEE4] transition-colors hover:bg-[#2A2418]"
          >
            Visit us
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#2A2418]/10 text-[#2A2418]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2A2418]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#2A2418]/40">
      Ember & Grain — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-14 text-center md:pt-24 md:pb-20">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5D45]">42 Gulshan Ave</span>
      <h1 className="mt-5 font-serif text-[44px] leading-[1.02] sm:text-[60px]">
        Coffee, bread,
        <br />
        <span className="italic text-[#2F5D45]">and not much else.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#2A2418]/60">
        A neighbourhood café with a short menu, a loud grinder, and a regulars' table you'll
        probably have to share.
      </p>
      <Link
        to={`${BASE}/menu`}
        className="mt-8 inline-block bg-[#2F5D45] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#F2EEE4] transition-colors hover:bg-[#2A2418]"
      >
        See the menu
      </Link>
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#2A2418]/10 pt-8">
        <Stat value="7a–4p" label="Open daily" valueClass="text-[#2F5D45]" />
        <Stat value="2021" label="Open since" valueClass="text-[#2F5D45]" />
        <Stat value="24h" label="Cold brew steep" valueClass="text-[#2F5D45]" />
      </div>
    </section>
  );
}

function SeasonalTeaser() {
  return (
    <section className="border-t border-[#2A2418]/10">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-[26px] italic">This week at the counter</h2>
          <Link to={`${BASE}/menu`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#2F5D45] hover:text-[#2A2418]">
            Full menu →
          </Link>
        </div>
        <div className="grid border border-[#2A2418]/10 md:grid-cols-[1fr_1.4fr]">
          <div
            className="aspect-[4/3] md:aspect-auto"
            style={{ background: "linear-gradient(135deg,#E7D9B8,#B49A6A)" }}
          >
            <div className="flex h-full items-end p-4">
              <span className="font-mono text-[9.5px] uppercase tracking-wide text-[#2A2418]/60">Seasonal</span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">On the menu now</span>
            <h3 className="mt-2 font-serif text-[22px] italic">{SEASONAL.name}</h3>
            <p className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-[#2A2418]/60">{SEASONAL.note}</p>
            <div className="mt-5 flex items-baseline gap-4">
              <span className="font-mono text-[15px] text-[#2F5D45]">{SEASONAL.price}</span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#2A2418]/40">changes each season</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeHours() {
  return (
    <section className="border-t border-[#2A2418]/10 bg-white/60">
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-18">
        <h2 className="mb-8 font-serif text-[26px] italic">When to come by</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {HOURS.map(([k, v]) => (
            <div key={k} className="border-t border-[#2F5D45] pt-4">
              <div className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">{k}</div>
              <p className="mt-1.5 text-[14px] text-[#2A2418]/75">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <SeasonalTeaser />
      <HomeHours />
    </>
  );
}

function MenuPage({ menu }) {
  const [cat, setCat] = useState("Coffee");
  const items = menu[cat];
  return (
    <section className="border-t border-[#2A2418]/10">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5D45]">Short on purpose</span>
        <h2 className="mt-3 font-serif text-[34px] italic">What's on today</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-[#2A2418]/60">
          Three sections, kept small so everything on them is made well. Ask what came out of the oven.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <FilterChips
            options={CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-4 py-2 border border-[#2A2418]/15 text-[#2A2418]/60 hover:border-[#2F5D45]"
            activeClassName="bg-[#2F5D45] border-[#2F5D45] text-[#F2EEE4]"
          />
          <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#2A2418]/40">
            {items.length} on today
          </span>
        </div>
        <div className="mt-8 flex flex-col">
          {items.map(([item, price]) => (
            <div key={item} className="flex items-baseline justify-between border-b border-[#2A2418]/10 py-3.5">
              <span className="text-[14.5px]">{item}</span>
              <span className="font-mono text-[12.5px] text-[#2F5D45]">{price}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#2A2418]/40">
          Pastries change with the morning · filter rotates weekly
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <>
      <section className="border-t border-[#2A2418]/10 bg-[#2A2418] text-[#F2EEE4]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9DB88B]">About</span>
          <h2 className="mt-3 font-serif text-[34px] leading-tight">Five years of the same four walls.</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4 text-[13.5px] leading-relaxed text-[#F2EEE4]/65">
              <p>
                Ember & Grain opened in 2021 with a used roaster we still swear by. We bake in the
                morning, grind to order, and close when the bread runs out — which is how we keep
                the menu this small.
              </p>
              <p>
                Regulars get a nod, newcomers get a menu, and everyone gets asked how their day's
                going. That's the whole hospitality model.
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[10.5px] uppercase tracking-wide text-[#9DB88B]">Around the room</p>
              <div className="grid grid-cols-2 gap-3">
                {GALLERY.map((g, i) => (
                  <button
                    key={g.label}
                    onClick={() => setLightbox(i)}
                    className="aspect-[4/3] border border-[#F2EEE4]/15 transition-transform hover:scale-[1.02]"
                    style={{ background: g.bg }}
                    aria-label={g.label}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#F2EEE4]/15 pt-8">
            <Stat value="2021" label="Open since" valueClass="text-[#9DB88B]" />
            <Stat value="2 bakes" label="Every morning" valueClass="text-[#9DB88B]" />
            <Stat value="1 rule" label="Say hello" valueClass="text-[#9DB88B]" />
          </div>
        </div>
      </section>
      <Lightbox
        items={GALLERY}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onMove={(d) => setLightbox((i) => (i + d + GALLERY.length) % GALLERY.length)}
      />
    </>
  );
}

function VisitPage() {
  return (
    <section className="border-t border-[#2A2418]/10">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5D45]">Visit</span>
        <h2 className="mt-3 font-serif text-[34px] italic">Come say hello.</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {[
              ["Hours", "Mon–Sun, 7a–4p. Kitchen till 2p."],
              ["Find us", "42 Gulshan Ave, Dhaka 1212 — behind the banyan."],
              ["Say hi", "hello@emberandgrain.cafe · +880 1X-XXXX XXXX"],
              ["Groups", "For catering or a locked-down table, call a week ahead."],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-[#2A2418]/10 pb-5">
                <div className="font-mono text-[10.5px] uppercase tracking-wide text-[#2F5D45]">{k}</div>
                <p className="mt-2 text-[14px] text-[#2A2418]/70">{v}</p>
              </div>
            ))}
            <div
              className="aspect-[16/9] border border-[#2A2418]/10"
              style={{ background: "linear-gradient(135deg,#E7D9B8,#B49A6A)" }}
            >
              <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-wide text-[#2A2418]/40">
                Map — 42 Gulshan Ave
              </div>
            </div>
          </div>
          <div className="border border-[#2A2418]/10 bg-white p-6 md:p-8">
            <h3 className="font-serif text-[20px] italic">Write to the café</h3>
            <p className="mb-6 mt-2 text-[12.5px] text-[#2A2418]/50">
              Booking a table, ordering bread for the weekend, or just asking if the scone is back.
            </p>
            <ContactForm
              accent={ACCENT}
              name="Your name"
              email="Your email"
              message="What's on your mind?"
              submitLabel="Send message"
              className="text-[#2A2418]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, menu: MenuPage, about: AboutPage, visit: VisitPage };

export default function EmberGrain() {
  return (
    <div className="min-h-screen bg-[#F2EEE4] font-body text-[#2A2418]">
      <Header />
      <main>
        <DemoPage pages={PAGES} pageProps={{ menu: MENU }} />
      </main>
      <Footer />
      <DemoBadge siteId="ember-grain" />
    </div>
  );
}
