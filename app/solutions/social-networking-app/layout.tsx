import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Networking App Development | Ctas Info Services",
  description:
    "Ctas develops custom social networking apps: real-time messaging, news feeds, friend connections, and engaging community features.",
  keywords: [
    "social networking app development",
    "community platform builder",
    "real-time messaging apps",
    "social media software development",
    "custom news feed algorithms",
    "user engagement features",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/social-networking-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/social-networking-app",
      "en-IN": "https://www.ctasis.com/solutions/social-networking-app",
      "x-default": "https://www.ctasis.com/solutions/social-networking-app",
    },
  },
  openGraph: {
    title: "Build the Next Global Social Media Platform | Ctas Info Services",
    description:
      "Connect people with high-performance social networking apps. Custom features for news feeds, messaging, and community building.",
    url: "https://www.ctasis.com/solutions/social-networking-app",
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

export default function SocialNetworkingAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
