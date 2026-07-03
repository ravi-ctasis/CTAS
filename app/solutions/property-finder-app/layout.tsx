import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Finder App Development Services | Ctas Info",
  description:
    "Ctas builds advanced property finder apps: map-based search, virtual tours, agent management, and real estate listings.",
  keywords: [
    "real estate app development",
    "property finder software",
    "MLS listing platforms",
    "map-based search apps",
    "virtual property tours",
    "agent management portals",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/property-finder-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/property-finder-app",
      "en-IN": "https://www.ctasis.com/solutions/property-finder-app",
      "x-default": "https://www.ctasis.com/solutions/property-finder-app",
    },
  },
  openGraph: {
    title: "Build the Ultimate Real Estate & Property Discovery App | Ctas",
    description:
      "Modernize property browsing with map-based search and virtual tours. Expert real estate platform developers for global markets.",
    url: "https://www.ctasis.com/solutions/property-finder-app",
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

export default function PropertyFinderAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
