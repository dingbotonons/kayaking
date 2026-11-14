import Link from "next/link";
import { Calendar, Moon, Cloud, Waves, Droplet, Compass, Sun, Wind, Eye, ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GlowMethodSections() {
  const factors = [
    {
      title: "Season",
      pts: "Up to 40 points",
      ptsClass: "bg-seafoam text-teal border border-teal/20",
      icon: Calendar,
      desc: "Is this location in its glowing season, and how strong is the organism right now? This is the biggest single factor.",
      footnote: "Baseline ecosystem activity",
    },
    {
      title: "Moon darkness",
      pts: "Up to 30 points",
      ptsClass: "bg-seafoam text-teal border border-teal/20",
      icon: Moon,
      desc: "How dark the sky will be during tour hours. We count the moon only while it is actually up: a full moon that sets before the tour costs nothing.",
      footnote: "Calculated specifically for night paddle hours",
    },
    {
      title: "Clear skies",
      pts: "Up to 15 points",
      ptsClass: "bg-seafoam/60 text-teal border border-teal/15",
      icon: Cloud,
      desc: "Cloud cover over the bay that night. Clouds can help by hiding a bright moon, which the maths accounts for.",
      footnote: "Hourly local cloud cover interaction",
    },
    {
      title: "Calm water",
      pts: "Up to 15 points",
      ptsClass: "bg-seafoam/60 text-teal border border-teal/15",
      icon: Waves,
      desc: "Wind and chop. Flat water shows the glow best and paddles easiest.",
      footnote: "Wind speed and surface wave interference",
    },
  ];

  const dataSources = [
    {
      title: "The moon",
      icon: Moon,
      desc: "Calculated astronomically for each location — phase, rise and set times. The same maths every time, no guessing.",
      tag: "Astronomical Ephemeris (SunCalc)",
    },
    {
      title: "The weather",
      icon: Wind,
      desc: "Forecast cloud cover and wind from open weather models, refreshed daily.",
      tag: "Open Weather Models",
    },
    {
      title: "The water and the season",
      icon: Compass,
      desc: "Water temperature and seasonal patterns for each bay, from public ocean data and the operators' own season calendars.",
      tag: "Ocean Data & Operator Calendars",
    },
  ];

  return (
    <>
      {/* SECTION 1: The 100 points */}
      <Section id="the-100-points" bg="seafoam">
        <Container>
          <SectionHeader
            title="The 100 points"
            description="Each evening score is calculated independently out of 100 points across four physical indicators that dictate nighttime visibility."
          />

          {/* Composition Proportion Bar */}
          <div className="bg-white p-6 lg:p-8 rounded-[20px] border border-teal/15 shadow-sm mb-8">
            <div className="flex items-center justify-between text-sm font-bold text-teal mb-3">
              <span>Total Forecast Composition</span>
              <span>100 Points Total</span>
            </div>

            {/* Segmented bar */}
            <div className="w-full h-4 rounded-full bg-seafoam flex overflow-hidden p-0.5 border border-teal/15">
              <div className="h-full bg-teal rounded-l-full" style={{ width: "40%" }} title="Season: 40 pts"></div>
              <div className="h-full bg-[#164e63] mx-0.5" style={{ width: "30%" }} title="Moon darkness: 30 pts"></div>
              <div className="h-full bg-gold mx-0.5" style={{ width: "15%" }} title="Clear skies: 15 pts"></div>
              <div className="h-full bg-coral rounded-r-full" style={{ width: "15%" }} title="Calm water: 15 pts"></div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t border-teal/10 text-xs text-ink/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal shrink-0"></span>
                <span>Season (40 pts)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#164e63] shrink-0"></span>
                <span>Moon darkness (30 pts)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gold shrink-0"></span>
                <span>Clear skies (15 pts)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-coral shrink-0"></span>
                <span>Calm water (15 pts)</span>
              </div>
            </div>
          </div>

          {/* 4 Factor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white p-6 lg:p-8 rounded-[20px] border border-teal/15 shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 h-7 inline-flex items-center rounded-full text-xs font-bold ${f.ptsClass}`}>
                        {f.pts}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-seafoam flex items-center justify-center text-teal">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ink mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-ink/80 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-teal/10 text-xs text-ink/60">
                    {f.footnote}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note Card: Rain Adjustment Callout */}
          <div className="rounded-[20px] bg-white border border-teal/20 p-6 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-seafoam flex items-center justify-center shrink-0 text-teal">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-teal mb-1">
                Water Salinity &amp; Runoff Rule
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">
                One adjustment: heavy rain in the previous two days can dilute bays and lagoons, so the score drops until the water settles.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: Where the data comes from */}
      <Section id="where-the-data-comes-from" bg="white">
        <Container>
          <SectionHeader
            title="Where the data comes from"
            description="Reliable, repeatable metrics drawn from automated open scientific feeds and published coastal research."
          />

          <div className="space-y-4 max-w-4xl">
            {dataSources.map((src) => {
              const Icon = src.icon;
              return (
                <div
                  key={src.title}
                  className="bg-white p-6 rounded-[20px] border border-teal/15 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-ink mb-1">
                        {src.title}
                      </h3>
                      <p className="text-sm text-ink/80 leading-relaxed">
                        {src.desc}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 self-end sm:self-center">
                    <span className="text-xs font-semibold bg-seafoam text-teal px-3 h-7 inline-flex items-center rounded-full border border-teal/20">
                      {src.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Our data sources — verbatim copy supplied by the owner (Prompt F spec, 2026-11-13). Do not paraphrase. */}
          <div className="max-w-4xl mt-10">
            <h3 className="font-serif text-2xl font-bold text-teal mb-4">
              Our data sources
            </h3>
            <p className="text-base text-ink/80 leading-relaxed mb-4">
              Moon phase, illumination and moonrise and moonset times are calculated on our server with the SunCalc astronomy library — standard lunar maths, the same astronomy the US Naval Observatory publishes. Weather — cloud cover, wind and rainfall for each bay — comes from Open-Meteo, a forecast service that blends national weather models including NOAA&apos;s. Water temperatures are live observations from NOAA Tides and Currents stations near each bay, shown with the station name and the time of the reading. Season baselines come from published season guides for each bay — tour operators and researchers who work that water — and each one is named in our data and reviewed every season.
            </p>
            <p className="text-base text-ink/80 leading-relaxed">
              One thing no source can give us: a live bioluminescence reading. Nobody measures the plankton in these bays every night, so our score is an estimate built from the four sourced ingredients above — season, moon, cloud and wind — and we label it that way wherever it appears.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: What the forecast can't know */}
      <Section id="what-the-forecast-cant-know" bg="seafoam">
        <Container>
          <div className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm max-w-4xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-[20px] bg-seafoam flex items-center justify-center text-teal shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-teal mb-3">
                  What the forecast can&apos;t know
                </h2>
                <p className="text-base text-ink/80 leading-relaxed mb-4">
                  Living water doesn&apos;t read forecasts. Blooms shift, a clear sky can haze over, and a lagoon can surprise everyone — in both directions. Treat the score as a strong steer, not a promise. It&apos;s why we label it a forecast, and why tour operators&apos; own cancellation terms matter.
                </p>
                <div className="text-xs font-semibold text-teal flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-teal" />
                  <span>An estimate, labelled as one, on every page it appears</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA BAND: See it in action */}
      <Section variant="cta" bg="white">
        <Container size="readable">
          <div className="rounded-[20px] bg-gradient-to-r from-teal to-[#164e63] text-white p-8 lg:p-12 text-center shadow-md">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-3">
              See it in action
            </h2>
            <p className="text-white/85 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Check live conditions across Florida, Puerto Rico, and California waterways before you reserve your evening paddle.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/glow-forecast"
                className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-[#ff7b52] text-white h-12 px-6 rounded-full font-bold text-sm transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>Tonight&apos;s glow forecast</span>
              </Link>
              <Link
                href="/moon-phase-calendar"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 h-12 px-6 rounded-full font-bold text-sm transition-colors"
              >
                <Moon className="w-4 h-4" />
                <span>Moon calendar</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
