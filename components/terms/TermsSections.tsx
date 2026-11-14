import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import type { TermsSection } from "@/src/data/terms";

interface TermsSectionsProps {
  sections: TermsSection[];
}

export function TermsSections({ sections }: TermsSectionsProps) {
  return (
    <Section bg="seafoam">
      <Container size="readable">
        <div className="space-y-6 lg:space-y-8">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-bold text-teal mb-4 leading-snug">
                {section.title}
              </h2>

              <p className="text-base leading-7 text-ink/80 font-sans">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

