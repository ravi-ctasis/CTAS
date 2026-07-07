import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { amazonOrderManagementAutomationSystemData } from "@/data/portfolios/amazon-order-management-automation-system";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={amazonOrderManagementAutomationSystemData}
      slug="amazon-order-management-automation-system"
    />
  );
}
