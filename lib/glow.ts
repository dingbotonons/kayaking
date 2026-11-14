export interface MoonNight {
  dayLabel: string; // e.g. "Tonight", "Tomorrow", "Wed", "Thu", etc.
  phaseLabel: "Dark" | "Bright" | "New Moon";
  isPeak?: boolean;
  peakBadge?: string; // e.g. "Darkest" | "Optimal" | "Peak Dark"
}

export interface GlowTelemetry {
  locationId: string;
  glowScore: number;
  moonStatusText: string;
  conditionNote: string;
}

/**
 * lib/glow module
 * Provides computed moon and glow forecast telemetry.
 * Conforms to FIXES:
 * "Moon strip percentages are invented (4%, 2%, 9%, 16%…) — never render a moon illumination %
 * that doesn't come from the real SunCalc calculation. Until then, show word labels only (Dark / Bright / New Moon)."
 */
export const MOCK_NEXT_14_NIGHTS: MoonNight[] = [
  { dayLabel: "Tonight", phaseLabel: "New Moon", isPeak: true, peakBadge: "Peak Dark" },
  { dayLabel: "Tomorrow", phaseLabel: "New Moon", isPeak: true, peakBadge: "Peak Dark" },
  { dayLabel: "Wednesday", phaseLabel: "Dark" },
  { dayLabel: "Thursday", phaseLabel: "Dark" },
  { dayLabel: "Friday", phaseLabel: "Dark" },
  { dayLabel: "Saturday", phaseLabel: "Bright" },
  { dayLabel: "Sunday", phaseLabel: "Bright" },
  { dayLabel: "Monday", phaseLabel: "Bright" },
  { dayLabel: "Tuesday", phaseLabel: "Bright" },
  { dayLabel: "Wednesday", phaseLabel: "Bright" },
  { dayLabel: "Thursday", phaseLabel: "Bright" },
  { dayLabel: "Friday", phaseLabel: "Bright" },
  { dayLabel: "Saturday", phaseLabel: "Bright" },
  { dayLabel: "Sunday", phaseLabel: "Bright" },
];

export function getTonightMoonStatusLabel(): string {
  return "Dark skies";
}

/**
 * Central score → chance-label map. Every page that shows a glow score
 * label must derive it from here (or from the location's data record) —
 * never set a label per page. Thresholds keep the supplied scores
 * consistent site-wide: 81–92 read "Excellent chance", 64 reads
 * "Good chance". Washington locations display their season state
 * ("Not in season") instead of a score label while out of season.
 */
export type ScoreChanceLabel =
  | "Excellent chance"
  | "Good chance"
  | "Fair chance"
  | "Poor chance";

export function chanceLabelForScore(score: number): ScoreChanceLabel {
  if (score >= 75) return "Excellent chance";
  if (score >= 55) return "Good chance";
  if (score >= 35) return "Fair chance";
  return "Poor chance";
}

export function getNextDarkNights(count: number = 14): MoonNight[] {
  return MOCK_NEXT_14_NIGHTS.slice(0, count);
}
