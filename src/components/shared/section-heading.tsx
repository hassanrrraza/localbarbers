import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    readonly overline?: string;
    readonly title: string;
    readonly subtitle?: string;
    readonly alignment?: "left" | "center";
    readonly isLight?: boolean;
    readonly className?: string;
}

export const SectionHeading = ({
    overline,
    title,
    subtitle,
    alignment = "center",
    isLight = false,
    className,
}: SectionHeadingProps): React.JSX.Element => {
    return (
        <div
            className={cn(
                "mb-12 md:mb-16",
                alignment === "center" && "text-center",
                className
            )}
        >
            {overline && (
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {overline}
                </span>
            )}
            <h2
                className={cn(
                    "font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl",
                    isLight ? "text-text-on-light" : "text-text-primary"
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "mt-4 max-w-2xl text-base md:text-lg",
                        alignment === "center" && "mx-auto",
                        isLight ? "text-text-on-light/70" : "text-text-secondary"
                    )}
                >
                    {subtitle}
                </p>
            )}
            <div
                className={cn(
                    "mt-6 h-[2px] w-16 bg-gradient-to-r from-gold to-transparent",
                    alignment === "center" && "mx-auto"
                )}
            />
        </div>
    );
};
