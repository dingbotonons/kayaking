import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function TitusvilleSeasonsAndFaqSections() {
  const months = [
    { label: "J", name: "Jan", season: "Jellies" },
    { label: "F", name: "Feb", season: "Jellies" },
    { label: "M", name: "Mar", season: "Jellies" },
    { label: "A", name: "Apr", season: "Jellies" },
    { label: "M", name: "May", season: "Jellies" },
    { label: "J", name: "Jun", season: "Sparkle" },
    { label: "J", name: "Jul", season: "Sparkle" },
    { label: "A", name: "Aug", season: "Sparkle" },
    { label: "S", name: "Sep", season: "Sparkle" },
    { label: "O", name: "Oct", season: "Sparkle" },
    { label: "N", name: "Nov", season: "Jellies" },
    { label: "D", name: "Dec", season: "Jellies" },
  ];

  const faqs = [
    {
      question: "Is Titusville the same water as Cocoa Beach?",
      answer:
        "Yes — one lagoon system, the Indian River Lagoon. The pages differ because the launches, the towns and the feel of the trip differ. The glow itself is the same organisms.",
    },
    {
      question: "Can I see manatees on these tours?",
      answer:
        "The glow tours are at night, but Haulover Canal is one of Florida's best manatee spots by day. Pair a daytime refuge visit with the night paddle.",
    },
    {
      question: "Is it really darker than Cocoa Beach?",
      answer:
        "Generally, yes. The Titusville launches sit along refuge shoreline with very little light pollution nearby, which helps faint glow show up better.",
    },
    {
      question: "What about mosquitoes?",
      answer:
        "The Mosquito Lagoon earned its name. In summer, cover up and apply repellent before you launch — your guide will tell you when.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      {/* Section 5: Two glows, one lagoon */}
      <Section bg="seafoam" id="two-glows">
        <Container>
          <SectionHeader
            eyebrow="Natural Cycles"
            title="Two glows, one lagoon"
            intro="Dinoflagellates in summer, comb jellies in winter — both on Mosquito Lagoon."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
            {/* Summer Sparkle */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border-2 border-teal/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="w-2 h-full absolute left-0 top-0 bg-teal" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam text-teal text-xs font-bold uppercase tracking-wider mb-4 h-7">
                  Summer Glow · Jun – Oct
                </div>
                <h3 className="font-serif text-2xl font-bold text-teal mb-3">
                  Summer: dinoflagellate sparkle
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  The classic neon blue flash. Mosquito Lagoon is famous for dense summer dinoflagellate blooms where every stroke of your paddle leaves a glowing blue wake.
                </p>
              </div>
            </div>

            {/* Winter Jellies */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border-2 border-gold/30 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="w-2 h-full absolute left-0 top-0 bg-gold" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
                  Winter Glow · Nov – May
                </div>
                <h3 className="font-serif text-2xl font-bold text-teal mb-3">
                  Winter: comb jellies
                </h3>
                <p className="text-base leading-7 text-ink/80 font-sans">
                  Cold-water comb jellies drift through Haulover Canal. Non-stinging, translucent jellies that illuminate in green-blue pulses when agitated.
                </p>
              </div>
            </div>
          </div>

          {/* Month Pills Strip */}
          <div className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-4 text-center font-sans">
              Mosquito Lagoon Seasonal Calendar
            </span>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 text-center">
              {months.map((m, idx) => {
                const isSummer = m.season === "Sparkle";
                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-[12px] flex flex-col items-center justify-center ${isSummer
                      ? "bg-teal text-white shadow-xs"
                      : "bg-seafoam text-teal border border-teal/10"
                      }`}
                  >
                    <span className="text-xs font-bold uppercase block">
                      {m.name}
                    </span>
                    <span
                      className={`text-[10px] font-semibold mt-0.5 ${isSummer ? "text-seafoam" : "text-teal"
                        }`}
                    >
                      {m.season}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6: Frequently asked questions */}
      <Section bg="white" id="faqs">
        <Container size="readable">
          <SectionHeader
            eyebrow="Titusville Paddle FAQ"
            title="Frequently asked questions"
            intro="Everything you need to know about paddling Mosquito Lagoon and Haulover Canal."
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
              Experience the darkest water on Florida&apos;s Space Coast
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Check tonight&apos;s glow conditions, review launch locations, and paddle into Merritt Island National Wildlife Refuge.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#tours"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Browse Titusville Tours
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
