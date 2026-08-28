export default function PricingToggle({ annual, onChange, labels = ["Monthly", "Annual"], className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`font-mono text-[10.5px] uppercase tracking-wide ${annual ? "opacity-50" : "opacity-100"}`}>
        {labels[0]}
      </span>
      <button
        onClick={() => onChange(!annual)}
        role="switch"
        aria-checked={annual}
        className="relative h-6 w-11 rounded-full border border-current/30"
      >
        <span
          className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-current transition-all ${
            annual ? "left-6" : "left-1"
          }`}
        />
      </button>
      <span className={`font-mono text-[10.5px] uppercase tracking-wide ${annual ? "opacity-100" : "opacity-50"}`}>
        {labels[1]}
      </span>
    </div>
  );
}
