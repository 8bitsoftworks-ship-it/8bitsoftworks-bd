import { useState } from "react";
import { STUDIO } from "../data/siteConfig";

const CONTACT_EMAIL = STUDIO.email;

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Message from ${fd.get("name") || "website visitor"}`;
    const body = [
      `Name: ${fd.get("name") || "—"}`,
      `Email: ${fd.get("email") || "—"}`,
      ``,
      `${fd.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-4xl px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-14">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">Contact</span>
        <h1 className="font-display font-semibold text-[32px] md:text-[40px] text-ink mt-3 leading-tight">
          Say hello.
        </h1>
        <p className="text-[14px] text-muted mt-3 max-w-[40ch] leading-relaxed">
          For a full project brief, use{" "}
          <a href="/custom" className="text-ink underline underline-offset-4">
            Request a Build
          </a>{" "}
          instead — it gets you a faster, more specific reply. For everything
          else, this works fine.
        </p>

        <div className="mt-8 flex flex-col gap-2 font-mono text-[13px]">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink hover:text-mint-dim">
            {CONTACT_EMAIL}
          </a>
          <span className="text-muted">{STUDIO.location}</span>
        </div>
      </div>

      <div>
        {sent ? (
          <div className="border border-mint-dim/40 bg-mint/10 p-6">
            <p className="text-[14px] text-ink">
              Your email draft has opened in your mail app addressed to {CONTACT_EMAIL} — hit send and we'll get
              back to you shortly.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input required name="name" className="border border-ink/15 px-3.5 py-3 text-[14px] bg-transparent" placeholder="Name" />
            <input required name="email" type="email" className="border border-ink/15 px-3.5 py-3 text-[14px] bg-transparent" placeholder="Email" />
            <textarea required name="message" rows={5} className="border border-ink/15 px-3.5 py-3 text-[14px] bg-transparent" placeholder="What's on your mind?" />
            <button type="submit" className="self-start font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
