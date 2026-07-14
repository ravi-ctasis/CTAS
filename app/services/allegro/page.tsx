import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allegro Marketplace Integration | E-commerce in Poland | Ctas Info',
  description: 'Dominate Poland with expert Allegro API integration. Automate offers, order fulfillment, InPost logistics, and Polish VAT invoicing compliantly.',
  keywords: ['Allegro integration', 'Allegro API', 'sell on Allegro', 'Poland marketplace', 'Allegro Smart integration'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/allegro',
  },
  openGraph: {
    title: 'Allegro Marketplace Integration | E-commerce in Poland | Ctas Info',
    description: 'Dominate Poland with expert Allegro API integration. Automate offers, order fulfillment, InPost logistics, and Polish VAT invoicing compliantly.',
    url: 'https://www.ctasis.com/services/allegro',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Allegro Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allegro Marketplace Integration | E-commerce in Poland | Ctas Info',
    description: 'Dominate Poland with expert Allegro API integration. Automate offers, order fulfillment, InPost logistics, and Polish VAT invoicing compliantly.',
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

import Client from './allegroClient';

export default function Page() { return <Client />; }
