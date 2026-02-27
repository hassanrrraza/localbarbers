import { SITE_CONFIG } from "@/lib/site-config";
import { LOCATIONS } from "@/lib/locations-data";
import type { BranchLocation } from "@/lib/locations-data";

function generateLocationSchema(location: BranchLocation): object {
    return {
        "@type": "BarberShop",
        name: location.name,
        image: `${SITE_CONFIG.url}${location.image}`,
        telephone: location.phone,
        url: `${SITE_CONFIG.url}/locations/${location.slug}`,
        address: {
            "@type": "PostalAddress",
            streetAddress: location.address,
            addressLocality: location.city,
            addressRegion: location.state,
            postalCode: location.zip,
            addressCountry: "US",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
        },
        openingHoursSpecification: location.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.day,
            opens: h.open,
            closes: h.close,
        })),
        priceRange: "$$",
    };
}

export const JsonLd = (): React.JSX.Element => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        sameAs: [
            SITE_CONFIG.socialLinks.instagram,
            SITE_CONFIG.socialLinks.facebook,
        ],
        department: LOCATIONS.map(generateLocationSchema),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
