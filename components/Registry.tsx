import { Section } from "./Section";
import { content } from "@/lib/content";

export function Registry() {
  const { honeyfund, p2p, registry } = content;
  return (
    <Section id="registry" eyebrow="With Love" title="Honeymoon Fund & Registry" tone="cream">
      <p className="text-center text-lg text-ink/80 max-w-2xl mx-auto mb-12">
        {honeyfund.intro}
      </p>

      <div className="bg-white border border-sand rounded-2xl p-10 text-center mb-12">
        <p className="text-5xl mb-4" aria-hidden>🌴</p>
        <h3 className="font-serif text-3xl text-ink mb-3">Honeymoon Fund</h3>
        <p className="text-ink/70 mb-6 max-w-md mx-auto">{honeyfund.primaryNote}</p>
        {honeyfund.primaryUrl !== "#" ? (
          <a
            href={honeyfund.primaryUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary no-underline"
          >
            {honeyfund.primaryLabel}
          </a>
        ) : (
          <span className="text-sm text-coral">Link coming soon</span>
        )}
      </div>

      {(p2p.venmo || p2p.paypal || p2p.zelle) && (
        <div className="mb-16">
          <h4 className="text-center font-serif text-xl text-ink mb-2">
            Or send directly
          </h4>
          <p className="text-center text-sm text-ink/60 mb-6">
            Whatever app you already use is great with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {p2p.venmo && (
              <a
                href={`https://venmo.com/u/${p2p.venmo}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary no-underline"
              >
                Venmo
              </a>
            )}
            {p2p.paypal && (
              <a
                href={`https://paypal.me/${p2p.paypal}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary no-underline"
              >
                PayPal
              </a>
            )}
            {p2p.zelle && (
              <div className="btn-secondary cursor-default select-text">
                Zelle: {p2p.zelle}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="border-t border-sand pt-12">
        <h3 className="text-center font-serif text-2xl text-ink mb-2">
          Traditional Registries
        </h3>
        <p className="text-center text-ink/70 mb-8">{registry.intro}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {registry.links.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary no-underline"
            >
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
