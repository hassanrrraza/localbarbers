import type { Metadata } from "next";
import { LocationsSection } from "@/components/sections/locations-section";

export const metadata: Metadata = {
    title: "Our Locations",
    description:
        "Visit one of our three premium barbershop locations. Find addresses, hours, and book your appointment at Local Barbers, Private Club, or Royalty.",
};

export default function LocationsPage(): React.JSX.Element {
    return (
        <main className="pt-20">
            <LocationsSection />
        </main>
    );
}
