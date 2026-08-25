export default function BrowserFrame({ url, dark = false }) {
  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-2 border-b ${
        dark ? "border-white/10 bg-black/25" : "border-ink/10 bg-black/[0.03]"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/25" : "bg-ink/20"}`} />
      <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/25" : "bg-ink/20"}`} />
      <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/25" : "bg-ink/20"}`} />
      <span
        className={`ml-2 flex-1 truncate font-mono text-[10px] tracking-tight ${
          dark ? "text-white/45" : "text-ink/45"
        }`}
      >
        {url}
      </span>
      <span className={`font-mono text-[8px] uppercase tracking-wide ${dark ? "text-white/25" : "text-ink/30"}`}>
        https
      </span>
    </div>
  );
}
