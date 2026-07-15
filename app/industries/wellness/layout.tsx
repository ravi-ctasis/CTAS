import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness & Healthcare Tech Solutions | Ctas Info Services",
  description:
    "Wellness and healthcare apps, wearables, patient engagement, and analytics solutions delivered by expert developers at Ctas.",
  keywords: [
    "wellness app development",
    "healthcare tech solutions",
    "patient engagement software",
    "wearable device integration",
    "health monitoring platforms",
    "wellness analytics services",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/wellness",
    languages: {
      "en-US": "https://www.ctasis.com/industries/wellness",
      "en-IN": "https://www.ctasis.com/industries/wellness",
      "x-default": "https://www.ctasis.com/industries/wellness",
    },
  },
  openGraph: {
    title: "Wellness & Healthcare Tech Solutions | Ctas Info Services",
    description: "Wellness and healthcare apps, wearables, patient engagement, and analytics solutions delivered by expert developers at Ctas.",
    url: "https://www.ctasis.com/industries/wellness",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Wellness & Healthcare Tech Solutions | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness & Healthcare Tech Solutions | Ctas Info Services",
    description: "Wellness and healthcare apps, wearables, patient engagement, and analytics solutions delivered by expert developers at Ctas.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function WellnessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
