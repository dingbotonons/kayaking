import "server-only";

import type { LocationMeta } from "./locations-meta";
import { formatNoaaTimestamp } from "./time";

export interface WaterReading {
  tempF: number;
  stationId: string;
  stationName: string;
  /** Raw station-local timestamp from NOAA, e.g. "2026-11-12 14:54". */
  observedAt: string;
  /** Display label, e.g. "Nov 12, 2:54 PM". */
  observedAtLabel: string;
}

interface NoaaResponse {
  metadata?: { id?: string; name?: string };
  data?: Array<{ t?: string; v?: string }>;
  error?: { message?: string };
}

/**
 * Latest observed water temperature from NOAA CO-OPS, trying the
 * location's station candidates in order. Returns null when no
 * station returns data — the UI then shows no water temperature at
 * all. Failures are silent by design (supporting data only).
 *
 * Station outcomes recorded at build time (2026-11-13): Point Reyes
 * 9415020 and San Diego 9410170 and Port Townsend 9444900 returned
 * readings; Esperanza 9752695, Fajardo 9753216, Magueyes Island
 * 9759110, Trident Pier 8721604 and Friday Harbor 9449880 returned
 * "No data was found" for water_temperature, so the Puerto Rico and
 * Florida locations and Hood Canal (no station assigned) render no
 * water temperature until a listed station reports again. The runtime
 * retry below means a station coming back online is picked up
 * automatically within the cache hour.
 */
export async function getWaterTemperature(
  meta: LocationMeta
): Promise<WaterReading | null> {
  for (const station of meta.noaaStations) {
    try {
      const params = new URLSearchParams({
        date: "latest",
        station: station.id,
        product: "water_temperature",
        units: "english",
        time_zone: "lst_ldt",
        format: "json",
        application: "bioluminescentkayaking.us",
      });
      const res = await fetch(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?${params.toString()}`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) continue;
      const json = (await res.json()) as NoaaResponse;
      const row = json.data?.[0];
      if (!row || typeof row.v !== "string" || typeof row.t !== "string")
        continue;
      const tempF = Number(row.v);
      if (!Number.isFinite(tempF)) continue;
      return {
        tempF,
        stationId: station.id,
        stationName: json.metadata?.name ?? station.name,
        observedAt: row.t,
        observedAtLabel: formatNoaaTimestamp(row.t),
      };
    } catch {
      continue;
    }
  }
  return null;
}
