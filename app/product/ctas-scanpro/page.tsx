import type { Metadata } from "next";
import CTASScanProClientPage from "./client";

export const metadata: Metadata = {
  title: {
    absolute: "Ctas ScanPro: FBA Wholesale Catalog Scanner"
  },
  description: "CTAS ScanPro delivers 98.2% barcode scanning accuracy for retail, warehouses, and logistics. Real-time browser-based scanning powered by WebAssembly.",
  keywords: [
    "barcode scanner",
    "browser based scanning",
    "inventory scanner",
    "warehouse scanning software",
    "high accuracy barcode reader",
    "CTAS ScanPro",
  ],
  alternates: {
    canonical: "/product/ctas-scanpro",
  },
  openGraph: {
    title: "CTAS ScanPro — High-Performance Browser-Based Barcode Scanner",
    description: "CTAS ScanPro delivers 98.2% barcode scanning accuracy for retail, warehouses, and logistics. Real-time browser-based scanning powered by WebAssembly.",
    url: "/product/ctas-scanpro",
    images: [
      {
        url: "/products/scanpro-og.png",
        width: 1200,
        height: 630,
        alt: "CTAS ScanPro Barcode Scanner",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTAS ScanPro — High-Performance Browser-Based Barcode Scanner",
    description: "CTAS ScanPro delivers 98.2% barcode scanning accuracy for retail, warehouses, and logistics. Real-time browser-based scanning powered by WebAssembly.",
    images: ["/products/scanpro-og.png"],
  },
};

export default function Page() {
  return <CTASScanProClientPage />;
}
