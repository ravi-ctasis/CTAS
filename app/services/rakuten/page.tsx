import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rakuten Global Integration Services | Japan & France | Ctas Info',
  description: 'Expand your e-commerce globally on Rakuten. We automate RMS storefronts, inventory sync, cross-border order management, and Super Points campaigns.',
  keywords: ['Rakuten integration', 'Rakuten Ichiba API', 'Rakuten RMS', 'sell on Rakuten', 'Rakuten Super Points strategy'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/rakuten',
  },
  openGraph: {
    title: 'Rakuten Global Integration Services | Japan & France | Ctas Info',
    description: 'Expand your e-commerce globally on Rakuten. We automate RMS storefronts, inventory sync, cross-border order management, and Super Points campaigns.',
    url: 'https://www.ctasis.com/services/rakuten',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Rakuten Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakuten Global Integration Services | Japan & France | Ctas Info',
    description: 'Expand your e-commerce globally on Rakuten. We automate RMS storefronts, inventory sync, cross-border order management, and Super Points campaigns.',
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

import Client from './rakutenClient';

export default function Page() { return <Client />; }
