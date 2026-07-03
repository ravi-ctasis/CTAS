import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Tracking App Development Services | Ctas Info",
  description:
    "Ctas develops custom sports tracking apps: real-time activity monitoring, performance analytics, and wearable integrations.",
  keywords: [
    "sports tracking app development",
    "athlete performance analytics",
    "fitness activity monitoring",
    "wearable sports sync",
    "personalized coaching software",
    "team sports management apps",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/sports-tracking-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/sports-tracking-app",
      "en-IN": "https://www.ctasis.com/solutions/sports-tracking-app",
      "x-default": "https://www.ctasis.com/solutions/sports-tracking-app",
    },
  },
  openGraph: {
    title: "Data-Driven Sports & Performance Tracking Apps | Ctas",
    description:
      "Empower athletes with advanced performance tracking and wearable integrations. Custom mobile solutions for sports and athletics.",
    url: "https://www.ctasis.com/solutions/sports-tracking-app",
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

export default function SportsTrackingAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
