import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marketplace API Integration (MCP) | Ctas Info Services",
  description: "Case study on building an AI-powered marketplace integration using Model Context Protocol (MCP) to automate API communication.",
  keywords: ["AI marketplace integration", "Model Context Protocol", "MCP integration", "API automation", "e-commerce AI solutions"],
  alternates: {
    canonical: "https://www.ctasis.com/portfolios/ai-powered-marketplace-api-integration-mcp",
  },
  openGraph: {
    title: "Marketplace API Integration (MCP) | Ctas Info Services",
    description: "Case study on building an AI-powered marketplace integration using Model Context Protocol (MCP) to automate API communication.",
    url: "https://www.ctasis.com/portfolios/ai-powered-marketplace-api-integration-mcp",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/mcp-api-integration.png",
        width: 1200,
        height: 630,
        alt: "Marketplace API Integration (MCP) | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace API Integration (MCP) | Ctas Info Services",
    description: "Case study on building an AI-powered marketplace integration using Model Context Protocol (MCP) to automate API communication.",
    images: ["https://www.ctasis.com/portfolio-banners/mcp-api-integration.png"],
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
