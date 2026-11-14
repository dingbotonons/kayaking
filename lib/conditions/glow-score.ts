/**
 * Glow score formula v1 — exactly as published on /glow-forecast-method/:
 *   Season baseline (documented table) .... up to 40
 *   Moon darkness (SunCalc, moon-up aware) . up to 30
 *   Clear skies (Open-Meteo cloud cover) ... up to 15
 *   Calm water (Open-Meteo wind) ........... up to 15
 * Rain rule (Florida + Puerto Rico only): past-48h rain > 25mm caps
 * the total at 60 and sets rainCapped so the UI can show why.
 * Weather failure: score from season + moon only; cloud/wind = null.
 */

export interface ScoreBreakdown {
  season: number;
  moon: number;
  cloud: number | null;
  wind: number | null;
}

export interface ScoreResult {
  score: number;
  breakdown: ScoreBreakdown;
  rainCapped: boolean;
  weatherUnavailable: boolean;
}

export function moonPoints(illumination: number, moonUpFraction: number): number {
  const effectiveMoonlight = illumination * moonUpFraction;
  return 30 * (1 - effectiveMoonlight);
}

export function cloudPoints(cloudMeanPct: number): number {
  return 15 * (1 - cloudMeanPct / 100);
}

export function windPoints(windMeanKmh: number): number {
  if (windMeanKmh <= 5) return 15;
  if (windMeanKmh >= 30) return 0;
  return (15 * (30 - windMeanKmh)) / 25;
}

export function computeGlowScore(args: {
  seasonBaseline: number;
  illumination: number;
  moonUpFraction: number;
  /** null when the weather fetch failed. */
  weather: { cloudMeanPct: number; windMeanKmh: number; rain48Mm: number } | null;
  /** Rain cap applies to Florida + Puerto Rico only. */
  rainRuleApplies: boolean;
}): ScoreResult {
  const season = args.seasonBaseline;
  const moon = moonPoints(args.illumination, args.moonUpFraction);

  if (!args.weather) {
    return {
      score: Math.max(0, Math.min(100, Math.round(season + moon))),
      breakdown: {
        season: Math.round(season),
        moon: Math.round(moon),
        cloud: null,
        wind: null,
      },
      rainCapped: false,
      weatherUnavailable: true,
    };
  }

  const cloud = cloudPoints(args.weather.cloudMeanPct);
  const wind = windPoints(args.weather.windMeanKmh);
  let total = season + moon + cloud + wind;
  let rainCapped = false;
  if (args.rainRuleApplies && args.weather.rain48Mm > 25 && total > 60) {
    total = 60;
    rainCapped = true;
  }

  return {
    score: Math.max(0, Math.min(100, Math.round(total))),
    breakdown: {
      season: Math.round(season),
      moon: Math.round(moon),
      cloud: Math.round(cloud),
      wind: Math.round(wind),
    },
    rainCapped,
    weatherUnavailable: false,
  };
}

/** Plain-language wind word from thresholds, for generated summaries. */
export function windWord(windMeanKmh: number): string {
  if (windMeanKmh <= 8) return "calm";
  if (windMeanKmh <= 15) return "light wind";
  if (windMeanKmh <= 25) return "breezy";
  return "windy";
}

/** Plain-language cloud word from thresholds, for generated summaries. */
export function cloudWord(cloudMeanPct: number): string {
  if (cloudMeanPct <= 20) return "clear skies";
  if (cloudMeanPct <= 50) return "partly cloudy";
  if (cloudMeanPct <= 80) return "mostly cloudy";
  return "overcast";
}
