import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav({ links, panelClassName = "", className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative sm:hidden ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex flex-col gap-[5px] p-2 -m-2"
      >
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
      </button>
      {open && (
        <div
          className={`absolute right-0 top-full mt-2 w-52 border p-2 flex flex-col gap-1 ${panelClassName}`}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 font-mono text-[11px] uppercase tracking-wide hover:opacity-100 opacity-70"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
