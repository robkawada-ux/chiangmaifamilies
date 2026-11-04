import type { MetadataRoute } from "next";
import { SCHOOLS } from "@/lib/schools";
import { ACTIVITIES } from "@/lib/activities";
import { ARTICLES } from "@/lib/articles";
import { SITE } from "@/lib/seo";

export const baseUrl = SITE;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/schools`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/activities`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.3 },
    // The guides listing joins the sitemap once it has something in it.
    ...(ARTICLES.length > 0
      ? [{ url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8 }]
      : []),
  ];

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    lastModified: new Date(a.updated ?? a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const schoolPages: MetadataRoute.Sitemap = SCHOOLS.map((s) => ({
    url: `${baseUrl}/schools/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const activityPages: MetadataRoute.Sitemap = ACTIVITIES.map((a) => ({
    url: `${baseUrl}/activities/${a.slug}`,
    lastModified: new Date(a.lastVerified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...schoolPages, ...activityPages];
}
