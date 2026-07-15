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
    title: "Bookstore – Online E-Commerce Shop | Ctas Info Services",
    description: "A dedicated online bookstore offering an extensive collection of English books, optimized for discovery and purchase in the EU.",
    url: "https://www.ctasis.com/portfolios/book-store",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/book-store.webp",
        width: 1200,
        height: 630,
        alt: "Bookstore – Online E-Commerce Shop | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookstore – Online E-Commerce Shop | Ctas Info Services",
    description: "A dedicated online bookstore offering an extensive collection of English books, optimized for discovery and purchase in the EU.",
    images: ["https://www.ctasis.com/portfolio-banners/book-store.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
