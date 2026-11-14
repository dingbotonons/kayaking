import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

// Mirrors the FAQ blocks rendered below word for word (they are
// hard-coded JSX in this component) — keep the two in sync.
const FAQS = [
  {
    question: "Can you really swim in La Parguera?",
    answer:
      "Yes. La Parguera is the only bioluminescent bay in Puerto Rico where swimming is permitted. Because motorized boats have operated here for decades and the bay flushes into the Caribbean, local conservation permits swimming, whereas landlocked bays like Mosquito Bay and Laguna Grande strictly prohibit it.",
  },
  {
    question: "Is it bright enough to see when swimming?",
    answer:
      "Yes, especially on dark moonless nights. When you submerge or move your hands through the water, micro-sparks light up around your limbs and bubbles. Putting on a snorkel mask and looking underwater reveals sparkles swirling in three dimensions.",
  },
  {
    question: "Can I do this as a day trip from San Juan?",
    answer:
      "It is a long day: about 2.5 hours each way across the cordillera central. While possible, staying overnight in La Parguera, Cabo Rojo or Ponce makes for a far more relaxed trip and lets you explore the quiet southwest coast.",
  },
  {
    question: "Kayak or boat at La Parguera?",
    answer:
      "Boat. The bay sits off a coast of mangrove cays, and tours here are boat-based with a swim stop. For kayaking, choose Fajardo or Vieques.",
  },
];

export function LaPargueraSeasonsAndFaqSections() {
  const months = [
    { name: "Jan", letter: "J", brightest: true },
    { name: "Feb", letter: "F", brightest: true },
    { name: "Mar", letter: "M", brightest: true },
    { name: "Apr", letter: "A", brightest: true },
    { name: "May", letter: "M", brightest: false },
    { name: "Jun", letter: "J", brightest: false },
    { name: "Jul", letter: "J", brightest: false },
    { name: "Aug", letter: "A", brightest: false },
    { name: "Sep", letter: "S", brightest: false },
    { name: "Oct", letter: "O", brightest: false },
    { name: "Nov", letter: "N", brightest: false },
    { name: "Dec", letter: "D", brightest: true },
  ];

  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      {/* Section 6: When to go */}
      <Section bg="white">
        <Container>
          <SectionHeader
            title="When to go"
            intro="La Parguera glows all year, brightest December to April. Plan around the new moon for the purest swim experience."
            align="center"
          />

          {/* 12-Month Strip */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 text-center">
              {months.map((m) => (
                <div
                  key={m.name}
                  className={`p-2.5 rounded-[12px] border text-center transition-colors ${
                    m.brightest
                      ? "bg-white border-teal shadow-xs"
                      : "bg-white/80 border-teal/10"
                  }`}
                >
                  <div className="text-xs font-bold text-ink mb-1">{m.letter}</div>
                  {m.brightest ? (
                    <span className="inline-block px-1.5 py-0.5 bg-cream text-teal border border-gold/30 text-[9px] font-bold rounded">
                      Brightest
                    </span>
                  ) : (
                    <span className="text-[10px] text-teal font-medium block">
                      Glows
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 7: FAQs */}
      <Section bg="seafoam">
        <Container size="readable">
          <SectionHeader
            title="Frequently asked questions"
            intro="Common questions from travellers planning a swim in La Parguera's bioluminescent bay."
            align="center"
          />

          <div className="space-y-4">
            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Can you really swim in La Parguera?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                Yes. La Parguera is the only bioluminescent bay in Puerto Rico where swimming is permitted. Because motorized boats have operated here for decades and the bay flushes into the Caribbean, local conservation permits swimming, whereas landlocked bays like Mosquito Bay and Laguna Grande strictly prohibit it.
              </p>
            </details>

            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Is it bright enough to see when swimming?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                Yes, especially on dark moonless nights. When you submerge or move your hands through the water, micro-sparks light up around your limbs and bubbles. Putting on a snorkel mask and looking underwater reveals sparkles swirling in three dimensions.
              </p>
            </details>

            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Can I do this as a day trip from San Juan?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                It is a long day: about 2.5 hours each way across the cordillera central. While possible, staying overnight in La Parguera, Cabo Rojo or Ponce makes for a far more relaxed trip and lets you explore the quiet southwest coast.
              </p>
            </details>

            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Kayak or boat at La Parguera?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                Boat. The bay sits off a coast of mangrove cays, and tours here are boat-based with a swim stop. For kayaking, choose Fajardo or Vieques.
              </p>
            </details>
          </div>
        </Container>
      </Section>

      {/* Final CTA Band */}
      <Section bg="white" variant="cta">
        <Container size="narrow">
          <div className="bg-seafoam border border-teal/15 rounded-[20px] p-8 lg:p-12 text-center shadow-sm space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug">
              Ready to swim in the bioluminescent bay?
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s glow score, pick your tour date, and experience swimming in living light.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Tours
              </a>
              <Link
                href="/glow-forecast"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white hover:bg-seafoam text-teal font-bold text-sm transition-colors duration-200 border border-teal"
              >
                View Full Glow Forecast
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
