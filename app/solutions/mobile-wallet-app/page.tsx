import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Mobile Wallet & FinTech App Development | Secure Payments | Ctas Info',
  description: 'Secure FinTech app solutions. We build robust mobile wallets, P2P payment applications, and crypto-integrated financial platforms.',
  keywords: ['Mobile wallet app', 'FinTech app development', 'P2P payment software', 'Secure payment gateway integration'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/mobile-wallet-app',
  },
  openGraph: {
    title: 'Mobile Wallet & FinTech App Development | Secure Payments | Ctas Info',
    description: 'Secure FinTech app solutions. We build robust mobile wallets, P2P payment applications, and crypto-integrated financial platforms.',
    url: 'https://www.ctasis.com/solutions/mobile-wallet-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile Wallet & FinTech App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Wallet & FinTech App Development | Secure Payments | Ctas Info',
    description: 'Secure FinTech app solutions. We build robust mobile wallets, P2P payment applications, and crypto-integrated financial platforms.',
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

export default function WalletAppClient() {
  return <Client />;
}
