import { Terminal, List, MessageSquare, FileText, Monitor, Gamepad2 } from "lucide-react";

export function InteractionStyles() {
  const styles = [
    {
      title: "Command Line Interface (CLI)",
      icon: Terminal,
      color: "bg-slate-600",
      strength: "Powerful for experts",
      description: "Text-based interaction using typed commands",
      examples: ["Terminal/Shell", "SQL queries", "Programming IDEs"],
      pros: ["Very efficient for experts", "Scriptable and automatable", "Precise control"],
      cons: ["Steep learning curve", "Requires memorization", "Not discoverable"]
    },
    {
      title: "Menu-Based",
      icon: List,
      color: "bg-blue-500",
      strength: "Structured navigation",
      description: "Hierarchical organization of options and commands",
      examples: ["Restaurant menus", "ATM interfaces", "Phone systems"],
      pros: ["Easy to learn", "Reduces memory load", "Clear structure"],
      cons: ["Can be slow", "Deep hierarchies confusing", "Limited flexibility"]
    },
    {
      title: "Natural Language",
      icon: MessageSquare,
      color: "bg-green-500",
      strength: "Intuitive communication",
      description: "Interaction using spoken or written natural language",
      examples: ["Voice assistants", "Chatbots", "Search engines"],
      pros: ["Most natural for humans", "No learning required", "Flexible input"],
      cons: ["Ambiguity issues", "Context dependency", "Processing complexity"]
    },
    {
      title: "Form Fill-in",
      icon: FileText,
      color: "bg-orange-500",
      strength: "Structured data entry",
      description: "Template-based interaction for data collection",
      examples: ["Web forms", "Surveys", "Database entry"],
      pros: ["Familiar metaphor", "Validates input", "Complete data capture"],
      cons: ["Rigid structure", "Can be lengthy", "Poor error handling"]
    },
    {
      title: "WIMP (Windows, Icons, Menus, Pointer)",
      icon: Monitor,
      color: "bg-purple-500",
      strength: "Visual direct manipulation",
      description: "Graphical interface with visual metaphors",
      examples: ["Desktop OS", "Office applications", "File managers"],
      pros: ["Intuitive metaphors", "Direct manipulation", "Visual feedback"],
      cons: ["Screen space intensive", "Mouse dependency", "Can be cluttered"]
    },
    {
      title: "Direct Manipulation",
      icon: Gamepad2,
      color: "bg-red-500",
      strength: "Immediate feedback",
      description: "Direct interaction with visual objects",
      examples: ["Touch interfaces", "Drag & drop", "Gaming controls"],
      pros: ["Immediate feedback", "Natural gestures", "Engaging experience"],
      cons: ["Limited precision", "Fatigue with extended use", "Accessibility issues"]
    }
  ];

  return (
    <section id="interaction-styles" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Interaction Styles: A Visual Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Different approaches to human-computer interaction, each with unique strengths 
            and appropriate use cases. The choice depends on user needs, task complexity, and context.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {styles.map((style, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${style.color} rounded-lg flex items-center justify-center`}>
                  <style.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{style.title}</h3>
                </div>
              </div>

              {/* Strength */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 mb-4 border border-green-200">
                <div className="text-xs font-semibold text-green-800 mb-1">Core Strength</div>
                <div className="text-sm font-medium text-green-700">{style.strength}</div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{style.description}</p>

              {/* Examples */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Examples</h4>
                <div className="flex flex-wrap gap-1">
                  {style.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <h4 className="text-xs font-semibold text-green-600 mb-2">Advantages</h4>
                  <ul className="space-y-1">
                    {style.pros.slice(0, 2).map((pro, proIndex) => (
                      <li key={proIndex} className="text-xs text-green-700 flex items-start gap-1">
                        <span className="text-green-500 mt-0.5">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-red-600 mb-2">Limitations</h4>
                  <ul className="space-y-1">
                    {style.cons.slice(0, 2).map((con, conIndex) => (
                      <li key={conIndex} className="text-xs text-red-700 flex items-start gap-1">
                        <span className="text-red-500 mt-0.5">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Interaction Style Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left font-bold text-slate-700 py-3 px-4">Style</th>
                  <th className="text-center font-bold text-slate-700 py-3 px-4">Learning Curve</th>
                  <th className="text-center font-bold text-slate-700 py-3 px-4">Efficiency</th>
                  <th className="text-center font-bold text-slate-700 py-3 px-4">Flexibility</th>
                  <th className="text-center font-bold text-slate-700 py-3 px-4">Error Prevention</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-800">CLI</td>
                  <td className="py-3 px-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">High</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">High</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">High</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Low</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-800">Menu-Based</td>
                  <td className="py-3 px-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Low</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Low</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">High</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-800">Natural Language</td>
                  <td className="py-3 px-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Low</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">High</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-800">WIMP</td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                  <td className="py-3 px-4 text-center"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Medium</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection Guidelines */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Choosing the Right Interaction Style
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Consider the User</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Expertise level</li>
                <li>• Frequency of use</li>
                <li>• Physical capabilities</li>
                <li>• Cultural background</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">Consider the Task</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Complexity level</li>
                <li>• Precision requirements</li>
                <li>• Speed requirements</li>
                <li>• Error consequences</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3">Consider the Context</h4>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• Environment constraints</li>
                <li>• Available technology</li>
                <li>• Time pressures</li>
                <li>• Social factors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
