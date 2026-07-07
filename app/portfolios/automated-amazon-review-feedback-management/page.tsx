import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { automatedAmazonReviewFeedbackManagementData } from "@/data/portfolios/automated-amazon-review-feedback-management";

export default function Page() {
  return (
    <PortfolioDetailPage
      data={automatedAmazonReviewFeedbackManagementData}
      slug="automated-amazon-review-feedback-management"
    />
  );
}
