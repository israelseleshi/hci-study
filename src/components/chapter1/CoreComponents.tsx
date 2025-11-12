export function CoreComponents() {
  return (
    <section id="components" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            HCI is Built on Three Core Components
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* The Human */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="30" r="15" fill="#0891b2" />
                <line x1="50" y1="45" x2="50" y2="75" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />
                <line x1="50" y1="55" x2="30" y2="70" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />
                <line x1="50" y1="55" x2="70" y2="70" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />
                <line x1="50" y1="75" x2="35" y2="95" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />
                <line x1="50" y1="75" x2="65" y2="95" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-cyan-600 mb-4">The Human (The User)</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Understanding the user's psychology, cognitive processes, physical abilities, 
              and how they work in social contexts. Considers their goals, needs, and limitations.
            </p>
          </div>

          {/* The Computer */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="15" y="25" width="70" height="45" rx="4" fill="#0891b2" />
                <rect x="20" y="30" width="60" height="35" fill="#e0f2fe" />
                <line x1="20" y1="38" x2="75" y2="38" stroke="#0891b2" strokeWidth="2" />
                <line x1="20" y1="46" x2="65" y2="46" stroke="#0891b2" strokeWidth="2" opacity="0.5" />
                <line x1="20" y1="54" x2="70" y2="54" stroke="#0891b2" strokeWidth="2" opacity="0.5" />
                <rect x="40" y="72" width="20" height="2" rx="1" fill="#0891b2" />
                <rect x="25" y="74" width="50" height="3" rx="1.5" fill="#0891b2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">The Computer (The System)</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Any form of interactive technology, from desktop computers and smartphones 
              to complex systems like aircraft cockpits or medical equipment.
            </p>
          </div>

          {/* The Interaction */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 20 50 Q 50 20 80 50"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="none"
                  markerEnd="url(#arrowhead1)"
                />
                <path
                  d="M 80 55 Q 50 85 20 55"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="none"
                  markerEnd="url(#arrowhead2)"
                />
                <circle cx="35" cy="38" r="3" fill="#f59e0b" />
                <circle cx="50" cy="30" r="3" fill="#f59e0b" />
                <circle cx="65" cy="38" r="3" fill="#f59e0b" />
                <circle cx="35" cy="67" r="3" fill="#f59e0b" />
                <circle cx="50" cy="75" r="3" fill="#f59e0b" />
                <circle cx="65" cy="67" r="3" fill="#f59e0b" />
                <defs>
                  <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
                  </marker>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
                  </marker>
                </defs>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">The Interaction (The Interface)</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              The communication or dialogue between the user and the computer. Focuses on the 
              interface—the point of contact—and the sequence of actions and feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
