import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Return Operations & Refund Automation | Ctas Info Services",
    description: "A comprehensive platform for managing Amazon returns, real-time scanning, and refund automation.",
    keywords: [
        "return management automation",
        "refund automation system",
        "Amazon Safe-T claim tracking",
        "reimbursement tracking software",
        "return trend analysis tool",
        "automated package scanning",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
            "en-IN": "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
            "x-default": "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
        },
    },
    openGraph: {
    title: "Return Operations & Refund Automation | Ctas Info Services",
    description: "A comprehensive platform for managing Amazon returns, real-time scanning, and refund automation.",
    url: "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/return-and-refund-automation-system.webp",
        width: 1200,
        height: 630,
        alt: "Return Operations & Refund Automation | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Return Operations & Refund Automation | Ctas Info Services",
    description: "A comprehensive platform for managing Amazon returns, real-time scanning, and refund automation.",
    images: ["https://www.ctasis.com/portfolio-banners/return-and-refund-automation-system.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
