import { User, Monitor, ArrowRight, ArrowDown, Tv, AlertTriangle } from "lucide-react";

export function AbowdBealeModel() {
  const translations = [
    {
      name: "Articulation",
      from: "User",
      to: "Input",
      color: "bg-blue-500",
      description: "Translating user goals into input language",
      example: "User wants to record a show → Press 'Record' button",
      errorExample: "User can't find the record function"
    },
    {
      name: "Performance",
      from: "Input",
      to: "System",
      color: "bg-green-500", 
      description: "Input language translated to system operations",
      example: "Button press → System command to start recording",
      errorExample: "Button doesn't trigger the right system function"
    },
    {
      name: "Presentation",
      from: "System",
      to: "Output",
      color: "bg-orange-500",
      description: "System state translated to output language",
      example: "Recording status → Red dot on display",
      errorExample: "System provides no feedback about recording"
    },
    {
      name: "Observation",
      from: "Output",
      to: "User",
      color: "bg-purple-500",
      description: "Output language translated to user understanding",
      example: "Red dot → User understands 'recording in progress'",
      errorExample: "User doesn't understand what the red dot means"
    }
  ];

  return (
    <section id="abowd-beale-model" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            An Extended Model: Abowd & Beale
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A more detailed framework that identifies four critical translation points 
            where interaction can break down, providing specific guidance for design improvements.
          </p>
        </div>

        {/* Main Model Diagram */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border-2 border-slate-200 p-12 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            The Four-Component Model
          </h3>
          
          <div className="relative max-w-4xl mx-auto" style={{ height: '500px' }}>
            {/* User */}
            <div className="absolute top-0 left-0 bg-blue-500 text-white rounded-2xl p-6 shadow-lg">
              <User className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-center">USER</div>
              <div className="text-xs text-center mt-2 opacity-90">
                Goals, intentions,<br/>mental models
              </div>
            </div>

            {/* Input */}
            <div className="absolute top-0 right-0 bg-green-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="w-8 h-8 mx-auto mb-2 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-sm font-bold">IN</span>
              </div>
              <div className="font-bold text-center">INPUT</div>
              <div className="text-xs text-center mt-2 opacity-90">
                Interface language<br/>for user actions
              </div>
            </div>

            {/* System */}
            <div className="absolute bottom-0 right-0 bg-gray-500 text-white rounded-2xl p-6 shadow-lg">
              <Monitor className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-center">SYSTEM</div>
              <div className="text-xs text-center mt-2 opacity-90">
                Core functionality<br/>and state
              </div>
            </div>

            {/* Output */}
            <div className="absolute bottom-0 left-0 bg-orange-500 text-white rounded-2xl p-6 shadow-lg">
              <div className="w-8 h-8 mx-auto mb-2 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-sm font-bold">OUT</span>
              </div>
              <div className="font-bold text-center">OUTPUT</div>
              <div className="text-xs text-center mt-2 opacity-90">
                Interface language<br/>for system feedback
              </div>
            </div>

            {/* Translation Arrows */}
            {/* Articulation */}
            <div className="absolute top-16 left-32 transform rotate-12">
              <div className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                1. ARTICULATION
              </div>
              <ArrowRight className="w-6 h-6 text-blue-500 mt-1" />
            </div>

            {/* Performance */}
            <div className="absolute top-32 right-32 transform rotate-90">
              <div className="bg-green-400 text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-90">
                2. PERFORMANCE
              </div>
              <ArrowDown className="w-6 h-6 text-green-500 mt-1" />
            </div>

            {/* Presentation */}
            <div className="absolute bottom-16 right-32 transform -rotate-12">
              <div className="bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                3. PRESENTATION
              </div>
              <ArrowRight className="w-6 h-6 text-orange-500 mt-1 transform rotate-180" />
            </div>

            {/* Observation */}
            <div className="absolute bottom-32 left-32 transform -rotate-90">
              <div className="bg-purple-400 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-90">
                4. OBSERVATION
              </div>
              <ArrowDown className="w-6 h-6 text-purple-500 mt-1 transform rotate-180" />
            </div>
          </div>
        </div>

        {/* Translation Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {translations.map((translation, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${translation.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{translation.name}</h3>
                  <p className="text-sm text-slate-600">{translation.from} → {translation.to}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {translation.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="text-xs font-semibold text-green-800 mb-1">Good Example:</div>
                  <div className="text-xs text-green-700">{translation.example}</div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <div className="text-xs font-semibold text-red-800 mb-1">Translation Error:</div>
                  <div className="text-xs text-red-700">{translation.errorExample}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VCR Case Study */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Tv className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">Case Study: VCR Programming</h3>
          </div>
          
          <p className="text-slate-300 mb-8 leading-relaxed">
            The classic example of interaction breakdown. VCRs were notoriously difficult to program 
            because of failures at multiple translation points.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-blue-400 mb-4">Translation Failures</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <div className="font-semibold text-red-400 text-sm">Articulation</div>
                  </div>
                  <div className="text-xs text-slate-300">
                    Complex button sequences required. Users couldn't figure out how to express "record this show next Tuesday."
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <div className="font-semibold text-red-400 text-sm">Presentation</div>
                  </div>
                  <div className="text-xs text-slate-300">
                    Cryptic display with unclear symbols. No confirmation that programming worked.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-green-400 mb-4">Modern Solutions</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <div className="font-semibold text-green-400 text-sm mb-2">Better Articulation</div>
                  <div className="text-xs text-slate-300">
                    Modern DVRs: "Record all episodes of this show" button
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <div className="font-semibold text-green-400 text-sm mb-2">Better Presentation</div>
                  <div className="text-xs text-slate-300">
                    Clear confirmation: "Recording The Office, Thursdays at 9 PM"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Guidelines */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Design Guidelines for Each Translation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h4 className="font-bold text-blue-800 mb-3 text-sm">Articulation</h4>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Clear affordances</li>
                <li>• Discoverable actions</li>
                <li>• Natural mappings</li>
                <li>• Familiar metaphors</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h4 className="font-bold text-green-800 mb-3 text-sm">Performance</h4>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• Reliable input handling</li>
                <li>• Consistent behavior</li>
                <li>• Error prevention</li>
                <li>• System robustness</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h4 className="font-bold text-orange-800 mb-3 text-sm">Presentation</h4>
              <ul className="text-xs text-orange-700 space-y-1">
                <li>• Clear feedback</li>
                <li>• Visible system state</li>
                <li>• Meaningful information</li>
                <li>• Appropriate timing</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <h4 className="font-bold text-purple-800 mb-3 text-sm">Observation</h4>
              <ul className="text-xs text-purple-700 space-y-1">
                <li>• Understandable symbols</li>
                <li>• User's mental model</li>
                <li>• Cultural conventions</li>
                <li>• Contextual meaning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
