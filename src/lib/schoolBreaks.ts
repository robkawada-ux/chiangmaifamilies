// School calendars for the term-dates block on school pages. /school-breaks
// and /camps are not built for Chiang Mai yet.
//
// RULE: every date below is read off the school's own published calendar.
// Nothing is inferred from "British schools usually...". If a date is not
// published, confidence is "partial" or "unverified" and it renders as such.

export type CalendarStyle = "british" | "american" | "ib" | "australian";
export type Confidence = "verified" | "partial" | "unverified";

export type BreakWindowId =
  | "oct-2026"
  | "winter-2026"
  | "spring-2027"
  | "songkran-2027"
  | "summer-2027"
  | "other-2027";

export interface SchoolBreak {
  window: BreakWindowId;
  start: string;
  end: string;
  endEstimated?: boolean;
  note?: string;
}

export interface SchoolCalendar {
  name: string;
  schoolSlug: string | null;
  style: CalendarStyle;
  sourceUrl: string;
  sourceLabel: string;
  lastVerified: string;
  confidence: Confidence;
  termStart?: string;
  termEnd?: string;
  breaks: SchoolBreak[];
  caveat?: string;
}

// Chiang Mai school calendars go here once read from each school's own calendar.
export const SCHOOL_CALENDARS: SchoolCalendar[] = [];

export interface BreakWindow {
  id: BreakWindowId;
  label: string;
  shortLabel: string;
  start: string;
  end: string;
  coreStart?: string;
  coreEnd?: string;
  summary: string;
}

// Camp seasons for a future Chiang Mai camps directory.
export const BREAK_WINDOWS: BreakWindow[] = [];

export const CALENDAR_LAST_VERIFIED = "2026-09-12";

/** The calendar for a directory school, if we hold one. */
export function calendarFor(schoolSlug: string): SchoolCalendar | null {
  return SCHOOL_CALENDARS.find((c) => c.schoolSlug === schoolSlug) ?? null;
}

/** True when a calendar has dates worth showing on the school's own page. */
export function hasPublishableDates(c: SchoolCalendar | null): boolean {
  return !!c && c.confidence !== "unverified" && (c.breaks.length > 0 || !!c.termStart);
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

/** "12 October 2026" */
export function formatDay(iso: string): string {
  const { y, m, d } = parts(iso);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** "12 to 16 October 2026", "19 December 2026 to 10 January 2027" */
export function formatRange(start: string, end: string): string {
  const a = parts(start);
  const b = parts(end);
  if (a.y === b.y && a.m === b.m) return `${a.d} to ${b.d} ${MONTHS[b.m - 1]} ${b.y}`;
  if (a.y === b.y) return `${a.d} ${MONTHS[a.m - 1]} to ${b.d} ${MONTHS[b.m - 1]} ${b.y}`;
  return `${formatDay(start)} to ${formatDay(end)}`;
}

export function windowLabel(id: BreakWindowId): string {
  return BREAK_WINDOWS.find((w) => w.id === id)?.label ?? id;
}
