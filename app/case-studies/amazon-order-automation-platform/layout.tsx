import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Order Automation Case Study | Ctas Info Services",
  description:
    "Ctas provides Amazon order automation solutions: streamline order processing, inventory updates, and reporting.",
  keywords: [
    "Amazon order automation case study",
    "seller central automation solutions",
    "automated order processing systems",
    "inventory sync for Amazon sellers",
    "Amazon repricing automation results",
    "e-commerce marketplace scaling",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/case-studies/amazon-order-automation-platform",
    languages: {
      "en-US": "https://www.ctasis.com/case-studies/amazon-order-automation-platform",
      "en-IN": "https://www.ctasis.com/case-studies/amazon-order-automation-platform",
      "x-default": "https://www.ctasis.com/case-studies/amazon-order-automation-platform",
    },
  },
  openGraph: {
    title: "Amazon Order Automation Case Study | Ctas Info Services",
    description: "Ctas provides Amazon order automation solutions: streamline order processing, inventory updates, and reporting.",
    url: "https://www.ctasis.com/case-studies/amazon-order-automation-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/amazon-auto-ordering-order-management.webp",
        width: 1200,
        height: 630,
        alt: "Amazon Order Automation Case Study | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Order Automation Case Study | Ctas Info Services",
    description: "Ctas provides Amazon order automation solutions: streamline order processing, inventory updates, and reporting.",
    images: ["https://www.ctasis.com/amazon-auto-ordering-order-management.webp"],
  },
};

export default function AmazonOrderAutomationPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
