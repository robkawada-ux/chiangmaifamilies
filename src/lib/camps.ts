import type { Featured } from "./featured";

// Camps directory. One Camp per OPERATOR, with nested sessions.
//
// A Camp is the organisation that runs the camp. A CampSession is one
// bookable programme-week: a specific programme running on specific dates
// for a specific age range at a specific price.
//
// The directory filters on SESSIONS, not operators, because a parent is
// shopping for a specific week at a specific price for a specific child.
// This is why categories, ages and price all live on the session: one
// operator can run a Thai literacy week and a competitive swimming week
// that share nothing but a car park.
//
// MAINTENANCE: sessions expire. Every session carries lastVerified and
// dateStatus. See the quarterly verification pass in the project notes.

import type { BreakWindowId } from "./schoolBreaks";

export type CampFormat = "day" | "half-day" | "residential";

export type CampCategory =
  | "academic"
  | "art-and-design"
  | "cookery"
  | "language-learning"
  | "music-and-drama"
  | "nature-and-outdoors"
  | "sport-and-fitness"
  | "stem"
  | "swimming"
  | "multi-activity";

/**
 * confirmed      dates published by the operator for this run
 * tba            operator has announced the camp but not the dates
 * ran-previously ran in a past year, not yet re-announced. Shown greyed,
 *                with previousRun giving the dates it last ran.
 */
export type DateStatus = "confirmed" | "tba" | "ran-previously";

export type PriceUnit = "per-day" | "per-week" | "per-session";

export interface CampSession {
  id: string;
  /** Programme name, e.g. "English (EAL) Camp". Operators run many. */
  programme: string;
  /** Which city-wide break window this falls in. See BREAK_WINDOWS. */
  window: BreakWindowId;
  /** Inclusive. Required when dateStatus is "confirmed". */
  startDate?: string;
  endDate?: string;
  dateStatus: DateStatus;
  /** Human-readable dates of the last confirmed run, for ran-previously. */
  previousRun?: string;
  /** On the session, not the operator. A provider spans categories. */
  categories: CampCategory[];
  /**
   * Real numbers, not brackets, so the age filter can be a single input.
   * Omit BOTH when the operator genuinely does not publish an age range,
   * the same rule as price. A session with no ages renders as "Age range
   * not published" and is never hidden by the age filter, because hiding
   * it would punish the parent for the operator's omission.
   */
  minAge?: number;
  maxAge?: number;
  format: CampFormat;
  /** Baht. Omit all three when genuinely unpublished rather than guessing. */
  priceFrom?: number;
  priceTo?: number;
  priceUnit?: PriceUnit;
  /** True when the price is our researched estimate, not a published figure. */
  priceEstimated?: boolean;
  /** Where this session runs. Omit when it is the operator's main venue. */
  venue?: string;
  /** Daily start and end, e.g. "9am to 3pm". */
  hours?: string;
  minimumBooking?: string;
  lunchIncluded?: boolean;
  /** Residential only. */
  nights?: number;
  supervisionRatio?: string;
  bookingUrl?: string;
  note?: string;
  lastVerified: string;
}

export interface Camp {
  slug: string;
  name: string;
  /** Chiang Mai area where the camp runs. */
  area: string;
  /** Where camps physically run, when it is worth naming. Shown in the hero. */
  mainVenue?: string;
  /**
   * Operator-supplied image, path under /public. Only with explicit
   * permission. Some operators permit use but forbid alteration, so this
   * renders whole and unclipped rather than cropped to a hero band.
   */
  photo?: string;
  /** Alt text. Required whenever photo is set. */
  photoAlt?: string;
  /** Who to credit, rendered under the image. */
  photoCredit?: string;
  /** Context line under the image, e.g. what it is and when it was published. */
  photoCaption?: string;
  /**
   * Paid featured placement (see lib/featured.ts). Only for an operator that
   * has paid; it never changes anything else in the listing. Sold per season:
   * `windows` lists the camp seasons paid for, and only those weeks are
   * featured in the directory. Leave it out to feature every week.
   */
  featured?: Featured & { windows?: BreakWindowId[] };
  description: string;
  /** Honesty box on the detail page, same pattern as learning support. */
  worthKnowing?: string;
  /**
   * Slugs of operators whose camps run at THIS operator's venue.
   * Lets a parent browsing a school also see the independents on campus.
   */
  hosts?: string[];
  /** Slugs of venues this operator runs at, when it is a guest. */
  hostedAt?: string[];
  website?: string;
  email?: string;
  phone?: string;
  lineId?: string;
  facebook?: string;
  /**
   * Seasonal skin for the detail page. "halloween" swaps the purple hero for
   * a night-sky gradient and adds pumpkins, bats and cobwebs. Purely visual.
   */
  theme?: "halloween";
  /** One-line hook shown in the hero, under the venue. */
  tagline?: string;
  /** Short activity bullets, emoji first, shown as cards under the description. */
  highlights?: string[];
  sessions: CampSession[];
  lastVerified: string;
}

// Chiang Mai camps, researched 5 Nov 2026. Dates and prices come from the
// operator's own page wherever it would load; a few come from public
// listings, and worthKnowing says so. Camps that have not re-announced are
// "ran-previously", with their last dates, filed under the window they will
// next fall in. No elephant camps or sanctuaries, no tiger attractions.
export const CAMPS: Camp[] = [
  {
    "slug": "traidhos-camps",
    "name": "Traidhos Camps",
    "area": "North Chiang Mai",
    "mainVenue": "Traidhos Three-Generation Community campus, shared with Prem Tinsulanonda International School, Mae Rim",
    "description": "Traidhos Camps are run by the Traidhos Three-Generation Community on the large green campus it shares with Prem Tinsulanonda International School in Mae Rim, and Prem says its open camps are available to everyone. Over the winter there are three kinds: junior day camps for young children built around nature, science and holiday themes; English day camps for ages 6 to 12 that mix English lessons with bird watching, farm visits, rice planting and swimming; and a tennis and English camp with the Traidhos Tennis Academy. Residential English weeks run from late January.",
    "worthKnowing": "The Christmas camp is the only Traidhos camp in the Christmas break itself. The January and February weeks fall in term time at most Chiang Mai schools, so they suit visiting families and children not in school here. Traidhos does not publish daily hours for every camp, and the residential weeks have not yet shown ages or prices, so ask when you book. The 2025 Christmas camp was 11,000 baht for ages 4 to 8, with lunch and two snacks included.",
    "website": "https://www.threegeneration.org",
    "email": "info@threegeneration.org",
    "phone": "053 301 472",
    "sessions": [
      {
        "id": "traidhos-xmas-2026",
        "programme": "Merry Christmas Camp (junior winter day camp)",
        "window": "winter-2026",
        "startDate": "2026-12-14",
        "endDate": "2026-12-18",
        "dateStatus": "confirmed",
        "categories": [
          "nature-and-outdoors",
          "stem",
          "multi-activity"
        ],
        "minAge": 4,
        "maxAge": 8,
        "format": "day",
        "note": "Prices for 2026 are not fully published yet. The same camp cost 11,000 baht in December 2025, with lunch and two snacks.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-junior-naturalist-2027",
        "programme": "Junior Naturalist (junior winter day camp)",
        "window": "winter-2026",
        "startDate": "2027-01-04",
        "endDate": "2027-01-08",
        "dateStatus": "confirmed",
        "categories": [
          "nature-and-outdoors",
          "stem"
        ],
        "format": "day",
        "note": "Ages and price not yet published. Junior day camps have been for ages 4 to 8.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-junior-winter-2027",
        "programme": "Junior winter day camps",
        "window": "other-2027",
        "startDate": "2027-01-11",
        "endDate": "2027-02-26",
        "dateStatus": "confirmed",
        "categories": [
          "nature-and-outdoors",
          "stem",
          "multi-activity"
        ],
        "format": "day",
        "note": "A different theme each week, Monday to Friday. Ages and prices not yet published.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-english-day-1",
        "programme": "Winter English Day Camp #1",
        "window": "winter-2026",
        "startDate": "2027-01-04",
        "endDate": "2027-01-08",
        "dateStatus": "confirmed",
        "categories": [
          "language-learning",
          "nature-and-outdoors",
          "swimming"
        ],
        "minAge": 6,
        "maxAge": 12,
        "format": "day",
        "priceFrom": 15000,
        "priceUnit": "per-week",
        "lunchIncluded": true,
        "bookingUrl": "https://fmsc.threegeneration.org/fmi/webd/winter_camp",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-english-day-2-4",
        "programme": "Winter English Day Camps #2 to #4",
        "window": "other-2027",
        "startDate": "2027-01-11",
        "endDate": "2027-01-29",
        "dateStatus": "confirmed",
        "categories": [
          "language-learning",
          "nature-and-outdoors",
          "swimming"
        ],
        "minAge": 6,
        "maxAge": 12,
        "format": "day",
        "priceFrom": 15000,
        "priceUnit": "per-week",
        "lunchIncluded": true,
        "bookingUrl": "https://fmsc.threegeneration.org/fmi/webd/winter_camp",
        "note": "Three separate weeks: 11 to 15, 18 to 22 and 25 to 29 January.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-tennis-english-jan1",
        "programme": "Winter Tennis and English Camp, first week",
        "window": "winter-2026",
        "startDate": "2027-01-04",
        "endDate": "2027-01-08",
        "dateStatus": "confirmed",
        "categories": [
          "sport-and-fitness",
          "language-learning"
        ],
        "minAge": 6,
        "maxAge": 12,
        "format": "day",
        "priceFrom": 15000,
        "priceUnit": "per-week",
        "hours": "9am to 3.30pm",
        "lunchIncluded": true,
        "bookingUrl": "https://fmsc.threegeneration.org/fmi/webd/winter_camp",
        "note": "Tennis only, 9am to 11am, costs 7,000 baht a week, without lunch.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-tennis-english-weekly",
        "programme": "Winter Tennis and English Camp, weekly",
        "window": "other-2027",
        "startDate": "2027-01-11",
        "endDate": "2027-02-26",
        "dateStatus": "confirmed",
        "categories": [
          "sport-and-fitness",
          "language-learning"
        ],
        "minAge": 6,
        "maxAge": 12,
        "format": "day",
        "priceFrom": 15000,
        "priceUnit": "per-week",
        "hours": "9am to 3.30pm",
        "lunchIncluded": true,
        "bookingUrl": "https://fmsc.threegeneration.org/fmi/webd/winter_camp",
        "note": "Book any week. Tennis only, 9am to 11am, costs 7,000 baht a week, without lunch.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "traidhos-residential-english",
        "programme": "Winter Residential English Camp, weeks 1 to 5",
        "window": "other-2027",
        "startDate": "2027-01-24",
        "endDate": "2027-02-27",
        "dateStatus": "confirmed",
        "categories": [
          "language-learning",
          "multi-activity"
        ],
        "format": "residential",
        "nights": 6,
        "note": "Sunday to Saturday weeks. Ages and price not yet published.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "prime-kids-club-sports-camp",
    "name": "Prime Kids Club Winter Sports Camp",
    "area": "Venue to confirm",
    "mainVenue": "Chiang Mai, with swimming at the Serene Lake pool",
    "description": "Prime Kids Club runs a mixed sports day camp through the whole Christmas break, from 14 December to 8 January, for ages 5 to 12. Children play football, basketball, badminton and track and field, and those who meet the entry requirements also swim. Groups are capped at 20, and the club says its coaches hold English FA and UEFA licences. Lunch is included, with two menu choices, plus fruit and water.",
    "worthKnowing": "Sign-up opens on 14 November. The early bird price is 6,500 baht a week, and the club says early bird and day fees are non-refundable. The page does not give the venue address, so ask where drop-off is when you book.",
    "website": "https://primekids.club/sports-camp/",
    "email": "headcoach@primekids.club",
    "lineId": "@primekidsclub",
    "sessions": [
      {
        "id": "prime-kids-winter-2026",
        "programme": "Winter Sports Camp",
        "window": "winter-2026",
        "startDate": "2026-12-14",
        "endDate": "2027-01-08",
        "dateStatus": "confirmed",
        "categories": [
          "sport-and-fitness",
          "swimming"
        ],
        "minAge": 5,
        "maxAge": 12,
        "format": "day",
        "priceFrom": 9500,
        "priceUnit": "per-week",
        "hours": "9am to 3pm",
        "minimumBooking": "1 day, at 2,000 baht",
        "lunchIncluded": true,
        "note": "Early bird price 6,500 baht a week. Four weeks, book by the week or the day.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "beaver-club-truepath-camps",
    "name": "Beaver Club and TruePath Holiday Camps",
    "area": "Southwest Chiang Mai",
    "mainVenue": "Ban Waen, Hang Dong",
    "description": "Beaver Club, with the TruePath homeschooling community, runs outdoor day camps in Ban Waen for ages 4 to 13, with children grouped by age. Each holiday week has a field trip and a party, and the February weeks add a Tuesday wild hike. Days run 9.30am to 4pm, with pickup from 3.30pm, and a buffet lunch with vegetarian options is included.",
    "worthKnowing": "Prices are on request. The New Year camp runs on 1 January, a public holiday, so check the plan for that day.",
    "website": "https://www.chiangmaikidsclub.com/kids-camps-chiang-mai",
    "email": "beaverclubhomestay@gmail.com",
    "phone": "097 961 1449",
    "lineId": "BeaverClub",
    "sessions": [
      {
        "id": "beaver-xmas-2026",
        "programme": "Christmas Camp and New Year Camp",
        "window": "winter-2026",
        "startDate": "2026-12-21",
        "endDate": "2027-01-01",
        "dateStatus": "confirmed",
        "categories": [
          "nature-and-outdoors",
          "multi-activity"
        ],
        "minAge": 4,
        "maxAge": 13,
        "format": "day",
        "hours": "9.30am to 4pm",
        "lunchIncluded": true,
        "note": "Two weeks: Christmas Camp 21 to 25 December and New Year Camp 28 December to 1 January.",
        "lastVerified": "2026-11-05"
      },
      {
        "id": "beaver-winter-2027",
        "programme": "Winter weeks",
        "window": "other-2027",
        "startDate": "2027-01-25",
        "endDate": "2027-02-19",
        "dateStatus": "confirmed",
        "categories": [
          "nature-and-outdoors",
          "multi-activity"
        ],
        "minAge": 4,
        "maxAge": 13,
        "format": "day",
        "hours": "9.30am to 4pm",
        "lunchIncluded": true,
        "note": "Four weekly camps between 25 January and 19 February, with a Tuesday wild hike.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "apis-winter-camp",
    "name": "APIS Winter Camp",
    "area": "Southwest Chiang Mai",
    "mainVenue": "American Pacific International School, main campus",
    "description": "American Pacific International School runs a three-week English and enrichment camp for ages 9 to 13, capped at 15 students. Mornings are English classes at three levels, and students also take a specialist track in STEM, arts and drama, digital media or environmental science, with sport and outings around Chiang Mai. The camp ends with a group project presentation in week three. Day students attend 9am to 3pm, and there are weekly and full boarding options.",
    "worthKnowing": "The camp runs from 17 January to 5 February, in term time at most Chiang Mai schools, so it is aimed at visiting students. The price covers the whole three weeks: 38,000 baht for day students, 59,000 for weekly boarding and 64,000 for full boarding, with lunch and snacks included. Transport for day students is 3,200 baht extra.",
    "website": "https://www.apis.ac.th",
    "sessions": [
      {
        "id": "apis-winter-2027",
        "programme": "Winter Camp 2027",
        "window": "other-2027",
        "startDate": "2027-01-17",
        "endDate": "2027-02-05",
        "dateStatus": "confirmed",
        "categories": [
          "language-learning",
          "stem",
          "art-and-design",
          "music-and-drama",
          "sport-and-fitness"
        ],
        "minAge": 9,
        "maxAge": 13,
        "format": "day",
        "priceFrom": 38000,
        "priceTo": 64000,
        "priceUnit": "per-session",
        "hours": "9am to 3pm",
        "lunchIncluded": true,
        "bookingUrl": "https://www.apis.ac.th/wp-content/uploads/2026/11/Winter-Camp-2027.pdf",
        "note": "Price for the whole three weeks: day 38,000, weekly boarding 59,000, full boarding 64,000 baht.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "grow-up-chiangmai-football-camp",
    "name": "GROW UP Chiangmai Football Camp",
    "area": "City",
    "mainVenue": "All Star Arena, Pa Tan",
    "description": "GROW UP Chiangmai runs an indoor football camp at All Star Arena for ages 4 to 13, with strength and agility work, crafts and teamwork games alongside football, and a free team jersey. Last winter it ran weekly from 1 December 2025 to 27 February 2026, 9.30am to 3.30pm, at 5,500 baht a week with lunch.",
    "worthKnowing": "These are last winter's details, from a public listing rather than the operator's own page. The camp takes up to 20 children a week and is cancelled if fewer than 9 sign up. Listings give two phone numbers, so confirm the 2026/27 dates and contact before booking.",
    "phone": "093 165 7806",
    "sessions": [
      {
        "id": "growup-winter",
        "programme": "Football Camp",
        "window": "winter-2026",
        "dateStatus": "ran-previously",
        "previousRun": "Weekly from 1 December 2025 to 27 February 2026",
        "categories": [
          "sport-and-fitness"
        ],
        "minAge": 4,
        "maxAge": 13,
        "format": "day",
        "priceFrom": 5500,
        "priceUnit": "per-week",
        "hours": "9.30am to 3.30pm",
        "lunchIncluded": true,
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "lanna-international-summer-school",
    "name": "Lanna International School Summer School",
    "area": "Southwest Chiang Mai",
    "description": "Lanna International School runs a summer school for ages 5 to 14, open to children from other schools, in two-week sessions built on units from the International Primary Curriculum with a different science theme each week. Children aged 8 to 14 also swim every day. Lunch is included.",
    "worthKnowing": "These are the 2026 dates and prices. Summer 2026 cost 32,000 baht per two-week session, or 29,000 early bird, with 15% off for both sessions. Lanna usually publishes summer dates in spring.",
    "website": "https://www.lannaist.ac.th/academics/international-summer-school/",
    "sessions": [
      {
        "id": "lanna-summer",
        "programme": "International Summer School",
        "window": "summer-2027",
        "dateStatus": "ran-previously",
        "previousRun": "6 to 17 July and 20 to 31 July 2026",
        "categories": [
          "academic",
          "stem",
          "swimming"
        ],
        "minAge": 5,
        "maxAge": 14,
        "format": "day",
        "priceFrom": 32000,
        "priceUnit": "per-session",
        "lunchIncluded": true,
        "note": "Each session is two weeks.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "panyaden-summer-camp",
    "name": "Panyaden Summer Camp",
    "area": "Southwest Chiang Mai",
    "description": "Panyaden International School runs a three-week summer camp for ages 6 to 12 on its green campus, with activities, weekly field trips and sustainability learning. Days run 9am to 3pm, and the price covers lunch, snacks, insurance, field trips and a T-shirt.",
    "worthKnowing": "These are the 2026 details: 29 June to 17 July, at 53,500 baht for the three weeks. Panyaden does not say whether children from other schools can join, so ask.",
    "website": "https://www.panyaden.ac.th",
    "sessions": [
      {
        "id": "panyaden-summer",
        "programme": "Summer Camp",
        "window": "summer-2027",
        "dateStatus": "ran-previously",
        "previousRun": "29 June to 17 July 2026",
        "categories": [
          "nature-and-outdoors",
          "multi-activity"
        ],
        "minAge": 6,
        "maxAge": 12,
        "format": "day",
        "priceFrom": 53500,
        "priceUnit": "per-session",
        "hours": "9am to 3pm",
        "lunchIncluded": true,
        "note": "Price for the full three weeks.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "nis-summer-school",
    "name": "NIS Summer School",
    "area": "North Chiang Mai",
    "description": "Nakornpayap International School runs a summer school for ages 3 to 14, open to children from other schools, with themed weeks taught in English: science, maths games, swimming, arts and a weekly field trip. Days run 9am to 3pm, with lunch.",
    "worthKnowing": "These are the 2026 details. Children from other schools paid 15,000 baht a week or 40,000 for all three weeks, and NIS pupils a little less.",
    "website": "https://www.nis.ac.th",
    "sessions": [
      {
        "id": "nis-summer",
        "programme": "Summer School",
        "window": "summer-2027",
        "dateStatus": "ran-previously",
        "previousRun": "13 to 31 July 2026, three weekly sessions",
        "categories": [
          "academic",
          "stem",
          "swimming",
          "art-and-design",
          "sport-and-fitness"
        ],
        "minAge": 3,
        "maxAge": 14,
        "format": "day",
        "priceFrom": 15000,
        "priceUnit": "per-week",
        "hours": "9am to 3pm",
        "lunchIncluded": true,
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "bcis-young-ambassador-summer-camp",
    "name": "BCIS Young Ambassador Summer Camp",
    "area": "Southwest Chiang Mai",
    "description": "British Concordance International School runs a four-week summer camp with swimming, World Kitchen cooking, Scratch coding and AI basics, and arts. In 2026 it cost 10,000 baht a week or 39,000 for all four weeks, plus 2,000 baht for insurance and a camp shirt.",
    "worthKnowing": "BCIS has not published ages, daily hours or whether lunch is included, or whether children from other schools can join, so ask the school.",
    "website": "https://www.bcisschool.ac.th",
    "sessions": [
      {
        "id": "bcis-summer",
        "programme": "Young Ambassador Summer Camp",
        "window": "summer-2027",
        "dateStatus": "ran-previously",
        "previousRun": "6 to 31 July 2026",
        "categories": [
          "swimming",
          "cookery",
          "stem",
          "art-and-design",
          "music-and-drama"
        ],
        "format": "day",
        "priceFrom": 10000,
        "priceUnit": "per-week",
        "note": "Plus 2,000 baht for insurance and a shirt.",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "brilliant-drama-musical-theatre-camps",
    "name": "Brilliant Drama Musical Theatre Camps",
    "area": "Southwest Chiang Mai",
    "mainVenue": "Canal Road, Suthep",
    "description": "Brilliant Drama runs musical theatre camps for ages 5 to 15, with acting, singing and dancing built around a different musical every two weeks, ending in a theatre performance. In summer 2026 it ran weekly from 15 June to 7 August, 10am to 3pm, at 7,000 baht a week, or 5,000 early bird.",
    "worthKnowing": "These are the 2026 summer details, from a public listing. Ask whether lunch is included.",
    "phone": "080 634 9633",
    "lineId": "@brilliantdrama",
    "sessions": [
      {
        "id": "brilliant-drama-summer",
        "programme": "Musical Theatre Camps",
        "window": "summer-2027",
        "dateStatus": "ran-previously",
        "previousRun": "Weekly from 15 June to 7 August 2026",
        "categories": [
          "music-and-drama"
        ],
        "minAge": 5,
        "maxAge": 15,
        "format": "day",
        "priceFrom": 7000,
        "priceUnit": "per-week",
        "hours": "10am to 3pm",
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  },
  {
    "slug": "at-home-academy-summer-camp",
    "name": "AT HOME Academy Summer Camp",
    "area": "North Chiang Mai",
    "mainVenue": "Don Kaeo, Mae Rim",
    "description": "AT HOME Academy runs a small summer day camp for ages 4 to 9, capped at 12 children a week, with cookery, robotics, science, crafts and field trips. In summer 2026 it ran weekly from 15 June to 14 August, 9am to 3pm, at 3,900 baht a week or 800 baht a day, with lunch. Transport costs 1,500 baht a week extra.",
    "worthKnowing": "These are the 2026 summer details, from a public listing.",
    "phone": "084 919 1443",
    "lineId": "rapin56123",
    "sessions": [
      {
        "id": "at-home-summer",
        "programme": "Summer Camp",
        "window": "summer-2027",
        "dateStatus": "ran-previously",
        "previousRun": "Weekly from 15 June to 14 August 2026",
        "categories": [
          "cookery",
          "stem",
          "art-and-design",
          "nature-and-outdoors"
        ],
        "minAge": 4,
        "maxAge": 9,
        "format": "day",
        "priceFrom": 3900,
        "priceUnit": "per-week",
        "hours": "9am to 3pm",
        "minimumBooking": "1 day, at 800 baht",
        "lunchIncluded": true,
        "lastVerified": "2026-11-05"
      }
    ],
    "lastVerified": "2026-11-05"
  }
];

/** Flattened view for the directory filter. */
export interface SessionWithCamp extends CampSession {
  camp: Camp;
}

export const ALL_SESSIONS: SessionWithCamp[] = CAMPS.flatMap((camp) =>
  camp.sessions.map((session) => ({ ...session, camp }))
);

export const ALL_CATEGORIES: CampCategory[] = Array.from(
  new Set(ALL_SESSIONS.flatMap((s) => s.categories))
).sort();

export const ALL_AREAS: string[] = Array.from(
  new Set(CAMPS.map((c) => c.area))
).sort();

/** Days since a session was last verified. Drives the staleness warning. */
export function daysSinceVerified(iso: string, now: Date = new Date()): number {
  const then = new Date(`${iso}T00:00:00Z`).getTime();
  return Math.floor((now.getTime() - then) / 86_400_000);
}

export const STALE_AFTER_DAYS = 90;

export function isStale(iso: string, now: Date = new Date()): boolean {
  return daysSinceVerified(iso, now) > STALE_AFTER_DAYS;
}

export function campBySlug(slug: string): Camp | undefined {
  return CAMPS.find((c) => c.slug === slug);
}
