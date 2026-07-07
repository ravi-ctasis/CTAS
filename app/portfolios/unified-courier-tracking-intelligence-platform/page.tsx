import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { unifiedCourierTrackingIntelligencePlatformData } from "@/data/portfolios/unified-courier-tracking-intelligence-platform";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={unifiedCourierTrackingIntelligencePlatformData}
      slug="unified-courier-tracking-intelligence-platform"
    />
  );
}
