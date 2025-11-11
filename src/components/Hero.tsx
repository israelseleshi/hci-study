export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-cyan-600 mb-6">
            Human-Computer Interaction
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A multidisciplinary field concerned with the design, evaluation, and implementation 
            of interactive computing systems for human use. The study of how people interact with 
            computers and technology, making that interaction as efficient, effective, and 
            satisfying as possible.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Illustration */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Human Figure */}
              <g>
                <circle cx="150" cy="150" r="40" fill="#0891b2" opacity="0.2" />
                <circle cx="150" cy="100" r="30" fill="#0891b2" />
                <line x1="150" y1="130" x2="150" y2="220" stroke="#0891b2" strokeWidth="8" strokeLinecap="round" />
                <line x1="150" y1="150" x2="110" y2="200" stroke="#0891b2" strokeWidth="8" strokeLinecap="round" />
                <line x1="150" y1="150" x2="190" y2="200" stroke="#0891b2" strokeWidth="8" strokeLinecap="round" />
                <line x1="150" y1="220" x2="120" y2="280" stroke="#0891b2" strokeWidth="8" strokeLinecap="round" />
                <line x1="150" y1="220" x2="180" y2="280" stroke="#0891b2" strokeWidth="8" strokeLinecap="round" />
                <text x="150" y="320" textAnchor="middle" fill="#0891b2" fontSize="20" fontWeight="600">
                  The Human
                </text>
              </g>

              {/* Interaction Flow */}
              <g>
                <path
                  d="M 200 180 Q 400 100 600 180"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="8 8"
                  opacity="0.6"
                />
                <circle cx="280" cy="140" r="4" fill="#f59e0b" />
                <circle cx="360" cy="115" r="4" fill="#f59e0b" />
                <circle cx="440" cy="115" r="4" fill="#f59e0b" />
                <circle cx="520" cy="140" r="4" fill="#f59e0b" />
                
                <path
                  d="M 600 220 Q 400 300 200 220"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="8 8"
                  opacity="0.6"
                />
                <circle cx="520" cy="260" r="4" fill="#f59e0b" />
                <circle cx="440" cy="285" r="4" fill="#f59e0b" />
                <circle cx="360" cy="285" r="4" fill="#f59e0b" />
                <circle cx="280" cy="260" r="4" fill="#f59e0b" />
                
                <text x="400" y="90" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="600">
                  The Interaction
                </text>
              </g>

              {/* Computer/Device */}
              <g>
                <rect x="580" y="140" width="120" height="90" rx="8" fill="#0891b2" opacity="0.2" />
                <rect x="590" y="150" width="100" height="60" rx="4" fill="#0891b2" />
                <rect x="595" y="155" width="90" height="45" fill="#e0f2fe" />
                <line x1="595" y1="165" x2="675" y2="165" stroke="#0891b2" strokeWidth="2" />
                <line x1="595" y1="175" x2="660" y2="175" stroke="#0891b2" strokeWidth="2" opacity="0.5" />
                <line x1="595" y1="185" x2="670" y2="185" stroke="#0891b2" strokeWidth="2" opacity="0.5" />
                <rect x="620" y="215" width="40" height="3" rx="1.5" fill="#0891b2" />
                
                {/* Mobile device */}
                <rect x="710" y="160" width="40" height="70" rx="6" fill="#0891b2" />
                <rect x="715" y="165" width="30" height="55" fill="#e0f2fe" />
                <circle cx="730" cy="225" r="3" fill="#0891b2" opacity="0.5" />
                
                <text x="650" y="260" textAnchor="middle" fill="#0891b2" fontSize="20" fontWeight="600">
                  The Computer
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
