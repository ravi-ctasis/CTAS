import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review the terms and conditions for using the website, services, and software tools provided by Ctas Info Services LLP.",
  alternates: {
    canonical: "https://www.ctasis.com/terms",
    languages: {
      "en-US": "https://www.ctasis.com/terms",
      "en-IN": "https://www.ctasis.com/terms",
      "x-default": "https://www.ctasis.com/terms",
    },
  },
  openGraph: {
    title: "Terms and Conditions",
    description: "Review the terms and conditions for using the website, services, and software tools provided by Ctas Info Services LLP.",
    url: "https://www.ctasis.com/terms",
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
    title: "Terms and Conditions",
    description: "Review the terms and conditions for using the website, services, and software tools provided by Ctas Info Services LLP.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
