export function ShortTermMemory() {
  return (
    <section id="stm" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Short-Term (Working) Memory</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Once information from the sensory buffers is attended to, it moves into Short-Term Memory (STM)—
            the brain's "scratchpad" for holding and manipulating information needed for the current task.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Key Characteristics */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-indigo-200">
            <h3 className="text-indigo-900 mb-8 text-center">Key Characteristics</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-indigo-800 mb-4">Limited Capacity</h4>
                <div className="bg-indigo-100 rounded-lg p-6 mb-4 text-center">
                  <div className="text-4xl text-indigo-600 mb-2">7 ± 2</div>
                  <div className="text-indigo-700 text-sm">items (Miller's Law)</div>
                </div>
                <p className="text-gray-700 text-sm">
                  STM can only hold between 5 and 9 chunks of information at one time. This is why phone numbers 
                  are typically broken into chunks.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-indigo-800 mb-4">Short Duration</h4>
                <div className="bg-indigo-100 rounded-lg p-6 mb-4 text-center">
                  <div className="text-4xl text-indigo-600 mb-2">10-20s</div>
                  <div className="text-indigo-700 text-sm">without rehearsal</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Information decays quickly unless actively rehearsed (repeated). New incoming information 
                  will quickly displace the old information.
                </p>
              </div>
            </div>
          </div>

          {/* Chunking */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
            <h3 className="text-purple-900 mb-6">Chunking: Overcoming STM Limits</h3>
            <p className="text-gray-700 mb-8">
              The "7 ± 2" rule applies to "chunks" of information, not just individual items. A chunk is a single, 
              meaningful unit. By grouping information into meaningful chunks, we can effectively increase STM capacity.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bad: Unchunked */}
              <div className="bg-white rounded-xl p-6 border-2 border-red-300">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <h4 className="text-red-800">Unchunked (Hard)</h4>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['0', '7', '1', '8', '4', '9', '5', '1', '2', '3'].map((digit, i) => (
                      <div key={i} className="bg-red-200 text-red-900 w-10 h-10 rounded flex items-center justify-center">
                        {digit}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-red-700 text-sm mt-3">10 separate items</p>
                </div>

                <p className="text-red-900 text-sm">
                  ⚠️ Trying to remember 10 separate digits is very difficult and overloads STM
                </p>
              </div>

              {/* Good: Chunked */}
              <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-green-800">Chunked (Easy)</h4>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="flex gap-3 justify-center">
                    <div className="bg-green-200 text-green-900 px-4 py-2 rounded">
                      07184
                    </div>
                    <div className="bg-green-200 text-green-900 px-4 py-2 rounded">
                      95123
                    </div>
                  </div>
                  <p className="text-center text-green-700 text-sm mt-3">2 meaningful chunks</p>
                </div>

                <p className="text-green-900 text-sm">
                  ✓ Grouped into a familiar phone number format—much easier to hold in memory
                </p>
              </div>
            </div>
          </div>

          {/* Design Implications */}
          <div className="bg-gradient-to-br from-gray-800 to-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
            <h3 className="text-cyan-400 mb-8 text-center">Implications for Interface Design</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-cyan-300 mb-3">Don't Rely on Recall</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Users should not be required to remember information from one part of an interface to use it in another.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-900/30 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="text-red-300 text-sm mb-2">❌ Bad Design:</p>
                    <p className="text-gray-200 text-sm">
                      Show confirmation code on one screen, then ask user to re-enter it on the next screen 
                      without displaying it.
                    </p>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-green-300 text-sm mb-2">✓ Good Design:</p>
                    <p className="text-gray-200 text-sm">
                      Display the confirmation code clearly on the second screen, right next to where it needs to be entered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-cyan-300 mb-3">Recognition Over Recall</h4>
                <p className="text-gray-300 text-sm">
                  A graphical user interface with menus and icons is easier to use than a command-line interface 
                  precisely because it presents the user with recognizable options, rather than forcing them to 
                  recall specific commands from memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
