import Link from "next/link";
import { Bus, Sparkles, Key, ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function SanJuanDecisionAndFaqSections() {
  const faqs = [
    {
      q: "What time will I get back to San Juan?",
      a: "Fajardo transport tours return late evening. The Vieques day trip returns after midnight. If you are sailing out early next morning, choose Fajardo — or not at all.",
    },
    {
      q: "Is the transport worth the extra money?",
      a: "If you have no car, yes — a taxi or rideshare to Fajardo and back costs more than the difference, and the tour handles the dark drive home. With a rental car, self-driving is the better value.",
    },
    {
      q: "Can cruise passengers do a bio bay tour?",
      a: "Only with generous time margins. Ships that stay in San Juan overnight or leave very late can fit the Fajardo evening tour; a same-evening departure is too tight for comfort.",
    },
    {
      q: "Do pickups cover all San Juan hotels?",
      a: "Most tours pick up in the main hotel zones — Condado, Isla Verde and Old San Juan. Check your exact hotel on the booking page before you pay.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {/* Section 3: Which should you pick? */}
      <Section bg="seafoam" id="which-should-you-pick">
        <Container>
          <SectionHeader
            title="Which should you pick?"
            intro="Choose the option tailored to your schedule, rental setup, and appetite for travel."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Scenario 1 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal mb-4">
                  <Bus className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">
                  One free evening, no car
                </h3>
                <div className="text-xs sm:text-sm font-bold text-teal mb-3">
                  Recommendation: Fajardo with transport.
                </div>
                <p className="text-base leading-7 text-ink/75 font-sans">
                  The easiest option, best ratio of effort to reward, and home by 11 PM.
                </p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">
                  Want the brightest bay on Earth
                </h3>
                <div className="text-xs sm:text-sm font-bold text-teal mb-3">
                  Recommendation: Vieques day trip.
                </div>
                <p className="text-base leading-7 text-ink/75 font-sans">
                  A very long day, but Mosquito Bay is measurably brighter than anywhere else in the world.
                </p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-[16px] bg-seafoam flex items-center justify-center text-teal mb-4">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2">
                  Already have a rental car
                </h3>
                <div className="text-xs sm:text-sm font-bold text-teal mb-3">
                  Recommendation: Drive yourself to Fajardo.
                </div>
                <p className="text-base leading-7 text-ink/75 font-sans">
                  Save on tour transport, stop in El Yunque on the way out, and stay for fresh seafood.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4: Tonight's glow forecast callout */}
      <Section bg="white">
        <Container size="readable">
          <div className="bg-seafoam border border-teal/15 rounded-[20px] p-6 lg:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal block h-7">
                Live Conditions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-teal">
                Tonight&apos;s glow forecast
              </h2>
              <p className="text-ink/80 text-base leading-7 font-sans">
                Check tonight&apos;s moon phase and brightness conditions before booking your pickup.
              </p>
            </div>
            <Link
              href="/glow-forecast"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-teal hover:bg-teal/90 text-white font-bold text-sm shadow-sm transition-colors duration-150 shrink-0"
            >
              <span>View glow forecast</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Section 5: FAQs */}
      <Section bg="seafoam">
        <Container size="readable">
          <SectionHeader
            title="Frequently asked questions"
            intro="Common questions about booking bio bay tours departing directly from San Juan."
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-[20px] p-6 border border-teal/10 shadow-xs"
              >
                <summary className="font-serif text-xl font-bold text-teal cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-teal font-bold ml-2">+</span>
                </summary>
                <p className="mt-4 text-base leading-7 text-ink/80 font-sans border-t border-teal/10 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Band */}
      <Section bg="white" variant="cta">
        <Container size="narrow">
          <div className="bg-seafoam border border-teal/15 rounded-[20px] p-8 lg:p-12 text-center shadow-sm space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug">
              Ready to kayak from San Juan?
            </h2>
            <p className="text-base leading-7 text-ink/80 font-sans">
              Compare roundtrip options with transport included and book your evening paddle into Puerto Rico&apos;s bio bays.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#comparison-table"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-coral hover:bg-coral-hover text-white font-bold text-sm shadow-sm transition-colors duration-200"
              >
                Compare Tours with Transport
              </a>
              <Link
                href="/glow-forecast"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white hover:bg-seafoam text-teal font-bold text-sm transition-colors duration-200 border border-teal"
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
