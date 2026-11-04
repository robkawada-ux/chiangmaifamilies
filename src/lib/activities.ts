// Activities directory: days out and weekly classes for kids in Chiang Mai.
// One Activity per venue or provider, each with its own page at
// /activities/<slug>. Ported from phuketfamilies on 4 Nov 2026.
//
// HONESTY RULES, same as the Bangkok and Phuket sites:
// - Never guess a price, time or age. Omit the field and the UI says
//   "not published".
// - status "confirmed" means we read the details on the operator's own
//   current page. "check" means the best detail we have comes from a
//   recent guide or listing, and the UI tells parents to confirm first.
// - closedNote marks somewhere that is closed right now.
// - No elephant camps or sanctuaries, and no tiger attractions.
// - Never link flightofthegibbon.com: the domain now redirects to a
//   gambling site.
//
// Research notes, sources and what was left out: the claude.ai project
// doc claude/chiangmai-activities.md.
//
// MAINTENANCE: re-check prices every six months, and closures monthly.
// Many Thai attractions charge foreigners more: the price note says which
// rate is shown.

export type ActivityType = "Day out" | "Weekly class";

export type Category =
  // Days out
  | "Indoor play"
  | "Adventure and outdoors"
  | "Water parks and pools"
  | "Animals and nature"
  | "Culture and markets"
  // Weekly classes
  | "Swimming, riding and sport"
  | "Football"
  | "Gymnastics and dance"
  | "Martial arts"
  | "Arts, music and crafts"
  | "Climbing";

export const DAY_OUT_CATEGORIES: Category[] = [
  "Indoor play",
  "Adventure and outdoors",
  "Water parks and pools",
  "Animals and nature",
  "Culture and markets",
];

export const CLASS_CATEGORIES: Category[] = [
  "Swimming, riding and sport",
  "Football",
  "Gymnastics and dance",
  "Martial arts",
  "Arts, music and crafts",
  "Climbing",
];

export type Setting = "Indoor" | "Outdoor" | "Indoor and outdoor";

/** Parts of Chiang Mai, roughly centre outwards, plus chains and gaps. */
export type Zone =
  | "Old City"
  | "Nimman and Santitham"
  | "Night Bazaar and riverside"
  | "Superhighway and Central Festival"
  | "Mae Rim and the north"
  | "Doi Suthep and the mountains"
  | "Hang Dong and Canal Road"
  | "San Kamphaeng and Saraphi"
  | "Several locations"
  | "Location to confirm";

export const ZONES: Zone[] = [
  "Old City",
  "Nimman and Santitham",
  "Night Bazaar and riverside",
  "Superhighway and Central Festival",
  "Mae Rim and the north",
  "Doi Suthep and the mountains",
  "Hang Dong and Canal Road",
  "San Kamphaeng and Saraphi",
  "Several locations",
  "Location to confirm",
];

export type PriceUnit =
  | "entry"
  | "hour"
  | "session"
  | "term"
  | "course"
  | "month"
  | "activity";

export interface Price {
  /** Baht, for a child unless the note says otherwise. */
  from?: number;
  to?: number;
  unit: PriceUnit;
  free?: boolean;
  note?: string;
}

export interface Activity {
  slug: string;
  name: string;
  type: ActivityType;
  category: Category;
  /** Omit when we do not know. Only "Indoor" places count as rainy-day options. */
  setting?: Setting;
  /** Mall, park or building, when the name does not already say it. */
  venue?: string;
  address?: string;
  district: string;
  zone: Zone;
  transit?: string;
  /** Ages in years. Omit both when not published. */
  minAge?: number;
  maxAge?: number;
  hours?: string;
  price?: Price;
  description: string;
  worthKnowing?: string;
  /** Set when the place is closed right now. Shown as a banner. */
  closedNote?: string;
  /** Other branches, for chains. */
  branches?: string[];
  website?: string;
  phone?: string;
  lineId?: string;
  email?: string;
  facebook?: string;
  /** Slug of one of our own articles that covers this place. */
  relatedArticle?: string;
  status: "confirmed" | "check";
  sourceUrl: string;
  lastVerified: string;
}


export const ACTIVITIES: Activity[] = [
  {
    slug: "xventure-central-chiang-mai",
    name: "Xventure",
    type: "Day out",
    category: "Indoor play",
    setting: "Indoor",
    venue: "Central Chiang Mai (Central Festival), 4th floor",
    address: "99, 99/1, 99/2 Moo 4, Superhighway Chiang Mai-Lampang Road, Fa Ham, Mueang Chiang Mai 50000",
    district: "Fa Ham",
    zone: "Superhighway and Central Festival",
    hours: "Mon to Thu 11am to 8pm, Fri 11am to 9pm, Sat and Sun 10am to 9pm",
    price: { from: 280, to: 600, unit: "entry", note: "Timed tickets: under 108cm 280 baht for 1 hour, 410 for 2, 560 for 3; 108cm and over 320, 450 or 600. Under 80cm free. Xventure-brand grip socks required, 60 baht. 10-visit and annual passes also sold." },
    description: "A large indoor active park that opened in October 2025, with giant slides, trampolines, a climbing zone, a high rope course, an indoor zipline and ninja-style obstacle runs. It suits school-age kids who need to burn off energy when it is too hot, wet or smoky to be outside.",
    worthKnowing: "Children under 8 and under 120cm need a guardian aged 18 or over with them, and only Xventure, Kiztopia, Bouncetopia or Jumptopia grip socks are allowed, so keep a pair from a past visit.",
    website: "https://xventurepark.com/outlets/central-chiangmai-new",
    lineId: "@xventurethailand",
    email: "xventure@kiztopia.co.th",
    status: "confirmed",
    sourceUrl: "https://xventurepark.com/faq/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "bouncetopia-central-chiang-mai",
    name: "Bouncetopia",
    type: "Day out",
    category: "Indoor play",
    setting: "Indoor",
    venue: "Central Chiang Mai (Central Festival), 3rd floor",
    address: "99, 99/1, 99/2 Moo 4, Superhighway Chiang Mai-Lampang Road, Fa Ham, Mueang Chiang Mai 50000",
    district: "Fa Ham",
    zone: "Superhighway and Central Festival",
    hours: "Mon to Thu 11am to 8pm, Fri to Sun 10am to 9pm",
    description: "A giant inflatable playground of about 2,000 square metres run by Kiztopia, with fast slides, a floating boat and a block-filled ninja fortress. It relaunched with a superhero theme in August 2026 and is aimed at younger children and families.",
    worthKnowing: "It is one floor below Xventure in the same mall, so families with a toddler and an older child can split up; ticket prices are only in a flyer PDF, so check at the desk.",
    website: "https://kiztopia.co.th/branches/central-chiangmai/",
    status: "confirmed",
    sourceUrl: "https://kiztopia.co.th/branches/central-chiangmai/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "50fly-trampoline-park",
    name: "50FLY! Family Entertainment Center",
    type: "Day out",
    category: "Indoor play",
    setting: "Indoor",
    venue: "Lotus's Hang Dong (ground floor)",
    address: "132 Moo 10, Pa Daet, Mueang Chiang Mai 50100",
    district: "Pa Daet",
    zone: "Hang Dong and Canal Road",
    hours: "Mon to Fri 11am to 8pm, Sat and Sun 10am to 8pm",
    price: { from: 300, to: 500, unit: "session", note: "Free jump (age 5 and up) 300 baht for 1 hour, 500 for 2 hours. Toddler Time (5 and under, one child plus one parent) 300 per hour. Laser tag 200 a game; jump plus one game 450." },
    description: "An indoor trampoline park with foam pits, a ninja course, dodgeball and basketball trampolines, laser tag and augmented-reality games. It is one of the few big indoor play spaces south of the city.",
    worthKnowing: "Under-6s can only jump in Toddler Time sessions; a 2024 guide gave these as weekday 11am to noon, weekend 10 to 11am and daily 6 to 8pm, so check the current slots before you go.",
    website: "https://50flyfec.com",
    phone: "053 142 650",
    status: "confirmed",
    sourceUrl: "https://page.line.me/50fly",
    lastVerified: "2026-11-04",
  },
  {
    slug: "pongyang-jungle-coaster-zipline",
    name: "Pongyang Jungle Coaster and Zipline",
    type: "Day out",
    category: "Adventure and outdoors",
    setting: "Outdoor",
    address: "99/9 Pong Yaeng, Mae Rim, Chiang Mai 50180",
    district: "Pong Yaeng",
    zone: "Mae Rim and the north",
    hours: "Daily 8am to 5pm",
    description: "An adventure park in the Mae Rim hills with a single-rider jungle roller coaster on rails plus zipline circuits and other add-on activities. The coaster can be booked as a single ride, which makes it an easy half day with older kids.",
    worthKnowing: "Height and age limits are not published in any source we found; family bloggers suggest most activities suit kids from about 6, so ask about limits before you drive up.",
    status: "check",
    sourceUrl: "https://www.thaiholidayguide.com/attraction/pong-yaeng-jungle-coaster-zipline/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "grand-canyon-water-park",
    name: "Grand Canyon Water Park",
    type: "Day out",
    category: "Water parks and pools",
    setting: "Outdoor",
    district: "Hang Dong",
    zone: "Hang Dong and Canal Road",
    hours: "Daily 10am to 7pm",
    description: "A flooded former quarry south-west of the city turned into a water park, with inflatable obstacle courses, giant slides, cliff jumps, kayaks and a zipline. A separate small park with a cheap entry ticket suits younger children.",
    worthKnowing: "Everyone must wear a life vest, and children under 90cm go in free; wakeboarding costs extra.",
    status: "check",
    sourceUrl: "https://thailandmagazine.com/chiang-mai/see-do/grand-canyon-water-park/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "chiang-mai-zoo",
    name: "Chiang Mai Zoo and Aquarium",
    type: "Day out",
    category: "Animals and nature",
    setting: "Indoor and outdoor",
    address: "Huay Kaew Road, at the foot of Doi Suthep",
    district: "Huay Kaew",
    zone: "Nimman and Santitham",
    price: { from: 120, unit: "entry", note: "Zoo's own ticket page: child (3 to 12) 120 baht, adult 350; aquarium child 350, adult 450; zoo transport child (under 135cm) 40. The page does not say whether these are foreigner rates, and older guides quote much lower Thai prices." },
    description: "A large hillside zoo next to the road up Doi Suthep, with an aquarium that has one of the longest walk-through tunnels in the world and a new reptile house that opened in June 2026. The grounds are big and hilly, and the zoo sells a separate transport ticket for getting around.",
    worthKnowing: "The aquarium is a separate, pricier ticket, so decide in advance whether you want both.",
    website: "https://chiangmai.zoothailand.org",
    status: "check",
    sourceUrl: "https://chiangmai.zoothailand.org/en/ewt_news.php?nid=173",
    lastVerified: "2026-11-04",
  },
  {
    slug: "chiang-mai-night-safari",
    name: "Chiang Mai Night Safari",
    type: "Day out",
    category: "Animals and nature",
    setting: "Outdoor",
    address: "33 Moo 12, Nong Khwai, Hang Dong, Chiang Mai 50230",
    district: "Hang Dong",
    zone: "Hang Dong and Canal Road",
    hours: "Daily 11am to 10pm (ticket office closes 9pm); night tram rides 5:30pm to 9pm",
    price: { note: "Children under 100cm free; 101 to 140cm pay the child rate (updated 1 Sep 2026). Ticket prices are sold online and were not shown on the pages we could read.", unit: "entry" },
    description: "A government-run safari park where an evening tram takes you past giraffes, zebras and kangaroos in the savanna zone and lions, white tigers and hyenas in the predator zone. There is also a walking trail and daytime tram, so it works for a late afternoon into early evening outing.",
    worthKnowing: "The night tram leaves every 30 minutes from 5:30pm and takes about an hour, so arriving around 5pm avoids a late night for small kids.",
    website: "https://chiangmainightsafari.com",
    phone: "053 999 000",
    email: "ns_saraban@nightsafari.or.th",
    status: "confirmed",
    sourceUrl: "https://chiangmainightsafari.com/en/visit/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "royal-park-rajapruek",
    name: "Royal Park Rajapruek",
    type: "Day out",
    category: "Animals and nature",
    setting: "Outdoor",
    address: "9 Moo 1, Mae Hia, Mueang Chiang Mai 50100",
    district: "Mae Hia",
    zone: "Hang Dong and Canal Road",
    hours: "Daily 8am to 6pm",
    price: { from: 70, unit: "entry", note: "Child 100 to 140cm: 70 baht Thai, 150 baht foreigner. Under 100cm free. Adults 100 Thai, 200 foreigner." },
    description: "Huge landscaped royal gardens on the south-west edge of the city, with themed garden areas and wide lawns. It is a good open space for kids to run and cycle, and the park's own site advertises a hill-tribe market on Saturdays and Sundays.",
    worthKnowing: "Go early in the morning or late afternoon; there is little shade between the gardens in the hot season.",
    website: "https://www.royalparkrajapruek.org",
    status: "confirmed",
    sourceUrl: "https://www.royalparkrajapruek.org/Admission",
    lastVerified: "2026-11-04",
  },
  {
    slug: "queen-sirikit-botanic-garden",
    name: "Queen Sirikit Botanic Garden",
    type: "Day out",
    category: "Animals and nature",
    setting: "Outdoor",
    address: "100 Moo 9, Mae Raem, Mae Rim 50180",
    district: "Mae Rim",
    zone: "Mae Rim and the north",
    hours: "Daily 8:30am to 5pm",
    price: { from: 20, unit: "entry", note: "Child 20 baht Thai, 50 baht foreigner; adults 40 Thai, 100 foreigner. Cars 100 baht, motorbikes 30. Two guides (2020 and July 2026) agree on these figures; the garden's own site would not load." },
    description: "A big hillside botanic garden in the Mae Sa valley with a treetop canopy walkway about 20 metres up and glasshouses for rainforest plants and cacti. Kids love the walkway, and the garden pairs well with other Mae Sa stops on the same day.",
    worthKnowing: "The grounds are large and steep, so drive in rather than walk between sections.",
    phone: "053 841 000",
    status: "check",
    sourceUrl: "https://www.thaiholidayguide.com/attraction/queen-sirikit-botanical-garden/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "hidden-village-chiang-mai",
    name: "Hidden Village Chiang Mai",
    type: "Day out",
    category: "Animals and nature",
    setting: "Outdoor",
    address: "Next to Elephant Parade Land, between the Superhighway and the inner ring road, north of the old city",
    district: "North Chiang Mai",
    zone: "Mae Rim and the north",
    minAge: 2,
    maxAge: 10,
    price: { unit: "entry", note: "Foreigner child 100 baht, adult 200; under 100cm free; residents pay less (amount not published). Rides and animal food about 20 baht extra." },
    description: "A small family attraction about 6km north of the old city with farm animals to feed, a play park, a few rides and a dinosaur park with life-size moving models. It is best for preschool and early primary ages.",
    worthKnowing: "The moving dinosaurs can frighten some toddlers, so start with the farm area.",
    phone: "064 440 0305",
    email: "Hiddenvillagechiangmai@gmail.com",
    status: "check",
    sourceUrl: "https://thebackpackingfamily.com/hidden-village-chiang-mai-thailand-kids/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "siam-insect-zoo",
    name: "Siam Insect Zoo",
    type: "Day out",
    category: "Animals and nature",
    setting: "Indoor and outdoor",
    address: "23/4 Moo 1, Mae Rim-Samoeng Road, Mae Raem, Mae Rim 50180",
    district: "Mae Rim",
    zone: "Mae Rim and the north",
    hours: "Daily 9am to 5pm",
    price: { from: 60, unit: "entry", note: "Child (3 to 12) 60 baht, adult 80, per a family blog updated Dec 2025; a 2026 listing also gives 80 for adults." },
    description: "A small insect museum and garden on the Mae Sa road with butterflies, beetles, stick insects and other bugs, many of them alive. It is a short stop that fits easily with the botanic garden or other Mae Rim attractions.",
    worthKnowing: "It takes about an hour, so combine it with Queen Sirikit Botanic Garden further up the same road.",
    phone: "062 956 5645",
    status: "check",
    sourceUrl: "https://www.lovethailand.org/travel/en/1-Chiang-Mai/193-Siam-Insect-Zoo.html",
    lastVerified: "2026-11-04",
  },
  {
    slug: "narit-astropark",
    name: "Princess Sirindhorn AstroPark (NARIT)",
    type: "Day out",
    category: "Culture and markets",
    setting: "Indoor and outdoor",
    address: "260 Moo 4, Don Kaew, Mae Rim, Chiang Mai 50180",
    district: "Don Kaew",
    zone: "Mae Rim and the north",
    hours: "Tue to Fri 9am to 4pm, Sat, Sun and holidays 10am to 5pm, closed Mondays",
    price: { free: true, note: "Astronomy exhibition free. Planetarium shows 50 baht general, 30 baht students. Saturday night public stargazing (November to May, 6pm to 10pm) free.", unit: "entry" },
    description: "The headquarters of Thailand's national astronomy institute, with a free hands-on astronomy exhibition, a planetarium and park paths lined with solar system models. From November to May it opens its telescopes to the public on Saturday nights.",
    worthKnowing: "Planetarium shows run at set times (for example 11am and 2pm on weekdays), so plan the visit around a showing.",
    website: "https://narit.or.th/en/observatory/princess-sirindhorn-astropark",
    phone: "084 088 2261",
    lineId: "@narit.astropark",
    status: "confirmed",
    sourceUrl: "https://narit.or.th/en/observatory/princess-sirindhorn-astropark",
    lastVerified: "2026-11-04",
  },
  {
    slug: "wat-phra-that-doi-suthep",
    name: "Wat Phra That Doi Suthep",
    type: "Day out",
    category: "Culture and markets",
    setting: "Outdoor",
    district: "Suthep",
    zone: "Doi Suthep and the mountains",
    hours: "Inner chedi area 6:30am to 6:30pm",
    price: { note: "Thai nationals free; foreigners pay a small entry fee (we found only one source for the amount, so it is not listed). A small fee also applies for the lift instead of the 300-plus naga stairs.", unit: "entry" },
    description: "Chiang Mai's best-known temple, on the mountain above the city, reached by a naga-lined staircase of more than 300 steps or a short lift. Kids enjoy the climb and the golden chedi, and the views over the city are the reward.",
    worthKnowing: "Shoulders and knees must be covered (sarongs can be rented at the entrance); go before 9am to beat crowds and heat. Since October 2025 the national park charges entry at nearby spots such as Huai Kaew Waterfall and Doi Pui, but not at the temple itself.",
    status: "check",
    sourceUrl: "https://www.chiangmaicitylife.com/citynews/general/entrance-fees-required-at-doi-suthep-pui-starting-october-2025/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "sunday-walking-street",
    name: "Sunday Walking Street",
    type: "Day out",
    category: "Culture and markets",
    setting: "Outdoor",
    address: "Ratchadamnoen Road, from Tha Phae Gate to Wat Phra Singh",
    district: "Old City",
    zone: "Old City",
    hours: "Sundays from about 4pm into the late evening",
    price: { free: true, unit: "entry" },
    description: "The city's biggest weekly market closes Ratchadamnoen Road to traffic every Sunday afternoon for street food, crafts and buskers, running from Tha Phae Gate to Wat Phra Singh. It is a classic family evening out, with temple courtyards along the way to sit and eat.",
    worthKnowing: "Arrive between 4 and 5:30pm before it gets packed (crowds peak from about 6:30pm), and bring cash, as most stalls do not take cards.",
    status: "check",
    sourceUrl: "https://www.nomadotravel.app/en/attractions/sunday-walking-street",
    lastVerified: "2026-11-04",
  },
  {
    slug: "chiang-mai-city-arts-and-cultural-centre",
    name: "Chiang Mai City Arts and Cultural Centre",
    type: "Day out",
    category: "Culture and markets",
    setting: "Indoor",
    address: "Behind the Three Kings Monument, Old City",
    district: "Old City",
    zone: "Old City",
    hours: "Tue to Sun, closed Mondays",
    description: "A museum in a former provincial hall that tells Chiang Mai's history through dioramas and models, with the Lanna Folklife Museum and the Chiang Mai Historical Centre nearby. All three are air-conditioned and short enough for children.",
    worthKnowing: "A combined ticket covers all three museums; prices quoted in recent articles conflict, so check at the desk.",
    status: "check",
    sourceUrl: "https://en.readme.me/p/58123",
    lastVerified: "2026-11-04",
  },
  {
    slug: "bo-sang-umbrella-village",
    name: "Bo Sang Umbrella Village",
    type: "Day out",
    category: "Culture and markets",
    setting: "Indoor and outdoor",
    address: "Ton Pao, San Kamphaeng 50130",
    district: "Bo Sang",
    zone: "San Kamphaeng and Saraphi",
    hours: "Daily, roughly 8:30am to 5pm",
    price: { free: true, note: "Free to visit; painters will decorate a phone case, bag or your own item for a small fee.", unit: "entry" },
    description: "A craft village east of the city famous for hand-made paper and cotton parasols, where you can watch umbrellas being made and painted. Children can have something painted for them while they watch.",
    worthKnowing: "Bring a plain item, like a cap or tote, for the painters to decorate.",
    status: "check",
    sourceUrl: "https://www.thaiholidayguide.com/attraction/bo-sang-umbrella-village/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "cmrca-after-school-climbing-club",
    name: "After School Climbing Club, Chiang Mai Rock Climbing Adventures",
    type: "Weekly class",
    category: "Climbing",
    setting: "Indoor",
    venue: "CMRCA indoor climbing gym",
    address: "55/3 Ratchapakhinai Road, Phra Sing, Mueang Chiang Mai",
    district: "Old City",
    zone: "Old City",
    minAge: 7,
    maxAge: 14,
    hours: "Wednesdays 4pm to 5:30pm",
    price: { from: 350, unit: "session", note: "Includes club entry, climbing shoe hire and a day pass." },
    description: "A weekly coached bouldering session for children run by Chiang Mai's long-established climbing company at its old-city gym. No experience is needed, and it is a good route into the sport before trying the outdoor crag at Crazy Horse.",
    worthKnowing: "Register in person at the gym on a Wednesday before 4pm.",
    phone: "086 911 1470",
    facebook: "https://www.facebook.com/thailandclimbing",
    status: "confirmed",
    sourceUrl: "https://thailandclimbing.rezdy.com/430118/after-school-climbing-club",
    lastVerified: "2026-11-04",
  },
  {
    slug: "decathlon-kids-futsal",
    name: "Kids futsal at Decathlon Chiang Mai",
    type: "Weekly class",
    category: "Football",
    setting: "Outdoor",
    venue: "Decathlon Chiang Mai",
    address: "17 Moo 4, Lampang-Chiang Mai Superhighway, Nong Pa Khrang, Mueang Chiang Mai 50000",
    district: "Nong Pa Khrang",
    zone: "Superhighway and Central Festival",
    minAge: 7,
    maxAge: 12,
    hours: "Sat and Sun 9am to 10am",
    price: { free: true, unit: "entry" },
    description: "Free weekend futsal sessions for children, coached by Coach Army at the Decathlon store, with beginner to advanced levels. It is a low-commitment way to see whether a child enjoys regular football before joining a paid academy.",
    worthKnowing: "Book each session through the Decathlon Activities site (about 14 places a session), and the listing asks players to wear at least one Decathlon item.",
    website: "https://activities.decathlon.co.th/en-TH/sport-activities/details/1695823",
    status: "confirmed",
    sourceUrl: "https://activities.decathlon.co.th/en-TH/sport-activities/details/1695823",
    lastVerified: "2026-11-04",
  },
  {
    slug: "decathlon-kids-basketball",
    name: "Kids basketball with Asia Arena at Decathlon Chiang Mai",
    type: "Weekly class",
    category: "Swimming, riding and sport",
    setting: "Outdoor",
    venue: "Decathlon Chiang Mai",
    address: "17 Moo 4, Lampang-Chiang Mai Superhighway, Nong Pa Khrang, Mueang Chiang Mai 50000",
    district: "Nong Pa Khrang",
    zone: "Superhighway and Central Festival",
    minAge: 7,
    maxAge: 15,
    hours: "Sat and Sun 10am to 11am",
    price: { free: true, unit: "entry" },
    description: "Free beginner basketball sessions for children, coached by staff from Asia Arena at the Decathlon store. It runs straight after the kids futsal session, so siblings can do one each.",
    worthKnowing: "Sessions fill up (only a few places were left for the first weekend of November 2026), so book a week ahead online.",
    website: "https://activities.decathlon.co.th/en-TH/sport-activities/details/11675845",
    status: "confirmed",
    sourceUrl: "https://activities.decathlon.co.th/en-TH/sport-activities/details/11675845",
    lastVerified: "2026-11-04",
  },
  {
    slug: "casaka-stables-riding-academy",
    name: "Casaka Stables Riding Academy",
    type: "Weekly class",
    category: "Swimming, riding and sport",
    setting: "Outdoor",
    address: "224/1 Moo 3, Nam Phrae, Hang Dong, Chiang Mai 50230",
    district: "Hang Dong",
    zone: "Hang Dong and Canal Road",
    minAge: 3,
    hours: "Mon to Sat 8am to 5pm, closed Sundays",
    description: "A riding school with pony rides from age 3, Young Rider group lessons from 5 covering grooming and basic horsemanship, and private lessons from 6 up to advanced level. It is one of the few places in Chiang Mai with a structured progression for children.",
    worthKnowing: "Prices are not published, so ask for a package rate when you book a first lesson.",
    website: "https://www.casakastables.com/riding-academy",
    phone: "+66 95 402 1844",
    email: "casakastables@gmail.com",
    status: "confirmed",
    sourceUrl: "https://www.casakastables.com/riding-academy",
    lastVerified: "2026-11-04",
  },
  {
    slug: "swim-with-grace",
    name: "Swim With Grace",
    type: "Weekly class",
    category: "Swimming, riding and sport",
    setting: "Outdoor",
    venue: "CY Condo pool (most classes)",
    address: "Canal Road, south of the city towards Hang Dong",
    district: "Canal Road",
    zone: "Hang Dong and Canal Road",
    minAge: 0.5,
    maxAge: 6,
    description: "English-language swimming lessons for babies and young children taught by a teacher called Grace. Baby classes for 6 months to 3 years use songs and play, with a parent in the water.",
    worthKnowing: "A parent or carer must be in the pool for the baby classes.",
    phone: "093 303 9321",
    facebook: "https://www.facebook.com/swimwithgrace",
    status: "check",
    sourceUrl: "https://www.chiangmailocator.com/chiang-mai-sports-6811:swim-with-grace",
    lastVerified: "2026-11-04",
  },
  {
    slug: "50fly-sport-academy",
    name: "50FLY! Sport Academy",
    type: "Weekly class",
    category: "Gymnastics and dance",
    setting: "Indoor",
    venue: "50FLY!, Lotus's Hang Dong",
    address: "132 Moo 10, Pa Daet, Mueang Chiang Mai 50100",
    district: "Pa Daet",
    zone: "Hang Dong and Canal Road",
    price: { from: 500, unit: "session", note: "500 baht per 90-minute lesson, 2,300 for 5 lessons, 4,500 for 10; personal training 1,000." },
    description: "Coached 90-minute classes held on the trampolines at 50FLY!, sold singly or in 5 and 10 lesson packs. It suits kids who love the trampoline park and want proper skills coaching.",
    worthKnowing: "Class days, times and age groups are not published, so message the park on LINE before signing up.",
    website: "https://50flyfec.com",
    phone: "053 142 650",
    status: "confirmed",
    sourceUrl: "https://page.line.me/50fly",
    lastVerified: "2026-11-04",
  },
  {
    slug: "sangdao-performing-arts-school",
    name: "Sangdao Performing Arts School (SPAS)",
    type: "Weekly class",
    category: "Gymnastics and dance",
    setting: "Indoor",
    venue: "EQ Square, Yamaha Music School building, 3rd floor",
    address: "121/12 Moo 10, Chiang Mai-Hang Dong Road, Pa Daet, Mueang Chiang Mai 50100",
    district: "Pa Daet",
    zone: "Hang Dong and Canal Road",
    description: "A dance school teaching ballet, jazz, contemporary, creative dance and hip-hop, following Royal Academy of Dance and Commonwealth Society of Teachers of Dancing syllabuses alongside its own. It also has adult classes.",
    worthKnowing: "Ask whether children can sit RAD exams through the school if you want a recognised progression.",
    phone: "053 274 841",
    email: "sangdaoschool@gmail.com",
    status: "check",
    sourceUrl: "https://chiangmailocator.com/chiang-mai-sports-6801:sangdao-performing-arts-school-spas",
    lastVerified: "2026-11-04",
  },
  {
    slug: "muay-thai-fever-kids",
    name: "Kids Muay Thai at Muay Thai Fever",
    type: "Weekly class",
    category: "Martial arts",
    setting: "Indoor and outdoor",
    district: "Chiang Mai",
    zone: "Location to confirm",
    minAge: 6,
    maxAge: 11,
    hours: "Mon to Sat, 4pm to 5pm and 5pm to 6pm",
    price: { from: 199, to: 3500, unit: "session", note: "199 baht a single kids class; 3,500 baht for a month (one class a day), as listed on the NOW Muay Thai booking site." },
    description: "Hour-long group Muay Thai classes for children aged 6 to 11, six days a week. The after-school time slots make it easy to fit around the school day.",
    worthKnowing: "These prices come from a booking platform, so confirm the walk-in rate with the gym.",
    status: "check",
    sourceUrl: "https://www.nowmuaythai.com/class/184-muay-thai-group-class-for-kids-1-session-at-muay-thai-fever",
    lastVerified: "2026-11-04",
  },
  {
    slug: "chiangmai-jr-muay-thai-kids",
    name: "Kids Muay Thai at Chiangmai JR Muay Thai Gym",
    type: "Weekly class",
    category: "Martial arts",
    setting: "Indoor and outdoor",
    district: "Chiang Mai",
    zone: "Location to confirm",
    minAge: 6,
    maxAge: 12,
    hours: "Saturdays 10am to 11:30am",
    price: { from: 350, to: 3000, unit: "session", note: "350 baht a class or 3,000 for 10 classes, as listed on the NOW Muay Thai booking site." },
    description: "A 90-minute Saturday-morning Muay Thai group class for children aged 6 to 12. A weekly weekend slot suits families whose children are busy on weekdays.",
    worthKnowing: "The listing asks children to arrive about 30 minutes early.",
    status: "check",
    sourceUrl: "https://www.nowmuaythai.com/class/70-muay-thai-kids-chiangmai-jr-10-sessions",
    lastVerified: "2026-11-04",
  },
  {
    slug: "krudam-gym-kids-muay-thai",
    name: "Kids Muay Thai at Krudam Gym",
    type: "Weekly class",
    category: "Martial arts",
    setting: "Indoor and outdoor",
    district: "Chiang Mai",
    zone: "Location to confirm",
    hours: "Daily 4:30pm to 5:30pm",
    price: { from: 3299, unit: "course", note: "3,299 baht for 10 children's group classes, used within 2 months, as listed on the NOW Muay Thai booking site." },
    description: "A daily one-hour children's Muay Thai group class at a gym about 4km from Nimman and 3km from Wat Phra Singh. Classes run every day of the week, which gives flexibility for busy families.",
    worthKnowing: "Ages are not listed, so ask the gym which ages join the children's class.",
    status: "check",
    sourceUrl: "https://www.nowmuaythai.com/class/163-muay-thai-group-class-training-children-at-kru-dam-chiang-mai-10-sessions",
    lastVerified: "2026-11-04",
  },
  {
    slug: "noina-art-studio",
    name: "Noina Art Studio",
    type: "Weekly class",
    category: "Arts, music and crafts",
    setting: "Indoor",
    address: "315 Moon Muang Road, Soi 9, Sri Phum, Mueang Chiang Mai 50200",
    district: "Old City",
    zone: "Old City",
    description: "An art school and gallery in the old city offering drawing and painting classes for children and adults. It is one of the few English-friendly art studios in Chiang Mai that lists classes for kids.",
    worthKnowing: "Class times and prices are not published; book online or message the studio on Facebook.",
    phone: "084 042 8021",
    facebook: "https://www.facebook.com/ArtSchoolChiangmai",
    status: "check",
    sourceUrl: "https://lantern.llc/b/noina-art-studio-art-school-chiang-mai-art-gallery-t-sripoom-a-muang-chang-wat-chiang-mai-",
    lastVerified: "2026-11-04",
  },
];

// ------------------------------------------------------------------ helpers

export function ageLabel(min?: number, max?: number): string | null {
  if (min === undefined && max === undefined) return null;
  if (min !== undefined && max === undefined) return min === 0 ? "All ages" : `${min} and up`;
  if (min === undefined) return `Up to ${max}`;
  if (min === 0) return `Babies to ${max}`;
  return `${min} to ${max}`;
}

export function ageMatches(age: number, a: Activity): boolean {
  if (a.minAge === undefined && a.maxAge === undefined) return true;
  const lo = a.minAge ?? 0;
  const hi = a.maxAge ?? 99;
  return age >= lo && age <= hi;
}

const UNIT_LABEL: Record<PriceUnit, string> = {
  entry: "",
  hour: " an hour",
  session: " a session",
  term: " a term",
  course: " a course",
  month: " a month",
  activity: " an activity",
};

export function priceLabel(p?: Price): string | null {
  if (!p) return null;
  if (p.free) return "Free";
  if (p.from === undefined) return null;
  const base =
    p.to && p.to !== p.from
      ? `฿${p.from.toLocaleString()} to ฿${p.to.toLocaleString()}`
      : `From ฿${p.from.toLocaleString()}`;
  return base + UNIT_LABEL[p.unit];
}

export type Budget = "free" | "under500" | "500to1000" | "over1000" | "unknown";

/** Entry-style budget band. Term and course fees always count as "over1000". */
export function budgetBand(a: Activity): Budget {
  const p = a.price;
  if (!p) return "unknown";
  if (p.free) return "free";
  if (p.from === undefined) return "unknown";
  if (p.from < 500) return "under500";
  if (p.from <= 1000) return "500to1000";
  return "over1000";
}

export const ALL_CATEGORIES_BY_TYPE = {
  "Day out": DAY_OUT_CATEGORIES,
  "Weekly class": CLASS_CATEGORIES,
} as const;
