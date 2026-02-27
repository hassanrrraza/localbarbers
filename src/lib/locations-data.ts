interface BusinessHour {
    readonly day: string;
    readonly open: string;
    readonly close: string;
    readonly isClosed?: boolean;
}

export interface BranchLocation {
    readonly slug: string;
    readonly name: string;
    readonly tagline: string;
    readonly address: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly phone: string;
    readonly bookingUrl: string;
    readonly directionsUrl: string;
    readonly coordinates: { readonly lat: number; readonly lng: number };
    readonly hours: ReadonlyArray<BusinessHour>;
    readonly image: string;
}

const BOOKING_URL =
    "https://booksy.com/en-us/1197631_local-barbers-royalty_barber-shop_103721_long-beach?hl=en-US&gei=8Aplab6XI8O6kPIPwq-joAE&gsas=1&ahbb=1&rwg_token=AFd1xnH_HO1YYtOlJdXxZ19TvIDhdKcdtGL4IeiSQwGxtKh6ibSjcPL4yfExfM-lnDx2ie7Ugq56xHvmZ-EZ6fTMC_cDC9KClQ%3D%3D&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDfJ9IY7OM6bvxJGpMmaWJPYX93kgXnR5mlvq8a2u1Y0dJ7l4x9vJntgCn7M_aem_Dg8DSqN_1PAV7Ra1WceDjw";

export const LOCATIONS: ReadonlyArray<BranchLocation> = [
    {
        slug: "local-barbers",
        name: "Local Barbers",
        tagline: "The Original",
        address: "123 Main Street", // TODO: Replace with real address
        city: "Long Beach",
        state: "CA",
        zip: "90802",
        phone: "(562) 326-9901",
        bookingUrl: BOOKING_URL,
        directionsUrl: "https://maps.google.com/?q=Local+Barbers+Long+Beach", // TODO: Replace
        coordinates: { lat: 33.7701, lng: -118.1937 },
        hours: [
            { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
            { day: "Saturday", open: "8:00 AM", close: "6:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "5:00 PM" },
        ],
        image: "/images/locations/local-barbers.webp",
    },
    {
        slug: "private-club",
        name: "Local Barbers Private Club",
        tagline: "The Exclusive Experience",
        address: "456 Pacific Ave", // TODO: Replace with real address
        city: "Long Beach",
        state: "CA",
        zip: "90802",
        phone: "(562) 243-2863",
        bookingUrl: BOOKING_URL,
        directionsUrl: "https://maps.google.com/?q=Local+Barbers+Private+Club", // TODO: Replace
        coordinates: { lat: 33.7680, lng: -118.1960 },
        hours: [
            { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
            { day: "Saturday", open: "8:00 AM", close: "6:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "5:00 PM" },
        ],
        image: "/images/locations/private-club.webp",
    },
    {
        slug: "royalty",
        name: "Local Barbers Royalty",
        tagline: "The Royal Treatment",
        address: "789 Broadway", // TODO: Replace with real address
        city: "Long Beach",
        state: "CA",
        zip: "90802",
        phone: "(562) 326-9901",
        bookingUrl: BOOKING_URL,
        directionsUrl: "https://maps.google.com/?q=Local+Barbers+Royalty", // TODO: Replace
        coordinates: { lat: 33.7720, lng: -118.1900 },
        hours: [
            { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
            { day: "Saturday", open: "8:00 AM", close: "6:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "5:00 PM" },
        ],
        image: "/images/locations/royalty.webp",
    },
] as const;

export function getLocationBySlug(slug: string): BranchLocation | undefined {
    return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs(): ReadonlyArray<string> {
    return LOCATIONS.map((loc) => loc.slug);
}
