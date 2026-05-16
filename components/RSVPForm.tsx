"use client";

import { useState } from "react";
import { content } from "@/lib/content";

export function RSVPForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-sand rounded-2xl p-10 text-center">
        <p className="text-4xl mb-4">💌</p>
        <h3 className="font-serif text-2xl text-ink mb-2">Thank you!</h3>
        <p className="text-ink/70">
          We&apos;ve received your RSVP. We can&apos;t wait to celebrate with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white border border-sand rounded-2xl p-8 space-y-6">
      <p className="text-center text-ink/80">
        Please respond by <span className="text-coral font-medium">{content.rsvp.deadline}</span>.
      </p>

      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />

      <fieldset>
        <legend className="block text-sm font-medium text-ink mb-2">Will you attend?</legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="attending" value="yes" required className="accent-coral" />
            <span>Joyfully accepts</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="attending" value="no" className="accent-coral" />
            <span>Regretfully declines</span>
          </label>
        </div>
      </fieldset>

      <Field label="Number in your party (including yourself)" name="party_size" type="number" defaultValue="1" min={1} max={6} />

      <div>
        <label htmlFor="meal" className="block text-sm font-medium text-ink mb-2">Meal preference</label>
        <select id="meal" name="meal" className="w-full border border-sand rounded-lg px-3 py-2 focus:outline-none focus:border-coral">
          <option value="">No preference</option>
          <option value="chicken">Chicken</option>
          <option value="fish">Fish</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Note to the couple (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full border border-sand rounded-lg px-3 py-2 focus:outline-none focus:border-coral"
        />
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? "Sending…" : "Send RSVP"}
      </button>

      {error && <p className="text-sm text-coral text-center">{error}</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-2">
        {label}
        {required && <span className="text-coral"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        min={min}
        max={max}
        className="w-full border border-sand rounded-lg px-3 py-2 focus:outline-none focus:border-coral"
      />
    </div>
  );
}
