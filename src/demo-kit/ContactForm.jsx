import { useState } from "react";

export default function ContactForm({
  name = "Name",
  email = "Email",
  message = "Message",
  submitLabel = "Send",
  accent = "#000",
  className = "",
  successMessage = "Thanks — your message has been sent. We'll get back to you soon.",
}) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className={className}>
        <p className="text-[14px] leading-relaxed opacity-75">{successMessage}</p>
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
      <input required placeholder={name} aria-label={name} className="border bg-transparent px-3.5 py-3 text-[14px]" />
      <input required type="email" placeholder={email} aria-label={email} className="border bg-transparent px-3.5 py-3 text-[14px]" />
      <textarea
        required
        placeholder={message}
        aria-label={message}
        rows={5}
        className="border bg-transparent px-3.5 py-3 text-[14px] resize-none"
      />
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
