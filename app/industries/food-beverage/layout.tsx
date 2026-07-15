import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Beverage Tech Solutions | Ctas Info Services",
  description:
    "Digital solutions for food and beverage: POS, supply chain, online ordering, delivery integrations, and analytics by Ctas.",
  keywords: [
    "food and beverage technology",
    "restaurant POS systems",
    "supply chain management for F&B",
    "online food ordering platforms",
    "inventory management for restaurants",
    "food industry analytics",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/food-beverage",
    languages: {
      "en-US": "https://www.ctasis.com/industries/food-beverage",
      "en-IN": "https://www.ctasis.com/industries/food-beverage",
      "x-default": "https://www.ctasis.com/industries/food-beverage",
    },
  },
  openGraph: {
    title: "Innovative Digital Solutions for Food & Beverage | Ctas",
    description: "Modernize your restaurant or food business with custom POS and ordering systems. Expert tech for the F&B industry.",
    url: "https://www.ctasis.com/industries/food-beverage",
  },
};

export default function FoodBeverageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
