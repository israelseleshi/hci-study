import { Code, Brain, Users, Armchair, Languages } from "lucide-react";

export function InterdisciplinaryNature() {
  const fields = [
    {
      icon: Code,
      title: "Computer Science & Information Science",
      role: "Provides the technical foundation for building interfaces. Concerned with software architecture, programming, and the engineering of interactive systems.",
      example: "A computer scientist develops an efficient algorithm that enables an image editing application like Photoshop to apply complex filters to a high-resolution photo in real-time, providing immediate feedback to the user.",
      color: "cyan",
    },
    {
      icon: Brain,
      title: "Psychology (Cognitive Science)",
      role: "Offers critical insights into how users perceive, learn, remember, and make decisions. This knowledge helps in designing interfaces that align with human mental processes.",
      example: "A cognitive psychologist advises that a user can only hold about 7 (plus or minus 2) items in their short-term memory. Based on this, the team limits the main navigation menu to a maximum of 7 items to avoid overwhelming users.",
      color: "purple",
    },
    {
      icon: Users,
      title: "Sociology & Anthropology",
      role: "Studies how people behave in groups and within a cultural context. Helps designers understand how technology fits into social structures, workplaces, and daily routines.",
      example: "An anthropologist conducts a field study observing how doctors and nurses collaborate in a hospital. The findings are used to design a new patient record system that supports their actual workflows rather than forcing them to adapt to a rigid process.",
      color: "blue",
    },
    {
      icon: Armchair,
      title: "Ergonomics (Human Factors)",
      role: "Concerned with designing for physical safety, comfort, and performance. Ensures that technology is physically compatible with human capabilities.",
      example: "An ergonomist designs an office keyboard with a split, curved layout and a padded wrist rest. This design reduces physical strain on the hands and wrists, minimizing the risk of repetitive strain injury (RSI).",
      color: "green",
    },
    {
      icon: Languages,
      title: "Linguistics",
      role: "The study of language is crucial for designing systems that involve communication, such as voice user interfaces (VUIs) and natural language processing.",
      example: "A linguist works with the development team for a smart assistant like Amazon's Alexa. They help design the command structure so the device can understand a wide variety of phrases for the same request, making the interaction feel more natural and human-like.",
      color: "orange",
    },
  ];

  const colorClasses = {
    cyan: "from-cyan-500 to-cyan-600",
    purple: "from-purple-500 to-purple-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <section id="interdisciplinary" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">The Interdisciplinary Nature of HCI</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            HCI is a vibrant intersection of multiple disciplines, each contributing its unique perspective 
            to understand and improve the relationship between humans and technology
          </p>
        </div>

        {/* Central Diagram */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative">
            <svg viewBox="0 0 600 400" className="w-full h-auto">
              {/* Center circle - HCI */}
              <circle cx="300" cy="200" r="60" fill="url(#centerGradient)" />
              <text x="300" y="195" textAnchor="middle" fill="white" fontSize="20">HCI</text>
              <text x="300" y="215" textAnchor="middle" fill="white" fontSize="12" opacity="0.9">User Experience</text>
              
              {/* Connecting lines */}
              <line x1="180" y1="100" x2="260" y2="160" stroke="#0891b2" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
              <line x1="420" y1="100" x2="340" y2="160" stroke="#a855f7" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
              <line x1="100" y1="200" x2="240" y2="200" stroke="#3b82f6" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
              <line x1="500" y1="200" x2="360" y2="200" stroke="#10b981" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
              <line x1="300" y1="340" x2="300" y2="260" stroke="#f59e0b" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
              
              {/* Outer circles */}
              <circle cx="180" cy="100" r="35" fill="#0891b2" opacity="0.9" />
              <text x="180" y="105" textAnchor="middle" fill="white" fontSize="11">Computer</text>
              <text x="180" y="118" textAnchor="middle" fill="white" fontSize="11">Science</text>
              
              <circle cx="420" cy="100" r="35" fill="#a855f7" opacity="0.9" />
              <text x="420" y="105" textAnchor="middle" fill="white" fontSize="11">Psychology</text>
              
              <circle cx="100" cy="200" r="35" fill="#3b82f6" opacity="0.9" />
              <text x="100" y="200" textAnchor="middle" fill="white" fontSize="10">Sociology &</text>
              <text x="100" y="212" textAnchor="middle" fill="white" fontSize="10">Anthropology</text>
              
              <circle cx="500" cy="200" r="35" fill="#10b981" opacity="0.9" />
              <text x="500" y="205" textAnchor="middle" fill="white" fontSize="11">Ergonomics</text>
              
              <circle cx="300" cy="340" r="35" fill="#f59e0b" opacity="0.9" />
              <text x="300" y="345" textAnchor="middle" fill="white" fontSize="11">Linguistics</text>
              
              <defs>
                <radialGradient id="centerGradient">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0e7490" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Field Details */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {fields.map((field, index) => {
            const Icon = field.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${colorClasses[field.color as keyof typeof colorClasses]} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white">{field.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-900 text-sm mb-1">Role:</p>
                    <p className="text-gray-700 text-sm">
                      {field.role}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                    <p className="text-gray-900 text-sm mb-1">Real-Life Example:</p>
                    <p className="text-gray-700 text-sm">
                      {field.example}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
