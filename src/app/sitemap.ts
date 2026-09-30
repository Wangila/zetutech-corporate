import type { MetadataRoute } from "next";
import { seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/talent", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work/assignnet", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ] as const;

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${seo.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
