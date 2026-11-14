import "server-only";

import { cacheLife } from "next/cache";
import { chanceLabelForScore } from "../glow";
import { getBaselineForMonth } from "../../src/data/season-baselines";
import { getLocationMeta, type LocationMeta } from "./locations-meta";
import { getMoonForNight, type MoonNightData } from "./moon";
import { getNightWeatherByDate, type NightWeather } from "./weather";
import { getWaterTemperature } from "./water";
import {
  cloudWord,
  computeGlowScore,
  windWord,
  type ScoreBreakdown,
} from "./glow-score";
import {
  addDaysToDateString,
  localDateString,
  monthOfDateString,
  weekdayLabel,
} from "./time";

export type OutlookChance =
  | "Excellent"
  | "Good"
  | "Fair"
  | "Poor"
  | "Off season";

export interface ConditionInputs {
  illuminationPct: number;
  moonNote: string;
  cloudPct: number | null;
  windKmh: number | null;
  windWord: string | null;
  waterTempF?: number;
  waterStationName?: string;
  /** Display label, e.g. "Nov 12, 2:54 PM". */
  waterObservedAt?: string;
}

export interface TonightConditions {
  locationId: string;
  /** Location-local date the score is for, "YYYY-MM-DD". */
  dateLocal: string;
  /** Null only for San Diego (bloom tracker — never scored). */
  score: number | null;
  label: string;
  offSeason: boolean;
  bloomTracker: boolean;
  breakdown: ScoreBreakdown | null;
  inputs: ConditionInputs;
  /** Generated from the real values — never a canned string. */
  inputsLine: string;
  /** Generated summary, e.g. "dark moon · clear skies · light wind". */
  summary: string;
  rainCapped: boolean;
  weatherUnavailable: boolean;
}

export interface OutlookNight {
  dateLocal: string;
  dayLabel: string;
  score: number | null;
  label: OutlookChance;
}

export interface SevenNightOutlook {
  locationId: string;
  bloomTracker: boolean;
  nights: OutlookNight[];
}

const RAIN_RULE_REGIONS = new Set(["florida", "puerto-rico"]);

function shortChanceLabel(score: number): OutlookChance {
  const full = chanceLabelForScore(score);
  return full.replace(" chance", "") as OutlookChance;
}

function moonDescriptor(moon: MoonNightData): string {
  const effective = moon.illumination * moon.moonUpFraction;
  if (effective < 0.1) return "dark moon";
  if (moon.illumination < 0.35) return "thin moon";
  if (moon.illumination < 0.75) return "half-lit moon";
  return "bright moon";
}

async function fetchWeatherMap(
  meta: LocationMeta,
  dateStrs: string[]
): Promise<{ map: Map<string, NightWeather>; failed: boolean }> {
  try {
    const map = await getNightWeatherByDate(meta, dateStrs);
    return { map, failed: false };
  } catch {
    return { map: new Map(), failed: true };
  }
}

function scoreForNight(
  meta: LocationMeta,
  dateStr: string,
  weather: NightWeather | undefined,
  weatherFailed: boolean
) {
  const baseline = getBaselineForMonth(meta.id, monthOfDateString(dateStr));
  if (baseline === null) return null;
  const moon = getMoonForNight(meta, dateStr);
  const result = computeGlowScore({
    seasonBaseline: baseline,
    illumination: moon.illumination,
    moonUpFraction: moon.moonUpFraction,
    weather: weatherFailed ? null : (weather ?? null),
    rainRuleApplies: RAIN_RULE_REGIONS.has(meta.regionId),
  });
  return { moon, result, baseline };
}

async function computeTonight(locationId: string): Promise<TonightConditions> {
  const meta = getLocationMeta(locationId);
  if (!meta) throw new Error(`Unknown conditions location: ${locationId}`);

  const tonight = localDateString(meta.timezone);
  const dateStrs = Array.from({ length: 7 }, (_, i) =>
    addDaysToDateString(tonight, i)
  );
  const [{ map: weatherMap, failed: weatherFailed }, water] =
    await Promise.all([
      fetchWeatherMap(meta, dateStrs),
      getWaterTemperature(meta),
    ]);

  const moon = getMoonForNight(meta, tonight);
  const waterInput: Partial<ConditionInputs> = water
    ? {
        waterTempF: water.tempF,
        waterStationName: water.stationName,
        waterObservedAt: water.observedAtLabel,
      }
    : {};

  if (meta.bloomTracker) {
    // San Diego: no score, ever. Inputs are still real and available
    // for display, but nothing on the site renders a number for it.
    return {
      locationId,
      dateLocal: tonight,
      score: null,
      label: "No bloom reported right now",
      offSeason: false,
      bloomTracker: true,
      breakdown: null,
      inputs: {
        illuminationPct: moon.illuminationPct,
        moonNote: moon.moonNote,
        cloudPct: null,
        windKmh: null,
        windWord: null,
        ...waterInput,
      },
      inputsLine: "",
      summary: "No bloom reported right now",
      rainCapped: false,
      weatherUnavailable: false,
    };
  }

  const scored = scoreForNight(
    meta,
    tonight,
    weatherMap.get(tonight),
    weatherFailed
  );
  if (!scored) throw new Error(`No season baseline for ${locationId}`);
  const { result } = scored;
  const offSeason = scored.baseline <= 6;
  const weather = weatherFailed ? undefined : weatherMap.get(tonight);

  const inputs: ConditionInputs = {
    illuminationPct: moon.illuminationPct,
    moonNote: moon.moonNote,
    cloudPct: weather ? Math.round(weather.cloudMeanPct) : null,
    windKmh: weather ? Math.round(weather.windMeanKmh) : null,
    windWord: weather ? windWord(weather.windMeanKmh) : null,
    ...waterInput,
  };

  const parts = [`Moon ${inputs.illuminationPct}% lit`, moon.moonNote];
  if (weatherFailed || !weather) {
    parts.push("Weather unavailable right now");
  } else {
    parts.push(`Cloud ${inputs.cloudPct}%`);
    parts.push(`Wind ${inputs.windKmh} km/h`);
  }
  if (water) {
    parts.push(
      `Water ${water.tempF.toFixed(1)}°F at ${water.stationName} · ${water.observedAtLabel}`
    );
  }
  if (result.rainCapped) {
    parts.push("Score capped — heavy rain in the last 48 hours dilutes the bay");
  }

  const summary = weatherFailed || !weather
    ? `${moonDescriptor(moon)} · weather unavailable`
    : `${moonDescriptor(moon)} · ${cloudWord(weather.cloudMeanPct)} · ${windWord(weather.windMeanKmh)}`;

  return {
    locationId,
    dateLocal: tonight,
    score: result.score,
    label: offSeason ? "Off season" : chanceLabelForScore(result.score),
    offSeason,
    bloomTracker: false,
    breakdown: result.breakdown,
    inputs,
    inputsLine: parts.join(" · "),
    summary,
    rainCapped: result.rainCapped,
    weatherUnavailable: result.weatherUnavailable,
  };
}

async function computeOutlook(locationId: string): Promise<SevenNightOutlook> {
  const meta = getLocationMeta(locationId);
  if (!meta) throw new Error(`Unknown conditions location: ${locationId}`);

  if (meta.bloomTracker) {
    return { locationId, bloomTracker: true, nights: [] };
  }

  const tonight = localDateString(meta.timezone);
  const dateStrs = Array.from({ length: 7 }, (_, i) =>
    addDaysToDateString(tonight, i)
  );
  const { map: weatherMap, failed: weatherFailed } = await fetchWeatherMap(
    meta,
    dateStrs
  );

  const nights: OutlookNight[] = dateStrs.map((dateStr, idx) => {
    const scored = scoreForNight(
      meta,
      dateStr,
      weatherMap.get(dateStr),
      weatherFailed
    );
    if (!scored) {
      return {
        dateLocal: dateStr,
        dayLabel: idx === 0 ? "Tonight" : weekdayLabel(meta.timezone, dateStr),
        score: null,
        label: "Off season" as OutlookChance,
      };
    }
    const offSeason = scored.baseline <= 6;
    return {
      dateLocal: dateStr,
      dayLabel: idx === 0 ? "Tonight" : weekdayLabel(meta.timezone, dateStr),
      score: scored.result.score,
      label: offSeason
        ? ("Off season" as OutlookChance)
        : shortChanceLabel(scored.result.score),
    };
  });

  return { locationId, bloomTracker: false, nights };
}

/**
 * Tonight's computed glow estimate for a location. Cached for one
 * hour (Cache Components model: 'use cache' + cacheLife; the route
 * segment `revalidate` export no longer exists when cacheComponents
 * is enabled — see node_modules/next/dist/docs route-segment-config).
 */
export async function getTonightConditions(
  locationId: string
): Promise<TonightConditions> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 3600, expire: 86400 });
  return computeTonight(locationId);
}

export async function getSevenNightOutlook(
  locationId: string
): Promise<SevenNightOutlook> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 3600, expire: 86400 });
  return computeOutlook(locationId);
}
