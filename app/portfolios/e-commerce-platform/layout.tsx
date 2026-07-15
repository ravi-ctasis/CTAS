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
    title: "E-Commerce Platform | Ctas Info Services",
    description: "A customer-friendly e-commerce platform designed for speed and scalability, delivering a seamless shopping experience.",
    url: "https://www.ctasis.com/portfolios/e-commerce-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/e-commerce-platform.webp",
        width: 1200,
        height: 630,
        alt: "E-Commerce Platform | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Platform | Ctas Info Services",
    description: "A customer-friendly e-commerce platform designed for speed and scalability, delivering a seamless shopping experience.",
    images: ["https://www.ctasis.com/portfolio-banners/e-commerce-platform.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
