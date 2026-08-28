import { useState } from "react";

export default function Accordion({ items, defaultOpen = 0, className = "", openClass = "" }) {
  const [openIdx, setOpenIdx] = useState(defaultOpen);
  return (
    <div className={`divide-y ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="text-[15px]">{item.title}</span>
              <span className={`shrink-0 font-mono text-[14px] transition-transform ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            {isOpen && <div className={`pb-5 text-[13.5px] leading-relaxed opacity-75 ${openClass}`}>{item.body}</div>}
          </div>
        );
      })}
    </div>
  );
}
