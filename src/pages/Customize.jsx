import { useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getWebsiteById } from "../data/websites";
import { STUDIO, FORM_ENDPOINT } from "../data/siteConfig";

const PAGES = ["Home", "About", "Services", "Contact"];

const FONT_PRESETS = {
  "Modern Sans": { display: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
  "Editorial Serif": { display: "'Fraunces', serif", body: "'Inter', sans-serif" },
  "Classic Mono": { display: "'JetBrains Mono', monospace", body: "'JetBrains Mono', monospace" },
  "Warm Serif": { display: "'Fraunces', serif", body: "'Fraunces', serif" },
};

const BUTTON_STYLES = ["Solid", "Outline", "Pill", "Sharp"];
const HEADER_STYLES = ["Left aligned", "Centered"];
const THEMES = ["Light", "Dark"];
const SECTIONS = ["Hero", "About", "Services", "Testimonials", "Contact"];

const CONTACT_EMAIL = STUDIO.email;

function Section({ title, children }) {
  return (
    <div className="border-t border-ink/10 pt-5">
      <h2 className="label mb-3">{title}</h2>
      {children}
    </div>
  );
}

const fieldClass = "field-sm";

function ColorField({ label, value, onChange }) {
  return (
    <label className="flex-1 text-[12px] text-muted flex items-center justify-between border border-ink/15 px-3 py-2 min-w-0">
      <span className="truncate">{label}</span>
      <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="h-6 w-8 shrink-0 bg-transparent" />
    </label>
  );
}

function ChoiceChips({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={value === o ? "chip-on" : "chip"}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center justify-between w-full text-left py-2.5 border border-ink/15 px-3.5"
    >
      <span className="text-[13px] text-ink">{label}</span>
      <span
        className={`relative inline-block h-5 w-9 transition-colors ${checked ? "bg-mint" : "bg-ink/15"}`}
      >
      <span
        className={`absolute top-0.5 h-4 w-4 bg-white shadow transition-transform ${checked ? "translate-x-5 left-0" : "translate-x-0.5 left-0"}`}
      />
      </span>
    </button>
  );
}

// Full-page printable preview that reflects every customization choice.
function PrintPreview({
  brand, accent, secondary, tertiary, font, buttonStyle, headerStyle, theme,
  heroTitle, heroDesc, ctaText, contactEmail, socials, visibleSections,
}) {
  const dark = theme === "Dark";
  const bg = dark ? "#121319" : "#ffffff";
  const fg = dark ? "#F4F1EA" : "#121319";
  const muted = dark ? "rgba(244,241,234,0.6)" : "rgba(18,19,25,0.6)";
  const border = dark ? "rgba(244,241,234,0.12)" : "rgba(18,19,25,0.1)";
  const fontStack = FONT_PRESETS[font] || FONT_PRESETS["Modern Sans"];
  const centered = headerStyle === "Centered";
  const btnRadius = buttonStyle === "Pill" ? "999px" : "0px";

  const btnPrimary = {
    background: accent,
    color: dark ? "#121319" : "#fff",
    border: "1px solid " + accent,
    borderRadius: btnRadius,
  };
  const btnSecondary = {
    background: "transparent",
    color: fg,
    border: `1px solid ${dark ? "rgba(244,241,234,0.3)" : "rgba(18,19,25,0.25)"}`,
    borderRadius: btnRadius,
  };

  const card = { background: dark ? "#1B1D24" : "#F4F5F0", border: `1px solid ${border}` };
  const socialsList = Object.entries(socials).filter(([, v]) => v);

  return (
    <div
      className="w-full"
      style={{ background: bg, color: fg, fontFamily: fontStack.body }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: border }}>
        <span className="font-semibold text-[15px]" style={{ fontFamily: fontStack.display, color: accent }}>
          {brand || "Your Brand"}
        </span>
        <div className="hidden sm:flex gap-5 font-mono text-[10px] uppercase tracking-wide" style={{ color: muted }}>
          {PAGES.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wide px-3 py-1.5" style={btnPrimary}>
          {ctaText || "Get Started"}
        </span>
      </div>

      {/* Hero */}
      {visibleSections.Hero && (
        <div className={`px-8 py-14 flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start text-left"}`}>
          <h1
            className="text-[30px] leading-[1.05] font-semibold max-w-[20ch]"
            style={{ fontFamily: fontStack.display, color: fg }}
          >
            {heroTitle || "A headline for your website"}
          </h1>
          <p className="text-[13px] max-w-[44ch] leading-relaxed" style={{ color: muted }}>
            {heroDesc || "A short line describing what you do and who it's for."}
          </p>
          <div className={`flex gap-2.5 mt-1 ${centered ? "justify-center" : ""}`}>
            <span className="font-mono text-[10px] uppercase tracking-wide px-4 py-2.5 inline-block" style={btnPrimary}>
              {ctaText || "Get Started"}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wide px-4 py-2.5 inline-block" style={btnSecondary}>
              Learn More
            </span>
          </div>
        </div>
      )}

      {/* About */}
      {visibleSections.About && (
        <div className="px-8 py-10 grid sm:grid-cols-2 gap-8 border-t" style={{ borderColor: border }}>
          <div className="aspect-[4/3]" style={{ background: `linear-gradient(135deg, ${secondary}33, transparent)`, border: `1px solid ${border}` }} />
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: accent }}>About</span>
            <h3 className="text-[18px] font-semibold mt-2" style={{ fontFamily: fontStack.display }}>Who you are, briefly.</h3>
            <p className="text-[12.5px] mt-2 leading-relaxed" style={{ color: muted }}>
              A couple of sentences about the story behind the business — what
              you do, why you started, and who it's for.
            </p>
          </div>
        </div>
      )}

      {/* Services */}
      {visibleSections.Services && (
        <div className="px-8 py-10 border-t" style={{ borderColor: border }}>
          <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: accent }}>Services</span>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {["Service one", "Service two", "Service three"].map((s, i) => (
              <div key={s} className="p-4" style={card}>
                <span className="text-[11px] font-mono" style={{ color: tertiary }}>0{i + 1}</span>
                <h4 className="text-[14px] font-semibold mt-1.5" style={{ fontFamily: fontStack.display }}>{s}</h4>
                <p className="text-[11.5px] mt-1.5 leading-relaxed" style={{ color: muted }}>
                  A short description of what this service involves.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {visibleSections.Testimonials && (
        <div className="px-8 py-10 border-t" style={{ borderColor: border }}>
          <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: accent }}>What clients say</span>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {["Great work, on time.", "Exactly what we needed.", "We'd hire them again."].map((q) => (
              <div key={q} className="p-4" style={card}>
                <p className="text-[12px] italic leading-relaxed">"{q}"</p>
                <span className="font-mono text-[9px] uppercase tracking-wide mt-3 inline-block" style={{ color: muted }}>— A happy client</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      {visibleSections.Contact && (
        <div className="px-8 py-10 border-t" style={{ borderColor: border }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-[18px] font-semibold" style={{ fontFamily: fontStack.display }}>Let's talk.</h3>
              <p className="text-[12px] mt-1" style={{ color: muted }}>{contactEmail || "hello@yourbusiness.com"}</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wide px-4 py-2.5 inline-block w-fit" style={btnPrimary}>
              Contact Us
            </span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-8 py-5 border-t flex flex-col sm:flex-row justify-between gap-2" style={{ borderColor: border }}>
        <span className="font-mono text-[9px] uppercase tracking-wide" style={{ color: muted }}>
          © {new Date().getFullYear()} {brand || "Your Brand"}
        </span>
        <div className="flex gap-4 font-mono text-[9px] uppercase tracking-wide" style={{ color: muted }}>
          {socialsList.length > 0
            ? socialsList.map(([k]) => <span key={k}>{k}</span>)
            : <span>Instagram · Facebook</span>}
        </div>
      </div>
    </div>
  );
}

export default function Customize() {
  const { id } = useParams();
  const site = getWebsiteById(id);

  const [brand, setBrand] = useState(site?.name || "");
  const [accent, setAccent] = useState(site?.accent || "#39D9A0");
  const [secondary, setSecondary] = useState("#2B2E38");
  const [tertiary, setTertiary] = useState("#39D9A0");
  const [font, setFont] = useState("Modern Sans");
  const [buttonStyle, setButtonStyle] = useState("Solid");
  const [headerStyle, setHeaderStyle] = useState("Left aligned");
  const [theme, setTheme] = useState(site?.theme === "dark" ? "Dark" : "Light");
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const [ctaText, setCtaText] = useState("Get Started");
  const [contactEmail, setContactEmail] = useState("");
  const [page, setPage] = useState("Home");
  const [socials, setSocials] = useState({ instagram: "", facebook: "", github: "", linkedin: "" });
  const [visibleSections, setVisibleSections] = useState({
    Hero: true,
    About: true,
    Services: true,
    Testimonials: true,
    Contact: true,
  });
  const [sent, setSent] = useState(null); // "form" | "mailto"
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [logoName, setLogoName] = useState("");
  const logoRef = useRef(null);

  if (!site) return <Navigate to="/websites" replace />;

  function buildEmailBody() {
    const activeSections = Object.entries(visibleSections)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(", ");
    const socialLines = Object.entries(socials)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    return [
      `Customization request for ${site.name}`,
      ``,
      `Your name: ${name || "—"}`,
      `Your email: ${customerEmail || "—"}`,
      ``,
      `— Design choices —`,
      `Brand name: ${brand || "—"}`,
      `Theme: ${theme}`,
      `Primary color: ${accent}`,
      `Secondary color: ${secondary}`,
      `Accent color: ${tertiary}`,
      `Font style: ${font}`,
      `Button style: ${buttonStyle}`,
      `Header style: ${headerStyle}`,
      `Pages previewed: ${page}`,
      `Visible sections: ${activeSections || "none"}`,
      ``,
      `— Content —`,
      `Hero title: ${heroTitle || "—"}`,
      `Hero description: ${heroDesc || "—"}`,
      `CTA text: ${ctaText || "—"}`,
      `Contact email on site: ${contactEmail || "—"}`,
      `Social links:\n${socialLines || "none"}`,
      ``,
      `We'll reply with a quote and timeline.`,
    ].join("\n");
  }

  async function sendRequest() {
    const subject = `Customization request — ${site.name} (${brand || "your brand"})`;
    const body = buildEmailBody();

    const fd = new FormData();
    fd.set("_subject", subject);
    fd.set("_template", "table");
    fd.set("_replyto", customerEmail || "");
    fd.set("_captcha", "false");
    fd.set("_honey", "");
    fd.set("Website", site.name);
    fd.set("Your name", name || "—");
    fd.set("Your email", customerEmail || "—");
    fd.set("Brand name", brand || "—");
    fd.set("Theme", theme);
    fd.set("Primary color", accent);
    fd.set("Secondary color", secondary);
    fd.set("Accent color", tertiary);
    fd.set("Font style", font);
    fd.set("Button style", buttonStyle);
    fd.set("Header style", headerStyle);
    fd.set("Visible sections", Object.entries(visibleSections).filter(([, v]) => v).map(([k]) => k).join(", ") || "none");
    fd.set("Hero title", heroTitle || "—");
    fd.set("Hero description", heroDesc || "—");
    fd.set("CTA text", ctaText || "—");
    fd.set("Contact email on site", contactEmail || "—");
    Object.entries(socials).filter(([, v]) => v).forEach(([k, v]) => fd.set(`Social · ${k}`, v));
    const logo = logoRef.current?.files?.[0];
    if (logo) fd.set("attachment", logo);

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSent("form");
        return;
      }
      throw new Error(data.message || "Could not submit the form.");
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent("mailto");
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <div className="border-b border-ink/10 px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4 no-print">
        <div>
          <Link to={`/websites/${site.id}`} className="font-mono text-[10.5px] uppercase tracking-wide text-muted hover:text-ink">
            ← Back to {site.name}
          </Link>
          <h1 className="font-display font-semibold text-[22px] md:text-[28px] text-ink mt-1">
            Make it yours.
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => window.print()}
            className="btn-ghost"
          >
            Print
          </button>
          <button
            onClick={sendRequest}
            disabled={!name || !customerEmail || sending}
            className="btn-primary"
          >
            {sending ? "Sending…" : "Send Customization Request"}
          </button>
        </div>
      </div>

      {sent && (
        <div className="mx-5 md:mx-8 mt-6 border border-mint-dim/40 bg-mint/10 px-4 py-3 text-[13px] text-ink no-print">
          {sent === "form" ? (
            <>
              Your customization request for {site.name} — including your logo if you uploaded one — has been
              emailed to {CONTACT_EMAIL}. We'll follow up with a quote and timeline.
            </>
          ) : (
            <>
              Your email draft addressed to {CONTACT_EMAIL} has opened in your mail app — please attach your
              logo before sending. We'll follow up with a quote and timeline for {site.name}.
            </>
          )}
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_400px]">
        {/* Preview */}
        <div className="p-5 md:p-8 lg:border-r border-ink/10 no-print">
          <div className="aspect-[16/10] w-full">
            <PrintPreview
              brand={brand}
              accent={accent}
              secondary={secondary}
              tertiary={tertiary}
              font={font}
              buttonStyle={buttonStyle}
              headerStyle={headerStyle}
              theme={theme}
              heroTitle={heroTitle}
              heroDesc={heroDesc}
              ctaText={ctaText}
              contactEmail={contactEmail}
              socials={socials}
              visibleSections={visibleSections}
            />
          </div>
          <p className="font-mono text-[10.5px] text-muted mt-3">
            Live prototype preview — the final build matches {site.name}'s full layout. Use Print to save this
            preview as a PDF.
          </p>
        </div>

        {/* Controls */}
        <div className="p-5 md:p-8 flex flex-col gap-8 no-print">
          {/* Contact for the request */}
          <Section title="Your details">
            <div className="flex flex-col gap-3">
              <input className={fieldClass} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className={fieldClass} type="email" placeholder="Your email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
            </div>
          </Section>

          <Section title="Brand">
            <div className="flex flex-col gap-3">
              <input className={fieldClass} placeholder="Brand name" value={brand} onChange={(e) => setBrand(e.target.value)} />
              <label className="text-[12px] text-muted flex items-center justify-between border border-dashed border-ink/20 px-3 py-2.5">
                {logoName || "Upload logo"}
                <input
                  ref={logoRef}
                  type="file"
                  accept="image/*"
                  className="text-[11px] max-w-[120px]"
                  onChange={(e) => setLogoName(e.target.files?.[0]?.name || "")}
                />
              </label>
            </div>
          </Section>

          <Section title="Colors">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <ColorField label="Primary" value={accent} onChange={setAccent} />
                <ColorField label="Secondary" value={secondary} onChange={setSecondary} />
              </div>
              <div className="flex gap-3">
                <ColorField label="Accent" value={tertiary} onChange={setTertiary} />
                <label className="flex-1 text-[12px] text-muted flex items-center justify-between border border-ink/15 px-3 py-2">
                  Theme
                  <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-transparent text-ink text-[12px]">
                    {THEMES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
              </div>
            </div>
          </Section>

          <Section title="Typography & style">
            <div className="flex flex-col gap-3">
              <div>
                <div className="font-mono text-[9.5px] uppercase tracking-wide text-muted mb-2">Font</div>
                <ChoiceChips options={Object.keys(FONT_PRESETS)} value={font} onChange={setFont} />
              </div>
              <div>
                <div className="font-mono text-[9.5px] uppercase tracking-wide text-muted mb-2">Button style</div>
                <ChoiceChips options={BUTTON_STYLES} value={buttonStyle} onChange={setButtonStyle} />
              </div>
              <div>
                <div className="font-mono text-[9.5px] uppercase tracking-wide text-muted mb-2">Header layout</div>
                <ChoiceChips options={HEADER_STYLES} value={headerStyle} onChange={setHeaderStyle} />
              </div>
            </div>
          </Section>

          <Section title="Content">
            <div className="flex flex-col gap-3">
              <input className={fieldClass} placeholder="Hero title" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
              <textarea className={fieldClass} placeholder="Hero description" rows={2} value={heroDesc} onChange={(e) => setHeroDesc(e.target.value)} />
              <input className={fieldClass} placeholder="CTA text" value={ctaText} onChange={(e) => setCtaText(e.target.value)} />
              <input className={fieldClass} placeholder="Contact email on site" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
            </div>
          </Section>

          <Section title="Social links">
            <div className="flex flex-col gap-3">
              {Object.entries(socials).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-muted w-16 shrink-0">{key}</span>
                  <input
                    className={fieldClass}
                    placeholder={`${key}.com/yourhandle`}
                    value={value}
                    onChange={(e) => setSocials({ ...socials, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Sections">
            <div className="flex flex-col gap-2.5">
              {SECTIONS.map((s) => (
                <ToggleRow
                  key={s}
                  label={`Show ${s} section`}
                  checked={visibleSections[s]}
                  onChange={(v) => setVisibleSections({ ...visibleSections, [s]: v })}
                />
              ))}
            </div>
          </Section>

          <Section title="Preview page">
            <div className="flex flex-wrap gap-2">
              {PAGES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={page === p ? "chip-on" : "chip"}
                >
                  {p}
                </button>
              ))}
            </div>
          </Section>

          <button
            onClick={sendRequest}
            disabled={!name || !customerEmail || sending}
            className="btn-primary"
          >
            {sending ? "Sending…" : "Send Customization Request"}
          </button>
        </div>
      </div>

      {/* Print-only full preview — shown when the user prints the page */}
      <div className="hidden print:block">
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="font-mono text-[10px] uppercase tracking-wide text-ink">
            {brand || "Your Brand"} — Customized preview of {site.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-muted">
            {STUDIO.name}
          </span>
        </div>
        <PrintPreview
          brand={brand}
          accent={accent}
          secondary={secondary}
          tertiary={tertiary}
          font={font}
          buttonStyle={buttonStyle}
          headerStyle={headerStyle}
          theme={theme}
          heroTitle={heroTitle}
          heroDesc={heroDesc}
          ctaText={ctaText}
          contactEmail={contactEmail}
          socials={socials}
          visibleSections={visibleSections}
        />
      </div>
    </div>
  );
}
