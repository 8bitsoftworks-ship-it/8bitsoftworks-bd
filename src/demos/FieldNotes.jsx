import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DemoPage from "../demo-kit/DemoPage";
import MobileNav from "../demo-kit/MobileNav";
import FilterChips from "../demo-kit/FilterChips";
import DemoBadge from "../components/DemoBadge";

const BASE = "/demos/field-notes";

const ACCENT_DIM = "#1F8F69";

const NAV = [
  { key: "index", to: BASE, label: "Index" },
  { key: "about", to: `${BASE}/about`, label: "About" },
];

const NOTES = [
  {
    slug: "a-note-on-grids",
    id: "001",
    date: "2024.03",
    year: "2024",
    title: "A note on grids",
    desc: "Why most web grids are decorative, not structural.",
    tags: ["web", "layout", "css"],
    body: [
      "A grid is structural when removing it would change the meaning of the page. A grid is decorative when it only changes how the page looks.",
      "Most of what ships as a design-system grid is the second kind. Twelve columns, a set of gutters, a max width — and then the content is placed by taste, one item at a time, until the system is more ornament than instruction.",
      "The useful move is smaller. Define a handful of real alignment rules: where text starts, where images may break, what never gets centered. Then let the layout be boring.",
      "Boring layouts age. Clever ones date.",
    ],
  },
  {
    slug: "rebuilding-the-archive",
    id: "002",
    date: "2024.01",
    year: "2024",
    title: "Rebuilding the archive",
    desc: "Migrating twelve years of notes to plain markdown.",
    tags: ["archive", "markdown", "writing"],
    body: [
      "Twelve years of notes lived in six formats across four services. Two of those services no longer exist. The rest exported poorly, in exactly the ways you'd expect.",
      "The migration was a weekend project that became a two-month one. Every file became plain markdown with a date in the filename and a slug in the frontmatter. Nothing else.",
      "The surprising part is how little I miss the tools. The predictable part is that I now trust the archive — which was always the actual requirement, hiding under the word migration.",
    ],
  },
  {
    slug: "slow-software",
    id: "003",
    date: "2023.11",
    year: "2023",
    title: "Slow software",
    desc: "On choosing boring tools that last.",
    tags: ["tools", "philosophy", "software"],
    body: [
      "Fast software gets built in weeks. Slow software gets built in years, because every choice had to survive a second opinion from someone who wasn't in the room.",
      "Boring tools are boring for a reason: their failure modes are known. The exciting library has a blog post about its future; the boring one has a decade of bug reports and a patient maintainer.",
      "I now optimise for the software that will still run in five years, not the software that demos best on a Tuesday.",
    ],
  },
  {
    slug: "reading-list-q3",
    id: "004",
    date: "2023.08",
    year: "2023",
    title: "Reading list, Q3",
    desc: "Six books on systems and one on bread.",
    tags: ["reading", "books"],
    body: [
      "The Design of Everyday Things — finally, and it holds up. Slow Productivity — three ideas worth stealing. Working in Public — the best thing I've read about why open source is weird.",
      "Also: a genuinely odd book about sourdough fermentation as a systems problem, which was more useful for thinking about software schedules than any management book I've read this year.",
    ],
  },
  {
    slug: "a-year-without-social",
    id: "005",
    date: "2023.05",
    year: "2023",
    title: "A year without social",
    desc: "What changed, what didn't.",
    tags: ["attention", "habits"],
    body: [
      "A year off the feeds. The headline result: I read more, and I'm less anxious. The less headline result: my professional network quietly contracted to the people who email back.",
      "The surprising loss was serendipity — the random link, the stranger's thread, the thing you weren't looking for. Email does not reproduce it.",
      "The plan isn't to go back, but I've stopped pretending the offline version is strictly better. It's a different trade.",
    ],
  },
];

const READING = [
  ["The Design of Everyday Things", "Don Norman"],
  ["Slow Productivity", "Cal Newport"],
  ["Working in Public", "Nadia Eghbal"],
];

function useActive() {
  const params = useParams();
  return (params["*"] || "").split("/").filter(Boolean)[0] || "";
}

function Header() {
  const active = useActive();
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-[#F4F4EF]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6 text-[12px]">
        <Link to={BASE} className="font-semibold">
          field-notes /
        </Link>
        <nav className="hidden items-center gap-6 font-mono uppercase tracking-wide text-ink/50 sm:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#121319] ${
                active === l.key ? "text-[#121319] underline underline-offset-4" : ""
              }`}
              style={active === l.key ? { textDecorationColor: ACCENT_DIM } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <MobileNav links={NAV} panelClassName="bg-[#F4F4EF] border-ink/10 text-[#121319]" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-3 border-t border-ink/15 px-6 py-8 text-[11px] text-ink/40 sm:flex-row sm:items-center">
      <span>Field Notes — Demo website</span>
      <div className="flex gap-5">
        <a href="mailto:hello@example.com" className="hover:text-[#121319]">
          Email
        </a>
        <a href="#" className="hover:text-[#121319]">
          RSS
        </a>
        <a href="#" className="hover:text-[#121319]">
          GitHub
        </a>
      </div>
    </footer>
  );
}

function IndexPage() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const q = query.trim().toLowerCase();
  const years = ["All", ...Array.from(new Set(NOTES.map((n) => n.year))).sort().reverse()];
  const items = NOTES.filter((n) => {
    const okYear = year === "All" || n.year === year;
    const okQuery =
      q === "" ||
      n.title.toLowerCase().includes(q) ||
      n.desc.toLowerCase().includes(q) ||
      n.tags.some((t) => t.toLowerCase().includes(q));
    return okYear && okQuery;
  });
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-16 md:pt-20">
        <p className="max-w-[54ch] text-[13px] leading-relaxed text-ink/50">
          A running index of things I've built, broken, and written about. Updated when there's
          something worth logging — not on a schedule.
        </p>
      </section>
      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-6 py-2">
          <div className="flex flex-col gap-4 border-b border-ink/15 py-5 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-3 text-[13px] text-ink/50">
              <span className="font-mono text-[11px] uppercase tracking-wide">find</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search the index…"
                className="w-full border-b border-ink/30 bg-transparent px-1 py-1.5 font-mono text-[13px] outline-none placeholder:text-ink/35 focus:border-[#1F8F69] sm:w-56"
              />
            </label>
            <FilterChips
              options={years}
              active={year}
              onChange={setYear}
              chipClassName="font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border border-ink/20 text-ink/55 hover:border-ink/50"
              activeClassName="bg-[#39D9A0] text-[#121319] border-[#39D9A0]"
            />
          </div>
          <div className="flex items-center justify-between py-3 font-mono text-[10.5px] uppercase tracking-wide text-ink/35">
            <span>Index</span>
            <span>
              {items.length} of {NOTES.length} entries
            </span>
          </div>
          {items.length === 0 && (
            <p className="py-14 text-center font-mono text-[12px] text-ink/40">
              Nothing in the index matches that query.
            </p>
          )}
          {items.map((n) => (
            <Link
              key={n.id}
              to={`${BASE}/note/${n.slug}`}
              className="group flex flex-col gap-1 border-b border-ink/10 py-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-10 shrink-0 text-[11px] text-[#1F8F69]">{n.id}</span>
              <span className="w-16 shrink-0 text-[11px] text-ink/40">{n.date}</span>
              <span className="text-[14px] transition-colors group-hover:text-[#1F8F69]">{n.title}</span>
              <span className="text-[12px] text-ink/45 sm:ml-auto sm:max-w-[32ch] sm:text-right">{n.desc}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="mb-6 text-[11px] uppercase tracking-wide text-ink/40">Now reading</h2>
          <div className="flex flex-col gap-2">
            {READING.map(([title, author]) => (
              <a key={title} href="#" className="group flex justify-between border-b border-ink/10 py-2">
                <span className="text-[13.5px] transition-colors group-hover:text-[#1F8F69]">{title}</span>
                <span className="text-[11px] text-ink/40">{author}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function NotePage() {
  const params = useParams();
  const slug = (params["*"] || "").split("/")[1] || "";
  const idx = NOTES.findIndex((n) => n.slug === slug);
  const note = idx === -1 ? null : NOTES[idx];
  if (!note) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Note not found</p>
        <Link to={BASE} className="mt-4 inline-block font-mono text-[11px] uppercase tracking-wide underline">
          Back to the index
        </Link>
      </section>
    );
  }
  const prev = NOTES[(idx - 1 + NOTES.length) % NOTES.length];
  const next = NOTES[(idx + 1) % NOTES.length];
  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <Link to={BASE} className="font-mono text-[11px] uppercase tracking-wide text-ink/45 hover:text-[#121319]">
          ← Index
        </Link>
        <div className="mt-8 flex items-baseline gap-6 font-mono text-[11px] uppercase tracking-wide text-ink/40">
          <span className="text-[#1F8F69]">{note.id}</span>
          <span>{note.date}</span>
        </div>
        <h1 className="mt-4 text-[22px] leading-snug text-[#121319] sm:text-[28px]">{note.title}</h1>
        <p className="mt-3 text-[13px] text-ink/50">{note.desc}</p>
        <div className="mt-10 flex flex-col gap-5">
          {note.body.map((para, i) => (
            <p key={i} className="max-w-[62ch] text-[14px] leading-relaxed text-ink/75">
              {para}
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {note.tags.map((t) => (
            <span key={t} className="border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/50">
              {t}
            </span>
          ))}
        </div>
      </article>
      <section className="mx-auto max-w-3xl border-t border-ink/15 px-6">
        <div className="grid sm:grid-cols-2">
          <Link to={`${BASE}/note/${prev.slug}`} className="group border-b border-ink/15 py-6 sm:border-b-0 sm:border-r">
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/40">← {prev.id}</span>
            <div className="mt-2 text-[14px] transition-colors group-hover:text-[#1F8F69]">{prev.title}</div>
          </Link>
          <Link to={`${BASE}/note/${next.slug}`} className="group border-b border-ink/15 py-6 text-right sm:border-b-0">
            <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/40">{next.id} →</span>
            <div className="mt-2 text-[14px] transition-colors group-hover:text-[#1F8F69]">{next.title}</div>
          </Link>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <p className="text-[11px] uppercase tracking-wide text-ink/40">About</p>
        <div className="mt-4 grid gap-8 sm:grid-cols-[100px_1fr]">
          <span className="text-[11px] text-ink/40 uppercase">The person</span>
          <div className="flex flex-col gap-5">
            <p className="max-w-[56ch] text-[13px] leading-relaxed text-ink/70">
              I write software during the day and about it at night. This site is a personal index,
              not a portfolio pitch — most of what's here is unfinished on purpose.
            </p>
            <p className="max-w-[56ch] text-[13px] leading-relaxed text-ink/70">
              The notes are reverse-chronological by design: whatever's most recent is most true.
              Older entries are left as they were written, even where I'd now argue the other side.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-[100px_1fr]">
            <span className="text-[11px] uppercase tracking-wide text-ink/40">Colophon</span>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="mb-4 text-[11px] uppercase tracking-wide text-ink/40">Now reading</h2>
                <div className="flex flex-col gap-2">
                  {READING.map(([title, author]) => (
                    <a key={title} href="#" className="group flex justify-between gap-4 border-b border-ink/10 py-2">
                      <span className="text-[13px] transition-colors group-hover:text-[#1F8F69]">{title}</span>
                      <span className="shrink-0 text-[11px] text-ink/40">{author}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-[11px] uppercase tracking-wide text-ink/40">Elsewhere</h2>
                <div className="flex flex-col gap-2 font-mono text-[12.5px]">
                  <a href="#" className="w-fit border-b border-ink/15 py-1 hover:text-[#1F8F69]">hello@example.com</a>
                  <a href="#" className="w-fit border-b border-ink/15 py-1 hover:text-[#1F8F69]">github.com/fieldnotes</a>
                  <a href="#" className="w-fit border-b border-ink/15 py-1 hover:text-[#1F8F69]">feed.xml</a>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    ["12", "years writing"],
                    ["63", "notes logged"],
                    ["4", "still drafts"],
                  ].map(([n, d]) => (
                    <div key={d}>
                      <div className="text-[22px] font-semibold" style={{ color: ACCENT_DIM }}>{n}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-wide text-ink/45">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const PAGES = { "": IndexPage, note: NotePage, about: AboutPage };

export default function FieldNotes() {
  return (
    <div className="min-h-screen bg-[#F4F4EF] font-mono text-[#121319]">
      <Header />
      <DemoPage pages={PAGES} />
      <Footer />
      <DemoBadge siteId="field-notes" />
    </div>
  );
}
