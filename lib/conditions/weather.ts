import "server-only";

import type { LocationMeta } from "./locations-meta";

export interface NightWeather {
  /** Mean cloud cover % over the 19:00–24:00 local window. */
  cloudMeanPct: number;
  /** Mean wind speed km/h over the same window. */
  windMeanKmh: number;
  /** Precipitation (mm) summed over the 48 hours before the window. */
  rain48Mm: number;
}

interface OpenMeteoResponse {
  hourly?: {
    time?: string[];
    cloud_cover?: Array<number | null>;
    wind_speed_10m?: Array<number | null>;
    precipitation?: Array<number | null>;
  };
}

/**
 * One Open-Meteo call per location (past 2 days + 8 forecast days,
 * location timezone) covering tonight, the 7-night outlook and the
 * past-48h rain rule. Throws on any failure — the caller degrades to
 * season + moon and flags weatherUnavailable.
 */
export async function getNightWeatherByDate(
  meta: LocationMeta,
  dateStrs: string[]
): Promise<Map<string, NightWeather>> {
  const params = new URLSearchParams({
    latitude: String(meta.lat),
    longitude: String(meta.lng),
    hourly: "cloud_cover,wind_speed_10m,precipitation",
    past_days: "2",
    forecast_days: "8",
    timezone: meta.timezone,
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`Open-Meteo ${res.status} for ${meta.id}`);
  }
  const json = (await res.json()) as OpenMeteoResponse;
  const times = json.hourly?.time ?? [];
  const cloud = json.hourly?.cloud_cover ?? [];
  const wind = json.hourly?.wind_speed_10m ?? [];
  const precip = json.hourly?.precipitation ?? [];
  if (times.length === 0) {
    throw new Error(`Open-Meteo empty response for ${meta.id}`);
  }

  const indexByHourKey = new Map<string, number>();
  times.forEach((t, i) => indexByHourKey.set(t.slice(0, 13), i));

  const result = new Map<string, NightWeather>();
  for (const dateStr of dateStrs) {
    const startIdx = indexByHourKey.get(`${dateStr}T19`);
    if (startIdx === undefined) continue; // window outside the forecast range

    // Window = 19:00..23:00 (the hours of 19:00–24:00).
    const cloudVals: number[] = [];
    const windVals: number[] = [];
    let complete = true;
    for (let h = 0; h < 5; h++) {
      const c = cloud[startIdx + h];
      const w = wind[startIdx + h];
      if (typeof c !== "number" || typeof w !== "number") {
        complete = false;
        break;
      }
      cloudVals.push(c);
      windVals.push(w);
    }
    if (!complete) continue;

    // Rain rule: precipitation sum over the 48 hours before the window.
    let rain48 = 0;
    for (let i = Math.max(0, startIdx - 48); i < startIdx; i++) {
      const p = precip[i];
      if (typeof p === "number") rain48 += p;
    }

    const mean = (vals: number[]) =>
      vals.reduce((a, b) => a + b, 0) / vals.length;
    result.set(dateStr, {
      cloudMeanPct: mean(cloudVals),
      windMeanKmh: mean(windVals),
      rain48Mm: rain48,
    });
  }
  return result;
}
