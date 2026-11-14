import Link from "next/link";
import { Droplet, Compass, MapPin, ReceiptText, ShieldAlert, ExternalLink, ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowWeRankSections() {
  const criteria = [
    {
      num: "01",
      icon: Droplet,
      title: "Glow strength of the water",
      desc: "How bright that bay or lagoon gets in its season, from the organism and the setting — a bay that glows strongly outranks a faint one on the same night.",
    },
    {
      num: "02",
      icon: Compass,
      title: "The kayak experience",
      desc: "Clear kayaks where they exist, small groups, and how much of the trip is paddling in the glow versus getting there.",
    },
    {
      num: "03",
      icon: MapPin,
      title: "Launch logistics",
      desc: "How easy the meeting point is to reach, parking and transport options, and whether the timing works for visitors without a car.",
    },
    {
      num: "04",
      icon: ReceiptText,
      title: "Price and booking terms",
      desc: "The price against other tours at the same location, and the cancellation terms, on the day we check. Prices are date-stamped on every page.",
    },
  ];

  const steps = [
    {
      step: "1",
      label: "Discovery",
      desc: "We list every bookable tour we can find for that location on GetYourGuide.",
    },
    {
      step: "2",
      label: "Verification",
      desc: "We check prices and terms, and date-stamp the check.",
    },
    {
      step: "3",
      label: "Curation",
      desc: "Picks are chosen by the criteria above — the same order for every location.",
    },
  ];

  return (
    <>
      {/* SECTION 1: The four things we look at */}
      <Section bg="seafoam">
        <Container>
          <SectionHeader
            title="The four things we look at"
            description={
              <>
                Four objective pillars applied identically to every coastal territory we feature. (The predictive formula lives on our{" "}
                <Link href="/glow-forecast-method" className="text-teal font-semibold hover:underline">
                  glow forecast method
                </Link>{" "}
                page.)
              </>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {criteria.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-white rounded-[20px] border border-teal/15 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-bold text-teal/40">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-seafoam flex items-center justify-center text-teal">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SECTION 2: How a page gets built */}
      <Section bg="white">
        <Container>
          <div className="bg-seafoam/40 rounded-[20px] border border-teal/15 p-6 lg:p-8 shadow-sm">
            <div className="max-w-xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-2">
                Systematic Process
              </span>
              <h2 className="font-serif text-3xl font-bold text-teal">
                How a page gets built
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((s) => (
                <div key={s.step} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {s.step}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal">
                      {s.label}
                    </span>
                  </div>
                  <p className="text-sm text-ink/85 font-medium leading-relaxed pl-1">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 & 4: What gets a tour removed & About ratings */}
      <Section bg="seafoam">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card A: What gets a tour removed */}
            <div className="bg-white rounded-[20px] border border-teal/15 p-6 lg:p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[20px] bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ink">
                  What gets a tour removed
                </h2>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">
                A tour leaves our pages if its listing disappears, if its terms change for the worse at a re-check, or if we learn the listing misdescribes the trip — for example, advertising a bay it doesn&apos;t actually launch into.
              </p>
            </div>

            {/* Card B: About ratings */}
            <div className="bg-white rounded-[20px] border border-teal/15 p-6 lg:p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[20px] bg-seafoam text-teal flex items-center justify-center border border-teal/15">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ink">
                  About ratings
                </h2>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">
                We don&apos;t publish our own star ratings, and we don&apos;t copy review scores into our rankings. Ratings and reviews live on GetYourGuide, one click from every tour card, where you can read them in full. Read more in our{" "}
                <Link href="/affiliate-disclosure" className="text-teal font-semibold hover:underline">
                  affiliate disclosure
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: Pre-footer Callout / CTA */}
      <Section variant="cta" bg="white">
        <Container>
          <div className="rounded-[20px] bg-gradient-to-r from-teal to-[#164e63] text-white p-8 lg:p-12 shadow-md">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-bold mb-3">
                See the rankings in action
              </h2>
              <p className="text-white/85 text-base mb-8 leading-relaxed">
                Explore curated night paddles across Florida, Puerto Rico, California, and beyond with complete transparency and real-time conditions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/best-bioluminescent-kayaking-tours"
                  className="rounded-full bg-coral hover:bg-[#ff7b52] text-white h-12 px-6 text-sm font-bold shadow-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Best bioluminescent kayaking tours</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/moon-phase-calendar"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 h-12 px-6 text-sm font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Moon calendar
                </Link>
                <Link
                  href="/glow-forecast"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 h-12 px-6 text-sm font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Glow forecast
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
