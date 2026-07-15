import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce & SP-API Blog",
  description: "Explore our latest articles on Amazon Selling Partner API, AI automation, and e-commerce growth strategies.",
  keywords: [
    "Amazon SP-API blog",
    "AI automation insights",
    "e-commerce technology blog",
    "marketplace management tips",
    "software development articles",
    "IT services blog",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/blog",
    languages: {
      "en-US": "https://www.ctasis.com/blog",
      "en-IN": "https://www.ctasis.com/blog",
      "x-default": "https://www.ctasis.com/blog",
    },
  },
  openGraph: {
    title: "E-Commerce & Technology Insights Blog | Ctas Info Services",
    description: "Deep dives into Amazon SP-API, Artificial Intelligence, and the future of e-commerce automation.",
    url: "https://www.ctasis.com/blog",
    images: [
      {
        url: "/blog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ctas Info Services Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce & Technology Insights Blog | Ctas Info Services",
    description: "Deep dives into Amazon SP-API, Artificial Intelligence, and the future of e-commerce automation.",
    images: ["/blog-banner.jpg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
