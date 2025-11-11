export function LongTermMemory() {
  return (
    <section id="ltm" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Long-Term Memory</h2>
          <p className="text-purple-200 max-w-3xl mx-auto">
            The vast, seemingly limitless repository of all our knowledge, skills, and experiences. 
            Information is transferred from STM to LTM through rehearsal and by associating it with existing knowledge.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Characteristics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <h4 className="text-purple-300 mb-3">Capacity</h4>
              <div className="text-3xl text-purple-400 mb-2">∞</div>
              <p className="text-purple-200 text-sm">Virtually unlimited—we're constantly adding new information</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <h4 className="text-cyan-300 mb-3">Access Time</h4>
              <div className="text-3xl text-cyan-400 mb-2">~0.1s</div>
              <p className="text-cyan-200 text-sm">Slower than STM but still fast—about a tenth of a second</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <h4 className="text-green-300 mb-3">Duration</h4>
              <div className="text-3xl text-green-400 mb-2">Lifetime</div>
              <p className="text-green-200 text-sm">Can last minutes, days, or a lifetime (though forgetting can occur)</p>
            </div>
          </div>

          {/* Types of LTM */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-blue-300 mb-6">Episodic Memory</h3>
              <p className="text-blue-100 text-sm mb-6">
                Memory of personal events and experiences, stored sequentially. It is our "mental diary."
              </p>
              
              <div className="bg-blue-950/50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-blue-200 text-xs mb-2">Real-Life Example:</p>
                <p className="text-white text-sm">
                  Remembering the specific events of your high school graduation day—who was there, 
                  what you wore, how you felt. These are personal, time-stamped memories.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-purple-300 mb-6">Semantic Memory</h3>
              <p className="text-purple-100 text-sm mb-6">
                Structured knowledge of facts, concepts, and skills. Less about personal experience 
                and more about general knowledge of the world.
              </p>
              
              <div className="bg-purple-950/50 rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-purple-200 text-xs mb-2">Real-Life Example:</p>
                <p className="text-white text-sm">
                  Knowing that Paris is the capital of France. You might not remember when or how you learned 
                  this fact, but the fact itself is stored in your semantic memory.
                </p>
              </div>
            </div>
          </div>

          {/* LTM Processes */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <h3 className="text-purple-300 mb-8 text-center">LTM Processes</h3>
            
            <div className="space-y-6">
              {/* Storage */}
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-green-400 mb-3">Storage (Remembering)</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Getting information into LTM. Most effective when information is structured, meaningful, and familiar.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 rounded-lg p-3">
                    <p className="text-green-300 text-sm">Connect to existing knowledge</p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-3">
                    <p className="text-green-300 text-sm">Distribute practice over time</p>
                  </div>
                </div>
              </div>

              {/* Forgetting */}
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-orange-400 mb-3">Forgetting</h4>
                <div className="space-y-3">
                  <div className="bg-orange-900/20 rounded-lg p-3">
                    <div className="text-orange-300 text-sm mb-1">Decay</div>
                    <p className="text-gray-300 text-xs">Information gradually fades if not used</p>
                  </div>
                  <div className="bg-orange-900/20 rounded-lg p-3">
                    <div className="text-orange-300 text-sm mb-1">Interference</div>
                    <p className="text-gray-300 text-xs">New information can overwrite or get confused with old information</p>
                  </div>
                </div>
              </div>

              {/* Retrieval */}
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-cyan-400 mb-3">Retrieval</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="text-red-300 mb-2">Recall</div>
                    <p className="text-gray-300 text-sm mb-3">
                      Reproducing information directly from memory with few external cues (harder)
                    </p>
                    <p className="text-gray-400 text-xs italic">
                      "What is the capital of Australia?"
                    </p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="text-green-300 mb-2">Recognition</div>
                    <p className="text-gray-300 text-sm mb-3">
                      Knowing that you've seen something before when presented with it (easier)
                    </p>
                    <p className="text-gray-400 text-xs italic">
                      "Which is the capital of Australia: Sydney, Melbourne, or Canberra?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Implication */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 shadow-2xl">
            <h4 className="text-white mb-4">Design Implication</h4>
            <p className="text-cyan-100 text-sm mb-6">
              Interfaces should always favor recognition over recall. A graphical user interface with menus and icons 
              is easier to use than a command-line interface precisely because it presents the user with recognizable 
              options, rather than forcing them to recall specific commands from memory.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-red-300 text-sm mb-2">Command Line (Recall)</p>
                <code className="text-white text-xs bg-black/30 p-2 rounded block">
                  $ git commit -m "message"
                </code>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-green-300 text-sm mb-2">GUI (Recognition)</p>
                <div className="bg-black/30 p-2 rounded text-white text-xs">
                  [Commit] [Push] [Pull] ←  Visible options
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
