import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dating App Development Services | Ctas Info Services",
  description:
    "Custom dating app development services including matchmaking algorithms, real-time chat, secure login, and modern UI/UX for high-engagement platforms.",
  keywords: [
    "dating app development",
    "matchmaking algorithm technology",
    "social app features",
    "secure dating platform design",
    "custom social network apps",
  ],
  openGraph: {
    title: "Build the Next-Gen Dating App with Advanced Matchmaking | Ctas",
    description:
      "Launch a secure, engaging, and feature-rich dating app. Our experts build real-time chat and intelligent matchmaking systems.",
    url: "https://www.ctasis.com/solutions/dating-app",
  },
  alternates: {
    canonical: "https://www.ctasis.com/solutions/dating-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/dating-app",
      "en-IN": "https://www.ctasis.com/solutions/dating-app",
      "x-default": "https://www.ctasis.com/solutions/dating-app",
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

export default function DatingAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
