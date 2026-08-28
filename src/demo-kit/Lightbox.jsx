export default function Lightbox({ items, index, onClose, onMove }) {
  if (index === null || index === undefined || index < 0) return null;
  const item = items[index];
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/92 backdrop-blur-sm p-5 md:p-8" onClick={onClose}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-wide text-white/60">{item.label}</span>
        <button onClick={onClose} aria-label="Close" className="text-white/70 hover:text-white text-[18px] leading-none">
          Close
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center py-6" onClick={(e) => e.stopPropagation()}>
        <div className="h-full w-full max-w-3xl" style={{ background: item.bg }} />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMove(-1);
          }}
          className="font-mono text-[10.5px] uppercase tracking-wide text-white/70 hover:text-white"
        >
          ← Prev
        </button>
        <span className="font-mono text-[10.5px] text-white/50 font-tabular">
          {index + 1} / {items.length}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMove(1);
          }}
          className="font-mono text-[10.5px] uppercase tracking-wide text-white/70 hover:text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
