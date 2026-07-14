import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Custom Development & Integration Services | Ctas Info',
  description: 'Build, scale, and optimize your Shopify store. Expert React/Next.js custom app development, theme optimization, and multi-channel marketplace automation.',
  keywords: ['Shopify development', 'Shopify integration', 'Shopify custom apps', 'Shopify automation', 'e-commerce development'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/shopify',
  },
  openGraph: {
    title: 'Shopify Custom Development & Integration Services | Ctas Info',
    description: 'Build, scale, and optimize your Shopify store. Expert React/Next.js custom app development, theme optimization, and multi-channel marketplace automation.',
    url: 'https://www.ctasis.com/services/shopify',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Shopify Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Custom Development & Integration Services | Ctas Info',
    description: 'Build, scale, and optimize your Shopify store. Expert React/Next.js custom app development, theme optimization, and multi-channel marketplace automation.',
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

import ShopifyClient from './shopifyClient';

export default function Page() {
  return <ShopifyClient />;
}
