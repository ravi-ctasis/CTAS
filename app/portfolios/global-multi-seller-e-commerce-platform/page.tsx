import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { globalMultiSellerEcommercePlatformData } from "@/data/portfolios/global-multi-seller-e-commerce-platform";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={globalMultiSellerEcommercePlatformData}
      slug="global-multi-seller-e-commerce-platform"
    />
  );
}
