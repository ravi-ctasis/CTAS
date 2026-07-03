import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Office Locations | Ctas Info Services LLP",
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
};

export default function OfficeLocationsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
