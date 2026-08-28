export default function Stat({ value, label, className = "", valueClass = "" }) {
  return (
    <div className={className}>
      <div className={`font-display text-[30px] leading-none ${valueClass}`}>{value}</div>
      <div className="mt-2 font-mono text-[10.5px] uppercase tracking-wide opacity-60">{label}</div>
    </div>
  );
}
