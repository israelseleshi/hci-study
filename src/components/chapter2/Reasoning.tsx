export function Reasoning() {
  return (
    <section id="reasoning" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Human Thinking: Reasoning and Problem Solving</h2>
          <p className="text-purple-200 max-w-3xl mx-auto">
            Thinking is the process of using our knowledge to draw conclusions, solve problems, and generate new ideas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Types of Reasoning */}
          <div>
            <h3 className="text-purple-300 mb-8 text-center">Types of Reasoning</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Deductive */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔬</span>
                </div>
                <h4 className="text-blue-300 text-center mb-4">Deductive Reasoning</h4>
                <p className="text-blue-100 text-sm mb-4 text-center">
                  From general principles to specific, logically necessary conclusions
                </p>
                
                <div className="bg-blue-950/50 rounded-lg p-4 space-y-2">
                  <div className="text-blue-200 text-sm">Premise 1: All software has bugs</div>
                  <div className="text-blue-200 text-sm">Premise 2: Word is software</div>
                  <div className="border-t border-blue-500/30 pt-2 mt-2">
                    <div className="text-blue-300 text-sm">∴ Word has bugs</div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-900/20 rounded-lg p-3">
                  <p className="text-blue-200 text-xs">
                    If the premises are true, the conclusion <span className="text-blue-300">must be true</span>
                  </p>
                </div>
              </div>

              {/* Inductive */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="text-purple-300 text-center mb-4">Inductive Reasoning</h4>
                <p className="text-purple-100 text-sm mb-4 text-center">
                  From specific observations to general conclusions
                </p>
                
                <div className="bg-purple-950/50 rounded-lg p-4 space-y-2">
                  <div className="text-purple-200 text-sm">Observation: Last 5 times I clicked this button, app crashed</div>
                  <div className="border-t border-purple-500/30 pt-2 mt-2">
                    <div className="text-purple-300 text-sm">∴ This button causes crashes</div>
                  </div>
                </div>

                <div className="mt-4 bg-purple-900/20 rounded-lg p-3">
                  <p className="text-purple-200 text-xs">
                    The conclusion is <span className="text-purple-300">probable</span>, but not guaranteed
                  </p>
                </div>
              </div>

              {/* Abductive */}
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
                <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h4 className="text-orange-300 text-center mb-4">Abductive Reasoning</h4>
                <p className="text-orange-100 text-sm mb-4 text-center">
                  From an observed event back to the most likely cause
                </p>
                
                <div className="bg-orange-950/50 rounded-lg p-4 space-y-2">
                  <div className="text-orange-200 text-sm">Observation: Computer is slow, fan is loud</div>
                  <div className="border-t border-orange-500/30 pt-2 mt-2">
                    <div className="text-orange-300 text-sm">∴ Process using 100% CPU</div>
                  </div>
                </div>

                <div className="mt-4 bg-orange-900/20 rounded-lg p-3">
                  <p className="text-orange-200 text-xs">
                    This is <span className="text-orange-300">unreliable</span>—might be overheating due to dust
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Solving */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <h3 className="text-purple-300 mb-8 text-center">Problem Solving</h3>
            <p className="text-purple-100 text-sm text-center mb-8">
              The process of finding a solution to an unfamiliar task
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-cyan-300 mb-4">Problem Space Theory</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Problem solving is a search process. You have an initial state, a goal state, and operators 
                  (legal moves) to move between states.
                </p>
                
                <div className="bg-cyan-900/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-cyan-500 w-6 h-6 rounded flex items-center justify-center text-xs flex-shrink-0">1</div>
                    <div className="text-cyan-200 text-sm">Initial State</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center text-xs flex-shrink-0">2</div>
                    <div className="text-purple-200 text-sm">Operators (legal moves)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-green-500 w-6 h-6 rounded flex items-center justify-center text-xs flex-shrink-0">3</div>
                    <div className="text-green-200 text-sm">Goal State</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-green-300 mb-4">Example: Rubik's Cube</h4>
                <div className="space-y-3">
                  <div className="bg-cyan-900/30 rounded-lg p-3 border-l-4 border-cyan-500">
                    <div className="text-cyan-300 text-sm mb-1">Initial State</div>
                    <div className="text-gray-300 text-xs">Scrambled cube</div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-3 border-l-4 border-purple-500">
                    <div className="text-purple-300 text-sm mb-1">Operators</div>
                    <div className="text-gray-300 text-xs">Possible turns on the cube's faces (R, L, U, D, F, B)</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-3 border-l-4 border-green-500">
                    <div className="text-green-300 text-sm mb-1">Goal State</div>
                    <div className="text-gray-300 text-xs">Solved cube (each face one color)</div>
                  </div>
                </div>

                <div className="mt-4 bg-white/5 rounded-lg p-3">
                  <p className="text-gray-300 text-xs">
                    Use heuristics (like solving one layer at a time) to efficiently navigate the problem space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
