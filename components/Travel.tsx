import { Section } from "./Section";
import { content } from "@/lib/content";

export function Travel() {
  const { travel, venue } = content;
  return (
    <Section id="travel" eyebrow="Travel & Hotel" title={venue.name} tone="cream">
      <p className="text-center text-lg text-ink/80 max-w-2xl mx-auto mb-12">
        {travel.intro}
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <Card title="Room Block">
          <p className="text-ink/80 mb-4">{travel.roomBlock.note}</p>
          <p className="text-sm text-ink/60 mb-4">
            <span className="font-medium text-ink">Code:</span> {travel.roomBlock.code}
          </p>
          {travel.roomBlock.url !== "#" ? (
            <a href={travel.roomBlock.url} className="btn-primary no-underline" target="_blank" rel="noreferrer">
              Book Your Room
            </a>
          ) : (
            <span className="text-sm text-coral">Booking link coming soon</span>
          )}
        </Card>

        <Card title="Getting There">
          <p className="text-ink/80 mb-2">
            <span className="font-medium text-ink">{travel.airport.code}</span> — {travel.airport.name}
          </p>
          <p className="text-ink/80 mb-4">{travel.airport.driveTime}</p>
          <p className="text-ink/70 text-sm">{travel.transportation}</p>
        </Card>
      </div>

      <div className="text-center mt-10">
        <a
          href={venue.url}
          target="_blank"
          rel="noreferrer"
          className="text-fuchsia hover:text-coral"
        >
          Visit the resort website →
        </a>
      </div>
    </Section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-sand rounded-2xl p-8">
      <h3 className="font-serif text-2xl text-ink mb-4">{title}</h3>
      {children}
    </div>
  );
}
