import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function FloridaFaqSection() {
  const faqs = [
    {
      question: "Where is the best place for bioluminescent kayaking in Florida?",
      answer:
        "The Indian River Lagoon system on Florida's Space Coast is the primary epicenter. Cocoa Beach (Banana River and Thousand Islands) is best for clear kayak tours and proximity to beach resorts, while Titusville and Merritt Island National Wildlife Refuge offer darker skies and direct launches into Mosquito Lagoon and Haulover Canal.",
    },
    {
      question: "What months are best for bioluminescent kayaking in Florida?",
      answer:
        "For the vivid, electric-blue sparkle produced by dinoflagellates, the peak months are June through early October (with July and August usually being the brightest). From November through May, comb jellies take over, offering a softer glowing light and rainbow-colored diffraction — meaning Florida offers glowing waters year-round.",
    },
    {
      question: "Are there bioluminescent beaches in Miami?",
      answer:
        "Not reliably. Occasional sparkles get reported, but there's no established glow-tour scene there. Florida's real glow is the Space Coast lagoon, about three hours north.",
    },
    {
      question: "Can you swim in bioluminescent water in Florida?",
      answer:
        "The tours here are kayak-based and swimming isn't part of them — the lagoon is a working estuary, and the glow is best seen from the boat anyway.",
    },
  ];

  return (
    <Section bg="white" id="faqs">
      <Container size="readable">
      <FaqJsonLd faqs={faqs} />
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently asked questions"
          intro="Clear, honest answers about bioluminescent kayaking on Florida's Space Coast."
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
