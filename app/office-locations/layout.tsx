import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Office & Contact Details",
    description:
        "Visit our offices in India. We are headquartered in Ahmedabad, delivering global IT solutions, AI services, and e-commerce automation.",
    alternates: {
        canonical: "https://www.ctasis.com/office-locations",
        languages: {
            "en-US": "https://www.ctasis.com/office-locations",
            "en-IN": "https://www.ctasis.com/office-locations",
            "x-default": "https://www.ctasis.com/office-locations",
        },
    },
    openGraph: {
        title: "Our Office & Contact Details",
        description: "Visit our offices in India. We are headquartered in Ahmedabad, delivering global IT solutions, AI services, and e-commerce automation.",
        url: "https://www.ctasis.com/office-locations",
        type: "website",
        images: [
            {
                url: "https://www.ctasis.com/logo-icon.webp",
                width: 1200,
                height: 630,
                alt: "Our Office & Contact Details",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Office & Contact Details",
        description: "Visit our offices in India. We are headquartered in Ahmedabad, delivering global IT solutions, AI services, and e-commerce automation.",
        images: ["https://www.ctasis.com/logo-icon.webp"],
    },
};

export default function OfficeLocationsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
