import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { automatedProductDataExtractionPlatformData } from "@/data/portfolios/automated-product-data-extraction-platform";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={automatedProductDataExtractionPlatformData}
      slug="automated-product-data-extraction-platform"
    />
  );
}
