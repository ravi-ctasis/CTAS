import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Enterprise Cloud Solutions & Migration Services | Ctas Info',
  description: 'Modernize your infrastructure with secure cloud computing solutions. We offer AWS, Azure, and Google Cloud deployment, migration, and management.',
  keywords: ['Cloud solutions provider', 'Cloud migration services', 'AWS deployment', 'Azure management', 'Enterprise cloud computing'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/cloud-solutions',
  },
  openGraph: {
    title: 'Enterprise Cloud Solutions & Migration Services | Ctas Info',
    description: 'Modernize your infrastructure with secure cloud computing solutions. We offer AWS, Azure, and Google Cloud deployment, migration, and management.',
    url: 'https://www.ctasis.com/services/cloud-solutions',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Enterprise Cloud Solutions & Migration Services by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Cloud Solutions & Migration Services | Ctas Info',
    description: 'Modernize your infrastructure with secure cloud computing solutions. We offer AWS, Azure, and Google Cloud deployment, migration, and management.',
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

export default function CloudSolutionsClient() {
  return <Client />;
}
