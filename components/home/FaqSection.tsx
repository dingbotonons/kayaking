import { ChevronDownIcon } from "./Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

const FAQS = [
  {
    question: "When is the best time to see bioluminescence?",
    answer:
      "On dark, moonless nights in each location's peak season. Florida peaks June to October, Puerto Rico glows year-round, Washington only June to mid-September.",
  },
  {
    question: "Can you swim in bioluminescent water?",
    answer:
      "In a few places, like La Parguera in Puerto Rico. In most bays swimming is not allowed — you experience the glow from a kayak.",
  },
  {
    question: "Is the glow guaranteed?",
    answer:
      "No. It depends on the moon, weather and the organisms. That's why we publish a nightly glow forecast for every location.",
  },
  {
    question: "Do I need kayaking experience?",
    answer:
      "No. These are guided tours in calm bays and lagoons, suitable for beginners.",
  },
];

export function FaqSection() {
  return (
    <Section
      bg="white"
      aria-labelledby="faq-heading"
      className="border-t border-border-soft"
    >
      <Container size="readable">
      <FaqJsonLd faqs={FAQS} />
        <SectionHeader
          titleId="faq-heading"
          title="Frequently asked questions"
          intro="Straightforward answers before your first night on the water."
          align="center"
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-white p-6 rounded-[20px] cursor-pointer border border-border-soft shadow-sm transition-all duration-200"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between font-serif text-xl font-bold text-teal list-none">
                <h3>{faq.question}</h3>
                <span className="text-teal group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4">
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
