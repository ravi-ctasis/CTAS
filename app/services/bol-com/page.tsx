import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bol.com Integration & Automation | Ctas Info Services',
  description: 'Expert Bol.com integration services for Netherlands & Belgium. Automate product listings, inventory sync, order fulfillment, and dynamic repricing.',
  keywords: ['Bol.com integration', 'Bol.com API', 'Bol.com seller automation', 'Netherlands marketplace', 'Bol.com repricing'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/bol-com',
  },
  openGraph: {
    title: 'Bol.com Integration & Automation Services | Grow in Benelux | Ctas Info Services',
    description: 'Expert Bol.com integration services for Netherlands & Belgium. Automate product listings, inventory sync, order fulfillment, and dynamic repricing.',
    url: 'https://www.ctasis.com/services/bol-com',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Bol.com Integration Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bol.com Integration & Automation Services | Grow in Benelux | Ctas Info Services',
    description: 'Expert Bol.com integration services for Netherlands & Belgium. Automate product listings, inventory sync, order fulfillment, and dynamic repricing.',
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

import Client from './bolcomClient';

export default function Page() { return <Client />; }
