import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaufland Integration Services | Ctas Info Services',
  description: 'Launch and scale on Kaufland Germany. We provide end-to-end integration: product feed automation, order routing, returns management, and API sync.',
  keywords: ['Kaufland integration', 'Kaufland seller API', 'Sell in Germany', 'Kaufland product feed', 'Kaufland automation'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/kaufland',
  },
  openGraph: {
    title: 'Kaufland Marketplace Integration services | Sell in Germany | Ctas Info Services',
    description: 'Launch and scale on Kaufland Germany. We provide end-to-end integration: product feed automation, order routing, returns management, and API sync.',
    url: 'https://www.ctasis.com/services/kaufland',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Kaufland Integration Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaufland Marketplace Integration services | Sell in Germany | Ctas Info Services',
    description: 'Launch and scale on Kaufland Germany. We provide end-to-end integration: product feed automation, order routing, returns management, and API sync.',
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

import Client from './kauflandClient';

export default function Page() { return <Client />; }
