import { SectionHeading } from "@/components/shared/section-heading";
import { StarRating } from "@/components/shared/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { REVIEWS, AGGREGATE_RATING } from "@/lib/reviews-data";
import { Star, Quote } from "lucide-react";

export const ReviewsSection = (): React.JSX.Element => {
    return (
        <section id="reviews" className="relative bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <SectionHeading
                    overline="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Don't just take our word for it. Hear from the community that keeps coming back."
                />

                {/* Aggregate Rating */}
                <div className="mx-auto mb-12 flex flex-col items-center gap-3 text-center">
                    <div className="flex items-center gap-3">
                        <span className="font-heading text-4xl font-bold text-gold">
                            {AGGREGATE_RATING.value}
                        </span>
                        <div className="flex flex-col items-start">
                            <StarRating rating={5} size={18} />
                            <span className="mt-0.5 text-xs text-text-muted">
                                {AGGREGATE_RATING.count}+ Reviews
                            </span>
                        </div>
                    </div>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {REVIEWS.map((review) => (
                        <Card
                            key={review.id}
                            className="group transition-all duration-300 hover:-translate-y-1 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5"
                        >
                            <CardContent className="p-6">
                                {/* Quote icon */}
                                <Quote className="mb-4 h-6 w-6 text-gold/30" />

                                {/* Stars */}
                                <StarRating rating={review.rating} className="mb-4" />

                                {/* Review text */}
                                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 border-t border-border pt-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-text-primary">
                                            {review.name}
                                        </p>
                                        <p className="text-xs text-text-muted">{review.branch}</p>
                                    </div>
                                    <Star className="ml-auto h-3.5 w-3.5 fill-gold text-gold" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
