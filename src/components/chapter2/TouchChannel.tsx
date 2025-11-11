import { Hand } from "lucide-react";

export function TouchChannel() {
  return (
    <section id="touch" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-green-700 text-sm">Input Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Touch (Haptic Perception)</h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            The sense of touch provides vital feedback about our physical environment. Unlike sight and hearing, 
            which are localized in specific organs, touch is distributed across the entire body via receptors in the skin.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Key Aspects */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hand className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900 text-center mb-3">Feedback</h3>
              <p className="text-gray-700 text-lg text-center">
                Touch is fundamental for providing feedback during physical interaction
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 text-center mb-3">Kinaesthetics</h3>
              <p className="text-gray-700 text-lg text-center">
                Awareness of our body's position and movement in space
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-900 text-center mb-3">Haptic Technology</h3>
              <p className="text-gray-700 text-lg text-center">
                Modern devices incorporating haptic feedback to simulate touch
              </p>
            </div>
          </div>

          {/* Detailed Examples */}
          <div className="space-y-8">
            {/* Feedback Example */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Feedback: Physical Keyboard</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    When you type on a physical keyboard, you feel the keys depress and spring back under your fingers. 
                    This haptic feedback, combined with the "click" sound, confirms that your keystroke has been registered.
                  </p>
                  
                  <div className="bg-green-100 rounded-xl p-4 border-l-4 border-green-600">
                    <p className="text-green-900 text-sm">
                      <span className="text-green-700">Why it matters:</span> This is a major reason why many people 
                      can type faster and more accurately on a physical keyboard than on a flat touchscreen.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <svg viewBox="0 0 300 200" className="w-full h-auto">
                    {/* Keyboard */}
                    <rect x="20" y="80" width="260" height="100" rx="8" fill="#334155" />
                    
                    {/* Keys */}
                    <g>
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <rect 
                          key={i}
                          x={40 + i * 40} 
                          y="100" 
                          width="30" 
                          height="30" 
                          rx="4" 
                          fill={i === 2 ? "#10b981" : "#64748b"}
                          stroke={i === 2 ? "#059669" : "#475569"}
                          strokeWidth="2"
                        />
                      ))}
                    </g>
                    
                    {/* Finger pressing */}
                    <ellipse cx="135" cy="80" rx="15" ry="20" fill="#f59e0b" opacity="0.7" />
                    <path d="M 135 60 Q 135 70 135 80" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 4" />
                    
                    {/* Feedback indicators */}
                    <circle cx="120" cy="115" r="3" fill="#22d3ee" className="animate-pulse" />
                    <circle cx="150" cy="115" r="3" fill="#22d3ee" className="animate-pulse" />
                    <text x="150" y="50" textAnchor="middle" fill="#059669" fontSize="12">Tactile Feedback</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Kinaesthetics Example */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Kinaesthetics: Car Gear Stick</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <svg viewBox="0 0 300 200" className="w-full h-auto">
                    {/* Car interior silhouette */}
                    <rect x="50" y="50" width="200" height="120" rx="8" fill="#1e293b" opacity="0.2" />
                    
                    {/* Gear stick */}
                    <circle cx="150" cy="140" r="25" fill="#3b82f6" opacity="0.3" />
                    <rect x="145" y="80" width="10" height="65" rx="5" fill="#3b82f6" />
                    <circle cx="150" cy="70" r="15" fill="#60a5fa" />
                    
                    {/* Hand */}
                    <ellipse cx="150" cy="70" rx="20" ry="15" fill="#f59e0b" opacity="0.6" />
                    
                    {/* Motion paths */}
                    <path d="M 150 140 L 120 140" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                    <path d="M 150 140 L 180 140" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                    <path d="M 150 110 L 150 140" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                    
                    <text x="150" y="180" textAnchor="middle" fill="#3b82f6" fontSize="12">Gear Pattern</text>
                  </svg>
                </div>

                <div>
                  <p className="text-gray-700 mb-4">
                    The design and placement of the gear stick in a manual car is a kinaesthetic consideration. 
                    It is positioned so that the driver can reach it easily and move it through the gears in a 
                    comfortable, repeatable motion without having to look down.
                  </p>
                  
                  <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-600">
                    <p className="text-blue-900 text-sm">
                      <span className="text-blue-700">Why it matters:</span> An ergonomically poor design would 
                      cause physical strain and require more conscious effort, reducing driving safety and comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Haptic Technology Example */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Haptic Technology: Smartwatch Notifications</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    The Apple Watch uses a "Taptic Engine" to provide subtle vibrations on the wrist for notifications. 
                    It can produce different types of taps for different alerts.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <div className="text-purple-900 text-sm mb-1">Gentle, single tap</div>
                      <div className="text-purple-700 text-xs">→ Message notification</div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3">
                      <div className="text-purple-900 text-sm mb-1">Insistent pulse</div>
                      <div className="text-purple-700 text-xs">→ Urgent call</div>
                    </div>
                  </div>

                  <div className="mt-4 bg-purple-100 rounded-xl p-4 border-l-4 border-purple-600">
                    <p className="text-purple-900 text-sm">
                      <span className="text-purple-700">Benefit:</span> Allows users to receive information privately 
                      and without needing to look at a screen, leveraging the sense of touch as a primary information channel.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <svg viewBox="0 0 300 300" className="w-full h-auto">
                    {/* Watch */}
                    <rect x="100" y="50" width="100" height="120" rx="20" fill="#1e293b" />
                    <rect x="110" y="60" width="80" height="80" rx="4" fill="#334155" />
                    
                    {/* Watch face */}
                    <circle cx="150" cy="100" r="30" fill="#3b82f6" opacity="0.3" />
                    <text x="150" y="95" textAnchor="middle" fill="#60a5fa" fontSize="10">12:45</text>
                    <text x="150" y="110" textAnchor="middle" fill="#a78bfa" fontSize="8">New Message</text>
                    
                    {/* Band */}
                    <rect x="125" y="20" width="50" height="30" fill="#475569" />
                    <rect x="125" y="170" width="50" height="30" fill="#475569" />
                    
                    {/* Haptic feedback waves */}
                    <g opacity="0.6">
                      <circle cx="150" cy="150" r="40" fill="none" stroke="#a78bfa" strokeWidth="2" className="animate-pulse" />
                      <circle cx="150" cy="150" r="55" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5" className="animate-pulse" />
                      <circle cx="150" cy="150" r="70" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" className="animate-pulse" />
                    </g>
                    
                    <text x="150" y="240" textAnchor="middle" fill="#8b5cf6" fontSize="12">Taptic Feedback</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
