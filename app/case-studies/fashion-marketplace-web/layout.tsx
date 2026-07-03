import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Marketplace Web Development | Case Study | Ctas Info",
  description:
    "Ctas builds fashion marketplace platforms: product catalogs, vendor management, shopping carts, and secure payments.",
  keywords: [
    "fashion marketplace case study",
    "clothing retail web development",
    "multi-vendor fashion platform",
    "fashion catalog management",
    "shopping experience optimization",
    "fashion tech success story",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/case-studies/fashion-marketplace-web",
    languages: {
      "en-US": "https://www.ctasis.com/case-studies/fashion-marketplace-web",
      "en-IN": "https://www.ctasis.com/case-studies/fashion-marketplace-web",
      "x-default": "https://www.ctasis.com/case-studies/fashion-marketplace-web",
    },
  },
  openGraph: {
    title: "Premium Fashion Marketplace Web Solutions - Case Study | Ctas",
    description: "Scale your fashion brand with a high-performance multi-vendor marketplace. Expert developers for the global fashion retail industry.",
    url: "https://www.ctasis.com/case-studies/fashion-marketplace-web",
  },
};

export default function FashionMarketplaceWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
