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
    title: "Revolutionizing Wellness & Healthcare with Digital Tech | Ctas",
    description: "Build robust patient engagement and health monitoring tools. Expert developers for the wellness and healthcare sector.",
    url: "https://www.ctasis.com/industries/wellness",
  },
};

export default function WellnessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
