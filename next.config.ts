import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Trailing slash is the site's canonical URL form: sitemap,
     canonical tags and every internal link already use it. This makes
     the server serve /florida/ as the 200 page and redirect /florida
     to it, instead of the other way round. */
  trailingSlash: false,
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.getyourguide.com",
      },
    ],
  },
};

export default nextConfig;
