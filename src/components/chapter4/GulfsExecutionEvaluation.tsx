import { User, Monitor, ArrowRight, ArrowLeft, Volume2, Watch, AlertTriangle } from "lucide-react";

export function GulfsExecutionEvaluation() {
  return (
    <section id="gulfs-execution-evaluation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            The Gulfs of Execution & Evaluation
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The gaps between user intentions and system capabilities, and between system feedback 
            and user understanding. These gulfs determine the difficulty of interaction.
          </p>
        </div>

        {/* Main Gulf Visualization */}
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl border-2 border-slate-200 p-12 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            The Two Gulfs: A Visual Metaphor
          </h3>
          
          <div className="relative max-w-5xl mx-auto" style={{ height: '400px' }}>
            {/* User Side */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <div className="bg-blue-500 rounded-2xl p-6 text-white text-center shadow-lg">
                <User className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold text-lg">USER</div>
                <div className="text-sm opacity-90">Goals & Intentions</div>
                <div className="text-xs mt-2 bg-blue-400 rounded p-2">
                  "I want to set an alarm for 7 AM"
                </div>
              </div>
            </div>

            {/* System Side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <div className="bg-gray-500 rounded-2xl p-6 text-white text-center shadow-lg">
                <Monitor className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold text-lg">SYSTEM</div>
                <div className="text-sm opacity-90">State & Feedback</div>
                <div className="text-xs mt-2 bg-gray-400 rounded p-2">
                  Displays: "12:00 AM"
                </div>
              </div>
            </div>

            {/* Gulf of Execution */}
            <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2">
              <div className="bg-red-100 border-2 border-red-300 rounded-xl p-4 text-center">
                <ArrowRight className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-red-800 text-sm">GULF OF EXECUTION</div>
                <div className="text-xs text-red-700 mt-2">
                  "How do I make the system do what I want?"
                </div>
              </div>
              
              {/* Struggling Arrow */}
              <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 bg-red-300 rounded"></div>
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <div className="w-16 h-1 bg-red-300 rounded"></div>
                </div>
                <div className="text-xs text-red-600 text-center mt-1">Difficult to cross</div>
              </div>
            </div>

            {/* Gulf of Evaluation */}
            <div className="absolute right-1/4 bottom-1/4 transform translate-x-1/2">
              <div className="bg-orange-100 border-2 border-orange-300 rounded-xl p-4 text-center">
                <ArrowLeft className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="font-bold text-orange-800 text-sm">GULF OF EVALUATION</div>
                <div className="text-xs text-orange-700 mt-2">
                  "What is the system telling me?"
                </div>
              </div>
              
              {/* Confusing Feedback */}
              <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 bg-orange-300 rounded opacity-50"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="w-16 h-1 bg-orange-300 rounded opacity-30"></div>
                </div>
                <div className="text-xs text-orange-600 text-center mt-1">Unclear feedback</div>
              </div>
            </div>

            {/* Central Chasm */}
            <div className="absolute inset-x-1/3 top-1/2 transform -translate-y-1/2 h-32">
              <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-400 rounded-lg opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-slate-600 font-bold text-sm">THE GULF</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Wide Gulf Example */}
          <div className="bg-red-50 rounded-2xl border-2 border-red-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Watch className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-800">Wide Gulf: Digital Watch</h3>
            </div>
            
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 border border-red-200 mb-4">
                <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                <p className="text-sm text-red-700 leading-relaxed">
                  Setting an alarm requires navigating through multiple modes, pressing combinations 
                  of tiny buttons, with minimal feedback about current state.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-2 text-sm">Gulf of Execution</h4>
                <div className="bg-white rounded p-3 border border-red-200">
                  <div className="text-xs text-red-700">
                    • Unclear which button to press first<br/>
                    • Complex sequence: Mode → Set → Hour → Minute → Confirm<br/>
                    • No visual cues for button functions
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-800 mb-2 text-sm">Gulf of Evaluation</h4>
                <div className="bg-white rounded p-3 border border-red-200">
                  <div className="text-xs text-red-700">
                    • Tiny display with cryptic symbols<br/>
                    • No confirmation that alarm is set<br/>
                    • Unclear if you're in the right mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrow Gulf Example */}
          <div className="bg-green-50 rounded-2xl border-2 border-green-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Volume2 className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Narrow Gulf: Volume Knob</h3>
            </div>
            
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 border border-green-200 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">The Solution</h4>
                <p className="text-sm text-green-700 leading-relaxed">
                  Direct manipulation with immediate feedback. Turn right for louder, 
                  left for quieter. What you see is what you get.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-800 mb-2 text-sm">Gulf of Execution</h4>
                <div className="bg-white rounded p-3 border border-green-200">
                  <div className="text-xs text-green-700">
                    • Obvious affordance: knob invites turning<br/>
                    • Natural mapping: right = more, left = less<br/>
                    • Single, direct action required
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-800 mb-2 text-sm">Gulf of Evaluation</h4>
                <div className="bg-white rounded p-3 border border-green-200">
                  <div className="text-xs text-green-700">
                    • Immediate audio feedback<br/>
                    • Visual position shows current level<br/>
                    • Continuous, real-time response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Bridging the Gulfs: Design Principles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Execution Principles */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Narrowing the Gulf of Execution
              </h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-medium text-blue-800 text-sm mb-1">Discoverability</div>
                  <div className="text-xs text-blue-700">Make possible actions visible and obvious</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-medium text-blue-800 text-sm mb-1">Affordances</div>
                  <div className="text-xs text-blue-700">Design elements that suggest their function</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="font-medium text-blue-800 text-sm mb-1">Natural Mapping</div>
                  <div className="text-xs text-blue-700">Align controls with their effects intuitively</div>
                </div>
              </div>
            </div>

            {/* Evaluation Principles */}
            <div>
              <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Narrowing the Gulf of Evaluation
              </h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="font-medium text-green-800 text-sm mb-1">Immediate Feedback</div>
                  <div className="text-xs text-green-700">Respond to user actions without delay</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="font-medium text-green-800 text-sm mb-1">Clear Status</div>
                  <div className="text-xs text-green-700">Make system state visible and understandable</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="font-medium text-green-800 text-sm mb-1">Meaningful Feedback</div>
                  <div className="text-xs text-green-700">Provide information that helps users understand results</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Gulf Width in Modern Interfaces
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">😤</span>
              </div>
              <div className="font-semibold text-red-400 mb-2">Wide Gulf</div>
              <div className="text-sm text-slate-300">
                Complex enterprise software, poorly designed forms, unclear error messages
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤔</span>
              </div>
              <div className="font-semibold text-yellow-400 mb-2">Medium Gulf</div>
              <div className="text-sm text-slate-300">
                Most web interfaces, mobile apps with some learning curve
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">😊</span>
              </div>
              <div className="font-semibold text-green-400 mb-2">Narrow Gulf</div>
              <div className="text-sm text-slate-300">
                Well-designed apps, direct manipulation interfaces, intuitive controls
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
