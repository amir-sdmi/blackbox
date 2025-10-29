"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation<
  T extends HTMLElement = HTMLDivElement
>(options?: { threshold?: number; rootMargin?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || "0px",
      }
    );

    const target = ref.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isVisible };
}
