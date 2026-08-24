import { useState } from "react";
import DemoBadge from "../components/DemoBadge";

const SERVICES = [
  ["Physiotherapy", "Back, neck, and joint pain — hands-on treatment with a plan you can follow at home."],
  ["Osteopathy", "Whole-body assessment and gentle manual treatment for stiffness and old injuries."],
  ["Sports massage", "Recovery work for runners, lifters, and anyone who overdid it on Monday."],
  ["Occupational health", "Desk setup, repetitive strain, and return-to-work programmes for local teams."],
];

const PRACTITIONERS = [
  ["Nadia Rahman", "Principal Physio", "14 years, ex-national team clinic"],
  ["Sakib Hasan", "Osteopath", "Trained in London, homegrown patience"],
  ["Runa Akter", "Sports Therapist", "Marathon medic, run club founder"],
];

export default function Healwise() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-[#F4F8F4] text-[#1C2620] font-body">
      <header className="border-b border-[#1C2620]/10 sticky top-0 bg-[#F4F8F4]/95 backdrop-blur z-40">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-semibold text-[16px] tracking-tight">Healwise</span>
          <nav className="hidden sm:flex gap-7 font-mono text-[10.5px] uppercase tracking-wide text-[#1C2620]/55">
            <a href="#services" className="hover:text-[#1C2620]">Services</a>
            <a href="#team" className="hover:text-[#1C2620]">Practitioners</a>
            <a href="#appointment" className="hover:text-[#1C2620]">Appointments</a>
          </nav>
          <a href="#appointment" className="font-mono text-[10.5px] uppercase tracking-wide bg-[#1F8F69] text-white px-3.5 py-2 hover:bg-[#1C2620] transition-colors">
            Book an appointment
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1F8F69]">Clinic · Dhanmondi</span>
          <h1 className="font-display font-semibold text-[38px] sm:text-[54px] leading-[1.03] mt-4">
            Feel better,
            <br />
            <span className="italic text-[#1F8F69]">measured.</span>
          </h1>
          <p className="text-[#1C2620]/60 text-[15px] mt-5 max-w-[44ch] leading-relaxed">
            Every visit starts with an assessment, ends with a written plan,
            and follows up in a week. We treat the problem, not the
            appointment slot.
          </p>
          <div className="flex gap-3 mt-8">
            <a href="#appointment" className="font-mono text-[11px] uppercase tracking-wide bg-[#1F8F69] text-white px-5 py-3.5 hover:bg-[#1C2620] transition-colors">
              Book now
            </a>
            <a href="#services" className="font-mono text-[11px] uppercase tracking-wide border border-[#1C2620]/20 px-5 py-3.5 text-[#1C2620] hover:border-[#1C2620]/50 transition-colors">
              See services
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[4/5] bg-gradient-to-br from-[#1F8F69]/30 to-transparent border border-[#1C2620]/10" />
          <div className="flex flex-col gap-3 pt-8">
            <div className="aspect-[4/3] bg-gradient-to-tr from-[#1F8F69]/20 to-transparent border border-[#1C2620]/10" />
            <div className="bg-white border border-[#1C2620]/10 p-4">
              <span className="font-mono text-[10px] uppercase tracking-wide text-[#1F8F69]">Next available</span>
              <div className="font-display font-semibold text-[18px] mt-1">Today, 4:30pm</div>
              <p className="text-[12px] text-[#1C2620]/55 mt-0.5">Physio · 45 min · ৳1,200</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-[#1C2620]/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1C2620]/50 mb-8">What we do</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[#1C2620]/10">
            {SERVICES.map(([name, desc]) => (
              <div key={name} className="bg-[#F4F8F4] p-6">
                <span className="font-display font-semibold text-[16px]">{name}</span>
                <p className="text-[13.5px] text-[#1C2620]/60 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-t border-[#1C2620]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1C2620]/50 mb-8">Practitioners</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {PRACTITIONERS.map(([name, role, bio]) => (
              <div key={name}>
                <div className="aspect-square bg-gradient-to-br from-[#1F8F69]/20 to-transparent border border-[#1C2620]/10 mb-4" />
                <h3 className="font-display font-semibold text-[16px]">{name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#1F8F69]">{role}</span>
                <p className="text-[12.5px] text-[#1C2620]/55 mt-1.5">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            ["45 min", "Every session, including the first one."],
            ["Written plan", "You leave with exercises, not vague advice."],
            ["1-week check-in", "We call, you tell us if it's better."],
          ].map(([n, d]) => (
            <div key={n} className="border-t-2 border-[#1F8F69] pt-4">
              <div className="font-display font-semibold text-[20px] text-[#1F8F69]">{n}</div>
              <p className="text-[13px] text-[#1C2620]/60 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="appointment" className="border-t border-[#1C2620]/10 bg-[#1C2620] text-[#F4F8F4]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-semibold text-[26px] md:text-[30px] leading-tight">Book an appointment.</h2>
            <p className="text-[#F4F8F4]/60 text-[14px] mt-3 max-w-[42ch] leading-relaxed">
              Tell us what's going on and we'll suggest the right person.
              Same-week appointments usually available.
            </p>
            <div className="mt-8 font-mono text-[11px] text-[#F4F8F4]/70 space-y-1.5">
              <p>☎ 0X-XXXX XXXX</p>
              <p>✉ hello@healwise.clinic</p>
              <p>◉ House 12, Road 9, Dhanmondi, Dhaka</p>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="border border-[#1F8F69]/50 bg-[#1F8F69]/10 p-6">
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#1F8F69]">Request received</span>
                <p className="text-[14px] text-[#F4F8F4]/85 mt-2">
                  We'll call you within one working day to confirm a time.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input required className="bg-transparent border border-[#F4F8F4]/20 px-3.5 py-3 text-[13.5px] text-[#F4F8F4] placeholder:text-[#F4F8F4]/35" placeholder="Full name" />
                <input required type="tel" className="bg-transparent border border-[#F4F8F4]/20 px-3.5 py-3 text-[13.5px] text-[#F4F8F4] placeholder:text-[#F4F8F4]/35" placeholder="Phone number" />
                <select className="bg-[#1C2620] border border-[#F4F8F4]/20 px-3.5 py-3 text-[13.5px] text-[#F4F8F4]">
                  <option>Physiotherapy</option>
                  <option>Osteopathy</option>
                  <option>Sports massage</option>
                  <option>Not sure — advise me</option>
                </select>
                <textarea required rows={3} className="bg-transparent border border-[#F4F8F4]/20 px-3.5 py-3 text-[13.5px] text-[#F4F8F4] placeholder:text-[#F4F8F4]/35" placeholder="Briefly, what's going on?" />
                <button type="submit" className="self-start font-mono text-[11px] uppercase tracking-wide bg-[#1F8F69] text-white px-6 py-3.5 hover:bg-[#F4F8F4] hover:text-[#1C2620] transition-colors">
                  Request appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1C2620]/40">
        Healwise — Demo website
      </footer>
      <DemoBadge siteId="healwise" />
    </div>
  );
}
