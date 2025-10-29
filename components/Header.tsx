"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import texts from "@/data/texts.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logo, menuItems, buyNow } = texts.header;

  // Map Farsi menu items to section IDs
  const menuItemToId: Record<string, string> = {
    خانه: "home",
    خدمات: "service",
    پروژه‌ها: "projects",
    مشتریان: "clients",
    "تماس با ما": "contact-with-us",
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    e.preventDefault();
    const sectionId = menuItemToId[item];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white tracking-tight">
              {logo}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${menuItemToId[item] || ""}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors relative group cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-400 hover:text-black transition-all shadow-lg shadow-white/30 hover:shadow-yellow-400/50">
              {buyNow}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${menuItemToId[item] || ""}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="block text-gray-300 hover:text-white font-medium transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium w-full hover:bg-yellow-400 transition-all">
              {buyNow}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
