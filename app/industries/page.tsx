import React from "react";
import Navigation from "@/components/Navigation";
import IndustriesSection from "@/components/IndustriesSection";
import FooterSection from "@/components/FooterSection";

export default function IndustriesIndexPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main id="main-content" className="pt-20">
        <IndustriesSection />
      </main>
      <FooterSection />
    </div>
  );
}
