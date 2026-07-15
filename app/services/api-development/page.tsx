import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Custom API Development & Integration Services | Ctas Info',
  description: 'Secure, scalable custom API development and third-party integration services. We build robust microservices and REST/GraphQL architectures.',
  keywords: ['Custom API development', 'API integration services', 'REST API developers', 'GraphQL development', 'Microservices architecture'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/api-development',
  },
  openGraph: {
    title: 'Custom API Development & Integration Services | Ctas Info',
    description: 'Secure, scalable custom API development and third-party integration services. We build robust microservices and REST/GraphQL architectures.',
    url: 'https://www.ctasis.com/services/api-development',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Custom API Development & Integration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom API Development & Integration Services | Ctas Info',
    description: 'Secure, scalable custom API development and third-party integration services. We build robust microservices and REST/GraphQL architectures.',
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

export default function ApiDevClient() {
  return <Client />;
}
