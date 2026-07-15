import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Custom E-Commerce Solutions & Development | Ctas Info',
  description: 'End-to-end e-commerce solutions to scale your online retail business. We build headless commerce architectures, custom carts, and integrations.',
  keywords: ['E-commerce development', 'Headless commerce', 'Custom e-commerce solutions', 'Online store developers'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/e-commerce-solutions',
  },
  openGraph: {
    title: 'Custom E-Commerce Solutions & Development | Ctas Info',
    description: 'End-to-end e-commerce solutions to scale your online retail business. We build headless commerce architectures, custom carts, and integrations.',
    url: 'https://www.ctasis.com/services/e-commerce-solutions',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Custom E-Commerce Solutions & Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom E-Commerce Solutions & Development | Ctas Info',
    description: 'End-to-end e-commerce solutions to scale your online retail business. We build headless commerce architectures, custom carts, and integrations.',
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

export default function EcommerceSolutionsClient() {
  return <Client />;
}
