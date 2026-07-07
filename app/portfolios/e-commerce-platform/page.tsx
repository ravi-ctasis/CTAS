import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { ecommercePlatformData } from "@/data/portfolios/e-commerce-platform";

export default function Page() {
  return <PortfolioDetailPage data={ecommercePlatformData} slug="e-commerce-platform" />;
}
