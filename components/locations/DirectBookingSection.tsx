import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * The honest no-GetYourGuide section for Tomales Bay, San Diego and
 * Hood Canal: no tour cards, no prices we haven't verified — just a
 * plain explanation that tours here are booked directly with local
 * operators and this site earns nothing on them.
 */
export function DirectBookingSection({
  title,
  intro,
  paragraphs,
  noteTitle,
  noteBullets,
  bg = "white",
}: {
  title: string;
  intro: string;
  paragraphs: string[];
  noteTitle: string;
  noteBullets: string[];
  bg?: "white" | "seafoam";
}) {
  return (
    <Section bg={bg} id="tours">
      <Container>
        <SectionHeader
          eyebrow="Booking Here"
          title={title}
          intro={intro}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm space-y-4">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base leading-7 text-ink/80 font-sans"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 bg-seafoam/50 rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-teal leading-snug mb-4">
              {noteTitle}
            </h3>
            <ul className="space-y-3">
              {noteBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm text-ink/80 flex items-start gap-2 font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-2" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
