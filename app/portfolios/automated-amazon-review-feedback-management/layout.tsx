import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon Review Feedback Management | Ctas Info Services",
    description: "Automates Amazon customer review requests and feedback management to enhance customer satisfaction and seller reputation.",
    keywords: [
        "Amazon review automation",
        "feedback management software",
        "customer satisfaction tracking",
        "Amazon seller reputation tool",
        "automated review request system",
        "seller feedback analytics",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/automated-amazon-review-feedback-management",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/automated-amazon-review-feedback-management",
            "en-IN": "https://www.ctasis.com/portfolios/automated-amazon-review-feedback-management",
            "x-default": "https://www.ctasis.com/portfolios/automated-amazon-review-feedback-management",
        },
    },
    openGraph: {
        title: "Amazon Review & Feedback Management Automation | CTAS",
        description: "Boost your Amazon seller rating with automated feedback management. Scale your customer service with data-driven insights.",
        url: "https://www.ctasis.com/portfolios/automated-amazon-review-feedback-management",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
