import type { MetadataRoute } from "next";

const BASE_URL = "https://bioluminescentkayaking.us";

/**
 * Crawling is fully open — including /llms.txt and /llms-full.txt,
 * which exist specifically so LLM crawlers can read them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
