"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface BookingButtonProps extends Omit<ButtonProps, "onClick"> {
    readonly bookingUrl?: string;
    readonly branchName?: string;
    readonly className?: string;
}

export const BookingButton = ({
    bookingUrl,
    branchName,
    children,
    className,
    ...props
}: BookingButtonProps): React.JSX.Element => {
    const url = bookingUrl ?? SITE_CONFIG.bookingUrl;

    const handleClick = (): void => {
        // Analytics tracking
        if (typeof window !== "undefined" && "gtag" in window) {
            (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag("event", "booking_click", {
                event_category: "CTA",
                event_label: branchName ?? "general",
                booking_url: url,
            });
        }

        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Button
            className={cn(className)}
            onClick={handleClick}
            {...props}
        >
            {children ?? "Book Now"}
        </Button>
    );
};
