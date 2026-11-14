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
    question: "Can you swim in Laguna Grande?",
    answer:
      "No. Swimming is not allowed in Laguna Grande. The Department of Natural Resources protects the dinoflagellates from sunscreens, bug sprays and human skin oils. You view the glow from your kayak. If swimming is essential, consider La Parguera on the southwest coast.",
  },
  {
    question: "Do I need a rental car from San Juan?",
    answer:
      "No. Several operators offer roundtrip transportation from major hotels in San Juan, Condado, and Isla Verde. If you do drive, it is an easy 50-minute route along Route 66 and PR-3 to Las Croabas, with ample parking near the launch area.",
  },
  {
    question: "Is kayaking in the mangrove canal difficult?",
    answer:
      "The channel is calm with very little current, but it can be narrow and dark. Tours paddle single-file with guides at the front and back to direct traffic. First-time kayakers do it safely every evening, though steering around tree roots requires some attention.",
  },
  {
    question: "What should I bring?",
    answer:
      "Clothes that can get wet — swimwear or quick-dry layers — plus water shoes. Leave the valuables at the hotel; anything that must come goes in a dry bag. Operators provide the kayak, paddle and life jacket.",
  },
];

export function LagunaGrandeSeasonsAndFaqSections() {
  const months = [
    { name: "Jan", glows: true, brightest: true },
    { name: "Feb", glows: true, brightest: true },
    { name: "Mar", glows: true, brightest: true },
    { name: "Apr", glows: true, brightest: true },
    { name: "May", glows: true, brightest: false },
    { name: "Jun", glows: true, brightest: false },
    { name: "Jul", glows: true, brightest: false },
    { name: "Aug", glows: true, brightest: false },
    { name: "Sep", glows: true, brightest: false },
    { name: "Oct", glows: true, brightest: false },
    { name: "Nov", glows: true, brightest: false },
    { name: "Dec", glows: true, brightest: true },
  ];

  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      {/* Section 5: When to go */}
      <Section bg="seafoam">
        <Container>
          <SectionHeader
            title="When to go"
            intro="Laguna Grande glows all year, brightest in the drier months, December to April. The moon matters more than the month: pick a night near the new moon."
            align="center"
          />

          {/* 12-Month Strip */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
              {months.map((m) => (
                <div
                  key={m.name}
                  className={`p-2.5 rounded-[12px] border text-center transition-colors ${m.brightest
                    ? "bg-white border-teal/40 shadow-xs"
                    : "bg-white/80 border-teal/10"
                    }`}
                >
                  <div className="text-xs font-bold text-ink mb-1">{m.name}</div>
                  <div className="text-[10px] text-teal font-semibold block">Glows</div>
                  {m.brightest ? (
                    <span className="inline-block mt-1 px-1.5 py-0.5 bg-cream text-teal border border-gold/30 text-[9px] font-bold rounded">
                      Brightest
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6: Laguna Grande vs Mosquito Bay */}
      <Section bg="white">
        <Container size="readable">
          <div className="bg-seafoam border border-teal/15 rounded-[20px] p-6 lg:p-10 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-teal mb-3 leading-snug">
              Laguna Grande vs Mosquito Bay: which to pick?
            </h2>
            <p className="text-ink/85 text-base leading-7 mb-6 font-sans">
              Mosquito Bay in Vieques is brighter — it is the Guinness World Record holder. But it requires a ferry or flight and an overnight stay on Vieques. Laguna Grande is about an hour from San Juan, easily visited as an evening trip, and features the atmospheric paddle through the mangrove canal. If you have only an evening, choose Laguna Grande; if you have a full night to spare, make the trip to Vieques.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/puerto-rico/mosquito-bay-vieques"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:text-coral transition-colors"
              >
                <span>Read the Mosquito Bay guide</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 7: FAQs */}
      <Section bg="seafoam">
        <Container size="readable">
          <SectionHeader
            title="Frequently asked questions"
            intro="Common questions from travellers planning a Laguna Grande bio bay kayak tour."
            align="center"
          />

          <div className="space-y-4">
            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Can you swim in Laguna Grande?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                No. Swimming is not allowed in Laguna Grande. The Department of Natural Resources protects the dinoflagellates from sunscreens, bug sprays and human skin oils. You view the glow from your kayak. If swimming is essential, consider La Parguera on the southwest coast.
              </p>
            </details>

            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Do I need a rental car from San Juan?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                No. Several operators offer roundtrip transportation from major hotels in San Juan, Condado, and Isla Verde. If you do drive, it is an easy 50-minute route along Route 66 and PR-3 to Las Croabas, with ample parking near the launch area.
              </p>
            </details>

            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>Is kayaking in the mangrove canal difficult?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                The channel is calm with very little current, but it can be narrow and dark. Tours paddle single-file with guides at the front and back to direct traffic. First-time kayakers do it safely every evening, though steering around tree roots requires some attention.
              </p>
            </details>

            <details className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs">
              <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                <span>What should I bring?</span>
                <span className="text-teal font-bold ml-2">+</span>
              </summary>
              <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                Clothes that can get wet — swimwear or quick-dry layers — plus water shoes. Leave the valuables at the hotel; anything that must come goes in a dry bag. Operators provide the kayak, paddle and life jacket.
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
              Ready to paddle Laguna Grande?
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s glow score, pick your launch time, and book your kayak adventure into Puerto Rico&apos;s easiest bio bay.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Tours from $65.78
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
