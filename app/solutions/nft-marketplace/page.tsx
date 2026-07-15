import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'NFT Marketplace Development | Web3 & Blockchain Solutions | Ctas Info',
  description: 'Launch your own NFT marketplace. We provide end-to-end Web3 development, smart contract auditing, and secure digital asset trading platforms.',
  keywords: ['NFT marketplace development', 'Web3 developers', 'Blockchain app development', 'Smart contract deployment'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/nft-marketplace',
  },
  openGraph: {
    title: 'NFT Marketplace Development | Web3 & Blockchain Solutions | Ctas Info',
    description: 'Launch your own NFT marketplace. We provide end-to-end Web3 development, smart contract auditing, and secure digital asset trading platforms.',
    url: 'https://www.ctasis.com/solutions/nft-marketplace',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'NFT Marketplace Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFT Marketplace Development | Web3 & Blockchain Solutions | Ctas Info',
    description: 'Launch your own NFT marketplace. We provide end-to-end Web3 development, smart contract auditing, and secure digital asset trading platforms.',
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

export default function NftAppClient() {
  return <Client />;
}
