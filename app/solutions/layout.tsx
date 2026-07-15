import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom App Development Solutions | Ctas Info Services",
  description:
    "Comprehensive digital solutions including dating apps, e-commerce, mobile wallets, food delivery, and healthcare. Custom app development for all industries.",
  keywords: [
    "app development solutions",
    "custom mobile apps",
    " dating app development",
    "e-commerce solutions",
    "food delivery app",
    "mobile wallet app",
    "healthcare apps",
    "fitness apps",
    "travel apps",
    "Ctas solutions",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions",
    languages: {
      "en-US": "https://www.ctasis.com/solutions",
      "en-IN": "https://www.ctasis.com/solutions",
      "x-default": "https://www.ctasis.com/solutions",
    },
  },
  openGraph: {
    title: "Our Solutions | Custom App Development & Digital Solutions | Ctas",
    description:
      "Comprehensive digital solutions including dating apps, e-commerce platforms, mobile wallets, food delivery apps, healthcare solutions, and more.",
    type: "website",
    url: "https://www.ctasis.com/solutions",
    images: [
      {
        url: "https://www.ctasis.com/assets/images/solutions-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ctas Custom App Development Solutions",
      },
    ],
    siteName: "Ctas Info Services LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Solutions | Custom App Development & Digital Solutions | Ctas",
    description:
      "Comprehensive digital solutions including dating apps, e-commerce platforms, mobile wallets, food delivery apps, healthcare solutions, and more.",
    images: ["https://www.ctasis.com/assets/images/solutions-twitter-card.jpg"],
    site: "@ctasinfoservices",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
