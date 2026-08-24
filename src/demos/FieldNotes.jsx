import DemoBadge from "../components/DemoBadge";

const ENTRIES = [
  ["001", "2024.03", "A note on grids", "Why most web grids are decorative, not structural."],
  ["002", "2024.01", "Rebuilding the archive", "Migrating twelve years of notes to plain markdown."],
  ["003", "2023.11", "Slow software", "On choosing boring tools that last."],
  ["004", "2023.08", "Reading list, Q3", "Six books on systems and one on bread."],
  ["005", "2023.05", "A year without social", "What changed, what didn't."],
];

export default function FieldNotes() {
  return (
    <div className="min-h-screen bg-[#F4F4EF] text-[#121319] font-mono">
      <header className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between text-[12px]">
          <span className="font-semibold">field-notes /</span>
          <nav className="flex gap-6 uppercase tracking-wide text-ink/50">
            <a href="#index" className="hover:text-ink">Index</a>
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 md:pt-20">
        <p className="text-[13px] text-ink/50 leading-relaxed max-w-[54ch]">
          A running index of things I've built, broken, and written about.
          Updated when there's something worth logging — not on a schedule.
        </p>
      </section>

      <section id="index" className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-6 py-2">
          {ENTRIES.map(([id, date, title, desc]) => (
            <a
              key={id}
              href="#"
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-b border-ink/10"
            >
              <span className="text-[11px] text-[#1F8F69] w-10 shrink-0">{id}</span>
              <span className="text-[11px] text-ink/40 w-16 shrink-0">{date}</span>
              <span className="text-[14px] group-hover:text-[#1F8F69] transition-colors">{title}</span>
              <span className="text-[12px] text-ink/45 sm:ml-auto sm:text-right sm:max-w-[32ch]">{desc}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-6 py-14 grid sm:grid-cols-[100px_1fr] gap-6">
          <span className="text-[11px] text-ink/40 uppercase">About</span>
          <p className="text-[13px] text-ink/70 leading-relaxed max-w-[56ch]">
            I write software during the day and about it at night. This site
            is a personal index, not a portfolio pitch — most of what's here
            is unfinished on purpose.
          </p>
        </div>
      </section>

      <section id="reading" className="border-t border-ink/15">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-[11px] text-ink/40 uppercase mb-6">Now reading</h2>
          <div className="flex flex-col gap-2">
            {[
              ["The Design of Everyday Things", "Don Norman"],
              ["Slow Productivity", "Cal Newport"],
              ["Working in Public", "Nadia Eghbal"],
            ].map(([title, author]) => (
              <a key={title} href="#" className="group flex justify-between py-2 border-b border-ink/10">
                <span className="text-[13.5px] group-hover:text-[#1F8F69] transition-colors">{title}</span>
                <span className="text-[11px] text-ink/40">{author}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-ink/15 px-6 py-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-[11px] text-ink/40">
        <span>Field Notes — Demo website</span>
        <div className="flex gap-5">
          <a href="mailto:hello@example.com" className="hover:text-ink">Email</a>
          <a href="#" className="hover:text-ink">RSS</a>
          <a href="#" className="hover:text-ink">GitHub</a>
        </div>
      </footer>
      <DemoBadge siteId="field-notes" />
    </div>
  );
}
