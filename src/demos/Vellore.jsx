import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import Accordion from "../demo-kit/Accordion";
import BookingForm from "../demo-kit/BookingForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/vellore";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/trips`, label: "Trips" },
  { to: `${BASE}/book`, label: "Book" },
];

const ACCENT = "#E75E3B";

const TRIPS = [
  {
    id: "south-coast-trail",
    place: "Lisbon",
    days: "8 days",
    price: "€1,400",
    region: "Coastal",
    note: "Azulejos, long lunches, and the coast by train.",
    max: 6,
    art: "linear-gradient(135deg,#F2C078,#8A4B2A)",
    blurb: "A week and change down the coast from Lisbon to the Algarve, staying in places where the owner remembers your coffee order by day two.",
    itinerary: [
      ["Day 1–2", "Settle in", "A walkable neighbourhood base, a market dinner, and nothing on the schedule."],
      ["Day 3–5", "The slow middle", "Two long day-trips chosen for how they feel, not how they photograph."],
      ["Day 6–7", "One day off", "No plan at all. The best days on every trip, reliably."],
    ],
    includes: ["All hotels & breakfast", "Trains booked", "One dinner on us", "24h WhatsApp line"],
  },
  {
    id: "northern-lights",
    place: "Kyoto",
    days: "10 days",
    price: "€2,100",
    region: "Cultural",
    note: "Temples before the crowds, then a ryokan in the hills.",
    max: 6,
    art: "linear-gradient(135deg,#9FB4C7,#374A5C)",
    blurb: "Ten days that start in the old capital and end in the mountains. Quiet mornings, one guided morning, and plenty of room to wander.",
    itinerary: [
      ["Day 1–3", "Kyoto city", "Temples before the crowds — then coffee, markets, and the river at dusk."],
      ["Day 4–6", "The slow middle", "Arashiyama, a day in the hills, and one night in a temple stay."],
      ["Day 7–9", "Ryokan in the hills", "Onsen, kaiseki, and the longest sleeps you'll have all year."],
    ],
    includes: ["All hotels & ryokan", "Temple stay", "Two dinners included", "Pocket WiFi"],
  },
  {
    id: "spice-route",
    place: "Rajasthan",
    days: "12 days",
    price: "€1,700",
    region: "Cultural",
    note: "Palaces, stepwells, and one very patient camel market.",
    max: 6,
    art: "linear-gradient(135deg,#E5B56B,#7A4A1E)",
    blurb: "Twelve days through the desert state — forts, stepwells, and a camel market that happens exactly once a week.",
    itinerary: [
      ["Day 1–4", "The cities", "Jaipur, then Jodhpur — palaces in the morning, bazaars at dusk."],
      ["Day 5–8", "The desert", "A jeep into the dunes, one night under the stars, and the camel market at Pushkar."],
      ["Day 9–11", "Udaipur", "A slow final stretch around the lake before the flight home."],
    ],
    includes: ["All hotels", "Desert night & meals", "Driver & guide", "Train tickets"],
  },
  {
    id: "jungle-camp",
    place: "Tropical Highlands",
    days: "5 days",
    price: "€1,100",
    region: "Wildlife",
    note: "A camp in the cloud forest with dawn walks and zero WiFi.",
    max: 4,
    art: "linear-gradient(135deg,#4E7A4B,#1B2E1A)",
    blurb: "Five days off the map. A riverside camp, a resident naturalist, and walks that start before sunrise because that's when the forest is awake.",
    itinerary: [
      ["Day 1–2", "Arrive & settle", "A long drive in, a shorter walk out, dinner by the fire."],
      ["Day 3–4", "Dawn walks", "Two early mornings with the naturalist, afternoons free to swim or sleep."],
      ["Day 5", "The long way home", "A final walk and the slow road back to the airport."],
    ],
    includes: ["All meals", "Naturalist guide", "Camp equipment", "Airport transfers"],
  },
  {
    id: "lake-retreat",
    place: "Lakeside",
    days: "5 days",
    price: "€1,300",
    region: "Coastal",
    note: "A lakeside house, a boat, and the instruction to do very little.",
    max: 6,
    art: "linear-gradient(135deg,#7FA8B5,#2E4450)",
    blurb: "The anti-itinerary. A private house on the water with a rowboat, a hammock, and a cook who does the shopping for you.",
    itinerary: [
      ["Day 1–3", "Water days", "Swim, row, read. The house has a boat and no reason to leave."],
      ["Day 4", "One village trip", "The market morning and the best bakery for a hundred kilometres."],
      ["Day 5", "Slow departure", "Breakfast on the dock, then the drive home feeling ten years lighter."],
    ],
    includes: ["Private house", "Cook & groceries", "Boat & hammocks", "House manager"],
  },
  {
    id: "old-city-walk",
    place: "Hanoi",
    days: "2 days",
    price: "€480",
    region: "Cultural",
    note: "A long weekend on foot — coffee, alleys, and one very good noodle shop.",
    max: 6,
    art: "linear-gradient(135deg,#D9A26B,#6E4A26)",
    blurb: "Forty-eight hours in the old quarter, done on foot. A local on call, a food walk on day one, and a list of shops nobody finds on their own.",
    itinerary: [
      ["Day 1", "The food walk", "Coffee at 6am, noodles by 9, a dozen alleys before dinner."],
      ["Day 2", "Pick your pace", "A lake loop, a museum, or the shops from yesterday — your call."],
    ],
    includes: ["Hotel in the old quarter", "Food walk with guide", "Local phone line", "Noodle shop list"],
  },
];

const REGIONS = ["All", "Coastal", "Cultural", "Wildlife"];

function useSub() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean);
}

function useActive() {
  return useSub()[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#1E1B16]/10 bg-[#F4EFE8]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-display text-[15px] font-semibold tracking-tight">
          VELLORE
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#1E1B16]/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#1E1B16] ${active === l.label.toLowerCase() ? "text-[#1E1B16]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/book`}
            className="bg-[#E75E3B] px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-white transition-colors hover:bg-[#1E1B16]"
          >
            Plan a trip
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#1E1B16]/10 text-[#1E1B16]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1E1B16]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/40">
      Vellore — Demo website
    </footer>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-10 px-6 pt-16 pb-12 md:grid-cols-2 md:pt-24 md:pb-16">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#E75E3B]">Curated travel, 6 travellers max</span>
        <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.02] sm:text-[58px]">
          Trips we'd take ourselves.
        </h1>
        <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#1E1B16]/60">
          Small, hand-built itineraries to places we've actually been. You get the route, the
          contacts, and one human on call — not a tour bus and a clipboard.
        </p>
        <Link
          to={`${BASE}/trips`}
          className="mt-7 inline-block bg-[#E75E3B] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#1E1B16]"
        >
          See current trips
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {TRIPS.map((t, i) => (
          <Link
            key={t.id}
            to={`${BASE}/trip/${t.id}`}
            onMouseEnter={() => setActive(i)}
            className={`border px-4 py-3.5 text-left transition-colors ${
              active === i ? "border-[#E75E3B] bg-white" : "border-[#1E1B16]/10 hover:border-[#1E1B16]/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[15px] font-semibold">{t.place}</span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/50">
                {t.days} · {t.price}
              </span>
            </div>
            <p className={`mt-1 text-[12.5px] ${active === i ? "text-[#1E1B16]/70" : "text-[#1E1B16]/45"}`}>{t.note}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TripCard({ t }) {
  return (
    <Link to={`${BASE}/trip/${t.id}`} className="group bg-[#F4EFE8]">
      <div className="aspect-[4/3]" style={{ background: t.art }}>
        <div className="flex h-full items-end justify-between p-3">
          <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/70">{t.region}</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
            View trip →
          </span>
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-[18px] font-semibold">{t.place}</span>
          <span className="font-mono text-[11px] text-[#E75E3B]">{t.price}</span>
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-[#1E1B16]/55">{t.note}</p>
        <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-wide text-[#1E1B16]/45">
          {t.days} · max {t.max}
        </span>
      </div>
    </Link>
  );
}

function FeaturedTrips() {
  const featured = TRIPS.slice(0, 3);
  return (
    <section className="border-t border-[#1E1B16]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E1B16]/50">Featured trips</h2>
          <Link to={`${BASE}/trips`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#1E1B16]/50 hover:text-[#1E1B16]">
            All trips →
          </Link>
        </div>
        <div className="grid gap-px bg-[#1E1B16]/10 sm:grid-cols-3">
          {featured.map((t) => (
            <TripCard key={t.id} t={t} />
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
      <FeaturedTrips />
    </>
  );
}

function TripsPage() {
  const [region, setRegion] = useState("All");
  const items = TRIPS.filter((t) => region === "All" || t.region === region);
  return (
    <section className="border-t border-[#1E1B16]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <h2 className="font-display text-[34px] font-semibold">Current trips</h2>
        <p className="mt-3 max-w-[46ch] text-[14px] text-[#1E1B16]/60">
          Six itineraries on the books right now, each capped at six travellers. Every one was
          walked end to end by someone on our team.
        </p>
        <div className="mt-8">
          <FilterChips
            options={REGIONS}
            active={region}
            onChange={setRegion}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-[#1E1B16]/15 text-[#1E1B16]/55 hover:border-[#1E1B16]/40"
            activeClassName="bg-[#E75E3B] text-white border-[#E75E3B]"
          />
        </div>
        <div className="mt-8 grid gap-px bg-[#1E1B16]/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <TripCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TripPage() {
  const [, slug] = useSub();
  const t = TRIPS.find((x) => x.id === slug) || TRIPS[0];
  const other = TRIPS.filter((x) => x.id !== t.id).slice(0, 3);
  return (
    <section className="border-t border-[#1E1B16]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <Link to={`${BASE}/trips`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#1E1B16]/45 hover:text-[#1E1B16]">
          ← All trips
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="aspect-[4/3] border border-[#1E1B16]/10" style={{ background: t.art }}>
              <div className="flex h-full items-end p-4">
                <span className="font-mono text-[9.5px] uppercase tracking-wide text-white/70">{t.place} — {t.region}</span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#1E1B16]/10 pt-6">
              <Stat value={t.days} label="Duration" />
              <Stat value={`max ${t.max}`} label="Group size" />
              <Stat value={t.price} label="From" />
            </div>
            <h3 className="mb-3 mt-8 font-mono text-[10.5px] uppercase tracking-wide text-[#1E1B16]/50">What's included</h3>
            <div className="flex flex-wrap gap-2">
              {t.includes.map((inc) => (
                <span key={inc} className="border border-[#1E1B16]/15 px-3 py-1.5 text-[12px] text-[#1E1B16]/70">
                  {inc}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#E75E3B]">{t.region} · {t.days}</span>
            <h2 className="mt-1 font-display text-[34px] font-semibold">{t.place}</h2>
            <p className="mt-4 max-w-[46ch] text-[14px] leading-relaxed text-[#1E1B16]/65">{t.blurb}</p>
            <div className="mt-8 border-t border-[#1E1B16]/10">
              <Accordion
                items={t.itinerary.map(([days, title, body]) => ({ title: `${days} — ${title}`, body }))}
                defaultOpen={0}
                className="text-[#1E1B16]"
                openClass="text-[#1E1B16]/70"
              />
            </div>
            <div className="mt-8 border border-[#1E1B16]/10 bg-white p-6">
              <h3 className="font-display text-[18px] font-semibold">Enquire about {t.place}</h3>
              <p className="mt-1 mb-5 text-[12.5px] text-[#1E1B16]/55">
                We'll come back within two days with dates and a route you can actually read.
              </p>
              <BookingForm
                accent={ACCENT}
                submitLabel="Send enquiry"
                fields={[
                  { key: "name", label: "Name", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  { key: "month", label: "When", type: "select", options: ["Next month", "In 2–3 months", "In 6 months", "Flexible"], placeholder: "Rough timing" },
                  { key: "travellers", label: "Travellers", type: "select", options: ["1", "2", "3–4", "5–6"], placeholder: "How many?" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="mb-6 font-display text-[22px] font-semibold">Other trips</h3>
          <div className="grid gap-px bg-[#1E1B16]/10 sm:grid-cols-3">
            {other.map((o) => (
              <TripCard key={o.id} t={o} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookPage() {
  return (
    <section className="border-t border-[#1E1B16]/10 bg-[#E75E3B] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:py-18 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[32px] font-semibold">Tell us where you'd like to go.</h2>
          <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-white/80">
            Not sure between two places? Say so. We'll come back within two days with a route, a
            rough price, and the honest version of both options.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Stat value="2 days" label="Reply time" valueClass="text-white" />
            <Stat value="6 max" label="Group size, ever" valueClass="text-white" />
            <Stat value="0" label="Hotel commissions" valueClass="text-white" />
          </div>
        </div>
        <div className="bg-[#1E1B16] p-6 text-[#F4EFE8] md:p-8">
          <BookingForm
            accent={ACCENT}
            submitLabel="Request a plan"
            fields={[
              { key: "name", label: "Name", placeholder: "Your name", required: true },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
              { key: "destination", label: "Where to?", type: "select", options: TRIPS.map((t) => t.place).concat(["Somewhere else", "Surprise me"]), placeholder: "Pick a direction" },
              { key: "days", label: "How long?", type: "select", options: ["A weekend", "5–7 days", "8–12 days", "Two weeks+"], placeholder: "Rough length" },
              { key: "notes", label: "Anything else", type: "text", placeholder: "Budget, travel dates, must-sees…", required: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, trips: TripsPage, trip: TripPage, book: BookPage };

export default function Vellore() {
  return (
    <div className="min-h-screen bg-[#F4EFE8] font-body text-[#1E1B16]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="vellore" />
    </div>
  );
}
