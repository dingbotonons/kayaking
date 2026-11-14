import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function CocoaBeachFaqSection() {
  const faqs = [
    {
      question: "When is the best time of year to see bioluminescence in Cocoa Beach?",
      answer:
        "Cocoa Beach offers bioluminescence year-round, but the organism changes. Peak dinoflagellate season runs from June through early October, creating the famous neon blue sparkles that react to paddle strokes. From November through May, comb jellies populate the lagoon, flashing rainbow pulses when disturbed.",
    },
    {
      question: "Can you swim in bioluminescent water in Cocoa Beach?",
      answer:
        "No. Cocoa Beach bioluminescence tours are strictly kayak-based. Swimming is not permitted on guided tours because the Indian River and Banana River lagoons are shallow working marine estuaries with dark water, oyster beds, and boat traffic. You get the best view right from your kayak.",
    },
    {
      question: "Should I book a guided tour or do it myself with a rental?",
      answer:
        "Booking a guided tour is strongly recommended for bioluminescence. Navigating dark mangrove mazes and shallow lagoon channels at night requires local waterway knowledge, safety lights, and designated launch permits that commercial operators maintain. Daytime kayak rentals are readily available, but nighttime paddling is best done with a guide.",
    },
    {
      question: "What happens if it is cloudy or rainy?",
      answer:
        "Cloud cover is actually an advantage for bioluminescence because clouds block ambient moonlight and starlight, creating pitch-black conditions that make the glow appear even brighter. In the event of dangerous lightning, high winds, or heavy storms, tours may be cancelled — each operator sets its own reschedule and refund terms, so check the terms on your tour's booking page before you reserve.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      {/* Section 6: Frequently asked questions */}
      <Section bg="white" id="faqs">
        <Container size="readable">
          <SectionHeader
            eyebrow="Clear Answers"
            title="Frequently asked questions"
            intro="Everything you need to know before paddling into Cocoa Beach's nighttime lagoon."
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group bg-white rounded-[20px] p-6 border border-teal/10 open:border-teal/20 shadow-sm transition-colors"
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

      {/* Section 7: Final CTA Band */}
      <Section bg="seafoam" variant="cta">
        <Container size="narrow">
          <div className="bg-white rounded-[20px] p-8 lg:p-12 border border-teal/10 shadow-sm text-center space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              Ready to kayak the glowing waters of Cocoa Beach?
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s glow forecast, compare checked tour prices, and secure a spot for the dark-moon window.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Cocoa Beach Tours
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
