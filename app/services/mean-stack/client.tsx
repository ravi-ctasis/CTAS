"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { meanStackConfig } from "@/data/service-pages/mean-stack";

export default function MEANStackPage() {
  return <ServicePageTemplate config={meanStackConfig} />;
}
