import { Fragment } from "react";
import { ExternalLink } from "@/components/ui/Icons";
import { AFFILIATE_REL } from "@/lib/affiliates";
import { TOURS, PRICE_CHECKED_DATE, type Tour } from "@/src/data/tours";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Full kayak-only comparison table (owner audit round 2, 2026-11-13):
 * every current tour in the catalogue whose tourType is kayak-based,
 * grouped by launch area so 20+ rows stay scannable. Boat, swim,
 * water-bike, canoe and raft trips are deliberately NOT here — they
 * are compared on each bay's own page instead.
 */
const KAYAK_TOUR_TYPES = new Set([
  "regular kayak",
  "clear kayak",
  "clear kayak + boat transfer",
  "regular kayak (combo)",
]);

const LOCATION_GROUPS: { slug: string; label: string }[] = [
  { slug: "florida/cocoa-beach", label: "Cocoa Beach, Florida" },
  { slug: "florida/titusville", label: "Titusville & Merritt Island, Florida" },
  {
    slug: "florida/bioluminescent-kayaking-near-orlando",
    label: "Near Orlando, Florida",
  },
  { slug: "puerto-rico/mosquito-bay-vieques", label: "Mosquito Bay, Vieques" },
  {
    slug: "puerto-rico/laguna-grande-fajardo",
    label: "Laguna Grande, Fajardo",
  },
  {
    slug: "puerto-rico/bio-bay-tours-from-san-juan",
    label: "Departures from San Juan, Puerto Rico",
  },
  { slug: "washington/san-juan-island", label: "San Juan Island, Washington" },
  { slug: "washington/orcas-island", label: "Orcas Island, Washington" },
];

interface TableRow {
  tour: Tour;
  price: string;
  rating: string;
}

export function CompareTableSection() {
  const groups = LOCATION_GROUPS.map((group) => ({
    ...group,
    rows: TOURS.filter(
      (t) => t.locationSlug === group.slug && KAYAK_TOUR_TYPES.has(t.tourType)
    ).map(
      (tour): TableRow => ({
        tour,
        price: tour.priceFormatted.replace(/^from /, ""),
        rating:
          tour.rating !== null && tour.reviewCount !== null
            ? `${tour.rating.toFixed(1)} (${tour.reviewCount} reviews)`
            : "Not yet rated",
      })
    ),
  })).filter((group) => group.rows.length > 0);

  const totalRows = groups.reduce((sum, g) => sum + g.rows.length, 0);

  return (
    <Section id="comparison-table" bg="white">
      <Container>
        <SectionHeader
          title="Comparison table"
          description={`All ${totalRows} kayak tours in the catalogue, grouped by launch area — lengths, ratings and starting rates side by side. Prices checked on GetYourGuide, ${PRICE_CHECKED_DATE}.`}
        />

        <div className="bg-white rounded-[20px] border border-teal/15 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-seafoam/50 border-b border-teal/15 text-xs font-bold text-teal">
                  <th scope="col" className="py-4 px-6">
                    Tour
                  </th>
                  <th scope="col" className="py-4 px-6">
                    Launch
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Time
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Rating
                  </th>
                  <th scope="col" className="py-4 px-4">
                    From
                  </th>
                  <th scope="col" className="py-4 px-6 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10 text-xs sm:text-sm">
                {groups.map((group) => (
                  <Fragment key={group.slug}>
                    <tr className="bg-seafoam/30 border-y border-teal/10">
                      <td
                        colSpan={6}
                        className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-teal"
                      >
                        {group.label} · {group.rows.length} kayak{" "}
                        {group.rows.length === 1 ? "tour" : "tours"}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr
                        key={row.tour.id}
                        className="hover:bg-seafoam/20 transition-colors"
                      >
                        <td className="py-5 px-6 font-semibold text-ink">
                          {row.tour.name}
                        </td>
                        <td className="py-5 px-6 text-ink/80">
                          {row.tour.launchPoint}
                        </td>
                        <td className="py-5 px-4 text-ink/80">
                          {row.tour.duration || "—"}
                        </td>
                        <td className="py-5 px-4 text-ink/80">{row.rating}</td>
                        <td
                          className={`py-5 px-4 font-semibold tabular-nums ${row.price.startsWith("$") ? "font-serif text-base sm:text-lg font-bold text-teal" : "text-ink/60 italic text-xs"}`}
                        >
                          {row.price}
                        </td>
                        <td className="py-5 px-6 text-right">
                          <a
                            href={row.tour.affiliateUrl}
                            target="_blank"
                            rel={AFFILIATE_REL}
                            className="inline-flex items-center justify-center gap-1.5 bg-coral hover:bg-coral-hover text-white h-9 px-4 rounded-full text-xs font-bold transition-all active:scale-95 shadow-xs"
                          >
                            <span>Check dates</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-ink/70 mt-6 max-w-3xl">
          Only kayak tours are in this table. The boat, swim and water-bike
          trips — including every tour at La Parguera, which has no kayak
          tours on GetYourGuide — are compared on each bay&apos;s own page.
        </p>
      </Container>
    </Section>
  );
}
