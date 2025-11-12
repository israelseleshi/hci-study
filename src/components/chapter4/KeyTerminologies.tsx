import { Factory, Target, CheckSquare, ArrowRight } from "lucide-react";

export function KeyTerminologies() {
  const terminologies = [
    {
      title: "Domain",
      icon: Factory,
      color: "bg-blue-500",
      definition: "The area of work, study, or interest that the user is engaged in",
      description: "The real-world context and environment where the user operates",
      examples: [
        "Banking and finance",
        "Photo editing",
        "Social media",
        "Online shopping"
      ]
    },
    {
      title: "Goal",
      icon: Target,
      color: "bg-green-500",
      definition: "What the user wants to achieve within their domain",
      description: "The desired outcome or objective that motivates the user's actions",
      examples: [
        "Transfer money to a friend",
        "Remove red-eye from a photo",
        "Share vacation pictures",
        "Buy a birthday gift"
      ]
    },
    {
      title: "Task",
      icon: CheckSquare,
      color: "bg-orange-500",
      definition: "The specific activities required to accomplish the goal",
      description: "The concrete steps and actions the user must perform",
      examples: [
        "Log in, select recipient, enter amount, confirm",
        "Open photo, select tool, click on eyes, apply",
        "Upload photos, add captions, select audience",
        "Search product, compare prices, add to cart"
      ]
    }
  ];

  return (
    <section id="key-terminologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Key Terminologies
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Understanding interaction begins with three fundamental concepts that frame 
            how users approach and accomplish their objectives through technology.
          </p>
        </div>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {terminologies.map((term, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${term.color} rounded-xl flex items-center justify-center`}>
                  <term.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{term.title}</h3>
              </div>

              {/* Definition */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Definition</h4>
                  <p className="text-slate-800 font-medium leading-relaxed">{term.definition}</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{term.description}</p>
              </div>

              {/* Examples */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Examples</h4>
                <ul className="space-y-2">
                  {term.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Real-Life Example Connection */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            How They Connect: A Real-Life Example
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Scenario: "Pay a friend back for dinner"
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Domain */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-700 mb-2">DOMAIN</div>
                  <div className="text-xs text-slate-600 bg-blue-50 rounded-lg p-3">
                    Personal finance and money management
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                </div>

                {/* Goal */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-700 mb-2">GOAL</div>
                  <div className="text-xs text-slate-600 bg-green-50 rounded-lg p-3">
                    Transfer $25 to Sarah for last night's dinner
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center my-6">
                <ArrowRight className="w-6 h-6 text-slate-400 transform rotate-90" />
              </div>

              {/* Task */}
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-orange-700 mb-3">TASK</div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs text-slate-700">
                    <div className="bg-white rounded p-2 border border-orange-200">
                      1. Open banking app
                    </div>
                    <div className="bg-white rounded p-2 border border-orange-200">
                      2. Select "Send Money"
                    </div>
                    <div className="bg-white rounded p-2 border border-orange-200">
                      3. Choose Sarah from contacts
                    </div>
                    <div className="bg-white rounded p-2 border border-orange-200">
                      4. Enter $25 and confirm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-slate-100 rounded-lg p-6 border-l-4 border-slate-400">
              <h4 className="font-semibold text-slate-800 mb-2">Key Insight</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                The <strong>domain</strong> provides context, the <strong>goal</strong> provides motivation, 
                and the <strong>task</strong> provides the specific interaction pathway. Understanding all three 
                is essential for designing interfaces that feel natural and efficient to users.
              </p>
            </div>
          </div>
        </div>

        {/* Design Implications */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Domain Considerations</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Use familiar terminology</li>
              <li>• Respect domain conventions</li>
              <li>• Understand user expertise levels</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-green-800 mb-3">Goal Alignment</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Make goals clearly achievable</li>
              <li>• Provide multiple paths to goals</li>
              <li>• Support both explicit and implicit goals</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Task Optimization</h4>
            <ul className="text-sm text-orange-700 space-y-2">
              <li>• Minimize task complexity</li>
              <li>• Provide clear task progression</li>
              <li>• Enable task recovery and undo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
