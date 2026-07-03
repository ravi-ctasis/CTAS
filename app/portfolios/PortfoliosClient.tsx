"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";
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
    X,
    Grid3X3,
    Package,
    Zap,
    Settings,
    Smartphone,
    Home,
    Plane,
    Coffee,
    Dumbbell,
} from "lucide-react";
import { portfoliosData } from "@/data/portfoliosData";
import Link from "next/link";

const PortfoliosClient = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTechnology, setSelectedTechnology] = useState("All");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy] = useState("featured"); // Changed from "newest" to "featured"

    const [showFilters] = useState(false);

    // Use shared portfolio data
    const portfolios = portfoliosData;

    // Get unique categories, technologies, and industries from shared data
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(portfolios.map((p) => p.category)));
        return ["All", ...uniqueCategories];
    }, [portfolios]);

    const technologies = useMemo(() => {
        const allTechs = portfolios.flatMap((p) => p.technologies);
        const uniqueTechs = Array.from(new Set(allTechs));
        return ["All", ...uniqueTechs];
    }, [portfolios]);

    const industries = useMemo(() => {
        const uniqueIndustries = Array.from(new Set(portfolios.map((p) => p.industry).filter(Boolean)));
        return ["All", ...uniqueIndustries];
    }, [portfolios]);

    const filteredPortfolios = useMemo(() => {
        return portfolios.filter((portfolio) => {
            const matchesSearch =
                portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                portfolio.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                portfolio.technologies.some((tech) =>
                    tech.toLowerCase().includes(searchTerm.toLowerCase())
                );

            const matchesCategory = selectedCategory === "All" || portfolio.category === selectedCategory;
            const matchesTechnology =
                selectedTechnology === "All" || portfolio.technologies.includes(selectedTechnology);
            const matchesIndustry = selectedIndustry === "All" || portfolio.industry === selectedIndustry;

            return matchesSearch && matchesCategory && matchesTechnology && matchesIndustry;
        });
    }, [portfolios, searchTerm, selectedCategory, selectedTechnology, selectedIndustry]);

    const sortedPortfolios = useMemo(() => {
        const sorted = [...filteredPortfolios];
        switch (sortBy) {
            case "newest":
                return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
            case "popular":
                return sorted.sort((a, b) => b.title.localeCompare(a.title));
            case "featured":
                return sorted.filter((p) => p.featured).concat(sorted.filter((p) => !p.featured));
            default:
                return sorted;
        }
    }, [filteredPortfolios, sortBy]);

    // Enhanced category icon mapping
    const getCategoryIcon = (category: string) => {
        const categoryIcons: { [key: string]: any } = {
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
        const IconComponent = categoryIcons[category] || Grid3X3;
        return <IconComponent className="w-4 h-4" />;
    };

    // Enhanced industry icon mapping
    const getIndustryIcon = (industry?: string) => {
        const industryIcons: { [key: string]: any } = {
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
        const IconComponent = industryIcons[industry || ""] || Grid3X3;
        return <IconComponent className="w-4 h-4" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-sky-600/5 to-indigo-600/10"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-sky-300/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 text-sm font-bold border border-blue-200 mb-8 shadow-lg">
                            <Award className="w-5 h-5 mr-2 animate-bounce" />
                            Our Portfolio
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                            Showcasing{" "}
                            <span className="text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text animate-pulse">
                                Innovation
                            </span>
                            <br />
                            <span className="text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text">
                                & Excellence
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
                            Discover our diverse portfolio of cutting-edge projects that demonstrate our expertise
                            across industries and technologies. Each project represents our commitment to quality,
                            innovation, and client success.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                                <Star className="w-5 h-5 text-sky-500" />
                                <span className="text-base font-semibold text-gray-700">98% Success Rate</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                                <Award className="w-5 h-5 text-indigo-600" />
                                <span className="text-base font-semibold text-gray-700">15+ Awards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                type="text"
                                placeholder="Search projects, technologies..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        {/* View Mode and Sort */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                                <Button
                                    variant={viewMode === "grid" ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("grid")}
                                    className="px-3 py-1"
                                >
                                    <Grid className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant={viewMode === "list" ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("list")}
                                    className="px-3 py-1"
                                >
                                    <List className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Filter Options */}
                    {showFilters && (
                        <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Category Filter */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
                                    <div className="space-y-2">
                                        {categories.map((category) => (
                                            <label key={category} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    value={category}
                                                    checked={selectedCategory === category}
                                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                                    className="text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-700">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Technology Filter */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Technology</h3>
                                    <div className="space-y-2">
                                        {technologies.map((tech) => (
                                            <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="technology"
                                                    value={tech}
                                                    checked={selectedTechnology === tech}
                                                    onChange={(e) => setSelectedTechnology(e.target.value)}
                                                    className="text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-700">{tech}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Industry Filter */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Industry</h3>
                                    <div className="space-y-2">
                                        {industries.map((industry) => (
                                            <label key={industry} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="industry"
                                                    value={industry}
                                                    checked={selectedIndustry === industry}
                                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                                    className="text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-700">{industry}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Clear Filters */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSelectedCategory("All");
                                        setSelectedTechnology("All");
                                        setSelectedIndustry("All");
                                        setSearchTerm("");
                                    }}
                                    className="flex items-center space-x-2"
                                >
                                    <X className="w-4 h-4" />
                                    <span>Clear All Filters</span>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results Count */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{sortedPortfolios.length}</span>{" "}
                            of <span className="font-semibold text-gray-900">{portfolios.length}</span> projects
                        </p>
                    </div>

                    {/* Portfolio Cards */}
                    <div
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                : "space-y-6"
                        }
                    >
                        {sortedPortfolios.length === 0 ? (
                            <div className="col-span-full text-center py-16">
                                <div className="flex justify-center mb-4">
                                    <Search className="w-16 h-16 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No projects found</h3>
                                <p className="text-gray-600 mb-6">
                                    Try adjusting your search terms or filters to find what you&apos;re looking for.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSelectedCategory("All");
                                        setSelectedTechnology("All");
                                        setSelectedIndustry("All");
                                        setSearchTerm("");
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        ) : (
                            sortedPortfolios.map((portfolio, index) => (
                                <Card
                                    key={portfolio.id}
                                    className={`group relative overflow-hidden bg-white border border-gray-100 rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${viewMode === "list" ? "flex flex-col md:flex-row" : "flex flex-col"
                                        }`}
                                    onClick={() => {
                                        if (portfolio.link && portfolio.link !== "#") {
                                            router.push(portfolio.link);
                                        }
                                    }}
                                >
                                    {/* Portfolio Image */}
                                    <div
                                        className={`relative overflow-hidden bg-gray-50 border-b border-gray-100 ${viewMode === "list" ? "w-full md:w-85 h-56 md:h-auto shrink-0" : "h-60 w-full"
                                            }`}
                                    >
                                        <Image
                                            src={portfolio.image}
                                            alt={portfolio.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 6}
                                        />

                                        {/* Badge Overlay */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <Badge className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white shadow-sm border border-gray-200/50 flex items-center gap-1.5 px-3 py-1">
                                                {getCategoryIcon(portfolio.category)}
                                                {portfolio.category}
                                            </Badge>
                                        </div>

                                        {/* View Details Overlay */}
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        </div>
                                    </div>

                                    {/* Portfolio Content */}
                                    <div className="flex flex-col flex-1 p-6">
                                        <div className="flex items-center justify-between mb-3 text-xs">
                                            <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full font-medium">
                                                {getIndustryIcon(portfolio.industry)}
                                                <span>{portfolio.industry}</span>
                                            </div>
                                            <span className="text-gray-400 font-mono">{portfolio.year}</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {portfolio.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {portfolio.description}
                                        </p>

                                        {/* Stats / Metrics */}
                                        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-50 text-xs text-gray-500">
                                            <div>
                                                <span className="block text-gray-400 mb-0.5">Duration</span>
                                                <span className="font-medium text-gray-700">{portfolio.duration || 'N/A'}</span>
                                            </div>
                                            <div>
                                                <span className="block text-gray-400 mb-0.5">Team Size</span>
                                                <span className="font-medium text-gray-700">{portfolio.teamSize || 'N/A'} Members</span>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {portfolio.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {portfolio.technologies.length > 3 && (
                                                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded-md border border-gray-100">
                                                        +{portfolio.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            <Button
                                                className="w-full bg-gray-900 text-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
                                                size="sm"
                                            >
                                                View Project Details <ExternalLink className="w-3 h-3 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can bring your vision to life with our expertise and
                        innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact-us">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                                Get Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default PortfoliosClient;
