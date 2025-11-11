export function SensoryMemory() {
  return (
    <section id="sensory-memory" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-purple-300 text-sm">Memory Systems</span>
          </div>
          <h2 className="text-white mb-4">Sensory Memory: The Buffers</h2>
          <p className="text-purple-200 max-w-3xl mx-auto">
            Human memory is not a single entity. The first stage is sensory memory, which acts as a very short-term 
            buffer for information received from our senses, lasting only a fraction of a second.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Iconic Memory */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-cyan-500/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-cyan-400">Iconic Memory</h3>
                <div className="text-cyan-300 text-xs">For Vision</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-cyan-950/50 rounded-lg p-3">
                <div className="text-cyan-300 text-sm mb-1">Duration</div>
                <div className="text-white">~0.5 seconds</div>
              </div>
              <div className="bg-cyan-950/50 rounded-lg p-3">
                <div className="text-cyan-300 text-sm mb-1">Function</div>
                <div className="text-white text-sm">Holds a brief visual image</div>
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-lg p-4 border-l-4 border-cyan-500">
              <p className="text-cyan-200 text-xs mb-2">Real-Life Example:</p>
              <p className="text-white text-sm">
                When you see a lightning flash, the image seems to persist for a split second after it's gone. 
                Waving a sparkler in the dark creates a continuous trail due to iconic memory.
              </p>
            </div>
          </div>

          {/* Echoic Memory */}
          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <div>
                <h3 className="text-orange-400">Echoic Memory</h3>
                <div className="text-orange-300 text-xs">For Hearing</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-orange-950/50 rounded-lg p-3">
                <div className="text-orange-300 text-sm mb-1">Duration</div>
                <div className="text-white">2-4 seconds</div>
              </div>
              <div className="bg-orange-950/50 rounded-lg p-3">
                <div className="text-orange-300 text-sm mb-1">Function</div>
                <div className="text-white text-sm">Holds a brief auditory trace</div>
              </div>
            </div>

            <div className="bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-orange-200 text-xs mb-2">Real-Life Example:</p>
              <p className="text-white text-sm">
                When someone asks a question while you're concentrating, you might say "What?" but then realize 
                you actually heard them—your echoic memory "plays back" the sound.
              </p>
            </div>
          </div>

          {/* Haptic Memory */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <div>
                <h3 className="text-green-400">Haptic Memory</h3>
                <div className="text-green-300 text-xs">For Touch</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-green-950/50 rounded-lg p-3">
                <div className="text-green-300 text-sm mb-1">Duration</div>
                <div className="text-white">~1 second</div>
              </div>
              <div className="bg-green-950/50 rounded-lg p-3">
                <div className="text-green-300 text-sm mb-1">Function</div>
                <div className="text-white text-sm">Holds a brief tactile sensation</div>
              </div>
            </div>

            <div className="bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-green-200 text-xs mb-2">Real-Life Example:</p>
              <p className="text-white text-sm">
                If you briefly touch a textured surface like sandpaper, you can still feel a phantom sensation 
                of the roughness on your skin for a moment after you've pulled your finger away.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <h4 className="text-purple-300 mb-3">The Role of Attention</h4>
          <p className="text-purple-100 text-sm">
            Out of the vast amount of sensory information we receive every moment, we selectively filter and focus 
            on what is relevant. Only the information we attend to has a chance of being passed on to short-term memory. 
            If information in sensory memory is not attended to, it is quickly overwritten and lost forever.
          </p>
        </div>
      </div>
    </section>
  );
}
