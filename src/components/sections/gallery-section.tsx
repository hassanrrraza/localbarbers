"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const GALLERY_ITEMS = [
    { id: 1, label: "Clean Fade", src: "/images/gallery/cleanfade.webp", aspect: "aspect-square" },
    { id: 2, label: "Textured Crop", src: "/images/gallery/texturecrop.webp", aspect: "aspect-[4/5]" },
    { id: 3, label: "Classic Taper", src: "/images/gallery/classictaper.webp", aspect: "aspect-square" },
    { id: 4, label: "Beard Sculpt", src: "/images/gallery/BeardSculpt.webp", aspect: "aspect-[4/5]" },
    { id: 5, label: "Skin Fade", src: "/images/gallery/skinfade.webp", aspect: "aspect-square" },
    { id: 6, label: "Modern Pompadour", src: "/images/gallery/modernpompadour.webp", aspect: "aspect-square" },
    { id: 7, label: "Low Fade", src: "/images/gallery/lowfade.webp", aspect: "aspect-[4/5]" },
    { id: 8, label: "Line-Up Detail", src: "/images/gallery/lineupdetail.webp", aspect: "aspect-square" },
] as const;

export const GallerySection = (): React.JSX.Element => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="gallery" className="relative bg-surface-light py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <SectionHeading
                    overline="Our Work"
                    title="The Gallery"
                    subtitle="Every cut tells a story. Browse our latest work and see the precision and skill our barbers bring to every chair."
                    isLight
                />

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
                    {GALLERY_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={cn(
                                "group relative cursor-pointer overflow-hidden rounded-2xl border border-text-on-light/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                                item.aspect
                            )}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Real gallery image */}
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                            />

                            {/* Hover overlay */}
                            <div
                                className={cn(
                                    "absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm transition-opacity duration-300",
                                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                                )}
                            >
                                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instagram CTA */}
                <div className="mt-10 text-center">
                    <a
                        href={SITE_CONFIG.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-text-on-light/20 bg-transparent px-6 py-3 text-sm font-semibold text-text-on-light transition-all duration-300 hover:border-gold hover:text-gold"
                    >
                        <Instagram className="h-4 w-4" />
                        Follow Us on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};
