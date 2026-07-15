import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant App Development Services | Ctas Info Services",
  description:
    "Ctas builds advanced restaurant apps with online ordering, table management, kitchen display systems, and seamless dining experiences.",
  keywords: [
    "online food ordering system",
    "restaurant reservation software",
    "POS integration",
    "table management app",
    "food delivery solutions",
  ],
  openGraph: {
    title: "Transform Your Restaurant with Custom Digital Solutions | Ctas",
    description:
      "Build a high-performance restaurant app with ordering and POS integration. Enhance your dining service and operational efficiency.",
    url: "https://www.ctasis.com/solutions/restaurant-app",
  },
  alternates: {
    canonical: "https://www.ctasis.com/solutions/restaurant-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/restaurant-app",
      "en-IN": "https://www.ctasis.com/solutions/restaurant-app",
      "x-default": "https://www.ctasis.com/solutions/restaurant-app",
    },
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
