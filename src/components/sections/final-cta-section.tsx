import { BookingButton } from "@/components/shared/booking-button";

export const FinalCtaSection = (): React.JSX.Element => {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-28">
            {/* Radial gold glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(198,167,94,0.08)_0%,_transparent_60%)]" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(198,167,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(198,167,94,0.5) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
                {/* Overline */}
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Your Style Awaits
                </span>

                {/* Headline */}
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
                    Ready for Your{" "}
                    <span className="text-gold">Best Cut</span>?
                </h2>

                {/* Subtitle */}
                <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-lg">
                    Book your appointment online or call us directly. Join thousands of satisfied clients
                    who trust Local Barbers for their grooming needs.
                </p>

                {/* CTA */}
                <div className="mt-10">
                    <BookingButton size="xl">
                        Book Your Appointment
                    </BookingButton>
                </div>

                {/* Subtle trust line */}
                <p className="mt-6 text-xs text-text-muted">
                    Online booking powered by Booksy · Walk-ins welcome
                </p>
            </div>
        </section>
    );
};
