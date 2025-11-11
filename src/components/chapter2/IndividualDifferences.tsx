export function IndividualDifferences() {
  return (
    <section id="individual" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl text-white mb-4">Individual Differences</h1>
          <p className="text-3xl text-purple-200 max-w-3xl mx-auto">
            While we can talk about the "average" user, there is no such thing. People vary enormously in their 
            abilities, experiences, and needs. Good design must account for these individual differences.
          </p>
        </div>

        {/* Rest of the code remains the same */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Types of Differences */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Long-Term/Stable */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="text-blue-300 text-center mb-4">Long-Term/Stable</h3>
              <p className="text-blue-100 text-sm mb-6 text-center">
                Relatively permanent attributes of a user
              </p>

              <div className="space-y-3">
                <div className="bg-blue-950/50 rounded-lg p-3">
                  <div className="text-blue-300 text-sm mb-1">Physical Abilities</div>
                  <div className="text-gray-300 text-xs">Vision, hearing, motor skills</div>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-3">
                  <div className="text-blue-300 text-sm mb-1">Intellectual Abilities</div>
                  <div className="text-gray-300 text-xs">Memory, problem-solving, spatial reasoning</div>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-3">
                  <div className="text-blue-300 text-sm mb-1">Experience Level</div>
                  <div className="text-gray-300 text-xs">Novice vs. expert users</div>
                </div>
              </div>
            </div>

            {/* Short-Term */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-orange-300 text-center mb-4">Short-Term</h3>
              <p className="text-orange-100 text-sm mb-6 text-center">
                Temporary factors that affect performance
              </p>

              <div className="space-y-3">
                <div className="bg-orange-950/50 rounded-lg p-3">
                  <div className="text-orange-300 text-sm mb-1">Stress and Fatigue</div>
                  <div className="text-gray-300 text-xs">Reduced cognitive capacity</div>
                </div>
                <div className="bg-orange-950/50 rounded-lg p-3">
                  <div className="text-orange-300 text-sm mb-1">Context of Use</div>
                  <div className="text-gray-300 text-xs">Busy street vs. quiet desk</div>
                </div>
                <div className="bg-orange-950/50 rounded-lg p-3">
                  <div className="text-orange-300 text-sm mb-1">Emotional State</div>
                  <div className="text-gray-300 text-xs">Mood affects interaction</div>
                </div>
              </div>
            </div>

            {/* Changing */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-purple-300 text-center mb-4">Changing</h3>
              <p className="text-purple-100 text-sm mb-6 text-center">
                Attributes that change over a user's lifetime
              </p>

              <div className="space-y-3">
                <div className="bg-purple-950/50 rounded-lg p-3">
                  <div className="text-purple-300 text-sm mb-1">Age</div>
                  <div className="text-gray-300 text-xs">Cognitive and physical abilities change</div>
                </div>
                <div className="bg-purple-950/50 rounded-lg p-3">
                  <div className="text-purple-300 text-sm mb-1">Learning</div>
                  <div className="text-gray-300 text-xs">Expertise grows with practice</div>
                </div>
                <div className="bg-purple-950/50 rounded-lg p-3">
                  <div className="text-purple-300 text-sm mb-1">Health</div>
                  <div className="text-gray-300 text-xs">Temporary or permanent conditions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Example */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <h3 className="text-cyan-400 mb-8 text-center">The Implication: Accessibility and Inclusivity</h3>
            <p className="text-purple-100 text-sm text-center mb-8">
              Understanding individual differences is the foundation of accessible and inclusive design. 
              By considering the needs of a wide range of users, we can create products that are usable by more people.
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h4 className="text-cyan-300 mb-4">Real-Life Example: Smartphone Accessibility Features</h4>
              <p className="text-gray-300 text-sm mb-6">
                Smartphone operating systems include a wide range of accessibility features to accommodate individual differences:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-900/30 rounded-lg p-4 border-l-4 border-blue-500">
                  <h5 className="text-blue-300 mb-3">Vision Impairments</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400">•</span>
                      <span>Screen readers</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400">•</span>
                      <span>Adjustable font sizes</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400">•</span>
                      <span>High-contrast modes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-900/30 rounded-lg p-4 border-l-4 border-orange-500">
                  <h5 className="text-orange-300 mb-3">Hearing Impairments</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-orange-400">•</span>
                      <span>Closed captioning for videos</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-orange-400">•</span>
                      <span>Visual notifications</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-orange-400">•</span>
                      <span>LED flash alerts</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-900/30 rounded-lg p-4 border-l-4 border-green-500">
                  <h5 className="text-green-300 mb-3">Motor Impairments</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400">•</span>
                      <span>Assistive touch features</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400">•</span>
                      <span>Voice control</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400">•</span>
                      <span>Switch control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white">
              <h4 className="mb-4">The Goal of Inclusive Design</h4>
              <p className="text-cyan-100 text-sm">
                By designing with these differences in mind from the beginning, programmers and designers can avoid 
                excluding large portions of the population and create a better user experience for everyone. 
                The goal is not just to make something that works, but to make something that works well for the 
                diverse humans who will be using it.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
            <h3 className="text-white mb-6">Chapter 2 Summary</h3>
            <p className="text-purple-100 mb-8 max-w-3xl mx-auto">
              By understanding how humans perceive, process, remember, think, and feel, we can design interactive 
              systems that align with human capabilities and limitations. This knowledge forms the foundation for 
              creating truly user-centered designs that are effective, efficient, and enjoyable for all users.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">👁️</div>
                <div className="text-white text-sm">Input Channels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-white text-sm">Memory Systems</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-white text-sm">Motor Control</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">❤️</div>
                <div className="text-white text-sm">Emotion & Errors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
