import DemoBadge from "../components/DemoBadge";

const PROJECTS = [
  { name: "Concrete House 04", place: "Gazipur, 2024", size: "col-span-2" },
  { name: "Riverside Pavilion", place: "Sylhet, 2023", size: "" },
  { name: "Kiln Studio", place: "Dhaka, 2023", size: "" },
  { name: "Terrace Block A–C", place: "Chattogram, 2022", size: "col-span-2" },
];

export default function Northline() {
  return (
    <div className="min-h-screen bg-[#F4F4EF] text-[#121319] font-body">
      <header className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <span className="font-display font-semibold text-[15px] tracking-tight">NORTHLINE</span>
          <nav className="hidden sm:flex gap-10 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink/50">
            <a href="#work" className="hover:text-ink">Work</a>
            <a href="#practice" className="hover:text-ink">Practice</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-ink/10">
        <h1 className="font-display font-semibold text-[15vw] sm:text-[80px] md:text-[104px] leading-[0.88] tracking-tight">
          BUILDINGS
          <br />
          THAT ARGUE
          <br />
          FOR THEMSELVES.
        </h1>
        <div className="mt-8 flex justify-between items-end">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink/45 max-w-[30ch]">
            An architecture practice working across residential, civic, and
            adaptive-reuse projects since 2014.
          </p>
          <span className="font-mono text-[11px] text-ink/45 hidden sm:block">01 / DHAKA</span>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="font-mono text-[11px] uppercase tracking-wide text-ink/50">Selected work</h2>
          <span className="font-mono text-[11px] text-ink/40">2019–2024</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-1">
          {PROJECTS.map((p) => (
            <div key={p.name} className={`group cursor-pointer ${p.size}`}>
              <div className="aspect-[16/10] bg-ink relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between py-3 border-b border-ink/15">
                <span className="font-display text-[16px]">{p.name}</span>
                <span className="font-mono text-[10.5px] text-ink/45">{p.place}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="practice" className="border-t border-ink/10 bg-ink text-[#F4F4EF]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-3 gap-10">
          <h2 className="font-display font-semibold text-[26px] leading-tight md:col-span-1">
            The practice
          </h2>
          <p className="md:col-span-2 text-[15px] text-[#F4F4EF]/65 leading-relaxed max-w-[62ch]">
            Northline is a nine-person studio based in Dhaka, working on
            houses, small civic buildings, and the occasional adaptive-reuse
            project. We keep projects few and slow — most take two to four
            years from first sketch to occupancy. We're not interested in
            style for its own sake; every material decision has to earn its
            place.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="font-display font-semibold text-[22px]">Start a project</h2>
          <p className="font-mono text-[11px] text-ink/45 mt-2">studio@northline.arch</p>
        </div>
        <div className="font-mono text-[11px] text-ink/45 text-right">
          <p>House 9, Road 27</p>
          <p>Banani, Dhaka 1213</p>
        </div>
      </section>

      <footer className="border-t border-ink/10 px-6 py-6 text-center font-mono text-[10px] uppercase tracking-wide text-ink/35">
        Northline — Demo website
      </footer>
      <DemoBadge siteId="northline" />
    </div>
  );
}
