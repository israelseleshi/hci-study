import { Keyboard, Smartphone, Mic, PenTool } from "lucide-react";

export function InputTextEntry() {
  const inputMethods = [
    {
      icon: Keyboard,
      title: "The Keyboard",
      color: "bg-blue-500",
      description: "Primary text entry device for desktops and laptops",
      features: [
        {
          name: "QWERTY Layout",
          detail: "Originally designed for typewriters to prevent key jamming"
        },
        {
          name: "Ergonomics",
          detail: "Split keyboards, curved layouts to reduce RSI"
        },
        {
          name: "Key Types",
          detail: "Mechanical vs membrane keys for different feel"
        }
      ],
      example: "Standard desktop/laptop typing interface"
    },
    {
      icon: Smartphone,
      title: "Touchscreen Keyboards",
      color: "bg-green-500",
      description: "Evolution from numeric keypads to full on-screen QWERTY",
      features: [
        {
          name: "T9 Predictive Text",
          detail: "Multiple presses per letter → single keypress prediction"
        },
        {
          name: "On-Screen QWERTY",
          detail: "Full keyboard flexibility in small form factor"
        },
        {
          name: "Smart Features",
          detail: "Autocorrect and predictive text improve speed/accuracy"
        }
      ],
      example: "Smartphone typing with predictive suggestions"
    },
    {
      icon: Mic,
      title: "Speech Recognition",
      color: "bg-purple-500",
      description: "Voice input converted to text through waveform analysis",
      features: [
        {
          name: "Voice Assistants",
          detail: '"Hey Siri, set timer" or "OK Google, weather today"'
        },
        {
          name: "Dictation Software",
          detail: "Doctor dictating notes, writer drafting documents"
        },
        {
          name: "Car Integration",
          detail: "Hands-free calling and radio control while driving"
        }
      ],
      example: "Voice commands for hands-free operation"
    },
    {
      icon: PenTool,
      title: "Handwriting Recognition",
      color: "bg-orange-500",
      description: "Stylus writing converted to digital text",
      features: [
        {
          name: "Note-Taking Apps",
          detail: "Apple Pencil + iPad with Notability/GoodNotes"
        },
        {
          name: "Signature Capture",
          detail: "Package delivery devices with stylus signing"
        },
        {
          name: "Searchable Text",
          detail: "Handwritten notes become searchable digital content"
        }
      ],
      example: "Student taking handwritten notes that convert to text"
    }
  ];

  return (
    <section id="input-text-entry" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            Input Devices: Text Entry
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Input devices are the physical bridge between user intent and system action. 
            Text entry remains the most common form of computer input across all platforms.
          </p>
        </div>

        {/* Input Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {inputMethods.map((method, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              {/* Method Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-slate-800">{method.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{method.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-6">
                {method.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white rounded-lg p-4 border border-slate-100">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-800 text-sm mb-1">{feature.name}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{feature.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Example */}
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-4 border-l-4 border-slate-400">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Example</div>
                <div className="text-sm text-slate-700 font-medium">{method.example}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Evolution Timeline */}
        <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200 p-8">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            Text Entry Evolution
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Typewriter Era */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mb-3">
                <Keyboard className="w-8 h-8 text-slate-600" />
              </div>
              <div className="text-sm font-mono text-slate-600 mb-1">1870s</div>
              <div className="text-xs text-slate-500">Mechanical Typewriter</div>
              <div className="text-xs text-slate-400">QWERTY Layout Born</div>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>

            {/* Computer Era */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-mono text-slate-600 mb-1">1980s</div>
              <div className="text-xs text-slate-500">PC Keyboards</div>
              <div className="text-xs text-slate-400">Digital Text Entry</div>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>

            {/* Mobile Era */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-mono text-slate-600 mb-1">2000s</div>
              <div className="text-xs text-slate-500">T9 & Touchscreens</div>
              <div className="text-xs text-slate-400">Predictive Text</div>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>

            {/* Voice Era */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-mono text-slate-600 mb-1">2010s</div>
              <div className="text-xs text-slate-500">Voice Recognition</div>
              <div className="text-xs text-slate-400">Natural Language</div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-mono font-semibold text-blue-800 mb-3">QWERTY Persistence</h4>
            <p className="text-sm text-blue-700 leading-relaxed">
              Despite more efficient layouts like Dvorak existing, QWERTY's widespread adoption 
              makes it the de facto standard—a classic example of how historical decisions 
              shape modern interfaces.
            </p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h4 className="font-mono font-semibold text-purple-800 mb-3">Speech Limitations</h4>
            <p className="text-sm text-purple-700 leading-relaxed">
              While powerful, speech recognition is still limited by accuracy, background noise sensitivity, 
              and accent understanding—showing that no single input method is perfect for all contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
