"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { BookingButton } from "@/components/shared/booking-button";
import { ScrollIndicator } from "@/components/sections/scroll-indicator";

const textVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
};

const badgeItems = [
    "15+ Years Experience",
    "3 Long Beach Locations",
    "4.9\u2605 Client Rating",
] as const;

export const HeroContent = (): React.JSX.Element => {
    return (
        <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1200px] items-center px-6 pb-20 pt-28 sm:px-8 md:pb-24 md:pt-32 lg:px-12 lg:pt-36">
            <motion.div
                className="w-full max-w-[42rem]"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.12 }}
            >
                <motion.p
                    variants={textVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-xs font-semibold uppercase tracking-[0.26em] text-gold/90 sm:text-sm"
                >
                    Premium Grooming Experience
                </motion.p>

                <h1 className="mt-5 font-heading text-[2.25rem] font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-7xl">
                    <motion.span
                        variants={textVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="block"
                    >
                        Precision Cuts.
                    </motion.span>
                    <motion.span
                        variants={textVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                        className="mt-1 block text-gold"
                    >
                        Professional Standards.
                    </motion.span>
                </h1>

                <motion.p
                    variants={textVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
                    className="mt-7 max-w-[39rem] text-base leading-relaxed text-text-secondary sm:text-lg"
                >
                    Premium grooming across three Long Beach locations. Detailed cuts, expert
                    barbers, and a professional environment built around your image.
                </motion.p>

                <motion.div
                    variants={textVariants}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
                    className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-secondary"
                >
                    {badgeItems.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 text-gold/90" strokeWidth={2.4} aria-hidden />
                            <span>{item}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                    <BookingButton size="xl" className="hover:scale-[1.02]">
                        Book Your Cut
                    </BookingButton>
                    <Link
                        href="#locations"
                        className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-gold/80 bg-transparent px-10 text-base font-semibold text-gold transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-gold-muted"
                    >
                        View Locations
                    </Link>
                </motion.div>
            </motion.div>
            <ScrollIndicator />
        </div>
    );
};
