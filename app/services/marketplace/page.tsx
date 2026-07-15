import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Marketplace Development & Integration Services | Ctas Info',
  description: 'Build your own multi-vendor marketplace or integrate with global platforms. We craft complex marketplace architectures for B2B and B2C.',
  keywords: ['Marketplace development', 'Multi-vendor platform', 'Marketplace integration', 'B2B marketplace software'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/marketplace',
  },
  openGraph: {
    title: 'Marketplace Development & Integration Services | Ctas Info',
    description: 'Build your own multi-vendor marketplace or integrate with global platforms. We craft complex marketplace architectures for B2B and B2C.',
    url: 'https://www.ctasis.com/services/marketplace',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Marketplace Development & Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketplace Development & Integration Services | Ctas Info',
    description: 'Build your own multi-vendor marketplace or integrate with global platforms. We craft complex marketplace architectures for B2B and B2C.',
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

export default function MarketplaceDevClient() {
  return <Client />;
}
