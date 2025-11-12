import { Book, Brain, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  currentChapter: "chapter1" | "chapter2" | "chapter3" | "chapter4" | "exam";
  onChapterChange: (chapter: "chapter1" | "chapter2" | "chapter3" | "chapter4" | "exam") => void;
}

export function Sidebar({ currentChapter, onChapterChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<"chapter1" | "chapter2" | "chapter3" | "chapter4" | "exam" | null>(currentChapter);

  const handleChapterChange = (chapter: "chapter1" | "chapter2" | "chapter3" | "chapter4" | "exam") => {
    onChapterChange(chapter);
    setExpandedChapter(chapter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleChapterExpansion = (chapter: "chapter1" | "chapter2" | "chapter3" | "chapter4" | "exam") => {
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

  const chapter3Sections = [
    { id: "hero-chapter3", label: "Computer in HCI" },
    { id: "ubiquitous-computing", label: "Ubiquitous Computing" },
    { id: "evolution-interactivity", label: "Evolution of Interactivity" },
    { id: "input-text-entry", label: "Text Entry" },
    { id: "input-pointing", label: "Pointing Devices" },
    { id: "output-visual", label: "Visual Displays" },
    { id: "output-beyond-screen", label: "Beyond Screen" },
    { id: "immersive-interaction", label: "VR & AR" },
    { id: "memory-processing", label: "Memory & Processing" },
    { id: "technology-shapes-interaction", label: "Technology Shapes Interaction" },
  ];

  const chapter4Sections = [
    { id: "hero-chapter4", label: "The Interaction" },
    { id: "key-terminologies", label: "Key Terminologies" },
    { id: "normans-seven-stages", label: "Norman's 7 Stages" },
    { id: "gulfs-execution-evaluation", label: "Gulfs of Execution & Evaluation" },
    { id: "slips-vs-mistakes", label: "Slips vs Mistakes" },
    { id: "abowd-beale-model", label: "Abowd & Beale Model" },
    { id: "interaction-styles", label: "Interaction Styles" },
    { id: "interaction-paradigms", label: "Interaction Paradigms" },
  ];

  const examSections = [
    { id: "exam-hero", label: "Exam Introduction" },
    { id: "multiple-choice", label: "Multiple Choice" },
    { id: "matching", label: "Matching" },
    { id: "true-false", label: "True / False" },
    { id: "fill-in-blanks", label: "Fill in the Blanks" },
    { id: "short-answer", label: "Short Answer" },
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
              expandedChapter === "chapter1" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
              expandedChapter === "chapter2" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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

          {/* Chapter 3 */}
          <div className="mb-4">
            <button
              onClick={() => toggleChapterExpansion("chapter3")}
              className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg transition-all duration-200 ${
                currentChapter === "chapter3"
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-500/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Chapter 3</div>
                  <div className="text-xs opacity-80">The Computer Interface</div>
                </div>
              </div>
              {expandedChapter === "chapter3" ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedChapter === "chapter3" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="mt-2 ml-4 space-y-1 border-l-2 border-teal-500/30 pl-4">
                {chapter3Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left text-sm text-gray-300 hover:text-teal-400 py-2 px-3 rounded hover:bg-gray-800/30 transition-all duration-200 transform hover:translate-x-1"
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60"></div>
                      {section.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="mb-4">
            <button
              onClick={() => toggleChapterExpansion("chapter4")}
              className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg transition-all duration-200 ${
                currentChapter === "chapter4"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21ZM14 10V12H16V10H14ZM16 14V16H14V14H16ZM20 15L18 17H22L20 15ZM20 19L22 21H18L20 19Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Chapter 4</div>
                  <div className="text-xs opacity-80">The Interaction</div>
                </div>
              </div>
              {expandedChapter === "chapter4" ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedChapter === "chapter4" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-500/30 pl-4">
                {chapter4Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left text-sm text-gray-300 hover:text-blue-400 py-2 px-3 rounded hover:bg-gray-800/30 transition-all duration-200 transform hover:translate-x-1"
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
                      {section.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Exam Section */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={() => toggleChapterExpansion("exam")}
              className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg transition-all duration-200 ${
                currentChapter === "exam"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Mid-Term Exam</div>
                  <div className="text-xs opacity-80">Interactive Assessment</div>
                </div>
              </div>
              {expandedChapter === "exam" ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedChapter === "exam" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="mt-2 ml-4 space-y-1 border-l-2 border-indigo-500/30 pl-4">
                {examSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left text-sm text-gray-300 hover:text-indigo-400 py-2 px-3 rounded hover:bg-gray-800/30 transition-all duration-200 transform hover:translate-x-1"
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60"></div>
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
