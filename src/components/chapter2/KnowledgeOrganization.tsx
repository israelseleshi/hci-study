export function KnowledgeOrganization() {
  return (
    <section id="knowledge" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Organizing Knowledge in Long-Term Memory</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our semantic memory is not a random collection of facts—it is highly organized to allow for 
            efficient retrieval and inference.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Semantic Networks */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <h3 className="text-blue-900 mb-6">1. Semantic Networks</h3>
            <p className="text-gray-700 mb-8">
              Knowledge is stored as a network of nodes (concepts) connected by links (relationships). 
              This structure allows for the inheritance of properties.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Links */}
                <line x1="300" y1="80" x2="300" y2="140" stroke="#3b82f6" strokeWidth="2" />
                <line x1="300" y1="200" x2="300" y2="260" stroke="#3b82f6" strokeWidth="2" />
                <line x1="300" y1="320" x2="300" y2="360" stroke="#3b82f6" strokeWidth="2" />
                
                {/* Animal */}
                <circle cx="300" cy="50" r="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <text x="300" y="55" textAnchor="middle" fill="#1e40af">Animal</text>
                <text x="420" y="55" fill="#3b82f6" fontSize="12">breathes, has skin</text>
                
                {/* Dog */}
                <circle cx="300" cy="170" r="40" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
                <text x="300" y="175" textAnchor="middle" fill="#1e40af">Dog</text>
                <text x="420" y="175" fill="#3b82f6" fontSize="12">has 4 legs, barks</text>
                
                {/* Sheepdog */}
                <circle cx="300" cy="290" r="40" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
                <text x="300" y="295" textAnchor="middle" fill="#1e40af">Sheepdog</text>
                <text x="420" y="295" fill="#3b82f6" fontSize="12">herds sheep</text>
                
                {/* Collie */}
                <circle cx="300" cy="370" r="30" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
                <text x="300" y="375" textAnchor="middle" fill="white">Collie</text>
                
                {/* Relationship labels */}
                <text x="320" y="110" fill="#64748b" fontSize="11" fontStyle="italic">is-a</text>
                <text x="320" y="230" fill="#64748b" fontSize="11" fontStyle="italic">is-a</text>
                <text x="320" y="345" fill="#64748b" fontSize="11" fontStyle="italic">instance</text>
              </svg>

              <div className="mt-6 bg-blue-100 rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-blue-900 text-sm">
                  <span className="text-blue-700">Inheritance:</span> We can infer that a Collie "has 4 legs" 
                  and "breathes," even if those facts aren't stored directly with the "Collie" node. 
                  The properties are inherited from higher-level nodes.
                </p>
              </div>
            </div>
          </div>

          {/* Schemas */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
            <h3 className="text-purple-900 mb-6">2. Schemas: Frames and Scripts</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Frames */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-purple-800 mb-4">Frames</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Represent knowledge about objects and their attributes. A frame has "slots" filled with values.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-purple-900 mb-3">Frame: "House"</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material:</span>
                      <span className="text-purple-700">(variable: wood, brick, stone)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Has:</span>
                      <span className="text-purple-700">(fixed: doors, windows, roof)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Function:</span>
                      <span className="text-purple-700">(fixed: a place to live)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Floors:</span>
                      <span className="text-purple-700">(default: 2)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scripts */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-purple-800 mb-4">Scripts</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Represent knowledge about sequences of events in stereotypical situations.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-purple-900 mb-3">Script: "Restaurant"</div>
                  <div className="space-y-2">
                    {['Enter', 'Be seated', 'Get menu', 'Order', 'Eat', 'Get bill', 'Pay', 'Leave'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          {i + 1}
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-purple-100 rounded-lg p-3">
                  <p className="text-purple-900 text-xs">
                    If someone says "I went to a restaurant, paid, and left," your script allows you to infer 
                    all the intermediate steps that must have happened.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Production Systems */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
            <h3 className="text-green-900 mb-6">3. Production Systems</h3>
            <p className="text-gray-700 mb-6">
              Represents procedural knowledge (how to do things) as condition-action rules: IF [condition], THEN [action]
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-green-800 mb-4">Example: Driving at a Traffic Light</h4>
              <div className="space-y-3">
                <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-600">
                  <code className="text-green-900 text-sm">
                    IF light is green, THEN proceed through intersection
                  </code>
                </div>
                <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-600">
                  <code className="text-red-900 text-sm">
                    IF light is red, THEN apply brakes
                  </code>
                </div>
                <div className="bg-yellow-100 rounded-lg p-4 border-l-4 border-yellow-600">
                  <code className="text-yellow-900 text-sm">
                    IF light is yellow AND close to intersection, THEN proceed with caution
                  </code>
                </div>
                <div className="bg-orange-100 rounded-lg p-4 border-l-4 border-orange-600">
                  <code className="text-orange-900 text-sm">
                    IF light is yellow AND far from intersection, THEN prepare to stop
                  </code>
                </div>
              </div>

              <div className="mt-4 bg-green-50 rounded-lg p-4">
                <p className="text-green-900 text-sm">
                  These rules become automatic with practice and allow us to react quickly and appropriately 
                  without conscious thought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
