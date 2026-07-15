import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & GDPR",
  description: "Read the Privacy Policy of Ctas Info Services LLP to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.ctasis.com/privacy-policy",
    languages: {
      "en-US": "https://www.ctasis.com/privacy-policy",
      "en-IN": "https://www.ctasis.com/privacy-policy",
      "x-default": "https://www.ctasis.com/privacy-policy",
    },
  },
  openGraph: {
    title: "Privacy Policy & GDPR",
    description: "Read the Privacy Policy of Ctas Info Services LLP to understand how we collect, use, and protect your personal information.",
    url: "https://www.ctasis.com/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Ctas Info Services LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & GDPR",
    description: "Read the Privacy Policy of Ctas Info Services LLP to understand how we collect, use, and protect your personal information.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
