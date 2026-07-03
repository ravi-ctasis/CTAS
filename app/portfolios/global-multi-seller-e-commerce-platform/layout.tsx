import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Global Multi-Seller E-Commerce Platform | Ctas Info",
    description: "A scalable, user-friendly platform connecting sellers and customers worldwide with intelligent search and listings.",
    keywords: [
        "multi-seller e-commerce platform",
        "global marketplace development",
        "intelligent product search",
        "personalized recommendation engine",
        "optimized product listings tech",
        "international seller platform",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
            "en-IN": "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
            "x-default": "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
        },
    },
    openGraph: {
        title: "Global Multi-Seller E-Commerce - Case Study | CTAS",
        description: "Scale your global marketplace with our custom multi-seller platform. Intelligent search and optimized listings for world-class selling.",
        url: "https://www.ctasis.com/portfolios/global-multi-seller-e-commerce-platform",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
