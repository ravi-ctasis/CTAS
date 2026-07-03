import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Wallet App Development Services | Ctas Info",
  description:
    "Ctas provides secure mobile wallet app development: UPI integration, digital payments, money transfers, and QR scanning.",
  keywords: [
    "mobile wallet app development",
    "fintech application security",
    "digital payment solutions",
    "UPI integration services",
    "contactless payment apps",
    "QR code payment processing",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/mobile-wallet-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/mobile-wallet-app",
      "en-IN": "https://www.ctasis.com/solutions/mobile-wallet-app",
      "x-default": "https://www.ctasis.com/solutions/mobile-wallet-app",
    },
  },
  openGraph: {
    title: "Secure & Scalable Mobile Wallet Development | Ctas",
    description:
      "Build a high-security mobile wallet with UPI and digital payment integrations. Expert fintech developers for modern payment solutions.",
    url: "https://www.ctasis.com/solutions/mobile-wallet-app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function MobileWalletAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
