import { AboutAuthorityContent } from "@/components/sections/about-authority-content";

const AUTHORITY_METRICS = [
    { value: "15+", label: "Years of Craft Mastery" },
    { value: "3", label: "Established Long Beach Locations" },
    { value: "10,000+", label: "Clients Served" },
    { value: "4.9", label: "Average Client Rating" },
] as const;

export const AboutSection = (): React.JSX.Element => {
    return (
        <section id="about" className="bg-surface py-20 md:py-24">
            <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12">
                <AboutAuthorityContent metrics={AUTHORITY_METRICS} />
            </div>
        </section>
    );
};
