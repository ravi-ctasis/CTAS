import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our E-Commerce & Tech Projects",
  description: "Explore our diverse portfolio of cutting-edge projects including Amazon SP-API integrations, AI web solutions, and e-commerce platforms.",
  keywords: [
    "Ctas portfolio",
    "web development projects",
    "AI software case studies",
    "Amazon SP-API projects",
    "e-commerce automation portfolio",
    "enterprise software examples",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/portfolios",
    languages: {
      "en-US": "https://www.ctasis.com/portfolios",
      "en-IN": "https://www.ctasis.com/portfolios",
      "x-default": "https://www.ctasis.com/portfolios",
    },
  },
  openGraph: {
    title: "Our E-Commerce & Tech Projects",
    description: "Explore our diverse portfolio of cutting-edge projects including Amazon SP-API integrations, AI web solutions, and e-commerce platforms.",
    url: "https://www.ctasis.com/portfolios",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Our E-Commerce & Tech Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our E-Commerce & Tech Projects",
    description: "Explore our diverse portfolio of cutting-edge projects including Amazon SP-API integrations, AI web solutions, and e-commerce platforms.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function PortfoliosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
