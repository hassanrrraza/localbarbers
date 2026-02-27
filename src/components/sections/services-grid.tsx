"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock } from "lucide-react";
import { BookingButton } from "@/components/shared/booking-button";
import { cn } from "@/lib/utils";
import type { ServiceOffer } from "@/lib/services-data";

interface ServicesGridProps {
    readonly services: ReadonlyArray<ServiceOffer>;
}

const gridRevealVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
            staggerChildren: 0.09,
        },
    },
};

const cardRevealVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

function formatServicePrice(priceUsd: number): string {
    return `${priceUsd} USD`;
}

export const ServicesGrid = ({ services }: ServicesGridProps): React.JSX.Element => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={gridRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {services.map((service) => {
                const isFeaturedService = Boolean(service.isFeatured);

                return (
                    <motion.article
                        key={service.id}
                        variants={cardRevealVariants}
                        className={cn(
                            "group relative flex h-full flex-col rounded-2xl border border-border/80 bg-background/55 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_14px_36px_rgba(0,0,0,0.32)]",
                            isFeaturedService &&
                                "border-gold/75 bg-background/75 shadow-[0_18px_45px_rgba(198,167,94,0.12)] lg:-translate-y-1 lg:scale-[1.03]"
                        )}
                    >
                        <div className="mb-4 h-7">
                            {isFeaturedService && (
                                <span className="inline-flex w-fit rounded-full border border-gold/70 bg-gold-muted px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-gold">
                                    Most Popular
                                </span>
                            )}
                        </div>

                        <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary">
                            {service.name}
                        </h3>

                        <p className="mt-2 min-h-[1.25rem] truncate text-sm text-text-secondary">
                            {service.description}
                        </p>

                        <div className="mt-6 border-t border-border/80 pt-4">
                            <p className="text-lg font-semibold tracking-wide text-text-primary">
                                {formatServicePrice(service.priceUsd)}
                            </p>
                            <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-text-muted">
                                <Clock className="h-3.5 w-3.5" aria-hidden />
                                {service.duration}
                            </p>
                            <p className="mt-3 min-h-[1rem] truncate text-xs text-text-muted">
                                {service.includes}
                            </p>
                        </div>

                        <div className="mt-auto pt-5">
                            <BookingButton
                                size="sm"
                                variant={isFeaturedService ? "default" : "outline"}
                                branchName={`service-${service.id}`}
                                className={cn(
                                    "w-full rounded-2xl transition-all duration-300 ease-out hover:scale-[1.01]",
                                    isFeaturedService
                                        ? "shadow-lg shadow-gold/15"
                                        : "border-border text-text-primary hover:border-gold/60 hover:bg-gold-muted hover:text-gold"
                                )}
                            >
                                Book Now
                            </BookingButton>
                        </div>
                    </motion.article>
                );
            })}
        </motion.div>
    );
};
