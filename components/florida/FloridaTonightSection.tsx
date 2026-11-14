import Link from "next/link";
import { getTonightConditions, type TonightConditions } from "@/lib/conditions";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface FloridaCard {
  id: string;
  name: string;
  subhead: string;
  conditions: TonightConditions;
}

export async function FloridaTonightSection() {
  const [cocoa, titusville] = await Promise.all([
    getTonightConditions("cocoa-beach"),
    getTonightConditions("titusville"),
  ]);

  const cards: FloridaCard[] = [
    {
      id: "cocoa-beach",
      name: "Cocoa Beach",
      subhead: "Banana River / Thousand Islands",
      conditions: cocoa,
    },
    {
      id: "titusville",
      name: "Titusville & Merritt Island",
      subhead: "Mosquito Lagoon / Haulover Canal",
      conditions: titusville,
    },
  ];

  return (
    <Section bg="seafoam">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Lagoon Conditions
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              Tonight&apos;s glow
            </h2>
            <p className="text-ink/80 text-base mt-2 font-sans max-w-2xl">
              Glow estimates for tonight across Florida&apos;s primary launch zones, built from season, moon, cloud and wind.
            </p>
          </div>
          <Link
            href="/glow-forecast/"
            className="inline-flex items-center gap-1.5 text-teal hover:text-coral text-sm font-bold group shrink-0"
          >
            <span>Full 7-Night Forecast</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-teal">
                      {c.name}
                    </h3>
                    <p className="text-xs text-ink/70 font-sans mt-0.5">
                      {c.subhead}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-3xl font-extrabold text-teal block">
                      {c.conditions.score}
                      <span className="text-sm font-sans font-normal text-ink/60">/100</span>
                    </span>
                    <span className="block text-[11px] font-semibold text-ink/60">
                      Glow estimate
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-teal bg-seafoam px-2.5 py-0.5 rounded-full mt-1">
                      {c.conditions.label}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-ink/80 leading-relaxed mb-2 font-sans">
                  {c.conditions.summary}
                </p>
                <p className="text-xs text-ink/60 leading-relaxed mb-6 font-sans">
                  {c.conditions.inputsLine}
                </p>
              </div>

              <div className="pt-4 border-t border-border-soft flex items-center justify-between">
                <span className="text-xs text-ink/70 font-sans">
                  Checked nightly
                </span>
                <Link
                  href="/florida/"
                  className="text-sm font-bold text-teal hover:text-coral transition-colors"
                >
                  View location guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
