import type { Metadata } from "next";
import { og, SITE, SISTER_SITE } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ActivitiesDirectory from "@/components/ui/ActivitiesDirectory";
import { ACTIVITIES } from "@/lib/activities";

const TITLE = "Things to Do With Kids in Chiang Mai";
const DESCRIPTION =
  "Days out and weekly classes for kids in Chiang Mai, from indoor play, the zoo and the Night Safari to Muay Thai, climbing, riding and art, with real hours, ages and prices. Filter for indoor options on rainy or smoky days.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/activities` },
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/activities" }),
};

const DAYS_OUT = ACTIVITIES.filter((a) => a.type === "Day out").length;
const CLASSES = ACTIVITIES.filter((a) => a.type === "Weekly class").length;

const FAQ = [
  {
    q: "What can I do with kids in Chiang Mai when it rains, or when the air is bad?",
    a: "Tick \"Indoors only\" in the directory above. Central Chiang Mai (Central Festival) on the Superhighway has Xventure and Bouncetopia, and 50FLY at Lotus's Hang Dong has trampolines and laser tag. In the smoky season, roughly February to April, indoor options matter for the air as much as the weather, so check the air quality before planning a day outside.",
  },
  {
    q: "What is free to do with kids in Chiang Mai?",
    a: "Set the price filter to Free. The Sunday Walking Street in the Old City and the Bo Sang umbrella village cost nothing to visit, the astronomy exhibition at the NARIT AstroPark is free, and Decathlon Chiang Mai runs free kids' futsal and basketball sessions that you book online.",
  },
  {
    q: "How much does an indoor playground cost in Chiang Mai?",
    a: "Expect roughly 300 to 600 baht per child, depending on how long you stay. Xventure at Central Chiang Mai sells timed tickets from 280 baht for an hour for smaller children, and 50FLY charges 300 baht for an hour of trampolining.",
  },
  {
    q: "Why do some places charge foreigners more?",
    a: "Many government-run attractions in Thailand have a Thai price and a higher foreigner price. Royal Park Rajapruek, for example, charges children 70 baht at the Thai rate and 150 baht at the foreigner rate. Some places give residents the Thai rate on showing a work permit or a Thai driving licence, so it is worth asking.",
  },
  {
    q: "How do weekly classes work in Chiang Mai?",
    a: "Most clubs sell a block of sessions or a month rather than single classes, though Muay Thai gyms usually take drop-ins. Book Decathlon's free sessions in advance, as places are limited. Several listings come from booking sites rather than the operator, so confirm the price and the location before your first class.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Activities", item: `${SITE}/activities` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Things to do with kids in Chiang Mai",
    numberOfItems: ACTIVITIES.length,
    itemListElement: ACTIVITIES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.name,
      url: `${SITE}/activities/${a.slug}`,
    })),
  },
];

const ALSO = [
  {
    href: "/schools",
    title: "Schools",
    desc: "Every international school in Chiang Mai, by area and fees.",
  },
  {
    href: "https://www.bkkfamilies.com/activities",
    title: "Bangkok activities",
    desc: "Days out and classes in Bangkok, on BKK Families.",
  },
  {
    href: "https://www.phuketfamilies.com/activities",
    title: "Phuket activities",
    desc: "Beaches, water parks and classes on Phuket Families.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Days out and weekly classes"
        title="Things to Do With Kids in Chiang Mai"
        subtitle={`${DAYS_OUT} days out and ${CLASSES} weekly classes, with real hours, ages and prices. Filter for indoors when the rain or the smoke comes in.`}
        color="purple"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Chiang Mai is an easy city to fill a weekend in, with the hills,
            the markets and the zoo all close by, but every parent here knows
            the afternoons when it is too hot, too wet or too smoky to be
            outside. This is the list for those days: days out when you want a
            plan, weekly classes when you want a routine, and an indoors
            filter for when you need a roof.
          </p>
          <p>
            Every card shows the ages, the price and the part of the city.
            Where a price is not published we say so rather than guess, and
            where we have taken a detail from a recent guide rather than the
            operator&rsquo;s own page, the listing tells you to check before you
            go. Nobody pays to be listed.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {ALSO.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl border border-black/5 bg-teal-50 p-4 transition hover:shadow-md"
            >
              <p className="font-heading font-bold text-purple-dark">{l.title}</p>
              <p className="mt-1 text-sm text-neutral-600">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div id="directory" className="mt-12 scroll-mt-28">
          <ActivitiesDirectory />
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Questions parents ask
          </h2>
          <div className="mt-6 space-y-4">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <h3 className="font-heading font-bold text-purple-dark">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Run an activity, or know one we have missed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            If your hours or prices have changed, your venue or class is
            missing, or something here is wrong, tell us and we will fix it.
            Listing is free and always will be.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send us a correction
          </Link>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-black/5 bg-teal-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Spending time in Bangkok too?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Our sister site BKK Families has the same kind of directory for
            Bangkok, with more than 50 days out and weekly classes.
          </p>
          <a
            href={`${SISTER_SITE.url}/activities`}
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Things to do with kids in Bangkok
          </a>
        </div>
      </div>
    </>
  );
}
