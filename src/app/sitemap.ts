import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { getAllLocationSlugs } from "@/lib/locations-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    const locationRoutes = getAllLocationSlugs().map((slug) => ({
        url: `${baseUrl}/locations/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/locations`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        ...locationRoutes,
    ];
}
