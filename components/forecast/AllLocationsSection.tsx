import Link from "next/link";
import { LOCATIONS_STATIC, type LocationStatic } from "@/src/data/locations";
import {
  getSevenNightOutlook,
  getTonightConditions,
  type OutlookChance,
  type TonightConditions,
} from "@/lib/conditions";
import { LocationPinIcon } from "@/components/home/Icons";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface LocationConditionsData {
  loc: LocationStatic;
  tonight: TonightConditions;
  outlookNights: { dateLocal: string; label: OutlookChance }[];
}

interface RegionGroup {
  regionId: "florida" | "puerto-rico" | "california" | "washington";
  title: string;
  badge: string;
  locations: LocationConditionsData[];
}

const REGION_META: {
  regionId: RegionGroup["regionId"];
  title: string;
  badge: string;
}[] = [
  { regionId: "florida", title: "Florida Coast", badge: "Peak Active Season" },
  { regionId: "puerto-rico", title: "Puerto Rico", badge: "Year-Round Bio Bays" },
  { regionId: "california", title: "California", badge: "Pacific Coast" },
  {
    regionId: "washington",
    title: "Washington (Pacific Northwest)",
    badge: "Seasonal Window: June - Sept",
  },
];

export async function AllLocationsSection() {
  const data: LocationConditionsData[] = await Promise.all(
    LOCATIONS_STATIC.map(async (loc) => {
      const [tonight, outlook] = await Promise.all([
        getTonightConditions(loc.id),
        getSevenNightOutlook(loc.id),
      ]);
      return {
        loc,
        tonight,
        outlookNights: outlook.nights.map((n) => ({
          dateLocal: n.dateLocal,
          label: n.label,
        })),
      };
    })
  );

  const regions: RegionGroup[] = REGION_META.map((meta) => ({
    ...meta,
    locations: data.filter((d) => d.loc.regionId === meta.regionId),
  }));

  const getOutlookBadgeStyle = (outlook: OutlookChance) => {
    switch (outlook) {
      case "Excellent":
        return "bg-seafoam text-teal font-semibold";
      case "Good":
        return "bg-[#e7f6f4] text-[#19827d] font-semibold";
      case "Fair":
        return "bg-stone-100 text-ink-muted";
      case "Poor":
        return "bg-stone-100 text-stone-400";
      case "Off season":
        return "bg-stone-100 text-stone-400 italic";
      default:
        return "bg-stone-100 text-ink-muted";
    }
  };

  return (
    <Section bg="seafoam" aria-labelledby="all-locations-heading" id="all-locations">
      <Container>
        <SectionHeader
          titleId="all-locations-heading"
          title="All locations &amp; 7-night outlook"
          intro="Night-by-night breakdown across America's bioluminescent waterways."
          align="left"
        />

        <div className="space-y-12">
          {regions.map((reg) => (
            <div key={reg.regionId} className="space-y-6">
              <div className="flex items-center justify-between border-b border-seafoam-border pb-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl font-bold text-teal">
                    {reg.title}
                  </h3>
                  <span className="text-xs bg-white text-teal px-3 py-1 rounded-full font-bold border border-seafoam-border shadow-xs">
                    {reg.badge}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {reg.locations.map(({ loc, tonight, outlookNights }) => {
                  const href = loc.pageSlug || "/destinations/";
                  return (
                    <div
                      key={loc.id}
                      className="bg-white rounded-[20px] p-6 custom-card border border-teal/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-serif text-xl font-bold text-teal">
                                {loc.name}
                              </h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-ink-muted mt-1">
                              <LocationPinIcon className="w-3.5 h-3.5 text-teal shrink-0" />
                              <span>{loc.state}</span>
                            </div>
                          </div>

                          <div className="text-right">
                            {tonight.score !== null ? (
                              <>
                                <span className="font-serif text-2xl font-bold text-teal block">
                                  {tonight.score}
                                  <span className="text-xs font-sans text-ink-muted font-normal">
                                    /100
                                  </span>
                                </span>
                                <span className="block text-[11px] font-semibold text-ink-muted">
                                  Glow estimate
                                </span>
                              </>
                            ) : null}
                            <span className="text-[11px] font-bold text-teal bg-seafoam px-2 py-0.5 rounded inline-block mt-1">
                              {tonight.label}
                            </span>
                          </div>
                        </div>

                        {loc.notes ? (
                          <p className="text-sm text-ink-muted leading-relaxed mb-4 font-sans">
                            {loc.notes}
                          </p>
                        ) : null}

                        {tonight.score !== null ? (
                          <p className="text-xs text-ink-muted leading-relaxed mb-6 font-sans">
                            {tonight.inputsLine}
                          </p>
                        ) : null}

                        {/* 7-Night Outlook Strip */}
                        {outlookNights.length > 0 ? (
                          <div className="mb-6">
                            <span className="text-[11px] font-bold text-teal uppercase tracking-wider block mb-2">
                              7-Night Outlook
                            </span>
                            <div className="grid grid-cols-7 gap-1.5 text-center">
                              {outlookNights.map((night, idx) => (
                                <div
                                  key={night.dateLocal}
                                  className={`p-2 rounded-lg text-xs flex flex-col items-center justify-center ${getOutlookBadgeStyle(
                                    night.label
                                  )}`}
                                >
                                  <span className="text-[10px] text-ink-muted block uppercase">
                                    {["Ton", "+1", "+2", "+3", "+4", "+5", "+6"][idx]}
                                  </span>
                                  <span className="text-[11px] font-bold mt-0.5">
                                    {night.label === "Off season"
                                      ? "Off"
                                      : night.label === "Excellent"
                                      ? "Best"
                                      : night.label === "Good"
                                      ? "Good"
                                      : night.label === "Fair"
                                      ? "Fair"
                                      : night.label === "Poor"
                                      ? "Poor"
                                      : night.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div className="pt-4 border-t border-border-soft flex items-center justify-between">
                        <span className="text-xs text-ink-muted">
                          {loc.state}
                        </span>
                        <Link
                          href={href}
                          className="text-sm font-bold text-teal hover:text-coral transition-colors"
                        >
                          Tours &amp; details →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
