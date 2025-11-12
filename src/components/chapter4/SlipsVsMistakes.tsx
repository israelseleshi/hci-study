import { Hand, Brain, Wrench, BookOpen, AlertCircle, CheckCircle } from "lucide-react";

export function SlipsVsMistakes() {
  const slipExamples = [
    {
      scenario: "Typing Error",
      description: "Typing 'teh' instead of 'the'",
      cause: "Finger moved to wrong key",
      solution: "Autocorrect, larger keys, better keyboard layout"
    },
    {
      scenario: "Wrong Button",
      description: "Clicking 'Delete' instead of 'Edit'",
      cause: "Buttons too close together",
      solution: "Better spacing, confirmation dialogs, undo functionality"
    },
    {
      scenario: "Mode Error",
      description: "Typing in caps lock accidentally",
      cause: "Unaware of current mode",
      solution: "Clear mode indicators, easy mode switching"
    }
  ];

  const mistakeExamples = [
    {
      scenario: "Wrong Feature",
      description: "Using 'Reply All' thinking it's private",
      cause: "Misunderstanding of email function",
      solution: "Better labeling, user education, clear warnings"
    },
    {
      scenario: "Incorrect Model",
      description: "Expecting files to sync instantly across devices",
      cause: "Wrong mental model of cloud storage",
      solution: "Status indicators, progress feedback, user onboarding"
    },
    {
      scenario: "Rule-Based Error",
      description: "Using old password after it was changed",
      cause: "Following outdated rule",
      solution: "Clear notifications, password managers, system reminders"
    }
  ];

  return (
    <section id="slips-vs-mistakes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Analyzing Errors: Slips vs. Mistakes
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the difference between slips and mistakes is crucial for designing 
            appropriate solutions. Each type of error requires different design approaches.
          </p>
        </div>

        {/* Main Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Slips */}
          <div className="bg-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-800">Slips</h3>
                <p className="text-sm text-orange-600">Execution Errors</p>
              </div>
            </div>

            {/* Definition */}
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 mb-6">
              <h4 className="font-bold text-orange-800 mb-3">Definition</h4>
              <p className="text-orange-700 text-sm leading-relaxed mb-4">
                <strong>Correct intention, flawed execution.</strong> The user knows what they want 
                to do but makes an error in carrying it out.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="font-semibold text-orange-800 mb-1">Characteristics:</div>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Automatic behavior</li>
                    <li>• Skilled users</li>
                    <li>• Routine tasks</li>
                    <li>• Attention lapses</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-orange-800 mb-1">When they occur:</div>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Distraction</li>
                    <li>• Fatigue</li>
                    <li>• Stress</li>
                    <li>• Multitasking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution Approach */}
            <div className="bg-orange-100 rounded-lg p-4 border border-orange-300 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4 text-orange-700" />
                <h4 className="font-bold text-orange-800 text-sm">Solution: Better UI Design</h4>
              </div>
              <ul className="text-xs text-orange-700 space-y-1">
                <li>• Larger, well-spaced controls</li>
                <li>• Confirmation dialogs for destructive actions</li>
                <li>• Undo functionality</li>
                <li>• Clear visual feedback</li>
                <li>• Prevent errors through constraints</li>
              </ul>
            </div>

            {/* Examples */}
            <div>
              <h4 className="font-bold text-orange-800 mb-3 text-sm">Common Examples</h4>
              <div className="space-y-3">
                {slipExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="font-semibold text-orange-800 text-sm mb-1">{example.scenario}</div>
                    <div className="text-xs text-orange-700 mb-2">"{example.description}"</div>
                    <div className="text-xs text-slate-600 mb-2">
                      <strong>Cause:</strong> {example.cause}
                    </div>
                    <div className="text-xs text-green-700 bg-green-50 rounded p-2">
                      <strong>Fix:</strong> {example.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mistakes */}
          <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800">Mistakes</h3>
                <p className="text-sm text-blue-600">Planning Errors</p>
              </div>
            </div>

            {/* Definition */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h4 className="font-bold text-blue-800 mb-3">Definition</h4>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                <strong>Flawed intention, flawed mental model.</strong> The user has the wrong 
                goal or misunderstands how the system works.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="font-semibold text-blue-800 mb-1">Characteristics:</div>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Conscious decisions</li>
                    <li>• Novice users</li>
                    <li>• Complex tasks</li>
                    <li>• Wrong mental model</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-blue-800 mb-1">When they occur:</div>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Lack of knowledge</li>
                    <li>• Poor instructions</li>
                    <li>• Unclear system</li>
                    <li>• Wrong assumptions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution Approach */}
            <div className="bg-blue-100 rounded-lg p-4 border border-blue-300 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-blue-700" />
                <h4 className="font-bold text-blue-800 text-sm">Solution: Better User Understanding</h4>
              </div>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Clear instructions and labels</li>
                <li>• Progressive disclosure</li>
                <li>• Onboarding and tutorials</li>
                <li>• Consistent mental models</li>
                <li>• Contextual help and guidance</li>
              </ul>
            </div>

            {/* Examples */}
            <div>
              <h4 className="font-bold text-blue-800 mb-3 text-sm">Common Examples</h4>
              <div className="space-y-3">
                {mistakeExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="font-semibold text-blue-800 text-sm mb-1">{example.scenario}</div>
                    <div className="text-xs text-blue-700 mb-2">"{example.description}"</div>
                    <div className="text-xs text-slate-600 mb-2">
                      <strong>Cause:</strong> {example.cause}
                    </div>
                    <div className="text-xs text-green-700 bg-green-50 rounded p-2">
                      <strong>Fix:</strong> {example.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Quick Reference: Slips vs. Mistakes
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left font-bold text-slate-700 py-4 px-4">Aspect</th>
                  <th className="text-left font-bold text-orange-700 py-4 px-4">Slips</th>
                  <th className="text-left font-bold text-blue-700 py-4 px-4">Mistakes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Problem Location</td>
                  <td className="py-3 px-4 text-orange-700">Execution stage</td>
                  <td className="py-3 px-4 text-blue-700">Planning stage</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">User's Intention</td>
                  <td className="py-3 px-4 text-orange-700">Correct</td>
                  <td className="py-3 px-4 text-blue-700">Incorrect</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">User's Action</td>
                  <td className="py-3 px-4 text-orange-700">Incorrect</td>
                  <td className="py-3 px-4 text-blue-700">Matches intention</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Typical User</td>
                  <td className="py-3 px-4 text-orange-700">Experienced</td>
                  <td className="py-3 px-4 text-blue-700">Novice or confused</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Primary Cause</td>
                  <td className="py-3 px-4 text-orange-700">Attention lapse</td>
                  <td className="py-3 px-4 text-blue-700">Knowledge gap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Design Solution</td>
                  <td className="py-3 px-4 text-orange-700">Better interface design</td>
                  <td className="py-3 px-4 text-blue-700">Better user education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Design Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Preventing Slips */}
          <div className="bg-orange-50 rounded-2xl border border-orange-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-800">Preventing Slips</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-orange-800 text-sm mb-2">Constraints</h4>
                <p className="text-xs text-orange-700">Prevent invalid actions from being possible</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-orange-800 text-sm mb-2">Confirmations</h4>
                <p className="text-xs text-orange-700">Ask "Are you sure?" for destructive actions</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-orange-800 text-sm mb-2">Undo/Redo</h4>
                <p className="text-xs text-orange-700">Allow users to reverse their actions</p>
              </div>
            </div>
          </div>

          {/* Preventing Mistakes */}
          <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-800">Preventing Mistakes</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-800 text-sm mb-2">Clear Labeling</h4>
                <p className="text-xs text-blue-700">Use terminology that matches user's mental model</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-800 text-sm mb-2">Progressive Disclosure</h4>
                <p className="text-xs text-blue-700">Show information when and where it's needed</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-800 text-sm mb-2">Contextual Help</h4>
                <p className="text-xs text-blue-700">Provide guidance at the point of need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
