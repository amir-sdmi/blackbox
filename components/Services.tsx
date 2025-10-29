"use client";

import { Check } from "lucide-react";
import texts from "@/data/texts.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ServiceItem = (typeof texts.services.items)[number];

export default function Services() {
  const { title, subtitle, items } = texts.services;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section id="service" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
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
          <p className="text-gray-400 text-lg font-light">{subtitle}</p>
        </div>
        <ServiceCardGrid items={items} />
      </div>
    </section>
  );
}

function ServiceCardGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl border border-gray-900 bg-gray-950/50 hover:border-yellow-400/50 hover:bg-gray-950 transition-all hover:shadow-xl hover:shadow-yellow-400/10 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-white/30">
          <Check className="text-black" size={26} strokeWidth={2.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {service.description}
          </p>
          {service.points && service.points.length > 0 && (
            <ul className="mt-4 space-y-2 text-gray-400 text-sm pr-4 marker:text-yellow-400 list-disc list-inside">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
