export function VisionEye() {
  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-cyan-300 text-sm">Primary Input Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vision: The Eye</h2>
          <p className="text-purple-200 text-xl leading-relaxed max-w-3xl mx-auto">
            Human vision is the most dominant sense and the primary channel for receiving information from computers. 
            Understanding how vision works is crucial for designing effective visual interfaces.
          </p>
        </div>

        {/* Eye Cross-Section Illustration */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-cyan-500/20">
            <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Eye outline */}
              <ellipse cx="400" cy="200" rx="300" ry="120" fill="url(#eyeGradient)" stroke="#22d3ee" strokeWidth="2" />
              
              {/* Cornea */}
              <ellipse cx="200" cy="200" rx="80" ry="100" fill="url(#corneaGradient)" opacity="0.6" />
              <text x="200" y="120" textAnchor="middle" fill="#22d3ee" fontSize="12">Cornea</text>
              
              {/* Lens */}
              <ellipse cx="280" cy="200" rx="30" ry="60" fill="url(#lensGradient)" />
              <text x="280" y="280" textAnchor="middle" fill="#a78bfa" fontSize="12">Lens</text>
              
              {/* Iris/Pupil */}
              <circle cx="220" cy="200" r="40" fill="#6366f1" opacity="0.4" />
              <circle cx="220" cy="200" r="20" fill="#0f172a" />
              <text x="220" y="160" textAnchor="middle" fill="#8b5cf6" fontSize="12">Pupil</text>
              
              {/* Retina */}
              <path d="M 550 120 Q 600 200 550 280" stroke="#10b981" strokeWidth="3" fill="none" />
              <circle cx="550" cy="200" r="8" fill="#10b981" />
              <text x="620" y="205" textAnchor="start" fill="#10b981" fontSize="14">Retina</text>
              
              {/* Fovea */}
              <circle cx="550" cy="200" r="15" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="2 2" />
              <text x="620" y="225" textAnchor="start" fill="#22d3ee" fontSize="12" opacity="0.8">Fovea (High Detail)</text>
              
              {/* Light rays */}
              <g opacity="0.7">
                <path d="M 50 150 L 200 190" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowYellow)" />
                <path d="M 50 200 L 200 200" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowYellow)" />
                <path d="M 50 250 L 200 210" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowYellow)" />
                <text x="30" y="205" textAnchor="end" fill="#fbbf24" fontSize="12">Light</text>
              </g>
              
              {/* Focus path */}
              <path d="M 250 200 L 545 200" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              <text x="400" y="190" textAnchor="middle" fill="#22d3ee" fontSize="11" opacity="0.7">Light focused onto retina</text>
              
              {/* Rods and Cones indicators */}
              <g transform="translate(620, 150)">
                <circle cx="0" cy="0" r="6" fill="#a78bfa" />
                <text x="15" y="5" fill="#a78bfa" fontSize="11">Cones (Color, Detail)</text>
              </g>
              <g transform="translate(620, 280)">
                <rect x="-3" y="-6" width="6" height="12" fill="#10b981" />
                <text x="15" y="5" fill="#10b981" fontSize="11">Rods (Low light, Motion)</text>
              </g>

              <defs>
                <radialGradient id="eyeGradient">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
                <radialGradient id="corneaGradient">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </radialGradient>
                <radialGradient id="lensGradient">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </radialGradient>
                <marker id="arrowYellow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#fbbf24" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Rods vs Cones Comparison */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#10b981">
                  <rect x="10" y="4" width="4" height="16" rx="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-400">Rods</h3>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-green-100 text-lg">
                <span className="text-green-400 mt-1">•</span>
                <span>Highly sensitive to low levels of light</span>
              </li>
              <li className="flex items-start gap-2 text-green-100 text-lg">
                <span className="text-green-400 mt-1">•</span>
                <span>Responsible for peripheral vision and seeing in the dark</span>
              </li>
              <li className="flex items-start gap-2 text-green-100 text-lg">
                <span className="text-green-400 mt-1">•</span>
                <span>Do not detect color or fine detail</span>
              </li>
              <li className="flex items-start gap-2 text-green-100 text-lg">
                <span className="text-green-400 mt-1">•</span>
                <span>Sensitive to motion in peripheral vision</span>
              </li>
            </ul>

            <div className="bg-green-950/50 rounded-lg p-4 border border-green-500/20">
              <p className="text-green-300 text-xs mb-2">Real-Life Example:</p>
              <p className="text-green-100 text-lg leading-relaxed">
                When you first enter a dark movie theater, it's hard to see details. After a few minutes, 
                your rods adapt, allowing you to see general shapes and navigate the aisles, but you can't 
                distinguish colors well.
              </p>
            </div>

            <div className="mt-4 bg-green-500/10 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-green-300 text-xs mb-1">Design Implication:</p>
              <p className="text-green-100 text-lg leading-relaxed">
                A flashing warning light or subtle animation in the corner of a screen is very effective 
                at grabbing attention, even if not looking directly at it.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#a78bfa">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Cones</h3>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-purple-100 text-lg">
                <span className="text-purple-400 mt-1">•</span>
                <span>Less sensitive to light</span>
              </li>
              <li className="flex items-start gap-2 text-purple-100 text-lg">
                <span className="text-purple-400 mt-1">•</span>
                <span>Responsible for perceiving color and fine detail</span>
              </li>
              <li className="flex items-start gap-2 text-purple-100 text-lg">
                <span className="text-purple-400 mt-1">•</span>
                <span>Concentrated in the fovea (central vision)</span>
              </li>
              <li className="flex items-start gap-2 text-purple-100 text-lg">
                <span className="text-purple-400 mt-1">•</span>
                <span>Required for reading and detailed work</span>
              </li>
            </ul>

            <div className="bg-purple-950/50 rounded-lg p-4 border border-purple-500/20">
              <p className="text-purple-300 text-xs mb-2">Real-Life Example:</p>
              <p className="text-purple-100 text-lg leading-relaxed">
                To read a small-print message on your phone, you must look directly at it. This focuses 
                the light onto the cone-rich fovea, allowing you to resolve the fine details of the letters. 
                If you try to read it using peripheral vision (where rods dominate), the text will be blurry.
              </p>
            </div>

            <div className="mt-4 bg-purple-500/10 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-purple-300 text-xs mb-1">Design Implication:</p>
              <p className="text-purple-100 text-lg leading-relaxed">
                All critical information that needs to be read or precisely manipulated (text, icons, buttons) 
                must be placed in the user's central field of view where it can be focused on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
