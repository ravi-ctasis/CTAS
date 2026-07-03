import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inspection Management Web System | Portfolios | Ctas Info",
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
        title: "Inspection Management & Reporting Automation | CTAS",
        description: "Streamline field operations with our inspection management system. Real-time sync and automated reports for quality control.",
        url: "https://www.ctasis.com/portfolios/inspection-management-web-system",
    },
};

export default function InspectionManagementWebSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
