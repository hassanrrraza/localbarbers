import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyBookingBar } from "@/components/layout/sticky-booking-bar";
import { FloatingActionButton } from "@/components/layout/floating-action-button";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Premium Barbershop`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "barbershop",
    "barber near me",
    "premium barbershop",
    "best fade near me",
    "barbershop Long Beach",
    "Local Barbers",
    "haircut",
    "men's grooming",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html suppressHydrationWarning lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background font-body text-text-primary antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyBookingBar />
        <FloatingActionButton />
      </body>
    </html>
  );
}
