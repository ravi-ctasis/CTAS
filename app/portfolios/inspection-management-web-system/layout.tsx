import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inspection Management Web System | Ctas Info Services",
    description:
        "A centralized inspection management platform for real-time and offline operations, report generation, and data synchronization.",
    keywords: [
        "inspection management system",
        "offline data synchronization",
        "automated report generation",
        "centralized inspection platform",
        "real-time data handling",
        "attachment management software",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/inspection-management-web-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/inspection-management-web-system",
            "en-IN": "https://www.ctasis.com/portfolios/inspection-management-web-system",
            "x-default": "https://www.ctasis.com/portfolios/inspection-management-web-system",
        },
    },
    openGraph: {
    title: "Inspection Management Web System | Ctas Info Services",
    description: "A centralized inspection management platform for real-time and offline operations, report generation, and data synchronization.",
    url: "https://www.ctasis.com/portfolios/inspection-management-web-system",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/inspection-management-web-system.webp",
        width: 1200,
        height: 630,
        alt: "Inspection Management Web System | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection Management Web System | Ctas Info Services",
    description: "A centralized inspection management platform for real-time and offline operations, report generation, and data synchronization.",
    images: ["https://www.ctasis.com/portfolio-banners/inspection-management-web-system.webp"],
  },
};

export default function InspectionManagementWebSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
