import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness App Development Services | Ctas Info Services",
  description:
    "Custom fitness app development services including workout tracking, nutrition planning, wearable integrations, and personalized fitness experiences.",
  keywords: [
    "fitness app development company",
    "workout tracking software",
    "nutrition planning apps",
    "wearable device integration",
    "activity monitoring solutions",
    "personalized fitness platform",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/fitness-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/fitness-app",
      "en-IN": "https://www.ctasis.com/solutions/fitness-app",
      "x-default": "https://www.ctasis.com/solutions/fitness-app",
    },
  },
  openGraph: {
    title: "Build the Future of Health & Fitness with Custom Apps | Ctas",
    description:
      "Create engaging fitness experiences with workout tracking and wearable sync. Expert mobile developers for health and wellness.",
    url: "https://www.ctasis.com/solutions/fitness-app",
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

export default function FitnessAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
