import { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Ctas Info Services",
  description: "The page you're looking for could not be found.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
