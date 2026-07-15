import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bookstore – Online E-Commerce Shop | Ctas Info Services",
    description: "A dedicated online bookstore offering an extensive collection of English books, optimized for discovery and purchase in the EU.",
    keywords: [
        "online bookstore development",
        "e-commerce for books",
        "English book shop EU",
        "custom webshop for authors",
        "literary marketplace builder",
        "digital book discovery platform",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/book-store",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/book-store",
            "en-IN": "https://www.ctasis.com/portfolios/book-store",
            "x-default": "https://www.ctasis.com/portfolios/book-store",
        },
    },
    openGraph: {
        title: "Modern Online Bookstore & E-commerce Solution | CTAS",
        description: "Experience seamless book discovery and shopping. Our custom e-commerce solution for the literary and publishing industry.",
        url: "https://www.ctasis.com/portfolios/book-store",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
