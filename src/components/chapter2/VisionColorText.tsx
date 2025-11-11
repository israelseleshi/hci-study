export function VisionColorText() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Color Perception */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">3. Perceiving Color</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Color perception is enabled by three types of cones in the retina, sensitive to different 
                wavelengths of light (red, green, and blue).
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Color Components */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                  <h4 className="text-red-800 mb-3">Hue</h4>
                  <p className="text-gray-700 text-sm">
                    The pure color itself (e.g., red, blue, yellow)
                  </p>
                  <div className="mt-4 h-12 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border-2 border-gray-200">
                  <h4 className="text-gray-800 mb-3">Intensity</h4>
                  <p className="text-gray-700 text-sm">
                    The brightness or dullness of the color
                  </p>
                  <div className="mt-4 h-12 rounded-lg bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                  <h4 className="text-purple-800 mb-3">Saturation</h4>
                  <p className="text-gray-700 text-sm">
                    The "purity" of the color (from pure hue to grey)
                  </p>
                  <div className="mt-4 h-12 rounded-lg bg-gradient-to-r from-gray-400 via-purple-300 to-purple-600"></div>
                </div>
              </div>

              {/* Color Blindness */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-orange-900 mb-2">Color Blindness: A Critical Design Consideration</h3>
                    <p className="text-gray-700 text-sm">
                      About 8% of males and 1% of females have some form of color blindness, 
                      most commonly red-green. <span className="text-orange-700">Color should never be the only way 
                      to convey critical information.</span>
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Bad Example */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <h4 className="text-red-800">Bad: Color Only</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="border-2 border-red-500 rounded-lg p-3">
                        <label className="text-gray-700 text-sm">Email Address</label>
                        <input 
                          type="text" 
                          className="w-full mt-1 px-3 py-2 border border-red-500 rounded focus:outline-none"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-3">
                        <label className="text-gray-700 text-sm">Phone Number</label>
                        <input 
                          type="text" 
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <p className="text-red-700 text-xs">
                        ⚠️ Red-green colorblind users may not see which field is required
                      </p>
                    </div>
                  </div>

                  {/* Good Example */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h4 className="text-green-800">Good: Color + Text/Symbols</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="border-2 border-red-500 rounded-lg p-3 bg-red-50">
                        <label className="text-gray-700 text-sm">Email Address <span className="text-red-600">*</span></label>
                        <div className="text-xs text-red-700 mb-1">(Required)</div>
                        <input 
                          type="text" 
                          className="w-full mt-1 px-3 py-2 border border-red-500 rounded focus:outline-none"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-3">
                        <label className="text-gray-700 text-sm">Phone Number</label>
                        <div className="text-xs text-gray-500 mb-1">(Optional)</div>
                        <input 
                          type="text" 
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <p className="text-green-700 text-xs">
                        ✓ Everyone can identify the required field through multiple cues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reading */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">The Special Case of Reading</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Reading is a highly complex visual task that involves perceiving patterns, decoding words, 
                and understanding meaning. The design of text is critically important.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-cyan-400 mb-6">Real-Life Example: E-Reader Optimization</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 text-sm mb-6">
                    E-reader devices like the Amazon Kindle are designed specifically to optimize the 
                    reading experience. They acknowledge that what is most readable varies from person 
                    to person, and giving users control leads to a much better experience.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-cyan-300 text-sm mb-1">✓ High-resolution e-ink screen</div>
                      <div className="text-gray-400 text-xs">Mimics the look of paper, reducing eye strain</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-cyan-300 text-sm mb-1">✓ Customizable font and size</div>
                      <div className="text-gray-400 text-xs">Users adjust to their preference</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-cyan-300 text-sm mb-1">✓ Adjustable line spacing</div>
                      <div className="text-gray-400 text-xs">Improves readability and reduces fatigue</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-cyan-300 text-sm mb-1">✓ Margin control</div>
                      <div className="text-gray-400 text-xs">Customizes text layout to user preference</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6 text-gray-900">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">Page 42 of 287</div>
                      <div className="text-xs text-gray-500">12:45 PM</div>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <p>
                        The process of reading involves several complex stages: perceiving the 
                        visual pattern of the word, decoding it, and understanding its meaning.
                      </p>
                      <p>
                        Factors like font choice, size, spacing, and contrast all have a major 
                        impact on readability and reading speed.
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-center gap-6 text-gray-400">
                      <button className="hover:text-gray-600">Aa</button>
                      <button className="hover:text-gray-600">☀️</button>
                      <button className="hover:text-gray-600">⋮</button>
                    </div>
                  </div>
                  <div className="text-center text-gray-600 text-xs mt-3">E-reader interface mockup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
