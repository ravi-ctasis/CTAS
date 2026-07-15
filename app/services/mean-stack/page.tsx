import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'MEAN Stack Development Services | Ctas Info Services',
  description: 'Build fast, scalable web applications with our expert MEAN stack developers. Robust solutions using MongoDB, Express.js, Angular, and Node.js.',
  keywords: ['MEAN stack development', 'Angular developers', 'Node.js development', 'MEAN full stack'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/mean-stack',
  },
  openGraph: {
    title: 'MEAN Stack Development Services | MongoDB, Express, Angular, Node | Ctas Info Services',
    description: 'Build fast, scalable web applications with our expert MEAN stack developers. Robust solutions using MongoDB, Express.js, Angular, and Node.js.',
    url: 'https://www.ctasis.com/services/mean-stack',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'MEAN Stack Development Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEAN Stack Development Services | MongoDB, Express, Angular, Node | Ctas Info Services',
    description: 'Build fast, scalable web applications with our expert MEAN stack developers. Robust solutions using MongoDB, Express.js, Angular, and Node.js.',
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

export default function MeanStackClient() {
  return <Client />;
}
