export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  /** ISO date of the last substantive revision. Feeds dateModified and the sitemap. */
  updated?: string;
  excerpt: string;
  /**
   * Paragraphs. Plain text plus the minimal inline markup understood by
   * components/ui/RichText: [label](/path) and [label](https://...) for
   * links, **text** for bold. Nothing else is parsed. Headings and images
   * have their own arrays below rather than living in the body.
   */
  body: string[];
  heroImage?: string;
  /** Describes the hero photo for screen readers and image search. Falls back to the title. */
  heroAlt?: string;
  images?: { src: string; alt: string; afterParagraph: number }[];
  headings?: { beforeParagraph: number; text: string }[];
  /** Answers accept the same inline markup as body paragraphs. */
  faq?: { question: string; answer: string }[];
  relatedSchools?: { name: string; slug: string }[];
  metaDescription?: string;
  keywords?: string[];
  /**
   * Set on a paid Sponsored Feature. The page shows a "Sponsored by" notice
   * above the article and every outbound link gets rel="sponsored". Never
   * set this on a review or a directory listing: those are not for sale.
   */
  sponsored?: { sponsor: string; url?: string };
}

// Chiang Mai guides go here. The homepage and /blog hide their article
// sections until the first one is published.
export const ARTICLES: Article[] = [
  {
    "slug": "christmas-holiday-camps-chiang-mai-2026",
    "title": "Christmas Holiday Camps in Chiang Mai 2026: Dates, Ages and Prices",
    "category": "Camps",
    "date": "2026-11-05",
    "excerpt": "Every Christmas holiday camp in Chiang Mai we can confirm for December 2026, from a sports camp that runs right through the break to outdoor camps in Hang Dong and nature camps in Mae Rim, plus school break dates and January options.",
    "body": [
      "Chiang Mai's international schools break up between mid and late December, and some go back in early January while others return later, so many working parents need a week or two of camp. This guide covers every Christmas camp we can confirm for 2026, a football camp that ran all last winter, and the camps that run on into January for visiting families. Every camp here also has a listing in our [Chiang Mai holiday camps directory](/camps), where you can filter by age and dates.",
      "School breaks differ more in Chiang Mai than in Bangkok, so check your own calendar first. **Prem** breaks from 14 December. **Grace** finishes on 17 December and goes back on 5 January. **APIS** breaks from 19 December and goes back on 11 January. Other schools publish their calendars as images or colour-coded charts, so look at your own school's calendar or ask the office.",
      "**[Prime Kids Club's Winter Sports Camp](/camps/prime-kids-club-sports-camp)** runs the longest, every weekday from **14 December to 8 January**, for ages 5 to 12. Children play football, basketball, badminton and track and field, and those who meet the entry requirements also swim. Days run from 9am to 3pm with lunch, and it costs **9,500 baht a week**, or **6,500** at the early bird rate, with single days at 2,000 baht. Sign-up opens on **14 November**, and the club says early bird and day fees are non-refundable.",
      "**[Beaver Club's Christmas and New Year camps](/camps/beaver-club-truepath-camps)** in Ban Waen, Hang Dong, run from **21 to 25 December** and **28 December to 1 January**, for ages 4 to 13. These are outdoor camps with children grouped by age, a field trip and a party each week, from 9.30am to 4pm with a buffet lunch. Prices are on request, by LINE or phone.",
      "**[Traidhos Camps](/camps/traidhos-camps)**, on the green campus in Mae Rim that the Traidhos community shares with Prem, runs a **Merry Christmas Camp from 14 to 18 December** for ages 4 to 8, with nature, science and holiday activities. The 2026 price is not fully published yet; last year's Christmas camp cost 11,000 baht with lunch and two snacks.",
      "Traidhos also runs three camps in the week of **4 to 8 January**, which suits schools that go back later: the Junior Naturalist day camp for young children, the first Winter English Day Camp for ages 6 to 12 at **15,000 baht** with lunch, and the first week of its Tennis and English Camp, at 15,000 baht for a full day from 9am to 3.30pm or 7,000 baht for tennis only from 9am to 11am.",
      "**[GROW UP Chiangmai](/camps/grow-up-chiangmai-football-camp)** ran an indoor football camp at All Star Arena in Pa Tan every week from 1 December 2025 to 27 February 2026, for ages 4 to 13, at 5,500 baht a week with lunch. It has not announced this winter's dates yet, and the details come from a public listing rather than its own page, so call before planning around it.",
      "The cool season brings visiting families to Chiang Mai, and several camps run on through January and February, in term time for most local schools. Traidhos runs English day camps and tennis camps each week until late February, plus residential English weeks from 24 January. The [APIS Winter Camp](/camps/apis-winter-camp) runs from **17 January to 5 February** for ages 9 to 13, with day, weekly boarding and full boarding options, and Beaver Club runs four winter weeks between 25 January and 19 February. All of these are in the [camps directory](/camps) under January to February.",
      "Book early, because the smaller camps cap their groups, and check what is included. Lunch is included at every confirmed camp in this guide, but transport usually is not, so the location matters: Traidhos is in Mae Rim to the north, Beaver Club in Hang Dong to the south, and Prime Kids does not publish its address, so ask where drop-off is. If you only need a few days, Prime Kids sells single days.",
      "We do not list elephant camps, elephant sanctuaries or any camp that includes an elephant visit. Spending part of the holiday in Bangkok? Our sister site BKK Families has a [holiday camps directory for Bangkok](https://www.bkkfamilies.com/camps) too."
    ],
    "headings": [
      {
        "beforeParagraph": 1,
        "text": "When Chiang Mai schools break up"
      },
      {
        "beforeParagraph": 2,
        "text": "Christmas camps with confirmed dates"
      },
      {
        "beforeParagraph": 6,
        "text": "Ran last winter, not yet announced"
      },
      {
        "beforeParagraph": 7,
        "text": "Staying into January or February?"
      },
      {
        "beforeParagraph": 8,
        "text": "Before you book"
      }
    ],
    "faq": [
      {
        "question": "When are the Christmas holidays for international schools in Chiang Mai?",
        "answer": "It varies. Prem breaks from 14 December, Grace's last day is 17 December with pupils back on 5 January, and APIS from 19 December with pupils back on 11 January. Check your own school's calendar before booking a camp."
      },
      {
        "question": "Which Chiang Mai camps run between Christmas and New Year?",
        "answer": "[Prime Kids Club](/camps/prime-kids-club-sports-camp) runs every weekday from 14 December to 8 January, and [Beaver Club](/camps/beaver-club-truepath-camps) runs a New Year camp from 28 December to 1 January."
      },
      {
        "question": "How much does a Christmas camp in Chiang Mai cost?",
        "answer": "The confirmed day camps for Christmas 2026 cost from 6,500 baht a week (the Prime Kids early bird rate) to 15,000 baht a week for a Traidhos English or tennis camp, with lunch included. Beaver Club's prices are on request."
      },
      {
        "question": "Can visiting families join a camp in Chiang Mai?",
        "answer": "Yes. The camps in this guide are open to children who do not attend a particular school, and the Traidhos and APIS winter camps in January and February are aimed at visiting families."
      },
      {
        "question": "Are there residential camps in Chiang Mai over the winter?",
        "answer": "Not over Christmas itself, as far as we can find. Traidhos runs residential English weeks from 24 January, and the APIS Winter Camp from 17 January has weekly and full boarding."
      }
    ],
    "metaDescription": "Christmas holiday camps in Chiang Mai for December 2026: confirmed dates, ages, hours and prices for Prime Kids Club, Beaver Club and Traidhos, plus school break dates.",
    "keywords": [
      "christmas camp chiang mai",
      "chiang mai holiday camp december 2026",
      "winter camp chiang mai",
      "kids camp chiang mai christmas",
      "chiang mai school holidays december",
      "traidhos winter camp",
      "chiang mai sports camp kids"
    ]
  },
  {
    "slug": "yi-peng-loy-krathong-chiang-mai-with-kids",
    "title": "Yi Peng and Loy Krathong 2026 in Chiang Mai with Kids",
    "category": "Local Life",
    "date": "2026-11-04",
    "excerpt": "Chiang Mai's lantern festival runs 23 to 25 November 2026, with the full moon on Tuesday 24 November. The new main venue, what happens each night, where to float a krathong with children, the 2026 sky lantern rules and flight changes.",
    "body": [
      "Every November, Chiang Mai celebrates two festivals at once. Loy Krathong, celebrated all over Thailand, is the night families float a krathong, a small raft of banana leaves, flowers, a candle and incense, on the river. Yi Peng is the Lanna version, celebrated in the north: temples and lanes fill with hanging lanterns and rows of small candles, and sky lanterns rise over the city.",
      "In 2026 the city festival runs from Monday 23 to Wednesday 25 November. The full moon, and the main night for both festivals, is **Tuesday 24 November**. This guide covers what happens on each night, where to go with children, the 2026 rules on sky lanterns, and what the festival means if you are flying in from Bangkok.",
      "The biggest change this year is the main venue. Chiang Mai Municipality has moved the centre of the festival from the square at Tha Phae Gate to the riverside park at Ton Lamyai Market, next to Warorot Market. Tha Phae Gate still has a light, sound and multimedia show on all three nights, and the big krathong procession still starts there.",
      "At Ton Lamyai park, the three days include the opening ceremony, the Lanna lantern contest, cultural shows, and the **Nu Noi Yi Peng** contest for young children in traditional dress. The city had not published times for these events when we checked on 4 November, so check the Chiang Mai Municipality Facebook page closer to the date.",
      "**20 to 23 November, Wat Chedi Luang.** The temple in the middle of the old city holds its candle festival, with candle making, sword dancing and candle dances around the great chedi. On Monday 23 November a procession gathers on Ratchadamnoen Road behind Tha Phae Gate at 5pm, dancers perform at 5.30pm, and the procession reaches Wat Chedi Luang for the ceremony at 6pm. Candles are also lit at the four corners of the old city walls. It is usually the calmest of the three nights and the easiest one for small children.",
      "**Tuesday 24 November, the full moon.** This is the night for floating your krathong, and the busiest night of the year in the old city and along the Ping River. Sky lanterns and fireworks are allowed from 7pm to 1am, so expect a lot of both.",
      "**Wednesday 25 November, the grand procession.** Fifteen giant illuminated krathong floats compete for the Royal Cup on a route from Tha Phae Gate along Tha Phae Road to the Chiang Mai Municipality office by the river. The 2026 start time had not been announced when we checked. In 2025 it started at 6.30pm, so plan to be on Tha Phae Road with a spot on the pavement well before then.",
      "**All month, Wat Lok Molee.** This old city temple hangs lanterns and lights candles through November, which makes it a good quiet alternative on an early evening before the crowds build.",
      "The official place to float a krathong is the bank of the Ping River in front of the Chiang Mai Municipality office, where the city organises the main release. Families also float krathongs at temples and from riverside piers along the Ping. Vendors sell ready-made krathongs all over the old city in the days before the full moon, or you can make one together at home, which children usually enjoy more than buying one.",
      "Choose a krathong made of banana trunk, banana leaves and flowers. Avoid foam, and skip the bread krathongs that are sold as eco-friendly: dumped in large numbers they rot in the water and have killed fish. Help small children down to the water's edge, because riverbanks and piers get slippery and very crowded on the full moon.",
      "Sky lanterns are tightly controlled in Chiang Mai because the airport sits right next to the city. In 2026 the province allows sky lanterns and fireworks only on 24 and 25 November, from 7pm to 1am the following morning, and smoke lanterns only on the morning of 24 November, from 10am to noon. Anyone releasing lanterns needs a permit through the province's Bampen app, lanterns must meet the official standard and come down within seven minutes, and attaching firecrackers is banned. Releasing lanterns in the no-release zones around the airport is an offence.",
      "For families, the simple answer is: do not release your own lantern in the city or near the airport. Watch the sky from the old city or the riverside, or book one of the ticketed lantern events held outside the city, where organisers have the permits.",
      "Seven ticketed mass lantern releases are listed for 24 and 25 November, in Mae On, Doi Saket, San Pa Tong, Mae Taeng, San Kamphaeng and Lamphun. The best known, the CAD Khomloy Sky Lanterns Festival at the CAD Cultural Center in Mae On, is about 30 km from the old city, with tickets from 4,900 to 15,900 baht per person in 2026. These are the events in the famous photos of thousands of lanterns rising at once.",
      "They are spectacular, but think about your children before you book. They are long evenings with a drive at each end, tickets are expensive and sell out, and you are standing among thousands of lit lanterns. Check each event's age policy and child prices before paying, and buy only from the organiser's own website or a reseller it names. School-age children who can stay up late tend to love them. With toddlers, the free city celebrations are usually the better night out.",
      "If you are coming up from Bangkok, book flights early and check the times. To keep aircraft away from lanterns, Chiang Mai Airport cuts its operating day from 20 hours to 12 on the festival days, and airlines have been asked not to fly on 24 November from 10am to noon or on 24 and 25 November from 7pm to 1am. Between 21 and 28 November, 108 flights have been cancelled, 80 moved to new times and 105 extra flights added. The airport expects more than 200,000 lanterns. Hotels in the old city fill up early too.",
      "On the full moon night, arrive in the old city or by the river before 6pm, because crowds build quickly after dark. Agree a meeting point, put your phone number on a wristband or in a pocket for younger children, and use a carrier rather than a stroller in the busiest streets.",
      "Bring ear defenders for babies and toddlers, because fireworks and firecrackers go off all evening. Dress children in natural fabrics rather than synthetics, keep them away from lanterns being lit, and watch for lanterns coming down still burning. A small torch, wet wipes, water and mosquito repellent all help.",
      "For a calmer evening, go on Monday 23 November for the candle procession at Wat Chedi Luang, or on the evening of the 25th for the grand procession, and float your krathong early on the 24th before the river gets crowded. On quieter days in between, our guide to [things to do with kids in Chiang Mai](/activities) has plenty of daytime ideas."
    ],
    "heroImage": "/images/articles/yi-peng-loy-krathong-chiang-mai-with-kids/sky-lanterns.jpg",
    "heroAlt": "Thousands of sky lanterns rising into the night sky above a crowd during Yi Peng in Chiang Mai",
    "headings": [
      {
        "beforeParagraph": 2,
        "text": "What is new in 2026"
      },
      {
        "beforeParagraph": 4,
        "text": "Night by night"
      },
      {
        "beforeParagraph": 8,
        "text": "Where to float a krathong with kids"
      },
      {
        "beforeParagraph": 10,
        "text": "Sky lanterns: the 2026 rules"
      },
      {
        "beforeParagraph": 12,
        "text": "Ticketed lantern releases outside the city"
      },
      {
        "beforeParagraph": 14,
        "text": "Flying in from Bangkok"
      },
      {
        "beforeParagraph": 15,
        "text": "Tips for going with children"
      }
    ],
    "faq": [
      {
        "question": "When is Yi Peng 2026 in Chiang Mai?",
        "answer": "The city festival runs from Monday 23 to Wednesday 25 November 2026. The full moon, which is Loy Krathong and the main Yi Peng night, is Tuesday 24 November, and the grand krathong procession is on Wednesday 25 November."
      },
      {
        "question": "What is the difference between Yi Peng and Loy Krathong?",
        "answer": "Loy Krathong is celebrated across Thailand by floating a krathong on water. Yi Peng is the northern Lanna festival of lanterns, candles and sky lanterns. In Chiang Mai they fall on the same full moon, so you get both."
      },
      {
        "question": "Where is the main Yi Peng venue in 2026?",
        "answer": "The riverside park at Ton Lamyai Market, next to Warorot Market. It replaces Tha Phae Gate as the main venue this year, although Tha Phae Gate still has a light show and is the start of the grand procession."
      },
      {
        "question": "Can my children release a sky lantern in Chiang Mai?",
        "answer": "Not in the city or near the airport. In 2026 lanterns are allowed only on 24 and 25 November from 7pm to 1am, with a permit, and never in the no-release zones around the airport. To release one, book a ticketed lantern event outside the city."
      },
      {
        "question": "Are the city celebrations free?",
        "answer": "Yes. The events at Ton Lamyai park, Tha Phae Gate, Wat Chedi Luang and the grand procession are free. Only the mass lantern releases outside the city are ticketed."
      },
      {
        "question": "Will my flight to Chiang Mai be affected?",
        "answer": "Possibly. Between 21 and 28 November, 108 flights have been cancelled and 80 moved, and airlines avoid flying on 24 November from 10am to noon and on 24 and 25 November from 7pm to 1am. Check your booking with your airline."
      },
      {
        "question": "What is the best night for young children?",
        "answer": "Monday 23 November, for the candle procession at Wat Chedi Luang, or an early evening on the 24th to float a krathong before the river gets crowded. The full moon night after dark is the busiest and noisiest."
      }
    ],
    "metaDescription": "Yi Peng and Loy Krathong 2026 in Chiang Mai with kids: 23 to 25 November, full moon on the 24th. New main venue, each night's events, lantern rules and flights.",
    "keywords": [
      "yi peng 2026",
      "yi peng chiang mai",
      "loy krathong chiang mai 2026",
      "chiang mai lantern festival 2026",
      "yi peng with kids",
      "loy krathong with kids",
      "chiang mai sky lantern rules"
    ]
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

/**
 * Fail the build on article data that would render wrong but not crash.
 *
 * headings and images are positioned by paragraph index, so an index past
 * the end of body simply never renders: the heading silently disappears and
 * the article ships with a missing section. Types cannot catch that, and the
 * page still builds, so it has to be asserted. Duplicate slugs are checked
 * here too, since two articles sharing one would quietly shadow each other
 * in generateStaticParams.
 *
 * Runs at module load, which means during next build.
 */
(function validateArticles() {
  const seen = new Set<string>();

  for (const a of ARTICLES) {
    if (seen.has(a.slug)) {
      throw new Error(`articles.ts: duplicate slug "${a.slug}"`);
    }
    seen.add(a.slug);

    const last = a.body.length - 1;

    for (const h of a.headings ?? []) {
      if (h.beforeParagraph < 0 || h.beforeParagraph > last) {
        throw new Error(
          `articles.ts: "${a.slug}" heading "${h.text}" points at paragraph ` +
            `${h.beforeParagraph}, but body has ${a.body.length} paragraphs ` +
            `(0 to ${last}). The heading would never render.`
        );
      }
    }

    for (const img of a.images ?? []) {
      if (img.afterParagraph < 0 || img.afterParagraph > last) {
        throw new Error(
          `articles.ts: "${a.slug}" image "${img.src}" points at paragraph ` +
            `${img.afterParagraph}, but body has ${a.body.length} paragraphs ` +
            `(0 to ${last}). The image would never render.`
        );
      }
    }
  }
})();
