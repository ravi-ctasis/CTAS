import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Return Operations & Refund Automation System | Ctas Info",
    description: "A comprehensive platform for managing Amazon returns, real-time scanning, and refund automation.",
    keywords: [
        "return management automation",
        "refund automation system",
        "Amazon Safe-T claim tracking",
        "reimbursement tracking software",
        "return trend analysis tool",
        "automated package scanning",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
            "en-IN": "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
            "x-default": "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
        },
    },
    openGraph: {
        title: "Advanced Return & Refund Automation System | CTAS",
        description: "Optimise your Amazon return operations. Automated Safe-T claims and refund tracking for elite e-commerce sellers.",
        url: "https://www.ctasis.com/portfolios/return-and-refund-automation-system",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
