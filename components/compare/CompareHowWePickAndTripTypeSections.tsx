import Link from "next/link";
import { Droplet, Eye, Compass, ReceiptText, ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CompareHowWePickAndTripTypeSections() {
  const criteria = [
    {
      icon: Droplet,
      title: "Glow strength",
      desc: "How bright that bay or lagoon actually gets in its season.",
    },
    {
      icon: Eye,
      title: "Clear kayaks",
      desc: "Whether the hull is clear, so the glow shows under the boat as well as around it.",
    },
    {
      icon: Compass,
      title: "Launch logistics",
      desc: "How easy the meeting point is to reach, and whether transport is offered.",
    },
    {
      icon: ReceiptText,
      title: "Booking terms",
      desc: "The price and cancellation terms on the day we checked them.",
    },
  ];

  // Each card links to the location page its text points at. (Owner
  // audit 2026-11-13: these cards previously rendered as plain divs —
  // they looked like navigation but clicking did nothing.)
  const tripTypes = [
    {
      tag: "Florida trips",
      title: "I'm staying near Orlando",
      desc: "Cocoa Beach. An hour east, back the same night if you need to be.",
      href: "/florida/bioluminescent-kayaking-near-orlando/",
      cta: "See the Orlando-area tours",
    },
    {
      tag: "Puerto Rico stays",
      title: "I'm in Puerto Rico, based in San Juan",
      desc: "Fajardo for one easy evening — or Vieques if you can give it a night. It's worth the night.",
      href: "/puerto-rico/bio-bay-tours-from-san-juan/",
      cta: "See the San Juan departures",
    },
    {
      tag: "Unmatched spectacle",
      title: "I want the brightest water on Earth",
      desc: "Mosquito Bay, Vieques. Plan around the new moon and stay over.",
      href: "/puerto-rico/mosquito-bay-vieques/",
      cta: "See the Mosquito Bay tours",
    },
  ];

  return (
    <>
      {/* Section 4: How we pick */}
      <Section id="how-we-pick" bg="white">
        <Container>
          <div className="bg-seafoam/40 border border-teal/15 rounded-[20px] p-6 lg:p-8 shadow-sm">
            <SectionHeader
              title="How we pick"
              description="What we look at before a tour earns a place here."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              {criteria.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-[20px] bg-white border border-teal/15 shadow-sm space-y-2 h-full flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-full bg-seafoam flex items-center justify-center text-teal mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                href="/how-we-rank-tours"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:text-teal/80 transition-colors"
              >
                <span>Read more: How we rank tours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 5: Pick by trip type */}
      <Section id="pick-by-trip-type" bg="seafoam">
        <Container>
          <SectionHeader
            title="Pick by trip type"
            description="Choose according to your location and how much travel time you have."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tripTypes.map((trip) => (
              <Link
                key={trip.title}
                href={trip.href}
                className="bg-white rounded-[20px] p-6 border border-teal/15 shadow-sm border-t-4 border-t-teal flex flex-col justify-between h-full group hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal block mb-2">
                    {trip.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-teal transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-sm text-ink/80 leading-relaxed mb-6">
                    {trip.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal group-hover:text-coral transition-colors">
                  <span>{trip.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
