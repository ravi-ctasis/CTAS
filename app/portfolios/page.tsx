import PortfoliosClient from "./PortfoliosClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & E-commerce Client Portfolio",
  description: "Explore our successful projects in AI integration, Amazon SP-API, marketplace automation, and custom web development. See how we help businesses grow global.",
  keywords: ["software portfolio", "AI projects", "Amazon SP-API projects", "e-commerce case studies", "web development portfolio"],
};

export default function PortfoliosPage() {
  return <PortfoliosClient />;
}
