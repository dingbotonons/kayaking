import Image from "next/image";
import Link from "next/link";
import { REGIONS } from "@/src/data/locations";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhereWaterGlowsSection() {
  return (
    <Section
      bg="white"
      aria-labelledby="where-water-glows-heading"
      id="destinations"
      className="border-t border-border-soft"
    >
      <Container>
        <SectionHeader
          titleId="where-water-glows-heading"
          title="Where the water glows"
          intro="Four US regions where bays and lagoons light up at night."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {REGIONS.map((region) => (
            <Link
              key={region.id}
              href={region.slug}
              className="custom-card p-6 flex flex-col justify-between bg-white group block h-full"
            >
              <div>
                <div className="aspect-[4/3] rounded-[20px] overflow-hidden mb-6 relative">
                  <Image
                    src={region.image}
                    alt={region.imageAlt}
                    fill
                    unoptimized={region.image.startsWith("/")}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-teal mb-3 group-hover:text-coral transition-colors">
                  {region.name}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block mb-1">
                      Season
                    </span>
                    <p className="text-sm text-ink">{region.season}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block mb-1">
                      Organisms
                    </span>
                    <p className="text-sm text-ink">{region.organisms}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border-soft flex items-center justify-between text-xs font-bold text-teal group-hover:text-coral transition-colors">
                <span>Explore {region.name}</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

