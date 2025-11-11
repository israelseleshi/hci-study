export function EvolutionTimeline() {
  const eras = [
    {
      title: "Pre-Desktop Era",
      subtitle: "The Expert Era",
      period: "1960s",
      description: "Early computers had no user-friendly interface. Interaction was limited to experts who used physical switches, punch cards, or complex command-line interfaces.",
      example: "The IBM System/360, a mainframe computer operated by trained professionals in a computer room who submitted jobs on stacks of punch cards. There was no direct, real-time interaction for the average person.",
      color: "from-gray-600 to-gray-700",
      icon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <rect x="10" y="15" width="40" height="30" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <rect x="15" y="20" width="8" height="6" fill="#64748b" />
          <rect x="27" y="20" width="8" height="6" fill="#64748b" />
          <rect x="39" y="20" width="8" height="6" fill="#64748b" />
          <rect x="15" y="30" width="8" height="6" fill="#64748b" />
          <rect x="27" y="30" width="8" height="6" fill="#64748b" />
        </svg>
      ),
    },
    {
      title: "WIMP Era",
      subtitle: "Windows, Icons, Menus, Pointer",
      period: "1984",
      description: "This paradigm, pioneered at Xerox PARC and popularized by the Apple Macintosh, revolutionized personal computing with a visual metaphor of a desktop with documents and tools.",
      example: "The 1984 Apple Macintosh. Instead of typing commands like 'delete file.txt,' users could simply use the mouse to drag the file's icon to the Trash icon. This intuitive visual metaphor made computers accessible to a mass audience for the first time.",
      color: "from-cyan-600 to-cyan-700",
      icon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <rect x="12" y="10" width="36" height="28" rx="2" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2" />
          <rect x="12" y="38" width="36" height="2" fill="#0891b2" />
          <rect x="26" y="40" width="8" height="8" fill="#0891b2" />
          <rect x="15" y="15" width="10" height="12" rx="1" fill="#0891b2" />
          <rect x="28" y="15" width="10" height="12" rx="1" fill="#f59e0b" />
          <polygon points="30,52 28,58 32,58" fill="#0891b2" />
        </svg>
      ),
    },
    {
      title: "Web 1.0 Era",
      subtitle: "The Static, Read-Only Web",
      period: "1990s",
      description: "The early web consisted mainly of static HTML pages created by a small number of content creators. Users were primarily consumers of information with very little ability to interact or contribute.",
      example: "A typical corporate website from 1996. It was essentially an online brochure with text and images. There was no way for users to leave comments, upload their own content, or interact with the site beyond clicking links.",
      color: "from-blue-600 to-blue-700",
      icon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <rect x="15" y="15" width="30" height="30" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <line x1="18" y1="22" x2="38" y2="22" stroke="#2563eb" strokeWidth="2" />
          <line x1="18" y1="28" x2="35" y2="28" stroke="#2563eb" strokeWidth="1" opacity="0.5" />
          <line x1="18" y1="33" x2="42" y2="33" stroke="#2563eb" strokeWidth="1" opacity="0.5" />
          <line x1="18" y1="38" x2="32" y2="38" stroke="#2563eb" strokeWidth="1" opacity="0.5" />
        </svg>
      ),
    },
    {
      title: "Web 2.0 Era",
      subtitle: "The Dynamic and Social Web",
      period: "2000s",
      description: "This phase was marked by a shift to user-generated content, collaboration, and interactivity. Technologies like Javascript and server-side databases enabled rich, dynamic applications to run in the browser.",
      example: "Wikipedia is created and maintained entirely by its users. Google Maps evolved from a simple map viewer into an ecosystem where users can add reviews, photos, and even create custom 'mashups' by layering on other data.",
      color: "from-purple-600 to-purple-700",
      icon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <circle cx="30" cy="22" r="8" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" />
          <circle cx="18" cy="38" r="6" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" />
          <circle cx="42" cy="38" r="6" fill="#e9d5ff" stroke="#9333ea" strokeWidth="2" />
          <line x1="25" y1="27" x2="21" y2="34" stroke="#9333ea" strokeWidth="2" />
          <line x1="35" y1="27" x2="39" y2="34" stroke="#9333ea" strokeWidth="2" />
          <line x1="24" y1="40" x2="36" y2="40" stroke="#9333ea" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Mobile & Social Era",
      subtitle: "Anytime, Anywhere Computing",
      period: "2010s",
      description: "The rise of smartphones created a new paradigm of constant connectivity. Apps, location-based services (LBS), and social media became central to the user experience.",
      example: "Using Instagram on a smartphone involves taking a photo (mobile hardware), adding a location tag (LBS), and sharing it with your social network (social media). The entire experience is designed for quick, on-the-go interaction.",
      color: "from-orange-600 to-orange-700",
      icon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <rect x="20" y="10" width="20" height="40" rx="3" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
          <rect x="23" y="14" width="14" height="28" fill="#fff" />
          <circle cx="30" cy="46" r="2" fill="#ea580c" />
          <rect x="25" y="18" width="10" height="10" rx="1" fill="#ea580c" opacity="0.3" />
          <circle cx="27" cy="32" r="1.5" fill="#ea580c" />
          <circle cx="33" cy="32" r="1.5" fill="#ea580c" />
          <path d="M 27 36 Q 30 38 33 36" stroke="#ea580c" fill="none" strokeWidth="1" />
        </svg>
      ),
    },
  ];

  return (
    <section id="evolution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">The Evolution of HCI: A Historical Perspective</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The way we interact with computers has changed dramatically over time
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 via-cyan-300 to-orange-300" />

          <div className="space-y-12">
            {eras.map((era, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100">
                    <div className={`inline-block bg-gradient-to-r ${era.color} text-white px-4 py-1 rounded-full text-sm mb-3`}>
                      {era.period}
                    </div>
                    <h3 className="text-gray-900 mb-1">{era.title}</h3>
                    <p className="text-cyan-600 text-sm mb-3">{era.subtitle}</p>
                    <p className="text-gray-700 text-sm mb-4">
                      {era.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                      <p className="text-gray-900 text-sm mb-1">Example:</p>
                      <p className="text-gray-700 text-sm">
                        {era.example}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="hidden md:flex flex-shrink-0 items-center justify-center">
                  <div className={`bg-gradient-to-br ${era.color} rounded-full p-4 shadow-lg z-10`}>
                    {era.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
