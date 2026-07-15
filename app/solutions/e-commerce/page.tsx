import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'E-Commerce App & Web Solutions | Scalable Retail Platforms | Ctas Info',
  description: 'Next-generation e-commerce solutions. We build secure, high-traffic retail apps and web platforms with advanced cart and checkout architectures.',
  keywords: ['E-commerce app development', 'Retail software solutions', 'Custom shopping cart', 'B2C e-commerce platform'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/e-commerce',
  },
  openGraph: {
    title: 'E-Commerce App & Web Solutions | Scalable Retail Platforms | Ctas Info',
    description: 'Next-generation e-commerce solutions. We build secure, high-traffic retail apps and web platforms with advanced cart and checkout architectures.',
    url: 'https://www.ctasis.com/solutions/e-commerce',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'E-Commerce App & Web Solutions by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce App & Web Solutions | Scalable Retail Platforms | Ctas Info',
    description: 'Next-generation e-commerce solutions. We build secure, high-traffic retail apps and web platforms with advanced cart and checkout architectures.',
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

export default function EcommerceSolClient() {
  return <Client />;
}
