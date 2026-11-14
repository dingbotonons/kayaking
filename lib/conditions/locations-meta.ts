/**
 * Physical metadata for the live conditions engine: launch-area
 * coordinates, IANA timezone and NOAA CO-OPS water-temperature station
 * candidates per location id. Values from the Prompt F implementation
 * spec (Dash, 2026-11-13). Station candidates are tried in order; a
 * station that returns no water_temperature data is skipped and the
 * location simply shows no water temperature — never a substitute.
 */

export type ConditionsRegionId =
  | "florida"
  | "puerto-rico"
  | "california"
  | "washington";

export interface NoaaStationCandidate {
  id: string;
  /** Fallback display name; the API's own station name wins when returned. */
  name: string;
}

export interface LocationMeta {
  id: string;
  lat: number;
  lng: number;
  timezone: string;
  regionId: ConditionsRegionId;
  /** True for San Diego: no score is ever computed. */
  bloomTracker?: boolean;
  noaaStations: NoaaStationCandidate[];
}

const FLORIDA_STATIONS: NoaaStationCandidate[] = [
  { id: "8721604", name: "Trident Pier, Port Canaveral" },
];

export const LOCATIONS_META: Record<string, LocationMeta> = {
  "cocoa-beach": {
    id: "cocoa-beach",
    lat: 28.32,
    lng: -80.61,
    timezone: "America/New_York",
    regionId: "florida",
    noaaStations: FLORIDA_STATIONS,
  },
  titusville: {
    id: "titusville",
    lat: 28.61,
    lng: -80.81,
    timezone: "America/New_York",
    regionId: "florida",
    noaaStations: FLORIDA_STATIONS,
  },
  "near-orlando": {
    // Tours launch on the Space Coast — use Cocoa Beach coordinates.
    id: "near-orlando",
    lat: 28.32,
    lng: -80.61,
    timezone: "America/New_York",
    regionId: "florida",
    noaaStations: FLORIDA_STATIONS,
  },
  "mosquito-bay": {
    id: "mosquito-bay",
    lat: 18.1,
    lng: -65.45,
    timezone: "America/Puerto_Rico",
    regionId: "puerto-rico",
    noaaStations: [{ id: "9752695", name: "Esperanza, Vieques" }],
  },
  "laguna-grande": {
    id: "laguna-grande",
    lat: 18.36,
    lng: -65.62,
    timezone: "America/Puerto_Rico",
    regionId: "puerto-rico",
    noaaStations: [{ id: "9753216", name: "Fajardo" }],
  },
  "la-parguera": {
    id: "la-parguera",
    lat: 17.97,
    lng: -67.05,
    timezone: "America/Puerto_Rico",
    regionId: "puerto-rico",
    noaaStations: [{ id: "9759110", name: "Magueyes Island" }],
  },
  "tomales-bay": {
    id: "tomales-bay",
    lat: 38.17,
    lng: -122.89,
    timezone: "America/Los_Angeles",
    regionId: "california",
    noaaStations: [{ id: "9415020", name: "Point Reyes" }],
  },
  "san-diego": {
    id: "san-diego",
    lat: 32.85,
    lng: -117.27,
    timezone: "America/Los_Angeles",
    regionId: "california",
    bloomTracker: true,
    noaaStations: [{ id: "9410170", name: "San Diego" }],
  },
  "san-juan-island": {
    id: "san-juan-island",
    lat: 48.53,
    lng: -123.02,
    timezone: "America/Los_Angeles",
    regionId: "washington",
    noaaStations: [
      { id: "9449880", name: "Friday Harbor" },
      { id: "9444900", name: "Port Townsend" },
    ],
  },
  "orcas-island": {
    id: "orcas-island",
    lat: 48.69,
    lng: -122.91,
    timezone: "America/Los_Angeles",
    regionId: "washington",
    noaaStations: [{ id: "9444900", name: "Port Townsend" }],
  },
  "hood-canal": {
    id: "hood-canal",
    lat: 47.67,
    lng: -122.9,
    timezone: "America/Los_Angeles",
    regionId: "washington",
    // No station assigned in the spec — Hood Canal legitimately shows
    // no water temperature rather than borrowing a distant station.
    noaaStations: [],
  },
};

export function getLocationMeta(locationId: string): LocationMeta | undefined {
  return LOCATIONS_META[locationId];
}
