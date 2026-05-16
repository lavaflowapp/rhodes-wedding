import { Section } from "./Section";
import { content } from "@/lib/content";
import { HoneyfundTile, CustomAmountTile } from "./HoneyfundTile";

export function Registry() {
  return (
    <Section id="registry" eyebrow="With Love" title="Honeymoon Fund & Registry" tone="cream">
      <p className="text-center text-lg text-ink/80 max-w-2xl mx-auto mb-12">
        {content.honeyfund.intro}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {content.honeyfund.tiles.map((t) => (
          <HoneyfundTile key={t.id} {...t} />
        ))}
        <CustomAmountTile />
      </div>

      <div className="border-t border-sand pt-12">
        <h3 className="text-center font-serif text-2xl text-ink mb-2">
          Traditional Registries
        </h3>
        <p className="text-center text-ink/70 mb-8">{content.registry.intro}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {content.registry.links.map((r) => (
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
