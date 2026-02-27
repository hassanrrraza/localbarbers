import { HeroBackground } from "@/components/sections/hero-background";
import { HeroContent } from "@/components/sections/hero-content";

export const HeroSection = (): React.JSX.Element => {
    return (
        <section id="hero" className="relative min-h-[90vh] overflow-hidden">
            <HeroBackground />
            <HeroContent />
        </section>
    );
};
