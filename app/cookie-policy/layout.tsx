import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy & Privacy",
  description: "Learn how Ctas Info Services LLP uses cookies and web beacons on our website to enhance visitor and client user experiences.",
  alternates: {
    canonical: "https://www.ctasis.com/cookie-policy",
    languages: {
      "en-US": "https://www.ctasis.com/cookie-policy",
      "en-IN": "https://www.ctasis.com/cookie-policy",
      "x-default": "https://www.ctasis.com/cookie-policy",
    },
  },
  openGraph: {
    title: "Cookie Policy | Ctas Info Services LLP",
    description: "Learn how Ctas Info Services LLP uses cookies and web beacons on our website to enhance visitor and client user experiences.",
    url: "https://www.ctasis.com/cookie-policy",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Ctas Info Services LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Ctas Info Services LLP",
    description: "Learn how Ctas Info Services LLP uses cookies and web beacons on our website to enhance visitor and client user experiences.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
