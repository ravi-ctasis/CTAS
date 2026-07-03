import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing App Development Services | Ctas Info",
  description:
    "Ctas builds custom influencer marketing apps: campaign management, influencer discovery, analytics, and collaboration tools.",
  keywords: [
    "influencer marketing app development",
    "creator management platforms",
    "brand collaboration software",
    "social media influencer discovery",
    "influencer campaign analytics",
    "talent management apps",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/influencer-marketing-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/influencer-marketing-app",
      "en-IN": "https://www.ctasis.com/solutions/influencer-marketing-app",
      "x-default": "https://www.ctasis.com/solutions/influencer-marketing-app",
    },
  },
  openGraph: {
    title: "Build Your Own Influencer Marketing & Discovery Platform | Ctas",
    description:
      "Launch a custom app to bridge the gap between brands and creators. Advanced analytics and seamless collaboration tools.",
    url: "https://www.ctasis.com/solutions/influencer-marketing-app",
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

export default function InfluencerMarketingAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
