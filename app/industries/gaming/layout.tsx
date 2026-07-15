import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming & VR Software Development | Ctas Info Services",
  description:
    "Ctas delivers gaming solutions: mobile, web, VR experiences, live ops, analytics, and backend services for game studios.",
  keywords: [
    "gaming software services",
    "mobile game development",
    "VR experience creation",
    "game backend services",
    "live ops for gaming",
    "gaming analytics platforms",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/gaming",
    languages: {
      "x-default": "https://www.ctasis.com",

      "en-US": "https://www.ctasis.com",
      "en-IN": "https://www.ctasis.com",
      "en-GB": "https://www.ctasis.com",
      "en-CA": "https://www.ctasis.com",
      "en-AU": "https://www.ctasis.com",
      "en-AE": "https://www.ctasis.com"
    },
  },
  openGraph: {
    title: "Gaming & VR Software Development | Ctas Info Services",
    description: "Ctas delivers gaming solutions: mobile, web, VR experiences, live ops, analytics, and backend services for game studios.",
    url: "https://www.ctasis.com/industries/gaming",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Gaming & VR Software Development | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming & VR Software Development | Ctas Info Services",
    description: "Ctas delivers gaming solutions: mobile, web, VR experiences, live ops, analytics, and backend services for game studios.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function GamingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
