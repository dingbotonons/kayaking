import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import {
  DESTINATION_REGIONS,
  DestinationLocationCard,
} from "@/src/data/destinations";
import {
  getTonightConditions,
  type TonightConditions,
} from "@/lib/conditions";

function LocationCard({
  loc,
  tonight,
}: {
  loc: DestinationLocationCard;
  tonight?: TonightConditions;
}) {
  return (
    <article className="bg-white rounded-[20px] border border-teal/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between group">
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={loc.image}
            alt={loc.imageAlt}
            fill
            unoptimized={loc.image.startsWith("/")}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
          />
        </div>

        <div className="p-6">
          {tonight && tonight.score !== null ? (
            <div className="flex items-end justify-between gap-3 mb-3">
              <div>
                <span className="font-serif text-5xl font-bold text-teal leading-none">
                  {tonight.score}
                </span>
                <span className="text-sm font-semibold text-ink/55"> /100</span>
                <p className="text-[11px] font-semibold text-ink/55 mt-1.5">
                  {tonight.offSeason
                    ? "Off season · glow estimate"
                    : `${tonight.label} · tonight's glow estimate`}
                </p>
              </div>
              {loc.badgeTag && (
                <span className="text-xs font-semibold text-ink/60 text-right">
                  {loc.badgeTag}
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              {tonight?.bloomTracker ? (
                <span className="inline-flex items-center h-7 px-3 rounded-full bg-seafoam text-ink/80 text-xs font-bold">
                  No bloom reported right now
                </span>
              ) : (
                <span />
              )}
              {loc.badgeTag && (
                <span className="text-xs font-semibold text-ink/60">
                  {loc.badgeTag}
                </span>
              )}
            </div>
          )}

          <h3 className="font-serif text-xl font-bold text-ink leading-snug mb-2">
            {loc.name}
          </h3>

          <p className="text-sm leading-relaxed text-ink/80 font-sans">
            {loc.waterAndSeason}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-teal/10 flex items-center justify-between gap-4 mt-auto">
        {loc.priceFormatted ? (
          <div>
            <span className="text-xs text-ink/60 block">Starting price</span>
            <span className="text-sm font-bold text-teal">
              {loc.priceFormatted}
            </span>
          </div>
        ) : (
          <span />
        )}

        {loc.isPublished ? (
          <Link
            href={loc.href}
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-seafoam text-teal hover:bg-teal hover:text-white text-xs font-bold transition-colors shrink-0"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span className="inline-flex items-center h-10 px-4 rounded-full bg-seafoam/60 text-ink/60 text-xs font-semibold shrink-0">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}

export async function DestinationsRegionSections() {
  const forecastIds = DESTINATION_REGIONS.flatMap((region) =>
    region.locations
      .map((loc) => loc.forecastId)
      .filter((id): id is string => Boolean(id))
  );
  const conditionsEntries = await Promise.all(
    forecastIds.map(async (id) => [id, await getTonightConditions(id)] as const)
  );
  const conditionsById = new Map<string, TonightConditions>(conditionsEntries);

  return (
    <>
      {DESTINATION_REGIONS.map((region, idx) => {
        const bg = idx % 2 === 0 ? "white" : "seafoam";
        const gridCols =
          region.locations.length === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : region.locations.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

        return (
          <Section key={region.id} bg={bg} id={region.id}>
            <Container>
              <div className="mb-10 lg:mb-12">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-teal leading-snug">
                    {region.name}
                  </h2>
                  <span className="inline-flex items-center h-7 px-3 rounded-full bg-seafoam text-teal text-xs font-bold border border-teal/15">
                    {region.countLabel}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-ink/80 text-base leading-7 font-sans">
                  {region.intro}
                </p>
              </div>

              <div className={`grid ${gridCols} gap-6 lg:gap-8 mb-8`}>
                {region.locations.map((loc) => (
                  <LocationCard
                    key={loc.id}
                    loc={loc}
                    tonight={
                      loc.forecastId
                        ? conditionsById.get(loc.forecastId)
                        : undefined
                    }
                  />
                ))}
              </div>

              <div className="flex justify-start">
                {region.isHubPublished ? (
                  <Link
                    href={region.hubHref}
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm bg-coral hover:bg-[#ff7b52] text-white shadow-sm transition-colors group"
                  >
                    <span>Explore {region.name} tours</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center h-7 px-3 rounded-full bg-seafoam text-ink/60 text-xs font-semibold">
                    {region.name} tours coming soon
                  </span>
                )}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
