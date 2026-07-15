import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Ctas Info Services",
  description:
    "Ctas builds scalable, secure, and high-performing online stores that drive sales and customer engagement across all platforms.",
  keywords: [
    "e-commerce solutions",
    "online store development",
    "custom e-commerce platforms",
    "B2B e-commerce development",
    "headless e-commerce",
    "e-commerce consulting services",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/e-commerce",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/e-commerce",
      "en-IN": "https://www.ctasis.com/solutions/e-commerce",
      "x-default": "https://www.ctasis.com/solutions/e-commerce",
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

export default function EcommercePageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
