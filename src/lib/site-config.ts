interface SocialLinks {
    readonly instagram: string;
    readonly facebook: string;
}

interface SiteConfig {
    readonly name: string;
    readonly shortName: string;
    readonly description: string;
    readonly url: string;
    readonly ogImage: string;
    readonly bookingUrl: string;
    readonly owners: ReadonlyArray<{ readonly name: string; readonly phone: string }>;
    readonly socialLinks: SocialLinks;
}

export const SITE_CONFIG: SiteConfig = {
    name: "Local Barbers Hair Studios",
    shortName: "Local Barbers",
    description:
        "Welcome! We are The Local Barbers. Our focus is detailed haircuts that fit your lifestyle. We provide high-quality grooming services in a comfortable, professional environment.",
    url: "https://localbarbers.com",
    ogImage: "/og-image.jpg",
    bookingUrl: "https://booksy.com/en-us/1197631_local-barbers-royalty_barber-shop_103721_long-beach?hl=en-US&gei=8Aplab6XI8O6kPIPwq-joAE&gsas=1&ahbb=1&rwg_token=AFd1xnH_HO1YYtOlJdXxZ19TvIDhdKcdtGL4IeiSQwGxtKh6ibSjcPL4yfExfM-lnDx2ie7Ugq56xHvmZ-EZ6fTMC_cDC9KClQ%3D%3D&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDfJ9IY7OM6bvxJGpMmaWJPYX93kgXnR5mlvq8a2u1Y0dJ7l4x9vJntgCn7M_aem_Dg8DSqN_1PAV7Ra1WceDjw",
    owners: [
        { name: "Leo", phone: "(562) 326-9901" },
        { name: "Eric", phone: "(562) 243-2863" },
    ],
    socialLinks: {
        instagram: "https://www.instagram.com/localbarbersprivateclub",
        facebook: "https://facebook.com/localbarbers",
    },
} as const;

export const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Our Barbers", href: "#barbers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Locations", href: "#locations" },
] as const;
