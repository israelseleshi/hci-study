import { Book, Brain, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  currentChapter: "chapter1" | "chapter2";
  onChapterChange: (chapter: "chapter1" | "chapter2") => void;
}

export function Sidebar({ currentChapter, onChapterChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<"chapter1" | "chapter2" | null>(currentChapter);

  const handleChapterChange = (chapter: "chapter1" | "chapter2") => {
    onChapterChange(chapter);
    setExpandedChapter(chapter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleChapterExpansion = (chapter: "chapter1" | "chapter2") => {
    if (expandedChapter === chapter) {
      setExpandedChapter(null);
    } else {
      setExpandedChapter(chapter);
      handleChapterChange(chapter);
    }
  };

  const chapter1Sections = [
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

  const chapter2Sections = [
    { id: "input-output", label: "Input-Output Channels" },
    { id: "vision", label: "Vision" },
    { id: "hearing", label: "Hearing" },
    { id: "touch", label: "Touch" },
    { id: "motor", label: "Motor Control" },
    { id: "fitts", label: "Fitts's Law" },
    { id: "sensory-memory", label: "Sensory Memory" },
    { id: "stm", label: "Short-Term Memory" },
    { id: "ltm", label: "Long-Term Memory" },
    { id: "knowledge", label: "Knowledge Organization" },
    { id: "reasoning", label: "Reasoning" },
    { id: "errors", label: "Errors & Emotion" },
    { id: "individual", label: "Individual Differences" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-3 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 ${
          isOpen ? "translate-x-80" : "translate-x-0"
        }`}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white transform transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "w-80 md:w-80 translate-x-0" : "w-0 -translate-x-full"
        }`}
      >
        <div className={`p-6 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}>
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-8">
            <h2 className="text-cyan-400 mb-8 text-xl font-bold">HCI Educational Guide</h2>
          </div>

          {/* Chapter 1 */}
          <div className="mb-4">
            <button
              onClick={() => toggleChapterExpansion("chapter1")}
              className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg transition-all duration-200 ${
                currentChapter === "chapter1"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <Book className="w-5 h-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm font-medium">Chapter 1</div>
                  <div className="text-xs opacity-80">Introduction to HCI</div>
                </div>
              </div>
              {expandedChapter === "chapter1" ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedChapter === "chapter1" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="mt-2 ml-4 space-y-1 border-l-2 border-cyan-500/30 pl-4">
                {chapter1Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left text-sm text-gray-300 hover:text-cyan-400 py-2 px-3 rounded hover:bg-gray-800/30 transition-all duration-200 transform hover:translate-x-1"
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60"></div>
                      {section.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="mb-4">
            <button
              onClick={() => toggleChapterExpansion("chapter2")}
              className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg transition-all duration-200 ${
                currentChapter === "chapter2"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm font-medium">Chapter 2</div>
                  <div className="text-xs opacity-80">The Human Interface</div>
                </div>
              </div>
              {expandedChapter === "chapter2" ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedChapter === "chapter2" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="mt-2 ml-4 space-y-1 border-l-2 border-purple-500/30 pl-4">
                {chapter2Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left text-sm text-gray-300 hover:text-purple-400 py-2 px-3 rounded hover:bg-gray-800/30 transition-all duration-200 transform hover:translate-x-1"
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                      {section.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
