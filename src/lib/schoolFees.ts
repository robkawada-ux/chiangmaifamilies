// Verified international school fees for chiangmaifamilies.com.
// Every figure must be read from the school's own published schedule, with the date it was read.
// Third-party aggregator figures are deliberately excluded: in checking, Doris, Schoozy,
// Tutopiya and The Thaiger were each found quoting prior-year figures as current.
//
// Schools that do not publish fees are absent from this file by design. They must render
// in a labelled block below the table, never inside it.
//
// IMPORTANT: never compare schools on a min/max range.
// The cheapest row in a schedule is rarely a comparable product. Harrow's is a
// parent-accompanied toddler session two mornings a week (146,300); Shrewsbury's
// is Nursery at the City Campus only (696,300). Sorting those against each other
// ranks a playgroup against a sixth form.
// Any comparison must be locked to one `stage`, which is why rows are stored per
// year group. Early years should be its own table: hours per week, parent
// attendance and meal inclusion all differ across those rows.

export type FeeStage =
  | 'early-years'
  | 'primary'
  | 'lower-secondary'
  | 'upper-secondary'
  | 'sixth-form';

export type FeeStatus = 'published' | 'on-enquiry' | 'unverified';

export type Inclusion =
  | 'lunch'
  | 'snacks'
  | 'textbooks'
  | 'residential-trips'
  | 'eal'
  | 'transport'
  | 'uniform'
  | 'exam-fees'
  | 'after-school';

export interface FeeRow {
  /** The school's own wording for the year group. */
  label: string;
  /** Our normalised stage, so schools with different year names can be compared. */
  stage: FeeStage;
  annual: number;
  /** Set to 2 for exam years billed over two terms rather than three. */
  billedTerms?: 2 | 3;
}

export interface OneTimeFees {
  application?: number;
  /** Entrance, admission, enrolment or guaranteed-place fee. */
  registration?: number;
  refundableDeposit?: number;
  /** Charged when a child passes assessment but no place is available. */
  waitingPool?: number;
}

export interface RecurringExtra {
  label: string;
  annualFrom: number;
  annualTo?: number;
  /** True where the school decides, not the parent. */
  compulsory: boolean;
}

export interface SchoolFees {
  status: FeeStatus;
  /** Academic year the schedule covers, e.g. '2026/27'. */
  feeYear: string;
  /** The page or PDF the figures were read from. Required when status is 'published'. */
  sourceUrl?: string;
  /** ISO date the source was last read. */
  verified?: string;
  rows?: FeeRow[];
  oneTime?: OneTimeFees;
  includes?: Inclusion[];
  excludes?: Inclusion[];
  extras?: RecurringExtra[];
  /** Shown as the 'worth knowing' caveat on the school's row. */
  note?: string;
}

// Chiang Mai schools' own fee schedules, read per year group on 4 Nov 2026.
// Sources and caveats: the claude.ai project doc claude/chiangmai-schools.md.
// Until a school is added, its page shows the indicative feeRange from schools.ts.
export const schoolFees: Record<string, SchoolFees> = {
  "meritton-british-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://merittonbritish.ac.th/wp-content/uploads/2026/06/Schedule-of-Fees-and-Charges_AY-2026-1.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Pre-Nursery", stage: "early-years", annual: 224400 },
      { label: "Nursery - Reception", stage: "early-years", annual: 238600 },
      { label: "Year 1 - Year 2", stage: "primary", annual: 285000 },
      { label: "Year 3 - Year 6", stage: "primary", annual: 307200 },
      { label: "Year 7 - Year 9", stage: "lower-secondary", annual: 343000 },
      { label: "Year 10 - Year 11 (IGCSE)", stage: "upper-secondary", annual: 387000 },
      { label: "Year 12 (A Level)", stage: "sixth-form", annual: 440000 },
    ],
    oneTime: { application: 3000, registration: 60000, refundableDeposit: 6000 },
    extras: [
      { label: "School lunch and snacks", annualFrom: 21600, annualTo: 23600, compulsory: true },
      { label: "Books, applications and learning platforms", annualFrom: 2000, annualTo: 15000, compulsory: true },
      { label: "Capital improvement fee", annualFrom: 11000, compulsory: true },
      { label: "School activities", annualFrom: 7000, compulsory: true },
      { label: "Chromebook usage, Year 7 up", annualFrom: 5000, annualTo: 7000, compulsory: true },
      { label: "Accident insurance", annualFrom: 1300, compulsory: true },
      { label: "English Language Learner support, if needed", annualFrom: 70000, compulsory: false },
    ],
    excludes: ["uniform", "exam-fees", "residential-trips"],
    note: "Billed over two terms. Lunch, books, activities, insurance and an 11,000 THB capital fee are charged to every pupil on top of tuition. Enrolment is 45,000 THB for a second child and waived from the third.",
  },
  "prem-tinsulanonda-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://ptis.ac.th/wp-content/uploads/2026/08/Tuition-Fee-AY2026-27-Prem-International-School.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Early Years 1-3", stage: "early-years", annual: 416000 },
      { label: "Grade 1", stage: "primary", annual: 446000 },
      { label: "Grade 2-3", stage: "primary", annual: 490000 },
      { label: "Grade 4-5", stage: "primary", annual: 604000 },
      { label: "Grade 6-7", stage: "lower-secondary", annual: 730000 },
      { label: "Grade 8", stage: "lower-secondary", annual: 772000 },
      { label: "Grade 9-12", stage: "upper-secondary", annual: 814000 },
    ],
    oneTime: { application: 6000, registration: 130000, refundableDeposit: 50000 },
    extras: [
      { label: "Weekly boarding (5 nights)", annualFrom: 350000, compulsory: false },
      { label: "Full boarding (7 nights)", annualFrom: 478000, compulsory: false },
      { label: "Lunch and snacks, day students (10,050 to 11,950 a term)", annualFrom: 40200, annualTo: 47800, compulsory: false },
      { label: "School bus, by distance (17,100 to 20,700 a term)", annualFrom: 68400, annualTo: 82800, compulsory: false },
      { label: "EAL support, if needed (22,000 a term)", annualFrom: 88000, compulsory: false },
    ],
    excludes: ["lunch", "transport", "exam-fees"],
    note: "Fees are billed over four terms, with 2% off for paying the whole year up front. The 130,000 THB foundation fee is charged for the first two children only, and siblings get 10% to 50% off tuition and boarding. The Intensive English Programme costs 696,000 THB a year. Boarding includes meals, health insurance and laundry.",
  },
  "lanna-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://www.lannaist.ac.th/wp-content/uploads/2026/02/School-Fee-2026-27-for-Standard.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Early Years (ages 2-4 years)", stage: "early-years", annual: 413400 },
      { label: "Years 1-2 (ages 5-6 years)", stage: "primary", annual: 530400 },
      { label: "Years 3-6 (ages 7-10 years)", stage: "primary", annual: 616200 },
      { label: "Years 7-9 (ages 11-13 years)", stage: "lower-secondary", annual: 639600 },
      { label: "Years 10-11 (ages 14-15 years)", stage: "upper-secondary", annual: 676000 },
      { label: "Years 12-13 (ages 16 years & up)", stage: "sixth-form", annual: 803400 },
    ],
    oneTime: { application: 6000, registration: 90000, refundableDeposit: 13000 },
    extras: [
      { label: "Capital fee", annualFrom: 10000, compulsory: true },
      { label: "PTO and accident insurance", annualFrom: 3000, compulsory: true },
      { label: "English support, if needed", annualFrom: 40000, annualTo: 64000, compulsory: false },
      { label: "Lunch (optional)", annualFrom: 23150, annualTo: 25350, compulsory: false },
    ],
    includes: ["exam-fees"],
    note: "A 10,000 THB capital fee, 1,000 THB PTO contribution and 2,000 THB accident insurance are charged every year on top of tuition. IGCSE and A Level exam fees are included.",
  },
  "panyaden-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://www.panyaden.ac.th/wp-content/uploads/2026/05/AY2026-27-Panyaden-Tuition-Fee.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Early Years (Foundation Stage): Nursery, Kindergarten 1, Kindergarten 2", stage: "early-years", annual: 321000 },
      { label: "Key Stage 1: Year 1, Year 2", stage: "primary", annual: 351000 },
      { label: "Key Stage 2: Year 3, Year 4", stage: "primary", annual: 392000 },
      { label: "Key Stage 2: Year 5, Year 6", stage: "primary", annual: 403000 },
      { label: "Key Stage 3: Year 7, Year 8, Year 9", stage: "lower-secondary", annual: 470000 },
      { label: "Key Stage 4: Year 10, Year 11", stage: "upper-secondary", annual: 494000 },
      { label: "IB Diploma Programme: Year 12, Year 13", stage: "sixth-form", annual: 594000 },
    ],
    oneTime: { application: 3000, registration: 75000, refundableDeposit: 15000, waitingPool: 30000 },
    extras: [
      { label: "EAL support, if needed (up to six terms)", annualFrom: 50000, compulsory: false },
      { label: "Thai language support, if needed", annualFrom: 34000, compulsory: false },
    ],
    includes: ["lunch", "snacks", "textbooks", "residential-trips"],
    excludes: ["uniform", "after-school"],
    note: "Tuition includes lunch, snacks, textbooks and most class trips, including overnight ones. There is no school bus.",
  },
  "chiang-mai-international-school": {
    status: "published",
    feeYear: "2025/26",
    sourceUrl: "https://cmis.ac.th/node/34",
    verified: "2026-11-04",
    rows: [
      { label: "Preschool 3 & 4", stage: "early-years", annual: 325400 },
      { label: "Kindergarten", stage: "early-years", annual: 406500 },
      { label: "Grades 1-5", stage: "primary", annual: 406500 },
      { label: "Grades 6-8", stage: "lower-secondary", annual: 441300 },
      { label: "Grades 9-12", stage: "upper-secondary", annual: 552600 },
    ],
    oneTime: { application: 5000, registration: 100000 },
    extras: [
      { label: "Capital improvement fee (KG to Grade 12)", annualFrom: 10000, compulsory: false },
      { label: "Overnight trips (Grade 6 up)", annualFrom: 7000, annualTo: 14000, compulsory: false },
    ],
    note: "These are 2025/26 fees, the latest the school has published. The enrolment fee is 100,000 THB from Kindergarten up and 30,000 THB for Preschool.",
  },
  "sisb-chiang-mai": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://sisb.ac.th/admissions/tuition-fee/chiangmai-campus/",
    verified: "2026-11-04",
    rows: [
      { label: "Nursery 1 (2+)", stage: "early-years", annual: 324300 },
      { label: "Nursery 2 (3+)", stage: "early-years", annual: 324300 },
      { label: "Kindergarten 1 (4+)", stage: "early-years", annual: 348300 },
      { label: "Kindergarten 2 (5+)", stage: "early-years", annual: 348300 },
      { label: "Primary 1 (6+)", stage: "primary", annual: 379500 },
      { label: "Primary 2 (7+)", stage: "primary", annual: 379500 },
      { label: "Primary 3 (8+)", stage: "primary", annual: 419100 },
      { label: "Primary 4 (9+)", stage: "primary", annual: 419100 },
      { label: "Primary 5 (10+)", stage: "primary", annual: 466800 },
      { label: "Primary 6 (11+)", stage: "primary", annual: 466800 },
      { label: "Grade 7 (12+)", stage: "lower-secondary", annual: 502800 },
      { label: "Grade 8 (13+)", stage: "lower-secondary", annual: 502800 },
      { label: "Grade 9 (14+)", stage: "upper-secondary", annual: 537300 },
      { label: "Grade 10 (15+)", stage: "upper-secondary", annual: 537300 },
      { label: "Grade 11 (16+)", stage: "sixth-form", annual: 564300 },
      { label: "Grade 12 (17+)", stage: "sixth-form", annual: 564300 },
    ],
    oneTime: { application: 5000, registration: 150000, refundableDeposit: 30000 },
    extras: [
      { label: "Education resources fee", annualFrom: 20000, annualTo: 80000, compulsory: true },
      { label: "Snacks and lunch", annualFrom: 25500, annualTo: 36600, compulsory: false },
      { label: "English learning support, if needed", annualFrom: 40000, annualTo: 60000, compulsory: false },
    ],
    excludes: ["uniform", "exam-fees", "residential-trips", "transport", "after-school"],
    note: "An education resources fee and a snack and lunch fee are charged on top of tuition. The 150,000 THB enrolment fee can be spread over three or five years.",
  },
  "american-pacific-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://www.apis.ac.th/wp-content/uploads/2026/03/2026-2027-MC-Fee-Structure.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Nursery (2 yrs)", stage: "early-years", annual: 250650 },
      { label: "K1 (3 yrs)", stage: "early-years", annual: 267250 },
      { label: "K2 (4 yrs)", stage: "early-years", annual: 267250 },
      { label: "K3 (5 yrs)", stage: "early-years", annual: 285400 },
      { label: "G1 (6 yrs)", stage: "primary", annual: 294250 },
      { label: "G2 (7 yrs)", stage: "primary", annual: 294250 },
      { label: "G3 (8 yrs)", stage: "primary", annual: 314950 },
      { label: "G4 (9 yrs)", stage: "primary", annual: 322150 },
      { label: "G5 (10 yrs)", stage: "primary", annual: 330750 },
      { label: "G6 (11 yrs)", stage: "lower-secondary", annual: 389400 },
      { label: "G7", stage: "lower-secondary", annual: 411850 },
      { label: "G8", stage: "lower-secondary", annual: 429800 },
      { label: "G9", stage: "upper-secondary", annual: 483850 },
      { label: "G10", stage: "upper-secondary", annual: 488600 },
      { label: "G11", stage: "upper-secondary", annual: 516850 },
      { label: "G12", stage: "upper-secondary", annual: 524800 },
    ],
    oneTime: { application: 4000, registration: 100000 },
    extras: [
      { label: "Lunch and snacks, Grade 1 up", annualFrom: 23600, annualTo: 28250, compulsory: false },
      { label: "Classroom Without Walls trips", annualFrom: 2000, annualTo: 40000, compulsory: true },
      { label: "Weekly boarding, Grade 5 up", annualFrom: 267800, annualTo: 305500, compulsory: false },
      { label: "Full boarding, Grade 5 up", annualFrom: 337800, annualTo: 375500, compulsory: false },
      { label: "English language support, if needed", annualFrom: 52500, annualTo: 68250, compulsory: false },
    ],
    note: "Entrance fee is 100,000 THB from Grade 1 and 40,000 THB for the early years. A Pre-Nursery class for 18-month-olds runs in the second semester only (120,300 THB). Lunch is included up to K3.",
  },
  "nakornpayap-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://www.nis.ac.th/documents/2026-27-school-fees.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "ECC (K1-K3)", stage: "early-years", annual: 304500 },
      { label: "Lower Elementary (G1-G3)", stage: "primary", annual: 404400 },
      { label: "Upper Elementary (G4-G5)", stage: "primary", annual: 422800 },
      { label: "Middle School (G6-G8)", stage: "lower-secondary", annual: 457400 },
      { label: "High School (G9-G12)", stage: "upper-secondary", annual: 521800 },
    ],
    oneTime: { application: 5000, registration: 80000, refundableDeposit: 30000 },
    extras: [
      { label: "Integrated Pathway programme, if enrolled", annualFrom: 70000, compulsory: false },
    ],
    note: "The registration fee drops to 66,000 THB if paid before 31 July 2026. Meals are included up to Grade 5.",
  },
  "sbs-international-school-chiangmai": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://sbscm.ac.th/wp-content/uploads/sites/2/2026/03/Updated-SBS-Chiangmai-School-Fees-AY202627.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Tiger Cubs (1-2 years)", stage: "early-years", annual: 227300 },
      { label: "Toddler (2-3 years)", stage: "early-years", annual: 217900 },
      { label: "Nursery (3-4 years)", stage: "early-years", annual: 217900 },
      { label: "Reception (4-5 years)", stage: "early-years", annual: 217900 },
      { label: "Year 1", stage: "primary", annual: 239400 },
      { label: "Year 2-3", stage: "primary", annual: 271900 },
      { label: "Year 4", stage: "primary", annual: 282400 },
      { label: "Year 5-6", stage: "primary", annual: 309300 },
      { label: "Year 7", stage: "lower-secondary", annual: 319300 },
      { label: "Year 8-9", stage: "lower-secondary", annual: 339200 },
      { label: "Year 10", stage: "upper-secondary", annual: 343400 },
      { label: "Year 11-13", stage: "upper-secondary", annual: 370300 },
    ],
    oneTime: { application: 3000, registration: 100000, refundableDeposit: 55000 },
    extras: [
      { label: "Campus levy", annualFrom: 12000, compulsory: true },
      { label: "English language support, if needed", annualFrom: 30000, annualTo: 40000, compulsory: false },
    ],
    includes: ["lunch", "snacks"],
    excludes: ["textbooks", "uniform", "exam-fees"],
    note: "Tuition includes lunch and a daily snack. A 12,000 THB campus levy is added every year.",
  },
  "unity-concord-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://www.ucis.ac.th/admissions",
    verified: "2026-11-04",
    rows: [
      { label: "Pre-Kindergarten to K2", stage: "early-years", annual: 201600 },
      { label: "Kindergarten 3 to Grade 4", stage: "primary", annual: 294000 },
      { label: "Grade 5 to Grade 8", stage: "lower-secondary", annual: 340200 },
      { label: "Grade 9 to Grade 12", stage: "upper-secondary", annual: 386400 },
    ],
    oneTime: { application: 3300, registration: 90000 },
    extras: [
      { label: "Capital improvement fee", annualFrom: 25000, compulsory: true },
      { label: "Lunch", annualFrom: 20000, compulsory: false },
      { label: "School bus, by distance", annualFrom: 30000, annualTo: 50000, compulsory: false },
      { label: "EAL support, if needed", annualFrom: 80000, compulsory: false },
    ],
    excludes: ["lunch", "transport", "eal", "uniform"],
    note: "New students pay an 80,000 THB entrance fee and a 10,000 THB lifetime book fee (shown together above). A 25,000 THB capital improvement fee is added every year.",
  },
  "grace-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://gisthailand.org/admissions/tuition-and-fees/",
    verified: "2026-11-04",
    rows: [
      { label: "Grades K-5", stage: "primary", annual: 309000 },
      { label: "Grades 6-8", stage: "lower-secondary", annual: 338000 },
      { label: "Grades 9-11", stage: "upper-secondary", annual: 365000 },
      { label: "Grade 12", stage: "upper-secondary", annual: 379000 },
    ],
    note: "Standard rates shown. Families of international Christian workers pay lower published rates. A capitalization fee and a re-enrolment fee also apply; ask the school for the amounts.",
  },
  "british-concordance-international-school": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://www.bcisschool.ac.th/tuition-fees",
    verified: "2026-11-04",
    rows: [
      { label: "Pre-Nursery, Nursery, Reception", stage: "early-years", annual: 196350 },
      { label: "Year 1 - Year 4", stage: "primary", annual: 254100 },
      { label: "Year 5 - Year 6", stage: "primary", annual: 288750 },
      { label: "Year 7 - Year 9", stage: "lower-secondary", annual: 323400 },
      { label: "Year 10 - Year 13", stage: "upper-secondary", annual: 346500 },
    ],
    oneTime: { application: 3300, registration: 100000 },
    extras: [
      { label: "Capital improvement and materials fee", annualFrom: 20000, compulsory: true },
      { label: "Lunch", annualFrom: 20000, compulsory: false },
      { label: "School bus, by distance", annualFrom: 30000, annualTo: 50000, compulsory: false },
      { label: "ESL support, if needed", annualFrom: 50000, compulsory: false },
    ],
    excludes: ["lunch", "transport", "eal", "uniform"],
    note: "New students pay an 80,000 THB entrance fee and a 20,000 THB lifetime books fee (shown together above). A 20,000 THB capital and materials fee is added every year.",
  },
  "christian-german-school-chiang-mai": {
    status: "published",
    feeYear: "2026/27",
    sourceUrl: "https://cdsc.ac.th/wp-content/uploads/2026/05/26-27_Fees_English.pdf",
    verified: "2026-11-04",
    rows: [
      { label: "Kindergarten, half day (7:50-13:00), age 3-6", stage: "early-years", annual: 146000 },
      { label: "Kindergarten, full day (7:50-15:30, Fridays to 13:30), age 3-6", stage: "early-years", annual: 168000 },
      { label: "Flex - grade 4", stage: "primary", annual: 251000 },
      { label: "Class 5 - 6, Regular", stage: "primary", annual: 261000 },
      { label: "Class 5 - 6, GFL (German as a foreign language) students", stage: "primary", annual: 348000 },
      { label: "Class 7 - 8, Regular", stage: "lower-secondary", annual: 282000 },
      { label: "Class 7 - 8, GFL students (only grade 7)", stage: "lower-secondary", annual: 371000 },
      { label: "Grades 9 - 10 (excluding upper secondary school)", stage: "upper-secondary", annual: 305000 },
      { label: "Grades 10 - 12 (upper school)", stage: "sixth-form", annual: 328000 },
    ],
    oneTime: { registration: 50000, refundableDeposit: 50000 },
    extras: [
      { label: "Kindergarten lunch", annualFrom: 10000, compulsory: true },
    ],
    includes: ["textbooks"],
    excludes: ["lunch", "eal"],
    note: "Teaching is in German. Students learning German as a foreign language pay a higher rate in classes 5 to 7. The admission fee is 20,000 THB for kindergarten.",
  },
};

/** Schools checked that publish no fee figures at all. */
export const feesOnEnquiry: Record<string, { checked: string; detail: string }> = {
  "windfield-international-school-chiang-mai": {
    checked: "2026-11-04",
    detail: "The Chiang Mai campus does not publish fees online. The schedule on the Windfield group site is for its Koh Samui campus. Ask the school's Chiang Mai admissions team.",
  },
};


// ---------------------------------------------------------------------------
// Helpers. Everything the site displays about a school's fees goes through
// these, so schoolFees above is the single source of truth.
// ---------------------------------------------------------------------------

/** Rows billed for a full year. Exam years billed over two terms are left out
 *  of headline figures because their lower total is not a cheaper product. */
function fullYearRows(f: SchoolFees): FeeRow[] {
  return (f.rows ?? []).filter((r) => r.billedTerms !== 2);
}

export interface FeeSummary {
  /** First primary-stage row (usually Year 1 or Grade 1), the comparable headline. */
  primary?: FeeRow;
  from: FeeRow;
  to: FeeRow;
  feeYear: string;
  verified?: string;
  sourceUrl?: string;
}

/** Lowest and highest full-year fee, each with the school's own year-group label. */
export function feeSummary(slug: string): FeeSummary | null {
  const f = schoolFees[slug];
  if (!f || f.status !== "published") return null;
  const rows = fullYearRows(f);
  if (rows.length === 0) return null;
  const from = rows.reduce((a, b) => (b.annual < a.annual ? b : a));
  const to = rows.reduce((a, b) => (b.annual > a.annual ? b : a));
  const primary = rows.find((r) => r.stage === "primary");
  return { primary, from, to, feeYear: f.feeYear, verified: f.verified, sourceUrl: f.sourceUrl };
}

/**
 * Budget tag for a verified school, read from its first primary-stage fee
 * (Year 1 or Grade 1 in most schedules). Locking to one stage follows the
 * rule above: early years rows mix half days, parent sessions and meal plans,
 * so an average across every row is not comparable between schools. Schools
 * with no primary row fall back to the mean of their full-year rows.
 */
export function verifiedBudget(slug: string): "under400k" | "over400k" | null {
  const f = schoolFees[slug];
  if (!f || f.status !== "published") return null;
  const rows = fullYearRows(f);
  if (rows.length === 0) return null;
  const primary = rows.find((r) => r.stage === "primary");
  const basis = primary
    ? primary.annual
    : rows.reduce((sum, r) => sum + r.annual, 0) / rows.length;
  return basis >= 400000 ? "over400k" : "under400k";
}

export function formatThb(n: number): string {
  return n.toLocaleString("en-US");
}

/** "18 September 2026" from an ISO date, without timezone drift. */
export function formatVerifiedDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

export const INCLUSION_LABEL: Record<Inclusion, string> = {
  lunch: "Lunch",
  snacks: "Snacks",
  textbooks: "Textbooks",
  "residential-trips": "Residential trips",
  eal: "English language support",
  transport: "School bus",
  uniform: "Uniform",
  "exam-fees": "Exam fees",
  "after-school": "After-school activities",
};

export const ONE_TIME_LABEL: Record<keyof OneTimeFees, string> = {
  application: "Application fee",
  registration: "Registration or entrance fee",
  refundableDeposit: "Refundable deposit",
  waitingPool: "Waiting pool fee",
};
