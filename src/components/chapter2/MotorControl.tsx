export function MotorControl() {
  return (
    <section id="motor" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-green-300 text-sm">Output Channel</span>
          </div>
          <h2 className="text-white mb-4">Movement and Motor Control</h2>
          <p className="text-purple-200 max-w-3xl mx-auto">
            After perceiving a stimulus (input), the brain processes it and generates a response, 
            which is carried out by the motor system (output).
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Response Time Breakdown */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-green-500/20 mb-12">
            <h3 className="text-green-400 mb-8 text-center">Response Time = Reaction Time + Movement Time</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="text-cyan-300">Reaction Time</h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  The time it takes to perceive the stimulus and initiate a response
                </p>
                
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <p className="text-cyan-200 text-sm">
                    Varies depending on the type of stimulus. We react faster to auditory stimuli 
                    than visual ones.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-green-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-green-300">Movement Time</h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  The time it takes to physically execute the action
                </p>
                
                <div className="bg-green-900/20 rounded-lg p-4">
                  <p className="text-green-200 text-sm">
                    Depends on the distance to the target and the size of the target. 
                    This is predicted by Fitts's Law.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="mt-8 bg-slate-900/50 rounded-xl p-6">
              <svg viewBox="0 0 800 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Timeline */}
                <line x1="50" y1="60" x2="750" y2="60" stroke="#8b5cf6" strokeWidth="3" />
                
                {/* Stimulus */}
                <g>
                  <circle cx="50" cy="60" r="15" fill="#22d3ee" />
                  <text x="50" y="95" textAnchor="middle" fill="#22d3ee" fontSize="12">Stimulus</text>
                  <text x="50" y="110" textAnchor="middle" fill="#22d3ee" fontSize="10">(Visual cue)</text>
                </g>
                
                {/* Reaction Time */}
                <g>
                  <path d="M 50 40 L 350 40" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
                  <text x="200" y="30" textAnchor="middle" fill="#22d3ee" fontSize="12">Reaction Time</text>
                  <text x="200" y="45" textAnchor="middle" fill="#22d3ee" fontSize="10">(Brain processing)</text>
                </g>
                
                {/* Movement Initiation */}
                <g>
                  <circle cx="350" cy="60" r="12" fill="#a78bfa" />
                  <text x="350" y="100" textAnchor="middle" fill="#a78bfa" fontSize="10">Initiate</text>
                </g>
                
                {/* Movement Time */}
                <g>
                  <path d="M 350 40 L 700 40" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
                  <text x="525" y="30" textAnchor="middle" fill="#10b981" fontSize="12">Movement Time</text>
                  <text x="525" y="45" textAnchor="middle" fill="#10b981" fontSize="10">(Physical action)</text>
                </g>
                
                {/* Action Complete */}
                <g>
                  <circle cx="700" cy="60" r="15" fill="#10b981" />
                  <text x="700" y="95" textAnchor="middle" fill="#10b981" fontSize="12">Complete</text>
                  <text x="700" y="110" textAnchor="middle" fill="#10b981" fontSize="10">(Target reached)</text>
                </g>
                
                {/* Total time indicator */}
                <g>
                  <path d="M 50 85 L 700 85" stroke="#f59e0b" strokeWidth="2" />
                  <polygon points="50,85 55,82 55,88" fill="#f59e0b" />
                  <polygon points="700,85 695,82 695,88" fill="#f59e0b" />
                  <text x="375" y="105" textAnchor="middle" fill="#f59e0b" fontSize="11">Total Response Time</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Example Scenario */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-white mb-6">Real-Life Example: Clicking a Button</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-cyan-300 mb-2">1. See Button</div>
                <p className="text-white text-sm">
                  Visual stimulus received by the eye and transmitted to the brain
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-purple-300 mb-2">2. Process & Decide</div>
                <p className="text-white text-sm">
                  Brain processes the information and decides to click (reaction time)
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-green-300 mb-2">3. Move & Click</div>
                <p className="text-white text-sm">
                  Hand moves cursor to button and executes click (movement time)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
