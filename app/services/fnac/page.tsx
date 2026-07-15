import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fnac Marketplace Integration | Ctas Info Services',
  description: 'Automate your Fnac marketplace presence in France, Spain & Portugal. Complete catalog mapping, order sync, and pricing API integration services.',
  keywords: ['Fnac integration', 'Fnac API', 'sell on Fnac', 'France marketplace integration', 'Fnac catalog management'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/fnac',
  },
  openGraph: {
    title: 'Fnac Marketplace Integration | Sell in France & Spain | Ctas Info Services',
    description: 'Automate your Fnac marketplace presence in France, Spain & Portugal. Complete catalog mapping, order sync, and pricing API integration services.',
    url: 'https://www.ctasis.com/services/fnac',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Fnac Integration Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fnac Marketplace Integration | Sell in France & Spain | Ctas Info Services',
    description: 'Automate your Fnac marketplace presence in France, Spain & Portugal. Complete catalog mapping, order sync, and pricing API integration services.',
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

import Client from './fnacClient';

export default function Page() { return <Client />; }
