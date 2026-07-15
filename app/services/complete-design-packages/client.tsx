"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Palette,
  Type,
  FileText,
  Layers,
  CheckCircle,
  Sparkles,
  Target,
  Users,
  Rocket,
  Award,
  Star,
  Globe,
  FileImage,
  FileCode,
  Zap,
  Shield,
  Search,
  Settings,
  TrendingUp,
  BarChart,
  Monitor,
  Code,
} from "lucide-react";

const packageTypes = [
  {
    title: "Starter Brand Package",
    description:
      "Essential brand identity package perfect for startups and small businesses looking to establish their visual presence",
    icon: Palette,
    features: [
      "Primary Logo Design",
      "Brand Color Palette",
      "Typography Selection",
      "Basic Brand Guidelines",
    ],
  },
  {
    title: "Professional Brand Package",
    description:
      "Comprehensive brand identity package with complete visual system and business applications",
    icon: Layers,
    features: ["Complete Logo Suite", "Brand Guidelines", "Business Templates", "Digital Assets"],
  },
  {
    title: "Enterprise Brand Package",
    description:
      "Full-scale brand identity system with advanced applications and comprehensive brand management",
    icon: Globe,
    features: [
      "Complete Brand System",
      "Advanced Applications",
      "Brand Management Tools",
      "Ongoing Support",
    ],
  },
  {
    title: "Rebrand Package",
    description:
      "Complete brand transformation package for existing businesses looking to modernize their identity",
    icon: Sparkles,
    features: [
      "Brand Analysis",
      "New Identity Design",
      "Migration Strategy",
      "Implementation Support",
    ],
  },
  {
    title: "Startup Package",
    description:
      "Tailored brand identity package designed specifically for startups and new businesses",
    icon: Rocket,
    features: [
      "Startup-Focused Design",
      "Scalable Identity",
      "Growth-Ready Assets",
      "Budget-Friendly",
    ],
  },
  {
    title: "Luxury Brand Package",
    description:
      "Premium brand identity package for luxury brands requiring sophisticated and elegant design solutions",
    icon: Star,
    features: [
      "Luxury Design Aesthetics",
      "Premium Materials",
      "Exclusive Applications",
      "Brand Prestige",
    ],
  },
];

const techCategories = [
  {
    title: "Design Software",
    description: "Professional design tools and software for creating brand identities",
    icon: Palette,
    technologies: [
      { name: "Adobe Illustrator", icon: Palette, level: "Expert" },
      { name: "Adobe Photoshop", icon: FileImage, level: "Expert" },
      { name: "Figma", icon: Monitor, level: "Expert" },
      { name: "Adobe InDesign", icon: FileText, level: "Advanced" },
      { name: "Sketch", icon: Palette, level: "Advanced" },
      { name: "Canva Pro", icon: Layers, level: "Advanced" },
    ],
  },
  {
    title: "Brand Tools",
    description: "Specialized tools for brand development and management",
    icon: Target,
    technologies: [
      { name: "Brand Guidelines", icon: FileText, level: "Expert" },
      { name: "Color Systems", icon: Palette, level: "Expert" },
      { name: "Typography Tools", icon: Type, level: "Expert" },
      { name: "Asset Management", icon: Layers, level: "Advanced" },
      { name: "Brand Templates", icon: FileCode, level: "Advanced" },
      { name: "Brand Analytics", icon: BarChart, level: "Advanced" },
    ],
  },
  {
    title: "Output Formats",
    description: "Professional file formats and delivery methods for brand assets",
    icon: FileCode,
    technologies: [
      { name: "Vector Files", icon: Code, level: "Expert" },
      { name: "Raster Images", icon: FileImage, level: "Expert" },
      { name: "PDF Guidelines", icon: FileText, level: "Expert" },
      { name: "Template Files", icon: Layers, level: "Advanced" },
      { name: "Web Assets", icon: Globe, level: "Advanced" },
      { name: "Print Files", icon: FileCode, level: "Advanced" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    description:
      "Comprehensive analysis of your business, target audience, competitors, and brand vision through detailed research and discovery sessions",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Developing a comprehensive brand strategy including positioning, messaging, visual direction, and implementation roadmap",
    icon: Target,
  },
  {
    step: "03",
    title: "Design & Creation",
    description:
      "Creating multiple design concepts, refining based on feedback, and developing the complete brand identity system",
    icon: Palette,
  },
  {
    step: "04",
    title: "Refinement & Testing",
    description:
      "Iterative refinement process with client feedback, testing across applications, and ensuring brand consistency",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Delivery & Support",
    description:
      "Providing all final files, guidelines, templates, and ongoing support for successful brand implementation",
    icon: Rocket,
  },
];

const features = [
  {
    title: "Professional Quality",
    description: "High-quality designs that meet industry standards and best practices",
    icon: Award,
  },
  {
    title: "Brand Consistency",
    description: "Cohesive visual identity across all touchpoints and applications",
    icon: Shield,
  },
  {
    title: "Scalable Design",
    description: "Brand systems that grow with your business and adapt to new needs",
    icon: Zap,
  },
  {
    title: "Modern Aesthetics",
    description:
      "Contemporary design trends and visual appeal that resonates with today's audience",
    icon: Star,
  },
  {
    title: "Comprehensive Guidelines",
    description: "Detailed brand guidelines ensuring consistent application across all platforms",
    icon: FileText,
  },
  {
    title: "Ready-to-Use Assets",
    description: "Complete asset library ready for immediate implementation across all channels",
    icon: Layers,
  },
];

const benefits = [
  {
    title: "Build Brand Recognition",
    description:
      "A strong brand identity can increase brand recognition by up to 80% and help customers remember and choose your business over competitors",
    icon: TrendingUp,
  },
  {
    title: "Increase Business Value",
    description:
      "Professional brand identity can increase your business value by up to 23% and attract better partnerships and investment opportunities",
    icon: BarChart,
  },
  {
    title: "Boost Customer Trust",
    description:
      "Consistent, professional branding builds trust and credibility, leading to higher customer confidence and increased sales",
    icon: Shield,
  },
  {
    title: "Improve Marketing ROI",
    description:
      "Cohesive brand identity can improve marketing ROI by up to 30% through better recognition and consistent messaging",
    icon: Target,
  },
  {
    title: "Attract Top Talent",
    description:
      "Strong brand identity helps attract and retain top talent by creating a professional, appealing company image",
    icon: Users,
  },
  {
    title: "Future-Proof Your Brand",
    description:
      "Scalable brand systems ensure your identity can evolve and adapt as your business grows and market changes",
    icon: Settings,
  },
];

const topicalGuide = [
  {
    id: "planning",
    title: "Brand Identity Planning & Strategy",
    content: "Essential steps to plan and strategize your brand identity development",
    points: [
      "Define your brand vision, mission, and values",
      "Conduct market research and competitor analysis",
      "Identify your target audience and their preferences",
      "Develop brand positioning and messaging strategy",
      "Create a comprehensive brand architecture",
      "Plan brand implementation across all touchpoints",
    ],
  },
  {
    id: "design",
    title: "Visual Identity Design Process",
    content: "Creating compelling visual elements that represent your brand effectively",
    points: [
      "Develop logo concepts and variations",
      "Create comprehensive color palette system",
      "Select and establish typography hierarchy",
      "Design visual elements and patterns",
      "Create brand applications and examples",
      "Develop brand guidelines and usage rules",
    ],
  },
  {
    id: "development",
    title: "Brand System Development",
    content: "Building comprehensive brand systems and asset libraries",
    points: [
      "Create scalable design systems",
      "Develop brand asset libraries",
      "Build template systems for consistency",
      "Establish brand management processes",
      "Create implementation guidelines",
      "Develop brand training materials",
    ],
  },
  {
    id: "testing",
    title: "Brand Testing & Validation",
    content: "Testing and validating your brand identity across applications",
    points: [
      "Test brand recognition and recall",
      "Validate brand messaging effectiveness",
      "Test brand applications across platforms",
      "Gather feedback from target audience",
      "Refine brand elements based on feedback",
      "Validate brand consistency and impact",
    ],
  },
  {
    id: "implementation",
    title: "Brand Implementation & Launch",
    content: "Successfully implementing your brand identity across all touchpoints",
    points: [
      "Plan brand rollout strategy and timeline",
      "Update all existing brand applications",
      "Train team members on brand guidelines",
      "Launch brand across all channels",
      "Monitor brand implementation and consistency",
      "Gather feedback and make necessary adjustments",
    ],
  },
  {
    id: "management",
    title: "Ongoing Brand Management",
    content: "Managing and evolving your brand identity over time",
    points: [
      "Monitor brand performance and recognition",
      "Manage brand assets and guidelines",
      "Update brand applications as needed",
      "Evolve brand identity with business growth",
      "Train new team members on brand guidelines",
      "Plan for brand refresh and evolution",
    ],
  },
];

const faqs = [
  {
    question: "What's included in the Complete Design Package?",
    answer:
      "Our Complete Design Package includes a full logo suite (primary, secondary, and icon variations), comprehensive brand guidelines, color system, typography, business templates, and digital assets. Everything you need for a complete brand identity.",
  },
  {
    question: "How long does the complete design process take?",
    answer:
      "The complete design process typically takes 4-6 weeks from initial discovery to final delivery. This includes comprehensive research, strategy development, design creation, and final file preparation with multiple revision rounds.",
  },
  {
    question: "What file formats will I receive for my logo?",
    answer:
      "You'll receive your logo in multiple formats: SVG (vector for scalability), PNG (high-resolution for print), JPG (web-ready), AI/PSD (editable design files), and EPS (professional vector format). All files are optimized for different use cases.",
  },
  {
    question: "Can I request changes during the design process?",
    answer:
      "Absolutely! We include multiple revision rounds in our process. We work collaboratively with you throughout the design phase to ensure the final brand identity perfectly represents your vision and business goals.",
  },
  {
    question: "Do you provide ongoing support after delivery?",
    answer:
      "Yes! We provide 30 days of post-delivery support to help with implementation questions, brand application guidance, and ensure your brand is applied correctly across all platforms and touchpoints.",
  },
  {
    question: "What if I need additional brand assets or templates later?",
    answer:
      "We offer ongoing design services for additional brand assets, templates, or updates. Many clients choose to work with us for ongoing brand development, new applications, or brand evolution as their business grows.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Complete Design Packages",
      description:
        "Comprehensive design packages from Ctas: branding, UI/UX, and web design. Complete visual identity solutions for growing businesses.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "Complete Design Packages",
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Complete Design Packages",
          item: "https://www.ctasis.com/services/complete-design-packages",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function CompleteDesignPackagesPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Complete Design Packages",
        structuredData,
        hero: {
          badge: "Complete Design Packages",
          title: "Complete",
          highlight: "Brand Identity",
          description:
            "Professional brand identity packages that include everything you need to establish a strong, cohesive brand presence. From logo design to comprehensive brand guidelines.",
          stats: [
            { number: "200+", label: "Brands Created", icon: Palette },
            { number: "200+", label: "Happy Clients", icon: Users },
            { number: "16+", label: "Years of Excellence", icon: Award },
            { number: "4.9", label: "Client Rating", icon: Star },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "alternating",
            header: {
              badge: "Packages",
              title: "Brand Identity",
              highlight: "Packages",
              description:
                "Scalable brand identity packages for startups, enterprises, and everything in between.",
            },
            items: packageTypes,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Brand Design",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge design tools and technologies to create robust and scalable brand identities.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            variant: "horizontal",
            header: {
              badge: "Our Process",
              title: "Design",
              highlight: "Process",
              description:
                "Our proven brand design process ensures quality, transparency, and timely delivery.",
            },
            steps: process,
          },
          {
            type: "cards",
            variant: "scroll",
            header: {
              badge: "Why Choose Us",
              title: "Key",
              highlight: "Features",
              description:
                "We deliver exceptional brand solutions with cutting-edge features and technologies.",
            },
            items: features,
            columns: 3,
          },
          {
            type: "benefits",
            variant: "zigzag",
            header: {
              badge: "Why Choose Brand Design?",
              title: "Benefits of",
              highlight: "Professional Brand Design",
              description:
                "Discover how professional brand design can transform your business and drive growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Brand Design",
              highlight: "Guide",
              description:
                "Everything you need to know about brand design, from strategy and planning to maintenance.",
            },
            tabs: topicalGuide,
            defaultTab: "planning",
          },
          {
            type: "faq",
            header: {
              badge: "FAQ",
              title: "Frequently Asked",
              highlight: "Questions",
              description:
                "Get answers to common questions about our complete design packages and brand identity development process.",
            },
            items: faqs,
          },
        ],
        cta: {
          title: "Ready to Transform Your Business?",
          description: "Let's create a stunning website that drives results.",
          primaryLabel: "Get Started",
          primaryHref: "/contact-us",
        },
      }}
    />
  );
}
