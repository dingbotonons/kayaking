import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { FaqItem } from "@/src/data/region-pages";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

/** FAQ accordion section — mirrors FloridaFaqSection. */
export function RegionFaqSection({
  faqs,
  intro,
}: {
  faqs: FaqItem[];
  intro: string;
}) {
  return (
    <Section bg="white" id="faqs">
      <Container size="readable">
      <FaqJsonLd faqs={faqs} />
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently asked questions"
          intro={intro}
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-seafoam/40 rounded-[20px] p-6 border border-teal/10 open:bg-seafoam/80 transition-colors"
            >
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer flex items-center justify-between list-none">
                <span>{faq.question}</span>
                <span className="text-teal text-xl font-bold ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
