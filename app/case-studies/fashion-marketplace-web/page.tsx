import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { fashionMarketplaceWebData } from "@/data/case-studies/fashion-marketplace-web";

export default function Page() {
  return <CaseStudyDetailPage data={fashionMarketplaceWebData} slug="fashion-marketplace-web" />;
}
