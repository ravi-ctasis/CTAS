import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon Order Management Automation | Ctas Info Services",
    description: "A next-generation platform that automates Amazon order processing, Seller-Flex handling, and courier integration.",
    keywords: [
        "Amazon order management automation",
        "Seller-Flex handling system",
        "courier API integration",
        "automated fulfillment platform",
        "Amazon seller automation",
        "shipping management software",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
            "en-IN": "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
            "x-default": "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
        },
    },
    openGraph: {
    title: "Amazon Order Management Automation | Ctas Info Services",
    description: "A next-generation platform that automates Amazon order processing, Seller-Flex handling, and courier integration.",
    url: "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/amazon-order-management-automation-system.webp",
        width: 1200,
        height: 630,
        alt: "Amazon Order Management Automation | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Order Management Automation | Ctas Info Services",
    description: "A next-generation platform that automates Amazon order processing, Seller-Flex handling, and courier integration.",
    images: ["https://www.ctasis.com/portfolio-banners/amazon-order-management-automation-system.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
