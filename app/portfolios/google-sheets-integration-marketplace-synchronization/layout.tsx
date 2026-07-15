import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Google Sheets Marketplace Sync | Ctas Info Services",
  description: "Case study on synchronizing marketplace inventory, orders, and pricing records directly with Google Sheets for simple, automated data workflows.",
  keywords: ["Google Sheets integration", "marketplace sync", "inventory management", "automatic spreadsheets update", "order sync data"],
  alternates: {
    canonical: "https://www.ctasis.com/portfolios/google-sheets-integration-marketplace-synchronization",
  },
  openGraph: {
    title: "Google Sheets Marketplace Sync | Ctas Info Services",
    description: "Case study on synchronizing marketplace inventory, orders, and pricing records directly with Google Sheets for simple, automated data workflows.",
    url: "https://www.ctasis.com/portfolios/google-sheets-integration-marketplace-synchronization",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/google-sheets-integration.png",
        width: 1200,
        height: 630,
        alt: "Google Sheets Marketplace Sync | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Sheets Marketplace Sync | Ctas Info Services",
    description: "Case study on synchronizing marketplace inventory, orders, and pricing records directly with Google Sheets for simple, automated data workflows.",
    images: ["https://www.ctasis.com/portfolio-banners/google-sheets-integration.png"],
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
