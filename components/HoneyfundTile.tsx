"use client";

import { useState } from "react";

type Props = {
  id: string;
  title: string;
  amount: number;
  emoji: string;
  description: string;
};

export function HoneyfundTile({ id, title, amount, emoji, description }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function contribute() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, title, amount }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Could not start checkout. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-sand rounded-2xl p-6 flex flex-col">
      <div className="text-4xl mb-3" aria-hidden>
        {emoji}
      </div>
      <h4 className="font-serif text-xl text-ink mb-1">{title}</h4>
      <p className="text-sm text-ink/70 mb-4 flex-1">{description}</p>
      <p className="text-coral font-medium text-lg mb-4">${amount}</p>
      <button
        onClick={contribute}
        disabled={loading}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Loading…" : "Contribute"}
      </button>
      {error && <p className="text-xs text-coral mt-2">{error}</p>}
    </div>
  );
}

export function CustomAmountTile() {
  const [amount, setAmount] = useState(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function contribute() {
    if (amount < 1) {
      setError("Please enter at least $1.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: "custom", title: "Honeymoon Fund", amount }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Could not start checkout.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-cream border border-sand rounded-2xl p-6 flex flex-col">
      <div className="text-4xl mb-3" aria-hidden>💝</div>
      <h4 className="font-serif text-xl text-ink mb-1">Choose Your Amount</h4>
      <p className="text-sm text-ink/70 mb-4 flex-1">
        Any contribution toward our honeymoon means the world.
      </p>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-coral font-medium text-lg">$</span>
        <input
          type="number"
          min={1}
          value={amount}
          onChange={(e) => setAmount(Math.max(1, Number(e.target.value) || 0))}
          className="w-full border border-sand rounded-lg px-3 py-2 text-ink focus:outline-none focus:border-coral"
        />
      </div>
      <button
        onClick={contribute}
        disabled={loading}
        className="btn-primary disabled:opacity-60"
      >
        {loading ? "Loading…" : "Contribute"}
      </button>
      {error && <p className="text-xs text-coral mt-2">{error}</p>}
    </div>
  );
}
