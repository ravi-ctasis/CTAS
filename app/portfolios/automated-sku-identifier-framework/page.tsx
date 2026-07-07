import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { automatedSkuIdentifierFrameworkData } from "@/data/portfolios/automated-sku-identifier-framework";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={automatedSkuIdentifierFrameworkData}
      slug="automated-sku-identifier-framework"
    />
  );
}
