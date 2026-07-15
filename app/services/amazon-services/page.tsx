import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Amazon Marketplace Management Services | Ctas Info',
  description: 'Expert Amazon marketplace management. Optimize product listings, manage inventory, and scale your sales with our comprehensive Amazon seller services.',
  keywords: ['Amazon seller services', 'Amazon marketplace management', 'Amazon FBA automation', 'Amazon listing optimization'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/amazon-services',
  },
  openGraph: {
    title: 'Amazon Marketplace Management Services | Ctas Info',
    description: 'Expert Amazon marketplace management. Optimize product listings, manage inventory, and scale your sales with our comprehensive Amazon seller services.',
    url: 'https://www.ctasis.com/services/amazon-services',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Marketplace Management Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Marketplace Management Services | Ctas Info',
    description: 'Expert Amazon marketplace management. Optimize product listings, manage inventory, and scale your sales with our comprehensive Amazon seller services.',
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

export default function AmazonServicesClient() {
  return <Client />;
}
