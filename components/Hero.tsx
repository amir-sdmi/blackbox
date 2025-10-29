"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import texts from "@/data/texts.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { title, description, cta } = texts.hero;
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="home" className="pt-40 pb-28 px-4 sm:px-6 lg:px-8 bg-black min-h-[90vh] flex items-center">
      <div
        ref={ref}
        className={`container mx-auto max-w-6xl text-center transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 text-white leading-tight">
          {title.main}
          <br />
          {title.accent.map((text, index) => (
            <span key={index} className="text-yellow-400">
              {text}
              {index !== title.accent.length - 1 ? "، " : ""}
            </span>
          ))}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          {description}
        </p>
        <Link
          href="#about"
          className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all inline-flex items-center gap-3 mx-auto shadow-2xl shadow-white/50 hover:shadow-yellow-400/50 transform hover:scale-105"
        >
          <ArrowLeft size={22} /> {cta}
        </Link>
      </div>
    </section>
  );
}
