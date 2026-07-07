import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { warehouseInventoryManagementPlatformData } from "@/data/portfolios/warehouse-inventory-management-platform";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={warehouseInventoryManagementPlatformData}
      slug="warehouse-inventory-management-platform"
    />
  );
}
