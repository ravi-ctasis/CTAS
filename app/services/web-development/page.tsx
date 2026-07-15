import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Custom Web Development Services | Ctas Info Services',
  description: 'Full-cycle custom web development services. We engineer secure, scalable, and complex web applications using the latest web technologies.',
  keywords: ['Web development services', 'Custom web applications', 'Enterprise web developers', 'Full stack development'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/web-development',
  },
  openGraph: {
    title: 'Custom Web Development Services | Enterprise Web Apps | Ctas Info Services',
    description: 'Full-cycle custom web development services. We engineer secure, scalable, and complex web applications using the latest web technologies.',
    url: 'https://www.ctasis.com/services/web-development',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Web Development Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Development Services | Enterprise Web Apps | Ctas Info Services',
    description: 'Full-cycle custom web development services. We engineer secure, scalable, and complex web applications using the latest web technologies.',
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

export default function WebDevClient() {
  return <Client />;
}
