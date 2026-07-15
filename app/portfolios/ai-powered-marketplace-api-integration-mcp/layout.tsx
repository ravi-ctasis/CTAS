import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marketplace API Integration (MCP) | Ctas Info Services",
  description: "Case study on building an AI-powered marketplace integration using Model Context Protocol (MCP) to automate API communication.",
  keywords: ["AI marketplace integration", "Model Context Protocol", "MCP integration", "API automation", "e-commerce AI solutions"],
  alternates: {
    canonical: "https://www.ctasis.com/portfolios/ai-powered-marketplace-api-integration-mcp",
  },
  openGraph: {
    title: "AI-Powered Marketplace API Integration (MCP) | Ctas Info Services",
    description: "Case study on building an AI-powered marketplace integration using Model Context Protocol (MCP) to automate API communication.",
    url: "https://www.ctasis.com/portfolios/ai-powered-marketplace-api-integration-mcp",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
