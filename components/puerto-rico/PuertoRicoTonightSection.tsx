import Link from "next/link";
import { getTonightConditions, type TonightConditions } from "@/lib/conditions";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface PuertoRicoCard {
  regionTag: string;
  name: string;
  conditions: TonightConditions;
}

export async function PuertoRicoTonightSection() {
  const [mosquitoBay, lagunaGrande, laParguera] = await Promise.all([
    getTonightConditions("mosquito-bay"),
    getTonightConditions("laguna-grande"),
    getTonightConditions("la-parguera"),
  ]);

  const cards: PuertoRicoCard[] = [
    { regionTag: "Vieques", name: "Mosquito Bay, Vieques", conditions: mosquitoBay },
    { regionTag: "East Coast", name: "Laguna Grande, Fajardo", conditions: lagunaGrande },
    { regionTag: "Southwest", name: "La Parguera", conditions: laParguera },
  ];

  return (
    <Section bg="seafoam" id="tonight">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream text-teal text-xs font-bold uppercase tracking-wider mb-4 border border-teal/10 h-7">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Island Conditions
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-extrabold text-teal leading-snug">
              Tonight&apos;s glow
            </h2>
            <p className="text-ink/80 text-base mt-2 font-sans max-w-2xl">
              Glow estimates for tonight across the island, built from season, moon, cloud and wind.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/10 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-teal uppercase tracking-wider bg-seafoam px-2.5 py-0.5 rounded-full">
                    {c.regionTag}
                  </span>
                  <span className="text-xs font-bold text-teal">
                    {c.conditions.label}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-teal mb-2">
                  {c.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-3xl font-extrabold text-teal">
                    {c.conditions.score}
                  </span>
                  <span className="text-xs text-ink/60 font-sans">/100 · Glow estimate</span>
                </div>

                <p className="text-xs text-ink/70 font-sans mb-2">
                  {c.conditions.summary}
                </p>
                <p className="text-xs text-ink/60 font-sans mb-4">
                  {c.conditions.inputsLine}
                </p>
              </div>

              <div className="pt-4 border-t border-border-soft flex items-center justify-between">
                <span className="text-xs text-ink/60">Updated daily</span>
                <Link
                  href="/glow-forecast/"
                  className="text-xs font-bold text-coral hover:underline"
                >
                  View forecast →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
