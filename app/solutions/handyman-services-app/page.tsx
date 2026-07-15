import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Handyman & Home Services App | Ctas Info Services',
  description: 'Develop an on-demand home services marketplace. Connect users with skilled professionals like plumbers, electricians, and cleaners instantly.',
  keywords: ['Handyman app development', 'Home services software', 'On-demand service app', 'Urban Company clone'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/handyman-services-app',
  },
  openGraph: {
    title: 'Handyman & Home Services App Development | Ctas Info Services',
    description: 'Develop an on-demand home services marketplace. Connect users with skilled professionals like plumbers, electricians, and cleaners instantly.',
    url: 'https://www.ctasis.com/solutions/handyman-services-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Handyman & Home Services App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman & Home Services App Development | Ctas Info Services',
    description: 'Develop an on-demand home services marketplace. Connect users with skilled professionals like plumbers, electricians, and cleaners instantly.',
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

export default function HandymanAppClient() {
  return <Client />;
}
