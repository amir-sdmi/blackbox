"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import texts from "@/data/texts.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projectsData, type ProjectDetail } from "@/data/projectsData";

export default function Projects() {
  const { title, subtitle, filters, defaultFilter, loadMore } = texts.projects;
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "همه") return true;
    return project.card.filter === activeFilter;
  });

  const loadMoreHref = filteredProjects.length
    ? `/projects/${filteredProjects[0].slug}`
    : "#";

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-5 text-white">{title}</h2>
          <p className="text-gray-400 text-lg font-light mb-10">{subtitle}</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-white text-black shadow-lg shadow-white/30 hover:bg-yellow-400"
                    : "bg-gray-950/50 text-gray-400 hover:bg-gray-950 border border-gray-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        {filteredProjects.length > 0 ? (
          <ProjectCardGrid projects={filteredProjects} />
        ) : (
          <p className="text-gray-500 text-sm text-center">
            پروژه‌ای برای این فیلتر موجود نیست.
          </p>
        )}
        <div className="text-center mt-14">
          <Link
            href={loadMoreHref}
            className="inline-flex items-center justify-center px-10 py-3.5 bg-gray-950 border-2 border-gray-900 text-gray-400 rounded-full font-semibold hover:bg-white hover:border-white hover:text-black transition-all"
          >
            {loadMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCardGrid({ projects }: { projects: ProjectDetail[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectDetail;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-900 hover:border-yellow-400/50 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.card.image}
            alt={project.card.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
        </div>
        <div className="p-6 bg-gray-950">
          <h4 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
            {project.card.title}
          </h4>
          <p className="text-gray-400 text-sm">{project.card.category}</p>
        </div>
      </Link>
    </div>
  );
}
