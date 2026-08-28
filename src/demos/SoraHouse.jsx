import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import Lightbox from "../demo-kit/Lightbox";
import BookingForm from "../demo-kit/BookingForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/sora-house";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/menu`, label: "Menu" },
  { to: `${BASE}/about`, label: "About" },
  { to: `${BASE}/visit`, label: "Visit" },
];

const MENU = {
  Snacks: [
    ["Smoked almonds, chili salt", "420৳", ["veg", "gf"]],
    ["Yuzu butter bread", "380৳", ["veg"]],
    ["Pickled shiitake, sesame", "350৳", ["veg", "gf"]],
    ["Beef tartare, charcoal oil", "680৳", ["gf"]],
  ],
  Mains: [
    ["Charred aubergine, miso glaze", "980৳", ["veg", "gf"]],
    ["Slow-roast duck, plum", "1,650৳", ["gf"]],
    ["Grilled sea bass, brown butter", "1,450৳", ["gf", "chef"]],
    ["Cider-braised pork, sage", "1,280৳", ["chef"]],
  ],
  Wine: [
    ["House red, by the glass", "550৳", []],
    ["Natural orange, bottle", "3,200৳", []],
    ["Sommelier's pick", "Ask us", ["chef"]],
  ],
};

const DIET_FILTERS = [
  { key: "All", match: () => true },
  { key: "Chef's pick", match: (t) => t.includes("chef") },
  { key: "Vegetarian", match: (t) => t.includes("veg") },
  { key: "Gluten-free", match: (t) => t.includes("gf") },
];

const GALLERY = [
  { label: "The counter — 01", bg: "linear-gradient(135deg,#2A2118,#0F0D0B)" },
  { label: "Open kitchen — 02", bg: "linear-gradient(135deg,#E7A33E,#4A2C0E)" },
  { label: "Low tables — 03", bg: "linear-gradient(135deg,#3D2F1F,#161310)" },
  { label: "Wine shelf — 04", bg: "linear-gradient(135deg,#1D1914,#0A0908)" },
];

const TESTIMONIALS = [
  ["“The only tasting menu in the city where you're not thinking about the menu.”", "Anika, weekly regular"],
  ["“We came for the duck. We stayed for the wine list.”", "Rahim & Nusrat"],
  ["“Fourteen seats means you can actually watch the cooking. It's a show, quietly.”", "Meena, food writer"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#161310]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to={BASE} className="font-serif italic text-[19px]">
          Sora House
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#EDE7DD]/60 sm:flex">
          {NAV.map((l) => (
            <Link key={l.to} to={l.to} className={`hover:text-[#EDE7DD] ${active === l.label.toLowerCase() ? "text-[#E7A33E]" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/visit`}
            className="font-mono text-[10.5px] uppercase tracking-wide border border-[#E7A33E]/50 px-3.5 py-2 text-[#E7A33E] hover:bg-[#E7A33E]/10"
          >
            Book a table
          </Link>
        </div>
        <MobileNav
          links={NAV}
          panelClassName="bg-[#1D1914] border-white/10 text-[#EDE7DD]"
        />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#EDE7DD]/35">
      Sora House — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E7A33E]">
        Dinner only — Tue–Sun
      </span>
      <h1 className="mt-5 max-w-[16ch] font-serif text-[46px] leading-[1.02] sm:text-[64px]">
        Dinner, <span className="italic text-[#E7A33E]">done properly.</span>
      </h1>
      <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-[#EDE7DD]/60">
        A short, seasonal menu built around live fire and good produce. Fourteen seats at the
        counter, the rest at low tables. No tasting-menu theatrics — just food we'd order twice.
      </p>
      <Link
        to={`${BASE}/visit`}
        className="mt-8 inline-block bg-[#E7A33E] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#161310] transition-colors hover:bg-[#EDE7DD]"
      >
        Reserve a table
      </Link>
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
        <Stat value="14" label="Seats at the counter" />
        <Stat value="Tue–Sun" label="Dinner service" />
        <Stat value="2021" label="Open since" />
      </div>
    </section>
  );
}

function ThisWeek() {
  const mains = MENU.Mains.slice(0, 3);
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="font-serif text-[26px] italic">This week's menu</h2>
          <Link to={`${BASE}/menu`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#E7A33E] hover:text-[#EDE7DD]">
            Full menu →
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {mains.map(([dish, price]) => (
            <div key={dish} className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="text-[15px]">{dish}</span>
              <span className="font-mono text-[13px] text-[#E7A33E]">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-8 font-serif text-[26px] italic">What regulars say</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map(([quote, who]) => (
            <div key={who} className="flex flex-col justify-between border border-white/10 p-5">
              <p className="text-[13px] italic leading-relaxed text-[#EDE7DD]/75">{quote}</p>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#E7A33E]">{who}</span>
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
      <ThisWeek />
      <Testimonials />
    </>
  );
}

function MenuPage() {
  const [tab, setTab] = useState("Mains");
  const [diet, setDiet] = useState("All");
  const filter = DIET_FILTERS.find((f) => f.key === diet) || DIET_FILTERS[0];
  const items = MENU[tab].filter(([, , tags]) => filter.match(tags));
  return (
    <section id="menu" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E7A33E]">Seasonal, small</span>
        <h2 className="mt-3 font-serif text-[34px] italic">This week's menu</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-[#EDE7DD]/60">
          The menu changes with the market. Ask the counter what came in today.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <div className="flex gap-1">
            {Object.keys(MENU).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`border-b-2 px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide transition-colors ${
                  tab === t ? "border-[#E7A33E] text-[#EDE7DD]" : "border-transparent text-[#EDE7DD]/40 hover:text-[#EDE7DD]/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <FilterChips
            options={DIET_FILTERS.map((f) => f.key)}
            active={diet}
            onChange={setDiet}
            chipClassName="font-mono text-[10px] uppercase tracking-wide px-3 py-1.5 border border-white/15 text-[#EDE7DD]/50 hover:text-[#EDE7DD]"
            activeClassName="border-[#E7A33E]/60 text-[#E7A33E]"
          />
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {items.length === 0 && (
            <p className="py-10 text-center text-[14px] text-[#EDE7DD]/40">
              Nothing in this course matches that filter.
            </p>
          )}
          {items.map(([dish, price, tags]) => (
            <div key={dish} className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-4">
              <div>
                <span className="text-[15px]">{dish}</span>
                {tags.length > 0 && (
                  <span className="ml-3 font-mono text-[9.5px] uppercase tracking-wide text-[#E7A33E]/70">
                    {tags.join(" · ")}
                  </span>
                )}
              </div>
              <span className="shrink-0 font-mono text-[13px] text-[#E7A33E]">{price}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10.5px] uppercase tracking-wide text-[#EDE7DD]/40">
          VEG — vegetarian · GF — gluten-free · chef's pick changes nightly
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <>
      <section className="border-t border-white/10 bg-[#1D1914]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E7A33E]">About</span>
          <h2 className="mt-3 font-serif text-[34px] leading-tight">Small room, open kitchen.</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-[14px] leading-relaxed text-[#EDE7DD]/65">
                Sora House opened in 2021 with one grill, one wine list, and a belief that dinner
                shouldn't need an explanation. The kitchen faces the room — you'll see everything
                that happens to your food.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#EDE7DD]/65">
                Everything is cooked over a single charcoal grill, changed twice a night. The wine
                list is short on purpose; the sommelier picks it by the week, not by the vintage.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <Stat value="1 grill" label="The whole kitchen" />
                <Stat value="2" label="Service changes / night" />
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-[10.5px] uppercase tracking-wide text-[#E7A33E]">Inside the room</p>
              <div className="grid grid-cols-2 gap-3">
                {GALLERY.map((g, i) => (
                  <button
                    key={g.label}
                    onClick={() => setLightbox(i)}
                    className="aspect-[4/3] border border-white/10 transition-transform hover:scale-[1.02]"
                    style={{ background: g.bg }}
                    aria-label={g.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Lightbox items={GALLERY} index={lightbox} onClose={() => setLightbox(null)} onMove={(d) => setLightbox((i) => (i + d + GALLERY.length) % GALLERY.length)} />
    </>
  );
}

function VisitPage() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E7A33E]">Visit</span>
        <h2 className="mt-3 font-serif text-[34px] italic">Reserve a table.</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {[
              ["Hours", "Tue–Sun, 6pm–11pm. Closed Mondays."],
              ["Location", "14 Lake Circus, Dhaka — ground floor, look for the warm light."],
              ["Reservations", "+880 1XX-XXX-XXX · tables@ sora.house"],
              ["Parties of 6+", "Book the counter. The whole room seats 22."],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-white/10 pb-5">
                <div className="font-mono text-[10.5px] uppercase tracking-wide text-[#E7A33E]">{k}</div>
                <p className="mt-2 text-[14px] text-[#EDE7DD]/70">{v}</p>
              </div>
            ))}
            <div className="aspect-[16/9] border border-white/10" style={{ background: "linear-gradient(135deg,#2A2118,#0F0D0B)" }}>
              <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-wide text-[#EDE7DD]/30">
                Map — 14 Lake Circus
              </div>
            </div>
          </div>
          <div className="border border-white/10 bg-[#1D1914] p-6 md:p-8">
            <h3 className="font-serif text-[20px] italic">Book a table</h3>
            <p className="mt-2 mb-6 text-[12.5px] text-[#EDE7DD]/50">
              We hold tables for fifteen minutes. For parties over six, call us instead.
            </p>
            <BookingForm
              accent="#E7A33E"
              textClass="text-[#EDE7DD]"
              submitLabel="Request reservation"
              fields={[
                { key: "name", label: "Name", placeholder: "Your name", required: true },
                { key: "phone", label: "Phone", placeholder: "+880 …", required: true },
                { key: "date", label: "Date", type: "date", required: true },
                { key: "time", label: "Time", type: "select", options: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"], placeholder: "Select a time" },
                { key: "guests", label: "Guests", type: "select", options: ["1", "2", "3", "4", "5", "6+"], placeholder: "How many?" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, menu: MenuPage, about: AboutPage, visit: VisitPage };

export default function SoraHouse() {
  return (
    <div className="min-h-screen bg-[#161310] font-body text-[#EDE7DD]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="sora-house" dark />
    </div>
  );
}
