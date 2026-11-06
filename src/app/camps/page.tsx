import type { Metadata } from "next";
import { og, SITE, SISTER_SITE } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CampsDirectory from "@/components/ui/CampsDirectory";
import { CAMPS, ALL_SESSIONS } from "@/lib/camps";
import { todayInBangkok } from "@/lib/featured";

// Regenerated hourly so paid featured placements switch on and off by date.
export const revalidate = 3600;

const TITLE = "Holiday Camps in Chiang Mai 2026/27";
const DESCRIPTION =
  "Chiang Mai holiday camps for Christmas, the cool season, Songkran and summer, with real dates, ages and prices, and last year's dates clearly marked.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/camps` },
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/camps" }),
};

const FAQ = [
  {
    q: "When do holiday camps run in Chiang Mai?",
    a: "Around the international school breaks: Christmas and New Year (from mid December into early January), a February half term at some schools, Easter and Songkran from late March to mid April, and the long summer break from mid June to mid August. The cool season also brings camps that run weekly through January and February for visiting families.",
  },
  {
    q: "How much does a holiday camp cost in Chiang Mai?",
    a: "Day camps listed here cost from about 4,000 to 18,000 baht a week, most with lunch included. School summer camps tend to be sold by the two or three week session. A sports camp over Christmas 2026 costs 9,500 baht a week, or 6,500 early bird, and the Traidhos English day camps cost 15,000 baht a week.",
  },
  {
    q: "Do I have to attend the school to join its camp?",
    a: "Usually not. LANNA, NIS and the Traidhos camps on the Prem campus say they are open to children from other schools. Where a school does not say, the listing tells you to ask.",
  },
  {
    q: "Why do some listings show last year's dates?",
    a: "Many Chiang Mai camps only publish summer dates between February and April. Rather than leave out a camp that runs every year, we show the dates it ran in 2026 and mark them clearly, so you know who to watch.",
  },
  {
    q: "Are there residential camps in Chiang Mai?",
    a: "Yes. Traidhos runs residential English weeks from late January 2027, and the APIS Winter Camp has weekly and full boarding options for ages 9 to 13.",
  },
  {
    q: "Are elephant camps listed?",
    a: "No. We do not list elephant camps, elephant sanctuaries or any camp that includes an elephant visit, or tiger attractions.",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Camps",
        item: `${SITE}/camps`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Holiday camp operators in Chiang Mai",
    numberOfItems: CAMPS.length,
    itemListElement: CAMPS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE}/camps/${c.slug}`,
    })),
  },
];

export default function CampsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="School holidays, sorted"
        title="Holiday Camps in Chiang Mai"
        subtitle={`Real dates, real ages, real prices. ${ALL_SESSIONS.length} camp weeks from ${CAMPS.length} operators, checked and described honestly.`}
        color="purple"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Chiang Mai has more holiday camps than you might expect, from
            outdoor camps in Hang Dong and sports weeks over Christmas to
            English and tennis camps on the Traidhos campus in Mae Rim. The
            hard part is that dates and prices are scattered across school
            websites, Facebook posts and LINE groups, and half of what turns
            up in a search is from last year.
          </p>
          <p>
            So this directory is built around dates. Every entry is one camp
            week: when it runs, who it is for, what it costs and where.
            Filter by the holiday you need and your child&rsquo;s age, and
            you should have a shortlist in about thirty seconds.
          </p>
          <p>
            Nobody pays to be listed here, and any paid featured placement is
            always labelled. Dates and prices come from the camp&rsquo;s own
            page wherever we can find it, and the listing says when they come
            from a public listing instead. Where a price is not published we
            say so rather than guess, and where a camp runs every year but has
            not announced its next dates, we show the dates it last ran and
            mark them clearly.
          </p>
        </div>

        <div id="directory" className="mt-12 scroll-mt-28">
          <CampsDirectory today={todayInBangkok()} />
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-teal-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Moving between Chiang Mai and Bangkok?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Our sister site BKK Families has the same kind of directory for
            Bangkok&rsquo;s holiday camps, with the verified school holiday
            dates for the city&rsquo;s international schools.
          </p>
          <a
            href={`${SISTER_SITE.url}/camps`}
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            See Bangkok holiday camps
          </a>
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
                <h3 className="font-heading font-bold text-purple-dark">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Running a camp, or spotted one we have missed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            This directory is only useful if it is current. If your dates have
            changed, your camp is missing, or something here is wrong, tell us
            and we will fix it. Listing is free and always will be.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send us a correction
          </Link>
        </div>
      </div>
    </>
  );
}
