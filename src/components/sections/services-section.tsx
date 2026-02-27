import { ServicesGrid } from "@/components/sections/services-grid";
import { CORE_SERVICES } from "@/lib/services-data";

export const ServicesSection = (): React.JSX.Element => {
    return (
        <section id="services" className="relative overflow-hidden bg-surface py-20 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(198,167,94,0.08),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12">
                <header className="max-w-[42rem]">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        Services Built Around Precision
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                        Tailored cuts and grooming experiences designed for professionals
                        who care about detail.
                    </p>
                </header>

                <div className="mt-12 md:mt-14">
                    <ServicesGrid services={CORE_SERVICES} />
                </div>

                <p className="mt-10 text-center text-sm text-text-muted">
                    Walk-ins welcome. Appointments recommended.
                </p>
            </div>
        </section>
    );
};
