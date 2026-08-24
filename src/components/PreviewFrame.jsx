// Renders a small, styled representation of a demo website's real layout.
// Used on cards, in the hero grid, and (larger) on product pages.
// Each `variant` is a distinct hand-built composition — not a shared template.

function Chrome({ url, dark }) {
  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1.5 border-b ${
        dark ? "border-white/10 bg-black/20" : "border-ink/10 bg-black/[0.03]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/25" : "bg-ink/20"}`} />
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/25" : "bg-ink/20"}`} />
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/25" : "bg-ink/20"}`} />
      <span
        className={`ml-2 font-mono text-[9px] tracking-tight truncate ${
          dark ? "text-white/35" : "text-ink/35"
        }`}
      >
        {url}
      </span>
    </div>
  );
}

function Restaurant({ accent }) {
  return (
    <div className="h-full w-full bg-[#181512] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between">
        <div className="font-display text-white text-[10px] tracking-wide">SORA HOUSE</div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-[3px] w-3 bg-white/25" />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-1">
        <div className="font-display text-white text-[15px] leading-none">Dinner,</div>
        <div className="font-display italic text-[15px] leading-none" style={{ color: accent }}>
          done properly.
        </div>
      </div>
      <div className="flex gap-2 font-mono text-[7px] text-white/40">
        <span>01 — SNACKS</span>
        <span>02 — MAINS</span>
        <span style={{ color: accent }}>03 — WINE</span>
      </div>
    </div>
  );
}

function Architecture() {
  return (
    <div className="h-full w-full bg-[#F4F4EF] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between font-mono text-[8px] text-ink/50">
        <span>NORTHLINE</span>
        <span>WORK / ABOUT</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-1.5">
        <div className="col-span-2 bg-ink/85" />
        <div className="flex flex-col gap-1.5">
          <div className="flex-1 bg-ink/25" />
          <div className="flex-1 bg-ink/10" />
        </div>
      </div>
      <div className="font-display text-ink text-[13px] leading-none tracking-tight">
        Buildings that argue for themselves.
      </div>
    </div>
  );
}

function Saas({ accent }) {
  return (
    <div className="h-full w-full bg-[#101116] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[9px]" style={{ color: accent }}>
          kairo
        </div>
        <div className="font-mono text-[7px] text-white/30">v2.4.0</div>
      </div>
      <div className="font-display text-white text-[13px] leading-tight">
        Ship the boring parts faster.
      </div>
      <div className="flex-1 rounded-sm border border-white/10 p-1.5 flex flex-col gap-1 bg-white/[0.02]">
        <div className="flex gap-1">
          <div className="h-1 w-6 rounded-full" style={{ background: accent, opacity: 0.7 }} />
          <div className="h-1 w-3 rounded-full bg-white/15" />
        </div>
        <div className="grid grid-cols-3 gap-1 flex-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-white/[0.04] border border-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Ecommerce() {
  return (
    <div className="h-full w-full bg-[#EFEEE7] flex flex-col p-3 gap-1.5">
      <div className="flex items-center justify-between font-mono text-[8px] text-ink/50">
        <span>ARC SUPPLY</span>
        <span>CART (2)</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-ink/[0.08] flex items-end p-0.5">
            <div className="font-mono text-[6px] text-ink/40">৳{1200 + i * 150}</div>
          </div>
        ))}
      </div>
      <div className="font-display italic text-ink text-[11px]">Made in small batches.</div>
    </div>
  );
}

function Fitness({ accent }) {
  return (
    <div className="h-full w-full bg-[#181818] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between">
        <div className="font-display text-white text-[10px] tracking-wide">FORMA</div>
        <div
          className="font-mono text-[7px] px-1.5 py-0.5"
          style={{ background: accent, color: "#181818" }}
        >
          BOOK
        </div>
      </div>
      <div className="font-display text-white text-[14px] leading-none">
        Strength.<br />On a schedule.
      </div>
      <div className="flex-1 flex flex-col justify-end gap-1">
        {["MON 06:00", "MON 18:00", "WED 06:00"].map((t, i) => (
          <div key={i} className="flex justify-between font-mono text-[7px] text-white/45 border-t border-white/10 pt-0.5">
            <span>{t}</span>
            <span style={{ color: accent }}>OPEN</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Portfolio({ accent }) {
  return (
    <div className="h-full w-full bg-[#F4F4EF] flex flex-col p-3 gap-1.5 font-mono">
      <div className="text-[8px] text-ink/50">FIELD NOTES / INDEX</div>
      <div className="flex-1 flex flex-col justify-center gap-1">
        {[
          ["001", "A note on grids"],
          ["002", "Rebuilding the archive"],
          ["003", "Slow software"],
        ].map(([n, t]) => (
          <div key={n} className="flex justify-between text-[7.5px] text-ink/65 border-b border-ink/10 pb-0.5">
            <span style={{ color: accent }}>{n}</span>
            <span className="truncate ml-2">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Agency({ accent }) {
  return (
    <div className="h-full w-full flex flex-col p-3 gap-2" style={{ background: accent }}>
      <div className="font-mono text-[8px] text-ink/70">MONO STUDIO</div>
      <div className="flex-1 flex items-center">
        <div className="font-display text-ink text-[18px] leading-[0.95] tracking-tight">
          WE MAKE THE THING YOU'RE AVOIDING.
        </div>
      </div>
      <div className="font-mono text-[7px] text-ink/60">WORK — 12 PROJECTS</div>
    </div>
  );
}

function Cafe({ accent }) {
  return (
    <div className="h-full w-full bg-[#F2EEE4] flex flex-col p-3 gap-2">
      <div className="flex justify-between items-center font-mono text-[8px] text-ink/50">
        <span>EMBER & GRAIN</span>
        <span>7A–4P</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-display text-[15px]" style={{ color: accent }}>
          Coffee, bread,
        </div>
        <div className="font-display text-[15px] text-ink">and not much else.</div>
      </div>
      <div className="h-px bg-ink/10" />
      <div className="font-mono text-[7px] text-ink/45">42 GULSHAN AVE</div>
    </div>
  );
}

function Travel({ accent }) {
  return (
    <div className="h-full w-full bg-[#F4EFE8] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between font-mono text-[8px] text-ink/50">
        <span>VELLORE</span>
        <span>TRIPS / DESTINATIONS</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-display text-[17px] leading-none text-ink">
          Lisbon, four ways.
        </div>
        <div className="font-mono text-[8px] mt-1" style={{ color: accent }}>
          8 DAYS · €1,400 · SMALL GROUP
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-[4/3]" style={{ background: i === 0 ? accent : "#D8D2C6" }} />
        ))}
      </div>
    </div>
  );
}

function Wellness({ accent }) {
  return (
    <div className="h-full w-full bg-[#F2F7F2] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between font-mono text-[8px] text-ink/50">
        <span>HEALWISE</span>
        <span className="px-1.5 py-0.5" style={{ background: accent, color: "#fff" }}>BOOK</span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-1">
        <div className="font-display text-[15px] leading-none text-ink">Feel better,</div>
        <div className="font-display italic text-[15px] leading-none" style={{ color: accent }}>
          measured.
        </div>
      </div>
      <div className="flex gap-1.5">
        {["PHYSIO", "OSTEO", "MASSAGE"].map((s) => (
          <div key={s} className="flex-1 border border-ink/10 px-1 py-1 font-mono text-[6.5px] text-ink/55">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function Finance({ accent }) {
  return (
    <div className="h-full w-full bg-[#EEF0E7] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between font-mono text-[8px] text-ink/50">
        <span>LEDGER & PINE</span>
        <span>CHARTERED ACCOUNTANTS</span>
      </div>
      <div className="flex-1 flex items-center">
        <div className="font-display text-[15px] leading-[1.05] text-ink">
          Your books,
          <br />
          <span style={{ color: accent }}>boring again.</span>
        </div>
      </div>
      <div className="border-t border-ink/10 pt-1.5 font-mono text-[7px] text-ink/45">
        Vat · Payroll · Tax · Audit
      </div>
    </div>
  );
}

function Realestate({ accent }) {
  return (
    <div className="h-full w-full bg-[#F3EFE7] flex flex-col p-3 gap-2">
      <div className="flex items-center justify-between font-mono text-[8px] text-ink/50">
        <span>OPENLOT</span>
        <span>234 LISTINGS</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-ink/[0.07] flex flex-col justify-end p-1">
            <div className="font-mono text-[6px] text-ink/45">৳{2.4 + i * 0.7}M</div>
            <div className="h-px mt-0.5" style={{ background: accent }} />
          </div>
        ))}
      </div>
      <div className="font-mono text-[7px] text-ink/45">BANANI · DHANMONDI · GULSHAN</div>
    </div>
  );
}

const VARIANTS = {
  restaurant: Restaurant,
  architecture: Architecture,
  saas: Saas,
  ecommerce: Ecommerce,
  fitness: Fitness,
  portfolio: Portfolio,
  agency: Agency,
  cafe: Cafe,
  travel: Travel,
  wellness: Wellness,
  finance: Finance,
  realestate: Realestate,
};

export default function PreviewFrame({ variant, accent = "#39D9A0", name, className = "", showChrome = true, url }) {
  const Comp = VARIANTS[variant] || Restaurant;
  const dark = variant === "saas" || variant === "restaurant" || variant === "agency" || variant === "fitness";
  return (
    <div className={`overflow-hidden border border-ink/10 bg-white ${className}`}>
      {showChrome && <Chrome url={url || `8bit.site/${(name || "").toLowerCase().replace(/\s+/g, "-")}`} dark={dark} />}
      <div className="w-full h-full">
        <Comp accent={accent} />
      </div>
    </div>
  );
}
