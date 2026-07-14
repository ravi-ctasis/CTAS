import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worten Marketplace Integration | Iberian E-commerce | Ctas Info',
  description: 'Automate your sales on Worten Portugal & Spain. Mirakl-based API integration for catalog sync, live inventory management, and order routing.',
  keywords: ['Worten integration', 'Worten Mirakl API', 'sell on Worten', 'Iberian marketplace', 'Worten automation'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/worten',
  },
  openGraph: {
    title: 'Worten Marketplace Integration | Iberian E-commerce | Ctas Info',
    description: 'Automate your sales on Worten Portugal & Spain. Mirakl-based API integration for catalog sync, live inventory management, and order routing.',
    url: 'https://www.ctasis.com/services/worten',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Worten Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Worten Marketplace Integration | Iberian E-commerce | Ctas Info',
    description: 'Automate your sales on Worten Portugal & Spain. Mirakl-based API integration for catalog sync, live inventory management, and order routing.',
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

import Client from './wortenClient';

export default function Page() { return <Client />; }
