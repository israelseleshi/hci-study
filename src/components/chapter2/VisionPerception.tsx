export function VisionPerception() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Visual Perception: Interpreting the Signal</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Seeing is more than just the physical detection of light; it's about how our brain processes 
            and makes sense of that raw data to perceive size, depth, brightness, and contrast.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Size and Depth Perception */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <h3 className="text-blue-900 mb-6">1. Perceiving Size and Depth</h3>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Perspective lines */}
                <line x1="100" y1="150" x2="700" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="100" y1="150" x2="700" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Eye */}
                <ellipse cx="100" cy="150" rx="40" ry="30" fill="#3b82f6" opacity="0.3" />
                <circle cx="100" cy="150" r="15" fill="#1e40af" />
                <text x="100" y="200" textAnchor="middle" fill="#1e40af" fontSize="14">Eye</text>
                
                {/* Thumb (close, large visual angle) */}
                <g>
                  <rect x="200" y="120" width="40" height="60" rx="20" fill="#f59e0b" />
                  <text x="220" y="200" textAnchor="middle" fill="#d97706" fontSize="12">Thumb</text>
                  <text x="220" y="215" textAnchor="middle" fill="#d97706" fontSize="10">(Close)</text>
                  
                  {/* Visual angle lines */}
                  <line x1="100" y1="150" x2="200" y2="120" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                  <line x1="100" y1="150" x2="200" y2="180" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                  <path d="M 130 140 A 30 30 0 0 1 130 160" stroke="#f59e0b" strokeWidth="2" fill="none" />
                  <text x="160" y="155" fill="#d97706" fontSize="11">Large angle</text>
                </g>
                
                {/* Car (far, smaller visual angle) */}
                <g>
                  <rect x="600" y="140" width="80" height="40" rx="4" fill="#10b981" />
                  <rect x="610" y="150" width="60" height="20" fill="#dcfce7" />
                  <circle cx="625" cy="180" r="8" fill="#374151" />
                  <circle cx="665" cy="180" r="8" fill="#374151" />
                  <text x="640" y="210" textAnchor="middle" fill="#059669" fontSize="12">Car</text>
                  <text x="640" y="225" textAnchor="middle" fill="#059669" fontSize="10">(Far away)</text>
                  
                  {/* Visual angle lines */}
                  <line x1="100" y1="150" x2="600" y2="140" stroke="#10b981" strokeWidth="2" opacity="0.5" />
                  <line x1="100" y1="150" x2="600" y2="180" stroke="#10b981" strokeWidth="2" opacity="0.5" />
                  <path d="M 120 148 A 20 20 0 0 1 120 152" stroke="#10b981" strokeWidth="2" fill="none" />
                  <text x="145" y="155" fill="#059669" fontSize="11">Small angle</text>
                </g>
              </svg>
            </div>

            <div className="bg-blue-900/10 rounded-xl p-6 mb-6 border-l-4 border-blue-600">
              <p className="text-blue-900 text-sm mb-2">Real-Life Example:</p>
              <p className="text-gray-700 text-sm">
                Hold your thumb up close to your eye. It appears much larger than a car that is far down the street, 
                even though the car is thousands of times bigger in reality. This is because your thumb has a 
                larger <span className="text-blue-700">visual angle</span>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-blue-800 mb-2">Depth Cues:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><span className="text-blue-800">Familiarity:</span> We know from experience how large certain objects are</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><span className="text-blue-800">Overlapping:</span> When one object partially blocks another, we perceive it as closer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
                <h4 className="mb-3">UI Design Example: Overlapping Windows</h4>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <svg viewBox="0 0 400 200" className="w-full h-auto">
                    {/* Back window */}
                    <rect x="50" y="60" width="200" height="120" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                    <rect x="50" y="60" width="200" height="25" fill="#64748b" />
                    <text x="150" y="77" textAnchor="middle" fill="white" fontSize="12">Window 1</text>
                    
                    {/* Front window (overlapping) */}
                    <rect x="150" y="40" width="200" height="120" rx="4" fill="#fff" stroke="#3b82f6" strokeWidth="3" />
                    <rect x="150" y="40" width="200" height="25" fill="#3b82f6" />
                    <text x="250" y="57" textAnchor="middle" fill="white" fontSize="12">Active Window</text>
                    
                    <circle cx="165" cy="52" r="4" fill="#ef4444" />
                    <circle cx="178" cy="52" r="4" fill="#f59e0b" />
                    <circle cx="191" cy="52" r="4" fill="#10b981" />
                  </svg>
                  <p className="text-white text-sm mt-3">
                    The overlapping window is clearly perceived as "in front" and currently active.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brightness and Contrast */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 md:p-12 border-2 border-gray-200">
            <h3 className="text-gray-900 mb-6">2. Perceiving Brightness and Contrast</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Low Contrast - Bad */}
              <div className="bg-white rounded-xl p-6 border-2 border-red-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-red-100 p-2 rounded">
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-red-800">Low Contrast (Bad)</h4>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-300 text-sm mb-2">
                    This text has very low contrast with its background.
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    It's difficult to read and causes eye strain.
                  </p>
                  <p className="text-gray-300 text-xs">
                    Contrast ratio: ~1.5:1 (Fails WCAG)
                  </p>
                </div>

                <div className="mt-4 bg-red-50 rounded-lg p-3">
                  <p className="text-red-900 text-xs">
                    ⚠️ Low contrast causes frustration and excludes users with visual impairments
                  </p>
                </div>
              </div>

              {/* High Contrast - Good */}
              <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-green-100 p-2 rounded">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-green-800">High Contrast (Good)</h4>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-900 text-sm mb-2">
                    This text has excellent contrast with its background.
                  </p>
                  <p className="text-gray-800 text-sm mb-2">
                    It's easy to read and accessible to everyone.
                  </p>
                  <p className="text-gray-700 text-xs">
                    Contrast ratio: ~16:1 (Exceeds WCAG AAA)
                  </p>
                </div>

                <div className="mt-4 bg-green-50 rounded-lg p-3">
                  <p className="text-green-900 text-xs">
                    ✓ High contrast ensures readability and accessibility for all users
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-slate-800 rounded-xl p-6 text-white">
              <h4 className="text-cyan-400 mb-3">WCAG Contrast Requirements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-cyan-300 mb-2">Normal Text (AA)</div>
                  <div className="text-2xl mb-1">4.5:1</div>
                  <div className="text-gray-300 text-sm">Minimum contrast ratio</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-cyan-300 mb-2">Large Text (AA)</div>
                  <div className="text-2xl mb-1">3:1</div>
                  <div className="text-gray-300 text-sm">Minimum contrast ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
