import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Software & AI Case Studies",
    description: "Explore our successful projects: AI, Amazon SP-API, and custom e-commerce solutions that scale businesses.",
    keywords: [
        "CTAS case studies",
        "AI success stories",
        "Amazon SP-API case studies",
        "e-commerce growth examples",
        "digital transformation stories",
        "software development results",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/case-studies",
        languages: {
            "en-US": "https://www.ctasis.com/case-studies",
            "en-IN": "https://www.ctasis.com/case-studies",
            "x-default": "https://www.ctasis.com/case-studies",
        },
    },
    openGraph: {
        title: "CTAS Case Studies | Real-World Digital Transformation Stories",
        description: "See how we help businesses scale with elite AI and e-commerce tech. Real results from real projects across global markets.",
        url: "https://www.ctasis.com/case-studies",
        images: [
            {
                url: "https://www.ctasis.com/logo-icon.webp",
                width: 1200,
                height: 630,
                alt: "Ctas Case Studies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CTAS Case Studies | Real-World Digital Transformation Stories",
        description: "See how we help businesses scale with elite AI and e-commerce tech. Real results from real projects across global markets.",
        images: ["https://www.ctasis.com/logo-icon.webp"],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
