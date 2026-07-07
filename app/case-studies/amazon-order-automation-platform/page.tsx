import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { amazonOrderAutomationPlatformData } from "@/data/case-studies/amazon-order-automation-platform";

export default function Page() {
  return (
    <CaseStudyDetailPage data={amazonOrderAutomationPlatformData} slug="amazon-order-automation-platform" />
  );
}
