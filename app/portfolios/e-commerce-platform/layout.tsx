import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-Commerce Platform | Ctas Info Services",
    description: "A customer-friendly e-commerce platform designed for speed and scalability, delivering a seamless shopping experience.",
    keywords: [
        "e-commerce platform development",
        "scalable shopping software",
        "custom marketplace builder",
        "customer-friendly webshop",
        "high-speed e-commerce tech",
        "robust online selling system",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/e-commerce-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/e-commerce-platform",
            "en-IN": "https://www.ctasis.com/portfolios/e-commerce-platform",
            "x-default": "https://www.ctasis.com/portfolios/e-commerce-platform",
        },
    },
    openGraph: {
        title: "Enterprise-Grade E-Commerce Platform - Case Study | CTAS",
        description: "Drive sales with a lightning-fast, custom e-commerce solution. Explore our scalable platform for modern retail and marketplaces.",
        url: "https://www.ctasis.com/portfolios/e-commerce-platform",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
