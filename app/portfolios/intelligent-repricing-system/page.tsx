import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { intelligentRepricingSystemData } from "@/data/portfolios/intelligent-repricing-system";

export default function Page() {
  return (
    <PortfolioDetailPage data={intelligentRepricingSystemData} slug="intelligent-repricing-system" />
  );
}
