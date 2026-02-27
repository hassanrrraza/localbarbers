"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import aboutImage from "../../../public/images/about.webp";

interface AuthorityMetric {
    readonly value: string;
    readonly label: string;
}

interface AboutAuthorityContentProps {
    readonly metrics: ReadonlyArray<AuthorityMetric>;
}

const metricListVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const metricItemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export const AboutAuthorityContent = ({
    metrics,
}: AboutAuthorityContentProps): React.JSX.Element => {
    return (
        <div>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl border border-border/80 shadow-[0_16px_40px_rgba(0,0,0,0.32)]"
                >
                    <Image
                        src={aboutImage}
                        alt="Professional barber delivering a precision grooming service"
                        width={aboutImage.width}
                        height={aboutImage.height}
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                        priority={false}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                >
                    <h2 className="font-heading text-3xl font-bold tracking-[0.08em] text-text-primary sm:text-4xl lg:text-5xl">
                        OUR STORY
                    </h2>

                    <p className="mt-6 max-w-[38rem] text-[1.05rem] leading-8 text-text-secondary">
                        More than a barbershop &mdash; The Local Barbers is built around
                        detail-driven grooming for professionals who value their image.
                    </p>

                    <div className="mt-7 max-w-[38rem] space-y-5 text-[1.02rem] leading-8 text-text-secondary">
                        <p>
                            What began as a single chair has evolved into three refined
                            locations across Long Beach &mdash; each operating with the same
                            uncompromising standard of precision, consistency, and service.
                        </p>
                        <p>
                            Founded by Leo and Eric, our philosophy is simple: your
                            appearance speaks before you do. Every cut is executed with
                            intention. Every detail is considered. Every client leaves
                            sharper than they arrived.
                        </p>
                        <p>
                            From timeless classics to modern precision fades, our team
                            blends traditional craftsmanship with contemporary technique
                            &mdash;
                            delivered in an environment designed for comfort, focus, and
                            confidence.
                        </p>
                        <p className="font-medium text-text-primary">
                            <span className="block">This isn&apos;t just grooming.</span>
                            <span className="block">It&apos;s personal presentation.</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                variants={metricListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {metrics.map((metric) => (
                    <motion.div
                        key={metric.label}
                        variants={metricItemVariants}
                        className="rounded-2xl border border-gold/40 bg-background/60 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.26)]"
                    >
                        <p className="text-lg font-semibold tracking-tight text-text-primary">
                            {metric.value}
                        </p>
                        <p className="mt-1 text-sm leading-snug text-text-secondary">
                            {metric.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <p className="mt-8 text-sm text-text-muted">
                Serving the Long Beach community with pride.
            </p>
        </div>
    );
};
