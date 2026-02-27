export interface Barber {
    readonly id: string;
    readonly name: string;
    readonly title: string;
    readonly specialty: string;
    readonly bio: string;
    readonly image: string;
    readonly instagram: string;
    readonly bookingUrl: string;
}

const BOOKING_URL =
    "https://booksy.com/en-us/1197631_local-barbers-royalty_barber-shop_103721_long-beach?hl=en-US&gei=8Aplab6XI8O6kPIPwq-joAE&gsas=1&ahbb=1&rwg_token=AFd1xnH_HO1YYtOlJdXxZ19TvIDhdKcdtGL4IeiSQwGxtKh6ibSjcPL4yfExfM-lnDx2ie7Ugq56xHvmZ-EZ6fTMC_cDC9KClQ%3D%3D&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDfJ9IY7OM6bvxJGpMmaWJPYX93kgXnR5mlvq8a2u1Y0dJ7l4x9vJntgCn7M_aem_Dg8DSqN_1PAV7Ra1WceDjw";

const INSTAGRAM_URL = "https://www.instagram.com/localbarbersprivateclub";

export const BARBERS: ReadonlyArray<Barber> = [
    {
        id: "leo",
        name: "Leo",
        title: "Owner & Master Barber",
        specialty: "Fades & Precision Cuts",
        bio: "Co-founder of Local Barbers with over 15 years of experience. Known for clean fades and razor-sharp attention to detail.",
        image: "/images/barbers/leo.webp",
        instagram: INSTAGRAM_URL,
        bookingUrl: BOOKING_URL,
    },
    {
        id: "eric",
        name: "Eric",
        title: "Owner & Master Barber",
        specialty: "Modern Styles & Designs",
        bio: "Co-founder with a passion for modern styling and creative designs. Dedicated to delivering the perfect look every visit.",
        image: "/images/barbers/eric.webp",
        instagram: INSTAGRAM_URL,
        bookingUrl: BOOKING_URL,
    },
    {
        id: "barber-3",
        name: "Marcus", // TODO: Replace with real barber name
        title: "Senior Barber",
        specialty: "Classic Cuts & Beard Work",
        bio: "A skilled craftsman specializing in classic cuts and expert beard sculpting. Brings years of precision to every chair.",
        image: "/images/barbers/barber-3.webp",
        instagram: INSTAGRAM_URL,
        bookingUrl: BOOKING_URL,
    },
    {
        id: "barber-4",
        name: "James", // TODO: Replace with real barber name
        title: "Barber",
        specialty: "Fades & Texture Work",
        bio: "Bringing fresh energy and creative flair to every cut. Specializes in textured styles and sharp fades.",
        image: "/images/barbers/barber-4.webp",
        instagram: INSTAGRAM_URL,
        bookingUrl: BOOKING_URL,
    },
] as const;
