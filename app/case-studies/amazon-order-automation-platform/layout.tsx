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
    title: "Streamlined Amazon Order Automation - Case Study | Ctas Info Services",
    description: "Learn how we revolutionized order processing and inventory updates for high-volume Amazon sellers. Real-time automation results.",
    url: "https://www.ctasis.com/case-studies/amazon-order-automation-platform",
  },
};

export default function AmazonOrderAutomationPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
