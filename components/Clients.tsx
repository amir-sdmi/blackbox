"use client";

import Image from "next/image";
import texts from "@/data/texts.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Clients() {
  const { title, subtitle, brands } = texts.clients;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
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
        <BrandGrid brands={brands} />
      </div>
    </section>
  );
}

function BrandGrid({ brands }: { brands: typeof texts.clients.brands }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
      {brands.map((client, index) => (
        <BrandCard key={index} client={client} index={index} />
      ))}
    </div>
  );
}

function BrandCard({
  client,
  index,
}: {
  client: (typeof texts.clients.brands)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-gray-950/50 h-32 rounded-xl flex items-center justify-center border border-gray-900 hover:border-yellow-400/50 transition-all hover:bg-gray-950 group relative overflow-hidden ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Image
        src={client.image}
        alt={client.name}
        fill
        className="object-contain p-4 opacity-60 group-hover:opacity-100 transition-opacity"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  );
}
