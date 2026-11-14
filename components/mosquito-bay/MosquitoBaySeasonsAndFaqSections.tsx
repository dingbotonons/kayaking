import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function MosquitoBaySeasonsAndFaqSections() {
  const months = [
    { label: "J", name: "Jan", isBrightest: true },
    { label: "F", name: "Feb", isBrightest: true },
    { label: "M", name: "Mar", isBrightest: true },
    { label: "A", name: "Apr", isBrightest: true },
    { label: "M", name: "May", isBrightest: false },
    { label: "J", name: "Jun", isBrightest: false },
    { label: "J", name: "Jul", isBrightest: false },
    { label: "A", name: "Aug", isBrightest: false },
    { label: "S", name: "Sep", isBrightest: false },
    { label: "O", name: "Oct", isBrightest: false },
    { label: "N", name: "Nov", isBrightest: false },
    { label: "D", name: "Dec", isBrightest: true },
  ];

  const faqs = [
    {
      question: "Can you swim in Mosquito Bay?",
      answer:
        "No. Swimming isn't allowed here — the bay is protected, and sunscreen and skin oils harm the organisms. You experience the glow from the kayak. If you want to swim in the glow, La Parguera on Puerto Rico's southwest coast allows it.",
    },
    {
      question: "Do I have to stay overnight on Vieques?",
      answer:
        "Almost always, yes — tours end after the last ferry. A few day-trip packages from San Juan handle the late return for you, but you'll be back well after midnight. Staying over is the relaxed option: it also gives you a second night if clouds roll in on the first.",
    },
    {
      question: "How do I get to Vieques?",
      answer:
        "Ferry from Ceiba (about an hour, cheapest) or a short flight from San Juan or Ceiba. In busy months, book the ferry as soon as your plans are set.",
    },
    {
      question: "Is Mosquito Bay really the brightest in the world?",
      answer:
        "Yes — Guinness World Records lists it as the brightest bioluminescent bay. Brightness still varies night to night with the moon and recent rain, which is exactly what the glow forecast tracks.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      {/* Section 5: When to go */}
      <Section bg="seafoam" id="when-to-go">
        <Container>
          <div className="bg-white rounded-[20px] border border-teal/10 p-6 lg:p-10 shadow-sm space-y-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
                Annual Patterns
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal mb-4 leading-snug">
                When to go
              </h2>
              <p className="text-base leading-7 text-ink/80 font-sans">
                Mosquito Bay glows year-round because the water temperature stays warm. The driest and usually brightest stretch runs from December to April — and, as everywhere, the new-moon dark nights are the ones to target.
              </p>
            </div>

            {/* 12-Month Pill Strip */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-3 font-sans">
                Month-by-month brightness index
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 text-center">
                {months.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-[12px] flex flex-col items-center justify-center ${m.isBrightest
                      ? "bg-teal text-white shadow-xs"
                      : "bg-seafoam text-teal border border-teal/10"
                      }`}
                  >
                    <span className="text-xs font-bold uppercase block">
                      {m.name}
                    </span>
                    <span
                      className={`text-[10px] font-semibold mt-0.5 ${m.isBrightest ? "text-seafoam" : "text-teal"
                        }`}
                    >
                      {m.isBrightest ? "Peak" : "Glows"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6: Frequently asked questions */}
      <Section bg="white" id="faqs">
        <Container size="readable">
          <SectionHeader
            eyebrow="Vieques Island FAQ"
            title="Frequently asked questions"
            intro="Everything you need to know about planning a kayak tour in Mosquito Bay."
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
              Experience the brightest bay on Earth
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s glow conditions, review ferry options, and secure your kayak reservation in Mosquito Bay.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Mosquito Bay Tours
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
