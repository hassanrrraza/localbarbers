import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
    readonly rating: number;
    readonly size?: number;
    readonly className?: string;
}

export const StarRating = ({
    rating,
    size = 16,
    className,
}: StarRatingProps): React.JSX.Element => {
    return (
        <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    size={size}
                    className={cn(
                        "transition-colors",
                        i < rating
                            ? "fill-gold text-gold"
                            : "fill-transparent text-text-muted"
                    )}
                />
            ))}
        </div>
    );
};
