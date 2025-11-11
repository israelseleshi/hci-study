export function HeroChapter2() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm">Chapter 2</span>
          </div>
          <h1 className="text-white mb-6">
            The Human Interface
          </h1>
          <p className="text-purple-200 max-w-3xl mx-auto mb-4">
            Understanding Input, Memory, and Action
          </p>
          <p className="text-purple-300 text-sm max-w-2xl mx-auto">
            To design effective and intuitive technology, we must first understand the capabilities 
            and limitations of the person who will be using it.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-500/20">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Human head silhouette */}
              <ellipse cx="400" cy="250" rx="150" ry="180" fill="url(#headGradient)" opacity="0.3" />
              <circle cx="400" cy="250" r="120" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              
              {/* Brain representation */}
              <g>
                <ellipse cx="400" cy="220" rx="70" ry="60" fill="url(#brainGradient)" />
                <path d="M 350 220 Q 380 200 410 220" stroke="#a78bfa" strokeWidth="2" fill="none" />
                <path d="M 370 240 Q 400 230 430 240" stroke="#a78bfa" strokeWidth="2" fill="none" />
                <circle cx="400" cy="220" r="8" fill="#22d3ee" className="animate-pulse" />
                <text x="400" y="300" textAnchor="middle" fill="#a78bfa" fontSize="14">Processing / Memory</text>
              </g>

              {/* Input Port - Left side (Senses) */}
              <g>
                <circle cx="200" cy="180" r="40" fill="url(#portGradient)" />
                <circle cx="200" cy="180" r="35" fill="none" stroke="#22d3ee" strokeWidth="2" />
                <circle cx="200" cy="180" r="15" fill="#22d3ee" className="animate-pulse" />
                
                {/* Connection lines */}
                <path d="M 240 180 L 330 210" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                <circle cx="260" cy="185" r="3" fill="#22d3ee" opacity="0.6" />
                <circle cx="280" cy="190" r="3" fill="#22d3ee" opacity="0.6" />
                <circle cx="300" cy="195" r="3" fill="#22d3ee" opacity="0.6" />
                
                <text x="200" y="250" textAnchor="middle" fill="#22d3ee" fontSize="16">Senses</text>
                <text x="200" y="268" textAnchor="middle" fill="#22d3ee" fontSize="12" opacity="0.7">(Input)</text>
                
                {/* Input icons */}
                <g transform="translate(160, 130)">
                  <circle cx="0" cy="0" r="8" fill="#22d3ee" opacity="0.3" />
                  <circle cx="0" cy="0" r="3" fill="#22d3ee" />
                </g>
                <g transform="translate(180, 140)">
                  <path d="M -5 0 L 5 0" stroke="#22d3ee" strokeWidth="2" />
                  <path d="M 0 -5 L 0 5" stroke="#22d3ee" strokeWidth="2" />
                </g>
              </g>

              {/* Output Port - Right side (Motor Control) */}
              <g>
                <circle cx="600" cy="180" r="40" fill="url(#portGradient)" />
                <circle cx="600" cy="180" r="35" fill="none" stroke="#10b981" strokeWidth="2" />
                <circle cx="600" cy="180" r="15" fill="#10b981" className="animate-pulse" />
                
                {/* Connection lines */}
                <path d="M 470 210 L 560 180" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                <circle cx="490" cy="205" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="520" cy="197" r="3" fill="#10b981" opacity="0.6" />
                <circle cx="540" cy="190" r="3" fill="#10b981" opacity="0.6" />
                
                <text x="600" y="250" textAnchor="middle" fill="#10b981" fontSize="16">Motor Control</text>
                <text x="600" y="268" textAnchor="middle" fill="#10b981" fontSize="12" opacity="0.7">(Output)</text>
                
                {/* Output icons */}
                <g transform="translate(620, 160)">
                  <polygon points="0,-8 8,0 0,8" fill="#10b981" opacity="0.5" />
                </g>
                <g transform="translate(635, 175)">
                  <polygon points="0,-6 6,0 0,6" fill="#10b981" opacity="0.5" />
                </g>
              </g>

              {/* Information flow indicators */}
              <text x="400" y="420" textAnchor="middle" fill="#8b5cf6" fontSize="14" opacity="0.7">
                Continuous Information Processing Loop
              </text>
              <path d="M 250 400 Q 400 380 550 400" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.5" />
              <polygon points="545,398 555,400 545,402" fill="#8b5cf6" opacity="0.5" />
              <polygon points="255,398 245,400 255,402" fill="#8b5cf6" opacity="0.5" />

              <defs>
                <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="brainGradient">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
                </radialGradient>
                <radialGradient id="portGradient">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-cyan-400 mb-2">Input Channels</div>
              <p className="text-purple-200 text-sm">
                Five senses receiving information from the world (sight, hearing, touch most critical for HCI)
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-purple-400 mb-2">Processing & Memory</div>
              <p className="text-purple-200 text-sm">
                Brain processes, stores, and retrieves information across multiple memory systems
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-green-400 mb-2">Output Channels</div>
              <p className="text-purple-200 text-sm">
                Motor control enabling actions through fingers, hands, and voice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
