import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/site-config";
import { LOCATIONS } from "@/lib/locations-data";
import { Separator } from "@/components/ui/separator";

export const SiteFooter = (): React.JSX.Element => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border">
            {/* Gold accent line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <Image
                                src="/images/logo.png"
                                alt="Local Barbers Logo"
                                width={36}
                                height={36}
                                className="h-9 w-9 object-contain"
                            />
                            <span className="font-heading text-xl font-bold tracking-tight text-text-primary">
                                LOCAL <span className="text-gold">BARBERS</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                            Premium grooming experiences across three locations. Detailed haircuts that fit your lifestyle.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href={SITE_CONFIG.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg p-2 text-text-muted transition-colors hover:bg-surface hover:text-gold"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={SITE_CONFIG.socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg p-2 text-text-muted transition-colors hover:bg-surface hover:text-gold"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-2" aria-label="Footer quick links">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-text-secondary transition-colors hover:text-gold"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Locations */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
                            Our Locations
                        </h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {LOCATIONS.map((location) => (
                                <div key={location.slug} className="space-y-2">
                                    <Link
                                        href={`/locations/${location.slug}`}
                                        className="text-sm font-semibold text-text-primary transition-colors hover:text-gold"
                                    >
                                        {location.name}
                                    </Link>
                                    <div className="flex items-start gap-1.5 text-xs text-text-muted">
                                        <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                                        <span>
                                            {location.address}, {location.city}, {location.state} {location.zip}
                                        </span>
                                    </div>
                                    <a
                                        href={`tel:${location.phone.replace(/\D/g, "")}`}
                                        className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-gold"
                                    >
                                        <Phone className="h-3 w-3" />
                                        {location.phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-xs text-text-muted md:flex-row">
                    <p>
                        &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                    <p>
                        Designed with precision & care.
                    </p>
                </div>
            </div>
        </footer>
    );
};
