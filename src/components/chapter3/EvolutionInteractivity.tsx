import { Clock, ArrowRight, Zap, User, RefreshCw, FileText } from "lucide-react";

export function EvolutionInteractivity() {
  return (
    <section id="evolution-interactivity" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            The Evolution of Interactivity
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The nature of our interaction with computers has undergone a radical transformation, 
            moving from slow, detached processes to immediate, responsive experiences.
          </p>
        </div>

        {/* Timeline Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Old Paradigm: Batch Processing */}
          <div className="bg-white rounded-2xl border-2 border-red-200 p-8 relative">
            <div className="absolute -top-4 left-8">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-mono font-semibold">
                1950s - 1970s
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-mono font-bold text-slate-800">
                  Old Paradigm: Batch Processing
                </h3>
              </div>

              {/* Process Flow */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">1. Prepare Job</div>
                    <div className="text-sm text-slate-600">Write program on punched cards</div>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-red-200 h-8"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">2. Submit to Operator</div>
                    <div className="text-sm text-slate-600">Wait in queue for processing</div>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-red-200 h-8"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">3. Wait Hours/Days</div>
                    <div className="text-sm text-slate-600">No feedback during processing</div>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-red-200 h-8"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">4. Receive Output</div>
                    <div className="text-sm text-slate-600">Paper printout with results</div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="mt-8 bg-red-50 rounded-lg p-4">
                <h4 className="font-mono font-semibold text-red-800 mb-3">Characteristics:</h4>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• No direct interaction</li>
                  <li>• No feedback during processing</li>
                  <li>• User was passive waiter</li>
                  <li>• Single typo = restart entire process</li>
                </ul>
              </div>
            </div>
          </div>

          {/* New Paradigm: Interactive Computing */}
          <div className="bg-white rounded-2xl border-2 border-teal-200 p-8 relative">
            <div className="absolute -top-4 left-8">
              <div className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-mono font-semibold">
                1980s - Present
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-teal-500" />
                <h3 className="text-2xl font-mono font-bold text-slate-800">
                  New Paradigm: Interactive Computing
                </h3>
              </div>

              {/* Feedback Loop */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-6">
                  <div className="relative w-full h-full">
                    {/* Circular feedback loop */}
                    <div className="absolute inset-0 border-4 border-teal-300 rounded-full"></div>
                    <div className="absolute inset-2 border-2 border-teal-200 rounded-full"></div>
                    
                    {/* User */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Computer */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Arrows */}
                    <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2 rotate-180">
                      <ArrowRight className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full">
                    <RefreshCw className="w-4 h-4 text-teal-600 animate-spin" />
                    <span className="text-sm font-mono text-teal-700">Continuous Feedback Loop</span>
                  </div>
                </div>
              </div>

              {/* Key Characteristics */}
              <div className="mt-8 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-teal-600" />
                    <h4 className="font-mono font-semibold text-teal-800">Rapid Feedback</h4>
                  </div>
                  <p className="text-sm text-teal-700">
                    Key press → letter appears instantly. Button click → immediate response.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-teal-600" />
                    <h4 className="font-mono font-semibold text-teal-800">User in Control</h4>
                  </div>
                  <p className="text-sm text-teal-700">
                    User initiates actions and directs the flow of interaction.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <RefreshCw className="w-5 h-5 text-teal-600" />
                    <h4 className="font-mono font-semibold text-teal-800">"Doing" Rather Than "Thinking"</h4>
                  </div>
                  <p className="text-sm text-teal-700">
                    Try action → see result → undo/correct if needed. Exploratory workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Life Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Batch Processing Example */}
          <div className="bg-white rounded-xl border border-red-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-mono font-semibold text-slate-800">1960s University Research</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A scientist writes a program on paper, spends hours punching it onto cards, submits the deck, 
              and waits overnight. If the morning printout shows a single typo, the entire process repeats—
              another day of lost work. <strong>No feedback, no control, no true interaction.</strong>
            </p>
          </div>

          {/* Interactive Example */}
          <div className="bg-white rounded-xl border border-teal-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-mono font-semibold text-slate-800">Modern Photo Editing</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              User opens a photo, taps different filter options, sees results in real-time. Don't like it? 
              Single tap on "Undo" reverts the change. This rapid, exploratory dialogue is the 
              <strong> hallmark of modern interactivity.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
