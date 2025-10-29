import texts from "@/data/texts.json";

export default function Footer() {
  const { links, copyright } = texts.footer;

  return (
    <footer className="bg-black text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 flex-wrap justify-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-yellow-400 transition-colors text-gray-400 font-medium text-sm"
              >
                {link.text}
              </a>
            ))}
          </div>
          <p className="text-gray-500 font-semibold text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

