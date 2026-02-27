"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Calendar, Instagram, MapPin, MessageCircle, Plus } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

interface FabAction {
    readonly id: string;
    readonly label: string;
    readonly href: string;
    readonly icon: LucideIcon;
    readonly isExternal: boolean;
}

const phoneDigits = SITE_CONFIG.owners[0]?.phone.replace(/\D/g, "") ?? "15623269901";

const FAB_ACTIONS: ReadonlyArray<FabAction> = [
    {
        id: "book-now",
        label: "Book Now",
        href: "/locations",
        icon: Calendar,
        isExternal: false,
    },
    {
        id: "instagram",
        label: "Instagram",
        href: SITE_CONFIG.socialLinks.instagram,
        icon: Instagram,
        isExternal: true,
    },
    {
        id: "whatsapp",
        label: "WhatsApp",
        href: `https://wa.me/${phoneDigits}`,
        icon: MessageCircle,
        isExternal: true,
    },
    {
        id: "google-maps",
        label: "Google Maps",
        href: "https://www.google.com/maps/search/?api=1&query=Local+Barbers+Long+Beach",
        icon: MapPin,
        isExternal: true,
    },
] as const;

const listVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.02,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
};

export const FloatingActionButton = (): React.JSX.Element => {
    const pathname = usePathname();

    return <FloatingActionButtonContent key={pathname} />;
};

const FloatingActionButtonContent = (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const fabRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: MouseEvent | TouchEvent): void => {
            const eventTarget = event.target;
            if (!(eventTarget instanceof Node)) return;
            if (fabRef.current?.contains(eventTarget)) return;
            setIsOpen(false);
        };

        const handleEscape = (event: KeyboardEvent): void => {
            if (event.key === "Escape") setIsOpen(false);
        };

        const initialScroll = window.scrollY;
        const handleScroll = (): void => {
            const hasScrolledFar = Math.abs(window.scrollY - initialScroll) > 180;
            if (hasScrolledFar) setIsOpen(false);
        };

        window.addEventListener("mousedown", handlePointerDown);
        window.addEventListener("touchstart", handlePointerDown, { passive: true });
        window.addEventListener("keydown", handleEscape);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("mousedown", handlePointerDown);
            window.removeEventListener("touchstart", handlePointerDown);
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    return (
        <div
            ref={fabRef}
            className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-6 z-50 flex items-end md:bottom-6"
        >
            <div className="flex flex-col items-end gap-3">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="fab-actions"
                            className="flex flex-col items-end gap-2"
                            aria-label="Quick actions"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            {FAB_ACTIONS.map((action) => {
                                const Icon = action.icon;
                                const actionClassName =
                                    "flex h-11 min-w-[11rem] items-center justify-start gap-2.5 rounded-xl border border-border/80 bg-background/95 px-4 text-sm font-medium text-text-secondary shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 ease-out hover:border-gold/60 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

                                if (action.isExternal) {
                                    return (
                                        <motion.a
                                            key={action.id}
                                            variants={itemVariants}
                                            href={action.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={action.label}
                                            className={actionClassName}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Icon className="h-4 w-4 shrink-0" aria-hidden />
                                            <span>{action.label}</span>
                                        </motion.a>
                                    );
                                }

                                return (
                                    <motion.div key={action.id} variants={itemVariants}>
                                        <Link
                                            href={action.href}
                                            aria-label={action.label}
                                            className={actionClassName}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Icon className="h-4 w-4 shrink-0" aria-hidden />
                                            <span>{action.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="button"
                    aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
                    aria-expanded={isOpen}
                    aria-controls="fab-actions"
                    onClick={() => setIsOpen((previousState) => !previousState)}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-border/90 bg-background/90 text-gold shadow-[0_14px_34px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ease-out hover:border-gold/60 hover:text-gold-hover md:h-12 md:w-12"
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Plus className="h-5 w-5" aria-hidden />
                    </motion.span>
                </button>
            </div>
        </div>
    );
};
