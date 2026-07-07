import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { inspectionManagementWebSystemData } from "@/data/portfolios/inspection-management-web-system";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={inspectionManagementWebSystemData}
      slug="inspection-management-web-system"
    />
  );
}
