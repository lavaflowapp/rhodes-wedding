import { Section } from "./Section";
import { content } from "@/lib/content";

export function Schedule() {
  return (
    <Section id="schedule" eyebrow="The Weekend" title="Schedule">
      <div className="space-y-12">
        {content.schedule.map((day) => (
          <div key={day.day}>
            <h3 className="font-serif text-2xl text-coral mb-6 text-center">{day.day}</h3>
            <ol className="relative border-l-2 border-blush ml-4 sm:ml-8 space-y-8">
              {day.events.map((e) => (
                <li key={e.title} className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-tangerine border-2 border-white" />
                  <p className="text-sm uppercase tracking-wide text-ink/60">{e.time}</p>
                  <p className="font-serif text-xl text-ink">{e.title}</p>
                  {e.location && (
                    <p className="text-sm text-ink/70 italic">{e.location}</p>
                  )}
                  {e.description && (
                    <p className="text-ink/80 mt-1">{e.description}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 no-print">
        <a href="/itinerary" className="btn-secondary no-underline">
          Printable Itinerary
        </a>
      </div>
    </Section>
  );
}
