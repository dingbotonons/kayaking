import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function PuertoRicoFaqSection() {
  const faqs = [
    {
      question: "How many bioluminescent bays are in Puerto Rico?",
      answer:
        "Three famous ones: Mosquito Bay in Vieques, Laguna Grande in Fajardo and La Parguera in Lajas. Year-round glowing bays are rare worldwide — Puerto Rico having three is why it's the bio bay capital of the US.",
    },
    {
      question: "Which Puerto Rico bio bay is the best?",
      answer:
        "Brightest: Mosquito Bay. Easiest from San Juan: Laguna Grande. Only one you can swim in: La Parguera. The best bay is the one that fits the trip you're actually taking.",
    },
    {
      question: "Can I do a bio bay tour from San Juan without a car?",
      answer:
        "Yes. Fajardo tours with San Juan transport are the standard easy option, and Vieques day trips handle the ferry and transfers for you. Both kinds are listed on this page.",
    },
    {
      question: "When is the best time to visit Puerto Rico's bio bays?",
      answer:
        "They glow all year round. December to April is usually the brightest and driest stretch — and in any month, plan around the new moon.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <Section bg="white" id="faqs">
        <Container size="readable">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently asked questions"
            intro="Essential advice for planning your Puerto Rico bio bay paddle."
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
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

      {/* Final CTA Band */}
      <Section bg="seafoam" variant="cta">
        <Container size="narrow">
          <div className="bg-white rounded-[20px] p-8 lg:p-12 border border-teal/10 shadow-sm text-center space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              Ready to kayak the glowing bays of Puerto Rico?
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s glow conditions, compare tour prices, and secure a spot for the dark-moon window.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Puerto Rico Tours
              </a>
              <Link
                href="/glow-forecast/"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-200 border border-teal/15"
              >
                Check Tonight&apos;s Glow
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
