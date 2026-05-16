import { content } from "@/lib/content";
import { PrintButton } from "@/components/PrintButton";

export const metadata = {
  title: `Itinerary — ${content.couple.first} & ${content.couple.second}`,
};

export default function Itinerary() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 print:py-4 bg-white text-ink">
      <header className="text-center mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-coral mb-3">Wedding Weekend Itinerary</p>
        <h1 className="font-serif text-4xl">
          {content.couple.first} &amp; {content.couple.second}
        </h1>
        <p className="text-ink/70 mt-2">{content.dateLong}</p>
        <p className="text-ink/70">
          {content.venue.name} &middot; {content.venue.city}, {content.venue.region}
        </p>
        <div className="accent-rule" />
      </header>

      {content.schedule.map((day) => (
        <section key={day.day} className="mb-10 print-section">
          <h2 className="font-serif text-2xl text-coral mb-4 border-b border-blush pb-2">
            {day.day}
          </h2>
          <table className="w-full text-left">
            <tbody>
              {day.events.map((e) => (
                <tr key={e.title} className="align-top border-b border-sand/60">
                  <td className="py-3 pr-4 w-24 text-sm uppercase tracking-wide text-ink/60 whitespace-nowrap">
                    {e.time}
                  </td>
                  <td className="py-3">
                    <p className="font-serif text-lg">{e.title}</p>
                    {e.location && <p className="text-sm text-ink/70 italic">{e.location}</p>}
                    {e.description && <p className="text-sm text-ink/80">{e.description}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      <footer className="text-center text-xs text-ink/50 mt-10 no-print">
        <PrintButton />
      </footer>
    </main>
  );
}
