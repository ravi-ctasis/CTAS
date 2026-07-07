import type { LucideIcon } from "lucide-react";

export type ServiceStat = {
  number: string;
  label: string;
  icon: LucideIcon;
  description?: string;
};

export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  pills?: string[];
  tags?: string[];
  platforms?: string[];
  technologies?: string[];
  benefits?: string[];
};

export type ServiceBenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceTechItem = {
  name: string;
  icon?: LucideIcon;
  level?: string;
};

export type ServiceTechCategory = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  technologies: ServiceTechItem[];
};

export type ServiceTabItem = {
  id: string;
  title: string;
  content: string;
  points?: string[];
};

export type ServiceUseCase = {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits?: string[];
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceMarketplaceItem = {
  title: string;
  description?: string;
  supportedMarketplaces: string[];
  keyBenefits: string;
  icon: LucideIcon;
};

export type ServiceSectionHeader = {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
};

export type ServiceSection =
  | {
      type: "cards";
      header: ServiceSectionHeader;
      items: ServiceCardItem[];
      columns?: 2 | 3;
      variant?: "default" | "horizontal" | "bento" | "alternating" | "scroll";
    }
  | {
      type: "benefits";
      header: ServiceSectionHeader;
      items: ServiceBenefitItem[];
      variant?: "grid" | "zigzag" | "icon-strip";
    }
  | {
      type: "process";
      header: ServiceSectionHeader;
      steps: ServiceProcessStep[];
      variant?: "grid" | "timeline" | "horizontal";
    }
  | {
      type: "tech-grid";
      header: ServiceSectionHeader;
      items: ServiceTechItem[];
      variant?: "grid" | "scroll";
    }
  | {
      type: "tech-categories";
      header: ServiceSectionHeader;
      categories: ServiceTechCategory[];
    }
  | {
      type: "tabs";
      header: ServiceSectionHeader;
      tabs: ServiceTabItem[];
      defaultTab?: string;
    }
  | {
      type: "use-cases";
      header: ServiceSectionHeader;
      items: ServiceUseCase[];
    }
  | {
      type: "filter-features";
      header: ServiceSectionHeader;
      categories: string[];
      items: { title: string; description: string; icon: LucideIcon; category: string }[];
    }
  | {
      type: "process-sidebar";
      header: ServiceSectionHeader;
      steps: { step: string; title: string; description: string; icon: LucideIcon }[];
      sidebar: {
        title: string;
        description: string;
        items: string[];
        highlights?: string[];
      };
    }
  | {
      type: "marketplace-grid";
      header: ServiceSectionHeader;
      items: ServiceMarketplaceItem[];
      logos?: Record<string, string>;
      variant?: "grid" | "scroll" | "alternating";
    }
  | {
      type: "faq";
      header: ServiceSectionHeader;
      items: ServiceFaqItem[];
    }
  | {
      type: "spotlight";
      header: ServiceSectionHeader;
      metrics: ServiceStat[];
      description?: string;
    }
  | {
      type: "integrations";
      header: ServiceSectionHeader;
      categories: { title: string; icon: LucideIcon; items: string[] }[];
    };

export type ServicePageConfig = {
  ariaLabel: string;
  structuredData?: object;
  hero: {
    badge: string;
    title: string;
    highlight?: string;
    description: string;
    stats?: ServiceStat[];
    primaryCta?: ServiceCta;
    secondaryCta?: ServiceCta;
  };
  sections: ServiceSection[];
  cta: {
    title: string;
    description: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};
