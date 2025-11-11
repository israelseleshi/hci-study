export function FittsLaw() {
  return (
    <section id="fitts" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-700 text-sm">Core HCI Principle</span>
          </div>
          <h2 className="text-gray-900 mb-4">Fitts's Law: A Predictive Model of Movement</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A fundamental principle in HCI that predicts how quickly a user can move a pointer 
            to a target on the screen and click it.
          </p>
        </div>

        {/* The Law */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
            <div className="text-center mb-8">
              <div className="bg-white inline-block rounded-xl px-8 py-6 shadow-lg">
                <div className="text-gray-900 mb-2">Mt = a + b log₂(D/S + 1)</div>
                <div className="text-gray-600 text-sm">Fitts's Law Formula</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-orange-800 mb-4">Variables:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-orange-600 mt-1">•</span>
                    <span><span className="text-orange-700">Mt</span> = Movement time</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-orange-600 mt-1">•</span>
                    <span><span className="text-orange-700">D</span> = Distance to the center of the target</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-orange-600 mt-1">•</span>
                    <span><span className="text-orange-700">S</span> = Size (width) of the target</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-orange-600 mt-1">•</span>
                    <span><span className="text-orange-700">a, b</span> = Constants based on input device</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-6 shadow-md text-white">
                <h4 className="mb-4">In Simple Terms:</h4>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm">
                      A target that is <span className="text-yellow-300">farther away</span> takes longer to hit
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm">
                      A target that is <span className="text-yellow-300">smaller</span> takes longer to hit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Demonstration */}
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-gray-900 mb-4 text-center">Visual Demonstration</h4>
              <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Example 1: Small, Far target - SLOW */}
                <g>
                  <text x="200" y="30" textAnchor="middle" fill="#ef4444" fontSize="14">Slow (Small + Far)</text>
                  <circle cx="50" cy="100" r="10" fill="#3b82f6" />
                  <text x="50" y="130" textAnchor="middle" fill="#3b82f6" fontSize="10">Start</text>
                  
                  <circle cx="350" cy="100" r="20" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeWidth="2" />
                  <text x="350" y="145" textAnchor="middle" fill="#ef4444" fontSize="10">Small Target</text>
                  
                  <path d="M 60 100 Q 200 80 340 100" 
                        stroke="#ef4444" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeDasharray="5 5"
                        markerEnd="url(#arrowRed)" />
                  
                  <text x="200" y="70" textAnchor="middle" fill="#ef4444" fontSize="11">D = Large</text>
                  <text x="200" y="170" textAnchor="middle" fill="#ef4444" fontSize="11">Mt = High</text>
                </g>

                {/* Example 2: Large, Close target - FAST */}
                <g>
                  <text x="600" y="30" textAnchor="middle" fill="#10b981" fontSize="14">Fast (Large + Close)</text>
                  <circle cx="450" cy="100" r="10" fill="#3b82f6" />
                  <text x="450" y="130" textAnchor="middle" fill="#3b82f6" fontSize="10">Start</text>
                  
                  <circle cx="650" cy="100" r="50" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                  <text x="650" y="165" textAnchor="middle" fill="#10b981" fontSize="10">Large Target</text>
                  
                  <path d="M 460 100 L 600 100" 
                        stroke="#10b981" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeDasharray="5 5"
                        markerEnd="url(#arrowGreen)" />
                  
                  <text x="530" y="85" textAnchor="middle" fill="#10b981" fontSize="11">D = Small</text>
                  <text x="530" y="190" textAnchor="middle" fill="#10b981" fontSize="11">Mt = Low</text>
                </g>

                <defs>
                  <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                  <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Design Implications */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-gray-900 mb-8">Practical Design Implications</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📏</span>
              </div>
              <h4 className="text-green-900 text-center mb-3">Make Targets Large</h4>
              <p className="text-gray-700 text-sm text-center">
                Especially for frequently used buttons. Larger size (S↑) reduces movement time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h4 className="text-blue-900 text-center mb-3">Minimize Distance</h4>
              <p className="text-gray-700 text-sm text-center">
                Group related functions together. Closer distance (D↓) reduces movement time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-purple-900 text-center mb-3">Use Edges & Corners</h4>
              <p className="text-gray-700 text-sm text-center">
                Screen edges are "infinitely deep" targets—you can't overshoot them.
              </p>
            </div>
          </div>

          {/* Real-Life Examples */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
              <h4 className="text-green-900 mb-6">Example 1: Large Accept Call Button (Smartphone)</h4>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    On a smartphone, the "Accept Call" button is very large and often takes up a significant 
                    portion of the screen. Its large size reduces the movement time, making it very quick 
                    and easy to hit, even when the user is distracted or in a hurry.
                  </p>
                  <div className="bg-green-100 rounded-xl p-4 border-l-4 border-green-600">
                    <p className="text-green-900 text-sm">
                      A tiny "Accept" button would be much harder to press accurately, especially in stressful situations.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <svg viewBox="0 0 300 400" className="w-full h-auto">
                    <rect x="50" y="20" width="200" height="360" rx="20" fill="#1e293b" />
                    <rect x="60" y="30" width="180" height="300" rx="8" fill="#334155" />
                    
                    <text x="150" y="100" textAnchor="middle" fill="#fff" fontSize="16">John Doe</text>
                    <text x="150" y="120" textAnchor="middle" fill="#94a3b8" fontSize="12">Mobile</text>
                    
                    {/* Large Accept Button */}
                    <circle cx="150" cy="260" r="45" fill="#10b981" />
                    <text x="150" y="270" textAnchor="middle" fill="#fff" fontSize="20">📞</text>
                    
                    <circle cx="150" cy="260" r="50" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" />
                    <text x="150" y="330" textAnchor="middle" fill="#22d3ee" fontSize="10">Large target area</text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
              <h4 className="text-blue-900 mb-6">Example 2: Context Menu (Graphics Software)</h4>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Canvas */}
                    <rect x="20" y="20" width="360" height="260" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    
                    {/* Cursor */}
                    <circle cx="200" cy="150" r="5" fill="#3b82f6" />
                    <polygon points="200,150 205,155 202,155 202,160" fill="#3b82f6" />
                    
                    {/* Context menu appears right at cursor */}
                    <rect x="210" y="120" width="120" height="100" rx="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                    <text x="220" y="140" fill="#1e293b" fontSize="12">Copy</text>
                    <text x="220" y="160" fill="#1e293b" fontSize="12">Paste</text>
                    <text x="220" y="180" fill="#1e293b" fontSize="12">Delete</text>
                    <text x="220" y="200" fill="#1e293b" fontSize="12">Properties</text>
                    
                    {/* Distance indicator */}
                    <path d="M 205 150 L 210 140" stroke="#22d3ee" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="240" y="110" textAnchor="middle" fill="#22d3ee" fontSize="10">D ≈ 0</text>
                  </svg>
                </div>

                <div>
                  <p className="text-gray-700 mb-4">
                    In a graphics editing program, right-clicking on an object brings up a context menu 
                    right next to the cursor. This menu contains common actions like "Copy," "Paste," and "Delete."
                  </p>
                  <p className="text-gray-700 mb-4">
                    By placing these targets directly at the cursor's current location, the distance (D) 
                    is minimized to almost zero, making these actions incredibly fast to perform.
                  </p>
                  <div className="bg-blue-100 rounded-xl p-4 border-l-4 border-blue-600">
                    <p className="text-blue-900 text-sm">
                      This is a direct application of Fitts's Law: reducing distance dramatically improves speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
              <h4 className="text-purple-900 mb-6">Example 3: Screen Edges and Corners (Operating Systems)</h4>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    The Windows Start button is placed in the bottom-left corner and the macOS menu bar 
                    is at the very top edge of the screen.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The edges and corners of a screen are "infinitely deep" targets because you can't overshoot them—
                    the cursor just stops. This makes them the fastest possible places to move to.
                  </p>
                  <div className="bg-purple-100 rounded-xl p-4 border-l-4 border-purple-600">
                    <p className="text-purple-900 text-sm">
                      Users can "throw" their mouse cursor into the corner without having to aim carefully, 
                      making these targets extremely fast to acquire according to Fitts's Law.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    {/* Screen */}
                    <rect x="20" y="20" width="360" height="260" fill="#f1f5f9" stroke="#1e293b" strokeWidth="3" />
                    
                    {/* Top menu bar */}
                    <rect x="20" y="20" width="360" height="30" fill="#1e293b" />
                    <text x="30" y="40" fill="#fff" fontSize="12">File  Edit  View</text>
                    <circle cx="350" cy="35" r="8" fill="#22d3ee" className="animate-pulse" />
                    <text x="200" y="60" textAnchor="middle" fill="#22d3ee" fontSize="10">"Infinitely deep" top edge</text>
                    
                    {/* Bottom corner start button */}
                    <rect x="20" y="250" width="60" height="30" fill="#3b82f6" />
                    <text x="50" y="270" textAnchor="middle" fill="#fff" fontSize="12">Start</text>
                    <circle cx="50" cy="265" r="15" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="50" y="300" textAnchor="middle" fill="#22d3ee" fontSize="10">Corner = Easy target</text>
                    
                    {/* Cursor motion paths */}
                    <path d="M 200 150 L 350 35" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
                    <path d="M 200 150 L 50 265" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
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
