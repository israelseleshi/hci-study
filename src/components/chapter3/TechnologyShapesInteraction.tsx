import { Terminal, Mouse, Smartphone, Mic, Headphones, ArrowRight, Lightbulb } from "lucide-react";

export function TechnologyShapesInteraction() {
  const interactionEras = [
    {
      era: "Command-Line Era",
      period: "1970s-1980s",
      icon: Terminal,
      color: "bg-slate-500",
      technology: "Keyboard + Text-only displays",
      style: "Typed 'conversation' with formal command language",
      characteristics: [
        "Text-based interface",
        "Memorized commands required",
        "No visual metaphors",
        "Expert users only"
      ],
      example: "$ ls -la /home/user"
    },
    {
      era: "WIMP/GUI Era",
      period: "1980s-2000s",
      icon: Mouse,
      color: "bg-blue-500",
      technology: "Mouse + Bitmap screens",
      style: "Visual, metaphorical interaction (Windows, Icons, Menus, Pointer)",
      characteristics: [
        "Desktop metaphor",
        "Point-and-click interaction",
        "Visual feedback",
        "Accessible to general users"
      ],
      example: "Click folder → Double-click file → Drag to trash"
    },
    {
      era: "Mobile Era",
      period: "2000s-2010s",
      icon: Smartphone,
      color: "bg-green-500",
      technology: "Touchscreens + Internal sensors",
      style: "Direct manipulation, gestural control, location-aware apps",
      characteristics: [
        "Touch-based interaction",
        "Multi-touch gestures",
        "Context awareness",
        "Always connected"
      ],
      example: "Pinch to zoom, swipe to scroll, tap to select"
    },
    {
      era: "Voice Era",
      period: "2010s-Present",
      icon: Mic,
      color: "bg-purple-500",
      technology: "Advanced microphones + Speech recognition",
      style: "Conversational interaction with smart assistants",
      characteristics: [
        "Natural language input",
        "Hands-free operation",
        "Contextual understanding",
        "Ambient computing"
      ],
      example: "Hey Siri, remind me to call mom at 3 PM"
    },
    {
      era: "Immersive Era",
      period: "2020s-Future",
      icon: Headphones,
      color: "bg-teal-500",
      technology: "VR headsets + 3D trackers + AR cameras",
      style: "Spatial and gestural interaction beyond 2D screens",
      characteristics: [
        "3D spatial interaction",
        "Hand/eye tracking",
        "Mixed reality",
        "Embodied presence"
      ],
      example: "Reach out and grab virtual objects with your hands"
    }
  ];

  return (
    <section id="technology-shapes-interaction" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            How Technology Shapes Interaction
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The central theme: computer technology is not just a technical detail—it is the primary force 
            that shapes the very nature of human-computer interaction.
          </p>
        </div>

        {/* Key Insight */}
        <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-mono font-bold text-teal-800 mb-4">Central Insight</h3>
              <p className="text-lg text-teal-700 leading-relaxed mb-4">
                The style of interaction we design is a <strong>direct product of the tools we have to build it</strong>. 
                Technology doesn't just enable interaction—it fundamentally defines and constrains it.
              </p>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-sm text-teal-700 italic">
                  "The devices we use are the vocabulary of our design language. As technology advances, 
                  our interaction possibilities expand exponentially."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Evolutionary Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-mono font-bold text-slate-800 mb-12 text-center">
            An Evolutionary Path of Interaction Styles
          </h3>
          
          <div className="space-y-8">
            {interactionEras.map((era, index) => (
              <div key={index} className="relative">
                {/* Era Card */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Era Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 ${era.color} rounded-xl flex items-center justify-center`}>
                          <era.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-mono font-bold text-slate-800">{era.era}</h4>
                          <div className="text-sm text-slate-500 font-mono">{era.period}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-mono font-semibold text-slate-600 uppercase tracking-wider mb-2">Technology</h5>
                        <p className="text-sm text-slate-700">{era.technology}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-mono font-semibold text-slate-600 uppercase tracking-wider mb-2">Style</h5>
                        <p className="text-sm text-slate-700">{era.style}</p>
                      </div>
                    </div>

                    {/* Characteristics */}
                    <div className="lg:col-span-1">
                      <h5 className="text-sm font-mono font-semibold text-slate-600 uppercase tracking-wider mb-4">Characteristics</h5>
                      <ul className="space-y-3">
                        {era.characteristics.map((char, charIndex) => (
                          <li key={charIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-slate-700">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example */}
                    <div className="lg:col-span-1">
                      <h5 className="text-sm font-mono font-semibold text-slate-600 uppercase tracking-wider mb-4">Example</h5>
                      <div className="bg-white rounded-lg p-4 border border-slate-200">
                        <code className="text-sm text-slate-800 font-mono">{era.example}</code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow to next era */}
                {index < interactionEras.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="flex items-center gap-2 text-slate-400">
                      <ArrowRight className="w-6 h-6" />
                      <span className="text-sm font-mono">Evolution</span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technology-Interaction Matrix */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 mb-16">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            Technology → Interaction Style Matrix
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left font-mono font-semibold text-slate-700 py-4 px-4">Input Technology</th>
                  <th className="text-left font-mono font-semibold text-slate-700 py-4 px-4">Output Technology</th>
                  <th className="text-left font-mono font-semibold text-slate-700 py-4 px-4">Resulting Interaction Style</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-600">Keyboard only</td>
                  <td className="py-3 px-4 text-slate-600">Text terminal</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Command-line interface</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-600">Keyboard + Mouse</td>
                  <td className="py-3 px-4 text-slate-600">Bitmap display</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">WIMP (Windows, Icons, Menus, Pointer)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-600">Touchscreen</td>
                  <td className="py-3 px-4 text-slate-600">High-res mobile display</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Direct manipulation + gestures</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-600">Voice recognition</td>
                  <td className="py-3 px-4 text-slate-600">Speech synthesis</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Conversational interface</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-600">Hand/eye tracking</td>
                  <td className="py-3 px-4 text-slate-600">VR/AR displays</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Spatial 3D interaction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Future Implications */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-200 p-8 mb-16">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-6 text-center">
            Future Technology → Future Interactions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-4">Emerging Technologies</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Brain-Computer Interfaces:</strong> Direct neural control
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Haptic Suits:</strong> Full-body tactile feedback
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>AI Agents:</strong> Intelligent interface mediators
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Quantum Computing:</strong> Instantaneous processing
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-4">Potential Interaction Styles</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Thought-based:</strong> Control by intention alone
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Embodied:</strong> Full-body presence in digital spaces
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Predictive:</strong> AI anticipates user needs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Seamless:</strong> Invisible, ambient computing
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Thought */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-mono font-bold text-white mb-6">Final Thought</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              As a student or practitioner of HCI, it is crucial to understand both human psychology 
              <strong className="text-white"> and </strong>the capabilities and limitations of technology itself.
            </p>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-teal-400">The Challenge:</strong> As technology advances, offering faster, smaller, 
                and more diverse ways to interact, the opportunity for HCI professionals is to harness 
                these new capabilities to create interactions that are more natural, more powerful, 
                and more seamlessly integrated into our human lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
