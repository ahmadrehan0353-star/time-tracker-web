"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

type SalesDialogProps = {
  variant?: "light" | "dark";
  className?: string;
};

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export default function SalesDialog({ variant = "light", className = "" }: SalesDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  const buttonClass =
    variant === "dark"
      ? `btn-ghost-light ${className}`
      : `btn-secondary ${className}`;

  const updateField =
    (field: keyof typeof form) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  // Business logic and API integration unchanged from the original implementation.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your request.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your request.");
      setStatus("error");
    }
  };

  return (
    <>
      <button type="button" className={buttonClass} onClick={() => setIsOpen(true)}>
        Talk to sales
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 px-5 py-8 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="sales-dialog-title"
              className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="relative px-4 text-center sm:px-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-0 top-0 rounded-full p-2 text-muted transition hover:bg-slate-100 hover:text-ink"
                  aria-label="Close sales form"
                >
                  <X className="size-5" />
                </button>
                <p className="section-label">Sales inquiry</p>
                <h2 id="sales-dialog-title" className="mt-2 text-2xl font-bold text-ink">
                  Let&apos;s talk about Time Tracker
                </h2>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-start gap-3 rounded-2xl bg-accent-50 p-5 text-sm text-ink"
                >
                  <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-accent" />
                  Thanks. Your request has been sent, and we&apos;ll get back to you soon.
                </motion.div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <label className="hidden">
                    Website
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={updateField("website")}
                    />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-medium text-ink">
                      Name
                      <input
                        required
                        value={form.name}
                        onChange={updateField("name")}
                        className="mt-2 h-11 w-full rounded-xl border border-border px-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </label>
                    <label className="text-sm font-medium text-ink">
                      Work email
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={updateField("email")}
                        className="mt-2 h-11 w-full rounded-xl border border-border px-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </label>
                  </div>
                  <label className="block text-sm font-medium text-ink">
                    Company
                    <input
                      value={form.company}
                      onChange={updateField("company")}
                      className="mt-2 h-11 w-full rounded-xl border border-border px-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </label>
                  <label className="block text-sm font-medium text-ink">
                    What are you looking for?
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={updateField("message")}
                      className="mt-2 w-full resize-none rounded-xl border border-border px-3 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </label>
                  {error && <p className="text-sm font-medium text-error">{error}</p>}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : "Send inquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
