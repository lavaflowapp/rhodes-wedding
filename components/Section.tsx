import { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  eyebrow?: string;
  tone?: "white" | "cream";
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, tone = "white", children, className = "" }: Props) {
  const bg = tone === "cream" ? "bg-cream" : "bg-white";
  return (
    <section id={id} className={`${bg} px-6 py-20 sm:py-28 print-section ${className}`}>
      <div className="mx-auto max-w-4xl">
        {(eyebrow || title) && (
          <div className="text-center mb-12">
            {eyebrow && (
              <p className="uppercase tracking-[0.3em] text-xs text-coral mb-3">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl font-serif text-ink">{title}</h2>
            )}
            <div className="accent-rule" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
