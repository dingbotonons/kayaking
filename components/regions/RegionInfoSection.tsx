import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { InfoCard } from "@/src/data/region-pages";

/** Three-card practical info section — mirrors FloridaPlanTripSection. */
export function RegionInfoSection({
  eyebrow,
  title,
  intro,
  cards,
  bg = "seafoam",
  id,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  cards: InfoCard[];
  bg?: "white" | "seafoam";
  id?: string;
}) {
  return (
    <Section bg={bg} id={id}>
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-teal/10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal mb-2">
                  {card.highlight}
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-3">
                  {card.title}
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  {card.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
