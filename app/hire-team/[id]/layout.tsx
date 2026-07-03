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
      title: "Hire Developers | Ctas Info",
      description:
        "Hire expert remote developers for your projects. Scale your team with our dedicated developers.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Extract title from intro data if available, or use a default
  const introSection = page.sections.find((s) => s.sectionId === "intro");
  const introData = introSection?.data as any[];
  const pageTitle = introData?.[0]?.title || `Hire ${id.replace(/-/g, " ")} Developers`;

  return {
    title: `${pageTitle} | Hire Expert Remote Developers | CTAS`,
    description: `Hire top-tier ${id.replace(/-/g, " ")} developers. Scale your team with our expert remote developers specialized in ${id.replace(/-/g, " ")}. Save up to 60% on development costs.`,
    alternates: {
      canonical: `https://www.ctasis.com/hire-team/${id}`,
      languages: {
        "en-US": `https://www.ctasis.com/hire-team/${id}`,
        "en-IN": `https://www.ctasis.com/hire-team/${id}`,
        "x-default": `https://www.ctasis.com/hire-team/${id}`,
      },
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
