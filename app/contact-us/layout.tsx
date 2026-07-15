import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ctas Info Services",
  description:
    "Get expert consultation on web development, AI solutions, e-commerce, and custom software. Quick response guaranteed.",
  keywords:
    "contact Ctas, get in touch, project consultation, web development consultation, AI solutions consultation, e-commerce development, custom software development, Ctas contact",
  alternates: {
    canonical: "https://www.ctasis.com/contact-us",
    languages: {
      "en-US": "https://www.ctasis.com/contact-us",
      "en-IN": "https://www.ctasis.com/contact-us",
      "x-default": "https://www.ctasis.com/contact-us",
    },
  },
  openGraph: {
    title: "Get In Touch | Ctas Info Services LLP",
    description:
      "Contact Ctas Info Services LLP for your next project. Get expert consultation on web development, AI solutions, e-commerce development, and custom software solutions.",
    type: "website",
    url: "https://www.ctasis.com/contact-us",
    images: [
      {
        url: "https://www.ctasis.com/assets/images/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Contact Ctas Info Services LLP",
      },
    ],
    siteName: "Ctas Info Services LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get In Touch | Ctas Info Services LLP",
    description:
      "Contact Ctas Info Services LLP for your next project. Get expert consultation on web development, AI solutions, e-commerce development, and custom software solutions.",
    images: ["https://www.ctasis.com/assets/images/logo-icon.webp"],
    site: "@ctasinfoservices",
  },
};

export default function ContactusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
