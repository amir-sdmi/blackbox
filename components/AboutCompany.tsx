"use client";

import texts from "@/data/texts.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutCompany() {
  const { title, paragraphs } = texts.about;
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-b border-white/5"
    >
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center">
          {title}
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

