import { useState } from "react";

const WEBSITE_TYPES = [
  "Business",
  "Ecommerce",
  "Restaurant",
  "Portfolio",
  "SaaS",
  "Booking",
  "Blog",
  "Web App",
  "Other",
];

const BUDGETS = ["Under ৳15,000", "৳15,000–30,000", "৳30,000–60,000", "৳60,000+", "Not sure yet"];
const TIMELINES = ["ASAP", "2–4 weeks", "1–2 months", "Flexible"];

function Field({ label, hint, children }) {
  return (
    <div className="border-b border-ink/10 pb-6">
      <label className="block font-mono text-[10.5px] uppercase tracking-wide text-muted mb-2.5">
        {label}
      </label>
      {children}
      {hint && <p className="text-[12px] text-muted mt-2">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border border-ink/15 px-3.5 py-3 text-[14px] text-ink placeholder:text-muted/70 focus:border-ink/40 transition-colors";

export default function Custom() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState("Business");
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [timeline, setTimeline] = useState(TIMELINES[1]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-5 md:px-8 py-24 md:py-32 text-center">
        <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">Request sent</span>
        <h1 className="font-display font-semibold text-[30px] md:text-[38px] text-ink mt-3 leading-tight">
          Got it. We'll reply within one business day.
        </h1>
        <p className="text-[14px] text-muted mt-3">
          We'll come back with a couple of questions, a rough scope, and a
          real timeline — not a form-letter reply.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-14 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-wide text-mint">Custom Builds</span>
          <h1 className="font-display font-semibold text-[32px] md:text-[46px] mt-2 leading-tight">
            Nothing here? We'll build it.
          </h1>
          <p className="text-paper/65 text-[15px] mt-2 max-w-[50ch]">
            Tell us what you're trying to build. We'll turn the idea into a
            real website.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-7">
          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Name">
              <input required className={inputClass} type="text" name="name" placeholder="Your full name" />
            </Field>
            <Field label="Email">
              <input required className={inputClass} type="email" name="email" placeholder="you@company.com" />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Business / brand">
              <input className={inputClass} type="text" name="business" placeholder="Company or project name" />
            </Field>
            <Field label="Existing website" hint="Leave blank if you're starting from zero.">
              <input className={inputClass} type="url" name="existingSite" placeholder="https://" />
            </Field>
          </div>

          <Field label="Website type">
            <div className="flex flex-wrap gap-2">
              {WEBSITE_TYPES.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setType(t)}
                  className={`font-mono text-[10.5px] uppercase tracking-wide px-3 py-1.5 border transition-colors ${
                    type === t ? "bg-ink text-paper border-ink" : "border-ink/15 text-ink hover:border-ink/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Field>

          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Budget">
              <select
                className={inputClass}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Desired timeline">
              <select
                className={inputClass}
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
              >
                {TIMELINES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Features needed" hint="Booking, payments, multi-language, a members' area — whatever applies.">
            <textarea className={inputClass} rows={3} name="features" placeholder="List anything specific the site needs to do" />
          </Field>

          <Field label="Reference websites" hint="Sites whose feel — not necessarily content — you like.">
            <input className={inputClass} type="text" name="references" placeholder="Paste a few links" />
          </Field>

          <Field label="Project description">
            <textarea
              required
              className={inputClass}
              rows={5}
              name="description"
              placeholder="What are you building, and who is it for?"
            />
          </Field>

          <Field label="Attach files" hint="Brand assets, sketches, a brief — optional.">
            <div className="border border-dashed border-ink/20 px-4 py-6 text-center text-[13px] text-muted">
              Drop files here or click to upload
              <input type="file" multiple className="block mx-auto mt-2 text-[12px]" />
            </div>
          </Field>

          <button
            type="submit"
            className="self-start font-mono text-[12px] uppercase tracking-wide px-6 py-4 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
          >
            Send Project Request
          </button>
        </div>
      </form>
    </div>
  );
}
