import type { MetadataRoute } from "next";

const SITE_URL = "https://www.ortrack.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/fiscalite-vente-or-france`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}