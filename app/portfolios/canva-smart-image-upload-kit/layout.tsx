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
    title: "Canva Smart Image Upload Kit | Ctas Info Services",
    description: "Automates fetching, processing, and rendering of order images into structured Canva grids for Amazon sellers.",
    url: "https://www.ctasis.com/portfolios/canva-smart-image-upload-kit",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/canva-smart-image-upload-kit.webp",
        width: 1200,
        height: 630,
        alt: "Canva Smart Image Upload Kit | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canva Smart Image Upload Kit | Ctas Info Services",
    description: "Automates fetching, processing, and rendering of order images into structured Canva grids for Amazon sellers.",
    images: ["https://www.ctasis.com/portfolio-banners/canva-smart-image-upload-kit.webp"],
  },
};

export default function CanvaSmartImageUploadKitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
