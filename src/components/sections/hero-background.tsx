import Image from "next/image";
import heroImage from "../../../public/images/hero.webp";

export const HeroBackground = (): React.JSX.Element => {
    return (
        <div className="absolute inset-0">
            <Image
                src={heroImage}
                alt="Premium barbershop interior with a professional grooming setup"
                fill
                priority
                placeholder="blur"
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(198,167,94,0.16),transparent_56%)]" />
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(248,247,244,0.34) 1px, transparent 1px), linear-gradient(90deg, rgba(248,247,244,0.34) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.45))",
                }}
            />
        </div>
    );
};
