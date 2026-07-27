"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export default function ContactPageForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  const updateField =
    (field: keyof typeof form) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  // Same business logic and /api/sales integration as the SalesDialog modal.
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

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center px-8 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-accent-50">
          <CheckCircle2 className="size-7 text-accent" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-ink">Message sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. We&apos;ll get back to you
          shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-secondary mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-8 sm:p-10">
      <label className="hidden">
        Website
        <input tabIndex={-1} autoComplete="off" value={form.website} onChange={updateField("website")} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
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
          rows={5}
          value={form.message}
          onChange={updateField("message")}
          placeholder="Team size, what you'd like to track, timeline..."
          className="mt-2 w-full resize-none rounded-xl border border-border px-3 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </label>

      {error && <p className="text-sm font-medium text-error">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Mail className="size-4" />
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
