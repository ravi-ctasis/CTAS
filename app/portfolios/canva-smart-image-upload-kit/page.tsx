import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { canvaSmartImageUploadKitData } from "@/data/portfolios/canva-smart-image-upload-kit";

export default function Page() {
  return (
    <PortfolioDetailPage data={canvaSmartImageUploadKitData} slug="canva-smart-image-upload-kit" />
  );
}
