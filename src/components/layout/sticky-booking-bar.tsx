"use client";

import { Phone } from "lucide-react";
import { BookingButton } from "@/components/shared/booking-button";
import { SITE_CONFIG } from "@/lib/site-config";

export const StickyBookingBar = (): React.JSX.Element => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-4 py-3 md:hidden">
            <div className="flex items-center gap-3">
                <a
                    href={`tel:${SITE_CONFIG.owners[0].phone.replace(/\D/g, "")}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-text-secondary transition-colors hover:border-gold hover:text-gold"
                    aria-label="Call us"
                >
                    <Phone className="h-4 w-4" />
                </a>
                <BookingButton className="flex-1" size="default">
                    Book Your Cut
                </BookingButton>
            </div>
        </div>
    );
};
