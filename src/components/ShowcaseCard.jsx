import { useEffect, useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";
import { displayAddress } from "../data/showcases";

const BLOCK_TIMEOUT = 4000;

export default function ShowcaseCard({ item }) {
  const [preview, setPreview] = useState("loading"); // loading | ok | blocked
  const [retry, setRetry] = useState(0);
  const frameRef = useRef(null);
  const doneRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          timerRef.current = setTimeout(() => {
            if (!doneRef.current) setPreview("blocked");
          }, BLOCK_TIMEOUT);
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [retry]);

  function handleLoad() {
    doneRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    setPreview("ok");
  }

  function retryPreview() {
    doneRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    setPreview("loading");
    setRetry((r) => r + 1);
  }

  const address = displayAddress(item.url);

  return (
    <div className="group flex flex-col border border-ink/10 bg-white/40 hover:border-ink/25 transition-all duration-300 hover:shadow-[0_18px_40px_-20px_rgba(18,19,25,0.35)]">
      <div ref={frameRef} className="relative flex flex-col aspect-[4/3] overflow-hidden bg-paper">
        <BrowserFrame url={address} />

        <div className="relative flex-1 min-h-0">
          <div
            className={`absolute inset-0 z-0 flex items-center justify-center bg-paper transition-opacity duration-300 ${
              preview === "ok" ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-muted animate-pulse">
              Loading live preview…
            </span>
          </div>

          <iframe
            key={retry}
            src={item.url}
            title={item.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={handleLoad}
            onError={() => setPreview("blocked")}
            className={`relative z-[1] h-full w-full border-0 bg-white ${
              preview === "blocked" ? "pointer-events-none" : ""
            }`}
          />

          {preview === "blocked" && (
            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-3 bg-paper/95 px-6 text-center">
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted">
                Preview unavailable
              </span>
              <p className="text-[12.5px] text-ink leading-relaxed max-w-[34ch]">
                {address} doesn't allow embedding. Open it in a new tab to browse the live site.
              </p>
              <div className="flex gap-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-wide px-3 py-2 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
                >
                  Open directly ↗
                </a>
                <button
                  type="button"
                  onClick={retryPreview}
                  className="font-mono text-[10px] uppercase tracking-wide px-3 py-2 border border-ink/15 text-ink hover:border-ink/40 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="absolute right-2 top-2 z-[3] font-mono text-[9.5px] uppercase tracking-wide px-2.5 py-1.5 bg-ink text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Visit site ↗
          </a>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-[15px] text-ink leading-tight truncate">
              {item.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wide text-muted">
              {item.category || "Website build"}
            </span>
          </div>
          {item.featured && (
            <span className="shrink-0 font-mono text-[9px] uppercase tracking-wide px-1.5 py-0.5 bg-mint/15 text-mint-dim">
              Featured
            </span>
          )}
        </div>

        {item.description && (
          <p className="text-[13px] text-muted leading-relaxed line-clamp-2">{item.description}</p>
        )}

        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex-1 flex items-center justify-center gap-2 font-mono text-[10.5px] uppercase tracking-wide py-2.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
        >
          Visit site ↗
        </a>
      </div>
    </div>
  );
}
