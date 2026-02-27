"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { BookingButton } from "@/components/shared/booking-button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const SiteHeader = (): React.JSX.Element => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-background/50"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
                    aria-label={SITE_CONFIG.name}
                >
                    <Image
                        src="/images/logo.png"
                        alt="Local Barbers Logo"
                        width={40}
                        height={40}
                        className="h-9 w-9 md:h-10 md:w-10 object-contain"
                        priority
                    />
                    <span className="font-heading text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                        LOCAL{" "}
                        <span className="text-gold">BARBERS</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary hover:bg-surface"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex">
                    <BookingButton size="default">
                        Book Now
                    </BookingButton>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="lg:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle className="mb-1 flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="Local Barbers Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                            />
                            LOCAL <span className="text-gold">BARBERS</span>
                        </SheetTitle>
                        <SheetDescription>
                            Premium grooming experience
                        </SheetDescription>
                        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-lg px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-8">
                            <BookingButton className="w-full" size="lg">
                                Book Your Cut
                            </BookingButton>
                        </div>
                        <div className="mt-6 space-y-2 border-t border-border pt-6">
                            {SITE_CONFIG.owners.map((owner) => (
                                <a
                                    key={owner.phone}
                                    href={`tel:${owner.phone.replace(/\D/g, "")}`}
                                    className="flex items-center gap-2 text-sm text-text-muted hover:text-gold transition-colors"
                                >
                                    <span className="font-medium text-text-secondary">{owner.name}</span>
                                    <span>{owner.phone}</span>
                                </a>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
