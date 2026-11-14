import Link from "next/link";
import { Calendar, Eye } from "@/components/ui/Icons";
import { ChevronDownIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLd } from "@/components/ui/FaqJsonLd";

export function CompareFaqAndCtaSections() {
  const faqs = [
    {
      q: "What is the best bioluminescent kayak tour in the USA?",
      a: "For pure brightness, Mosquito Bay in Vieques. But the best tour for most people is a good one near where they're already staying, booked on a dark night — a good bay at new moon beats the best bay under a full moon.",
    },
    {
      q: "Where do I actually book?",
      a: "Every tour on this page books on GetYourGuide — that's the only booking site we link to. The price on each card is the from-price we checked there on 12 Nov 2026; your final price, plus the booking and cancellation terms, show on GetYourGuide before you pay.",
    },
    {
      q: "Are clear kayaks worth it?",
      a: "For the summer dinoflagellate sparkle, yes — you see the glow trail right under the hull. For winter comb jellies, a regular kayak is fine: the jellies flash around the boat as you paddle through them.",
    },
    {
      q: "How much does a bioluminescent kayak tour cost?",
      a: "Kayak tours in Florida and Puerto Rico run from $55 to $119 per person on GetYourGuide. Day trips with transport from San Juan cost more — up to $295 for the full Vieques trip — and Washington's summer night paddles run $119–$226. Prices move with the season and the day of the week.",
    },
  ];

  return (
    <>
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {/* Section 6: Frequently asked questions */}
      <Section id="faq" bg="white">
        <Container size="readable">
          <SectionHeader
            title="Frequently asked questions"
            description="Clear, practical answers before you reserve your paddle."
            align="center"
          />

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group custom-card bg-white border border-border-soft p-6 rounded-[20px] shadow-sm transition-all"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-serif text-xl font-bold text-teal">
                  <h3>{faq.q}</h3>
                  <span className="text-teal group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4">
                    <ChevronDownIcon className="w-5 h-5" />
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-ink-muted border-t border-border-soft pt-4 font-sans">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-teal to-[#164e63] rounded-[20px] p-8 lg:p-12 text-center text-white shadow-md">
            <h2 className="font-serif text-3xl font-bold mb-2">
              Chosen your bay?
            </h2>
            <p className="text-white/85 text-base mb-8 max-w-md mx-auto">
              Now pick the darkest night for it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/moon-phase-calendar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-coral hover:bg-[#ff7b52] text-white h-12 px-6 rounded-full font-bold text-sm transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Open the moon calendar</span>
              </Link>
              <Link
                href="/glow-forecast"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 h-12 px-6 rounded-full font-bold text-sm transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>See tonight&apos;s glow forecast</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
