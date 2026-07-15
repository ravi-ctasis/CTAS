import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'DevOps & CI/CD Automation Services | Ctas Info Services',
  description: 'Accelerate your software delivery with advanced DevOps consulting. We implement secure CI/CD pipelines, containerization, and infrastructure as code.',
  keywords: ['DevOps services', 'CI/CD pipelines', 'Docker deployment', 'Kubernetes management', 'DevOps consulting'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/devops',
  },
  openGraph: {
    title: 'DevOps & CI/CD Automation Services | Ctas Info Services',
    description: 'Accelerate your software delivery with advanced DevOps consulting. We implement secure CI/CD pipelines, containerization, and infrastructure as code.',
    url: 'https://www.ctasis.com/services/devops',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'DevOps & CI/CD Automation Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps & CI/CD Automation Services | Ctas Info Services',
    description: 'Accelerate your software delivery with advanced DevOps consulting. We implement secure CI/CD pipelines, containerization, and infrastructure as code.',
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

export default function DevopsClient() {
  return <Client />;
}
