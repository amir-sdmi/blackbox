"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ProjectDetail } from "@/data/projectsData";

type RelatedProject = ProjectDetail;

export default function PortfolioDetails({
  project,
  relatedProjects,
}: {
  project: ProjectDetail;
  relatedProjects: RelatedProject[];
}) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Intro & Breadcrumb */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {project.breadcrumb.home}
            </Link>
            <span>/</span>
            <span className="text-white">{project.breadcrumb.details}</span>
          </div>

          <div className="inline-flex items-center px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-yellow-300 mb-6">
            {project.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
            {project.lead}
          </p>
        </div>

        {/* Project Media & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          <div className="lg:col-span-2 space-y-6">
            <ProjectImageGrid images={project.images} />
          </div>
          <div className="lg:col-span-1">
            <ProjectInfo info={project.info} />
          </div>
        </div>

        {/* Description */}
        <ProjectDescription description={project.description} />

        {/* Feature bullets */}
        <FeatureList features={project.features} />

        {/* Call to action */}
        <CTASection cta={project.cta} />

        {/* Information columns */}
        <InfoColumns columns={project.columns} />

        {/* Related projects */}
        <RelatedProjects
          title={project.relatedTitle}
          projects={relatedProjects}
        />
      </div>
    </section>
  );
}

type PortfolioImages = ProjectDetail["images"];

type PortfolioInfo = ProjectDetail["info"];

type PortfolioDescription = ProjectDetail["description"];

type PortfolioCTA = ProjectDetail["cta"];

type PortfolioColumns = ProjectDetail["columns"];

function ProjectImageGrid({ images }: { images: PortfolioImages }) {
  const { caption, main, gallery } = images;

  return (
    <div className="space-y-6">
      <ProjectImage image={main} caption={caption} variant="main" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {gallery.map((image, index) => (
          <ProjectImage
            key={index}
            image={image}
            caption={caption}
            variant="gallery"
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectImage({
  image,
  caption,
  variant,
  index = 0,
}: {
  image: string;
  caption: string;
  variant: "main" | "gallery";
  index?: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const heightClass = variant === "main" ? "h-[520px]" : "h-80 sm:h-96";

  return (
    <div
      ref={ref}
      className={`relative ${heightClass} rounded-3xl overflow-hidden group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Image
        src={image}
        alt={caption}
        fill
        priority={variant === "main"}
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        sizes={
          variant === "main"
            ? "(max-width: 1024px) 100vw, 66vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      <span className="absolute top-5 right-5 px-5 py-2 text-xs font-semibold rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur-sm">
        {caption}
      </span>
    </div>
  );
}

function ProjectInfo({ info }: { info: PortfolioInfo }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`bg-gray-950/60 border border-gray-900 rounded-3xl p-8 lg:sticky lg:top-28 space-y-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="text-2xl font-bold text-white mb-6">{info.title}</h3>
      <div className="space-y-5 text-sm">
        <ProjectInfoRow label={info.dateLabel} value={info.date} />
        <ProjectInfoRow label={info.clientLabel} value={info.client} />
        <ProjectInfoRow label={info.categoryLabel} value={info.category} />
      </div>
      <Link
        href="/#projects"
        className="w-full bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-lg shadow-white/20 hover:shadow-yellow-400/40"
      >
        <ArrowLeft size={18} />
        {info.viewProjectsButton}
      </Link>
    </div>
  );
}

function ProjectInfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-6 pb-5 border-b border-gray-800 last:border-none last:pb-0">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-white font-semibold text-sm">{value}</span>
    </div>
  );
}

function ProjectDescription({
  description,
}: {
  description: PortfolioDescription;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`mt-16 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h4 className="text-3xl font-bold text-white mb-8">
        {description.title}
      </h4>
      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        {description.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  if (!features?.length) return null;

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-sm">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 bg-gray-950/40 border border-gray-900 rounded-2xl px-5 py-4"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CTASection({ cta }: { cta: PortfolioCTA }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`mt-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-linear-to-r from-yellow-400/10 via-white/5 to-transparent border border-yellow-400/20 rounded-3xl px-8 py-10 md:px-12 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-yellow-400/40 text-yellow-300 text-xs uppercase tracking-widest">
            {cta.badge}
          </span>
          <p className="text-white text-2xl font-semibold leading-relaxed">
            {cta.title}
          </p>
        </div>
        <Link
          href={cta.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-yellow-400 transition-all shadow-lg shadow-white/30 hover:shadow-yellow-400/50"
        >
          {cta.button}
        </Link>
      </div>
    </div>
  );
}

function InfoColumns({ columns }: { columns: PortfolioColumns }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`mt-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-gray-950/50 border border-gray-900 rounded-3xl p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h5 className="text-lg font-semibold text-white">
                {column.title}
              </h5>
              <ul className="space-y-3 text-sm text-gray-400">
                {column.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelatedProjects({
  title,
  projects,
}: {
  title: string;
  projects: RelatedProject[];
}) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  if (!projects.length) return null;

  return (
    <div className="mt-24">
      <h4
        ref={headerRef}
        className={`text-3xl font-bold mb-10 text-white transition-all duration-700 ease-out ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <RelatedProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function RelatedProjectCard({
  project,
  index,
}: {
  project: RelatedProject;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-900 hover:border-yellow-400/50 group block"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.card.image}
            alt={project.card.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors"></div>
        </div>
        <div className="p-6 bg-gray-950">
          <h5 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
            {project.card.title}
          </h5>
          <p className="text-gray-400 text-sm">{project.card.category}</p>
        </div>
      </Link>
    </div>
  );
}
