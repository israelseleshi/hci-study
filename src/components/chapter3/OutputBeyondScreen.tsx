import { Volume2, Vibrate, FileText, Navigation, Smartphone, Scan } from "lucide-react";

export function OutputBeyondScreen() {
  const outputChannels = [
    {
      icon: Volume2,
      title: "Auditory Output",
      color: "bg-blue-500",
      description: "Sound conveys information without requiring visual attention",
      advantages: [
        "Hands-free information delivery",
        "Works while eyes are occupied",
        "Spatial audio for direction"
      ],
      examples: [
        {
          name: "GPS Navigation",
          detail: "Turn-by-turn directions while driving",
          benefit: "Keeps eyes on road for safety"
        },
        {
          name: "Screen Readers",
          detail: "Text-to-speech for visually impaired",
          benefit: "Accessibility for blind users"
        },
        {
          name: "Audio Alerts",
          detail: "System notifications and warnings",
          benefit: "Immediate attention without looking"
        }
      ]
    },
    {
      icon: Vibrate,
      title: "Haptic Output",
      color: "bg-purple-500",
      description: "Touch feedback through vibrations and force",
      advantages: [
        "Subtle confirmation feedback",
        "Works in silent environments",
        "Enhances immersion"
      ],
      examples: [
        {
          name: "Smartphone Keyboards",
          detail: "Vibration with each keypress",
          benefit: "Confirms input registration"
        },
        {
          name: "Game Controllers",
          detail: "Rumble effects during gameplay",
          benefit: "Immersive gaming experience"
        },
        {
          name: "Smartwatch Alerts",
          detail: "Gentle taps for notifications",
          benefit: "Discreet notification delivery"
        }
      ]
    },
    {
      icon: FileText,
      title: "Paper as I/O",
      color: "bg-green-500",
      description: "Bridging physical and digital worlds",
      advantages: [
        "Permanent physical record",
        "No power requirements",
        "Familiar interaction model"
      ],
      examples: [
        {
          name: "Document Printing",
          detail: "Digital to physical conversion",
          benefit: "Shareable, archival format"
        },
        {
          name: "OCR Scanning",
          detail: "Physical to digital conversion",
          benefit: "Searchable digital documents"
        },
        {
          name: "Mobile Scanning",
          detail: "Smartphone camera + OCR",
          benefit: "Instant digitization anywhere"
        }
      ]
    }
  ];

  return (
    <section id="output-beyond-screen" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            Output and Interaction Beyond the Screen
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            While visual displays dominate, computers use many other channels to provide output 
            and create richer, more accessible interactive experiences.
          </p>
        </div>

        {/* Output Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {outputChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              {/* Channel Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${channel.color} rounded-xl flex items-center justify-center`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-slate-800">{channel.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{channel.description}</p>
                </div>
              </div>

              {/* Advantages */}
              <div className="mb-6">
                <h4 className="text-sm font-mono font-semibold text-slate-500 uppercase tracking-wider mb-3">Advantages</h4>
                <ul className="space-y-2">
                  {channel.advantages.map((advantage, advantageIndex) => (
                    <li key={advantageIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              <div className="space-y-4">
                {channel.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="font-semibold text-slate-800 text-sm mb-1">{example.name}</div>
                    <div className="text-xs text-slate-600 mb-2">{example.detail}</div>
                    <div className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200">
                      ✓ {example.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GPS Navigation Deep Dive */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-mono font-bold text-slate-800">
              Case Study: GPS Navigation Audio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-4">Why Audio Works</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Eyes Stay on Road:</strong> Critical safety requirement for driving
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Timely Delivery:</strong> Instructions arrive exactly when needed
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <strong>Spatial Context:</strong> "Turn right" is more intuitive than visual arrows
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-mono font-semibold text-blue-800 mb-3">Audio Instruction Flow</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-blue-700">"In 500 meters, turn right"</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-blue-700">"Turn right now"</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-blue-700">"Continue straight for 2 kilometers"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Haptic Feedback Deep Dive */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-mono font-bold text-slate-800">
              Haptic Feedback: The Invisible Interface
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Vibrate className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-mono font-semibold text-slate-800 mb-2">Confirmation</h4>
              <p className="text-sm text-slate-600">
                Brief vibration confirms keypress registration, improving typing accuracy
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Volume2 className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-mono font-semibold text-slate-800 mb-2">Silent Alerts</h4>
              <p className="text-sm text-slate-600">
                Notifications delivered without sound in quiet environments
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-mono font-semibold text-slate-800 mb-2">Immersion</h4>
              <p className="text-sm text-slate-600">
                Game controllers use rumble to enhance the gaming experience
              </p>
            </div>
          </div>
        </div>

        {/* Paper I/O Process */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-mono font-bold text-slate-800">
              Paper as Input and Output
            </h3>
          </div>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Despite predictions of a "paperless office," paper remains significant for information exchange. 
            HCI bridges the gap between physical and digital worlds.
          </p>

          {/* Process Flow */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-mono font-semibold text-slate-700 mb-6 text-center">
              Digital ↔ Physical Conversion Process
            </h4>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Paper Document */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-20 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="w-8 h-8 text-slate-600" />
                </div>
                <span className="text-sm font-mono text-slate-600">Paper Document</span>
              </div>

              {/* Scanner */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                  <Scan className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-mono text-slate-600">Scanner/Camera</span>
                <div className="text-xs text-slate-500 text-center mt-1">
                  Converts to<br/>digital image
                </div>
              </div>

              {/* OCR */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-mono font-bold text-sm">OCR</span>
                </div>
                <span className="text-sm font-mono text-slate-600">Text Recognition</span>
                <div className="text-xs text-slate-500 text-center mt-1">
                  Analyzes image<br/>for text
                </div>
              </div>

              {/* Digital Text */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-20 bg-slate-100 border-2 border-slate-300 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-xs font-mono text-slate-600 text-center leading-tight">
                    ABC<br/>123<br/>XYZ
                  </div>
                </div>
                <span className="text-sm font-mono text-slate-600">Searchable Text</span>
              </div>
            </div>
          </div>

          {/* Real Example */}
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-mono font-semibold text-green-800 mb-3">Real-Life Example: Adobe Scan</h4>
            <p className="text-sm text-green-700 leading-relaxed">
              Use your smartphone camera to photograph a paper document. The app automatically straightens 
              the image, improves contrast, and runs OCR. Result: a searchable PDF file that transforms 
              a physical piece of paper into a smart digital document.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
