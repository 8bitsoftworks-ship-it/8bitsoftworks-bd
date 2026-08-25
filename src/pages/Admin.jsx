import { useState } from "react";
import { Link } from "react-router-dom";
import { ADMIN as ADMIN_CFG } from "../data/siteConfig";
import {
  addShowcase,
  updateShowcase,
  removeShowcase,
  loadShowcases,
  normalizeUrl,
  displayAddress,
  titleFromUrl,
} from "../data/showcases";

const CATEGORIES = [
  "Restaurant",
  "Ecommerce",
  "SaaS",
  "Portfolio",
  "Agency",
  "Travel",
  "Wellness",
  "Finance",
  "Real Estate",
  "Café",
  "Fitness",
  "Architecture",
];

function Gate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (value === ADMIN_CFG.passcode) {
      localStorage.setItem(ADMIN_CFG.sessionKey, "1");
      onUnlock();
    } else {
      setError(true);
    }
  }

  return (
    <div className="mx-auto max-w-md px-5 md:px-8 py-24 text-center">
      <span className="font-mono text-[11px] uppercase tracking-wide text-mint-dim">Admin panel</span>
      <h1 className="font-display font-semibold text-[30px] md:text-[36px] text-ink mt-3 leading-tight">
        Studio access.
      </h1>
      <p className="text-[14px] text-muted mt-2 max-w-[40ch] mx-auto leading-relaxed">
        Enter the passcode to manage the live website showcase.
      </p>

      <form onSubmit={submit} className="mt-8 flex flex-col gap-3 text-left">
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Passcode"
          className={`field ${error ? "border-signal" : ""}`}
        />
        {error && <p className="font-mono text-[11px] uppercase tracking-wide text-signal">Incorrect passcode.</p>}
        <button type="submit" className="btn-primary w-full">
          Unlock panel
        </button>
      </form>

      <p className="font-mono text-[9.5px] uppercase tracking-wide text-muted/80 mt-6">
        Passcode is set in src/data/siteConfig.js
      </p>
    </div>
  );
}

function AddForm({ onAdd }) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const [error, setError] = useState("");

  const normalized = normalizeUrl(url);

  function handleUrlBlur() {
    if (normalized && !title.trim()) setTitle(titleFromUrl(normalized));
  }

  function submit(e) {
    e.preventDefault();
    const valid = normalizeUrl(url);
    if (!valid) {
      setError("Enter a valid website URL, e.g. https://yourclient.com");
      return;
    }
    onAdd({
      url: valid,
      title: title.trim() || titleFromUrl(valid),
      category: category.trim(),
      description: description.trim(),
      featured,
    });
    setUrl("");
    setTitle("");
    setCategory("");
    setDescription("");
    setFeatured(false);
    setError("");
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <div>
        <label className="label mb-2.5">Website URL</label>
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError("");
          }}
          onBlur={handleUrlBlur}
          placeholder="https://client-website.com"
          className={`field ${error ? "border-signal" : ""}`}
        />
        {error && <p className="font-mono text-[11px] uppercase tracking-wide text-signal mt-2">{error}</p>}
        <p className="text-[12px] text-muted mt-2">
          Paste the live URL — its index page will be embedded in the showcase.
        </p>
      </div>

      <div>
        <label className="label mb-2.5">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => {
            if (!title.trim() && normalized) setTitle(titleFromUrl(normalized));
          }}
          placeholder="Auto-filled from the domain if left blank"
          className="field"
        />
      </div>

      <div>
        <label className="label mb-2.5">Category</label>
        <input
          list="showcase-categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Ecommerce"
          className="field"
        />
        <datalist id="showcase-categories">
          {CATEGORIES.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </div>

      <div>
        <label className="label mb-2.5">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          placeholder="One line about the build — optional"
          className="field resize-none"
        />
      </div>

      <label className="flex items-center justify-between border border-ink/15 px-3.5 py-3 cursor-pointer">
        <span className="text-[13px] text-ink">Feature this build</span>
        <span
          className={`relative inline-block h-5 w-9 transition-colors ${featured ? "bg-mint" : "bg-ink/15"}`}
        >
          <span
            className={`absolute top-0.5 h-4 w-4 bg-white shadow transition-transform ${
              featured ? "translate-x-5 left-0" : "translate-x-0.5 left-0"
            }`}
          />
        </span>
        <input type="checkbox" checked={featured} onChange={() => setFeatured((v) => !v)} className="sr-only" />
      </label>

      <button type="submit" className="btn-primary self-start">
        Add to showcase
      </button>
    </form>
  );
}

function AdminRow({ item, onToggleFeatured, onSave, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ title: item.title, category: item.category, description: item.description });

  function save() {
    onSave(item.id, {
      title: draft.title.trim() || item.title,
      category: draft.category.trim(),
      description: draft.description.trim(),
    });
    setEditing(false);
  }

  return (
    <div className="border border-ink/10 bg-white/40">
      <div className="flex items-start justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          {editing ? (
            <input
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              className="field-sm"
            />
          ) : (
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="font-display font-semibold text-[15px] text-ink truncate">{item.title}</h3>
              {item.featured && (
                <span className="shrink-0 font-mono text-[8.5px] uppercase tracking-wide px-1.5 py-0.5 bg-mint/15 text-mint-dim">
                  Featured
                </span>
              )}
            </div>
          )}
          <span className="font-mono text-[10px] text-muted truncate block mt-0.5">{displayAddress(item.url)}</span>
        </div>

        <div className="flex gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => onToggleFeatured(item.id)}
            className={`font-mono text-[9px] uppercase tracking-wide px-2 py-1.5 border transition-colors ${
              item.featured
                ? "bg-mint text-ink border-mint"
                : "border-ink/15 text-muted hover:text-ink hover:border-ink/40"
            }`}
            title={item.featured ? "Unpin from top" : "Pin to top"}
          >
            {item.featured ? "Unpin" : "Pin"}
          </button>
          <button
            type="button"
            onClick={() => setEditing((v) => !v)}
            className="font-mono text-[9px] uppercase tracking-wide px-2 py-1.5 border border-ink/15 text-muted hover:text-ink hover:border-ink/40 transition-colors"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="font-mono text-[9px] uppercase tracking-wide px-2 py-1.5 border border-signal/30 text-signal hover:bg-signal hover:text-paper transition-colors"
          >
            Remove
          </button>
        </div>
      </div>

      {editing && (
        <div className="border-t border-ink/10 px-4 py-3 flex flex-col gap-2.5">
          <div className="grid sm:grid-cols-2 gap-2.5">
            <input
              value={draft.category}
              onChange={(e) => setDraft({ ...draft, category: e.target.value })}
              placeholder="Category"
              className="field-sm"
            />
          </div>
          <textarea
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            rows={2}
            placeholder="Description"
            className="field-sm resize-none"
          />
          <div className="flex gap-2">
            <button type="button" onClick={save} className="font-mono text-[9.5px] uppercase tracking-wide px-3 py-1.5 bg-ink text-paper hover:bg-mint hover:text-ink transition-colors">
              Save
            </button>
            <button type="button" onClick={() => setEditing(false)} className="font-mono text-[9.5px] uppercase tracking-wide px-3 py-1.5 border border-ink/15 text-ink hover:border-ink/40 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Admin() {
  const [authed, setAuthed] = useState(() => localStorage.getItem(ADMIN_CFG.sessionKey) === "1");
  const [items, setItems] = useState(() => loadShowcases());

  if (!authed) return <Gate onUnlock={() => setAuthed(true)} />;

  function handleAdd(entry) {
    setItems(addShowcase(entry));
  }
  function handleToggleFeatured(id) {
    setItems(updateShowcase(id, { featured: !items.find((s) => s.id === id)?.featured }));
  }
  function handleSave(id, patch) {
    setItems(updateShowcase(id, patch));
  }
  function handleRemove(id) {
    setItems(removeShowcase(id));
  }

  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper grid-texture">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mint">Admin panel</span>
              <h1 className="font-display font-semibold text-[30px] md:text-[40px] mt-2 leading-tight">
                Manage the showcase.
              </h1>
              <p className="text-paper/65 text-[14px] mt-2 max-w-[52ch] leading-relaxed">
                Paste a finished website's URL and it appears in the live
                showcase, embedded as a preview.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/showcase"
                className="btn-dark-ghost"
              >
                View showcase →
              </Link>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem(ADMIN_CFG.sessionKey);
                  setAuthed(false);
                }}
                className="btn-dark-ghost text-paper/70"
              >
                Lock
              </button>
            </div>
          </div>
          <p className="font-mono text-[9.5px] uppercase tracking-wide text-paper/40 mt-5">
            Entries are stored in this browser (localStorage) — publish happens from this device.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14 grid lg:grid-cols-[1fr_420px] gap-10">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-semibold text-[20px] text-ink">Add a build</h2>
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted">New entry</span>
            </div>
            <AddForm onAdd={handleAdd} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-semibold text-[20px] text-ink">On the showcase</h2>
            <span className="font-mono text-[10px] uppercase tracking-wide text-muted">
              {items.length} added
            </span>
          </div>
          {items.length === 0 ? (
            <div className="border border-dashed border-ink/20 py-14 text-center">
              <p className="text-[13px] text-muted">
                Nothing added yet — paste a URL on the left to get started.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <AdminRow
                key={item.id}
                item={item}
                onToggleFeatured={handleToggleFeatured}
                onSave={handleSave}
                onRemove={handleRemove}
              />
            ))
          )}
          <div className="border border-ink/10 bg-ink text-paper p-4 flex items-start gap-3">
            <span className="font-mono text-[9px] uppercase tracking-wide text-mint shrink-0">Note</span>
            <p className="text-[12px] text-paper/70 leading-relaxed">
              The demo builds in the catalog are always shown first on the
              showcase page. Entries you add here appear beneath them and can be
              removed or re-featured any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
