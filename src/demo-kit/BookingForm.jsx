import { useState } from "react";

export default function BookingForm({
  fields,
  submitLabel = "Submit",
  accent = "#000",
  textClass = "text-white",
  className = "",
  successMessage = "Thank you — your request has been received. We'll confirm by email shortly.",
}) {
  const [values, setValues] = useState({});
  const [done, setDone] = useState(false);

  const set = (key, val) => setValues((v) => ({ ...v, [key]: val }));

  if (done) {
    return (
      <div className={`${className} ${textClass}`}>
        <p className="text-[14px] leading-relaxed opacity-80">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      className={`flex flex-col gap-4 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      {fields.map((f) =>
        f.type === "select" ? (
          <label key={f.key} className="flex flex-col gap-1.5">
            <span className="font-mono text-[10.5px] uppercase tracking-wide opacity-60">{f.label}</span>
            <select
              value={values[f.key] || ""}
              onChange={(e) => set(f.key, e.target.value)}
              required={f.required !== false}
              className="border bg-transparent px-3 py-2.5 text-[14px]"
            >
              <option value="" disabled>
                {f.placeholder || "Select…"}
              </option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <label key={f.key} className="flex flex-col gap-1.5">
            <span className="font-mono text-[10.5px] uppercase tracking-wide opacity-60">{f.label}</span>
            <input
              type={f.type || "text"}
              value={values[f.key] || ""}
              onChange={(e) => set(f.key, e.target.value)}
              required={f.required !== false}
              placeholder={f.placeholder}
              className="border bg-transparent px-3 py-2.5 text-[14px]"
            />
          </label>
        )
      )}
      <button
        type="submit"
        className="py-3.5 text-center text-[12px] uppercase tracking-wide transition-opacity hover:opacity-85"
        style={{ background: accent, color: "#fff" }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
