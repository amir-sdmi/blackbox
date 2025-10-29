"use client";

import { executedProjects } from "@/data/executedProjects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExecutedProjects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="executed-projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div
        ref={ref}
        className={`container mx-auto max-w-7xl transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center">
          پروژه‌های اجرایی
        </h2>
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="min-w-full text-right text-sm text-gray-200">
            <thead className="text-xs uppercase tracking-wider text-gray-400 bg-black/40">
              <tr>
                <th className="px-6 py-4">شرح</th>
                <th className="px-6 py-4">کارفرما</th>
                <th className="px-6 py-4">سال</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {executedProjects.map((project, index) => (
                <tr
                  key={`${project.client}-${index}`}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-sm leading-relaxed text-gray-100">
                    {project.description}
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">
                    {project.client}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{project.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

