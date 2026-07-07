import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { marketplaceServiceData } from "@/data/case-studies/marketplace-service";

export default function Page() {
  return <CaseStudyDetailPage data={marketplaceServiceData} slug="marketplace-service" />;
}
