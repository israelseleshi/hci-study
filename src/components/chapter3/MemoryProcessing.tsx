import { Cpu, HardDrive, Zap, Clock, Wifi, Loader } from "lucide-react";

export function MemoryProcessing() {
  const memoryTypes = [
    {
      type: "RAM (Short-Term)",
      icon: Zap,
      color: "bg-yellow-500",
      speed: "Very Fast",
      capacity: "Limited",
      volatility: "Volatile (lost when power off)",
      purpose: "Active programs & data",
      characteristics: [
        "Extremely fast access",
        "Temporary storage only",
        "Currently running applications",
        "Operating system cache"
      ],
      realLifeImpact: "Running out of RAM causes dramatic slowdown as computer shuffles data to slower storage"
    },
    {
      type: "Storage (Long-Term)",
      icon: HardDrive,
      color: "bg-blue-500",
      speed: "Slower",
      capacity: "Large",
      volatility: "Non-volatile (permanent)",
      purpose: "File storage & programs",
      characteristics: [
        "Permanent data storage",
        "Much larger capacity",
        "Files, documents, media",
        "Installed applications"
      ],
      realLifeImpact: "SSD vs HDD makes huge difference in boot times and application loading speed"
    }
  ];

  const storageEvolution = [
    { name: "HDD", description: "Hard Disk Drive", technology: "Spinning magnetic platters", speed: "Slow", color: "bg-slate-400" },
    { name: "SSD", description: "Solid State Drive", technology: "Flash memory, no moving parts", speed: "Fast", color: "bg-green-500" },
    { name: "NVMe", description: "NVMe SSD", technology: "Direct PCIe connection", speed: "Very Fast", color: "bg-purple-500" }
  ];

  return (
    <section id="memory-processing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            The Computer's "Engine": Memory and Processing
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Behind every interaction are the computer's core components for storing and processing data. 
            Their performance has a direct and significant impact on user experience.
          </p>
        </div>

        {/* Memory Hierarchy */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-16">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            Computer Memory Hierarchy
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {memoryTypes.map((memory, index) => (
              <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${memory.color} rounded-xl flex items-center justify-center`}>
                    <memory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-mono font-bold text-slate-800">{memory.type}</h4>
                    <p className="text-sm text-slate-600">{memory.purpose}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm font-mono font-semibold text-slate-700">Speed</div>
                    <div className="text-xs text-slate-600">{memory.speed}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-semibold text-slate-700">Capacity</div>
                    <div className="text-xs text-slate-600">{memory.capacity}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono font-semibold text-slate-700">Persistence</div>
                    <div className="text-xs text-slate-600">{memory.volatility}</div>
                  </div>
                </div>

                {/* Characteristics */}
                <div className="mb-6">
                  <h5 className="text-sm font-mono font-semibold text-slate-500 uppercase tracking-wider mb-3">Characteristics</h5>
                  <ul className="space-y-2">
                    {memory.characteristics.map((char, charIndex) => (
                      <li key={charIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real-Life Impact */}
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                  <h5 className="text-sm font-mono font-semibold text-red-800 mb-2">Real-Life Impact</h5>
                  <p className="text-xs text-red-700 leading-relaxed">{memory.realLifeImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Storage Evolution */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-16">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            Storage Technology Evolution
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {storageEvolution.map((storage, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 ${storage.color} rounded-xl flex items-center justify-center mb-4`}>
                  <HardDrive className="w-10 h-10 text-white" />
                </div>
                <div className="font-mono font-bold text-slate-800 mb-1">{storage.name}</div>
                <div className="text-sm text-slate-600 mb-2">{storage.description}</div>
                <div className="text-xs text-slate-500 text-center mb-2">{storage.technology}</div>
                <div className={`text-xs px-3 py-1 rounded-full ${
                  storage.speed === 'Slow' ? 'bg-red-100 text-red-700' :
                  storage.speed === 'Fast' ? 'bg-green-100 text-green-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {storage.speed}
                </div>
                {index < storageEvolution.length - 1 && (
                  <div className="hidden md:block absolute transform translate-x-24">
                    <div className="w-8 h-0.5 bg-slate-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
            <h4 className="font-mono font-semibold text-green-800 mb-3">User Experience Impact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
              <div>
                <strong>HDD → SSD Upgrade:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Boot time: 60s → 15s</li>
                  <li>• App loading: 10s → 2s</li>
                  <li>• File operations: Much faster</li>
                </ul>
              </div>
              <div>
                <strong>Why It Matters:</strong>
                <ul className="mt-1 space-y-1 text-xs">
                  <li>• Reduced waiting time</li>
                  <li>• Better responsiveness</li>
                  <li>• Improved productivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Processing (CPU) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-mono font-bold text-slate-800">Processing (CPU)</h3>
              <p className="text-slate-600">The "brain" executing all instructions and calculations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Expectations */}
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-4">The Myth of the Infinitely Fast Machine</h4>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Users have a mental model that computers should respond instantly. When they don't, 
                this causes frustration. Any noticeable delay breaks the feeling of direct manipulation.
              </p>
              
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h5 className="font-mono font-semibold text-red-800 mb-2 text-sm">Lag Indicators</h5>
                <ul className="space-y-1 text-xs text-red-700">
                  <li>• Spinning "wait" cursor</li>
                  <li>• Stuttering animations</li>
                  <li>• Delayed button responses</li>
                  <li>• Frozen interface</li>
                </ul>
              </div>
            </div>

            {/* Moore's Law */}
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-4">Moore's Law Impact</h4>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Transistor count doubling every ~2 years enabled the evolution from simple text interfaces 
                to complex, graphical, media-rich interfaces we use today.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-mono font-semibold text-blue-800 mb-2 text-sm">Interface Evolution</h5>
                <div className="space-y-2 text-xs text-blue-700">
                  <div className="flex justify-between">
                    <span>1980s: Text-only</span>
                    <span>Low CPU power</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1990s: Basic GUI</span>
                    <span>Medium CPU power</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2000s: Rich media</span>
                    <span>High CPU power</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2010s: Real-time 3D</span>
                    <span>Very high CPU power</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Bottleneck */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-mono font-bold text-slate-800">The Network's Influence</h3>
              <p className="text-slate-600">Often the real performance bottleneck in modern computing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Description */}
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-4">Modern Reality</h4>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                In today's interconnected world, the performance bottleneck is often not the local CPU 
                but the network connection. Users experience this as system lag, even when their 
                hardware is powerful.
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h5 className="font-mono font-semibold text-slate-700 mb-2 text-sm">Common Network Delays</h5>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Web page loading</li>
                  <li>• Video streaming buffering</li>
                  <li>• Cloud app synchronization</li>
                  <li>• Online game lag</li>
                </ul>
              </div>
            </div>

            {/* Netflix Example */}
            <div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Loader className="w-6 h-6 text-orange-600" />
                  <h4 className="font-mono font-semibold text-orange-800">Netflix 4K Streaming</h4>
                </div>
                
                <p className="text-sm text-orange-700 mb-4 leading-relaxed">
                  When streaming a 4K movie, your powerful computer or TV does very little work. 
                  The experience depends entirely on internet speed and stability.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-700">Local Processing:</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Minimal</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-700">Network Dependency:</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded">Critical</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-700">User Experience:</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Network-bound</span>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-orange-600 italic">
                  The frustrating "buffering" wheel is a network issue, but users perceive it as system lag.
                </div>
              </div>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="mt-8 bg-slate-50 rounded-lg p-6">
            <h4 className="font-mono font-semibold text-slate-700 mb-4 text-center">Performance Comparison</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div className="font-mono font-semibold text-slate-800 mb-1">Local CPU</div>
                <div className="text-xs text-slate-600">Nanoseconds</div>
                <div className="text-xs text-green-600">Very Fast</div>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HardDrive className="w-8 h-8 text-white" />
                </div>
                <div className="font-mono font-semibold text-slate-800 mb-1">Local Storage</div>
                <div className="text-xs text-slate-600">Milliseconds</div>
                <div className="text-xs text-blue-600">Fast</div>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <div className="font-mono font-semibold text-slate-800 mb-1">Network</div>
                <div className="text-xs text-slate-600">Seconds</div>
                <div className="text-xs text-orange-600">Variable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
