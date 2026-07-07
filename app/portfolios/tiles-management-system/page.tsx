import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { tilesManagementSystemData } from "@/data/portfolios/tiles-management-system";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={tilesManagementSystemData}
      slug="tiles-management-system"
    />
  );
}
