export function InputOutputChannels() {
  return (
    <section id="input-output" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Input-Output Channels: The Foundation of Interaction
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All interaction with the world, including with a computer, is a two-way street of information. 
            We receive information (input) and we send information (output).
          </p>
        </div>

        {/* The Continuous Loop Diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
            <h3 className="text-purple-900 text-center mb-8">Real-Life Example: Using an ATM</h3>
            
            <svg viewBox="0 0 700 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* ATM Machine */}
              <g>
                <rect x="500" y="150" width="150" height="200" rx="8" fill="#334155" />
                <rect x="510" y="170" width="130" height="90" fill="#22d3ee" opacity="0.3" />
                <text x="575" y="220" textAnchor="middle" fill="#0f172a" fontSize="14">Welcome!</text>
                <text x="575" y="240" textAnchor="middle" fill="#0f172a" fontSize="12">Insert Card</text>
                <rect x="540" y="280" width="70" height="50" rx="4" fill="#475569" />
                <circle cx="550" cy="295" r="4" fill="#64748b" />
                <circle cx="565" cy="295" r="4" fill="#64748b" />
                <circle cx="580" cy="295" r="4" fill="#64748b" />
                <circle cx="595" cy="295" r="4" fill="#64748b" />
                <text x="575" y="360" textAnchor="middle" fill="#334155" fontSize="12">ATM</text>
              </g>

              {/* Human */}
              <g>
                <circle cx="100" cy="180" r="30" fill="#6366f1" />
                <line x1="100" y1="210" x2="100" y2="300" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
                <line x1="100" y1="230" x2="60" y2="270" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
                <line x1="100" y1="230" x2="140" y2="270" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
                <line x1="100" y1="300" x2="70" y2="350" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
                <line x1="100" y1="300" x2="130" y2="350" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
                <text x="100" y="380" textAnchor="middle" fill="#6366f1" fontSize="12">User</text>
              </g>

              {/* Step 1: Computer Output → Human Input (Vision) */}
              <g>
                <path d="M 500 200 Q 300 150 160 175" 
                      stroke="#22d3ee" 
                      strokeWidth="3" 
                      fill="none" 
                      markerEnd="url(#arrowCyan)" />
                <circle cx="420" cy="175" r="4" fill="#22d3ee" />
                <circle cx="340" cy="165" r="4" fill="#22d3ee" />
                <circle cx="260" cy="168" r="4" fill="#22d3ee" />
                
                <g transform="translate(300, 130)">
                  <rect x="-60" y="-25" width="120" height="50" rx="8" fill="white" stroke="#22d3ee" strokeWidth="2" />
                  <text x="0" y="-5" textAnchor="middle" fill="#0891b2" fontSize="11">Computer Output</text>
                  <text x="0" y="10" textAnchor="middle" fill="#0891b2" fontSize="11">→ Your Input (Sight)</text>
                </g>
              </g>

              {/* Step 2: Human Output → Computer Input (Touch) */}
              <g>
                <path d="M 140 250 Q 320 350 500 290" 
                      stroke="#10b981" 
                      strokeWidth="3" 
                      fill="none" 
                      markerEnd="url(#arrowGreen)" />
                <circle cx="240" cy="310" r="4" fill="#10b981" />
                <circle cx="340" cy="335" r="4" fill="#10b981" />
                <circle cx="420" cy="315" r="4" fill="#10b981" />
                
                <g transform="translate(300, 370)">
                  <rect x="-60" y="-25" width="120" height="50" rx="8" fill="white" stroke="#10b981" strokeWidth="2" />
                  <text x="0" y="-5" textAnchor="middle" fill="#059669" fontSize="11">Your Output (Touch)</text>
                  <text x="0" y="10" textAnchor="middle" fill="#059669" fontSize="11">→ Computer Input</text>
                </g>
              </g>

              {/* Step 3: Computer Feedback → Human Input (Hearing) */}
              <g>
                <path d="M 500 240 Q 300 280 160 200" 
                      stroke="#f59e0b" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="4 4"
                      markerEnd="url(#arrowOrange)" />
                <text x="300" y="260" textAnchor="middle" fill="#d97706" fontSize="10">
                  Beep confirmation (Hearing)
                </text>
              </g>

              {/* Labels */}
              <text x="350" y="480" textAnchor="middle" fill="#6366f1" fontSize="14">
                Continuous Input-Output Loop
              </text>

              <defs>
                <marker id="arrowCyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#22d3ee" />
                </marker>
                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
                </marker>
                <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Breakdown of steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h4 className="text-cyan-900 mb-2">Computer Output → Your Input (Vision)</h4>
                <p className="text-gray-700 text-sm">
                  The ATM screen displays a welcome message with instructions like "Insert Card." 
                  Your <span className="text-cyan-700">sight</span> is the primary input channel.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h4 className="text-green-900 mb-2">Your Output → Computer Input (Touch)</h4>
                <p className="text-gray-700 text-sm">
                  You physically insert your card and use your fingers (<span className="text-green-700">motor control/touch</span>) 
                  to type your PIN on the keypad.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h4 className="text-orange-900 mb-2">Computer Output → Your Input (Hearing)</h4>
                <p className="text-gray-700 text-sm">
                  The machine makes a beeping sound to confirm each keypress. 
                  Your sense of <span className="text-orange-700">hearing</span> receives this feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h4 className="text-purple-900 mb-2">Cycle Continues</h4>
                <p className="text-gray-700 text-sm">
                  You see a menu of options and use your finger to press the button for "Withdraw." 
                  This continuous loop of input and output forms the basis of all human-computer interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
