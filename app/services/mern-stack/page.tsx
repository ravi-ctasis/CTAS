import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'MERN Stack Development Services | React & Node.js Experts | Ctas Info',
  description: 'High-performance web apps built with the MERN stack. We leverage MongoDB, Express.js, React, and Node.js for modern, responsive digital products.',
  keywords: ['MERN stack development', 'React.js developers', 'Node.js backend', 'MERN full stack', 'Custom web apps'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/mern-stack',
  },
  openGraph: {
    title: 'MERN Stack Development Services | React & Node.js Experts | Ctas Info',
    description: 'High-performance web apps built with the MERN stack. We leverage MongoDB, Express.js, React, and Node.js for modern, responsive digital products.',
    url: 'https://www.ctasis.com/services/mern-stack',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'MERN Stack Development Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MERN Stack Development Services | React & Node.js Experts | Ctas Info',
    description: 'High-performance web apps built with the MERN stack. We leverage MongoDB, Express.js, React, and Node.js for modern, responsive digital products.',
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

export default function MernStackClient() {
  return <Client />;
}
