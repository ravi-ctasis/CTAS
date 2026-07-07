"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ecommerceWorkflowAutomationConfig } from "@/data/service-pages/ecommerce-workflow-automation";

export default function EcommerceAutomationPage() {
  return <ServicePageTemplate config={ecommerceWorkflowAutomationConfig} />;
}
