import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import ContactForm from "../demo-kit/ContactForm";
import Stat from "../demo-kit/Stat";
import Accordion from "../demo-kit/Accordion";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/northline";

const NAV = [
  { key: "home", to: BASE, label: "Home" },
  { key: "work", to: `${BASE}/work`, label: "Work" },
  { key: "about", to: `${BASE}/about`, label: "About" },
  { key: "contact", to: `${BASE}/contact`, label: "Contact" },
];

const CATS = ["All", "Residential", "Commercial", "Cultural"];

const PROJECTS = [
  {
    slug: "concrete-house-04",
    name: "Concrete House 04",
    place: "Gazipur",
    year: "2024",
    cat: "Residential",
    size: "sm:col-span-2",
    area: "420 m²",
    image: "linear-gradient(135deg,#2A2A28,#0B0B0A)",
    desc: "A house built from four poured-concrete frames, arranged so every room gets two aspects of light. The plan is deliberately strict; life happens in the gaps between the frames.",
    brief: "The clients wanted a house that would not be outgrown — a frame that could absorb two kids, a home office, and a changing tolerance for maintenance. We poured the structure first and let the rooms argue for their own size.",
    scope: ["Architecture", "Structural coordination", "Interior detailing"],
    stats: [
      ["420 m²", "Built area"],
      ["2 yrs", "Sketch to keys"],
      ["4", "Concrete frames"],
    ],
  },
  {
    slug: "riverside-pavilion",
    name: "Riverside Pavilion",
    place: "Sylhet",
    year: "2023",
    cat: "Cultural",
    size: "",
    area: "180 m²",
    image: "linear-gradient(135deg,#4A4A46,#10100F)",
    desc: "An open pavilion for readings and small concerts on a flood-prone riverbank. The floor slab is raised on piers; the roof is a single folded plane that throws shade all afternoon.",
    brief: "Built with a local contractor and a very local material list: concrete piers, a steel roof, and timber slats sourced within twenty kilometres. The building is designed to spend part of the year underwater and none the worse for it.",
    scope: ["Architecture", "Landscape setting", "Passive shading"],
    stats: [
      ["180 m²", "Covered space"],
      ["80", "People, seated"],
      ["0", "Air conditioning"],
    ],
  },
  {
    slug: "kiln-studio",
    name: "Kiln Studio",
    place: "Dhaka",
    year: "2023",
    cat: "Commercial",
    size: "",
    area: "260 m²",
    image: "linear-gradient(135deg,#3A3A38,#0D0D0C)",
    desc: "A ceramics studio and gallery carved from a former godown. The old roof trusses stay exposed; new rooms are inserted as freestanding volumes so the original shed never gets lost.",
    brief: "The kiln had to go in first — its exhaust dictated the roof line. Everything else, from the glazing bench to the gallery wall, was planned around the making rather than the showing.",
    scope: ["Adaptive reuse", "Workshop design", "Museum lighting"],
    stats: [
      ["260 m²", "Studio + gallery"],
      ["1", "Two-storey kiln"],
      ["1948", "Year the shed was built"],
    ],
  },
  {
    slug: "terrace-block-a-c",
    name: "Terrace Block A–C",
    place: "Chattogram",
    year: "2022",
    cat: "Residential",
    size: "sm:col-span-2",
    area: "1,150 m²",
    image: "linear-gradient(135deg,#52524E,#121211)",
    desc: "Three stacked houses on a steep hill lot, sharing one stair and one garden. Each house turns its back on the neighbours and faces the bay.",
    brief: "The site drops four storeys across its length. Rather than fight the slope we stacked three separate houses that share a single, calm stair — families get to live close without sharing a floor.",
    scope: ["Architecture", "Retaining structure", "Shared landscape"],
    stats: [
      ["3", "Houses on one stair"],
      ["1,150 m²", "Total floor area"],
      ["18°", "Average slope"],
    ],
  },
  {
    slug: "mezzanine-office",
    name: "Mezzanine Office",
    place: "Dhaka",
    year: "2021",
    cat: "Commercial",
    size: "",
    area: "310 m²",
    image: "linear-gradient(135deg,#2E2E2C,#090908)",
    desc: "An office for a structural engineering firm, arranged around one long table. A mezzanine for drawing and model-making overlooks the workroom below.",
    brief: "Engineers spend their days arguing about structure, so the building had to prove a few points of its own: an honest steel frame, exposed bracing, and a floor that visibly does its job.",
    scope: ["Interiors", "Workplace strategy", "MEP coordination"],
    stats: [
      ["310 m²", "Workfloor"],
      ["1", "Sixty-foot table"],
      ["9 m", "Double-height void"],
    ],
  },
];

const CAPABILITIES = [
  ["Residential", "Houses, additions, and the occasional very patient renovation."],
  ["Civic", "Libraries, pavilions, and modest public rooms."],
  ["Adaptive reuse", "Old buildings given a second, more honest life."],
  ["Interiors", "Only when the structure starts it."],
];

const PRINCIPLES = [
  {
    title: "Build less, build once",
    body: "Every square metre we don't build is a square metre we don't have to heat, cool, or explain. We start by removing from the brief, not adding to it.",
  },
  {
    title: "Materials earn their place",
    body: "No cladding for its own sake, no finishes that exist to be photographed. A material stays if it does a job, ages well, and can be repaired by someone local.",
  },
  {
    title: "The plan argues first",
    body: "We resolve a building in plan before we let it speak in section or elevation. If the plan is honest, the outside is almost an afterthought.",
  },
];

const HOME_STATS = [
  ["09", "people in the studio"],
  ["17", "buildings completed"],
  ["2014", "year we started"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-[#F4F4EF]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to={BASE} className="font-display font-semibold text-[15px] tracking-tight">
          NORTHLINE
        </Link>
        <nav className="hidden items-center gap-10 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/50 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-ink ${
                active === l.key ? "text-ink underline underline-offset-4 decoration-[#121319]" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            to={`${BASE}/contact`}
            className="font-mono text-[10.5px] uppercase tracking-wide bg-[#121319] px-3.5 py-2 text-[#F4F4EF] transition-opacity hover:opacity-85"
          >
            Start a project
          </Link>
        </div>
        <MobileNav links={NAV} panelClassName="bg-[#F4F4EF] border-ink/10 text-ink" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-ink/35">
      Northline — Demo website
    </footer>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl border-b border-ink/10 px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <h1 className="font-display font-semibold text-[15vw] leading-[0.88] tracking-tight sm:text-[80px] md:text-[104px]">
        BUILDINGS
        <br />
        THAT ARGUE
        <br />
        FOR THEMSELVES.
      </h1>
      <div className="mt-8 flex items-end justify-between">
        <p className="max-w-[30ch] font-mono text-[11px] uppercase tracking-wide text-ink/45">
          An architecture practice working across residential, civic, and adaptive-reuse projects since 2014.
        </p>
        <span className="hidden font-mono text-[11px] text-ink/45 sm:block">01 / DHAKA</span>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`${BASE}/project/${project.slug}`}
      className={`group block ${project.size || ""}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: project.image }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="font-mono text-[10px] uppercase tracking-wide text-white/70">{project.cat}</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-white/80">View project →</span>
        </div>
      </div>
      <div className="flex justify-between border-b border-ink/15 py-3">
        <span className="font-display text-[16px]">{project.name}</span>
        <span className="font-mono text-[10.5px] text-ink/45">
          {project.place}, {project.year}
        </span>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-mono text-[11px] uppercase tracking-wide text-ink/50">Selected work</h2>
          <Link to={`${BASE}/work`} className="font-mono text-[11px] text-ink/50 hover:text-ink">
            All work →
          </Link>
        </div>
        <div className="grid gap-1 sm:grid-cols-2">
          {PROJECTS.slice(0, 4).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl border-t border-ink/10 px-6 py-12 md:py-16">
        <div className="grid grid-cols-3 gap-8">
          {HOME_STATS.map(([n, d]) => (
            <Stat key={n} value={n} label={d} className="text-center" valueClass="text-[32px] md:text-[40px]" />
          ))}
        </div>
      </section>
    </>
  );
}

function WorkPage() {
  const [cat, setCat] = useState("All");
  const items = PROJECTS.filter((p) => cat === "All" || p.cat === cat);
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">Index of work</span>
      <h2 className="mt-3 font-display text-[28px] font-semibold tracking-tight md:text-[36px]">
        Everything, in order.
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
        <FilterChips
          options={CATS}
          active={cat}
          onChange={setCat}
          chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-ink/20 text-ink/60 hover:border-ink/50"
          activeClassName="bg-[#121319] text-[#F4F4EF] border-[#121319]"
        />
        <span className="font-mono text-[11px] text-ink/40">
          {items.length} project{items.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="mt-8 grid gap-1 sm:grid-cols-2">
        {items.length === 0 && (
          <p className="py-16 text-[13px] text-ink/40 sm:col-span-2">Nothing in that category yet.</p>
        )}
        {items.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectPage() {
  const params = useParams();
  const slug = (params["*"] || "").split("/")[1] || "";
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const project = idx === -1 ? null : PROJECTS[idx];
  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Project not found</p>
        <Link to={`${BASE}/work`} className="mt-4 inline-block font-mono text-[11px] uppercase tracking-wide text-ink underline">
          Back to all work
        </Link>
      </section>
    );
  }
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/45">
          <Link to={`${BASE}/work`} className="hover:text-ink">
            ← All work
          </Link>
          <span>
            {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>
        <h1 className="mt-10 font-display text-[34px] font-semibold leading-[0.95] tracking-tight sm:text-[52px]">
          {project.name}
        </h1>
        <div className="mt-6 grid grid-cols-2 gap-6 border-y border-ink/15 py-6 font-mono text-[11px] uppercase tracking-wide sm:grid-cols-4">
          {[
            ["Location", `${project.place}, Dhaka`],
            ["Year", project.year],
            ["Type", project.cat],
            ["Area", project.area],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-ink/40">{k}</div>
              <div className="mt-1 text-ink">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 aspect-[16/9] w-full" style={{ background: project.image }}>
          <div className="flex h-full items-end p-5">
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/60">{project.name}</span>
          </div>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-wide text-ink/45">Description</h2>
            <p className="text-[14.5px] leading-relaxed text-ink/75">{project.desc}</p>
          </div>
          <div>
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-wide text-ink/45">The brief</h2>
            <p className="text-[14.5px] leading-relaxed text-ink/75">{project.brief}</p>
          </div>
        </div>
        <div className="mt-12 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-wide text-ink/45">Scope</h2>
            <ul className="flex flex-col gap-2 text-[13.5px] text-ink/70">
              {project.scope.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-ink/35">+</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-6">
            {project.stats.map(([v, l]) => (
              <Stat key={l} value={v} label={l} valueClass="text-[22px]" />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl border-t border-ink/10 px-6">
        <div className="grid sm:grid-cols-2">
          <Link to={`${BASE}/project/${prev.slug}`} className="group border-b border-ink/10 py-6 sm:border-b-0 sm:border-r">
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/40">← Previous</span>
            <div className="mt-2 font-display text-[18px] group-hover:underline">{prev.name}</div>
          </Link>
          <Link to={`${BASE}/project/${next.slug}`} className="group border-b border-ink/10 py-6 text-right sm:border-b-0">
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/40">Next →</span>
            <div className="mt-2 font-display text-[18px] group-hover:underline">{next.name}</div>
          </Link>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl border-b border-ink/10 px-6 py-16 md:py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">About</span>
        <h2 className="mt-4 max-w-[16ch] font-display text-[30px] font-semibold leading-[0.98] tracking-tight sm:text-[44px]">
          A nine-person studio with no interest in style for its own sake.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="max-w-[58ch] text-[15px] leading-relaxed text-ink/70">
            Northline is based in Dhaka, working on houses, small civic buildings, and the occasional
            adaptive-reuse project. We keep projects few and slow — most take two to four years from
            first sketch to occupancy. We're not interested in style for its own sake; every material
            decision has to earn its place.
          </p>
          <p className="max-w-[58ch] text-[15px] leading-relaxed text-ink/70">
            The studio is small by design. The same four or five people stay on a job from the first
            site visit to the last snag list. It makes for slower delivery and better buildings — we
            think the trade is worth it.
          </p>
        </div>
        <div className="mt-12 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map(([n, d]) => (
            <div key={n} className="border border-ink/10 p-6">
              <h3 className="font-display text-[15px] font-semibold">{n}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink/55">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-[22px] font-semibold tracking-tight">How we work</h2>
          <Accordion items={PRINCIPLES} openClass="text-ink/70" />
        </div>
      </section>
      <section className="border-t border-ink/10 bg-[#121319] text-[#F4F4EF]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-3 gap-8">
            {HOME_STATS.map(([n, d]) => (
              <Stat key={n} value={n} label={d} className="text-center" valueClass="text-[32px] md:text-[40px]" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">Contact</span>
      <h2 className="mt-4 font-display text-[30px] font-semibold leading-tight tracking-tight sm:text-[44px]">
        Start a project.
      </h2>
      <p className="mt-4 max-w-[44ch] text-[14.5px] leading-relaxed text-ink/65">
        Tell us the site, the programme, and the rough ambition. We reply to every serious enquiry
        within three working days.
      </p>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {[
            ["Email", "studio@northline.arch"],
            ["Studio", "House 9, Road 27, Banani, Dhaka 1213"],
            ["Phone", "+880 1X-XXX XXXX"],
            ["New work", "Currently accepting briefs for 2025"],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-ink/15 pb-5">
              <div className="font-mono text-[10.5px] uppercase tracking-wide text-ink/45">{k}</div>
              <p className="mt-2 text-[14px] text-ink/80">{v}</p>
            </div>
          ))}
          <div className="aspect-[16/9] border border-ink/10 bg-[#121319]">
            <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-wide text-[#F4F4EF]/30">
              Map — House 9, Road 27, Banani
            </div>
          </div>
        </div>
        <div className="border border-ink/15 bg-white p-6 md:p-8">
          <h3 className="font-display text-[18px] font-semibold">Send an enquiry</h3>
          <p className="mt-2 mb-6 text-[12.5px] text-ink/50">
            A short paragraph is enough. We'll come back with a yes, a no, or a better question.
          </p>
          <ContactForm
            name="Your name"
            email="Email"
            message="Site, programme, ambition"
            submitLabel="Send enquiry"
            accent="#121319"
            successMessage="Thanks — your enquiry has been received. We'll reply within three working days."
          />
        </div>
      </div>
    </section>
  );
}

const PAGES = { "": HomePage, work: WorkPage, project: ProjectPage, about: AboutPage, contact: ContactPage };

export default function Northline() {
  return (
    <div className="min-h-screen bg-[#F4F4EF] font-body text-[#121319]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="northline" />
    </div>
  );
}
