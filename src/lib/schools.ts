import { verifiedBudget } from "./schoolFees";

export type Budget = "under400k" | "over400k" | "unknown";

export type Area = "north" | "city" | "southwest" | "southeast";

/**
 * Four broad parts of Chiang Mai, in the order the directory lists them.
 * Kept coarse on purpose: the school run is by car or school bus, so parents
 * choose a side of the city, not a district. Most international schools sit
 * outside the old city, in Hang Dong to the southwest or on the Lampang
 * Superhighway in Saraphi to the southeast. No school was found to the east
 * (San Kamphaeng, Doi Saket), so there is no east area yet.
 */
/** place: short name used in search descriptions, e.g. "in Hang Dong, Chiang Mai". */
export const AREAS: { id: Area; label: string; covers: string; place: string }[] = [
  { id: "city", label: "City: inside the Superhighway ring", covers: "The Old City, Nimman, Santitham, Chang Phueak, Wat Ket, Nong Hoi and the Night Bazaar", place: "the city" },
  { id: "north", label: "North: Mae Rim and San Phi Suea", covers: "Mae Rim, the Mae Sa valley, San Phi Suea, Mae Jo and northern San Sai", place: "Mae Rim and San Phi Suea" },
  { id: "southwest", label: "Southwest: Hang Dong, Mae Hia and Canal Road", covers: "Hang Dong, Mae Hia, Nong Khwai, Ban Waen, Nam Phrae, Harn Kaew and the southern end of Canal Road", place: "Hang Dong" },
  { id: "southeast", label: "Southeast: Saraphi and the Lampang Superhighway", covers: "Saraphi, Nong Phueng, Tha Wang Tan and the Chiang Mai to Lampang Superhighway", place: "Saraphi" },
];

export const AREA_LABEL = Object.fromEntries(
  AREAS.map((a) => [a.id, a.label])
) as Record<Area, string>;

export interface School {
  name: string;
  slug: string;
  curricula: string[];
  budget: Budget;
  website?: string;
  description?: string;
  founded?: number;
  ageRange?: string;
  languageOfInstruction?: string;
  /**
   * Third-party indicative range only, shown with an "unverified" label.
   * Schools whose own fee schedule we have read live in schoolFees.ts and
   * must not carry this field: the page builds their figures from there.
   */
  feeRange?: string;
  photo?: string;
  // Virtual tour video, where the school has sent us one.
  virtualTour?: string;
  /**
   * Where the school is, as one of the AREAS below. Schools with campuses in
   * more than one area list each, main campus first. The directory groups
   * by the first area and the location filter matches any of them.
   */
  areas: Area[];
  /**
   * Shown as the school's location instead of its area label, when the area
   * label names places the school is not near (e.g. a school with a campus
   * on the edge of an area). The directory still groups by `areas`.
   */
  location?: string;
  /**
   * Held back until the school's license is verified. Pending schools are
   * left out of SCHOOLS, so they have no page, no directory card and no
   * sitemap entry. Delete the flag to publish.
   */
  pending?: boolean;
}

// Curriculum + budget tags, split at 400,000 THB/year (the same line as
// bkkfamilies and phuketfamilies). For the schools in schoolFees.ts the budget
// below is ignored and recomputed from the verified primary-stage fee (see
// verifiedBudget). For the rest the tag is taken from the middle of the
// published range, since the top of a range is a sixth-form fee and the
// bottom is usually a part-time nursery place. Research notes and sources for
// every school: the project doc claude/chiangmai-schools.md (4 Nov 2026).
// feeRange is 2026/27 unless the string says otherwise.
const SCHOOL_ENTRIES: School[] = [
  {
    name: "Prem Tinsulanonda International School",
    slug: "prem-tinsulanonda-international-school",
    areas: ["north"],
    curricula: ["International Baccalaureate"],
    budget: "over400k",
    website: "https://ptis.ac.th/",
    founded: 2001,
    ageRange: "Ages 3 to 18",
    languageOfInstruction: "English",
    feeRange: "416,000 to 814,000 THB/year",
    description: "Prem opened in 2001 on a large rural campus in Huay Sai, Mae Rim, about 25 km north of the city, and is named after the statesman General Prem Tinsulanonda. It is part of the Traidhos Three-Generation Community for Learning, and has around 500 students.\n\nIt is an IB World School and says it is the only school in Thailand to run all four IB programmes: the Primary Years, Middle Years and Diploma Programmes, plus the Career-related Programme, which it was the first school in Southeast Asia to offer. Outdoor learning, sustainability and the arts are a big part of school life, and the school is accredited by CIS and NEASC.\n\nPrem is one of only two Chiang Mai schools with boarding, which is why it draws students from around Thailand and overseas, and it sits in the top fee bracket in the city. On joining, budget for a foundation fee of around 130,000 THB and a refundable deposit.",
  },
  {
    name: "Lanna International School Thailand",
    slug: "lanna-international-school",
    areas: ["southwest"],
    curricula: ["British"],
    budget: "over400k",
    website: "https://www.lannaist.ac.th/",
    founded: 1993,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "423,400 to 813,400 THB/year",
    description: "Lanna opened in 1993 as Northern Thailand's first British international school, growing from a small family-run school into a campus in Baan Waen, Hang Dong, with more than 900 students from around 40 countries. It is non-religious.\n\nIt follows the English National Curriculum, with the International Early Years and Primary Curricula in the younger years, then Cambridge IGCSEs and A Levels. Lanna is WASC accredited and the only FOBISIA member in Northern Thailand, and opened a new STEAM Innovation Centre in 2026.\n\nAlongside Prem, it is one of the two most expensive schools in Chiang Mai, and the default choice for families who want a full British pathway to A Level. Expect a registration fee of around 90,000 THB on entry.",
  },
  {
    name: "Panyaden International School",
    slug: "panyaden-international-school",
    areas: ["southwest"],
    curricula: ["British", "International Baccalaureate"],
    budget: "over400k",
    website: "https://www.panyaden.ac.th/",
    founded: 2011,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English, Thai",
    feeRange: "321,000 to 594,000 THB/year",
    description: "Panyaden was founded in 2011 in Nam Phrae, Hang Dong, and is known for two things: Buddhist values and mindfulness woven into the school day (it is open to families of all faiths), and a campus built largely from earth, bamboo and other natural materials.\n\nYounger children follow the British Early Years Foundation Stage and the International Primary Curriculum, older students the International Middle Years Curriculum, and the school is an IB World School for the Diploma Programme. Lessons are in English and Thai, with Mandarin offered. It has around 480 students and is WASC accredited.\n\nPanyaden suits families looking for a calmer, eco-minded school with a strong sense of community. It does not run a school bus, so most families live nearby. Its own fee schedule lists a 75,000 THB admissions fee and a refundable security deposit.",
  },
  {
    name: "Chiang Mai International School (CMIS)",
    slug: "chiang-mai-international-school",
    areas: ["city"],
    curricula: ["American"],
    budget: "over400k",
    website: "https://cmis.ac.th/home",
    founded: 1954,
    ageRange: "Ages 3 to 18",
    languageOfInstruction: "English",
    feeRange: "341,700 to 590,200 THB/year",
    description: "CMIS traces its roots to 1954, when returning missionaries started the Chiang Mai Children's Centre, and it describes itself as the first international school registered outside Bangkok. It took its current name in 1985 and sits in Wat Ket, near the Ping River, one of the few international schools inside the city.\n\nIt follows an American curriculum with a wide choice of Advanced Placement courses, including AP Capstone. The school is affiliated with the Church of Christ in Thailand and is open to students of all faiths, from around 20 to 30 countries. It is WASC accredited.\n\nCMIS suits families who want an American high school diploma and a central location. Ask about its enrolment fee and continuing enrolment deposit when you apply.",
  },
  {
    name: "Singapore International School Chiangmai (SISB)",
    slug: "sisb-chiang-mai",
    areas: ["city"],
    curricula: ["Singapore", "British"],
    budget: "over400k",
    website: "https://sisb.ac.th/singapore-international-school-chiangmai/",
    founded: 2017,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English, Chinese, Thai",
    feeRange: "324,300 to 564,300 THB/year",
    description: "SISB Chiang Mai opened in 2017 as the northern campus of the Bangkok-based Singapore International School group, on Hussadhisawee Road in Sri Phum, close to the old city.\n\nIt is trilingual, teaching in English with Chinese and Thai. Early years follow the British EYFS, primary uses Singapore maths and science, and secondary leads to Cambridge IGCSEs and A Levels, with the Duke of Edinburgh's Award on offer. The group has announced a second phase on the Chiang Mai campus that will add around 300 places.\n\nSISB suits families who want strong maths and serious Mandarin alongside English. Its enrolment fee of 150,000 THB can be paid up front or spread over several years.",
  },
  {
    name: "American Pacific International School (APIS)",
    slug: "american-pacific-international-school",
    areas: ["southwest"],
    curricula: ["American", "International Baccalaureate"],
    budget: "under400k",
    website: "https://www.apis.ac.th/",
    founded: 1997,
    ageRange: "18 months to 18 years",
    languageOfInstruction: "English",
    feeRange: "120,300 to 524,800 THB/year",
    description: "APIS opened in 1997 and has two campuses: a primary campus in Mae Hia, on the southwest edge of the city, and a rural main campus with four boarding houses on the Hang Dong to Samoeng road in Ban Pong, about 25 km out.\n\nIt follows an American curriculum and has been authorised for the IB Diploma since 2020. It has been WASC accredited since 2002, and describes itself as Chiang Mai's first internationally accredited boarding school, taking boarders from age 6. The high school is small, around 100 students, and largely Chinese.\n\nAPIS is one of two Chiang Mai schools with boarding, and its younger years are among the more affordable in the city. Joining costs include an entrance fee and a registration deposit that is credited against tuition.",
  },
  {
    name: "Varee Chiangmai International School",
    slug: "varee-chiangmai-international-school",
    areas: ["city"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://vcis.ac.th/",
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "244,000 to 524,000 THB/year (2025/26)",
    description: "Varee Chiangmai International School is the international programme of the long-running Varee Chiang Mai School, on the same Mahidol Road campus in Nong Hoi, just south of the old city.\n\nIt follows a British curriculum to Cambridge IGCSEs and A Levels, and runs the Duke of Edinburgh's Award from Bronze to Gold. It has a mix of Thai and international families, and laid the foundation stone for a new secondary building in 2025.\n\nVaree suits families who want a British pathway close to the city at mid-range fees. The fees shown are for 2025/26, so ask the school for its current schedule.",
  },
  {
    name: "Nakornpayap International School (NIS)",
    slug: "nakornpayap-international-school",
    areas: ["north"],
    curricula: ["American"],
    budget: "over400k",
    website: "https://www.nis.ac.th",
    founded: 1993,
    ageRange: "Ages 3 to 18",
    languageOfInstruction: "English",
    feeRange: "304,500 to 521,800 THB/year",
    description: "NIS was founded in 1993 with 39 students on Chang Khlan Road, and describes itself as the oldest secular international school in Chiang Mai. It moved to its 17-acre campus in San Phi Suea, north of the city, in 2003, and has around 450 students.\n\nIt follows an American curriculum based on the Common Core, with Advanced Placement courses in high school, and has been WASC accredited since 2000. Its motto, Education through diversity, reflects a mixed Thai and international student body.\n\nNIS suits families living north of the city who want an American programme without a religious affiliation. Joining costs include a registration fee and refundable book and damage deposits.",
  },
  {
    name: "Meritton British International School",
    slug: "meritton-british-international-school",
    areas: ["southwest"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://merittonbritish.ac.th/",
    founded: 2018,
    ageRange: "Ages 2 to 17",
    languageOfInstruction: "English",
    feeRange: "224,400 to 440,000 THB/year",
    description: "Meritton is a small, family-run British school founded in 2018 in Nong Khwai, Hang Dong, with around 300 students. Its name means town of merits.\n\nIt follows the British EYFS, then Cambridge Primary and Lower Secondary, leading to IGCSE, and runs a values-based education programme with daily mindfulness. The school lists Cambridge, COBIS and ONESQA accreditation, and the campus has a pool, a grass pitch and vegetable gardens.\n\nMeritton suits families who want a British school with a smaller, warmer feel at mid-range fees. It does not run a school bus. Students currently finish at IGCSE, so ask about plans for A Levels.",
  },
  {
    name: "Americana Chinese International School (ACIS)",
    slug: "americana-chinese-international-school",
    areas: ["southeast"],
    curricula: ["American"],
    budget: "under400k",
    website: "https://www.acis.ac.th/",
    founded: 2019,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English, Chinese",
    feeRange: "230,000 to 414,800 THB/year",
    description: "ACIS opened in August 2019 on the Chiang Mai to Lampang Superhighway in Saraphi, as part of the Ambassador Education Group, next door to its sister schools UCIS and Ambassador Bilingual School.\n\nIt follows an American Common Core curriculum with Advanced Placement courses, STEM and robotics, and daily Chinese lessons, with Thai and Italian also taught. It has around 550 students and is WASC accredited. Its first Grade 12 class is due to graduate in 2027.\n\nACIS suits families who want an American programme with serious Mandarin. Fees include a 20,000 THB annual capital fee, and there is an entrance fee on joining.",
  },
  {
    name: "Chiang Mai Montessori International School",
    slug: "chiang-mai-montessori-international-school",
    areas: ["southwest"],
    curricula: ["Montessori"],
    budget: "under400k",
    website: "https://chiangmaimontessori.org/",
    ageRange: "Ages 1 to 16",
    languageOfInstruction: "English",
    feeRange: "300,368 to 407,412 THB/year (2025/26)",
    description: "Chiang Mai Montessori is a small school in Ban Royjan, Nong Khwai, Hang Dong, with around 80 students from 16 countries and a farm on campus.\n\nIt follows the Montessori approach from the infant community through to the adolescent years. There are no uniforms, lunch is included, and the school offers speech and language support.\n\nIt suits families who want a Montessori education beyond the early years, which is rare in Chiang Mai. The fees shown are for 2025/26, so ask the school for its current schedule.",
  },
  {
    name: "SBS International School Chiangmai",
    slug: "sbs-international-school-chiangmai",
    areas: ["southwest"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://sbscm.ac.th/",
    ageRange: "Ages 1 to 18",
    languageOfInstruction: "English, Thai",
    feeRange: "248,200 to 405,000 THB/year",
    description: "SBS Chiangmai is the Chiang Mai campus of Satit Bilingual School of Rangsit University, in Ban Waen, Hang Dong, with around 450 students.\n\nIt runs a Cambridge pathway to IGCSE and A Level alongside a Thai bilingual track, plus an Intensive English Course for students in Years 4 to 8 who need to catch up. The Duke of Edinburgh's Award and Model United Nations are on offer, and much of the student body speaks Chinese.\n\nSBS suits families who want a Cambridge route at mid-range fees, or a bilingual option. Expect an admission fee of around 100,000 THB and refundable deposits on entry.",
  },
  {
    name: "Unity Concord International School (UCIS)",
    slug: "unity-concord-international-school",
    areas: ["southeast"],
    curricula: ["American"],
    budget: "under400k",
    website: "https://www.ucis.ac.th/",
    founded: 2017,
    ageRange: "Ages 3 to 18",
    languageOfInstruction: "English",
    feeRange: "201,600 to 386,400 THB/year",
    description: "UCIS opened in 2017 on the Chiang Mai to Lampang Superhighway in Saraphi. It was started by the family behind Little Stars kindergarten and Ambassador Bilingual School, and is the flagship of the Ambassador Education Group, alongside ACIS and BCIS.\n\nIt follows an American curriculum from Pre-K to Grade 12, with Advanced Placement courses, a house system and a Falcons sports programme. It is WASC accredited.\n\nUCIS is one of the more affordable American schools in the city, and suits families living on the east and south side. Joining costs include an entrance fee and a one-off book fee.",
  },
  {
    name: "Grace International School",
    slug: "grace-international-school",
    areas: ["southwest"],
    curricula: ["American"],
    budget: "under400k",
    website: "https://gisthailand.org/",
    founded: 1999,
    ageRange: "Ages 5 to 18",
    languageOfInstruction: "English",
    feeRange: "309,000 to 379,000 THB/year",
    description: "Grace opened in 1999 with 176 students, founded to educate the children of international Christian workers in the region. In 2019 it moved to a new purpose-built campus in Harn Kaew, Hang Dong, and it now has around 600 students from 25 countries.\n\nIt is a Christian school teaching an American college-prep curriculum from Kindergarten to Grade 12, with Advanced Placement courses, accredited by ACSI and WASC. It also supports families in remote areas with distance learning and homeschooling.\n\nGrace suits families who want a Christian American education. Mission workers have their own discounted rates, and there is an annual capitalization fee on top of the tuition shown.",
  },
  {
    name: "British Concordance International School (BCIS)",
    slug: "british-concordance-international-school",
    areas: ["southwest"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://www.bcisschool.ac.th/",
    founded: 2022,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "196,350 to 346,500 THB/year",
    description: "BCIS opened in September 2022 near Canal Road in Nong Khwai, Hang Dong, as the Ambassador Education Group's first British school. It started with nursery and primary and is growing into secondary, with around 450 students from more than 30 countries.\n\nIt follows the British EYFS and Cambridge Primary, leading to IGCSEs and BTECs. Homework is optional below secondary, and the school is a CIS member.\n\nBCIS is one of the most affordable British options in Chiang Mai. Expect an entrance fee of around 80,000 THB and a one-off book fee.",
  },
  {
    name: "Christian German School Chiang Mai (CDSC)",
    slug: "christian-german-school-chiang-mai",
    areas: ["southeast"],
    curricula: ["German"],
    budget: "under400k",
    website: "https://www.cdsc.ac.th/en",
    founded: 1994,
    ageRange: "Ages 3 to 18",
    languageOfInstruction: "German",
    feeRange: "146,000 to 328,000 THB/year",
    description: "The Christliche Deutsche Schule Chiang Mai was founded in 1994 by the Marburger Mission Foundation with the support of the German Embassy, and sits in Tha Wang Tan, Saraphi.\n\nIt is an officially recognised German school abroad, supported by Germany's Central Agency for Schools Abroad, and teaches the German national curriculum through to the German International Abitur. Teaching is in German, and the school runs a preparation course for children who need to catch up. It also has a forest school section.\n\nCDSC is the natural choice for German-speaking families, and one of the most affordable schools in the city.",
  },
  {
    name: "Windfield International School Chiang Mai",
    slug: "windfield-international-school-chiang-mai",
    areas: ["city"],
    curricula: ["French", "British"],
    budget: "under400k",
    website: "https://chiangmai.windfield.ac.th/",
    founded: 2024,
    ageRange: "From age 2",
    languageOfInstruction: "French, English",
    feeRange: "178,690 to 256,800 THB/year (one source)",
    description: "Windfield opened its Chiang Mai campus on Charoen Rat Road in Wat Ket in September 2024, as an offshoot of the French school on Koh Samui. It is billed as the first French-curriculum school in Chiang Mai.\n\nIt has a French section following the French national curriculum and a British section alongside it, with very small classes. It has links with the Alliance Française in Chiang Mai.\n\nWindfield suits French-speaking families and those who want a bilingual French and English start. It is still very new, so ask which year groups are open and confirm the current fees.",
  },
  {
    name: "Mill Hill International School Thailand",
    slug: "mill-hill-international-school-thailand",
    areas: ["southwest"],
    curricula: ["British"],
    budget: "unknown",
    founded: 2025,
    ageRange: "About ages 3 to 14",
    languageOfInstruction: "English",
    pending: true,
    description: "Held back: campus location, website and fee schedule not yet confirmed. First overseas school of the Mill Hill Education Group (London), opened 1 Sept 2025 with Ornsirin. Area is a placeholder.",
  },
];

export const SCHOOLS: School[] = SCHOOL_ENTRIES.filter((s) => !s.pending).map((s) => ({
  ...s,
  budget: verifiedBudget(s.slug) ?? s.budget,
}));

export const ALL_CURRICULA = Array.from(
  new Set(SCHOOLS.flatMap((s) => s.curricula))
).sort();
