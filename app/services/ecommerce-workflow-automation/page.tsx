import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'E-Commerce Workflow Automation Services | Ctas Info Services',
  description: 'Automate your e-commerce operations. Streamline order fulfillment, inventory syncing, multi-channel selling, and back-office tasks.',
  keywords: ['E-commerce automation', 'Workflow automation', 'Order management automation', 'Inventory syncing'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/ecommerce-workflow-automation',
  },
  openGraph: {
    title: 'E-Commerce Workflow Automation Services | Ctas Info Services',
    description: 'Automate your e-commerce operations. Streamline order fulfillment, inventory syncing, multi-channel selling, and back-office tasks.',
    url: 'https://www.ctasis.com/services/ecommerce-workflow-automation',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Workflow Automation Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Workflow Automation Services | Ctas Info Services',
    description: 'Automate your e-commerce operations. Streamline order fulfillment, inventory syncing, multi-channel selling, and back-office tasks.',
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

export default function EcommerceWorkflowClient() {
  return <Client />;
}
