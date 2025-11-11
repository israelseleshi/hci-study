export function DesignPrinciples() {
  const principles = [
    {
      title: "Visibility",
      description: "The state of the system and all possible actions should be visible and easily identifiable to the user. Users shouldn't have to guess what to do next.",
      example: "On a music player app like Spotify, the currently playing song is highlighted in the playlist, and the \"pause\" button is clearly displayed. When you press it, the icon immediately changes to a \"play\" icon.",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto">
          <rect x="20" y="20" width="160" height="80" rx="8" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2" />
          {/* Play button */}
          <g opacity="0.3">
            <circle cx="60" cy="60" r="20" fill="#0891b2" />
            <polygon points="55,50 55,70 70,60" fill="white" />
          </g>
          {/* Pause button - highlighted */}
          <circle cx="140" cy="60" r="20" fill="#0891b2" />
          <rect x="132" y="52" width="5" height="16" fill="white" />
          <rect x="143" y="52" width="5" height="16" fill="white" />
          {/* Highlight glow */}
          <circle cx="140" cy="60" r="24" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
        </svg>
      ),
    },
    {
      title: "Feedback",
      description: "For every action a user takes, the system should provide immediate and clear feedback. This confirms that the action was received and shows the result.",
      example: "When you press a key on your smartphone's virtual keyboard, it might provide a subtle vibration (haptic feedback) and a \"pop-up\" of the letter you pressed.",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto">
          <rect x="30" y="50" width="140" height="50" rx="4" fill="#e0f2fe" />
          {/* Keys */}
          <rect x="40" y="60" width="20" height="20" rx="3" fill="#0891b2" />
          <rect x="65" y="60" width="20" height="20" rx="3" fill="#0891b2" />
          <rect x="90" y="60" width="20" height="20" rx="3" fill="#0891b2" />
          {/* Pressed key with feedback */}
          <rect x="115" y="60" width="20" height="20" rx="3" fill="#f59e0b" />
          {/* Popup feedback */}
          <rect x="110" y="30" width="30" height="25" rx="4" fill="#f59e0b" />
          <text x="125" y="47" textAnchor="middle" fill="white" fontSize="16">A</text>
          <polygon points="125,55 120,60 130,60" fill="#f59e0b" />
          <rect x="140" y="60" width="20" height="20" rx="3" fill="#0891b2" />
        </svg>
      ),
    },
    {
      title: "Constraints",
      description: "These are limitations placed on user interaction to prevent errors. By limiting the available actions, the designer can guide the user toward the correct one.",
      example: "In an online flight booking form, the calendar for selecting the return date is often \"constrained\" so that you cannot select a date that is earlier than the departure date you have already chosen.",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto">
          {/* Calendar grid */}
          <rect x="20" y="20" width="160" height="80" rx="6" fill="white" stroke="#0891b2" strokeWidth="2" />
          <line x1="20" y1="40" x2="180" y2="40" stroke="#0891b2" strokeWidth="2" />
          {/* Dates - enabled */}
          <circle cx="50" cy="60" r="8" fill="#10b981" opacity="0.3" />
          <circle cx="70" cy="60" r="8" fill="#10b981" opacity="0.3" />
          <circle cx="90" cy="60" r="8" fill="#10b981" />
          <text x="90" y="63" textAnchor="middle" fontSize="10" fill="white">15</text>
          {/* Dates - disabled/constrained */}
          <circle cx="110" cy="60" r="8" fill="#94a3b8" opacity="0.3" />
          <circle cx="130" cy="60" r="8" fill="#94a3b8" opacity="0.3" />
          <circle cx="150" cy="60" r="8" fill="#94a3b8" opacity="0.3" />
          <line x1="105" y1="55" x2="155" y2="65" stroke="#ef4444" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Mapping",
      description: "This refers to the relationship between a control and its effect. An interface is more intuitive when the mapping is natural and easy to understand.",
      example: "The physical volume buttons on the side of a smartphone have a clear mapping. Pressing the top button increases the volume, and pressing the bottom button decreases it.",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto">
          {/* Phone outline */}
          <rect x="60" y="10" width="80" height="100" rx="10" fill="#1e293b" />
          <rect x="65" y="15" width="70" height="90" rx="5" fill="#0891b2" opacity="0.2" />
          {/* Volume buttons */}
          <rect x="45" y="30" width="8" height="15" rx="2" fill="#0891b2" />
          <rect x="45" y="60" width="8" height="15" rx="2" fill="#0891b2" />
          {/* Up arrow */}
          <polygon points="49,25 45,30 53,30" fill="#10b981" />
          <text x="30" y="40" fill="#10b981" fontSize="12">+</text>
          {/* Down arrow */}
          <polygon points="49,80 45,75 53,75" fill="#ef4444" />
          <text x="30" y="72" fill="#ef4444" fontSize="12">-</text>
        </svg>
      ),
    },
    {
      title: "Consistency",
      description: "Similar functions and elements in an interface should be designed in similar ways. This makes the system predictable and easier to learn.",
      example: "In the Microsoft Office suite (Word, PowerPoint, Excel), the \"Save\" icon is always a floppy disk, and it is always located in the top-left corner. The \"shopping cart\" icon is universally used across almost all e-commerce websites.",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto">
          {/* Three apps with same save icon */}
          <g>
            <rect x="10" y="20" width="50" height="70" rx="4" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2" />
            <rect x="15" y="10" width="15" height="15" rx="2" fill="#0891b2" />
            <rect x="17" y="12" width="11" height="9" fill="white" />
            <rect x="17" y="18" width="11" height="3" fill="#0891b2" />
            <text x="35" y="60" fontSize="8" fill="#0891b2">Word</text>
          </g>
          <g>
            <rect x="75" y="20" width="50" height="70" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <rect x="80" y="10" width="15" height="15" rx="2" fill="#f59e0b" />
            <rect x="82" y="12" width="11" height="9" fill="white" />
            <rect x="82" y="18" width="11" height="3" fill="#f59e0b" />
            <text x="95" y="60" fontSize="8" fill="#f59e0b">PPT</text>
          </g>
          <g>
            <rect x="140" y="20" width="50" height="70" rx="4" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
            <rect x="145" y="10" width="15" height="15" rx="2" fill="#10b981" />
            <rect x="147" y="12" width="11" height="9" fill="white" />
            <rect x="147" y="18" width="11" height="3" fill="#10b981" />
            <text x="160" y="60" fontSize="8" fill="#10b981">Excel</text>
          </g>
        </svg>
      ),
    },
    {
      title: "Affordance",
      description: "This is a property of an object that indicates how it can be used. The design itself should suggest (or \"afford\") the action.",
      example: "A button on a website or app is often designed with a raised look and a drop shadow. This visual design affords clicking or tapping, just as a physical doorknob affords turning and a chair affords sitting.",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto">
          {/* Flat element - no affordance */}
          <g opacity="0.4">
            <rect x="20" y="30" width="70" height="30" fill="#94a3b8" />
            <text x="55" y="50" textAnchor="middle" fill="white" fontSize="12">Flat</text>
          </g>
          {/* Button with affordance */}
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
            </filter>
          </defs>
          <rect x="110" y="30" width="70" height="30" rx="6" fill="#0891b2" filter="url(#shadow)" />
          <rect x="110" y="27" width="70" height="30" rx="6" fill="url(#buttonGradient)" />
          <text x="145" y="47" textAnchor="middle" fill="white" fontSize="12">Button</text>
          <defs>
            <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          {/* Cursor */}
          <polygon points="155,65 155,80 160,75 165,82 168,80 163,73 170,73" fill="#1e293b" />
        </svg>
      ),
    },
  ];

  return (
    <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Core Design Principles in HCI</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Design principles are high-level guidelines that help designers create more usable and intuitive interfaces
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-cyan-600 mb-3">{principle.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {principle.description}
                  </p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-r-lg p-4">
                    <p className="text-cyan-900 text-sm">
                      <span className="text-cyan-700">Example: </span>
                      {principle.example}
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-inner">
                  {principle.illustration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
