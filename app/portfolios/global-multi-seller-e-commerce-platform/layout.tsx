import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Global Multi-Seller E-Commerce Platform | Ctas Info Services",
    description: "A scalable, user-friendly platform connecting sellers and customers worldwide with intelligent search and listings.",
    keywords: [
        "multi-seller e-commerce platform",
        "global marketplace development",
        "intelligent product search",
        "personalized recommendation engine",
        "optimized product listings tech",
        "international seller platform",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
            "en-IN": "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
            "x-default": "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
        },
    },
    openGraph: {
    title: "Global Multi-Seller E-Commerce Platform | Ctas Info Services",
    description: "A scalable, user-friendly platform connecting sellers and customers worldwide with intelligent search and listings.",
    url: "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/global-multi-seller-e-commerce-platform.webp",
        width: 1200,
        height: 630,
        alt: "Global Multi-Seller E-Commerce Platform | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Multi-Seller E-Commerce Platform | Ctas Info Services",
    description: "A scalable, user-friendly platform connecting sellers and customers worldwide with intelligent search and listings.",
    images: ["https://www.ctasis.com/portfolio-banners/global-multi-seller-e-commerce-platform.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
