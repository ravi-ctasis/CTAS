import { Metadata } from "next";
import { allPagesData } from "@/data/hire-page-data";

export async function generateStaticParams() {
  return allPagesData.map((page) => ({
    id: page.pageId,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const page = allPagesData.find((p) => p.pageId === id);

  if (!page) {
    return {
      title: "Hire Developers | Ctas Info Services",
      description:
        "Hire expert remote developers for your projects. Scale your team with our dedicated developers.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Normalize role name beautifully
  const cleanRole = id
    .replace(/^hire-/, "")
    .replace(/-developer$/, "")
    .split("-")
    .map((w) => {
      const lower = w.toLowerCase();
      if (lower === "php") return "PHP";
      if (lower === "aspnet") return "ASP.NET";
      if (lower === "mern") return "MERN Stack";
      if (lower === "mean") return "MEAN Stack";
      if (lower === "ui") return "UI";
      if (lower === "ux") return "UX";
      if (lower === "devops") return "DevOps";
      if (lower === "api") return "API";
      if (lower === "seo") return "SEO";
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
  
  const introSection = page.sections.find((s) => s.sectionId === "intro");
  const introData = introSection?.data?.[0] as any;
  const ogImageUrl = introData?.imageSrc || "/logo-icon.webp";

  const cleanTitle = `Hire ${cleanRole} Developers`;
  const cleanDesc = `Hire dedicated, skilled ${cleanRole} developers for your custom software solutions. Save up to 60% with our 10-day risk-free trial.`;

  return {
    title: cleanTitle,
    description: cleanDesc,
    alternates: {
      canonical: `https://www.ctasis.com/hire-team/${id}`,
      languages: {
        "en-US": `https://www.ctasis.com/hire-team/${id}`,
        "en-IN": `https://www.ctasis.com/hire-team/${id}`,
        "x-default": `https://www.ctasis.com/hire-team/${id}`,
      },
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDesc,
      url: `https://www.ctasis.com/hire-team/${id}`,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: cleanDesc,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
