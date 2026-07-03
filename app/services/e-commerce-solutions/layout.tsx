import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Solutions | Store Development & Automation",
  description:
    "End-to-end e-commerce development by Ctas: marketplaces, custom stores, payment integration, logistics, and workflow automation.",
  keywords: [
    "e-commerce development services",
    "multi-vendor marketplace solutions",
    "payment gateway integration",
    "e-commerce logistics automation",
    "custom online store builders",
    "B2B e-commerce platforms",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/e-commerce-solutions",
    languages: {
      "en-US": "https://www.ctasis.com/services/e-commerce-solutions",
      "en-IN": "https://www.ctasis.com/services/e-commerce-solutions",
      "x-default": "https://www.ctasis.com/services/e-commerce-solutions",
    },
  },
  openGraph: {
    title: "All-in-One E-commerce Development & Automation Hub | Ctas",
    description: "Build, automate, and scale your online business. Expert developers for custom stores and global marketplaces.",
    url: "https://www.ctasis.com/services/e-commerce-solutions",
  },
};

export default function EcommerceSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
