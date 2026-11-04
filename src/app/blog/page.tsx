import Link from "next/link";
import type { Metadata } from "next";
import { og } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import ArticleCard from "@/components/ui/ArticleCard";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  // An empty listing is thin content: keep it out of search until the first
  // guide is published. Links on it are still followed.
  ...(ARTICLES.length === 0 ? { robots: { index: false, follow: true } } : {}),
  title: "Guides",
  description: "Practical guides for families living in or moving to Chiang Mai.",
  openGraph: og({
    title: "Guides for families in Chiang Mai",
    description:
      "Practical guides for families living in or moving to Chiang Mai.",
    path: "/blog",
  }),
};

export default function BlogPage() {
  const sorted = ARTICLES.slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Guides for Chiang Mai Families"
        subtitle="Practical guides on schools, healthcare and everyday family life in Chiang Mai."
        color="orange"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        {sorted.length === 0 ? (
          <div className="rounded-xl border border-black/5 bg-sand p-8 text-center">
            <p className="font-heading text-xl font-bold text-purple-dark">
              Our first Chiang Mai guides are on the way.
            </p>
            <p className="mx-auto mt-2 max-w-xl text-neutral-700">
              In the meantime, compare every international school in
              Chiang Mai, or read our Bangkok guides on BKK Families.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/schools" className="rounded-full bg-orange px-6 py-3 font-semibold text-white hover:opacity-90">
                Browse Chiang Mai schools
              </Link>
              <a href="https://www.bkkfamilies.com/blog" className="rounded-full border-2 border-purple px-6 py-3 font-semibold text-purple hover:bg-purple-50">
                BKK Families guides
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {sorted.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
