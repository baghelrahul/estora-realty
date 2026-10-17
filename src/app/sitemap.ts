import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { properties } from "@/data/properties";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about/",
    "/properties/",
    "/wishlist/",
    "/contact/",
    "/privacy/",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const propertyEntries = properties.map((p) => ({
    url: `${site.domain}/properties/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...propertyEntries];
}

