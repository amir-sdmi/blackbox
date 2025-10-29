"use client";

import texts from "@/data/texts.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { title, subtitle, form } = texts.contact;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      id="contact-with-us"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-5 text-white">{title}</h2>
          <p className="text-gray-400 text-lg font-light">{subtitle}</p>
        </div>
        <form
          ref={formRef}
          className={`bg-gray-950/50 p-10 rounded-2xl space-y-6 border border-gray-900 shadow-xl transition-all duration-700 ease-out ${
            formVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={form.namePlaceholder}
              className="w-full px-6 py-4 bg-black/50 border border-gray-900 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            />
            <input
              type="email"
              placeholder={form.emailPlaceholder}
              className="w-full px-6 py-4 bg-black/50 border border-gray-900 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            />
          </div>
          <input
            type="text"
            placeholder={form.subjectPlaceholder}
            className="w-full px-6 py-4 bg-black/50 border border-gray-900 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
          />
          <textarea
            placeholder={form.messagePlaceholder}
            rows={7}
            className="w-full px-6 py-4 bg-black/50 border border-gray-900 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 resize-none transition-all"
          />
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-2xl shadow-white/50 hover:shadow-yellow-400/50 transform hover:scale-105"
            >
              {form.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

