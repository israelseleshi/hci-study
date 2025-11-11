export function ErrorsEmotion() {
  return (
    <section id="errors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Errors, Emotion, and Their Impact on Interaction</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Even with our impressive cognitive abilities, humans make mistakes. Understanding why errors happen 
            and how emotions affect our performance is critical for designing forgiving and supportive interfaces.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Types of Errors */}
          <div>
            <h3 className="text-gray-900 mb-8 text-center">Types of Errors</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Slips */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-orange-900 mb-2">Slips</h4>
                    <p className="text-gray-700 text-sm">
                      User has the right intention but performs the action incorrectly, usually due to lack of 
                      attention or poor physical skill.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                    <p className="text-orange-900 text-sm mb-2">Example 1: Typing Error</p>
                    <p className="text-gray-700 text-sm">
                      You intend to type "the," but your fingers slip and you type "teh." 
                      This is a classic slip.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                    <p className="text-orange-900 text-sm mb-2">Example 2: Clicking Wrong Button</p>
                    <p className="text-gray-700 text-sm">
                      You intend to click "Save" but accidentally click the "Delete" button right next to it.
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-orange-100 rounded-lg p-4">
                  <p className="text-orange-900 text-sm">
                    <span className="text-orange-700">Cause:</span> Lack of attention or motor control error. 
                    The user knows what to do but messes it up.
                  </p>
                </div>
              </div>

              {/* Mistakes */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-red-900 mb-2">Mistakes</h4>
                    <p className="text-gray-700 text-sm">
                      User has the wrong intention from the start. The action is performed correctly, 
                      but it's the wrong action due to incorrect understanding.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                    <p className="text-red-900 text-sm mb-2">Example: "Clear" Command</p>
                    <p className="text-gray-700 text-sm">
                      A user wants to remove formatting from a paragraph in a word processor. They believe the 
                      "Clear" command will do this, so they select it. However, the "Clear" command actually 
                      deletes the text entirely. The user made a mistake based on a flawed mental model.
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-red-100 rounded-lg p-4">
                  <p className="text-red-900 text-sm">
                    <span className="text-red-700">Cause:</span> Incorrect mental model of how the system works. 
                    The user doesn't know what the right action is.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mental Models */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-indigo-200">
            <h3 className="text-indigo-900 mb-6">Mental Models</h3>
            <p className="text-gray-700 mb-6">
              A mental model is a user's internal explanation of how a system works. When a user's mental model 
              does not match the actual behavior of the system, mistakes are inevitable.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="text-indigo-800 mb-3">Goal of Good Design</h4>
                  <p className="text-gray-700 text-sm">
                    Help users build an accurate mental model through clear feedback, consistent behavior, 
                    and intuitive design.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="text-purple-800 mb-3">When Models Mismatch</h4>
                  <p className="text-gray-700 text-sm">
                    User expects one thing to happen, but the system does something else. This leads to mistakes 
                    and frustration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Role of Emotion */}
          <div>
            <h3 className="text-gray-900 mb-8 text-center">The Role of Emotion</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 border-2 border-red-300">
                <h4 className="text-red-900 mb-4">Negative Affect (Stress, Frustration)</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Narrows our thinking</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Makes us less creative</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Increases difficulty of even simple tasks</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Higher likelihood of making errors and giving up</span>
                  </li>
                </ul>

                <div className="bg-red-200 rounded-lg p-4">
                  <p className="text-red-900 text-sm">
                    A frustrated user is more likely to make errors and abandon the task.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 border-2 border-green-300">
                <h4 className="text-green-900 mb-4">Positive Affect (Relaxed, Happy)</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Broadens our thinking</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Enhances creativity</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Makes us more tolerant of minor design flaws</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Can make it easier to do difficult tasks</span>
                  </li>
                </ul>

                <div className="bg-green-200 rounded-lg p-4">
                  <p className="text-green-900 text-sm">
                    "Positive affect can make it easier to do difficult tasks." — Don Norman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Implications */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
            <h3 className="mb-8 text-center">Implications for Interface Design</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-cyan-300 mb-3">Minimize Stress</h4>
                <p className="text-white text-sm">
                  In high-pressure situations (airline cockpit, medical device), the design must be extremely 
                  clear and simple to minimize cognitive load and potential for error.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-green-300 mb-3">Design for Positive Affect</h4>
                <p className="text-white text-sm">
                  An aesthetically pleasing, responsive, and rewarding interface puts users in a better frame of mind, 
                  making them more engaged and forgiving.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-purple-200 text-sm mb-2">Real-Life Example:</p>
              <p className="text-white text-sm">
                Productivity apps like Todoist or Asana include celebratory animations or sounds when a user completes 
                a task. This positive feedback rewards the user, increases satisfaction, and makes the experience more 
                enjoyable, encouraging continued use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
