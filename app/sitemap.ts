import type { MetadataRoute } from "next";
import { getPublishedGuides, guideHref } from "@/src/data/guides";

const BASE_URL = "https://bioluminescentkayaking.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedGuides = getPublishedGuides();
  const guideRoutes = publishedGuides.map((guide) => guideHref(guide));

  const staticRoutes = [
    "/",
    "/destinations/",
    "/florida/",
    "/florida/cocoa-beach/",
    "/florida/titusville/",
    "/florida/bioluminescent-kayaking-near-orlando/",
    "/puerto-rico/",
    "/puerto-rico/mosquito-bay-vieques/",
    "/puerto-rico/laguna-grande-fajardo/",
    "/puerto-rico/la-parguera/",
    "/puerto-rico/bio-bay-tours-from-san-juan/",
    "/california/",
    "/california/tomales-bay/",
    "/california/san-diego/",
    "/washington/",
    "/washington/san-juan-island/",
    "/washington/orcas-island/",
    "/washington/hood-canal/",
    "/glow-forecast/",
    "/moon-phase-calendar/",
    "/best-bioluminescent-kayaking-tours/",
    "/guides/",
    "/about/",
    "/how-we-rank-tours/",
    "/glow-forecast-method/",
    "/affiliate-disclosure/",
    "/privacy-policy/",
    "/terms/",
    "/contact/",
    "/image-credits/",
  ];

  const allRoutes = [...staticRoutes, ...guideRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date("2026-11-14"),
    changeFrequency:
      route === "/glow-forecast/" || route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route === "/destinations/" ? 0.9 : 0.8,
  }));
}

