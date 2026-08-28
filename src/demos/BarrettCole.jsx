import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const AREAS = [
  { n: "01", title: "Commercial & Corporate", blurb: "Formation, partnership agreements, M&A, and the everyday counsel that keeps a company moving.", stat: "220+ deals closed" },
  { n: "02", title: "Real Estate", blurb: "Acquisitions, leases, and development work across commercial and residential property.", stat: "38 yrs of titles" },
  { n: "03", title: "Estates & Trusts", blurb: "Wills, trusts, and succession plans drafted to hold up long after the first reading.", stat: "4 generations served" },
  { n: "04", title: "Dispute Resolution", blurb: "Measured advocacy in negotiation, mediation, and the courtroom when it comes to that.", stat: "90% resolved pre-trial" },
];

const PROCESS = [
  ["Consultation", "A frank first meeting: what you need, what it costs, and whether we are the right firm for it."],
  ["Assessment", "We map the facts, the risk, and the options, then put it in writing you can actually read."],
  ["Execution", "Calm, methodical work. Updates when things change, not when nothing does."],
  ["Aftercare", "The matter closes, the relationship does not. We stay a call away for the follow-ups."],
];

const TEAM = [
  ["Eleanor Barrett", "Managing Partner", "Corporate & M&A"],
  ["Marcus Cole", "Partner", "Estates & Trusts"],
  ["Priya Raman", "Partner", "Dispute Resolution"],
  ["Julian Adeyemi", "Senior Associate", "Real Estate"],
];

const QUOTES = [
  ["The only counsel we have had who answers the phone on a Saturday and still sends a proper invoice.", "M. Delacroix — portfolio founder"],
  ["They walked us through a sale that had stalled for six months. Closed in nine weeks.", "R. Hsu — retail group"],
  ["Measured, thorough, never alarmist. Exactly what you want when the stakes are high.", "S. Okafor — family office"],
];

export default function BarrettCole() {
  const [open, setOpen] = useState(0);
  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#23201B] font-body">
      <header className="sticky top-0 z-40 border-b border-[#23201B]/10 bg-[#F5F1EA]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-serif text-[20px]">Barrett <span className="italic text-[#9A6B4F]">&amp;</span> Cole</a>
          <nav className="hidden gap-8 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#23201B]/55 sm:flex">
            <a href="#practice" className="hover:text-[#23201B]">Practice</a>
            <a href="#approach" className="hover:text-[#23201B]">Approach</a>
            <a href="#team" className="hover:text-[#23201B]">Team</a>
          </nav>
          <a href="#contact" className="bg-[#9A6B4F] px-4 py-2 font-mono text-[10.5px] uppercase tracking-wide text-[#F5F1EA] hover:bg-[#8A5D43]">Consult us</a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A6B4F]">Est. 1987 — Harbor District</span>
          <h1 className="mt-5 font-serif text-[52px] leading-[1.02] sm:text-[76px]">
            Counsel for the <span className="italic text-[#9A6B4F]">long run.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#23201B]/60">
            A small firm with a long memory. Barrett &amp; Cole advises founders,
            families, and building owners on the work that compounds — the deal,
            the dispute, and the document that outlives both.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="bg-[#23201B] px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#F5F1EA] hover:bg-[#9A6B4F]">Request a consultation</a>
            <a href="#practice" className="border border-[#23201B]/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wide text-[#23201B]/70 hover:border-[#9A6B4F] hover:text-[#9A6B4F]">Browse practice areas</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-[#9A6B4F]/15 blur-3xl" />
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(rgba(154,107,79,0.4) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="relative overflow-hidden border border-[#23201B]/10 bg-[#E9E2D6]" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(35,32,27,0.07) 0 1px, transparent 1px 88px)" }}>
            <div className="flex h-[380px] items-end justify-between px-6 pb-6">
              <span className="font-serif text-[130px] leading-none text-[#9A6B4F]/25">&amp;</span>
              <div className="mb-8 text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#23201B]/45">Four generations</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#23201B]/45">of quiet counsel</p>
              </div>
            </div>
            <div className="absolute right-6 top-6 border border-[#9A6B4F]/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9A6B4F]">Since 1987</div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#23201B]/10 bg-[#EFE9DF]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-12 sm:grid-cols-4">
          {[["38", "years in practice"], ["600+", "matters handled"], ["92%", "client retention"], ["3", "offices, one ethos"]].map(([n, label]) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="font-serif text-[44px] leading-none text-[#23201B]">{n}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#23201B]/45">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="practice" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A6B4F]">01 — Practice</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">Four desks, <span className="italic">one standard.</span></h2>
          </div>
          <p className="hidden max-w-[30ch] text-[13px] leading-relaxed text-[#23201B]/55 md:block">
            Deliberately narrow. We would rather be the best answer in four rooms than a passing one in twenty.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-[#23201B]/10 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a.n} className="group relative bg-[#F5F1EA] p-6 transition-colors hover:bg-[#EFE9DF]">
              <span className="font-mono text-[11px] text-[#9A6B4F]">{a.n}</span>
              <h3 className="mt-10 font-serif text-[22px] leading-snug">{a.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#23201B]/55">{a.blurb}</p>
              <span className="mt-8 block border-t border-[#23201B]/10 pt-4 font-mono text-[10px] uppercase tracking-wide text-[#9A6B4F]">{a.stat}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="border-t border-[#23201B]/10 bg-[#EFE9DF]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A6B4F]">02 — Approach</span>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">A process that <span className="italic">reduces noise.</span></h2>
            <p className="mt-5 max-w-[40ch] text-[14px] leading-relaxed text-[#23201B]/60">
              Four steps, each with a defined output. You always know where a
              matter stands, what it is costing, and what happens next.
            </p>
            <div className="mt-10 flex items-center gap-5 border-l-2 border-[#9A6B4F] pl-5">
              <span className="font-serif text-[56px] leading-none text-[#9A6B4F]/25">38</span>
              <p className="text-[12px] leading-relaxed text-[#23201B]/55">Years of following the same method — because the method is the promise.</p>
            </div>
          </div>
          <div className="flex flex-col">
            {PROCESS.map(([title, blurb], i) => (
              <button key={title} onClick={() => setOpen(i)} className="border-b border-[#23201B]/10 py-6 text-left">
                <div className="flex items-baseline justify-between gap-6">
                  <div className="flex items-baseline gap-5">
                    <span className={`font-mono text-[11px] ${open === i ? "text-[#9A6B4F]" : "text-[#23201B]/35"}`}>0{i + 1}</span>
                    <h3 className={`font-serif text-[22px] transition-colors ${open === i ? "text-[#23201B]" : "text-[#23201B]/55"}`}>{title}</h3>
                  </div>
                  <span className={`font-mono text-[14px] transition-colors ${open === i ? "text-[#9A6B4F]" : "text-[#23201B]/30"}`}>{open === i ? "−" : "+"}</span>
                </div>
                <p className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"}`}>
                  <span className="overflow-hidden text-[13px] leading-relaxed text-[#23201B]/55">{blurb}</span>
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A6B4F]">03 — Team</span>
        <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">The people who <span className="italic">sign the letters.</span></h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(([name, role, area]) => (
            <div key={name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden border border-[#23201B]/10 bg-[#E9E2D6]">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "radial-gradient(circle at 50% 30%, rgba(154,107,79,0.3), transparent 42%), radial-gradient(ellipse at 50% 105%, rgba(35,32,27,0.4), transparent 55%)" }} />
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(35,32,27,0.1) 0 1px, transparent 1px 14px)" }} />
                <div className="absolute left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9A6B4F]/35 blur-2xl" />
                <span className="absolute bottom-3 left-4 font-serif text-[13px] italic text-[#23201B]/45">{name.split(" ").map((w) => w[0]).join("")}</span>
              </div>
              <p className="mt-4 font-serif text-[19px]">{name}</p>
              <p className="mt-1 text-[12px] text-[#23201B]/55">{role}</p>
              <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#9A6B4F]">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#23201B]/10 bg-[#EFE9DF]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A6B4F]">04 — Testimonials</span>
            <span className="hidden font-serif text-[56px] italic leading-none text-[#23201B]/15 sm:block">“</span>
          </div>
          <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">What our clients <span className="italic">remember.</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {QUOTES.map(([q, who]) => (
              <figure key={who} className="flex flex-col justify-between border border-[#23201B]/10 bg-[#F5F1EA] p-6">
                <blockquote className="font-serif text-[17px] italic leading-relaxed text-[#23201B]/80">“{q}”</blockquote>
                <figcaption className="mt-8 font-mono text-[10px] uppercase tracking-wide text-[#9A6B4F]">{who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#9A6B4F]/15 blur-3xl" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(154,107,79,0.35) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9A6B4F]">Start the conversation</span>
          <h2 className="mx-auto mt-4 max-w-[18ch] font-serif text-[38px] leading-[1.05] sm:text-[56px]">
            Bring us the problem <span className="italic text-[#9A6B4F]">before it becomes one.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#top" className="bg-[#23201B] px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-[#F5F1EA] hover:bg-[#9A6B4F]">Book a consultation</a>
            <a href="#top" className="border border-[#23201B]/25 px-7 py-4 font-mono text-[11px] uppercase tracking-wide text-[#23201B]/70 hover:border-[#9A6B4F] hover:text-[#9A6B4F]">counsel@barrettcole.example</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#23201B]/10 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#23201B]/35">
        Barrett &amp; Cole — 40 Harbor Street — Demo website
      </footer>
      <DemoBadge siteId="barrett-cole" dark={false} />
    </div>
  );
}
