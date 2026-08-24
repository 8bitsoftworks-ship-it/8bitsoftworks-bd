import DemoBadge from "../components/DemoBadge";

const FEATURES = [
  ["queue.run()", "Background jobs that retry themselves and tell you why they failed."],
  ["schema.diff", "See exactly what a migration will change before it runs."],
  ["logs.tail()", "Structured logs, searchable in under 200ms."],
];

export default function Kairo() {
  return (
    <div className="min-h-screen bg-[#0E0F13] text-[#E7E9E4] font-body">
      <header className="border-b border-white/8 sticky top-0 bg-[#0E0F13]/90 backdrop-blur z-40">
        <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-[14px] text-[#39D9A0]">kairo</span>
          <nav className="hidden sm:flex gap-7 font-mono text-[11px] text-white/45">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
          <a href="#start" className="font-mono text-[11px] px-3.5 py-2 bg-[#39D9A0] text-[#0E0F13] hover:bg-white transition-colors">
            Start free
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <span className="font-mono text-[11px] text-[#39D9A0]">v2.4.0 — now with schema diffing</span>
        <h1 className="font-display font-semibold text-[38px] sm:text-[54px] leading-[1.05] mt-5 max-w-[16ch]">
          Ship the boring parts faster.
        </h1>
        <p className="text-white/55 text-[15px] mt-5 max-w-[50ch] leading-relaxed">
          Kairo handles background jobs, migrations, and logging for small
          backend teams — so you spend less time babysitting infrastructure
          and more time shipping product.
        </p>
        <div className="flex gap-3 mt-8">
          <a href="#start" className="font-mono text-[11px] px-5 py-3.5 bg-[#39D9A0] text-[#0E0F13] hover:bg-white transition-colors">
            Start free
          </a>
          <a href="#product" className="font-mono text-[11px] px-5 py-3.5 border border-white/15 text-white hover:border-white/40 transition-colors">
            Read the docs
          </a>
        </div>

        <div className="mt-14 border border-white/10 bg-white/[0.02] p-1">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-[10px] text-white/30">~/app — kairo status</span>
          </div>
          <div className="p-5 font-mono text-[12px] leading-relaxed text-[#39D9A0]/90">
            <p>$ kairo status</p>
            <p className="text-white/40">queue.run()   142 jobs/min   0 failed</p>
            <p className="text-white/40">schema.diff   3 pending migrations</p>
            <p className="text-white/40">logs.tail()   streaming — 12k events/hr</p>
          </div>
        </div>
      </section>

      <section id="product" className="border-t border-white/8">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="font-mono text-[11px] uppercase tracking-wide text-white/40 mb-8">What's inside</h2>
          <div className="grid sm:grid-cols-3 gap-px bg-white/8">
            {FEATURES.map(([name, desc]) => (
              <div key={name} className="bg-[#0E0F13] p-6">
                <span className="font-mono text-[13px] text-[#39D9A0]">{name}</span>
                <p className="text-[13px] text-white/55 mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 grid sm:grid-cols-3 gap-6">
          {[
            ["Free", "$0", "1 project, community support"],
            ["Team", "$39/mo", "Unlimited projects, priority support"],
            ["Scale", "Talk to us", "SLA, SSO, dedicated infra"],
          ].map(([tier, price, desc]) => (
            <div key={tier} className="border border-white/10 p-6">
              <span className="font-mono text-[11px] uppercase tracking-wide text-white/40">{tier}</span>
              <div className="font-display font-semibold text-[24px] mt-2">{price}</div>
              <p className="text-[12.5px] text-white/45 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="start" className="border-t border-white/8 px-6 py-8 text-center font-mono text-[10px] uppercase tracking-wide text-white/30">
        Kairo — Demo website
      </footer>
      <DemoBadge siteId="kairo" dark />
    </div>
  );
}
