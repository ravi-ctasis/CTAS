"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { amazonSpApiConfig } from "@/data/service-pages/amazon-sp-api-integration";

export default function AmazonSpApiPage() {
  return <ServicePageTemplate config={amazonSpApiConfig} />;
}
