import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioDetails from "@/components/PortfolioDetails";
import {
  projectsData,
  findProjectBySlug,
  type ProjectDetail,
} from "@/data/projectsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = findProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "پروژه نامشخص | Doob",
    };
  }

  return {
    title: `${project.card.title} | Doob`,
    description: project.lead,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = findProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Fixed Left Gradient Glow */}
      <div className="fixed left-0 top-0 bottom-0 w-[600px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/10 to-transparent blur-3xl opacity-40"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-white/15 blur-2xl opacity-30"></div>
      </div>

      {/* Fixed Right Gradient Glow */}
      <div className="fixed right-0 top-0 bottom-0 w-[600px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-linear-to-b from-yellow-400/30 via-yellow-400/15 to-transparent blur-3xl opacity-50"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-yellow-400/10 to-yellow-400/20 blur-2xl opacity-40"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <PortfolioDetails project={project} relatedProjects={relatedProjects} />
        <Footer />
      </div>
    </div>
  );
}

function getRelatedProjects(project: ProjectDetail) {
  if (project.relatedSlugs?.length) {
    return project.relatedSlugs
      .map((slug) => findProjectBySlug(slug))
      .filter((item): item is ProjectDetail => Boolean(item));
  }

  return projectsData.filter((item) => item.slug !== project.slug).slice(0, 4);
}
