import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { aiMarketplaceMcpData } from "@/data/portfolios/ai-powered-marketplace-api-integration-mcp";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={aiMarketplaceMcpData}
      slug="ai-powered-marketplace-api-integration-mcp"
    />
  );
}
