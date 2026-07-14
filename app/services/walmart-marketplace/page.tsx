import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walmart Marketplace Integration & WFS Automation | Ctas Info',
  description: 'Certified Walmart API integration. Seamlessly sync item specs, inventory, orders, and fully automate Walmart Fulfillment Services (WFS).',
  keywords: ['Walmart marketplace integration', 'Walmart API', 'WFS automation', 'Walmart seller integration', 'Walmart item spec'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/walmart-marketplace',
  },
  openGraph: {
    title: 'Walmart Marketplace Integration & WFS Automation | Ctas Info',
    description: 'Certified Walmart API integration. Seamlessly sync item specs, inventory, orders, and fully automate Walmart Fulfillment Services (WFS).',
    url: 'https://www.ctasis.com/services/walmart-marketplace',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Walmart Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walmart Marketplace Integration & WFS Automation | Ctas Info',
    description: 'Certified Walmart API integration. Seamlessly sync item specs, inventory, orders, and fully automate Walmart Fulfillment Services (WFS).',
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

import Client from './walmartClient';

export default function Page() { return <Client />; }
