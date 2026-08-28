export default function PriceTier({
  name,
  price,
  desc,
  features = [],
  cta = "Choose",
  highlighted = false,
  accent = "#000",
  accentText = "#fff",
  className = "",
}) {
  return (
    <div
      className={`border p-6 flex flex-col ${highlighted ? "border-current" : ""} ${className}`}
      style={highlighted ? { borderColor: accent } : undefined}
    >
      <div className="font-mono text-[11px] uppercase tracking-wide opacity-60">{name}</div>
      <div className="mt-2 font-display text-[26px]">{price}</div>
      <p className="mt-2 text-[13px] opacity-60 leading-relaxed">{desc}</p>
      <ul className="mt-5 flex flex-col gap-2 text-[13px]">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="opacity-70">+</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 py-3 text-center text-[12px] uppercase tracking-wide transition-opacity hover:opacity-85"
        style={{ background: accent, color: accentText }}
      >
        {cta}
      </button>
    </div>
  );
}
