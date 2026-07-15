"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Brain,
  Cpu,
  Database,
  Code,
  Zap,
  Target,
  BarChart3,
  Users,
  Shield,
  TrendingUp,
  Rocket,
  Eye,
  Cog,
  Cloud,
  Monitor,
  Search,
  MessageCircle,
  FileCode2,
  Package,
  Lock,
  RefreshCw,
  Layers,
  Activity,
  PieChart,
  AlertTriangle,
  Settings,
  GitBranch,
  GitCompare,
  Download,
} from "lucide-react";

const keyFeatures = [
  {
    title: "Advanced Machine Learning",
    description: "State-of-the-art ML algorithms for classification, regression, and clustering",
    icon: Brain,
    category: "Core AI/ML",
  },
  {
    title: "Deep Neural Networks",
    description: "Complex neural architectures for image, text, and audio processing",
    icon: Layers,
    category: "Core AI/ML",
  },
  {
    title: "Natural Language Processing",
    description: "Advanced text analysis, sentiment detection, and language understanding",
    icon: MessageCircle,
    category: "Core AI/ML",
  },
  {
    title: "Computer Vision",
    description: "Image recognition, object detection, and video analysis capabilities",
    icon: Eye,
    category: "Core AI/ML",
  },
  {
    title: "Big Data Processing",
    description: "Handle massive datasets with distributed computing and parallel processing",
    icon: Database,
    category: "Data & Analytics",
  },
  {
    title: "Real-time Analytics",
    description: "Live data streaming and instant insights for decision making",
    icon: Activity,
    category: "Data & Analytics",
  },
  {
    title: "Predictive Modeling",
    description: "Forecast future trends and behaviors using historical data patterns",
    icon: TrendingUp,
    category: "Data & Analytics",
  },
  {
    title: "Statistical Analysis",
    description: "Comprehensive statistical methods and hypothesis testing",
    icon: BarChart3,
    category: "Data & Analytics",
  },
  {
    title: "Cloud-Native Architecture",
    description: "Scalable cloud infrastructure for AI/ML workloads",
    icon: Cloud,
    category: "Infrastructure",
  },
  {
    title: "Auto-scaling Systems",
    description: "Automatic resource allocation based on demand and workload",
    icon: RefreshCw,
    category: "Infrastructure",
  },
  {
    title: "Model Versioning",
    description: "Track and manage different versions of AI/ML models",
    icon: GitBranch,
    category: "Infrastructure",
  },
  {
    title: "API Integration",
    description: "RESTful APIs and microservices for seamless integration",
    icon: Code,
    category: "Infrastructure",
  },
  {
    title: "Data Encryption",
    description: "End-to-end encryption for sensitive data protection",
    icon: Lock,
    category: "Security",
  },
  {
    title: "Privacy Compliance",
    description: "GDPR, HIPAA, and other regulatory compliance features",
    icon: Shield,
    category: "Security",
  },
  {
    title: "Access Control",
    description: "Role-based permissions and secure authentication",
    icon: Users,
    category: "Security",
  },
  {
    title: "Audit Logging",
    description: "Comprehensive logging for compliance and security monitoring",
    icon: FileCode2,
    category: "Security",
  },
  {
    title: "Performance Monitoring",
    description: "Real-time monitoring of model performance and system health",
    icon: Monitor,
    category: "Monitoring",
  },
  {
    title: "Model Optimization",
    description: "Continuous improvement and fine-tuning of AI models",
    icon: Settings,
    category: "Monitoring",
  },
  {
    title: "Alert Systems",
    description: "Proactive alerts for anomalies and performance issues",
    icon: AlertTriangle,
    category: "Monitoring",
  },
  {
    title: "A/B Testing",
    description: "Compare different model versions and strategies",
    icon: GitCompare,
    category: "Monitoring",
  },
  {
    title: "Interactive Dashboards",
    description: "Customizable dashboards for data visualization and insights",
    icon: PieChart,
    category: "Business Intelligence",
  },
  {
    title: "Custom Reports",
    description: "Automated report generation and scheduling",
    icon: FileCode2,
    category: "Business Intelligence",
  },
  {
    title: "Data Export",
    description: "Multiple export formats for analysis and sharing",
    icon: Download,
    category: "Business Intelligence",
  },
  {
    title: "Collaboration Tools",
    description: "Team collaboration features for data analysis and insights",
    icon: Users,
    category: "Business Intelligence",
  },
];

const serviceCards = [
  {
    title: "Machine Learning Models",
    description: "Custom ML models for predictive analytics, classification, and regression tasks",
    icon: Brain,
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, sentiment analysis, and chatbots",
    icon: MessageCircle,
  },
  {
    title: "Computer Vision",
    description: "Image and video recognition, object detection, and facial recognition systems",
    icon: Eye,
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business intelligence",
    icon: TrendingUp,
  },
  {
    title: "Deep Learning",
    description: "Neural networks and deep learning architectures for complex problem solving",
    icon: Cpu,
  },
  {
    title: "AI Automation",
    description: "Intelligent process automation and workflow optimization",
    icon: Zap,
  },
];

const inlineBenefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and optimize workflows",
    icon: TrendingUp,
  },
  {
    title: "Better Decisions",
    description: "Data-driven insights for strategic planning",
    icon: Target,
  },
  {
    title: "Enhanced CX",
    description: "Personalized experiences and recommendations",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "Stay ahead with cutting-edge technology",
    icon: Rocket,
  },
];

const useCases = [
  {
    title: "Healthcare & Medical",
    description: "AI-powered diagnosis, medical image analysis, and patient care optimization",
    icon: Shield,
    benefits: [
      "Medical image recognition",
      "Patient data analysis",
      "Drug discovery support",
      "Predictive diagnostics",
    ],
  },
  {
    title: "Finance & Banking",
    description: "Fraud detection, risk assessment, and algorithmic trading solutions",
    icon: BarChart3,
    benefits: [
      "Fraud detection systems",
      "Credit risk assessment",
      "Algorithmic trading",
      "Customer behavior analysis",
    ],
  },
  {
    title: "E-commerce & Retail",
    description: "Personalized recommendations, inventory optimization, and demand forecasting",
    icon: Package,
    benefits: [
      "Product recommendations",
      "Inventory optimization",
      "Demand forecasting",
      "Customer segmentation",
    ],
  },
  {
    title: "Manufacturing & Industry",
    description: "Predictive maintenance, quality control, and supply chain optimization",
    icon: Cog,
    benefits: [
      "Predictive maintenance",
      "Quality control systems",
      "Supply chain optimization",
      "Process automation",
    ],
  },
];

const technologies = [
  { name: "TensorFlow", icon: Brain, level: "Deep Learning" },
  { name: "PyTorch", icon: Cpu, level: "Deep Learning" },
  { name: "Scikit-learn", icon: Target, level: "Machine Learning" },
  { name: "OpenCV", icon: Eye, level: "Computer Vision" },
  { name: "NLTK", icon: MessageCircle, level: "NLP" },
  { name: "Pandas", icon: Database, level: "Data Processing" },
  { name: "NumPy", icon: Code, level: "Data Processing" },
  { name: "Keras", icon: Brain, level: "Deep Learning" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Understand requirements and analyze data sources",
    icon: Search,
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Clean, preprocess, and prepare data for modeling",
    icon: Database,
  },
  {
    step: "03",
    title: "Model Development",
    description: "Build, train, and validate AI/ML models",
    icon: Code,
  },
  {
    step: "04",
    title: "Deployment & Monitoring",
    description: "Deploy models and monitor performance",
    icon: Rocket,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI & ML Development Services",
      description:
        "AI/ML solutions from Ctas: custom models, data pipelines, LLM/RAG, computer vision, and analytics tailored to your business.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "Artificial Intelligence and Machine Learning",
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
          name: "AI & ML",
          item: "https://www.ctasis.com/services/ai-ml",
        },
      ],
    },
  ],
};

export default function AIMLPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "AI/ML Solutions",
        structuredData,
        hero: {
          badge: "AI/ML Solutions",
          title: "Transform Your Business",
          highlight: "with AI/ML",
          description:
            "Leverage the power of artificial intelligence and machine learning to drive innovation, optimize operations, and unlock new opportunities for your business.",
          primaryCta: { label: "Get Started", href: "/contact-us" },
          secondaryCta: { label: "View Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "filter-features",
            header: {
              badge: "Key Features",
              title: "Comprehensive",
              highlight: "Key Features",
              description:
                "Discover the extensive range of AI/ML capabilities that power our solutions",
            },
            categories: [
              "Core AI/ML",
              "Data & Analytics",
              "Infrastructure",
              "Security",
              "Monitoring",
              "Business Intelligence",
            ],
            items: keyFeatures,
          },
          {
            type: "benefits",
            variant: "icon-strip",
            header: {
              badge: "Key Benefits",
              title: "Why Choose",
              highlight: "AI/ML Solutions?",
              description:
                "Our AI/ML solutions deliver measurable results and competitive advantages",
            },
            items: inlineBenefits,
          },
          {
            type: "cards",
            variant: "bento",
            header: {
              badge: "Our Services",
              title: "Our AI/ML",
              highlight: "Services",
              description:
                "Comprehensive AI/ML solutions tailored to your business needs",
            },
            items: serviceCards,
            columns: 3,
          },
          {
            type: "use-cases",
            header: {
              badge: "Use Cases",
              title: "Industry",
              highlight: "Use Cases",
              description:
                "Discover how AI/ML is transforming different industries",
            },
            items: useCases,
          },
          {
            type: "tech-grid",
            variant: "scroll",
            header: {
              badge: "Technologies",
              title: "Technologies",
              highlight: "We Use",
              description:
                "Cutting-edge tools and frameworks for building robust AI/ML solutions",
            },
            items: technologies,
          },
          {
            type: "process",
            variant: "timeline",
            header: {
              badge: "Our Process",
              title: "Our AI/ML Development",
              highlight: "Process",
              description:
                "A systematic approach to delivering successful AI/ML solutions",
            },
            steps: process,
          },
        ],
        cta: {
          title: "Ready to Harness AI/ML?",
          description:
            "Let's discuss how AI/ML can transform your business and drive growth",
          primaryLabel: "Get Free Consultation",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
