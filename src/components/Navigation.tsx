import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export function Navigation({ onMenuClick }: { onMenuClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "components", label: "Core Components" },
    { id: "why-hci", label: "Why HCI?" },
    { id: "three-pillars", label: "3 Pillars" },
    { id: "usability", label: "Usability Goals" },
    { id: "principles", label: "Design Principles" },
    { id: "interdisciplinary", label: "Interdisciplinary" },
    { id: "evolution", label: "Evolution" },
    { id: "ucd", label: "UCD" },
    { id: "future", label: "Future" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden text-gray-700 hover:text-cyan-600 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              HCI Guide
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-cyan-600 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="lg:hidden">
            <div className="text-gray-600 text-sm">Scroll to explore</div>
          </div>
        </div>
      </div>
    </nav>
  );
}