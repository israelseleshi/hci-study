import { MessageCircle, ArrowRight, RotateCcw } from "lucide-react";

export function HeroChapter4() {
  return (
    <section id="hero-chapter4" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Cognitive Flow Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #4A90E2 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #4A90E2 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Chapter Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Chapter 4</div>
            <div className="text-lg font-semibold text-slate-700">Human-Computer Interaction Models</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The Interaction:
            <span className="block text-blue-500">The Dialogue Between</span>
            <span className="block">Human and Computer</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl leading-relaxed font-light mb-8">
            The interface is the translator. When the translation fails, the interaction breaks.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg max-w-3xl">
            <p className="text-blue-800 font-medium">
              Understanding interaction requires mapping the cognitive journey from human intention 
              to system response and back to human understanding.
            </p>
          </div>
        </div>

        {/* Norman's Execution-Evaluation Cycle */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-12 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Norman's Execution-Evaluation Cycle
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            The fundamental loop of human-computer interaction: from goal formation to action execution, 
            system response, and evaluation of results.
          </p>
          
          {/* Circular Cycle Diagram */}
          <div className="relative w-96 h-96 mx-auto mb-8">
            {/* Central Circle */}
            <div className="absolute inset-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full border-4 border-blue-200 flex items-center justify-center">
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-blue-600 mx-auto mb-2 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="text-sm font-semibold text-slate-700">Continuous</div>
                <div className="text-sm font-semibold text-slate-700">Cycle</div>
              </div>
            </div>

            {/* Goal (Top) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-sm font-bold text-center">GOAL</div>
                <div className="text-xs text-center mt-1">What I want to achieve</div>
              </div>
            </div>

            {/* Execution (Right) */}
            <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
              <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-sm font-bold text-center">EXECUTION</div>
                <div className="text-xs text-center mt-1">How I act</div>
              </div>
            </div>

            {/* System (Bottom) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
              <div className="bg-gray-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-sm font-bold text-center">SYSTEM</div>
                <div className="text-xs text-center mt-1">What happens</div>
              </div>
            </div>

            {/* Evaluation (Left) */}
            <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-sm font-bold text-center">EVALUATION</div>
                <div className="text-xs text-center mt-1">Did it work?</div>
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute top-12 right-12">
              <ArrowRight className="w-6 h-6 text-green-500 transform rotate-45" />
            </div>
            <div className="absolute bottom-12 right-12">
              <ArrowRight className="w-6 h-6 text-gray-500 transform rotate-135" />
            </div>
            <div className="absolute bottom-12 left-12">
              <ArrowRight className="w-6 h-6 text-orange-500 transform rotate-225" />
            </div>
            <div className="absolute top-12 left-12">
              <ArrowRight className="w-6 h-6 text-blue-500 transform rotate-315" />
            </div>
          </div>

          {/* Example Walkthrough */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">
              Example: Sending a Text Message
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-sm font-semibold text-blue-700 mb-2">GOAL</div>
                <div className="text-xs text-slate-600">
                  "I want to tell my friend I'm running late"
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-sm font-semibold text-green-700 mb-2">EXECUTION</div>
                <div className="text-xs text-slate-600">
                  Open messaging app, select contact, type message, tap send
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-2">SYSTEM</div>
                <div className="text-xs text-slate-600">
                  Message appears in chat, "Delivered" status shows
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="text-sm font-semibold text-orange-700 mb-2">EVALUATION</div>
                <div className="text-xs text-slate-600">
                  "Good, message sent successfully. Goal achieved."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">The Continuous Nature of Interaction</h3>
              <p className="text-slate-700 leading-relaxed">
                This cycle repeats continuously during any interaction. Each evaluation becomes the starting point 
                for the next goal. When the cycle breaks down—when execution is difficult or evaluation is unclear—
                the user experience suffers. Great interface design minimizes friction at every stage of this cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
