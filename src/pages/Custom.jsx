import { useState } from "react";
import { STUDIO, FORM_ENDPOINT } from "../data/siteConfig";

const CONTACT_EMAIL = STUDIO.email;

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
      <label className="label mb-2.5">{label}</label>
      {children}
      {hint && <p className="text-[12px] text-muted mt-2">{hint}</p>}
    </div>
  );
}

function buildMailtoFallback({ form, type, budget, timeline }) {
  const fd = new FormData(form);
  const subject = `Custom build request — ${type} (${fd.get("name") || "unknown"})`;
  const files = Array.from(fd.getAll("attachment"))
    .filter((f) => f.name)
    .map((f) => f.name);
  const lines = [
    `New custom build request`,
    ``,
    `Name: ${fd.get("name") || "—"}`,
    `Email: ${fd.get("email") || "—"}`,
    `Business / brand: ${fd.get("business") || "—"}`,
    `Existing website: ${fd.get("existingSite") || "—"}`,
    `Website type: ${type}`,
    `Budget: ${budget}`,
    `Timeline: ${timeline}`,
    `Features needed: ${fd.get("features") || "—"}`,
    `Reference websites: ${fd.get("references") || "—"}`,
    `Project description: ${fd.get("description") || "—"}`,
  ];
  if (files.length) {
    lines.push(
      ``,
      `Selected attachments (mail drafts can't carry files — please attach them):`,
      files.map((f) => `- ${f}`).join("\n")
    );
  }
  lines.push(``, `We'll reply within one business day.`);
  return {
    subject,
    body: lines.join("\n"),
  };
}

export default function Custom() {
  const [submitted, setSubmitted] = useState(null); // "form" | "mailto"
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState("Business");
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [timeline, setTimeline] = useState(TIMELINES[1]);
  const [fileCount, setFileCount] = useState(0);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = `Custom build request — ${type} (${fd.get("name") || "unknown"})`;

    fd.set("_subject", subject);
    fd.set("_template", "table");
    fd.set("_replyto", fd.get("email") || "");
    fd.set("_captcha", "false");
    fd.set("_honey", "");
    fd.set("Website type", type);
    fd.set("Budget", budget);
    fd.set("Timeline", timeline);

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitted("form");
        return;
      }
      throw new Error(data.message || "Could not submit the form.");
    } catch {
      // Fallback — never lose a request. Open a mailto draft with everything
      // pre-filled; file attachments are listed since drafts can't carry them.
      const draft = buildMailtoFallback({ form, type, budget, timeline });
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
      setSubmitted("mailto");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    const viaMailto = submitted === "mailto";
    return (
      <div className="mx-auto max-w-2xl px-5 md:px-8 py-24 md:py-32 text-center">
        <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">
          {viaMailto ? "Email draft opened" : "Request sent"}
        </span>
        <h1 className="font-display font-semibold text-[30px] md:text-[38px] text-ink mt-3 leading-tight">
          {viaMailto ? "Almost there — hit send." : "Got it. We'll reply within one business day."}
        </h1>
        <p className="text-[14px] text-muted mt-3 max-w-[52ch] mx-auto leading-relaxed">
          {viaMailto ? (
            <>
              Your email draft addressed to {CONTACT_EMAIL} has opened in your mail app — the details are
              pre-filled. Please attach the files you selected (mail drafts can't carry them automatically),
              then send.
            </>
          ) : (
            <>
              Your request — including any files you attached — has been emailed to {CONTACT_EMAIL}. We'll
              come back with a couple of questions, a rough scope, and a real timeline.
            </>
          )}
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
              <input required className="field" type="text" name="name" placeholder="Your full name" />
            </Field>
            <Field label="Email">
              <input required className="field" type="email" name="email" placeholder="you@company.com" />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Business / brand">
              <input className="field" type="text" name="business" placeholder="Company or project name" />
            </Field>
            <Field label="Existing website" hint="Leave blank if you're starting from zero.">
              <input className="field" type="url" name="existingSite" placeholder="https://" />
            </Field>
          </div>

          <Field label="Website type">
            <div className="flex flex-wrap gap-2">
              {WEBSITE_TYPES.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setType(t)}
                  className={type === t ? "chip-on" : "chip"}
                >
                  {t}
                </button>
              ))}
            </div>
          </Field>

          <div className="grid sm:grid-cols-2 gap-7">
            <Field label="Budget">
              <select className="field" value={budget} onChange={(e) => setBudget(e.target.value)}>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Desired timeline">
              <select className="field" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
                {TIMELINES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Features needed" hint="Booking, payments, multi-language, a members' area — whatever applies.">
            <textarea className="field resize-none" rows={3} name="features" placeholder="List anything specific the site needs to do" />
          </Field>

          <Field label="Reference websites" hint="Sites whose feel — not necessarily content — you like.">
            <input className="field" type="text" name="references" placeholder="Paste a few links" />
          </Field>

          <Field label="Project description">
            <textarea
              required
              className="field resize-none"
              rows={5}
              name="description"
              placeholder="What are you building, and who is it for?"
            />
          </Field>

          <Field label="Attach files" hint="Brand assets, sketches, a brief — optional. Up to 10MB total.">
            <label className="flex flex-col items-center justify-center gap-1.5 border border-dashed border-ink/20 px-4 py-7 text-center cursor-pointer hover:border-ink/40 transition-colors">
              <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink">
                {fileCount > 0 ? `${fileCount} file${fileCount !== 1 ? "s" : ""} selected` : "Drop files here or click to upload"}
              </span>
              <span className="text-[12px] text-muted">Any format — brand assets, briefs, sketches.</span>
              <input
                type="file"
                multiple
                name="attachment"
                className="sr-only"
                onChange={(e) => setFileCount(e.target.files?.length || 0)}
              />
            </label>
          </Field>

          {error && <p className="font-mono text-[11px] uppercase tracking-wide text-signal">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary self-start disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Send Project Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
