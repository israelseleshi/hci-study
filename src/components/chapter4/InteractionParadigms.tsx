import { FileText, Terminal, Monitor, Globe, Smartphone, Brain } from "lucide-react";

export function InteractionParadigms() {
  const paradigms = [
    {
      era: "1950s-1960s",
      name: "Batch Processing",
      icon: FileText,
      color: "bg-slate-500",
      description: "Jobs submitted on punch cards, processed without user interaction",
      characteristics: ["No real-time interaction", "Batch job queues", "Punch card input"]
    },
    {
      era: "1970s-1980s", 
      name: "Command Line",
      icon: Terminal,
      color: "bg-blue-500",
      description: "Text-based interaction through typed commands",
      characteristics: ["Real-time response", "Expert-oriented", "Powerful but complex"]
    },
    {
      era: "1980s-1990s",
      name: "Desktop Metaphor",
      icon: Monitor,
      color: "bg-green-500", 
      description: "Graphical interfaces with windows, icons, and direct manipulation",
      characteristics: ["Visual metaphors", "Mouse interaction", "WIMP paradigm"]
    },
    {
      era: "1990s-2000s",
      name: "Web & Hypertext",
      icon: Globe,
      color: "bg-purple-500",
      description: "Networked information spaces with hyperlinked documents",
      characteristics: ["Global connectivity", "Hypertext navigation", "Browser-based"]
    },
    {
      era: "2000s-2010s",
      name: "Mobile & Touch",
      icon: Smartphone,
      color: "bg-orange-500",
      description: "Touch-based interaction with gesture recognition",
      characteristics: ["Direct manipulation", "Multi-touch gestures", "Context awareness"]
    },
    {
      era: "2010s-Present",
      name: "Context-Aware Computing",
      icon: Brain,
      color: "bg-red-500",
      description: "AI-powered systems that adapt to user context and behavior",
      characteristics: ["Machine learning", "Predictive interfaces", "Ambient computing"]
    }
  ];

  return (
    <section id="interaction-paradigms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Interaction Paradigms: The History of Ideas
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The evolution of human-computer interaction paradigms reflects our growing 
            understanding of how humans and computers can work together effectively.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200"></div>
          
          <div className="space-y-12">
            {paradigms.map((paradigm, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline Node */}
                <div className={`w-16 h-16 ${paradigm.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <paradigm.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-mono text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                          {paradigm.era}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-800">{paradigm.name}</h3>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {paradigm.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                          Key Characteristics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {paradigm.characteristics.map((char, charIndex) => (
                            <span key={charIndex} className="text-xs bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Trends */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Looking Forward: Emerging Paradigms
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-300 mb-2">AI-Powered Interfaces</h4>
              <p className="text-sm text-slate-300">
                Intelligent systems that understand context and anticipate user needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥽</span>
              </div>
              <h4 className="font-bold text-purple-300 mb-2">Immersive Computing</h4>
              <p className="text-sm text-slate-300">
                VR/AR environments that blend digital and physical worlds
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-bold text-green-300 mb-2">Brain-Computer Interfaces</h4>
              <p className="text-sm text-slate-300">
                Direct neural control of computer systems through thought
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
