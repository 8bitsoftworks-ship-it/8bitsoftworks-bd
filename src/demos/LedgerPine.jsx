import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import Accordion from "../demo-kit/Accordion";
import ContactForm from "../demo-kit/ContactForm";
import Stat from "../demo-kit/Stat";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/ledger-pine";
const ACCENT = "#2F5D45";

const NAV = [
  { to: BASE, label: "Home" },
  { to: `${BASE}/services`, label: "Services" },
  { to: `${BASE}/team`, label: "Team" },
  { to: `${BASE}/faq`, label: "FAQ" },
  { to: `${BASE}/contact`, label: "Contact" },
];

const SERVICES = [
  ["Small business", "Bookkeeping, VAT returns, and payroll — priced flat so the invoice is never a surprise."],
  ["Founders & startups", "Clean cap tables, investor-ready numbers, and a CFO who answers your email."],
  ["Property owners", "Rental accounts, capital allowances, and portfolio structuring for landlords."],
  ["Individuals", "Tax returns that are actually done early, with a plain-language summary."],
];

const SERVICES_DETAIL = [
  {
    name: "Small business",
    tagline: "Bookkeeping, VAT, payroll",
    desc: "The day-to-day numbers, kept current and filed on time. One flat fee covers it, agreed in writing before we start.",
    includes: ["Monthly bookkeeping and reconciliations", "VAT returns filed before the deadline", "Payroll processing and statutory returns", "One-page monthly summary you can read aloud"],
  },
  {
    name: "Founders & startups",
    tagline: "Clean cap tables, investor-ready numbers",
    desc: "For teams raising money or already spending it. Your numbers arrive investor-ready, with a finance partner who replies to email.",
    includes: ["Cap table upkeep and option pools", "Investor-ready monthly management pack", "CFO-style advice, without the hourly meter", "Fundraising and diligence support"],
  },
  {
    name: "Property owners",
    tagline: "Rental accounts, allowances, structuring",
    desc: "For landlords with one flat or a whole portfolio. We track the rent, claim what you're owed, and keep the structure clean.",
    includes: ["Rental accounts and tenant records", "Capital allowances and repairs claims", "Portfolio structuring and tax planning", "Deposit and compliance paperwork"],
  },
  {
    name: "Individuals",
    tagline: "Tax returns, done early",
    desc: "A personal return filed ahead of the rush, with a plain-English summary of what changed and what you owe.",
    includes: ["Personal tax returns, filed early", "Income and capital gains planning", "NBR correspondence handled for you", "Plain-language summary of each return"],
  },
];

const ENGAGEMENT = [
  ["01 · Talk", "A thirty-minute call, free. You tell us what's stressing you out, we tell you what it'll take."],
  ["02 · Scope", "A written fixed fee and a deadline, agreed before any work begins. No billable hours."],
  ["03 · Work", "We file early and flag anything that needs a decision. You get a one-page summary every month."],
  ["04 · Review", "Quarterly check-ins on the things that change — thresholds, structures, and what's next."],
];

const TEAM = [
  ["Fahim Islam", "Partner, ACA", "Formerly Big 4, now bored of PowerPoint"],
  ["Sharmin Akter", "Senior Accountant", "VAT and payroll, without the jargon"],
  ["Rafiq Chowdhury", "Tax Advisor", "Two decades of filing, zero surprises"],
  ["Nusrat Jahan", "Client Manager", "The first voice you hear on the phone"],
  ["Tanvir Rahman", "Audit Senior", "The second set of eyes on every file"],
  ["Ayesha Siddiqua", "Senior Accountant", "Property and rental accounts, end to end"],
];

const NUMBERS = [
  ["18", "years in practice"],
  ["260+", "clients who stay"],
  ["3×", "check before anything leaves"],
];

const PILLARS = [
  ["Flat fees", "Agreed up front, in writing. No billable-hour surprises."],
  ["Real deadlines", "We file early and tell you what we need, when we need it."],
  ["Plain English", "Every return comes with a one-page summary you can read aloud."],
];

const FAQS = [
  {
    title: "What exactly does the flat fee cover?",
    body: "Bookkeeping, VAT and payroll filings, statutory returns, and a monthly one-page summary — as scoped in writing before we start. Anything outside scope is quoted before we begin it.",
  },
  {
    title: "We've missed a few filings. Can you help?",
    body: "Yes — late returns and old ledgers are most of our business. Tell us what's outstanding and we'll tell you honestly what it costs to fix, including any penalty risk you should plan for.",
  },
  {
    title: "How fast do you actually reply?",
    body: "Same business day for email, and a named person on your account — not a queue. During filing season we reply within a day, and we file early so the deadline never becomes an emergency.",
  },
  {
    title: "Do you work with businesses outside Dhaka?",
    body: "Yes. Almost everything happens over secure document exchange and video calls, and a lot of our clients have never visited the office. Tax obligations are handled where you're registered.",
  },
  {
    title: "How do we hand over our current records?",
    body: "We'll send a short checklist — bank statements, invoices, prior returns. You share what you have, even if it's messy. We sort it into a clean ledger before charging you a single taka.",
  },
  {
    title: "What if I only need one thing?",
    body: "That's fine. We take on single pieces of work — one late VAT return, one personal tax filing — at a fixed quote. If it turns into an ongoing arrangement later, the earlier work is credited.",
  },
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-[#1E2418]/10 bg-[#EEF0E7]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-display font-semibold text-[15px] tracking-tight">
          LEDGER <span style={{ color: ACCENT }}>&</span> PINE
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#1E2418]/55 sm:flex">
          {NAV.map((l) => {
            const isActive = l.to === BASE ? active === "" : active === l.label.toLowerCase();
            return (
              <Link key={l.to} to={l.to} className={`transition-colors hover:text-[#1E2418] ${isActive ? "text-[#2F5D45]" : ""}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/contact`}
            className="font-mono text-[10.5px] uppercase tracking-wide bg-[#2F5D45] px-3.5 py-2 text-white transition-colors hover:bg-[#1E2418]"
          >
            Book a call
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-white border-[#1E2418]/10 text-[#1E2418]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1E2418]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1E2418]/40">
      Ledger &amp; Pine — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-10 px-6 pt-16 pb-12 md:grid-cols-[1.3fr_1fr] md:pt-24 md:pb-16">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F5D45]">Chartered accountants · Dhaka</span>
        <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.02] sm:text-[56px]">
          Your books,
          <br />
          <span className="italic text-[#2F5D45]">boring again.</span>
        </h1>
        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[#1E2418]/60">
          We do the unglamorous work — bookkeeping, VAT, payroll, audit — so you can forget your
          accounts exist until it's useful to remember them.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to={`${BASE}/contact`}
            className="inline-block bg-[#2F5D45] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#1E2418]"
          >
            Start a conversation
          </Link>
          <Link
            to={`${BASE}/services`}
            className="inline-block border border-[#1E2418]/15 px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#1E2418] transition-colors hover:border-[#1E2418]/40"
          >
            See what we do
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#1E2418]/10">
        {NUMBERS.map(([n, d]) => (
          <div key={n} className="bg-[#EEF0E7] p-5">
            <div className="font-display text-[26px] font-semibold text-[#2F5D45]">{n}</div>
            <p className="mt-1 text-[11px] leading-snug text-[#1E2418]/55">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="border-t border-[#1E2418]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E2418]/50">Who we work with</h2>
          <Link to={`${BASE}/services`} className="font-mono text-[10.5px] uppercase tracking-wide text-[#2F5D45] hover:text-[#1E2418]">
            All services →
          </Link>
        </div>
        <div className="grid gap-px bg-[#1E2418]/10 sm:grid-cols-2">
          {SERVICES.map(([name, desc]) => (
            <Link key={name} to={`${BASE}/services`} className="group bg-[#EEF0E7] p-6 transition-colors hover:bg-white">
              <div className="flex items-center justify-between">
                <span className="font-display text-[16px] font-semibold">{name}</span>
                <span className="font-mono text-[12px] text-[#2F5D45] opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#1E2418]/60">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="border-t border-[#1E2418]/10">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {PILLARS.map(([n, d]) => (
            <div key={n} className="border-t-2 border-[#2F5D45] pt-4">
              <div className="font-display text-[18px] font-semibold">{n}</div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#1E2418]/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-[#1E2418]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E2418]/50">What clients say</h2>
          <span className="font-mono text-[10.5px] text-[#1E2418]/35">in their words</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["“We finally stopped dreading VAT season. They file it before I remember it exists.”", "Owner, Dhanmondi retail chain"],
            ["“First accountant who told us what something would cost before doing it.”", "Co-founder, fintech startup"],
            ["“The monthly summary is three paragraphs. That's the point.”", "Landlord, 4 units in Banani"],
          ].map(([q, who]) => (
            <div key={who} className="flex flex-col justify-between border border-[#1E2418]/10 p-5">
              <p className="text-[13px] italic leading-relaxed text-[#1E2418]/75">{q}</p>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">{who}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="border-t border-[#1E2418]/10 bg-[#1E2418] text-[#EEF0E7]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-[46ch]">
          <h2 className="font-display text-[26px] font-semibold leading-tight md:text-[30px]">
            Prefer to talk numbers over email?
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#EEF0E7]/60">
            Send over what's stressing you out — a late VAT return, a messy ledger, a letter from
            NBR. We'll reply with a straight answer.
          </p>
          <Link
            to={`${BASE}/contact`}
            className="mt-7 inline-block bg-[#2F5D45] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#EEF0E7] hover:text-[#1E2418]"
          >
            Start a conversation
          </Link>
        </div>
        <div className="shrink-0 space-y-2 font-mono text-[13px] text-[#EEF0E7]/80">
          <p className="text-[#7FA08B]">hello@ledgerandpine.com</p>
          <p>+880 1X-XXXX XXXX</p>
          <p className="text-[#EEF0E7]/45">Level 4, House 22, Banani, Dhaka</p>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <PillarsSection />
      <Testimonials />
      <CtaBand />
    </>
  );
}

function ServicesPage() {
  return (
    <section className="border-t border-[#1E2418]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F5D45]">Services</span>
        <h2 className="mt-3 max-w-[20ch] font-display text-[32px] font-semibold leading-tight md:text-[38px]">
          Four ways we take a problem off your desk.
        </h2>
        <p className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-[#1E2418]/60">
          Every engagement starts with a conversation and a written quote. Here's the shape of the
          work we take on.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {SERVICES_DETAIL.map((s) => (
            <div key={s.name} className="grid gap-6 border border-[#1E2418]/10 bg-white p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
              <div>
                <div className="font-display text-[20px] font-semibold">{s.name}</div>
                <div className="mt-1 font-mono text-[10.5px] uppercase tracking-wide text-[#2F5D45]">{s.tagline}</div>
                <p className="mt-4 text-[13.5px] leading-relaxed text-[#1E2418]/60">{s.desc}</p>
                <Link
                  to={`${BASE}/contact`}
                  className="mt-5 inline-block font-mono text-[10.5px] uppercase tracking-wide text-[#2F5D45] hover:text-[#1E2418]"
                >
                  Talk to us →
                </Link>
              </div>
              <ul className="flex flex-col gap-2.5 border-t border-[#1E2418]/10 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                {s.includes.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[13.5px] text-[#1E2418]/70">
                    <span className="font-mono text-[12px] text-[#2F5D45]">+</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <section className="border-t border-[#1E2418]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F5D45]">Team</span>
        <h2 className="mt-3 font-display text-[32px] font-semibold leading-tight md:text-[38px]">
          The people you'll talk to.
        </h2>
        <p className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-[#1E2418]/60">
          Nine people total. No call centres, no hand-offs to a junior who doesn't know your file.
          Every client gets a named manager and a partner who signs off.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map(([name, role, bio]) => (
            <div key={name} className="border border-[#1E2418]/10 p-6 transition-colors hover:bg-white">
              <div className="mb-4 flex h-16 w-16 items-center justify-center border border-[#2F5D45]/30 bg-[#EEF0E7] font-display text-[20px] font-semibold text-[#2F5D45]">
                {name.split(" ").map((w) => w[0]).join("")}
              </div>
              <h3 className="font-display text-[16px] font-semibold">{name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">{role}</span>
              <p className="mt-3 text-[12.5px] leading-relaxed text-[#1E2418]/55">{bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[#1E2418]/10 pt-10">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E2418]/50">How we work</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT.map(([step, desc]) => (
              <div key={step} className="border-t-2 border-[#2F5D45] pt-4">
                <div className="font-mono text-[11px] uppercase tracking-wide text-[#2F5D45]">{step}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-[#1E2418]/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 border border-[#1E2418]/10 bg-white p-6 sm:grid-cols-3">
          <Stat value="9" label="People, no hand-offs" />
          <Stat value="1" label="Named manager per client" />
          <Stat value="3×" label="Checks before anything leaves" />
        </div>
      </div>
    </section>
  );
}

function FaqPage() {
  return (
    <section className="border-t border-[#1E2418]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F5D45]">FAQ</span>
            <h2 className="mt-3 font-display text-[32px] font-semibold leading-tight md:text-[38px]">
              Straight answers, before you ask.
            </h2>
            <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-[#1E2418]/60">
              The questions everyone asks before starting. If yours isn't here, that's exactly what
              the contact page is for.
            </p>
            <Link
              to={`${BASE}/contact`}
              className="mt-7 inline-block bg-[#2F5D45] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wide text-white transition-colors hover:bg-[#1E2418]"
            >
              Ask us directly
            </Link>
          </div>
          <div className="border-t border-[#1E2418]/10">
            <Accordion
              items={FAQS}
              defaultOpen={0}
              className="divide-[#1E2418]/10"
              openClass="text-[#1E2418]/75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="border-t border-[#1E2418]/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F5D45]">Contact</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold leading-tight md:text-[38px]">
            Start with a conversation.
          </h2>
          <p className="mt-3 max-w-[44ch] text-[14px] leading-relaxed text-[#1E2418]/60">
            A thirty-minute call, free, with no obligation and no pitch deck. Tell us what's on
            your desk and we'll tell you honestly whether we're the right fit.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <Stat value="Same day" label="Email reply time" />
            <Stat value="Free" label="First consultation call" />
            <Stat value="Written" label="Quote before any work" />
          </div>
          <div className="mt-8 space-y-2 border-t border-[#1E2418]/10 pt-6 font-mono text-[13px]">
            <p className="text-[#2F5D45]">hello@ledgerandpine.com</p>
            <p>+880 1X-XXXX XXXX</p>
            <p className="text-[#1E2418]/45">Level 4, House 22, Banani, Dhaka</p>
            <p className="text-[#1E2418]/45">Mon–Fri, 9am–6pm</p>
          </div>
        </div>
        <div className="border border-[#1E2418]/10 bg-white p-6 md:p-8">
          <h3 className="font-display text-[20px] font-semibold">Consultation enquiry</h3>
          <p className="mb-6 mt-2 text-[12.5px] text-[#1E2418]/50">
            We reply within one business day — usually faster — with a straight answer.
          </p>
          <ContactForm
            name="Your name"
            email="Work email"
            message="What's on your plate — late filings, a messy ledger, a question?"
            submitLabel="Send enquiry"
            accent={ACCENT}
            className="text-[#1E2418]"
            successMessage="Thanks — we'll reply within one business day with a straight answer."
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, services: ServicesPage, team: TeamPage, faq: FaqPage, contact: ContactPage };

export default function LedgerPine() {
  return (
    <div className="min-h-screen bg-[#EEF0E7] font-body text-[#1E2418]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="ledger-pine" />
    </div>
  );
}
