import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & ML Development Services | Ctas Info",
  description:
    "AI/ML solutions from Ctas: custom models, data pipelines, LLM/RAG, computer vision, and analytics tailored to your business.",
  keywords: [
    // Core AI/ML Services
    "AI software development company",
    "Artificial intelligence development",
    "Machine learning solutions",
    "Data analytics services",
    "Business intelligence solutions",
    "Predictive analytics services",
    "Big data solutions",
    "Data visualization services",

    // AI Specializations
    "Custom AI agent development for business",
    "Generative AI development company",
    "AI driven demand forecasting retail",
    "Machine learning for inventory optimization",
    "LLM fine-tuning for enterprise data",
    "AI powered customer support bots",
    "Predictive analytics for e-commerce",
    "Computer vision for warehouse automation",
    "AI based fraud detection systems",
    "Multi-agent AI orchestration services",
    "AI product description generator API",
    "Custom recommendation engine development",
    "AI search implementation e-commerce",
    "Agentic AI workflows for logistics",
    "Natural Language Processing (NLP) services",
    "Explainable AI (XAI) for business tools",
    "AI-driven dynamic pricing software",
    "Computer vision for retail analytics",
    "Generative AI for marketing automation",
    "Personalized AI shopping assistants",

    // Industry Applications
    "Healthcare AI solutions",
    "Fintech AI development",
    "Retail AI solutions",
    "Manufacturing AI applications",
    "Logistics AI optimization",
    "E-commerce AI automation"
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/ai-ml",
    languages: {
      "en-US": "https://www.ctasis.com/services/ai-ml",
      "en-IN": "https://www.ctasis.com/services/ai-ml",
      "x-default": "https://www.ctasis.com/services/ai-ml",
    },
  },
  openGraph: {
    title: "AI & Machine Learning Solutions for Enterprise Growth | Ctas",
    description: "Unlock business value with custom AI models and data-driven intelligence. Experts in LLM, Computer Vision, and Predictive Analytics.",
    url: "https://www.ctasis.com/services/ai-ml",
    images: [
      {
        url: "/ai-ml-banner.jpg",
        width: 1200,
        height: 630,
        alt: "AI & ML Development Services",
      },
    ],
  },
};

export default function AIMLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
