import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import Accordion from "../demo-kit/Accordion";
import PricingToggle from "../demo-kit/PricingToggle";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/kairo";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/product`, label: "Product" },
  { to: `${BASE}/pricing`, label: "Pricing" },
  { to: `${BASE}/docs`, label: "Docs" },
];

const ACCENT = "#39D9A0";

const FEATURES = [
  { name: "queue.run()", desc: "Background jobs that retry themselves and tell you why they failed.", cat: "Jobs" },
  { name: "schema.diff", desc: "See exactly what a migration will change before it runs.", cat: "Database" },
  { name: "logs.tail()", desc: "Structured logs, searchable in under 200ms.", cat: "Logs" },
  { name: "cron.sync()", desc: "Scheduled jobs with a visual history of every single run.", cat: "Jobs" },
  { name: "deploy.plan", desc: "A preview of the exact rollout — services, order, and rollback.", cat: "Deploy" },
  { name: "incident.note", desc: "Postmortems that start the moment something breaks, not the day after.", cat: "Logs" },
];

const DOCS = [
  { title: "Quickstart — first queue in five minutes", body: "Create a project, push your repo, and call queue.run() from anywhere. Kairo picks up the job, retries it with backoff, and shows you the full lifecycle in the console. No agents to install, no config file to hand-write." },
  { title: "How schema.diff previews migrations", body: "Point Kairo at your migration files and it builds a dry-run against a copy of your schema. You see every table, column, and index change before it touches production — and a rollback plan if you need to abort." },
  { title: "Searching logs without a query language", body: "logs.tail() indexes every line as it arrives. Search by service, request id, error code, or a plain phrase — results come back in under 200ms regardless of how long the retention window is." },
  { title: "Retries and dead-letter queues", body: "Failed jobs retry with exponential backoff up to the limit you set. Past that, they land in a dead-letter queue with the full trace attached, so the fix is usually a two-line change instead of a dig." },
  { title: "Deploys with a rollback by default", body: "deploy.plan shows the rollout order and the health checks that gate each step. If a step fails, Kairo rolls back automatically and files the incident note for your standup." },
];

const TIERS = {
  monthly: [
    { name: "Free", price: "$0", desc: "One project, community support.", features: ["1 project", "10k job runs/mo", "7-day log retention", "Community support"] },
    { name: "Team", price: "$39", desc: "Unlimited projects, priority support.", features: ["Unlimited projects", "500k job runs/mo", "30-day log retention", "Priority support"], highlighted: true },
    { name: "Scale", price: "$199", desc: "SLA, SSO, dedicated infrastructure.", features: ["SLA & uptime commitment", "SSO / SAML", "Unlimited retention", "Dedicated infra"] },
  ],
  annual: [
    { name: "Free", price: "$0", desc: "One project, community support.", features: ["1 project", "10k job runs/mo", "7-day log retention", "Community support"] },
    { name: "Team", price: "$31", desc: "Billed yearly — two months free.", features: ["Unlimited projects", "500k job runs/mo", "30-day log retention", "Priority support"], highlighted: true },
    { name: "Scale", price: "$159", desc: "Billed yearly — SLA, SSO, dedicated infra.", features: ["SLA & uptime commitment", "SSO / SAML", "Unlimited retention", "Dedicated infra"] },
  ],
};

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#0E0F13]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-mono text-[14px] text-[#39D9A0]">
          kairo
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[11px] text-white/45 sm:flex">
          {NAV.map((l) => (
            <Link key={l.to} to={l.to} className={`hover:text-white ${active === l.label.toLowerCase() ? "text-[#39D9A0]" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link to={`${BASE}/pricing`} className="bg-[#39D9A0] px-3.5 py-2 font-mono text-[11px] text-[#0E0F13] transition-colors hover:bg-white">
            Start free
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-[#171922] border-white/10 text-white" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-white/30">
      Kairo — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
      <span className="font-mono text-[11px] text-[#39D9A0]">v2.4.0 — now with schema diffing</span>
      <h1 className="mt-5 max-w-[16ch] font-display text-[38px] font-semibold leading-[1.05] sm:text-[54px]">
        Ship the boring parts faster.
      </h1>
      <p className="mt-5 max-w-[50ch] text-[15px] leading-relaxed text-white/55">
        Kairo handles background jobs, migrations, and logging for small backend teams — so you
        spend less time babysitting infrastructure and more time shipping product.
      </p>
      <div className="mt-8 flex gap-3">
        <Link to={`${BASE}/pricing`} className="bg-[#39D9A0] px-5 py-3.5 font-mono text-[11px] text-[#0E0F13] transition-colors hover:bg-white">
          Start free
        </Link>
        <Link to={`${BASE}/docs`} className="border border-white/15 px-5 py-3.5 font-mono text-[11px] text-white transition-colors hover:border-white/40">
          Read the docs
        </Link>
      </div>
      <div className="mt-14 border border-white/10 bg-white/[0.02] p-1">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[10px] text-white/30">~/app — kairo status</span>
        </div>
        <div className="p-5 font-mono text-[12px] leading-relaxed text-[#39D9A0]/90">
          <p>$ kairo status</p>
          <p className="text-white/40">queue.run()   142 jobs/min   0 failed</p>
          <p className="text-white/40">schema.diff   3 pending migrations</p>
          <p className="text-white/40">logs.tail()   streaming — 12k events/hr</p>
        </div>
      </div>
    </section>
  );
}

function LogosStrip() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-mono text-[11px] uppercase tracking-wide text-white/30">
          <span>Tally Systems</span>
          <span>Cronworks</span>
          <span>Nordic Labs</span>
          <span>Frame & Co</span>
          <span>Patchline</span>
          <span>Harbor</span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-8 font-mono text-[11px] uppercase tracking-wide text-white/40">Teams that switched</h2>
        <div className="grid gap-px bg-white/8 sm:grid-cols-3">
          {[
            ["“We deleted two internal dashboards the week we adopted Kairo.”", "Reka, founder @ Tally Systems"],
            ["“Schema diffing paid for itself on the first migration.”", "Dmitri, backend lead @ Cronworks"],
            ["“The logs actually stay searchable. That alone is worth it.”", "Sana, platform eng @ Nordic Labs"],
          ].map(([quote, who]) => (
            <div key={who} className="flex flex-col justify-between bg-[#0E0F13] p-6">
              <p className="text-[13px] italic leading-relaxed text-white/70">{quote}</p>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#39D9A0]">{who}</span>
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
      <LogosStrip />
      <Testimonials />
    </>
  );
}

function ProductPage() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Jobs", "Database", "Logs", "Deploy"];
  const items = FEATURES.filter((f) => cat === "All" || f.cat === cat);
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">What's inside</h2>
        <p className="mt-3 max-w-[48ch] text-[14px] text-white/50">
          Four tools that cover the unglamorous middle of shipping: jobs, database changes, logs,
          and deploys. Each one does one thing and does it visibly.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border transition-colors ${
                cat === c ? "border-[#39D9A0] text-[#39D9A0]" : "border-white/15 text-white/45 hover:border-white/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-px bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.name} className="bg-[#0E0F13] p-6">
              <span className="font-mono text-[13px] text-[#39D9A0]">{f.name}</span>
              <span className="ml-2 font-mono text-[9px] uppercase tracking-wide text-white/30">{f.cat}</span>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const tiers = annual ? TIERS.annual : TIERS.monthly;
  return (
    <section className="border-t border-white/8 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-[34px] font-semibold">Pricing</h2>
            <p className="mt-3 max-w-[44ch] text-[14px] text-white/50">
              Free for one project. No card, no sales call — a working kairo status in under five
              minutes.
            </p>
          </div>
          <PricingToggle annual={annual} onChange={setAnnual} labels={["Monthly", "Annual"]} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="flex flex-col border border-white/10 bg-[#0E0F13] p-6"
              style={t.highlighted ? { borderColor: ACCENT } : undefined}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wide text-white/40">{t.name}</span>
                {t.highlighted && <span className="font-mono text-[9px] uppercase tracking-wide text-[#0E0F13] bg-[#39D9A0] px-2 py-0.5">Popular</span>}
              </div>
              <div className="mt-2 font-display text-[30px] font-semibold text-white">
                {t.price}
                <span className="font-mono text-[11px] text-white/35">/mo{annual ? ", yearly" : ""}</span>
              </div>
              <p className="mt-1 text-[12.5px] text-white/45">{t.desc}</p>
              <ul className="mt-5 flex flex-col gap-2 text-[13px] text-white/65">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[#39D9A0]">+</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`${BASE}/docs`}
                className="mt-6 py-3 text-center font-mono text-[12px] uppercase tracking-wide transition-opacity hover:opacity-85"
                style={{ background: ACCENT, color: "#0E0F13" }}
              >
                Start free
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-wide text-white/35">
          All plans include unlimited team members · cancel anytime
        </p>
      </div>
    </section>
  );
}

function SignupBlock() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="border border-[#39D9A0]/50 bg-[#39D9A0]/10 p-6">
        <p className="font-mono text-[10px] uppercase tracking-wide text-[#39D9A0]">Invite sent</p>
        <p className="mt-2 text-[14px] text-white/85">
          Check your inbox — your project is ready to connect once you click through.
        </p>
      </div>
    );
  }
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        required
        type="email"
        placeholder="work@company.com"
        className="border border-white/15 bg-transparent px-3.5 py-3 text-[13.5px] text-white placeholder:text-white/35"
      />
      <button type="submit" className="bg-[#39D9A0] py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#0E0F13] transition-colors hover:bg-white">
        Request access
      </button>
    </form>
  );
}

function DocsPage() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h2 className="font-display text-[34px] font-semibold">Documentation</h2>
        <p className="mt-3 max-w-[44ch] text-[14px] text-white/50">
          The essentials to get from zero to a working queue, migration preview, and log search —
          all in the first afternoon.
        </p>
        <div className="mt-10 border-t border-white/10">
          <Accordion
            items={DOCS}
            defaultOpen={0}
            openClass="text-white/60"
            className="text-white/80"
          />
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wide text-[#39D9A0]">Start free</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">
              Free for one project, no card required. Join the waitlist and we'll set up your
              workspace when seats open.
            </p>
            <div className="mt-4">
              <SignupBlock />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              ["API base", "https://api.kairo.dev/v1"],
              ["CLI", "npm install -g kairo-cli"],
              ["Status", "all systems operational"],
              ["Support", "support@kairo.dev"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-white/40">{k}</span>
                <span className="font-mono text-[11px] text-[#39D9A0]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, product: ProductPage, pricing: PricingPage, docs: DocsPage };

export default function Kairo() {
  return (
    <div className="min-h-screen bg-[#0E0F13] font-body text-[#E7E9E4]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="kairo" dark />
    </div>
  );
}
