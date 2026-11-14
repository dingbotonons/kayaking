import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function OrlandoFaqSection() {
  const faqs = [
    {
      question: "How far is bioluminescent kayaking from Orlando?",
      answer:
        "The closest launches, around Titusville, are about 45–55 minutes east. Cocoa Beach is about an hour. There is no bioluminescent kayaking in Orlando itself — it's an inland city.",
    },
    {
      question: "Can I do it after a day at the theme parks?",
      answer:
        "Yes — that's the classic plan. Tours launch after dark, so a park day and a glow night fit together. Just respect the drive back, or stay over.",
    },
    {
      question: "Do I need a rental car?",
      answer:
        "It is by far the easiest way. A small number of tours offer Orlando pickups — check the tour pages on GetYourGuide for your dates.",
    },
    {
      question: "What is the best month for the Orlando glow trip?",
      answer:
        "June to early October for the sparkling dinoflagellates, on a night near the new moon. Winter trips get the comb jellies instead — still worth it.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <Section bg="seafoam" id="faqs">
        <Container size="readable">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently asked questions"
            intro="Practical answers before heading out from Orlando."
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

      {/* Final CTA Band */}
      <Section bg="white" variant="cta">
        <Container size="narrow">
          <div className="bg-white rounded-[20px] p-8 lg:p-12 border border-teal/10 shadow-sm text-center space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              Add a glow paddle to your Orlando holiday
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s conditions on the Space Coast and secure your evening launch spot.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Evening Tours
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
