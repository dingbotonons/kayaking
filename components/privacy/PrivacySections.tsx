import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import type { PrivacyPolicySection } from "@/src/data/privacyPolicy";

interface PrivacySectionsProps {
  sections: PrivacyPolicySection[];
  lastUpdated: string;
}

export function PrivacySections({ sections, lastUpdated }: PrivacySectionsProps) {
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

              <div className="space-y-4 text-base leading-7 text-ink/80 font-sans">
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {section.id === "changes-to-this-policy" && (
                  <p className="text-sm font-semibold text-ink/70 pt-2">
                    Last updated: {lastUpdated}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

