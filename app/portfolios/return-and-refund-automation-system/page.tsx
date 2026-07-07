import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { returnAndRefundAutomationSystemData } from "@/data/portfolios/return-and-refund-automation-system";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={returnAndRefundAutomationSystemData}
      slug="return-and-refund-automation-system"
    />
  );
}
