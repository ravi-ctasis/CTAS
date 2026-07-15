"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageCTA,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
  CYAN_LIGHT,
  AnimatedStat,
  PageFilterSidebar,
} from "@/components/page-design";
import {
  Search,
  Grid,
  List,
  ExternalLink,
  Star,
  Award,
  ShoppingCart,
  Heart,
  Building,
  CreditCard,
  GraduationCap,
  Stethoscope,
  Car,
  Grid3X3,
  Package,
  Zap,
  Settings,
  Smartphone,
  Home,
  Plane,
  Coffee,
  Dumbbell,
  Sparkles,
} from "lucide-react";
import { portfoliosData } from "@/data/portfoliosData";

const PortfoliosClient = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Portfolio | Ctas Info Services LLP",
        description: "Explore our portfolio of successful web development, mobile app, and e-commerce projects.",
        url: "https://www.ctasis.com/portfolios",
        provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Portfolios", item: "https://www.ctasis.com/portfolios" },
        ],
      },
    ],
  };

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const portfolios = portfoliosData;

  const categories = useMemo(() => ["All", ...Array.from(new Set(portfolios.map((p) => p.category)))], [portfolios]);
  const technologies = useMemo(() => {
    const allTechs = portfolios.flatMap((p) => p.technologies);
    return ["All", ...Array.from(new Set(allTechs))];
  }, [portfolios]);
  const industries = useMemo(() => {
    const uniqueIndustries = Array.from(new Set(portfolios.map((p) => p.industry).filter(Boolean))) as string[];
    return ["All", ...uniqueIndustries];
  }, [portfolios]);

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((portfolio) => {
      const matchesSearch =
        portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || portfolio.category === selectedCategory;
      const matchesTechnology = selectedTechnology === "All" || portfolio.technologies.includes(selectedTechnology);
      const matchesIndustry = selectedIndustry === "All" || portfolio.industry === selectedIndustry;
      return matchesSearch && matchesCategory && matchesTechnology && matchesIndustry;
    });
  }, [portfolios, searchTerm, selectedCategory, selectedTechnology, selectedIndustry]);

  const sortedPortfolios = useMemo(() => {
    const sorted = [...filteredPortfolios];
    const featured = sorted.filter((p) => p.featured);
    const rest = sorted.filter((p) => !p.featured);
    return [...featured, ...rest];
  }, [filteredPortfolios]);

  const getCategoryIcon = (category: string) => {
    const categoryIcons: Record<string, React.ElementType> = {
      "Marketplace Solutions": Package,
      "E-Commerce": ShoppingCart,
      "E-commerce Automation": Zap,
      "E-commerce": ShoppingCart,
      "Multi-Seller Marketplace": ShoppingCart,
      Manufacturing: Settings,
      Healthcare: Stethoscope,
      FinTech: CreditCard,
      "Education Solutions": GraduationCap,
      "Property Solutions": Home,
      "Mobile Apps": Smartphone,
      "Travel Solutions": Plane,
      "Food & Beverage": Coffee,
      "Health & Fitness": Dumbbell,
      "Logistics & Supply Chain": Car,
      "Banking & Finance": CreditCard,
      "Real Estate": Home,
      Enterprise: Building,
      Retail: ShoppingCart,
      Transportation: Car,
      Wellness: Heart,
      Gaming: Zap,
    };
    return categoryIcons[category] || Grid3X3;
  };

  const getIndustryIcon = (industry?: string) => {
    const industryIcons: Record<string, React.ElementType> = {
      "E-commerce": ShoppingCart,
      "Amazon FBA/FBM & Multi-Marketplace": ShoppingCart,
      "Global E-Commerce": ShoppingCart,
      "Ceramic & Tiles": Building,
      Healthcare: Stethoscope,
      FinTech: CreditCard,
      Education: GraduationCap,
      "Real Estate": Home,
      "Mobile Apps": Smartphone,
      Travel: Plane,
      "Food & Beverage": Coffee,
      "Health & Fitness": Dumbbell,
      Logistics: Car,
      "Banking & Finance": CreditCard,
      Enterprise: Building,
      Retail: ShoppingCart,
      Transportation: Car,
      Wellness: Heart,
      Gaming: Zap,
    };
    return industryIcons[industry || ""] || Grid3X3;
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedTechnology("All");
    setSelectedIndustry("All");
    setSearchTerm("");
  };

  const viewToggle = (
    <div className="flex items-center rounded-xl border border-slate-200 bg-white p-1">
      <button
        type="button"
        onClick={() => setViewMode("grid")}
        className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
          viewMode === "grid" ? "text-white" : "text-slate-500 hover:bg-[#F6F8FA]"
        }`}
        style={viewMode === "grid" ? { backgroundColor: NAVY } : undefined}
        aria-label="Grid view"
        aria-pressed={viewMode === "grid"}
      >
        <Grid className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => setViewMode("list")}
        className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
          viewMode === "list" ? "text-white" : "text-slate-500 hover:bg-[#F6F8FA]"
        }`}
        style={viewMode === "list" ? { backgroundColor: NAVY } : undefined}
        aria-label="List view"
        aria-pressed={viewMode === "list"}
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — compact so filters + cards get more viewport */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-8 sm:py-10"
          aria-label="Our Portfolio"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-4">
                <Award className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                Our Portfolio
              </div>
              <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-4`}>
                Showcasing{" "}
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  Innovation
                </span>{" "}
                &amp; Excellence
              </h1>
              <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed max-w-3xl mx-auto mb-6">
                Discover our diverse portfolio of cutting-edge projects that demonstrate our expertise across industries
                and technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10">
                  <Star className="w-4 h-4" style={{ color: CYAN }} />
                  <span className="text-sm font-semibold text-[#C7D2D9]">
                    <AnimatedStat value="98%" /> Success Rate
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10">
                  <Award className="w-4 h-4" style={{ color: CYAN_LIGHT }} />
                  <span className="text-sm font-semibold text-[#C7D2D9]">15+ Awards</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <PageFilterSidebar
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          searchPlaceholder="Search projects, technologies..."
          showClear={
            selectedCategory !== "All" ||
            selectedTechnology !== "All" ||
            selectedIndustry !== "All" ||
            !!searchTerm
          }
          onClear={clearFilters}
          resultCount={{ showing: sortedPortfolios.length, total: portfolios.length }}
          actions={viewToggle}
          filterGroups={[
            {
              id: "category",
              label: "Category",
              options: categories,
              value: selectedCategory,
              onChange: setSelectedCategory,
              accent: "navy",
            },
            {
              id: "technology",
              label: "Technology",
              options: technologies,
              value: selectedTechnology,
              onChange: setSelectedTechnology,
              accent: "cyan",
            },
            {
              id: "industry",
              label: "Industry",
              options: industries,
              value: selectedIndustry,
              onChange: setSelectedIndustry,
              accent: "navy",
            },
          ]}
        >
          {sortedPortfolios.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-slate-200 bg-white">
              <Search className="w-12 h-12 mx-auto text-slate-300 mb-4" />
              <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>No projects found</h3>
              <p className="text-slate-500 mb-6">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-[#F6F8FA]"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  : "space-y-4"
              }
            >
              {sortedPortfolios.map((portfolio, index) => {
                const CategoryIcon = getCategoryIcon(portfolio.category);
                const IndustryIcon = getIndustryIcon(portfolio.industry);
                return (
                  <motion.article
                    key={portfolio.id}
                    {...fadeUp}
                    transition={{ delay: index * 0.03 }}
                    role="button"
                    tabIndex={0}
                    onClick={() => portfolio.link && portfolio.link !== "#" && router.push(portfolio.link)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && portfolio.link && portfolio.link !== "#") router.push(portfolio.link);
                    }}
                    className={`group cursor-pointer rounded-[1.25rem] border border-slate-200/80 bg-white overflow-hidden hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                      viewMode === "list" ? "flex flex-col md:flex-row" : "flex flex-col"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-white ${
                        viewMode === "list" ? "w-full md:w-64 h-44 md:h-auto shrink-0" : "aspect-[16/10] w-full"
                      }`}
                    >
                      <Image
                        src={portfolio.image}
                        alt={portfolio.title}
                        fill
                        className="object-contain mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-100 z-1"
                        sizes={viewMode === "list" ? "256px" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
                        loading={index < 6 ? "eager" : "lazy"}
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-xs font-semibold text-slate-800 shadow-sm">
                        <CategoryIcon className="w-3.5 h-3.5" style={{ color: CYAN }} />
                        {portfolio.category}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-4 sm:p-5">
                      <div className="flex items-center justify-between mb-2.5 text-xs">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAF3F8] font-medium" style={{ color: NAVY }}>
                          <IndustryIcon className="w-3.5 h-3.5" />
                          <span>{portfolio.industry}</span>
                        </div>
                        <span className="text-slate-400 font-mono">{portfolio.year}</span>
                      </div>
                      <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-1.5 line-clamp-2 group-hover:text-[#13345A] transition-colors`}>
                        {portfolio.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-relaxed flex-1">{portfolio.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-3 pb-3 border-b border-slate-100 text-xs">
                        <div>
                          <span className="block text-slate-400 mb-0.5">Duration</span>
                          <span className="font-medium text-slate-700">{portfolio.duration || "N/A"}</span>
                        </div>
                        <div>
                          <span className="block text-slate-400 mb-0.5">Team Size</span>
                          <span className="font-medium text-slate-700">{portfolio.teamSize || "N/A"} Members</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {portfolio.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs font-medium rounded-md bg-[#F6F8FA] text-slate-600">
                            {tech}
                          </span>
                        ))}
                        {portfolio.technologies.length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-slate-500 bg-[#F6F8FA] rounded-md">
                            +{portfolio.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <span
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl text-white transition-all group-hover:opacity-90"
                        style={{ backgroundColor: NAVY }}
                      >
                        View Project Details
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
          <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
            Read our{" "}
            <Link href="/case-studies" className="font-semibold hover:underline" style={{ color: NAVY }}>
              case studies
            </Link>{" "}
            for detailed success stories
          </motion.p>
        </PageFilterSidebar>

        <PageCTA
          title="Ready to Start Your Project?"
          description="Let's discuss how we can bring your vision to life with our expertise and innovative solutions."
          primaryLabel="Get Free Consultation"
          primaryHref="/contact-us"
          secondaryLabel="Explore Services"
          secondaryHref="/services"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default PortfoliosClient;
