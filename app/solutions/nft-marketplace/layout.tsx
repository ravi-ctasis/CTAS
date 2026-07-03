import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Marketplace Development Services | Ctas Info",
  description:
    "Ctas develops secure and scalable NFT marketplace platforms: minting, wallets, auctions, smart contracts, and multi-chain support.",
  keywords: [
    "NFT marketplace development",
    "blockchain smart contracts",
    "crypto wallet integration",
    "NFT minting platform",
    "Web3 application services",
    "multi-chain NFT support",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/nft-marketplace",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/nft-marketplace",
      "en-IN": "https://www.ctasis.com/solutions/nft-marketplace",
      "x-default": "https://www.ctasis.com/solutions/nft-marketplace",
    },
  },
  openGraph: {
    title: "Launch a Premiere Web3 & NFT Marketplace | Ctas Info",
    description:
      "Scale your blockchain project with a custom NFT marketplace. Expert smart contract development and multi-chain wallet integrations.",
    url: "https://www.ctasis.com/solutions/nft-marketplace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function NFTMarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
