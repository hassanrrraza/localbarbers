"use client";

import { motion } from "framer-motion";

export const ScrollIndicator = (): React.JSX.Element => {
    return (
        <motion.div
            aria-hidden
            className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 opacity-45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
            <div className="h-12 w-px overflow-hidden rounded-full bg-text-primary/15">
                <motion.div
                    className="h-8 w-px bg-gradient-to-b from-gold/90 via-gold/40 to-transparent"
                    animate={{ y: [-10, 16] }}
                    transition={{ duration: 2.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                />
            </div>
        </motion.div>
    );
};
