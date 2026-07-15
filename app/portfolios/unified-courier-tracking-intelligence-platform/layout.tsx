import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Unified Courier Tracking Platform | Ctas Info Services",
    description: "A unified platform for tracking and managing multi-partner courier operations with real-time intelligence.",
    keywords: [
        "unified courier tracking",
        "logistics intelligence platform",
        "multi-partner courier management",
        "real-time delivery tracking tool",
        "automated courier sync",
        "shipping operations software",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/unified-courier-tracking-intelligence-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/unified-courier-tracking-intelligence-platform",
            "en-IN": "https://www.ctasis.com/portfolios/unified-courier-tracking-intelligence-platform",
            "x-default": "https://www.ctasis.com/portfolios/unified-courier-tracking-intelligence-platform",
        },
    },
    openGraph: {
        title: "Unified Courier Tracking & Logistics Intelligence | CTAS",
        description: "Scale your logistics with real-time tracking across multiple courier partners. Explore our unified intelligence platform.",
        url: "https://www.ctasis.com/portfolios/unified-courier-tracking-intelligence-platform",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
