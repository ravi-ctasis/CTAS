"use client";

import React, { useState, useMemo } from "react";
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
} from "@/components/page-design";
import {
  Search,
  Star,
  Eye,
  Calendar,
  Award,
  Code,
  Globe,
  ShoppingCart,
  Heart,
  Building,
  CreditCard,
  GraduationCap,
  Stethoscope,
  Car,
  Gamepad2,
  Utensils,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Rocket,
  Sparkles,
} from "lucide-react";

const SectionWrap = ({
  children,
  alt = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-white" : "bg-[#F6F8FA]"}`}>
    <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">{children}</div>
  </section>
);

type CaseStudy = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  outcome: string;
  description: string;
  longDescription: string;
  image: string;
  client: string;
  href: string;
  duration: string;
  teamSize: string;
  budget: string;
  featured?: boolean;
  stats: Record<string, string | number>;
  year: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  testimonial: { quote: string; author: string; position: string; avatar: string };
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "E-Commerce & Multi-Vendor Marketplace Development | Ctas",
    subtitle: "Integrated platform for products and services in one place with advanced e-Commerce features",
    category: "e-Commerce Development",
    industry: "Retail",
    outcome: "Market Expansion",
    description:
      "Integrated e-commerce and service provider platform that allows users to purchase products, book services, and manage their orders in one seamless experience using modern marketplace development technologies.",
    longDescription:
      "Built a comprehensive platform that combines e-commerce with service booking capabilities using advanced development techniques. Users can shop for products and schedule service appointments from a single platform with unified cart and checkout implementation.",
    image: "/e-commerce-service-provider.webp",
    client: "ServiceHub Inc",
    href: "/case-studies/ecommerce-and-service-provider-platform",
    duration: "18 months",
    teamSize: "25",
    budget: "$2.5M",
    featured: true,
    stats: { views: 25000, likes: 3200, shares: 1800, revenueIncrease: "300%", userGrowth: "450%", conversionRate: "85%" },
    year: "2024",
    challenges: ["Unified cart and checkout system development", "Service scheduling complexity implementation", "Multi-vendor management development"],
    solutions: ["Integrated booking engine implementation", "Real-time availability sync development", "Centralized vendor dashboard implementation"],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Payment Gateways"],
    testimonial: {
      quote: "The platform has revolutionized our business model. Customers love the convenience of shopping and booking services in one place.",
      author: "Lisa Rodriguez",
      position: "Head of Digital Operations",
      avatar: "/logo.webp",
    },
  },
  {
    id: 2,
    title: "Amazon Order Automation Platform - AI-Powered e-Commerce Management System",
    subtitle: "Automated order management & inventory synchronization with Amazon SP-API integration",
    category: "Amazon Automation & e-Commerce Solutions",
    industry: "e-Commerce",
    outcome: "Operational Efficiency",
    description:
      "Comprehensive Amazon automation platform that streamlines order processing, inventory management, and multi-marketplace synchronization with real-time updates using Amazon SP-API development.",
    longDescription:
      "Developed a fully automated order management system using Amazon SP-API to handle thousands of orders per day with real-time syncing, error-free operations, and seamless integration with warehouse software using advanced automation development techniques.",
    image: "/amazon-order-automation .webp",
    client: "Multi-Marketplace Amazon Seller",
    href: "/case-studies/amazon-order-automation-platform",
    duration: "6 months",
    teamSize: "12",
    budget: "$75,000",
    stats: { views: 19000, likes: 2400, shares: 1200, efficiency: "90%", accuracy: "99%", reduction: "70%" },
    year: "2024",
    challenges: ["Handling large order volumes without server downtime development", "Dealing with frequent Amazon API rate limits implementation", "Maintaining data consistency across multiple sales channels development"],
    solutions: ["API-First Development with Amazon SP-API integration implementation", "Scalable microservice-based backend architecture development", "Real-time inventory synchronization system implementation"],
    technologies: ["Amazon SP-API", "Node.js", "MongoDB", "AWS"],
    testimonial: {
      quote: "The automation platform has transformed our operations. We've seen a 90% reduction in processing time and 70% fewer order cancellations.",
      author: "Sarah Johnson",
      position: "Operations Director",
      avatar: "/logo.webp",
    },
  },
  {
    id: 3,
    title: "Marketplace Development Services - Multi-Vendor Platform Solutions",
    subtitle: "Build powerful, scalable multi-vendor platforms where buyers & sellers connect seamlessly with advanced marketplace development",
    category: "Marketplace Solutions Development",
    industry: "Technology",
    outcome: "Market Expansion",
    description:
      "We help businesses launch robust marketplace platforms that combine e-commerce and service-based features with end-to-end development and support using modern marketplace development technologies.",
    longDescription:
      "We help businesses launch robust marketplace platforms that combine e-commerce and service-based features using advanced development techniques. Whether you're planning a product marketplace, a service provider platform, or a hybrid model, Ctasis delivers end-to-end development, design, and support to help your marketplace grow reliably.",
    image: "/marketplace-service.webp",
    client: "Various Industries",
    href: "/case-studies/fashion-marketplace-web",
    duration: "3-6 months",
    teamSize: "8-15",
    budget: "Custom",
    featured: true,
    stats: { views: 18500, likes: 2400, shares: 1200, platforms: "Web & Mobile", orders: "Unlimited", marketplaces: "Multi-Vendor" },
    year: "2024",
    challenges: ["Building scalable architecture for multiple vendors development", "Implementing secure payment processing implementation", "Creating intuitive user experience for buyers and sellers development"],
    solutions: ["Multi-Vendor Architecture with individual dashboards implementation", "Secure Payment Integration with fraud prevention development", "Responsive Design with mobile-first approach implementation"],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Payment Gateways"],
    testimonial: {
      quote: "Ctasis delivered an exceptional marketplace platform that exceeded our expectations. The multi-vendor system works flawlessly.",
      author: "Sarah Johnson",
      position: "CEO, Fashion Marketplace",
      avatar: "/logo.webp",
    },
  },
  {
    id: 4,
    title: "Custom E-Learning Platform - AI-Powered Medical Diagnosis System",
    subtitle: "Personalized learning at scale with AI-driven education for millions of students worldwide",
    category: "Education Technology",
    industry: "Education",
    outcome: "Efficiency Improvement",
    description:
      "AI-powered diagnostic system that reduced diagnosis time by 80% and improved accuracy by 95% with real-time medical image analysis.",
    longDescription:
      "Developed an advanced AI diagnostic system that analyzes medical images and patient data to provide accurate diagnoses. The system integrates with existing hospital infrastructure and provides real-time insights to healthcare professionals.",
    image: "/custom-e-learning.webp",
    client: "Metro Health Systems",
    href: "/case-studies/custom-elearning-platform",
    duration: "24 months",
    teamSize: "18",
    budget: "$3.2M",
    featured: false,
    stats: { views: 22000, likes: 2900, shares: 1500, diagnosisTime: "80%", accuracy: "95%", patientSatisfaction: "92%" },
    year: "2024",
    challenges: ["HIPAA compliance requirements", "Integration with legacy systems", "AI model accuracy validation"],
    solutions: ["End-to-end encryption", "API-first architecture", "Continuous learning algorithms"],
    technologies: ["Python", "TensorFlow", "React Native", "PostgreSQL", "AWS"],
    testimonial: {
      quote: "This AI system has transformed how we approach patient care. It's like having an expert consultant available 24/7.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer",
      avatar: "/logo.webp",
    },
  },
  {
    id: 5,
    title: "Fashion Marketplace Web App",
    subtitle: "Revolutionizing digital fashion retail with a multi-vendor platform",
    category: "e-Commerce",
    industry: "Fashion & Retail",
    outcome: "User Experience",
    description:
      "A next-generation fashion marketplace web application that connects multiple vendors with shoppers, offering seamless browsing, payments, and personalized recommendations.",
    longDescription:
      "We built a comprehensive multi-vendor fashion marketplace that allows brands, designers, and independent sellers to showcase their products on a single platform. The app features secure digital payments, AI-powered product recommendations, biometric login, and real-time order tracking to deliver an innovative and user-friendly shopping experience.",
    image: "/fashion-marketplace-web-img.webp",
    client: "NextGen Fashion Group",
    href: "/case-studies/fashion-marketplace-web",
    duration: "14 months",
    teamSize: "20",
    budget: "$2.4M",
    featured: true,
    stats: { views: 22000, likes: 2800, shares: 1350, appRating: "4.9", userAdoption: "82%", transactionSecurity: "99.8%" },
    year: "2023",
    challenges: ["Seamless multi-vendor integration", "High-traffic performance optimization", "Cross-platform design consistency"],
    solutions: ["Scalable cloud infrastructure", "AI-driven recommendation engine", "Biometric authentication and digital wallet integration"],
    technologies: ["Next.js", "React Native", "Node.js", "Firebase", "AWS"],
    testimonial: {
      quote: "This marketplace app has redefined our digital presence. Customers love the smooth interface, secure payments, and personalized shopping experience.",
      author: "Sophia Martinez",
      position: "Chief Digital Officer",
      avatar: "/client-logo.webp",
    },
  },
];

const getIndustryIcon = (industry: string) => {
  const icons: Record<string, React.ElementType> = {
    Retail: ShoppingCart,
    Healthcare: Stethoscope,
    Finance: CreditCard,
    Education: GraduationCap,
    "Real Estate": Building,
    "Food & Beverage": Utensils,
    Gaming: Gamepad2,
    Automotive: Car,
    Travel: Globe,
    Health: Heart,
    Technology: Code,
    Fashion: ShoppingCart,
    "e-Commerce": ShoppingCart,
    "Fashion & Retail": ShoppingCart,
  };
  return icons[industry] || Globe;
};

const getOutcomeIcon = (outcome: string) => {
  const icons: Record<string, React.ElementType> = {
    "Revenue Growth": TrendingUp,
    "Efficiency Improvement": Zap,
    "User Experience": Heart,
    "Learning Outcomes": BookOpen,
    "Operational Efficiency": Target,
    "Market Expansion": Rocket,
  };
  return icons[outcome] || CheckCircle;
};

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedOutcome, setSelectedOutcome] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => ["All", ...Array.from(new Set(CASE_STUDIES.map((s) => s.category)))], []);
  const industries = useMemo(() => ["All", ...Array.from(new Set(CASE_STUDIES.map((s) => s.industry)))], []);
  const outcomes = useMemo(() => ["All", ...Array.from(new Set(CASE_STUDIES.map((s) => s.outcome)))], []);

  const filteredCaseStudies = useMemo(() => {
    return CASE_STUDIES.filter((study) => {
      const matchesSearch =
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || study.category === selectedCategory;
      const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
      const matchesOutcome = selectedOutcome === "All" || study.outcome === selectedOutcome;
      return matchesSearch && matchesCategory && matchesIndustry && matchesOutcome;
    });
  }, [searchTerm, selectedCategory, selectedIndustry, selectedOutcome]);

  const sortedCaseStudies = useMemo(() => {
    const sorted = [...filteredCaseStudies];
    switch (sortBy) {
      case "featured":
        return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case "newest":
        return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
      case "popular":
        return sorted.sort((a, b) => Number(b.stats.views) - Number(a.stats.views));
      case "budget":
        return sorted.sort(
          (a, b) => parseInt(b.budget.replace(/[^0-9]/g, "") || "0") - parseInt(a.budget.replace(/[^0-9]/g, "") || "0")
        );
      default:
        return sorted;
    }
  }, [filteredCaseStudies, sortBy]);

  const featuredStudies = sortedCaseStudies.filter((s) => s.featured);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Case Studies | Ctas Info Services LLP",
        description: "Success stories and case studies showcasing our IT solutions and client results.",
        url: "https://www.ctasis.com/case-studies",
        provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.ctasis.com/case-studies" },
        ],
      },
    ],
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedIndustry("All");
    setSelectedOutcome("All");
    setSearchTerm("");
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — dark centered with stat band */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="Case Studies"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                <Award className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                Case Studies
              </div>
              <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                Success{" "}
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  Stories
                </span>{" "}
                That Inspire
              </h1>
              <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed max-w-3xl mx-auto mb-10">
                Discover how we&apos;ve helped businesses transform, innovate, and achieve remarkable results through
                cutting-edge technology solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { icon: TrendingUp, value: "300%", label: "Average ROI" },
                  { icon: Target, value: "95%", label: "Success Rate" },
                  { icon: Zap, value: "80%", label: "Efficiency Gain" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="rounded-2xl bg-white/[0.05] border border-white/10 p-5 flex items-center justify-center gap-3"
                  >
                    <stat.icon className="w-5 h-5" style={{ color: CYAN }} />
                    <div className="text-left">
                      <div className={`${fraunces.className} text-xl font-medium text-[#F2F6F9]`}>
                        <AnimatedStat value={stat.value} />
                      </div>
                      <div className="text-xs text-[#93A3AF]">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search + filters — sticky toolbar */}
        <section className="sticky top-0 z-30 bg-white border-b border-slate-200/80 py-4 shadow-sm">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search case studies, industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                aria-label="Sort case studies"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="budget">Highest Budget</option>
              </select>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 mt-4 snap-x">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 snap-start px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    selectedCategory === cat ? "text-white" : "bg-[#F6F8FA] text-slate-600 border border-slate-200"
                  }`}
                  style={selectedCategory === cat ? { backgroundColor: NAVY } : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 mt-2 snap-x">
              {industries.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`flex-shrink-0 snap-start px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    selectedIndustry === ind ? "text-white" : "bg-[#F6F8FA] text-slate-600 border border-slate-200"
                  }`}
                  style={selectedIndustry === ind ? { backgroundColor: CYAN, color: "#08141F" } : undefined}
                >
                  {ind}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto mt-2 snap-x">
              {outcomes.map((out) => (
                <button
                  key={out}
                  type="button"
                  onClick={() => setSelectedOutcome(out)}
                  className={`flex-shrink-0 snap-start px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    selectedOutcome === out ? "text-white" : "bg-[#F6F8FA] text-slate-600 border border-slate-200"
                  }`}
                  style={selectedOutcome === out ? { backgroundColor: NAVY } : undefined}
                >
                  {out}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured — asymmetric bento with full content */}
        {featuredStudies.length > 0 && (
          <SectionWrap>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: NAVY }}>
                <Star className="w-5 h-5 text-white" />
              </div>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900`}>Case Studies</h2>
            </div>
            <div className="space-y-8">
              {featuredStudies.map((study, i) => {
                const IndustryIcon = getIndustryIcon(study.industry);
                const OutcomeIcon = getOutcomeIcon(study.outcome);
                return (
                  <motion.article
                    key={`featured-${study.id}`}
                    {...fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className={`grid lg:grid-cols-2 gap-0 rounded-[1.75rem] border border-slate-200/80 bg-white overflow-hidden hover:shadow-xl transition-shadow ${
                      i % 2 === 1 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] lg:[direction:ltr]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={i === 0}
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-slate-800">
                        <IndustryIcon className="w-3.5 h-3.5" style={{ color: CYAN }} />
                        {study.industry}
                      </div>
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wide" style={{ backgroundColor: NAVY }}>
                        Premium
                      </span>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col lg:[direction:ltr]">
                      <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mb-2`}>{study.title}</h3>
                      <p className="text-sm text-slate-500 font-medium mb-3">{study.subtitle}</p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{study.longDescription}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF3F8] text-xs font-semibold text-slate-700 mb-4 w-fit">
                        <OutcomeIcon className="w-3.5 h-3.5" style={{ color: CYAN }} />
                        {study.outcome}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#F6F8FA] text-slate-600 border border-slate-100">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <blockquote className="border-l-2 pl-4 mb-4 text-sm text-slate-600 italic">
                        &ldquo;{study.testimonial.quote}&rdquo;
                        <footer className="mt-2 text-xs text-slate-500 not-italic">
                          — {study.testimonial.author}, {study.testimonial.position}
                        </footer>
                      </blockquote>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {study.stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400" />
                          {study.stats.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {study.year}
                        </span>
                      </div>
                      <Link
                        href={study.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-[#08141F] transition-all hover:opacity-90 mt-auto w-fit"
                        style={{ backgroundColor: CYAN }}
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </SectionWrap>
        )}

        {/* All studies — compact grid */}
        <SectionWrap alt>
          <p className="text-sm text-slate-500 mb-8">
            Showing <span className="font-semibold text-slate-900">{sortedCaseStudies.length}</span> case{" "}
            {sortedCaseStudies.length === 1 ? "study" : "studies"}
          </p>
          {sortedCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-12 h-12 mx-auto text-slate-300 mb-4" />
              <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>No case studies found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-[#F6F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  {...fadeUp}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col rounded-[1.5rem] border border-slate-200/80 bg-white overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-[#13345A] transition-colors`}>
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-2 line-clamp-2">{study.subtitle}</p>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">{study.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs rounded-md bg-[#F6F8FA] text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={study.href}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: NAVY }}
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
          <motion.p {...fadeUp} className="mt-10 inline-flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
            See related work in our{" "}
            <Link href="/portfolios" className="font-semibold hover:underline" style={{ color: NAVY }}>
              portfolio
            </Link>
          </motion.p>
        </SectionWrap>

        <PageCTA
          title="Ready to Write Your Success Story?"
          description="Let's discuss how we can help you achieve similar results and create your own success story."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="View Our Work"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
