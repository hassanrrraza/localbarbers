import { SectionHeading } from "@/components/shared/section-heading";
import { BookingButton } from "@/components/shared/booking-button";
import { Card, CardContent } from "@/components/ui/card";
import { LOCATIONS } from "@/lib/locations-data";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";

export const LocationsSection = (): React.JSX.Element => {
    return (
        <section id="locations" className="relative bg-background py-20 md:py-28">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <SectionHeading
                    overline="Visit Us"
                    title="Our Locations"
                    subtitle="Three premium locations, one standard of excellence. Find the branch nearest you."
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {LOCATIONS.map((location) => (
                        <Card
                            key={location.slug}
                            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
                        >
                            {/* Branch Image Placeholder */}
                            <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-surface via-background to-surface">
                                <div className="flex h-full w-full items-center justify-center">
                                    <div className="text-center">
                                        <span className="font-heading text-lg font-bold text-gold">{location.tagline}</span>
                                        <p className="mt-1 text-xs text-text-muted">Photo coming soon</p>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                {/* Branch Name */}
                                <Link
                                    href={`/locations/${location.slug}`}
                                    className="group/link"
                                >
                                    <h3 className="font-heading text-xl font-semibold text-text-primary transition-colors group-hover/link:text-gold">
                                        {location.name}
                                    </h3>
                                </Link>

                                {/* Details */}
                                <div className="mt-4 space-y-3">
                                    {/* Address */}
                                    <div className="flex items-start gap-2.5 text-sm text-text-secondary">
                                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                                        <span>
                                            {location.address}, {location.city}, {location.state} {location.zip}
                                        </span>
                                    </div>

                                    {/* Phone */}
                                    <a
                                        href={`tel:${location.phone.replace(/\D/g, "")}`}
                                        className="flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-gold"
                                    >
                                        <Phone className="h-4 w-4 shrink-0 text-gold/60" />
                                        {location.phone}
                                    </a>

                                    {/* Hours preview */}
                                    <div className="flex items-start gap-2.5 text-sm text-text-secondary">
                                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                                        <div>
                                            <span>Mon-Thu: {location.hours[0].open} – {location.hours[0].close}</span>
                                            <br />
                                            <span>Fri: {location.hours[4].open} – {location.hours[4].close}</span>
                                            <br />
                                            <span className="text-text-muted">
                                                Sat-Sun: {location.hours[5].open} – {location.hours[6].close}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 flex items-center gap-3">
                                    <BookingButton
                                        size="sm"
                                        className="flex-1"
                                        bookingUrl={location.bookingUrl}
                                        branchName={location.name}
                                    >
                                        Book Here
                                    </BookingButton>
                                    <a
                                        href={location.directionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-transparent text-text-muted transition-colors hover:border-gold hover:text-gold"
                                        aria-label={`Get directions to ${location.name}`}
                                    >
                                        <Navigation className="h-4 w-4" />
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
