import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon Order Management & Automation System | Ctas Info",
    description: "A next-generation platform that automates Amazon order processing, Seller-Flex handling, and courier integration.",
    keywords: [
        "Amazon order management automation",
        "Seller-Flex handling system",
        "courier API integration",
        "automated fulfillment platform",
        "Amazon seller automation",
        "shipping management software",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
            "en-IN": "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
            "x-default": "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
        },
    },
    openGraph: {
        title: "Amazon Order Management Automation - Case Study | CTAS",
        description: "Scale your Amazon sales with automated order processing and Seller-Flex handling. Seamless courier and shipping integrations.",
        url: "https://www.ctasis.com/portfolios/amazon-order-management-automation-system",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
