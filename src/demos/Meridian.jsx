import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import Accordion from "../demo-kit/Accordion";
import PricingToggle from "../demo-kit/PricingToggle";
import PriceTier from "../demo-kit/PriceTier";
import BookingForm from "../demo-kit/BookingForm";
import Stat from "../demo-kit/Stat";
import SectionHeading from "../demo-kit/SectionHeading";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/meridian";
const ACCENT = "#FFD84D";

const NAV = [
  { to: BASE, label: "Home", key: "" },
  { to: `${BASE}/courses`, label: "Courses", key: "courses" },
  { to: `${BASE}/pricing`, label: "Pricing", key: "pricing" },
  { to: `${BASE}/enroll`, label: "Enroll", key: "enroll" },
];

const CATS = ["All", "Design", "Engineering", "Business"];

const COURSES = [
  {
    slug: "visual-design-essentials",
    title: "Visual Design Essentials",
    cat: "Design",
    level: "Beginner",
    length: "8 weeks",
    pace: "2 live sessions / wk",
    monthly: 89,
    annual: 74,
    grad: ["#F2C14E", "#7A5C14"],
    blurb: "A hands-on foundation in type, color, grid, and composition — taught live in Figma with weekly briefs critiqued in class.",
    outcomes: [
      "Design a three-part portfolio system in Figma",
      "Set type and color with intent, not taste",
      "Present and defend design decisions in review",
    ],
    instructor: {
      name: "Amara Chen",
      role: "Designer, founding faculty",
      bio: "Formerly led product design at two YC startups. She has taught visual foundations to 1,400+ students and still reviews every final project herself.",
    },
    curriculum: [
      { title: "01 · Type & hierarchy", body: "Legibility systems, scale, and how editorial pages earn attention without shouting. Set a type ramp you can defend." },
      { title: "02 · Color & contrast", body: "Palettes with a purpose — accessibility, mood, and consistency. Build a limited swatch and stop guessing." },
      { title: "03 · Grid & composition", body: "Column systems, asymmetry, and the frame you build before the pixels. Compose like it's print." },
      { title: "04 · Live critique", body: "A weekly review of real briefs — giving and taking notes the way a studio does, not a classroom." },
    ],
  },
  {
    slug: "ux-research-and-strategy",
    title: "UX Research & Strategy",
    cat: "Design",
    level: "Intermediate",
    length: "8 weeks",
    pace: "2 live sessions / wk",
    monthly: 89,
    annual: 74,
    grad: ["#C98A78", "#5C3527"],
    blurb: "Turn vague asks into falsifiable questions, run interviews that people enjoy, and present findings that change decisions.",
    outcomes: [
      "Write a research plan that survives contact with stakeholders",
      "Run and synthesize 10+ structured interviews",
      "Present insights that redirect product decisions",
    ],
    instructor: {
      name: "Ravi Iyer",
      role: "Head of research, ex-FinTech",
      bio: "Built research teams at two scale-ups. He believes every interview is a date — you listen first and you never lead the witness.",
    },
    curriculum: [
      { title: "01 · Framing the problem", body: "Turn a vague ask into a falsifiable question your team can actually act on — before a single interview is booked." },
      { title: "02 · Interviews & synthesis", body: "Structured interviews, clean transcripts, and clustering evidence into insights instead of opinions." },
      { title: "03 · Flows & validation", body: "Prototype the journey and test it with users while the pixels are still cheap to change." },
      { title: "04 · Communicating research", body: "Build the one-page brief that changes decisions — not the forty-slide deck that gathers dust." },
    ],
  },
  {
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    cat: "Engineering",
    level: "Beginner",
    length: "14 weeks",
    pace: "3 live sessions / wk",
    monthly: 129,
    annual: 109,
    grad: ["#7E8C9B", "#2E3A46"],
    blurb: "From your first HTML tag to a deployed product with a real database — the fastest live track to shipping on the web.",
    outcomes: [
      "Ship a full-stack app to production with monitoring",
      "Read and extend an unfamiliar codebase without fear",
      "Debug like an engineer, not a trial-and-errorer",
    ],
    instructor: {
      name: "Nia Okafor",
      role: "Staff engineer, ex-marketplace",
      bio: "Spent a decade building payment rails and reviewing PRs. She teaches the mental models, not just the syntax.",
    },
    curriculum: [
      { title: "01 · HTML, CSS & the browser", body: "Semantics, layout, and a working mental model of how a page actually renders — from request to paint." },
      { title: "02 · JavaScript fundamentals", body: "State, events, and async — the core you'll reuse in every framework you touch afterwards." },
      { title: "03 · React & working codebases", body: "Components, data flow, and shipping features into an existing build without breaking it." },
      { title: "04 · APIs & databases", body: "Designing endpoints, modeling data, and wiring a real front end to a real back end." },
      { title: "05 · Deploy & iterate", body: "Production deploys, monitoring, and the feedback loop that makes you faster every week." },
    ],
  },
  {
    slug: "data-analysis-with-python",
    title: "Data Analysis with Python",
    cat: "Engineering",
    level: "Intermediate",
    length: "10 weeks",
    pace: "2 live sessions / wk",
    monthly: 99,
    annual: 84,
    grad: ["#96A98E", "#3F5440"],
    blurb: "Find the story in messy data with pandas, honest visualization, and the statistics that actually drive decisions.",
    outcomes: [
      "Clean and reshape real-world messy datasets",
      "Tell an honest story with a well-labelled chart",
      "Know when a number is worth acting on",
    ],
    instructor: {
      name: "Tom Becker",
      role: "Analytics lead, ex-streaming",
      bio: "Has rescued more dashboards than he can count. He teaches analysis as a craft of questions, not a bag of libraries.",
    },
    curriculum: [
      { title: "01 · Python for analysis", body: "Pandas, cleaning, and the questions that should come before any plotting ever starts." },
      { title: "02 · Exploratory analysis", body: "Finding the story in messy data with quick, honest visualizations that never lie by accident." },
      { title: "03 · Statistics that matter", body: "Sampling, significance, and knowing when a number deserves a decision — and when it doesn't." },
      { title: "04 · Communicating results", body: "Dashboards and one-pagers that stakeholders actually read — and act on." },
    ],
  },
  {
    slug: "product-strategy-and-growth",
    title: "Product Strategy & Growth",
    cat: "Business",
    level: "Intermediate",
    length: "10 weeks",
    pace: "1 live session / wk",
    monthly: 109,
    annual: 94,
    grad: ["#D9B8A6", "#7A4F3E"],
    blurb: "Find the wedge, position against the market, and build growth loops that compound instead of spike.",
    outcomes: [
      "Define a positioning statement you can defend",
      "Build a growth model with real activation metrics",
      "Kill vanity dashboards and keep the one metric that matters",
    ],
    instructor: {
      name: "Suki Tanaka",
      role: "Operator & advisor",
      bio: "Scaled two products past $10M ARR and one to acquisition. She teaches strategy as a discipline, not a vibe.",
    },
    curriculum: [
      { title: "01 · Finding the wedge", body: "Define who you serve and the single problem you solve first — before building anything else." },
      { title: "02 · Positioning & pricing", body: "Tell the market why you exist — and charge for the value, not the effort." },
      { title: "03 · Growth loops", body: "Activation, retention, and the loops that compound — versus the spikes that don't." },
      { title: "04 · Measuring what matters", body: "North-star metrics, cohort analysis, and how to retire a dashboard gracefully." },
    ],
  },
  {
    slug: "operations-and-analytics",
    title: "Operations & Analytics",
    cat: "Business",
    level: "Advanced",
    length: "8 weeks",
    pace: "1 live session / wk",
    monthly: 99,
    annual: 84,
    grad: ["#9AAFB8", "#33434B"],
    blurb: "Map the work, forecast the load, and turn SQL and dashboards into decisions your ops team trusts.",
    outcomes: [
      "Map a process before you try to change it",
      "Build a forecast that survives contact with reality",
      "Run a retrospective people actually show up to",
    ],
    instructor: {
      name: "Marcus Reid",
      role: "COO, ex-logistics",
      bio: "Ran operations at a last-mile logistics company. He believes systems beat heroics, every time.",
    },
    curriculum: [
      { title: "01 · Process mapping", body: "Document how work actually flows before you try to change it — swimlanes and all." },
      { title: "02 · Forecasting basics", body: "Demand, capacity, and the spreadsheet models that survive contact with reality." },
      { title: "03 · Operational analytics", body: "Turn SQL and dashboards into decisions the ops team trusts — not just reads." },
      { title: "04 · Continuous improvement", body: "Runbooks, retros, and building an ops culture that improves itself." },
    ],
  },
];

const FEATURED = COURSES.filter((c) =>
  ["full-stack-web-development", "visual-design-essentials", "product-strategy-and-growth"].includes(c.slug)
);

const PLANS = [
  { name: "Learner", monthly: 69, annual: 59, desc: "One live course at a time, with weekly sessions and instructor feedback.", features: ["1 active course", "Weekly live sessions", "Instructor critique", "Archive access"], highlighted: false },
  { name: "Builder", monthly: 129, annual: 109, desc: "Our most popular plan — two courses at once with priority review.", features: ["2 active courses", "Priority project reviews", "Monthly 1:1 mentor call", "Community + job board"], highlighted: true },
  { name: "Studio", monthly: 219, annual: 189, desc: "For serious builders and small teams — every course, plus seats for your crew.", features: ["Unlimited courses", "Up to 3 team seats", "Private workshops", "Direct Slack access"], highlighted: false },
];

const TESTIMONIALS = [
  ["I shipped my first real product five weeks into the track. The live reviews are the whole difference.", "Dana — Full-Stack grad"],
  ["The only school where the instructors know my name by week two. That's not marketing.", "Elias — Data track"],
  ["I cancelled my degree-track subscription after a month here. Live beats recorded, always.", "Priya — Product grad"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  const isActive = (key) => active === key || (key === "courses" && active === "course");
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#141412]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to={BASE} className="font-display text-[19px] font-bold uppercase tracking-tight">
          Meridian
          <span className="text-[#FFD84D]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[10.5px] uppercase tracking-wide text-white/55 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-white ${isActive(l.key) ? "text-[#FFD84D]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/enroll`}
            className="border border-[#FFD84D]/60 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-wide text-[#FFD84D] hover:bg-[#FFD84D] hover:text-[#141412]"
          >
            Enroll now
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-[#1D1D1A] border-white/10 text-white" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center">
        <Link to={BASE} className="font-display text-[20px] font-bold uppercase tracking-tight">
          Meridian<span className="text-[#FFD84D]">.</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-6 font-mono text-[10.5px] uppercase tracking-wide text-white/40">
          {NAV.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[#FFD84D]">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="font-mono text-[10px] uppercase tracking-wide text-white/30">
          Live, human-taught · Cohorts start monthly · Remote worldwide
        </p>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section className="grid-texture border-b border-white/10">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFD84D]">
          Live, human-taught — est. 2019
        </span>
        <h1 className="mt-6 font-display text-[46px] font-bold uppercase leading-[0.94] tracking-tight sm:text-[74px]">
          Learn to build.
          <br />
          <span className="bg-[#FFD84D] px-3 text-[#141412]">Taught live.</span>
        </h1>
        <p className="mt-7 max-w-[52ch] text-[15px] leading-relaxed text-white/60">
          Meridian is an online school for people who build things — designers, engineers, and
          operators learning in live cohorts with real instructors who know your name by week two.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to={`${BASE}/courses`} className="bg-[#FFD84D] px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-[#141412] hover:bg-white">
            Browse courses
          </Link>
          <Link to={`${BASE}/pricing`} className="border border-white/20 px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-white hover:border-[#FFD84D] hover:text-[#FFD84D]">
            See pricing
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          <Stat value="600+" label="Students taught live" valueClass="text-[#FFD84D]" />
          <Stat value="92%" label="Cohort finish rate" valueClass="text-[#FFD84D]" />
          <Stat value="5:1" label="Students per mentor" valueClass="text-[#FFD84D]" />
          <Stat value="Live" label="Every session, no replays" valueClass="text-[#FFD84D]" />
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-[26px] font-bold uppercase tracking-tight">Featured tracks</h2>
          <Link to={`${BASE}/courses`} className="font-mono text-[10.5px] uppercase tracking-wide text-white/50 hover:text-[#FFD84D]">
            All courses →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED.map((c, i) => (
            <Link key={c.slug} to={`${BASE}/course/${c.slug}`} className="group flex flex-col border border-white/10 bg-[#1D1D1A] p-6 transition-colors hover:border-[#FFD84D]/50">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-white/30">0{i + 1}</span>
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#FFD84D]">{c.cat}</span>
              </div>
              <h3 className="mt-6 font-display text-[20px] font-semibold leading-tight">{c.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">{c.blurb}</p>
              <span className="mt-auto pt-5 font-mono text-[10.5px] uppercase tracking-wide text-white/40 group-hover:text-[#FFD84D]">
                View track →
              </span>
            </Link>
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
        <SectionHeading eyebrow="From the cohort" title="Students, not subscribers" align="center" className="mx-auto max-w-xl" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map(([q, who]) => (
            <figure key={who} className="flex flex-col justify-between border border-white/10 bg-[#1D1D1A] p-6">
              <blockquote className="text-[13.5px] italic leading-relaxed text-white/75">“{q}”</blockquote>
              <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-wide text-[#FFD84D]">{who}</figcaption>
            </figure>
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
      <FeaturedCourses />
      <Testimonials />
    </>
  );
}

function CoursesPage() {
  const [cat, setCat] = useState("All");
  const list = COURSES.filter((c) => cat === "All" || c.cat === cat);
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="The catalog"
          title="Courses, taught live"
          lede="Every course runs as a live cohort — weekly sessions, real assignments, and a human instructor who reviews your work."
        />
        <div className="mt-8">
          <FilterChips
            options={CATS}
            active={cat}
            onChange={setCat}
            chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-white/15 text-white/50 hover:text-white"
            activeClassName="border-[#FFD84D] text-[#FFD84D]"
          />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((c) => (
            <Link key={c.slug} to={`${BASE}/course/${c.slug}`} className="group border border-white/10 bg-[#1D1D1A] p-6 transition-colors hover:border-[#FFD84D]/50">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#FFD84D]">{c.cat}</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-white/35">{c.level}</span>
              </div>
              <h3 className="mt-4 font-display text-[20px] font-semibold leading-tight">{c.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">{c.blurb}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wide text-white/40">
                  {c.length} · {c.pace}
                </span>
                <span className="font-display text-[16px] font-semibold text-[#FFD84D]">
                  ${c.monthly}
                  <span className="text-[10px] text-white/35">/mo</span>
                </span>
              </div>
              <span className="mt-4 inline-block font-mono text-[10.5px] uppercase tracking-wide text-white/40 group-hover:text-[#FFD84D]">
                View track →
              </span>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-wide text-white/30">
            No courses in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

function CoursePage() {
  const params = useParams();
  const slug = (params["*"] || "").split("/").filter(Boolean)[1];
  const c = COURSES.find((x) => x.slug === slug) || COURSES[0];
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Link to={`${BASE}/courses`} className="font-mono text-[10.5px] uppercase tracking-wide text-white/40 hover:text-[#FFD84D]">
          ← All courses
        </Link>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#FFD84D]">{c.cat}</span>
              <span className="font-mono text-[10.5px] uppercase tracking-wide text-white/35">{c.level}</span>
            </div>
            <h2 className="mt-3 font-display text-[36px] font-bold uppercase leading-[0.98] tracking-tight">
              {c.title}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-white/60">{c.blurb}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {c.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-[13.5px] text-white/70">
                  <span className="mt-0.5 font-mono text-[#FFD84D]">+</span>
                  {o}
                </li>
              ))}
            </ul>
            <Link to={`${BASE}/enroll`} className="mt-8 inline-block bg-[#FFD84D] px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-[#141412] hover:bg-white">
              Enroll for ${c.monthly}/mo
            </Link>
          </div>
          <aside className="flex flex-col gap-5">
            <div className="border border-white/10 bg-[#1D1D1A] p-5">
              <div className="font-mono text-[10.5px] uppercase tracking-wide text-white/40">Format</div>
              <p className="mt-2 text-[13px] text-white/70">
                {c.length} · {c.pace} · live cohort
              </p>
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="font-mono text-[10.5px] uppercase tracking-wide text-white/40">Price</div>
                <p className="mt-2 font-display text-[20px] font-semibold text-[#FFD84D]">
                  ${c.monthly}
                  <span className="text-[12px] text-white/40">/mo</span>
                </p>
              </div>
            </div>
            <div className="border border-white/10 bg-[#1D1D1A] p-5">
              <div className="h-16 w-16" style={{ background: `linear-gradient(135deg,${c.grad[0]},${c.grad[1]})` }} />
              <div className="mt-4 font-display text-[16px] font-semibold">{c.instructor.name}</div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-[#FFD84D]">{c.instructor.role}</div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-white/55">{c.instructor.bio}</p>
            </div>
          </aside>
        </div>
        <div className="mt-14">
          <h3 className="font-display text-[20px] font-bold uppercase tracking-tight">Curriculum</h3>
          <Accordion className="mt-4 border-t border-white/10 text-white" items={c.curriculum} defaultOpen={0} openClass="text-white/60" />
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Membership"
            title="Pricing"
            lede="One membership, every live course, unlimited project audits. Cancel anytime."
          />
          <PricingToggle annual={annual} onChange={setAnnual} className="text-white" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <PriceTier
              key={p.name}
              name={p.name}
              price={annual ? `$${p.annual}/mo` : `$${p.monthly}/mo`}
              desc={p.desc}
              features={p.features}
              cta={p.highlighted ? "Enroll now" : "Start free trial"}
              highlighted={p.highlighted}
              accent={ACCENT}
              accentText="#17150F"
              className="bg-[#1D1D1A] border-white/10"
            />
          ))}
        </div>
        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-wide text-white/35">
          {annual
            ? "Billed annually — two months included free."
            : "Billed monthly — switch to annual anytime for a 15% saving."}
        </p>
      </div>
    </section>
  );
}

function EnrollPage() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Enrollment"
            title="Join a cohort"
            lede="Cohorts start the first Monday of every month. Tell us what you want to learn and we'll confirm your seat within a day."
          />
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <Stat value="12 wks" label="Average track length" />
            <Stat value="92%" label="Cohort finish rate" />
            <Stat value="5:1" label="Students per mentor" />
            <Stat value="7 days" label="Full refund window" />
          </div>
        </div>
        <div className="border border-white/10 bg-[#1D1D1A] p-6 md:p-8">
          <h3 className="font-display text-[18px] font-semibold uppercase tracking-tight">Reserve your seat</h3>
          <p className="mt-2 mb-6 text-[12.5px] text-white/45">
            No payment now — we'll confirm your cohort and send the invoice.
          </p>
          <BookingForm
            accent="#4A4431"
            textClass="text-[#F5F1E8]"
            submitLabel="Request enrollment"
            fields={[
              { key: "name", label: "Full name", placeholder: "Your name", required: true },
              { key: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
              { key: "course", label: "Course", type: "select", options: COURSES.map((c) => c.title), placeholder: "Choose a course" },
              { key: "start", label: "Preferred start", type: "select", options: ["January 5", "February 2", "March 2", "Not sure yet"], placeholder: "Pick a cohort" },
              { key: "notes", label: "Anything we should know?", type: "text", placeholder: "Optional", required: false },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, courses: CoursesPage, course: CoursePage, pricing: PricingPage, enroll: EnrollPage };

export default function Meridian() {
  return (
    <div className="min-h-screen bg-[#141412] font-body text-[#F5F1E8]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="meridian" dark />
    </div>
  );
}
