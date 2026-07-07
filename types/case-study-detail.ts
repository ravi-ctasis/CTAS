export type CaseStudyDetailData = {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  industry: string;
  duration: string;
  teamSize: string;
  budget: string;
  status: string;
  technologies: string[];
  platforms: string[];
  stats: Record<string, string>;
  challenges: string[];
  solutions: string[];
  projectHighlights: string[];
  goals: string[];
  strategy: string[];
  outcomes: string[];
  client: {
    name: string;
    industry: string;
    size: string;
    location: string;
    description: string;
    requirements: string[];
    testimonial: {
      quote: string;
      author: string;
      position: string;
      avatar: string;
    };
  };
  proposedSolution: {
    description: string;
    whyChoose: string[];
  };
  benefits: string[];
  keyFeatures: { title: string; description: string }[];
  heroImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};
