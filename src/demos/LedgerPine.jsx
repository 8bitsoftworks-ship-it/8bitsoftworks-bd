import DemoBadge from "../components/DemoBadge";

const SERVICES = [
  ["Small business", "Bookkeeping, VAT returns, and payroll — priced flat so the invoice is never a surprise."],
  ["Founders & startups", "Clean cap tables, investor-ready numbers, and a CFO who answers your email."],
  ["Property owners", "Rental accounts, capital allowances, and portfolio structuring for landlords."],
  ["Individuals", "Tax returns that are actually done early, with a plain-language summary."],
];

const TEAM = [
  ["Fahim Islam", "Partner, ACA", "Formerly Big 4, now bored of PowerPoint"],
  ["Sharmin Akter", "Senior Accountant", "VAT and payroll, without the jargon"],
  ["Rafiq Chowdhury", "Tax Advisor", "Two decades of filing, zero surprises"],
];

const NUMBERS = [
  ["18", "years in practice"],
  ["260+", "clients who stay"],
  ["3×", "check before anything leaves"],
];

export default function LedgerPine() {
  return (
    <div className="min-h-screen bg-[#EEF0E7] text-[#1E2418] font-body">
      <header className="border-b border-[#1E2418]/10">
        <div className="mx-auto max-w-6xl px-6 h-18 py-4 flex items-center justify-between">
          <span className="font-display font-semibold text-[15px] tracking-tight">
            LEDGER <span className="text-[#2F5D45]">&</span> PINE
          </span>
          <nav className="hidden sm:flex gap-8 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#1E2418]/55">
            <a href="#services" className="hover:text-[#1E2418]">Services</a>
            <a href="#team" className="hover:text-[#1E2418]">Team</a>
            <a href="#contact" className="hover:text-[#1E2418]">Contact</a>
          </nav>
          <a href="#contact" className="font-mono text-[10.5px] uppercase tracking-wide bg-[#2F5D45] text-white px-3.5 py-2 hover:bg-[#1E2418] transition-colors">
            Book a call
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-16 grid md:grid-cols-[1.3fr_1fr] gap-10 items-end">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2F5D45]">Chartered accountants · Dhaka</span>
          <h1 className="font-display font-semibold text-[40px] sm:text-[56px] leading-[1.02] mt-4">
            Your books,
            <br />
            <span className="italic text-[#2F5D45]">boring again.</span>
          </h1>
          <p className="text-[#1E2418]/60 text-[15px] mt-5 max-w-[46ch] leading-relaxed">
            We do the unglamorous work — bookkeeping, VAT, payroll, audit —
            so you can forget your accounts exist until it's useful to
            remember them.
          </p>
          <a href="#contact" className="inline-block mt-7 font-mono text-[11px] uppercase tracking-wide bg-[#2F5D45] text-white px-5 py-3.5 hover:bg-[#1E2418] transition-colors">
            Start a conversation
          </a>
        </div>

        <div className="grid grid-cols-3 gap-px bg-[#1E2418]/10">
          {NUMBERS.map(([n, d]) => (
            <div key={n} className="bg-[#EEF0E7] p-5">
              <div className="font-display font-semibold text-[26px] text-[#2F5D45]">{n}</div>
              <p className="text-[11px] text-[#1E2418]/55 mt-1 leading-snug">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-t border-[#1E2418]/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E2418]/50 mb-8">What we do</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[#1E2418]/10">
            {SERVICES.map(([name, desc]) => (
              <div key={name} className="bg-[#EEF0E7] p-6">
                <span className="font-display font-semibold text-[16px]">{name}</span>
                <p className="text-[13.5px] text-[#1E2418]/60 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-t border-[#1E2418]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1E2418]/50">The people you'll talk to</h2>
            <span className="font-mono text-[11px] text-[#1E2418]/40">9 total · shown: 3</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map(([name, role, bio]) => (
              <div key={name} className="border border-[#1E2418]/10 p-6">
                <h3 className="font-display font-semibold text-[16px]">{name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#2F5D45]">{role}</span>
                <p className="text-[12.5px] text-[#1E2418]/55 mt-3 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            ["Flat fees", "Agreed up front, in writing. No billable-hour surprises."],
            ["Real deadlines", "We file early and tell you what we need, when we need it."],
            ["Plain English", "Every return comes with a one-page summary you can read aloud."],
          ].map(([n, d]) => (
            <div key={n} className="border-t-2 border-[#2F5D45] pt-4">
              <div className="font-display font-semibold text-[18px]">{n}</div>
              <p className="text-[13px] text-[#1E2418]/60 mt-1.5 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[#1E2418]/10 bg-[#1E2418] text-[#EEF0E7]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[46ch]">
            <h2 className="font-display font-semibold text-[26px] md:text-[30px] leading-tight">
              Prefer to talk numbers over email?
            </h2>
            <p className="text-[#EEF0E7]/60 text-[14px] mt-3 leading-relaxed">
              Send over what's stressing you out — a late VAT return, a messy
              ledger, a letter from NBR. We'll reply with a straight answer.
            </p>
          </div>
          <div className="font-mono text-[13px] text-[#EEF0E7]/80 space-y-2 shrink-0">
            <p className="text-[#2F5D45]">hello@ledgerandpine.com</p>
            <p>+880 1X-XXXX XXXX</p>
            <p className="text-[#EEF0E7]/45">Level 4, House 22, Banani, Dhaka</p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-[#1E2418]/40">
        Ledger & Pine — Demo website
      </footer>
      <DemoBadge siteId="ledger-pine" />
    </div>
  );
}
