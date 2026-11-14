import { getSeasonEntry } from "@/src/data/season-baselines";

export const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Month-by-month season strip rendered from the documented season
 * baseline for a location (src/data/season-baselines.ts) — the same
 * numbers the Glow Forecast scores from. Peak months (baseline ≥ 32
 * of 40) are teal, shoulder months (≥ 14) seafoam, low months stone.
 * Bloom-tracker locations (San Diego) render no strip.
 */
export function SeasonMonthStrip({ locationId }: { locationId: string }) {
  const entry = getSeasonEntry(locationId);
  if (!entry || entry.type !== "seasonal") return null;

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 text-center">
      {entry.monthlyBaseline.map((value, idx) => {
        const tier =
          value >= 32
            ? "bg-teal text-white shadow-xs"
            : value >= 14
              ? "bg-seafoam text-teal border border-teal/10"
              : "bg-stone-50 text-ink/50 border border-stone-200";
        const label =
          value >= 32 ? "Peak" : value >= 14 ? "Shoulder" : "Off";
        return (
          <div
            key={idx}
            className={`p-2.5 rounded-[12px] flex flex-col items-center justify-center ${tier}`}
          >
            <span className="text-xs font-bold uppercase block">
              {MONTH_NAMES[idx]}
            </span>
            <span className="text-[10px] font-semibold mt-0.5">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

/** "July and August" style summary of a location's peak months. */
export function peakWindowLabel(locationId: string): string | null {
  const entry = getSeasonEntry(locationId);
  if (!entry || entry.type !== "seasonal") return null;
  const max = Math.max(...entry.monthlyBaseline);
  const full = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const peak = entry.monthlyBaseline
    .map((value, idx) => (value === max ? full[idx] : null))
    .filter((name): name is string => Boolean(name));
  if (peak.length === 0) return null;
  if (peak.length === 1) return peak[0];
  return `${peak.slice(0, -1).join(", ")} and ${peak[peak.length - 1]}`;
}
