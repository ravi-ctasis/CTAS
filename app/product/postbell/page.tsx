"use client";

import {
  Share2,
  Bot,
  Calendar,
  Users,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
  Award,
  Clock,
  FileText,
  Image as ImageIcon,
  Settings,
  CheckCircle,
  Globe,
  Palette,
  Sparkles,
  Layers,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  TrendingUp,
  ThumbsUp,
  Eye,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MetaTags from "@/components/MetaTags";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const aiFeatures = [
  {
    title: "AI Content Generator",
    description: "Generate engaging social media captions, promotional posts, marketing copy, hashtags, and campaign ideas in seconds using advanced AI",
    icon: Bot,
  },
  {
    title: "AI Visual Creator",
    description: "Generate high-quality marketing images, social graphics, banners, and promotional creatives using AI without graphic design experience",
    icon: ImageIcon,
  },
];

const publishingFeatures = [
  {
    title: "Multi-Platform Publishing",
    description: "Publish content simultaneously across multiple social media platforms from a single dashboard",
    icon: Globe,
  },
  {
    title: "Auto Publishing Engine",
    description: "Automatically publish scheduled posts at the optimal time without manual intervention",
    icon: Zap,
  },
  {
    title: "Smart Scheduling",
    description: "Plan weeks or months of content in advance using an intelligent scheduling engine",
    icon: Calendar,
  },
];

const platforms = [
  "Facebook", "Instagram", "LinkedIn", "X (Twitter)", "Pinterest",
  "YouTube", "Google Business Profile", "WhatsApp (Business)", "Telegram"
];

const planningFeatures = [
  {
    title: "Content Calendar",
    description: "Visualize your entire publishing schedule with an interactive content calendar. Easily drag, edit, reschedule, and organize campaigns",
    icon: Calendar,
  },
  {
    title: "Draft Management",
    description: "Save ideas as drafts, organize campaigns, and prepare content before publishing",
    icon: FileText,
  },
  {
    title: "Campaign Planning",
    description: "Group posts into campaigns for product launches, seasonal promotions, events, and marketing initiatives",
    icon: Settings,
  },
];

const collaborationFeatures = [
  {
    title: "Approval Workflow",
    description: "Create structured approval processes where managers can review, edit, and approve posts before they go live",
    icon: CheckCircle,
  },
  {
    title: "Team Workspace",
    description: "Collaborate with marketing teams, designers, and content writers from one centralized workspace",
    icon: Users,
  },
  {
    title: "Role-Based Access",
    description: "Assign custom permissions to administrators, marketers, designers, and clients for secure collaboration",
    icon: Shield,
  },
];

const analyticsFeatures = [
  {
    title: "Performance Dashboard",
    description: "Track all important social media metrics including Reach, Engagement, Impressions, Followers Growth, Clicks, Shares, Likes, Comments",
    icon: BarChart3,
  },
  {
    title: "AI Performance Insights",
    description: "Receive intelligent recommendations based on engagement trends, audience behavior, and content performance",
    icon: Bot,
  },
  {
    title: "Custom Reports",
    description: "Generate downloadable reports for clients or internal teams with detailed analytics across every connected platform",
    icon: FileText,
  },
];

const automationFeatures = [
  {
    title: "Automated Publishing",
    description: "Schedule once and publish everywhere automatically",
    icon: Zap,
  },
  {
    title: "Recurring Posts",
    description: "Create evergreen content that automatically republishes on predefined schedules",
    icon: Calendar,
  },
  {
    title: "Bulk Scheduling",
    description: "Upload and schedule multiple posts simultaneously using CSV or media libraries",
    icon: Settings,
  },
  {
    title: "Media Library",
    description: "Store, organize, and reuse images, videos, logos, and brand assets from one centralized location",
    icon: ImageIcon,
  },
];

const businessTypes = [
  "Small Businesses", "Startups", "Marketing Agencies", "eCommerce Brands",
  "Corporate Teams", "Educational Institutions", "Healthcare Organizations",
  "Real Estate Companies", "Restaurants & Hospitality", "Personal Brands & Influencers"
];

const benefits = [
  {
    title: "AI-Powered Content Creation",
    description: "Generate engaging content and visuals in seconds with advanced AI",
    icon: Bot,
  },
  {
    title: "Publish Across Multiple Platforms",
    description: "Manage all your social media accounts from one dashboard",
    icon: Globe,
  },
  {
    title: "Visual Content Calendar",
    description: "Plan and organize your content with an intuitive calendar view",
    icon: Calendar,
  },
  {
    title: "Smart Scheduling & Automation",
    description: "Automate your posting schedule and save hours every week",
    icon: Zap,
  },
  {
    title: "Team Collaboration Workflows",
    description: "Work together with approval processes and role-based access",
    icon: Users,
  },
  {
    title: "Powerful Analytics Dashboard",
    description: "Track performance and optimize your campaigns with detailed insights",
    icon: BarChart3,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Create",
    description: "Generate AI-powered content and visuals",
  },
  {
    step: "02",
    title: "Plan",
    description: "Organize your campaigns using the content calendar",
  },
  {
    step: "03",
    title: "Schedule",
    description: "Select publishing dates and times for every platform",
  },
  {
    step: "04",
    title: "Review",
    description: "Collaborate with your team and approve content",
  },
  {
    step: "05",
    title: "Publish",
    description: "Automatically publish posts across connected social media accounts",
  },
  {
    step: "06",
    title: "Analyze",
    description: "Measure engagement, optimize campaigns, and grow your audience",
  },
];

// Items orbiting the AI engine node in the generation-flow showcase
const aiEngineOrbitItems = [
  { label: "Brand Colors", icon: Palette },
  { label: "Product Images", icon: ImageIcon },
  { label: "Auto Scheduling", icon: Calendar },
  { label: "AI Copywriting", icon: FileText },
  { label: "Festive Elements", icon: Sparkles },
  { label: "Logo", icon: Layers },
];

export default function PostbellPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />

      <main>
        <MetaTags
          title="Postbell - AI-Powered Social Media Automation Platform"
          description="Create. Schedule. Publish. Analyze. Manage your entire social media presence from one intelligent platform with AI-powered content creation and automation."
          keywords={["social media automation", "AI content creation", "social media scheduling", "multi-platform publishing", "Postbell", "social media management"]}
          ogImage="/products/postbell-og.webp"
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
            { name: "Postbell", url: "https://www.ctasis.com/product/postbell" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                  AI-Powered Social Media Automation
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Post<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">bell</span>
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Create. Schedule. Publish. Analyze.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Manage Your Entire Social Media Presence from One Intelligent Platform. AI-powered social media management that helps businesses create engaging content, automate publishing, collaborate with teams, and measure performance across multiple platforms.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "9+", label: "Platforms", icon: Globe },
                    { number: "AI", label: "Powered", icon: Bot },
                    { number: "24/7", label: "Automation", icon: Zap },
                    { number: "Real-time", label: "Analytics", icon: BarChart3 },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Hero visual — built in code instead of a static PNG so it stays crisp and can animate */}
              <HeroDashboardMockup />
            </div>
          </div>
        </section>

        {/* Prompt-to-Post generation flow showcase — white theme */}
        <section className="py-20 px-4 bg-white overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full w-fit mb-4 mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                See It In Action
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                From idea to ready-to-publish, automatically.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch Postbell turn a plain-text idea into a ready-to-publish festive creative — colors, copy, layout, and caption, done automatically.
              </p>
            </div>

            <PostbellGenerationFlow />
          </div>
        </section>

        {/* AI Content Creation Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI Content Creation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Generate professional content and visuals in seconds
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-16 h-16 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Publishing Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Social Media Publishing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Publish across all major platforms from one dashboard
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {publishingFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">{platform}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Planning Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Content Planning
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organize and plan your content strategy effectively
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {planningFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Collaboration Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Team Collaboration
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Work together seamlessly with approval workflows
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {collaborationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics & Insights Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Analytics & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Track performance and optimize your campaigns
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Features Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Automation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Save hours every week with intelligent automation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple 6-step process to automate your social media
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built For Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built For Every Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed for businesses of every size
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {businessTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-gray-900">{type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Postbell Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Postbell?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Features that transform your social media marketing
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-orange-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Start creating smarter, publishing faster, and growing better with Postbell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero visual — animated "live dashboard" mockup built in code       */
/* ------------------------------------------------------------------ */
function HeroDashboardMockup() {
  const queue = [
    { platform: "Facebook", time: "9:00 AM", status: "done" },
    { platform: "Instagram", time: "11:30 AM", status: "done" },
    { platform: "LinkedIn", time: "2:00 PM", status: "publishing" },
    { platform: "X (Twitter)", time: "4:30 PM", status: "queued" },
    { platform: "WhatsApp", time: "6:00 PM", status: "queued" },
  ];

  return (
    <div className="relative">
      <style>{`
        @keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes hero-row-in { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes hero-ring-spin { to { transform: rotate(360deg); } }
        @keyframes hero-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes hero-progress { from { width: 0%; } to { width: 100%; } }
        .hero-float { animation: hero-float 4.5s ease-in-out infinite; }
        .hero-float-slow { animation: hero-float 6s ease-in-out infinite; }
        .hero-row { animation: hero-row-in 0.6s ease-out both; }
        .hero-ring { animation: hero-ring-spin 12s linear infinite; transform-origin: center; }
        .hero-pulse-dot { animation: hero-pulse-dot 1.4s ease-in-out infinite; }
        .hero-progress-bar { animation: hero-progress 2.4s ease-in-out infinite; }
      `}</style>

      <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-1 hero-float-slow">
        <div className="bg-white rounded-xl p-6">
          {/* Top bar: app chrome */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-gray-900">Automation Engine</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 hero-pulse-dot" />
              <span className="text-[11px] text-gray-500 font-medium">Running 24/7</span>
            </div>
          </div>

          {/* Automation queue */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-700">Today's Auto-Publish Queue</span>
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {queue.map((item, i) => (
                <div
                  key={item.platform}
                  className="hero-row flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="flex items-center gap-2.5">
                    {item.status === "done" && (
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </span>
                    )}
                    {item.status === "publishing" && (
                      <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-orange-500" />
                      </span>
                    )}
                    {item.status === "queued" && (
                      <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                        <Clock className="w-3 h-3 text-gray-400" />
                      </span>
                    )}
                    <span className="text-xs font-medium text-gray-800">{item.platform}</span>
                  </div>
                  <span
                    className={`text-[10px] font-medium ${item.status === "done"
                        ? "text-green-600"
                        : item.status === "publishing"
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                  >
                    {item.status === "publishing" ? "Publishing now" : item.time}
                  </span>
                </div>
              ))}
            </div>
            {/* Live progress bar for the "publishing" row */}
            <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="hero-progress-bar h-full bg-gradient-to-r from-blue-600 to-orange-400 rounded-full" />
            </div>
          </div>

          {/* Platform pills + AI ring */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {["FB", "IG", "IN", "X"].map((p) => (
                <div
                  key={p}
                  className="w-7 h-7 rounded-full bg-white border-2 border-white shadow flex items-center justify-center text-[9px] font-bold text-gray-700 ring-1 ring-gray-200"
                >
                  {p}
                </div>
              ))}
              <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[9px] font-bold">
                +5
              </div>
            </div>
            <div className="relative w-9 h-9 hero-float">
              <svg className="hero-ring absolute inset-0 w-9 h-9" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#fed7aa" strokeWidth="2" strokeDasharray="18 10" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-3xl font-bold text-gray-900 mb-1">Fully Automated</div>
        <div className="text-gray-600">Set Once, Publish Everywhere</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sequential "prompt -> AI engine -> generated -> published" flow    */
/*  Plays automatically: types the prompt, then advances through each  */
/*  stage, then loops.                                                  */
/* ------------------------------------------------------------------ */
const PROMPT_TEXT = "Create a Diwali offer post for my electronics shop with 30% OFF.";
const STEP_HOLD_MS = 2200; // how long each non-typing step stays active

function PostbellGenerationFlow() {
  const [activeStep, setActiveStep] = useState(0); // 0 = typing, 1 = AI engine, 2 = generated, 3 = published
  const [typedChars, setTypedChars] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typewriter effect for step 0
  useEffect(() => {
    if (activeStep !== 0) return;
    setTypedChars(0);
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTypedChars(i);
      if (i >= PROMPT_TEXT.length) {
        clearInterval(typeInterval);
        timeoutRef.current = setTimeout(() => setActiveStep(1), 500);
      }
    }, 35);
    return () => {
      clearInterval(typeInterval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeStep]);

  // Auto-advance for steps 1, 2, 3
  useEffect(() => {
    if (activeStep === 0) return;
    const next = activeStep === 3 ? 0 : activeStep + 1;
    const timeout = setTimeout(() => setActiveStep(next), STEP_HOLD_MS);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  const orbitPositions = [
    { top: 14, left: 90 },     // top
    { top: 52, left: 155.8 },  // upper right
    { top: 128, left: 155.8 }, // lower right
    { top: 166, left: 90 },    // bottom
    { top: 128, left: 24.2 },  // lower left
    { top: 52, left: 24.2 },   // upper left
  ];

  return (
    <div className="relative">
      <style>{`
        @keyframes pb-flow-dash { to { stroke-dashoffset: -20; } }
        @keyframes pb-spin-slow { to { transform: rotate(360deg); } }
        @keyframes pb-pulse-soft { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }
        @keyframes pb-fade-up { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes pb-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .pb-flow-line { stroke-dasharray: 5 5; animation: pb-flow-dash 1.1s linear infinite; }
        .pb-orbit-ring { animation: pb-spin-slow 40s linear infinite; transform-origin: center; }
        .pb-node-pulse { animation: pb-pulse-soft 2.2s ease-in-out infinite; }
        .pb-fade-up { animation: pb-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .pb-caret { animation: pb-blink 0.9s step-end infinite; }
        .pb-step-inactive { opacity: 0.35; filter: grayscale(0.4); transform: scale(0.97); transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease; }
        .pb-step-active { opacity: 1; filter: grayscale(0); transform: scale(1); transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease; }
      `}</style>

      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {["Prompt", "AI Engine", "Generated", "Published"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${i === activeStep
                  ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-md"
                  : i < activeStep
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-gray-100 text-gray-400"
                }`}
            >
              {i < activeStep ? <CheckCircle className="w-3.5 h-3.5" /> : null}
              {label}
            </div>
            {i < 3 && (
              <ArrowRight className={`w-3.5 h-3.5 ${i < activeStep ? "text-green-400" : "text-gray-300"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-start">
        {/* Step 1: Prompt */}
        <div className={activeStep === 0 ? "pb-step-active" : "pb-step-inactive"}>
          <FlowStep step={1} label="YOUR PROMPT">
            <div className="bg-[#0d1526] rounded-xl p-4 w-full max-w-[240px]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-xs font-semibold">TYPE YOUR IDEA</span>
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <div className="bg-[#161f33] rounded-lg p-3 text-[11px] text-slate-300 leading-relaxed mb-3 min-h-[64px]">
                {PROMPT_TEXT.slice(0, typedChars)}
                {activeStep === 0 && <span className="pb-caret text-orange-400">|</span>}
              </div>
              <div
                className={`text-xs font-semibold text-center rounded-lg py-2 transition-colors duration-300 ${activeStep === 0 && typedChars >= PROMPT_TEXT.length
                    ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white"
                    : "bg-[#1f2a42] text-slate-500"
                  }`}
              >
                Generate
              </div>
            </div>
          </FlowStep>
        </div>

        <FlowArrow />

        {/* Step 2: AI Engine */}
        <div className={`transition-opacity duration-300 ${activeStep === 1 ? "opacity-100" : "opacity-40"}`}>
          <FlowStep
            step={2}
            label="AI ENGINE"
            // badge={
            //   activeStep === 1 ? (
            //     <span className="flex items-center gap-1.5 text-orange-600">
            //       <span className="w-1.5 h-1.5 rounded-full bg-orange-500 pb-node-pulse shrink-0" />
            //       Composing colors, copy &amp; layout...
            //     </span>
            //   ) : undefined
            // }
          >
            <div className="relative w-[220px] h-[220px] mx-auto">
              <div
                className="pb-orbit-ring absolute rounded-full border border-dashed border-orange-200"
                style={{ width: 152, height: 152, top: 34, left: 34 }}
              />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
                {aiEngineOrbitItems.map((_, i) => {
                  const p = orbitPositions[i];
                  return (
                    <line
                      key={i}
                      x1={110}
                      y1={110}
                      x2={p.left + 20}
                      y2={p.top + 20}
                      stroke="#fb923c"
                      strokeWidth={1.5}
                      className="pb-flow-line"
                      opacity={0.55}
                    />
                  );
                })}
              </svg>
              <div
                className="pb-node-pulse absolute w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white z-10"
                style={{ top: 82, left: 82 }}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              {aiEngineOrbitItems.map((item, i) => {
                const p = orbitPositions[i];
                return (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center gap-1 z-10"
                    style={{ top: p.top, left: p.left, width: 40 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-orange-200 shadow-sm flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-[9px] font-medium text-gray-600 text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </FlowStep>
        </div>

        <FlowArrow />

        {/* Step 3: Generated */}
        <div className={activeStep === 2 ? "pb-step-active" : "pb-step-inactive"}>
          <FlowStep step={3} label="GENERATED" badge={activeStep >= 2 ? "Generated in 6 seconds" : undefined}>
            <div className={activeStep === 2 ? "pb-fade-up" : ""}>
              <DiwaliPosterCard />
            </div>
          </FlowStep>
        </div>

        <FlowArrow />

        {/* Step 4: Ready to Publish */}
        <div className={activeStep === 3 ? "pb-step-active" : "pb-step-inactive"}>
          <FlowStep step={4} label="READY TO PUBLISH">
            <div className={activeStep === 3 ? "pb-fade-up" : ""}>
              <InstagramPostCard />
            </div>
            {activeStep === 3 && (
              <div className="flex items-center gap-1.5 justify-center mt-2 text-[11px] text-green-600 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                Queued to Instagram with caption + hashtags
              </div>
            )}
          </FlowStep>
        </div>
      </div>
    </div>
  );
}

function FlowStep({
  step,
  label,
  badge,
  children,
}: {
  step: number;
  label: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center">
          {step}
        </span>
        <span className="text-[11px] font-semibold tracking-widest text-gray-500">{label}</span>
        {badge && (
          <span className="flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
            <CheckCircle className="w-3 h-3" /> {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center pt-16">
      <svg width="32" height="16" viewBox="0 0 32 16">
        <line x1="0" y1="8" x2="24" y2="8" stroke="#fb923c" strokeWidth="2" strokeDasharray="4 4" className="pb-flow-line" />
        <path d="M22,3 L28,8 L22,13" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DiwaliPosterCard() {
  return (
    <div className="w-full max-w-[220px] rounded-xl overflow-hidden shadow-lg border border-orange-100">
      <div className="bg-gradient-to-b from-[#3a0e14] to-[#1f0810] px-4 py-5 text-center relative">
        <div className="w-12 h-12 mx-auto rounded-full border border-orange-400/50 flex items-center justify-center mb-2">
          <span className="text-orange-300 text-[7px] font-semibold leading-tight">
            PATEL
            <br />
            ELECTRONICS
          </span>
        </div>
        <div className="text-orange-300 text-[9px] tracking-widest mb-1">SHUBH DEEPAVALI</div>
        <div className="text-white text-lg font-bold leading-tight">DIWALI</div>
        <div className="text-orange-300 text-sm font-bold mb-1">MEGA SALE</div>
        <div className="text-yellow-300 text-xl font-extrabold mb-1">UPTO 50% OFF</div>
        <div className="text-orange-200 text-[8px] mb-3">TV | Fridge | AC | Washing Machine | Home Appliances</div>
        <div className="bg-orange-50/95 rounded-lg p-2 text-left">
          <div className="text-[7px] font-bold text-center text-orange-800 mb-1 tracking-wide">SPECIAL DIWALI OFFERS</div>
          <div className="text-[7px] text-gray-700 flex justify-between">
            <span>Smart LED TV 43"</span><span>Rs 21,999 onwards</span>
          </div>
          <div className="text-[7px] text-gray-700 flex justify-between">
            <span>Double Door Refrigerator</span><span>Rs 24,499 onwards</span>
          </div>
          <div className="text-[7px] text-gray-700 flex justify-between">
            <span>Split AC 1.5 Ton</span><span>Rs 29,999 onwards</span>
          </div>
        </div>
      </div>
      <div className="bg-white px-3 py-2 text-center">
        <div className="text-[8px] font-semibold text-gray-700">Patel Electronics</div>
        <div className="text-[7px] text-gray-400">Shop No. 12, Shivam Complex, Ahmedabad</div>
      </div>
    </div>
  );
}

function InstagramPostCard() {
  return (
    <div className="w-full max-w-[220px] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white text-left">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white text-[9px] font-bold flex items-center justify-center">
            SE
          </span>
          <div>
            <div className="text-[9px] font-semibold text-gray-900 leading-tight">patel.electronics</div>
            <div className="text-[7px] text-gray-400 leading-tight">Ahmedabad, Gujarat</div>
          </div>
        </div>
        <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
      </div>

      <div className="scale-90 origin-top">
        <DiwaliPosterCard />
      </div>

      <div className="flex items-center gap-3 px-3 pt-2">
        <Heart className="w-4 h-4 text-gray-700" />
        <MessageCircle className="w-4 h-4 text-gray-700" />
        <Send className="w-4 h-4 text-gray-700" />
        <Bookmark className="w-4 h-4 text-gray-700 ml-auto" />
      </div>
      <div className="px-3 pt-1.5 text-[9px] font-semibold text-gray-900">312 likes</div>
      <div className="px-3 pt-1 pb-3 text-[8px] text-gray-600 leading-relaxed">
        <span className="font-semibold text-gray-900">patel.electronics</span> Flat 30% OFF this Diwali on home appliances 🪔✨ Offer valid till 5 Nov — shop in-store or DM us.
        <div className="text-blue-600 mt-1">#Diwali2026 #DiwaliSale #FestiveOffer</div>
      </div>
    </div>
  );
}