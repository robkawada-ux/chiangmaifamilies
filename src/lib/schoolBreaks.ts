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

// Camp seasons for the Chiang Mai camps directory (/camps), 5 Nov 2026.
export const BREAK_WINDOWS: BreakWindow[] = [
  {
    id: "winter-2026",
    label: "Christmas and New Year 2026/27",
    shortLabel: "Christmas 2026",
    start: "2026-12-14",
    end: "2027-01-08",
    coreStart: "2026-12-21",
    coreEnd: "2027-01-01",
    summary:
      "Chiang Mai schools break up at different times: Prem from 14 December, Grace and APIS from 19 December, with Grace back on 5 January and APIS on 11 January. Camps run from 14 December to 8 January, so check your own school's dates first.",
  },
  {
    id: "other-2027",
    label: "January to February 2027, for visiting families",
    shortLabel: "Jan to Feb 2027",
    start: "2027-01-11",
    end: "2027-02-27",
    summary:
      "The cool season brings visiting families, and a few Chiang Mai camps run week by week through term time for them, including residential English weeks. Useful if your child is not in school here.",
  },
  {
    id: "spring-2027",
    label: "February half term 2027",
    shortLabel: "February 2027",
    start: "2027-02-08",
    end: "2027-02-19",
    summary:
      "Half term dates vary: Prem's is 8 to 12 February. Check your own school's calendar before booking.",
  },
  {
    id: "songkran-2027",
    label: "Easter and Songkran 2027",
    shortLabel: "Songkran 2027",
    start: "2027-03-29",
    end: "2027-04-18",
    summary:
      "Prem breaks from 29 March to 16 April, and Grace from 10 to 18 April. Songkran itself is 13 to 15 April.",
  },
  {
    id: "summer-2027",
    label: "Summer 2027",
    shortLabel: "Summer 2027",
    start: "2027-06-14",
    end: "2027-08-13",
    summary:
      "The main camp season. In 2026 Chiang Mai summer camps ran from mid June to mid August. Most operators publish summer dates between February and April, so many listings below still show the dates they ran in 2026.",
  },
];

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
