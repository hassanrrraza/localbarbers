export interface Review {
    readonly id: string;
    readonly name: string;
    readonly rating: number;
    readonly text: string;
    readonly branch: string;
    readonly date: string;
}

export const REVIEWS: ReadonlyArray<Review> = [
    {
        id: "review-1",
        name: "Daniel R.",
        rating: 5,
        text: "Best barbershop experience I've ever had. The attention to detail is unmatched. My fade was absolutely perfect and the atmosphere is premium.",
        branch: "Local Barbers",
        date: "2 weeks ago",
    },
    {
        id: "review-2",
        name: "Michael T.",
        rating: 5,
        text: "Been coming here for over a year. Consistent quality every single time. Leo and Eric run a tight ship — professional, clean, and the cuts speak for themselves.",
        branch: "Local Barbers Private Club",
        date: "1 month ago",
    },
    {
        id: "review-3",
        name: "Anthony S.",
        rating: 5,
        text: "Finally found a barbershop that takes pride in their craft. The Premium Grooming Bundle is worth every penny. Walking out feeling like a new man.",
        branch: "Local Barbers Royalty",
        date: "3 weeks ago",
    },
    {
        id: "review-4",
        name: "Chris M.",
        rating: 5,
        text: "Brought my son in for his first real haircut. They were patient and made him feel comfortable. Great experience for the whole family.",
        branch: "Local Barbers",
        date: "1 week ago",
    },
    {
        id: "review-5",
        name: "Jason L.",
        rating: 5,
        text: "The Private Club location is top-notch. Exclusive atmosphere, skilled barbers, and they always remember how I like my cut. Five stars every time.",
        branch: "Local Barbers Private Club",
        date: "2 months ago",
    },
    {
        id: "review-6",
        name: "Robert K.",
        rating: 5,
        text: "Clean shop, skilled barbers, and they actually listen to what you want. No cookie-cutter cuts here. Highly recommend to anyone looking for quality.",
        branch: "Local Barbers Royalty",
        date: "1 month ago",
    },
] as const;

export const AGGREGATE_RATING = {
    value: 4.9,
    count: 500,
} as const;
