import { SectionHeading } from "@/components/shared/section-heading";
import { BookingButton } from "@/components/shared/booking-button";
import { Card, CardContent } from "@/components/ui/card";
import { BARBERS } from "@/lib/barbers-data";
import { Instagram } from "lucide-react";

export const BarbersSection = (): React.JSX.Element => {
    return (
        <section id="barbers" className="relative bg-background py-20 md:py-28">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <SectionHeading
                    overline="The Team"
                    title="Meet Our Barbers"
                    subtitle="Skilled professionals dedicated to delivering the perfect cut. Every barber brings expertise, precision, and passion."
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {BARBERS.map((barber) => (
                        <Card
                            key={barber.id}
                            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
                        >
                            {/* Photo */}
                            <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-surface via-background to-surface">
                                {/* Placeholder avatar — replace with real photo */}
                                <div className="flex h-full w-full items-center justify-center">
                                    <div className="text-center">
                                        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/20 bg-gold/5">
                                            <span className="font-heading text-2xl font-bold text-gold">
                                                {barber.name.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-muted">Photo coming soon</p>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-5">
                                {/* Name & Title */}
                                <h3 className="font-heading text-lg font-semibold text-text-primary">
                                    {barber.name}
                                </h3>
                                <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-gold">
                                    {barber.title}
                                </p>
                                <p className="mt-2 text-sm text-text-secondary">
                                    {barber.specialty}
                                </p>

                                {/* Actions */}
                                <div className="mt-4 flex items-center gap-2">
                                    <BookingButton
                                        size="sm"
                                        className="flex-1"
                                        bookingUrl={barber.bookingUrl}
                                        branchName={barber.name}
                                    >
                                        Book with {barber.name}
                                    </BookingButton>
                                    <a
                                        href={barber.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-transparent text-text-muted transition-colors hover:border-gold hover:text-gold"
                                        aria-label={`${barber.name}'s Instagram`}
                                    >
                                        <Instagram className="h-4 w-4" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
