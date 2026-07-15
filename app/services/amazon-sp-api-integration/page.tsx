import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Amazon SP-API Integration Services | Automate Selling Partner APIs | Ctas Info',
  description: 'Custom Amazon SP-API integration services. Automate orders, inventory, pricing, and reports seamlessly with your ERP, CRM, or WMS.',
  keywords: ['Amazon SP-API integration', 'Selling Partner API developers', 'Amazon API automation', 'Amazon order sync API'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/amazon-sp-api-integration',
  },
  openGraph: {
    title: 'Amazon SP-API Integration Services | Automate Selling Partner APIs | Ctas Info',
    description: 'Custom Amazon SP-API integration services. Automate orders, inventory, pricing, and reports seamlessly with your ERP, CRM, or WMS.',
    url: 'https://www.ctasis.com/services/amazon-sp-api-integration',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon SP-API Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon SP-API Integration Services | Automate Selling Partner APIs | Ctas Info',
    description: 'Custom Amazon SP-API integration services. Automate orders, inventory, pricing, and reports seamlessly with your ERP, CRM, or WMS.',
    images: ['https://www.ctasis.com/assets/images/logo-icon.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AmazonSpApiClient() {
  return <Client />;
}
