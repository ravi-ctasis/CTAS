import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services | Web Dev, AI & E-commerce | Ctas Info",
  description:
    "Comprehensive IT services: web development, mobile apps, AI/ML solutions, cloud computing, DevOps, UI/UX design, and e-commerce solutions.",
  keywords: [
    "AI/ML Development Services",
    "Amazon SP-API Integration",
    " Cloud Computing Solutions",
    "DevOps Consulting",
    "Web Development",
    "Mobile App Development",
    "E-commerce Automation",
    "Custom IT Services",
    "Software Development",
    "AI-Powered Web Solutions",
    "Amazon API development services"
  ],

  alternates: {
    canonical: "https://www.ctasis.com/services",
    languages: {
      "en-US": "https://www.ctasis.com/services",
      "en-IN": "https://www.ctasis.com/services",
      "x-default": "https://www.ctasis.com/services",
    },
  },
  openGraph: {
    title: "AI, SP-API & Web Development Services | Ctas Info",
    description:
      "Ctas Info Services LLP delivers AI/ML, Amazon SP-API, cloud, DevOps, web & mobile apps, and e-commerce automation for global business growth.",
    type: "website",
    url: "https://www.ctasis.com/services",
    images: [
      {
        url: "https://www.ctasis.com/assets/images/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Ctas Info Services LLP Comprehensive IT Services",
      },
    ],
    siteName: "Ctas Info Services LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, SP-API & Web Development Services | Ctas Info",
    description:
      "Ctas Info Services LLP delivers AI/ML, Amazon SP-API, cloud, DevOps, web & mobile apps, and e-commerce automation for global business growth.",
    images: ["https://www.ctasis.com/assets/images/logo-icon.webp"],
    site: "@ctasinfoservices",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
