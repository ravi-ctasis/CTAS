import PortfolioDetailPage from "@/components/portfolios/PortfolioDetailPage";
import { bookStoreData } from "@/data/portfolios/book-store";

export default function Page() {
  return <PortfolioDetailPage data={bookStoreData} slug="book-store" />;
}
