import { Trash2, Eye, Hand, Brain, CheckCircle } from "lucide-react";

export function NormansSevenStages() {
  const stages = [
    {
      number: 1,
      title: "Goal Formation",
      category: "execution",
      description: "Form the goal",
      example: "I want to delete this blurry photo",
      color: "bg-blue-500",
      position: { top: "5%", left: "50%", transform: "translateX(-50%)" }
    },
    {
      number: 2,
      title: "Intention Formation",
      category: "execution", 
      description: "Form the intention",
      example: "I need to find the delete option",
      color: "bg-blue-400",
      position: { top: "20%", right: "15%" }
    },
    {
      number: 3,
      title: "Action Specification",
      category: "execution",
      description: "Specify an action",
      example: "I should look for a trash can icon",
      color: "bg-green-500",
      position: { top: "50%", right: "5%" }
    },
    {
      number: 4,
      title: "Execution",
      category: "execution",
      description: "Execute the action",
      example: "Tap the trash can icon",
      color: "bg-green-400",
      position: { bottom: "20%", right: "15%" }
    },
    {
      number: 5,
      title: "Perception",
      category: "evaluation",
      description: "Perceive system state",
      example: "I see a confirmation dialog appeared",
      color: "bg-orange-500",
      position: { bottom: "20%", left: "15%" }
    },
    {
      number: 6,
      title: "Interpretation",
      category: "evaluation",
      description: "Interpret the perception",
      example: "The system is asking me to confirm deletion",
      color: "bg-orange-400",
      position: { top: "50%", left: "5%" }
    },
    {
      number: 7,
      title: "Evaluation",
      category: "evaluation",
      description: "Evaluate outcome",
      example: "This matches my goal - I can confirm",
      color: "bg-red-500",
      position: { top: "20%", left: "15%" }
    }
  ];

  return (
    <section id="normans-seven-stages" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Models of Interaction: Norman's 7 Stages
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A detailed breakdown of the cognitive processes involved in human-computer interaction, 
            from initial goal formation through final evaluation.
          </p>
        </div>

        {/* Large Circular Diagram */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-12 shadow-xl mb-12">
          <div className="relative w-full max-w-4xl mx-auto" style={{ height: '600px' }}>
            {/* Central Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full border-4 border-slate-300 flex flex-col items-center justify-center">
                <Trash2 className="w-12 h-12 text-slate-600 mb-2" />
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-700">Example:</div>
                  <div className="text-xs text-slate-600">Deleting a Photo</div>
                  <div className="text-xs text-slate-600">from Smartphone</div>
                </div>
              </div>
            </div>

            {/* Stage Nodes */}
            {stages.map((stage, index) => (
              <div
                key={index}
                className="absolute"
                style={stage.position}
              >
                <div className={`${stage.color} text-white rounded-2xl p-4 shadow-lg max-w-xs`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">{stage.number}</span>
                    </div>
                    <div className="text-sm font-bold">{stage.title}</div>
                  </div>
                  <div className="text-xs opacity-90 mb-2">{stage.description}</div>
                  <div className="text-xs bg-white bg-opacity-20 rounded p-2">
                    "{stage.example}"
                  </div>
                </div>
              </div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Execution Path (1-4) */}
              <path
                d="M 300 60 Q 450 150 480 300 Q 450 450 300 540"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.6"
              />
              
              {/* Evaluation Path (5-7) */}
              <path
                d="M 300 540 Q 150 450 120 300 Q 150 150 300 60"
                stroke="#F97316"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Execution vs Evaluation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Execution Side */}
          <div className="bg-green-50 rounded-2xl border-2 border-green-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Hand className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Execution (Stages 1-4)</h3>
            </div>
            <p className="text-green-700 mb-6 leading-relaxed">
              The path from mental goal to physical action. This is where users translate 
              their intentions into concrete interactions with the system.
            </p>
            
            <div className="space-y-4">
              {stages.slice(0, 4).map((stage, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {stage.number}
                    </div>
                    <div className="font-semibold text-green-800">{stage.title}</div>
                  </div>
                  <div className="text-sm text-green-700 ml-9">"{stage.example}"</div>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Side */}
          <div className="bg-orange-50 rounded-2xl border-2 border-orange-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-orange-800">Evaluation (Stages 5-7)</h3>
            </div>
            <p className="text-orange-700 mb-6 leading-relaxed">
              The path from system response back to user understanding. This is where users 
              interpret feedback and determine if their goal was achieved.
            </p>
            
            <div className="space-y-4">
              {stages.slice(4, 7).map((stage, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {stage.number}
                    </div>
                    <div className="font-semibold text-orange-800">{stage.title}</div>
                  </div>
                  <div className="text-sm text-orange-700 ml-9">"{stage.example}"</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complete Example Walkthrough */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Complete Example: Deleting a Blurry Photo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {stages.map((stage, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-sm">{stage.number}</span>
                </div>
                <div className="text-xs font-semibold text-slate-700 mb-2">{stage.title}</div>
                <div className="text-xs text-slate-600 leading-tight">"{stage.example}"</div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Implications */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Design Implications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                Supporting Execution
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Make actions discoverable and obvious</li>
                <li>• Provide clear affordances for interaction</li>
                <li>• Minimize the gap between intention and action</li>
                <li>• Use familiar interaction patterns</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                Supporting Evaluation
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Provide immediate and clear feedback</li>
                <li>• Make system state visible and understandable</li>
                <li>• Confirm successful completion of actions</li>
                <li>• Enable easy recovery from errors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
