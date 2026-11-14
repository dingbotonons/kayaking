/**
 * Timezone helpers for the conditions engine. The server may run in
 * UTC while every location keeps its own local tour date, so all
 * "tonight" maths goes through IANA timezones via Intl — never the
 * server's local clock.
 */

const partsFormatterCache = new Map<string, Intl.DateTimeFormat>();

function partsFormatter(timeZone: string): Intl.DateTimeFormat {
  let fmt = partsFormatterCache.get(timeZone);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    });
    partsFormatterCache.set(timeZone, fmt);
  }
  return fmt;
}

export interface ZonedParts {
  year: number;
  month: number; // 1-12
  day: number;
  hour: number; // 0-23
  minute: number;
  second: number;
}

export function getZonedParts(timeZone: string, instant: Date): ZonedParts {
  const parts = partsFormatter(timeZone).formatToParts(instant);
  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour") % 24,
    minute: get("minute"),
    second: get("second"),
  };
}

/** Offset (ms) of the timezone's wall clock ahead of UTC at an instant. */
function tzOffsetMs(timeZone: string, utcMs: number): number {
  const p = getZonedParts(timeZone, new Date(utcMs));
  const wallAsUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return wallAsUtc - Math.floor(utcMs / 1000) * 1000;
}

/** Convert a wall-clock time in `timeZone` to a UTC instant. */
export function zonedTimeToUtc(
  timeZone: string,
  year: number,
  month: number, // 1-12
  day: number,
  hour: number,
  minute: number
): Date {
  const guess = Date.UTC(year, month - 1, day, hour, minute, 0);
  let utc = guess - tzOffsetMs(timeZone, guess);
  const refined = guess - tzOffsetMs(timeZone, utc);
  if (refined !== utc) utc = refined;
  return new Date(utc);
}

export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

/** "YYYY-MM-DD" for the location's current local date. */
export function localDateString(timeZone: string, instant: Date = new Date()): string {
  const p = getZonedParts(timeZone, instant);
  return `${p.year}-${pad2(p.month)}-${pad2(p.day)}`;
}

/** Add days to a "YYYY-MM-DD" string (pure calendar maths, no tz). */
export function addDaysToDateString(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return `${dt.getUTCFullYear()}-${pad2(dt.getUTCMonth() + 1)}-${pad2(dt.getUTCDate())}`;
}

export function monthOfDateString(dateStr: string): number {
  return Number(dateStr.split("-")[1]);
}

/** Short weekday label ("Fri") for a local calendar date. */
export function weekdayLabel(timeZone: string, dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const noonUtc = zonedTimeToUtc(timeZone, y, m, d, 12, 0);
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
  }).format(noonUtc);
}

/** "9:42 PM" style label for an instant, in the location's timezone. */
export function formatTimeInZone(timeZone: string, instant: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(instant);
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * NOAA CO-OPS returns station-local timestamps like "2026-11-12 14:54"
 * (lst_ldt). Format one for display without reinterpreting its zone:
 * "Nov 12, 2:54 PM".
 */
export function formatNoaaTimestamp(t: string): string {
  const match = t.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/);
  if (!match) return t;
  const [, , mo, d, hh, mm] = match;
  const hour24 = Number(hh);
  const ampm = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${MONTH_NAMES[Number(mo) - 1]} ${Number(d)}, ${hour12}:${mm} ${ampm}`;
}
