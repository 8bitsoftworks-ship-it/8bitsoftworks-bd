import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import PreviewFrame from "../components/PreviewFrame";
import { getWebsiteById, formatPrice } from "../data/websites";
import { STUDIO, PAYMENTS, PAYMENT_ORDER, HOSTING, AD_CREDIT, discountFor } from "../data/siteConfig";
import { useAuth, addOrder } from "../data/auth";

const CONTACT_EMAIL = STUDIO.email;

const STEPS = ["Website", "Your details", "Customization", "Hosting", "Summary", "Payment", "Done"];

function StepHeading({ children, sub }) {
  return (
    <div className="mb-6">
      <h1 className="font-display font-semibold text-[26px] text-ink">{children}</h1>
      {sub && <p className="text-[13.5px] text-muted mt-1 max-w-[56ch]">{sub}</p>}
    </div>
  );
}

const inputClass = "field";

function NavButtons({ onBack, onNext, nextLabel = "Continue", backDisabled, nextDisabled }) {
  return (
    <div className="flex gap-3 mt-8">
      <button
        onClick={onBack}
        disabled={backDisabled}
        className="btn-ghost"
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="btn-primary"
      >
        {nextLabel}
      </button>
    </div>
  );
}

export default function Checkout() {
  const { id } = useParams();
  const site = getWebsiteById(id);

  const [step, setStep] = useState(0);
  const [wantsCustomization, setWantsCustomization] = useState(false);
  const [needsHosting, setNeedsHosting] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", business: "", phone: "", notes: "" });
  const [method, setMethod] = useState("redotpay");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [adCredit, setAdCredit] = useState(false);
  const user = useAuth();

  if (!site) return <Navigate to="/websites" replace />;

  const pm = PAYMENTS[method];
  const subtotal = site.price + (wantsCustomization ? 6000 : 0);
  const discount = discountFor(subtotal, adCredit);
  const total = subtotal - discount;

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  function paymentFieldValue(key) {
    return paymentDetails[key] || "";
  }
  function setPaymentField(key, value) {
    setPaymentDetails((d) => ({ ...d, [key]: value }));
  }

  const paymentFieldsValid = pm.fields.every((f) => paymentFieldValue(f.key).trim().length > 0);

  function buildEmailBody() {
    const orderId = "8BIT-" + Date.now().toString().slice(-6);
    const lines = [
      `NEW ORDER ${orderId}`,
      ``,
      `Website: ${site.name} (${site.category})`,
      `Package: ${wantsCustomization ? "Ready-Made + Customization" : "Ready-Made"}`,
      `Customization notes: ${form.notes || "—"}`,
      ``,
      `Hosting: ${needsHosting ? `${HOSTING.freeMonths} months free hosting (in collaboration with 8BiT Softworks)` : "Customer already has hosting"}`,
      ``,
      `Customer name: ${form.name}`,
      `Customer email: ${form.email}`,
      `Business / brand: ${form.business || "—"}`,
      `Phone: ${form.phone || "—"}`,
      ``,
      `Payment method: ${pm.name}`,
      `Account paid to: ${pm.accountLabel} ${pm.account}`,
    ];
    pm.fields.forEach((f) => {
      lines.push(`${f.label}: ${paymentFieldValue(f.key)}`);
    });
    lines.push(
      ``,
      `Subtotal: ${formatPrice(subtotal)}`,
      `Footer-credit discount (${AD_CREDIT.percent}%): ${adCredit ? "-" + formatPrice(discount) : "—"}`,
      `Total paid: ${formatPrice(total)}`,
      ``,
      `Send the customer their website once payment is verified.`,
    );
    return lines.join("\n");
  }

  function confirmOrder() {
    const orderId = "8BIT-" + Date.now().toString().slice(-6);
    const subject = `Order ${orderId} — ${site.name} (${pm.name}) from ${form.name}`;
    const body = buildEmailBody();
    if (user) {
      addOrder({
        id: orderId,
        site: site.name,
        method: pm.name,
        total,
        status: "Pending",
        date: new Date().toISOString().slice(0, 10),
      });
    }
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    next();
  }

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
          <StepHeading sub="This is the design you're buying. Customization happens in the next steps.">
            Website selected
          </StepHeading>
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
          <NavButtons onNext={next} onBack={back} backDisabled />
        </div>
      )}

      {/* Step 1: Customer info */}
      {step === 1 && (
        <div>
          <StepHeading sub="We'll use these details to confirm the order and send you the finished site.">
            Your details
          </StepHeading>
          <div className="flex flex-col gap-4 max-w-md">
            <input className={inputClass} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={inputClass} placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className={inputClass} placeholder="Business / brand name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
            <input className={inputClass} placeholder="Phone number (optional)" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <NavButtons onBack={back} onNext={next} nextDisabled={!form.name || !form.email} />
        </div>
      )}

      {/* Step 2: Customization */}
      {step === 2 && (
        <div>
          <StepHeading sub="Buy the site as-is, or add customization now — either way we'll follow up with a short questionnaire.">
            Customization
          </StepHeading>
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
            className={`${inputClass} w-full mt-4`}
            rows={3}
            placeholder="Anything specific you'd like changed? (optional)"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
          <NavButtons onBack={back} onNext={next} />
        </div>
      )}

      {/* Step 3: Hosting */}
      {step === 3 && (
        <div>
          <StepHeading sub="We arrange hosting for every purchase — in collaboration with 8BiT Softworks.">
            Hosting
          </StepHeading>
          <div className="border border-mint-dim/40 bg-mint/10 p-4 mb-4 flex gap-3 items-start">
            <span className="font-mono text-[10px] uppercase tracking-wide text-mint-dim shrink-0 mt-0.5">Included</span>
            <p className="text-[13px] text-ink leading-relaxed">
              <strong>{HOSTING.title}.</strong> {HOSTING.note}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setNeedsHosting(true)}
              className={`text-left border p-4 transition-colors ${needsHosting ? "border-ink" : "border-ink/15"}`}
            >
              <div className="flex justify-between font-mono text-[12px] uppercase tracking-wide">
                <span>{HOSTING.title} with my purchase</span>
                <span className="text-mint-dim">FREE</span>
              </div>
              <p className="text-[13px] text-muted mt-1">We set it up for you as part of the purchase. Best for anyone without hosting yet.</p>
            </button>
            <button
              onClick={() => setNeedsHosting(false)}
              className={`text-left border p-4 transition-colors ${!needsHosting ? "border-ink" : "border-ink/15"}`}
            >
              <div className="flex justify-between font-mono text-[12px] uppercase tracking-wide">
                <span>I already have hosting</span>
                <span>—</span>
              </div>
              <p className="text-[13px] text-muted mt-1">We'll deploy to your existing domain or hosting account instead.</p>
            </button>
          </div>
          <NavButtons onBack={back} onNext={next} />
        </div>
      )}

      {/* Step 4: Summary */}
      {step === 4 && (
        <div>
          <StepHeading sub="Review the order. You can add the footer-credit discount for 2% off below.">
            Order summary
          </StepHeading>
          <div className="border border-ink/10 divide-y divide-ink/10">
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Website</span>
              <span className="text-ink">{site.name}</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Customer</span>
              <span className="text-ink">{form.name} ({form.email})</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Package</span>
              <span className="text-ink">{wantsCustomization ? "Ready-Made + Customization" : "Ready-Made"}</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Hosting</span>
              <span className="text-ink">{needsHosting ? `${HOSTING.freeMonths} months free` : "Customer's existing hosting"}</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[13.5px]">
              <span className="text-muted">Payment method</span>
              <span className="text-ink">{pm.name}</span>
            </div>
            <div className="flex justify-between px-5 py-4 text-[15px] font-medium">
              <span className="text-ink">Subtotal</span>
              <span className="text-ink font-tabular">{formatPrice(subtotal)}</span>
            </div>
            {adCredit && (
              <div className="flex justify-between px-5 py-4 text-[13.5px]">
                <span className="text-muted">Footer-credit discount ({AD_CREDIT.percent}%)</span>
                <span className="text-mint-dim font-tabular">−{formatPrice(discount)}</span>
              </div>
            )}
            <div className="flex justify-between px-5 py-4 text-[16px] font-medium bg-ink/[0.03]">
              <span className="text-ink">Total</span>
              <span className="text-ink font-tabular">{formatPrice(total)}</span>
            </div>
          </div>

          <button
            onClick={() => setAdCredit((v) => !v)}
            className={`mt-5 w-full text-left border p-4 flex items-start gap-3 transition-colors ${
              adCredit ? "border-mint-dim" : "border-ink/15"
            }`}
          >
            <span
              className={`mt-0.5 inline-flex items-center justify-center h-5 w-5 border shrink-0 ${
                adCredit ? "bg-mint border-mint" : "border-ink/25"
              }`}
            >
              {adCredit && <span className="text-ink text-[12px] leading-none">✓</span>}
            </span>
            <span>
              <span className="block text-[13.5px] text-ink">
                {AD_CREDIT.label} <span className="text-mint-dim font-tabular">— save {formatPrice(discount)}</span>
              </span>
              <span className="block text-[12px] text-muted mt-1 leading-relaxed">{AD_CREDIT.note}</span>
            </span>
          </button>

          <NavButtons onBack={back} onNext={next} nextLabel="Continue to payment" />
        </div>
      )}

      {/* Step 5: Payment */}
      {step === 5 && (
        <div>
          <StepHeading sub="Pay by your preferred method, then enter the confirmation details so we can verify your order.">
            Payment
          </StepHeading>

          {/* Method selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            {PAYMENT_ORDER.map((key) => {
              const p = PAYMENTS[key];
              return (
                <button
                  key={key}
                  onClick={() => {
                    setMethod(key);
                    setPaymentDetails({});
                  }}
                  className={method === key ? "chip-on" : "chip"}
                >
                  {p.name}
                </button>
              );
            })}
          </div>

          {/* Account + instructions */}
          <div className="border border-ink/10 p-5 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted">{pm.accountLabel}</span>
              <span className="font-mono text-[20px] text-ink font-tabular tracking-wide">{pm.account}</span>
            </div>
            <p className="text-[12.5px] text-muted mt-3 leading-relaxed">{pm.instructions}</p>
            <div className="border-t border-ink/10 mt-4 pt-4 flex items-center justify-between font-mono text-[12px]">
              <span className="text-muted uppercase tracking-wide text-[10px]">Amount to send</span>
              <span className="text-ink font-tabular">{formatPrice(total)}</span>
            </div>
          </div>

          {/* Confirmation fields */}
          <div className="flex flex-col gap-3">
            {pm.fields.map((f) => (
              <div key={f.key}>
                <label className="font-mono text-[10px] uppercase tracking-wide text-muted mb-1.5 block">
                  {f.label}
                </label>
                <input
                  className={`${inputClass} w-full`}
                  placeholder={f.placeholder}
                  value={paymentFieldValue(f.key)}
                  onChange={(e) => setPaymentField(f.key, e.target.value)}
                  required={f.required}
                />
              </div>
            ))}
          </div>

          <p className="text-[12px] text-muted mt-4 leading-relaxed">
            You'll receive a confirmation email once we verify the transaction. Delivery of the site begins right
            after that.
          </p>

          <NavButtons onBack={back} onNext={confirmOrder} nextLabel="Confirm & send order" nextDisabled={!paymentFieldsValid} />
        </div>
      )}

      {/* Step 6: Done */}
      {step === 6 && (
        <div className="text-center py-10">
          <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">Order sent</span>
          <h1 className="font-display font-semibold text-[28px] text-ink mt-3">
            Thanks, {form.name || "there"}.
          </h1>
          <p className="text-[13.5px] text-muted mt-2 max-w-[50ch] mx-auto leading-relaxed">
            Your email draft for <span className="text-ink">{CONTACT_EMAIL}</span> has opened in your mail app with
            your full order details. Hit send and we'll verify your payment, then kick off{" "}
            {wantsCustomization ? "your customization" : "deployment"} for {site.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/websites" className="inline-block font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
              Back to catalog
            </Link>
            <button
              onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}
              className="inline-block font-mono text-[12px] uppercase tracking-wide px-6 py-3.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors"
            >
              Open email again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
