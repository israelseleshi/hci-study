import { Mouse, Touchpad, Circle, Hand, PenTool, Eye } from "lucide-react";

export function InputPointing() {
  const pointingDevices = [
    {
      icon: Mouse,
      title: "The Mouse",
      color: "bg-blue-500",
      description: "Quintessential pointing device invented by Douglas Engelbart (1960s)",
      features: [
        "Relative positioning control",
        "Mechanical → Optical → Laser evolution",
        "Two+ buttons + scroll wheel standard"
      ],
      advantages: ["Precise cursor control", "Familiar interaction model", "Wide compatibility"],
      useCases: "Desktop computers, gaming, precision work"
    },
    {
      icon: Touchpad,
      title: "Touchpad/Trackpad",
      color: "bg-green-500",
      description: "Standard built-in pointing device for laptops",
      features: [
        "Touch-sensitive surface control",
        "Multi-touch gesture support",
        "Pinch, swipe, scroll gestures"
      ],
      advantages: ["No external device needed", "Multi-touch capabilities", "Space efficient"],
      useCases: "Laptops, portable computing, gesture navigation"
    },
    {
      icon: Circle,
      title: "Trackball",
      color: "bg-orange-500",
      description: "Upside-down mouse with stationary housing",
      features: [
        "Roll ball in fixed position",
        "Minimal arm/wrist movement",
        "Very small desk space required"
      ],
      advantages: ["Ergonomic for RSI users", "Space-saving design", "Precise control"],
      useCases: "Industrial panels, naval ships, ergonomic workstations"
    },
    {
      icon: Hand,
      title: "Touchscreens",
      color: "bg-purple-500",
      description: "Direct manipulation with finger input",
      features: [
        "Capacitive/resistive technology",
        "Direct object interaction",
        "No cursor needed"
      ],
      advantages: ["Intuitive direct manipulation", "No intermediate device", "Natural gestures"],
      useCases: "Smartphones, tablets, kiosks, ATMs"
    },
    {
      icon: PenTool,
      title: "Stylus & Digital Pens",
      color: "bg-red-500",
      description: "High-precision pen-like input device",
      features: [
        "Pressure sensitivity (thousands of levels)",
        "Tilt and rotation detection",
        "Palm rejection technology"
      ],
      advantages: ["Artistic precision", "Natural writing feel", "Pressure variation"],
      useCases: "Digital art, medical imaging, note-taking"
    },
    {
      icon: Eye,
      title: "Eyegaze Tracking",
      color: "bg-teal-500",
      description: "Camera + infrared tracking of pupil movement",
      features: [
        "Pupil position tracking",
        "Dwell-time or blink clicking",
        "High precision calibration"
      ],
      advantages: ["Hands-free operation", "Fast target acquisition", "Accessibility enabler"],
      useCases: "Accessibility (ALS, spinal injuries), research, specialized interfaces"
    }
  ];

  const gestureExamples = [
    { name: "Pinch In", description: "Zoom out of map/photo", icon: "👌" },
    { name: "Pinch Out", description: "Zoom into content", icon: "🤏" },
    { name: "Two-Finger Scroll", description: "Navigate web pages", icon: "✌️" },
    { name: "Three-Finger Swipe", description: "Switch applications", icon: "🖐️" }
  ];

  return (
    <section id="input-pointing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            Input Devices: Pointing and Positioning
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Pointing devices allow users to control cursors and pointers to select, move, 
            and manipulate graphical objects on screen.
          </p>
        </div>

        {/* Pointing Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pointingDevices.map((device, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
              {/* Device Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${device.color} rounded-lg flex items-center justify-center`}>
                  <device.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-slate-800">{device.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{device.description}</p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">Features</h4>
                <ul className="space-y-1">
                  {device.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advantages */}
              <div className="mb-4">
                <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">Advantages</h4>
                <ul className="space-y-1">
                  {device.advantages.map((advantage, advantageIndex) => (
                    <li key={advantageIndex} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="bg-slate-50 rounded-lg p-3 border-l-4 border-slate-300">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Use Cases</div>
                <div className="text-xs text-slate-700">{device.useCases}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Touch Gestures Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-6 text-center">
            Multi-Touch Gestures
          </h3>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            Modern touchpads and touchscreens support multi-touch gestures that have become 
            a core part of the interaction language.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gestureExamples.map((gesture, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                  {gesture.icon}
                </div>
                <div className="font-mono font-semibold text-slate-800 text-sm mb-1">{gesture.name}</div>
                <div className="text-xs text-slate-600">{gesture.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Comparison */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8 mb-12">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            Mouse Evolution
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Mechanical Mouse */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-400 rounded-lg flex items-center justify-center mb-3">
                <Circle className="w-10 h-10 text-white" />
              </div>
              <div className="text-sm font-mono text-slate-700 mb-1">Mechanical</div>
              <div className="text-xs text-slate-500">Rubber ball</div>
              <div className="text-xs text-slate-400">Prone to dirt</div>
            </div>

            <div className="hidden md:block">
              <div className="w-12 h-0.5 bg-slate-300"></div>
            </div>

            {/* Optical Mouse */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                <Mouse className="w-10 h-10 text-white" />
              </div>
              <div className="text-sm font-mono text-slate-700 mb-1">Optical</div>
              <div className="text-xs text-slate-500">LED light</div>
              <div className="text-xs text-slate-400">More reliable</div>
            </div>

            <div className="hidden md:block">
              <div className="w-12 h-0.5 bg-slate-300"></div>
            </div>

            {/* Laser Mouse */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                <Mouse className="w-10 h-10 text-white" />
              </div>
              <div className="text-sm font-mono text-slate-700 mb-1">Laser</div>
              <div className="text-xs text-slate-500">Laser precision</div>
              <div className="text-xs text-slate-400">Any surface</div>
            </div>
          </div>
        </div>

        {/* Accessibility Spotlight */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold text-teal-800 mb-3">
                Accessibility: Eyegaze Tracking
              </h3>
              <p className="text-teal-700 leading-relaxed mb-4">
                Eyegaze systems are life-changing for users with severe motor disabilities like ALS or spinal cord injuries. 
                By tracking pupil movement, users can control cursors and type using only their eyes.
              </p>
              <div className="bg-white rounded-lg p-4 border border-teal-100">
                <div className="text-sm font-semibold text-teal-800 mb-2">Real-Life Impact:</div>
                <p className="text-sm text-teal-700">
                  Stephen Hawking used eyegaze systems combined with virtual keyboards to write books and deliver lectures, 
                  demonstrating how technology can provide vital communication channels for those who need them most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
