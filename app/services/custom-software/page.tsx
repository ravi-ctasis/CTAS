import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Ctas Info Services',
  description: 'Bespoke custom software development tailored to your enterprise requirements. We build secure, high-performance, and scalable digital solutions.',
  keywords: ['Custom software development', 'Bespoke software', 'Enterprise software developers', 'Custom application development'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/custom-software',
  },
  openGraph: {
    title: 'Custom Software Development Services | Ctas Info Services',
    description: 'Bespoke custom software development tailored to your enterprise requirements. We build secure, high-performance, and scalable digital solutions.',
    url: 'https://www.ctasis.com/services/custom-software',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Software Development Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services | Ctas Info Services',
    description: 'Bespoke custom software development tailored to your enterprise requirements. We build secure, high-performance, and scalable digital solutions.',
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

export default function CustomSoftwareClient() {
  return <Client />;
}
