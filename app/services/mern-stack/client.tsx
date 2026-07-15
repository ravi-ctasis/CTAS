"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { mernStackConfig } from "@/data/service-pages/mern-stack";

export default function MERNStackPage() {
  return <ServicePageTemplate config={mernStackConfig} />;
}
