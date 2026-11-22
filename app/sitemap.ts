import type { MetadataRoute } from "next";
import { getPublishedGuides, guideHref } from "@/src/data/guides";

const BASE_URL = "https://bioluminescentkayaking.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/destinations",
    "/florida",
    "/florida/cocoa-beach",
    "/florida/titusville",
    "/florida/bioluminescent-kayaking-near-orlando",
    "/puerto-rico",
    "/puerto-rico/mosquito-bay-vieques",
    "/puerto-rico/laguna-grande-fajardo",
    "/puerto-rico/la-parguera",
    "/puerto-rico/bio-bay-tours-from-san-juan",
    "/california",
    "/california/tomales-bay",
    "/california/san-diego",
    "/washington",
    "/washington/san-juan-island",
    "/washington/orcas-island",
    "/washington/hood-canal",
    "/glow-forecast",
    "/moon-phase-calendar",
    "/best-bioluminescent-kayaking-tours",
    "/guides",
    "/about",
    "/how-we-rank-tours",
    "/glow-forecast-method",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/terms",
    "/contact",
    "/image-credits",
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency:
      route === "/glow-forecast" || route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route === "/destinations" ? 0.9 : 0.8,
  }));

  // Published guides join the sitemap automatically; planned guides
  // stay out until their status flips.
  const guideEntries: MetadataRoute.Sitemap = getPublishedGuides().map(
    (guide) => ({
      url: `${BASE_URL}${guideHref(guide)}`,
      lastModified: guide.datePublished ? new Date(guide.datePublished) : now,
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...guideEntries];
}
