"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#travel", label: "Travel" },
  { href: "#schedule", label: "Schedule" },
  { href: "#registry", label: "Registry" },
  { href: "#rsvp", label: "RSVP" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 no-print transition-all ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl text-ink no-underline hover:text-coral">
          A &amp; H
        </a>
        <button
          className="sm:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink" />
        </button>
        <ul className="hidden sm:flex gap-8 text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink no-underline hover:text-coral">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="sm:hidden bg-white border-t border-sand px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink no-underline hover:text-coral"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
