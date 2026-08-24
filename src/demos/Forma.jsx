import DemoBadge from "../components/DemoBadge";

const SCHEDULE = [
  ["Mon", "06:00", "Strength", "Open"],
  ["Mon", "18:00", "Conditioning", "3 spots"],
  ["Tue", "06:00", "Strength", "Open"],
  ["Wed", "18:00", "Mobility", "Open"],
  ["Thu", "06:00", "Strength", "Full"],
  ["Fri", "17:30", "Conditioning", "Open"],
];

export default function Forma() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#181818] font-body">
      <header className="border-b border-[#181818]/10">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-[16px] tracking-tight">FORMA</span>
          <nav className="hidden sm:flex gap-7 font-mono text-[10.5px] uppercase tracking-wide text-[#181818]/50">
            <a href="#schedule" className="hover:text-[#181818]">Schedule</a>
            <a href="#coaches" className="hover:text-[#181818]">Coaches</a>
            <a href="#join" className="hover:text-[#181818]">Join</a>
          </nav>
          <a href="#join" className="font-mono text-[10.5px] uppercase tracking-wide bg-[#FF6A3D] text-[#181818] px-3.5 py-2 hover:bg-[#181818] hover:text-[#FF6A3D] transition-colors">
            Book a class
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <h1 className="font-display font-semibold text-[42px] sm:text-[62px] leading-[0.98] tracking-tight">
          Strength.
          <br />
          On a schedule.
        </h1>
        <p className="text-[#181818]/55 text-[15px] mt-6 max-w-[44ch] leading-relaxed">
          Small-group strength and conditioning, six days a week. One
          location, real coaching, a schedule that doesn't change every month.
        </p>
        <a href="#schedule" className="inline-block mt-8 font-mono text-[11px] uppercase tracking-wide bg-[#181818] text-[#FAFAF7] px-5 py-3.5 hover:bg-[#FF6A3D] hover:text-[#181818] transition-colors">
          See this week's classes
        </a>
      </section>

      <section id="schedule" className="border-t border-[#181818]/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="font-mono text-[11px] uppercase tracking-wide text-[#181818]/50 mb-8">This week</h2>
          <div className="flex flex-col">
            {SCHEDULE.map(([day, time, cls, avail], i) => (
              <div key={i} className="flex items-center justify-between border-b border-[#181818]/10 py-4">
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="font-mono text-[11px] w-8 text-[#181818]/45">{day}</span>
                  <span className="font-mono text-[11px] w-12 text-[#181818]/45">{time}</span>
                  <span className="font-display font-semibold text-[15px]">{cls}</span>
                </div>
                <span className={`font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 ${avail === "Full" ? "bg-[#181818]/10 text-[#181818]/40" : "bg-[#FF6A3D]/15 text-[#c04d24]"}`}>
                  {avail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="border-t border-[#181818]/10 bg-[#181818] text-[#FAFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 grid sm:grid-cols-3 gap-8">
          {["Rafi Hasan", "Mimi Chowdhury", "Tanvir Alam"].map((name) => (
            <div key={name}>
              <div className="aspect-square bg-[#FF6A3D]/20 mb-4" />
              <h3 className="font-display font-semibold text-[15px]">{name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#FAFAF7]/45">Head coach</span>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
        <h2 className="font-display font-semibold text-[26px] md:text-[32px]">First class is free.</h2>
        <a href="#" className="inline-block mt-6 font-mono text-[11px] uppercase tracking-wide bg-[#FF6A3D] text-[#181818] px-6 py-4 hover:bg-[#181818] hover:text-[#FF6A3D] transition-colors">
          Book your first class
        </a>
      </section>

      <section className="border-t border-[#181818]/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="font-mono text-[11px] uppercase tracking-wide text-[#181818]/50 mb-8">Membership</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              ["Drop-in", "৳600", "Per class, no commitment."],
              ["Monthly", "৳3,500", "Unlimited classes, one location."],
              ["Off-peak", "৳2,200", "All classes before 5pm, Mon–Fri."],
            ].map(([tier, price, desc]) => (
              <div key={tier} className="border border-[#181818]/10 p-6">
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-[#181818]/45">{tier}</span>
                <div className="font-display font-semibold text-[26px] mt-2">{price}</div>
                <p className="text-[12.5px] text-[#181818]/55 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#181818]/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-18">
          <h2 className="font-mono text-[11px] uppercase tracking-wide text-[#181818]/50 mb-8">Why people stay</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              ["“Six classes a week, same coaches, no surprises. That's the whole appeal.”", "— Farzana, member 2 yrs"],
              ["“The 6am session is the most consistent hour of my week.”", "— Imran"],
              ["“I moved three times and never left. Nothing else comes close.”", "— Shreya"],
            ].map(([quote, who]) => (
              <div key={who} className="border border-[#181818]/10 p-5 flex flex-col justify-between">
                <p className="text-[13px] text-[#181818]/70 leading-relaxed italic">{quote}</p>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#FF6A3D] mt-5">{who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#181818]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#181818]/40">
        Forma — Demo website
      </footer>
      <DemoBadge siteId="forma" />
    </div>
  );
}
