import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedMarketplacesSection from "@/components/TrustedMarketplacesSection";
import AboutSection from "@/components/AboutSection";
import MarketplaceEcosystemSection from "@/components/MarketplaceEcosystemSection";
import ServicesSection from "@/components/ServicesSection";
import IntegrationPartnersSection from "@/components/IntegrationPartnersSection";
import IndustriesSection from "@/components/IndustriesSection";
import AISection from "@/components/AISection";
import BusinessIntelligenceSection from "@/components/BusinessIntelligenceSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import AwardsRecognitionSection from "@/components/AwardsRecognitionSection";
import ClutchSection from "@/components/ClutchSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CTABannerSection from "@/components/CTABannerSection";
import FooterSection from "@/components/FooterSection";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Skip to main content
      </a>

      {/* Schema markup for SEO */}
      <FAQSchema />
      <ServiceSchema />

      <Navigation />

      <main id="main-content">
        <HeroSection />
        <TrustedMarketplacesSection />
        <AboutSection />
        <MarketplaceEcosystemSection />
        <ServicesSection />
        <IntegrationPartnersSection />
        <IndustriesSection />
        <AISection />
        <BusinessIntelligenceSection />
        <GlobalPresenceSection />
        <AwardsRecognitionSection />
        <ClutchSection />
        <BlogSection />
        <ContactSection />
        <CTABannerSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Index;
