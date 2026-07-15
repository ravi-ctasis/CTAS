import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel App Development Services | Ctas Info Services",
  description:
    "Ctas develops custom travel apps: flight and hotel bookings, itinerary management, and seamless travel planning.",
  keywords: [
    "travel app development",
    "itinerary management software",
    "flight booking app services",
    "hotel reservation platforms",
    "real-time travel updates",
    "custom travel planning tech",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/travel-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/travel-app",
      "en-IN": "https://www.ctasis.com/solutions/travel-app",
      "x-default": "https://www.ctasis.com/solutions/travel-app",
    },
  },
  openGraph: {
    title: "Global Travel & Hospitality App Solutions | Ctas Info Services",
    description:
      "Modernize travel planning with custom mobile apps. Expert developers for flight, hotel, and itinerary management systems.",
    url: "https://www.ctasis.com/solutions/travel-app",
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

export default function TravelAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
