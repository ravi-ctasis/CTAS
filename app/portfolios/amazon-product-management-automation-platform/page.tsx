import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { amazonProductManagementAutomationPlatformData } from "@/data/portfolios/amazon-product-management-automation-platform";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={amazonProductManagementAutomationPlatformData}
      slug="amazon-product-management-automation-platform"
    />
  );
}
