import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { googleSheetsSyncData } from "@/data/portfolios/google-sheets-integration-marketplace-synchronization";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={googleSheetsSyncData}
      slug="google-sheets-integration-marketplace-synchronization"
    />
  );
}
