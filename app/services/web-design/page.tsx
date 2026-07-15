import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Professional Web Design Services | Responsive & Modern | Ctas Info',
  description: 'Cutting-edge web design services tailored to your brand. We design responsive, accessible, and fast-loading websites that convert.',
  keywords: ['Web design services', 'Responsive web design', 'Corporate website design', 'Modern web design'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/web-design',
  },
  openGraph: {
    title: 'Professional Web Design Services | Responsive & Modern | Ctas Info',
    description: 'Cutting-edge web design services tailored to your brand. We design responsive, accessible, and fast-loading websites that convert.',
    url: 'https://www.ctasis.com/services/web-design',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Web Design Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Services | Responsive & Modern | Ctas Info',
    description: 'Cutting-edge web design services tailored to your brand. We design responsive, accessible, and fast-loading websites that convert.',
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

export default function WebDesignClient() {
  return <Client />;
}
