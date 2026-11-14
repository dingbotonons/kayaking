import { ChevronDownIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

const MOON_FAQS = [
  {
    question: "What moon phase is best for bioluminescent kayaking?",
    answer:
      "The new moon, and the two or three nights either side of it. The sky is at its darkest and the glow stands out the most.",
  },
  {
    question: "Can you see bioluminescence on a full moon?",
    answer:
      "Usually much weaker — moonlight washes it out. The exception is a full moon that sets before your tour starts, which can still leave you a dark window. Your location's forecast accounts for that.",
  },
  {
    question: "How far ahead should I book a dark-night tour?",
    answer:
      "New-moon weekends are the first to fill in peak season, especially clear-kayak tours, so booking a few weeks ahead is sensible.",
  },
  {
    question: "Does this calendar work for every location?",
    answer:
      "Yes — the moon is the same everywhere. What changes by location is the season and the moonset time, which is why every location page carries its own forecast.",
  },
];

export function MoonFaqSection() {
  return (
    <Section bg="seafoam" variant="compact" aria-labelledby="moon-faq-heading">
      <Container size="readable">
      <FaqJsonLd faqs={MOON_FAQS} />
        <SectionHeader
          titleId="moon-faq-heading"
          title="Frequently asked questions"
          intro="Straight answers about moonlight, dark windows and planning a night paddle."
          align="center"
        />

        <div className="space-y-4">
          {MOON_FAQS.map((faq, index) => (
            <details
              key={index}
              className="group custom-card bg-white border border-border-soft p-6 rounded-[20px] shadow-sm transition-all"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-xl text-teal font-bold">
                <h3>{faq.question}</h3>
                <span className="text-teal group-open:rotate-180 transition-transform shrink-0 ml-4">
                  <ChevronDownIcon className="w-5 h-5" />
                </span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink-muted border-t border-border-soft pt-4 font-sans">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
