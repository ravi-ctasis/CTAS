import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Canva Smart Image Upload Kit | Ctas Info Services",
    description:
        "Automates fetching, processing, and rendering of order images into structured Canva grids for Amazon sellers.",
    keywords: [
        "Canva automation tool",
        "smart image upload kit",
        "automated image processing",
        "Amazon seller image tool",
        "custom design automation",
        "graphic workflow optimization",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/canva-smart-image-upload-kit",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/canva-smart-image-upload-kit",
            "en-IN": "https://www.ctasis.com/portfolios/canva-smart-image-upload-kit",
            "x-default": "https://www.ctasis.com/portfolios/canva-smart-image-upload-kit",
        },
    },
    openGraph: {
        title: "Automated Canva Workflow & Image Upload Kit | CTAS",
        description: "Drastically reduce design time with our smart Canva integration. Auto-process and grid images for high-volume Amazon selling.",
        url: "https://www.ctasis.com/portfolios/canva-smart-image-upload-kit",
    },
};

export default function CanvaSmartImageUploadKitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
