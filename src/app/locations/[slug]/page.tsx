import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, ArrowLeft } from "lucide-react";
import { BookingButton } from "@/components/shared/booking-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    LOCATIONS,
    getLocationBySlug,
    getAllLocationSlugs,
} from "@/lib/locations-data";
import { SITE_CONFIG } from "@/lib/site-config";

interface LocationPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
    return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: LocationPageProps): Promise<Metadata> {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) {
        return { title: "Location Not Found" };
    }

    return {
        title: `${location.name} – ${location.city}, ${location.state}`,
        description: `Visit ${location.name} at ${location.address}, ${location.city}, ${location.state} ${location.zip}. Book your premium haircut today. Call ${location.phone}.`,
        openGraph: {
            title: `${location.name} | ${SITE_CONFIG.shortName}`,
            description: `Premium barbershop in ${location.city}. Book your cut at ${location.name}.`,
        },
    };
}

export default async function LocationDetailPage({
    params,
}: LocationPageProps): Promise<React.JSX.Element> {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) {
        notFound();
    }

    const otherLocations = LOCATIONS.filter((loc) => loc.slug !== slug);

    return (
        <main className="pt-20">
            {/* Back link */}
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
                <Link
                    href="/locations"
                    className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All Locations
                </Link>
            </div>

            {/* Hero area */}
            <section className="relative bg-background pb-12">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Image */}
                        <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-background to-surface">
                            <div className="flex h-full w-full items-center justify-center">
                                <div className="text-center">
                                    <span className="font-heading text-2xl font-bold text-gold">
                                        {location.tagline}
                                    </span>
                                    <p className="mt-2 text-xs text-text-muted">Photo coming soon</p>
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div>
                            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                                {location.tagline}
                            </span>
                            <h1 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
                                {location.name}
                            </h1>

                            <Separator className="my-6" />

                            {/* Contact info */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 text-text-secondary">
                                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold/60" />
                                    <div>
                                        <p className="font-medium text-text-primary">Address</p>
                                        <p className="text-sm">
                                            {location.address}, {location.city}, {location.state} {location.zip}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                                    className="flex items-start gap-3 text-text-secondary transition-colors hover:text-gold"
                                >
                                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold/60" />
                                    <div>
                                        <p className="font-medium text-text-primary">Phone</p>
                                        <p className="text-sm">{location.phone}</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-3 text-text-secondary">
                                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold/60" />
                                    <div>
                                        <p className="mb-2 font-medium text-text-primary">Hours</p>
                                        <div className="space-y-1">
                                            {location.hours.map((hour) => (
                                                <div
                                                    key={hour.day}
                                                    className="flex items-center justify-between gap-8 text-sm"
                                                >
                                                    <span className="text-text-muted">{hour.day}</span>
                                                    <span>
                                                        {hour.isClosed
                                                            ? "Closed"
                                                            : `${hour.open} – ${hour.close}`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <BookingButton
                                    size="lg"
                                    className="flex-1"
                                    bookingUrl={location.bookingUrl}
                                    branchName={location.name}
                                >
                                    Book at {location.name.replace("Local Barbers ", "").replace("Local Barbers", "This Location")}
                                </BookingButton>
                                <a
                                    href={location.directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border-2 border-gold bg-transparent px-6 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold-muted"
                                >
                                    <Navigation className="h-4 w-4" />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD for this specific location */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BarberShop",
                        name: location.name,
                        telephone: location.phone,
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
                        url: `${SITE_CONFIG.url}/locations/${location.slug}`,
                        priceRange: "$$",
                    }),
                }}
            />

            {/* Other Locations */}
            {otherLocations.length > 0 && (
                <section className="bg-background py-16">
                    <div className="mx-auto max-w-7xl px-4 md:px-8">
                        <SectionHeading
                            overline="Explore More"
                            title="Other Locations"
                            subtitle="Visit any of our premium barber studios."
                        />
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {otherLocations.map((loc) => (
                                <Card
                                    key={loc.slug}
                                    className="group transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                                >
                                    <CardContent className="p-6">
                                        <Link
                                            href={`/locations/${loc.slug}`}
                                            className="font-heading text-lg font-semibold text-text-primary transition-colors hover:text-gold"
                                        >
                                            {loc.name}
                                        </Link>
                                        <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
                                            <MapPin className="h-3.5 w-3.5 text-gold/40" />
                                            {loc.address}, {loc.city}
                                        </div>
                                        <div className="mt-4">
                                            <BookingButton
                                                size="sm"
                                                variant="outline"
                                                bookingUrl={loc.bookingUrl}
                                                branchName={loc.name}
                                            >
                                                Book Here
                                            </BookingButton>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
