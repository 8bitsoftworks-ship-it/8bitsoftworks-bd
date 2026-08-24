import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import PreviewFrame from "../components/PreviewFrame";
import { getWebsiteById, formatPrice } from "../data/websites";

const STEPS = ["Website", "Your details", "Customization", "Summary", "Payment", "Done"];

export default function Checkout() {
  const { id } = useParams();
  const site = getWebsiteById(id);
  const [step, setStep] = useState(0);
  const [wantsCustomization, setWantsCustomization] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", notes: "" });

  if (!site) return <Navigate to="/websites" replace />;

  const total = site.price + (wantsCustomization ? 6000 : 0);
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <Link to={`/websites/${site.id}`} className="font-mono text-[10.5px] uppercase tracking-wide text-muted hover:text-ink">
        ← Back to {site.name}
      </Link>

      {/* Stepper */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 mb-10">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span
              className={`font-mono text-[10px] w-5 h-5 rounded-full flex items-center justify-center border ${
                i <= step ? "bg-ink text-paper border-ink" : "border-ink/20 text-muted"
              }`}
            >
              {i + 1}
            </span>
            <span className={`font-mono text-[10.5px] uppercase tracking-wide ${i <= step ? "text-ink" : "text-muted"}`}>
              {s}
            </span>
          </div>
        ))}
      </div>

      {/* Step 0: Website selected */}
      {step === 0 && (
        <div>
          <h1 className="font-display font-semibold text-[26px] text-ink mb-6">Website selected</h1>
          <div className="border border-ink/10 p-5 flex gap-5">
            <div className="w-32 aspect-[4/3] shrink-0">
              <PreviewFrame variant={site.preview} accent={site.accent} name={site.name} className="h-full w-full" showChrome={false} />
            </div>
            <div>
              <h2 className="font-display font-semibold text-[18px] text-ink">{site.name}</h2>
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted">{site.category}</span>
              <div className="font-mono text-[14px] text-ink mt-2 font-tabular">{formatPrice(site.price)}</div>
            </div>
          </div>
          <button onClick={next} className="mt-8 font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors">
            Continue
          </button>
        </div>
      )}

      {/* Step 1: Customer info */}
      {step === 1 && (
        <div>
          <h1 className="font-display font-semibold text-[26px] text-ink mb-6">Your details</h1>
          <div className="flex flex-col gap-4 max-w-md">
            <input
              className="border border-ink/15 px-3.5 py-3 text-[14px] bg-transparent"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border border-ink/15 px-3.5 py-3 text-[14px] bg-transparent"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="border border-ink/15 px-3.5 py-3 text-[14px] bg-transparent"
              placeholder="Business / brand name"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
            />
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={back} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
              Back
            </button>
            <button
              onClick={next}
              disabled={!form.name || !form.email}
              className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Customization options */}
      {step === 2 && (
        <div>
          <h1 className="font-display font-semibold text-[26px] text-ink mb-2">Customization</h1>
          <p className="text-[13.5px] text-muted mb-6 max-w-[52ch]">
            Buy the site as-is, or add customization now — we'll follow up with a short questionnaire either way.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setWantsCustomization(false)}
              className={`text-left border p-4 transition-colors ${!wantsCustomization ? "border-ink" : "border-ink/15"}`}
            >
              <div className="flex justify-between font-mono text-[12px] uppercase tracking-wide">
                <span>As-is</span>
                <span>{formatPrice(site.price)}</span>
              </div>
              <p className="text-[13px] text-muted mt-1">Exactly the demo you saw, with your content dropped in.</p>
            </button>
            <button
              onClick={() => setWantsCustomization(true)}
              className={`text-left border p-4 transition-colors ${wantsCustomization ? "border-ink" : "border-ink/15"}`}
            >
              <div className="flex justify-between font-mono text-[12px] uppercase tracking-wide">
                <span>With customization</span>
                <span>{formatPrice(site.price + 6000)}</span>
              </div>
              <p className="text-[13px] text-muted mt-1">Colors, type, copy, and section changes included.</p>
            </button>
          </div>
          <textarea
            className="w-full border border-ink/15 px-3.5 py-3 text-[13.5px] bg-transparent mt-4"
            rows={3}
            placeholder="Anything specific you'd like changed? (optional)"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
          <div className="flex gap-3 mt-8">
            <button onClick={back} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
              Back
            </button>
            <button onClick={next} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors">
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Order summary */}
      {step === 3 && (
        <div>
          <h1 className="font-display font-semibold text-[26px] text-ink mb-6">Order summary</h1>
          <div className="border border-ink/10 divide-y divide-ink/10">
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Website</span>
              <span className="text-ink">{site.name}</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Customer</span>
              <span className="text-ink">{form.name || "—"} ({form.email || "—"})</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Package</span>
              <span className="text-ink">{wantsCustomization ? "Ready-Made + Customization" : "Ready-Made"}</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[15px] font-medium">
              <span className="text-ink">Total</span>
              <span className="text-ink font-tabular">{formatPrice(total)}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={back} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
              Back
            </button>
            <button onClick={next} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors">
              Continue to payment
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Payment placeholder */}
      {step === 4 && (
        <div>
          <h1 className="font-display font-semibold text-[26px] text-ink mb-2">Payment</h1>
          <p className="text-[13.5px] text-muted mb-6 max-w-[52ch]">
            Payment processing isn't connected in this preview. In production, this
            step integrates a provider such as Stripe, Paddle, Polar, or Lemon Squeezy.
          </p>
          <div className="border border-dashed border-ink/25 p-6 text-center">
            <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Payment provider not configured
            </span>
            <div className="font-display font-semibold text-[22px] text-ink mt-2 font-tabular">
              {formatPrice(total)}
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={back} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
              Back
            </button>
            <button onClick={next} className="font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors">
              Confirm order
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Confirmation */}
      {step === 5 && (
        <div className="text-center py-10">
          <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">Order received</span>
          <h1 className="font-display font-semibold text-[28px] text-ink mt-3">
            Thanks, {form.name || "there"}.
          </h1>
          <p className="text-[13.5px] text-muted mt-2 max-w-[46ch] mx-auto">
            We'll email {form.email || "you"} within one business day to confirm details
            and kick off {wantsCustomization ? "your customization" : "deployment"} for {site.name}.
          </p>
          <Link to="/websites" className="inline-block mt-8 font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
            Back to catalog
          </Link>
        </div>
      )}
    </div>
  );
}
