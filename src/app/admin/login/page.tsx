"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { site } from "@/lib/site";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"login" | "reset">("login");
  const [resetSent, setResetSent] = useState(false);

  const inactivityNotice = params.get("reason") === "inactivity";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch {
      setError("Incorrect email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch {
      setError("Couldn't send reset email. Check the address and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="card-surface w-full max-w-sm p-8">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
            <Clock className="size-4" strokeWidth={2.25} />
          </span>
          <span className="font-bold text-ink">{site.productName} Admin</span>
        </div>

        {inactivityNotice && (
          <div className="mt-5 flex items-start gap-2 rounded-xl border border-primary/20 bg-primary-50 px-4 py-3 text-xs text-primary">
            <AlertCircle className="mt-0.5 size-3.5 flex-shrink-0" />
            You were signed out after a period of inactivity.
          </div>
        )}

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <h1 className="text-xl font-bold text-ink">Sign in</h1>

            <label className="block text-sm font-medium text-ink">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-11 w-full rounded-xl border border-border px-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </label>

            <label className="block text-sm font-medium text-ink">
              Password
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 h-11 w-full rounded-xl border border-border px-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </label>

            {error && (
              <div className="flex items-start gap-2 rounded-xl border border-error/20 bg-error/5 px-4 py-3 text-xs text-error">
                <AlertCircle className="mt-0.5 size-3.5 flex-shrink-0" />
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("reset");
                setError(null);
              }}
              className="w-full text-center text-xs text-muted hover:text-primary"
            >
              Forgot your password?
            </button>
          </form>
        ) : (
          <form onSubmit={handleReset} className="mt-8 space-y-4">
            <h1 className="text-xl font-bold text-ink">Reset password</h1>
            <p className="text-sm text-muted">
              Enter your email and we&apos;ll send you a reset link.
            </p>

            <label className="block text-sm font-medium text-ink">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-11 w-full rounded-xl border border-border px-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </label>

            {resetSent && (
              <div className="flex items-start gap-2 rounded-xl border border-accent/20 bg-accent-50 px-4 py-3 text-xs text-accent">
                <CheckCircle2 className="mt-0.5 size-3.5 flex-shrink-0" />
                Reset email sent. Check your inbox.
              </div>
            )}

            {error && (
              <div className="flex items-start gap-2 rounded-xl border border-error/20 bg-error/5 px-4 py-3 text-xs text-error">
                <AlertCircle className="mt-0.5 size-3.5 flex-shrink-0" />
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
              {loading ? "Sending..." : "Send reset link"}
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("login");
                setError(null);
                setResetSent(false);
              }}
              className="w-full text-center text-xs text-muted hover:text-primary"
            >
              Back to sign in
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
