import "server-only";

import * as SunCalc from "suncalc";
import type { LocationMeta } from "./locations-meta";
import {
  addDaysToDateString,
  formatTimeInZone,
  zonedTimeToUtc,
} from "./time";

export interface MoonNightData {
  /** Illumination fraction 0..1 at the middle of the tour window. */
  illumination: number;
  illuminationPct: number;
  /** SunCalc phase 0..1 (0/1 new, 0.5 full). */
  phase: number;
  moonriseIso: string | null;
  moonsetIso: string | null;
  /** Share of the 20:00 / 21:30 / 23:00 local samples with the moon up. */
  moonUpFraction: number;
  /** Generated wording, e.g. "moon sets before tours", "moon up all tour hours". */
  moonNote: string;
  /** "9:42 PM" when a moonset falls inside the night span, else null. */
  moonsetLabel: string | null;
}

const SAMPLE_TIMES: Array<[number, number]> = [
  [20, 0],
  [21, 30],
  [23, 0],
];

function localInstant(
  meta: LocationMeta,
  dateStr: string,
  hour: number,
  minute: number
): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return zonedTimeToUtc(meta.timezone, y, m, d, hour, minute);
}

/**
 * Moon data for one local tour night (evening of `dateStr`, local).
 * Moonlight counts only while the moon is up during tour hours:
 * samples at 20:00, 21:30 and 23:00 local, per the spec.
 */
export function getMoonForNight(
  meta: LocationMeta,
  dateStr: string
): MoonNightData {
  const samples = SAMPLE_TIMES.map(([h, mi]) => {
    const instant = localInstant(meta, dateStr, h, mi);
    const pos = SunCalc.getMoonPosition(instant, meta.lat, meta.lng);
    return { instant, altitude: pos.altitude };
  });
  const upCount = samples.filter((s) => s.altitude > 0).length;
  const moonUpFraction = upCount / samples.length;

  const mid = samples[1].instant;
  const illum = SunCalc.getMoonIllumination(mid);
  const illumination = illum.fraction;
  const illuminationPct = Math.round(illumination * 100);

  // Gather moonrise/moonset events for the night span (local noon of
  // dateStr → local noon of the next day) from the three surrounding
  // SunCalc days, since SunCalc attributes events to UTC calendar days.
  const spanStart = localInstant(meta, dateStr, 12, 0);
  const spanEnd = localInstant(meta, addDaysToDateString(dateStr, 1), 12, 0);
  const rises: Date[] = [];
  const sets: Date[] = [];
  for (const probe of [spanStart, mid, spanEnd]) {
    const times = SunCalc.getMoonTimes(probe, meta.lat, meta.lng);
    if (times.rise && times.rise >= spanStart && times.rise < spanEnd)
      rises.push(times.rise);
    if (times.set && times.set >= spanStart && times.set < spanEnd)
      sets.push(times.set);
  }
  rises.sort((a, b) => a.getTime() - b.getTime());
  sets.sort((a, b) => a.getTime() - b.getTime());
  const moonrise = rises[0] ?? null;
  const moonset = sets[0] ?? null;

  const windowStart = localInstant(meta, dateStr, 19, 0);
  const windowEnd = localInstant(meta, addDaysToDateString(dateStr, 1), 0, 0);

  let moonNote: string;
  if (moonUpFraction === 1) {
    moonNote = "moon up all tour hours";
  } else if (moonUpFraction === 0) {
    if (moonset && moonset > windowStart && moonset < windowEnd) {
      moonNote = `moon sets ${formatTimeInZone(meta.timezone, moonset)}`;
    } else if (moonset && moonset <= windowStart) {
      moonNote = "moon sets before tours";
    } else if (moonrise && moonrise >= windowEnd) {
      moonNote = "moon rises after tours";
    } else {
      moonNote = "moon down during tour hours";
    }
  } else if (moonset && moonset > windowStart && moonset < windowEnd) {
    moonNote = `moon sets ${formatTimeInZone(meta.timezone, moonset)}`;
  } else if (moonrise && moonrise > windowStart && moonrise < windowEnd) {
    moonNote = `moon rises ${formatTimeInZone(meta.timezone, moonrise)}`;
  } else {
    moonNote = "moon up for part of tour hours";
  }

  return {
    illumination,
    illuminationPct,
    phase: illum.phase,
    moonriseIso: moonrise ? moonrise.toISOString() : null,
    moonsetIso: moonset ? moonset.toISOString() : null,
    moonUpFraction,
    moonNote,
    moonsetLabel: moonset
      ? formatTimeInZone(meta.timezone, moonset)
      : null,
  };
}
