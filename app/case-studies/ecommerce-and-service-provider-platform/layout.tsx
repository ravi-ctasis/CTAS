import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce & Service Provider Platform | Ctas Info Services",
  description:
    "Ctas develops ecommerce and service provider platforms: product/service listings, payment gateways, and vendor management.",
  keywords: [
    "ecommerce service platform case study",
    "service provider marketplace growth",
    "vendor management system results",
    "custom booking engine success",
    "unified digital commerce platform",
    "B2B2C marketplace development",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/case-studies/ecommerce-and-service-provider-platform",
    languages: {
      "en-US": "https://www.ctasis.com/case-studies/ecommerce-and-service-provider-platform",
      "en-IN": "https://www.ctasis.com/case-studies/ecommerce-and-service-provider-platform",
      "x-default": "https://www.ctasis.com/case-studies/ecommerce-and-service-provider-platform",
    },
  },
  openGraph: {
    title: "Enterprise Ecommerce & Service Provider Success | Ctas Info Services",
    description: "See how we integrated complex service bookings with high-volume retail. A case study in unified digital commerce and vendor management.",
    url: "https://www.ctasis.com/case-studies/ecommerce-and-service-provider-platform",
  },
};

export default function EcommerceServiceProviderPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
