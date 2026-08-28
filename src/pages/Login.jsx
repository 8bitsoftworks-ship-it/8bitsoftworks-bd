import { useState } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { signUp, logIn, useAuth } from "../data/auth";

export default function Login() {
  const user = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.state?.from || "/account";
  const queryMode = new URLSearchParams(location.search).get("mode");

  const [mode, setMode] = useState(queryMode === "signup" ? "signup" : "signin"); // "signin" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to={redirect} replace />;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "signup") {
        await signUp({ name, email, password });
      } else {
        await logIn({ email, password });
      }
      navigate(redirect, { replace: true });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  function switchMode(next) {
    setMode(next);
    setError("");
  }

  return (
    <div>
      <div className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-12 md:py-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mint">
            {mode === "signin" ? "Welcome back" : "Create an account"}
          </span>
          <h1 className="font-display font-semibold text-[32px] md:text-[42px] mt-2 leading-tight">
            {mode === "signin" ? "Sign in to the studio." : "Your saved sites, one login away."}
          </h1>
          <p className="text-paper/65 text-[14px] mt-2 max-w-[48ch] leading-relaxed">
            Save websites to your list and keep your order history in one place.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-md px-5 md:px-8 py-14 md:py-20">
        <div className="flex border border-ink/10 mb-8">
          <button
            type="button"
            onClick={() => switchMode("signin")}
            className={`flex-1 font-mono text-[11px] uppercase tracking-wide py-3 transition-colors ${
              mode === "signin" ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => switchMode("signup")}
            className={`flex-1 font-mono text-[11px] uppercase tracking-wide py-3 transition-colors ${
              mode === "signup" ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            Create account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "signup" && (
            <div>
              <label className="label mb-2">Name</label>
              <input
                className="field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>
          )}
          <div>
            <label className="label mb-2">Email</label>
            <input
              className="field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="label mb-2">Password</label>
            <input
              className="field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
            />
          </div>

          {error && <p className="font-mono text-[11px] uppercase tracking-wide text-signal">{error}</p>}

          <button type="submit" disabled={busy} className="btn-primary mt-1">
            {busy ? "One moment…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="text-[12px] text-muted mt-6 leading-relaxed">
          Accounts are stored in your browser — there's no server involved. Clearing site
          data will clear your account and saved sites.
        </p>

        <div className="mt-8 border-t border-ink/10 pt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10.5px] uppercase tracking-wide text-muted">
          <Link to="/websites" className="hover:text-ink transition-colors">Browse websites</Link>
          <Link to="/showcase" className="hover:text-ink transition-colors">Live showcase</Link>
          <Link to="/custom" className="hover:text-ink transition-colors">Request a build</Link>
        </div>
      </div>
    </div>
  );
}
