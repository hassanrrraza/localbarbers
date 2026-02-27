export interface ServiceOffer {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly priceUsd: number;
    readonly duration: string;
    readonly includes: string;
    readonly isFeatured?: boolean;
}

export const CORE_SERVICES: ReadonlyArray<ServiceOffer> = [
    {
        id: "standard-cut",
        name: "Standard Cut",
        description: "Clean, professional cut tailored for daily sharpness.",
        priceUsd: 40,
        duration: "40 min",
        includes: "Includes neck cleanup and finish styling.",
    },
    {
        id: "signature-cut",
        name: "Signature Cut",
        description: "Detailed shape work with precision blending for a refined look.",
        priceUsd: 55,
        duration: "50 min",
        includes: "Includes hot towel and precision styling.",
        isFeatured: true,
    },
    {
        id: "beard-sculpt",
        name: "Beard Sculpt",
        description: "Structured beard shaping with line definition and balance.",
        priceUsd: 30,
        duration: "30 min",
        includes: "Includes line-up detailing and conditioning treatment.",
    },
    {
        id: "full-grooming-experience",
        name: "Full Grooming Experience",
        description: "Complete grooming session for clients who want the full standard.",
        priceUsd: 85,
        duration: "80 min",
        includes: "Includes haircut, beard sculpt, and hot towel ritual.",
    },
] as const;
