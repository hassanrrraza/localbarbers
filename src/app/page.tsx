import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { BarbersSection } from "@/components/sections/barbers-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage(): React.JSX.Element {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BarbersSection />
      <GallerySection />
      <ReviewsSection />
      <LocationsSection />
      <FinalCtaSection />
    </main>
  );
}
