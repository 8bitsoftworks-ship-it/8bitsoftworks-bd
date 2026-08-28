export default function SectionHeading({ eyebrow, title, lede, className = "", align = "left" }) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] opacity-60">{eyebrow}</div>
      )}
      <h2 className="font-display text-[24px] sm:text-[30px] leading-tight">{title}</h2>
      {lede && <p className="mt-3 text-[14px] opacity-60 max-w-[52ch] leading-relaxed">{lede}</p>}
    </div>
  );
}
