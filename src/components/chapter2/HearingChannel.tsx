import { Volume2, Bell, Check, Navigation } from "lucide-react";

export function HearingChannel() {
  const soundUses = [
    {
      icon: Bell,
      title: "Attention",
      description: "To draw the user's attention to a critical event",
      example: "A smoke detector's loud alarm or a sharp error sound when a file fails to save",
      color: "red",
    },
    {
      icon: Volume2,
      title: "Status Information",
      description: "Continuous or ambient sounds can convey ongoing status",
      example: "A subtle sound loop while a large download is in progress. If the sound stops, the transfer is complete or interrupted",
      color: "blue",
    },
    {
      icon: Check,
      title: "Confirmation",
      description: "To provide feedback that an action has been successfully completed",
      example: "The 'crumpling paper' sound when deleting a file, or the 'swoosh' sound when an email is sent",
      color: "green",
    },
    {
      icon: Navigation,
      title: "Navigation",
      description: "Changing sounds can help orient a user",
      example: "Screen readers use different tones and earcons (auditory icons) to indicate element types—different sounds for links, buttons, or headings",
      color: "purple",
    },
  ];

  const colorClasses = {
    red: {
      bg: "from-red-50 to-orange-50",
      border: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      titleColor: "text-red-900",
      exampleBg: "bg-red-50",
    },
    blue: {
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      titleColor: "text-blue-900",
      exampleBg: "bg-blue-50",
    },
    green: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      titleColor: "text-green-900",
      exampleBg: "bg-green-50",
    },
    purple: {
      bg: "from-purple-50 to-violet-50",
      border: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      titleColor: "text-purple-900",
      exampleBg: "bg-purple-50",
    },
  };

  return (
    <section id="hearing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-300 text-sm">Input Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Hearing</h2>
          <p className="text-purple-200 text-xl leading-relaxed max-w-3xl mx-auto">
            While often considered secondary to sight, hearing is a powerful channel for conveying information. 
            Sound is particularly effective because it can be detected without focused attention.
          </p>
        </div>

        {/* Sound Characteristics */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-orange-400 mb-8 text-center">Characteristics of Sound</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-400/20">
                <h4 className="text-xl font-bold text-orange-300 mb-4">Pitch</h4>
                <p className="text-gray-300 text-lg mb-4">The frequency of the sound wave (from low to high)</p>
                <svg viewBox="0 0 200 80" className="w-full h-auto">
                  <path d="M 10 40 Q 30 20 50 40 T 90 40 T 130 40 T 170 40 T 190 40" 
                        stroke="#fb923c" 
                        strokeWidth="2" 
                        fill="none" />
                  <text x="100" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">High Frequency</text>
                </svg>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-400/20">
                <h4 className="text-xl font-bold text-orange-300 mb-4">Loudness</h4>
                <p className="text-gray-300 text-lg mb-4">The amplitude or intensity of the sound wave</p>
                <svg viewBox="0 0 200 80" className="w-full h-auto">
                  <path d="M 10 40 Q 30 10 50 40 T 90 40 T 130 40" 
                        stroke="#fb923c" 
                        strokeWidth="3" 
                        fill="none" />
                  <text x="100" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">High Amplitude</text>
                </svg>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-400/20">
                <h4 className="text-xl font-bold text-orange-300 mb-4">Timbre</h4>
                <p className="text-gray-300 text-lg mb-4">The unique quality that distinguishes different sounds</p>
                <svg viewBox="0 0 200 80" className="w-full h-auto">
                  <path d="M 10 40 Q 25 30 40 40 Q 55 35 70 40 Q 85 32 100 40 Q 115 38 130 40" 
                        stroke="#fb923c" 
                        strokeWidth="2" 
                        fill="none" />
                  <text x="100" y="70" textAnchor="middle" fill="#fb923c" fontSize="10">Complex Waveform</text>
                </svg>
              </div>
            </div>

            <div className="mt-8 bg-orange-900/20 rounded-xl p-6 border border-orange-500/30">
              <h4 className="text-orange-300 mb-3">The "Cocktail Party Effect"</h4>
              <p className="text-gray-300 text-sm">
                Our ability to filter out background noise and focus on a single sound source, 
                like a conversation in a loud room. This shows our auditory system is adept at selective attention.
              </p>
            </div>
          </div>
        </div>

        {/* Uses of Sound in Interface Design */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-orange-400 mb-8">Uses of Sound in Interface Design</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {soundUses.map((use, index) => {
              const Icon = use.icon;
              const colors = colorClasses[use.color as keyof typeof colorClasses];
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className={`bg-gradient-to-r ${colors.bg} p-6 border-b-2 ${colors.border}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`${colors.iconBg} p-3 rounded-lg`}>
                        <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                      </div>
                      <h4 className={colors.titleColor}>{use.title}</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {use.description}
                    </p>
                  </div>
                  
                  <div className={`${colors.exampleBg} p-6`}>
                    <p className="text-gray-800 text-sm mb-2">Real-Life Example:</p>
                    <p className="text-gray-700 text-sm">
                      {use.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
