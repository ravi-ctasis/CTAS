export type PortfolioIconName = string;

export type PortfolioHeroStat = {
  valueKey: string;
  label: string;
};

export type PortfolioTechItem = {
  name: string;
  icon: PortfolioIconName;
  description: string;
};

export type PortfolioTechCategory = {
  category: string;
  technologies: PortfolioTechItem[];
};

export type PortfolioFeature = {
  title: string;
  description: string;
  icon: PortfolioIconName;
};

export type PortfolioCard = {
  title: string;
  description: string;
  icon: PortfolioIconName;
  fullWidth?: boolean;
};

export type PortfolioListBlock = {
  variant: "list";
  number?: number;
  title: string;
  intro: string;
  items: string[];
  closing?: string;
  icon: PortfolioIconName;
};

export type PortfolioGroupedBlock = {
  variant: "grouped";
  number?: number;
  title: string;
  intro: string;
  groups: { title: string; items: string[] }[];
  closing?: string;
  icon: PortfolioIconName;
};

export type PortfolioSubsectionsBlock = {
  variant: "subsections";
  number?: number;
  title: string;
  intro: string;
  subsections: { title: string; description: string }[];
  icon: PortfolioIconName;
};

export type PortfolioContentBlock =
  | PortfolioListBlock
  | PortfolioGroupedBlock
  | PortfolioSubsectionsBlock;

export type PortfolioSection =
  | { type: "differentiators"; title?: string; items: PortfolioCard[] }
  | { type: "advantages"; title: string; items?: PortfolioFeature[] }
  | { type: "core-functionality"; title: string; subtitle?: string; blocks: PortfolioContentBlock[] }
  | { type: "critical-components"; title: string; subtitle?: string; blocks: PortfolioContentBlock[] }
  | { type: "card-grid"; title: string; subtitle?: string; columns?: 2 | 3; items: PortfolioCard[] }
  | { type: "feature-showcase"; title: string; subtitle?: string }
  | { type: "tech-stack"; description: string }
  | { type: "cta"; title: string; description: string; buttonLabel?: string };

export type PortfolioDetailData = {
  title: string;
  category: string;
  industry: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
  stats: Record<string, string>;
  year: string;
  duration: string;
  teamSize: string;
  budget: string;
  status?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  features: PortfolioFeature[];
  techStack: PortfolioTechCategory[];
  hero: {
    badge: string;
    badgeIcon: PortfolioIconName;
    titleLine1: string;
    titleLine2?: string;
    heroImage: { src: string; alt: string };
    heroStats: PortfolioHeroStat[];
    ctaLabel?: string;
  };
  sections: PortfolioSection[];
};
