import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { productionInventoryTrackingPlatformData } from "@/data/portfolios/production-inventory-tracking-platform";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={productionInventoryTrackingPlatformData}
      slug="production-inventory-tracking-platform"
    />
  );
}
