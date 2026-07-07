import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { customElearningPlatformData } from "@/data/case-studies/custom-elearning-platform";

export default function Page() {
  return <CaseStudyDetailPage data={customElearningPlatformData} slug="custom-elearning-platform" />;
}
