import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Travel } from "@/components/Travel";
import { Schedule } from "@/components/Schedule";
import { Registry } from "@/components/Registry";
import { Section } from "@/components/Section";
import { RSVPForm } from "@/components/RSVPForm";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Travel />
        <Schedule />
        <Registry />
        <Section id="rsvp" eyebrow="Reply" title="RSVP" tone="cream">
          <p className="text-center text-lg text-ink/80 max-w-2xl mx-auto mb-10">
            {content.rsvp.intro}
          </p>
          <RSVPForm />
        </Section>
        <footer className="bg-white text-center py-10 text-sm text-ink/50 no-print">
          <p className="font-serif text-lg text-coral">
            {content.couple.first} &amp; {content.couple.second}
          </p>
          <p>{content.dateLong}</p>
          <p>
            {content.venue.name} &middot; {content.venue.city}, {content.venue.region}
          </p>
        </footer>
      </main>
    </>
  );
}
