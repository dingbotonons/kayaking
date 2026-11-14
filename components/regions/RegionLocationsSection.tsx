import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { RegionPageContent } from "@/src/data/region-pages";

/** Region location cards — mirrors FloridaWhereToPaddle. */
export function RegionLocationsSection({
  region,
}: {
  region: RegionPageContent;
}) {
  const gridCols =
    region.locations.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <Section bg="white" id="where-to-paddle">
      <Container>
        <SectionHeader
          eyebrow="Launch Regions"
          title={region.locationsTitle}
          intro={region.locationsIntro}
          align="center"
        />

        <div className={`grid ${gridCols} gap-6 lg:gap-8`}>
          {region.locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-[20px] overflow-hidden border border-teal/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200 h-full"
            >
              <div>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={loc.image}
                    alt={loc.imageAlt}
                    fill
                    unoptimized={loc.image.startsWith("/")}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-teal text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {loc.tagline}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-teal mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-bold text-coral uppercase tracking-wider mb-3">
                    {loc.verdict}
                  </p>
                  <p className="text-sm text-ink/80 leading-relaxed mb-4 font-sans">
                    {loc.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-border-soft">
                    {loc.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-ink/70 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={loc.href}
                  className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full bg-seafoam hover:bg-seafoam-border text-teal font-bold text-sm transition-colors duration-150"
                >
                  View the {loc.name} guide
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
