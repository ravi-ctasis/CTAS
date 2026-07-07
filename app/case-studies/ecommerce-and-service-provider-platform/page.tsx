import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { ecommerceAndServiceProviderPlatformData } from "@/data/case-studies/ecommerce-and-service-provider-platform";

export default function Page() {
  return (
    <CaseStudyDetailPage
      data={ecommerceAndServiceProviderPlatformData}
      slug="ecommerce-and-service-provider-platform"
    />
  );
}
