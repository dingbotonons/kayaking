import { ChevronDownIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

const FORECAST_FAQS = [
  {
    question: "Is there bioluminescence right now in Florida?",
    answer:
      "Check the Florida rows above — the forecast updates every day. In summer the glow is the dinoflagellate sparkle; in winter it's comb jellies.",
  },
  {
    question: "Can you see bioluminescence in the rain?",
    answer:
      "Light rain doesn't stop the glow, and cloud cover can even help by hiding the moon. Lightning and high wind are what cancel tours.",
  },
  {
    question: "How likely am I to see the glow on my trip?",
    answer:
      "Pick an Excellent or Good night near the new moon in the location's peak season and the odds are strongly in your favour. Living things don't do guarantees — that's exactly why this forecast exists.",
  },
  {
    question: "Why did my tour look dimmer than the photos?",
    answer:
      "Glow photos are long exposures: the camera gathers light for seconds at a time. Your eyes see the real, gentler version. A bright moon or a Poor-rated night are the usual reasons a tour looks dim.",
  },
];

export function ForecastFaqSection() {
  return (
    <Section bg="seafoam" aria-labelledby="forecast-faq-heading">
      <Container size="readable">
        <FaqJsonLd faqs={FORECAST_FAQS} />
        <SectionHeader
          titleId="forecast-faq-heading"
          title="Frequently asked questions"
          intro="Clear, practical answers about booking and catching the bioluminescence."
          align="center"
        />

        <div className="space-y-4">
          {FORECAST_FAQS.map((faq, index) => (
            <details
              key={index}
              className="group custom-card bg-white border border-border-soft p-6 rounded-[20px] shadow-sm transition-all"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-xl text-teal font-bold">
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
