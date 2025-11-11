import { Users, Eye, MessageSquare, Lightbulb } from "lucide-react";

export function Summary() {
  const takeaways = [
    {
      icon: Users,
      text: "Let user needs drive development: Start with the person, not the technology.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Eye,
      text: "Work with real users: Involve them throughout the entire design and development process.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      text: "See from the user's perspective: Evaluate every design decision based on how it will impact the user's work, environment, and goals.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Lightbulb,
      text: "Talk to the experts: The \"experts\" in how a system should work are the people who will be using it every day.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Summary for Students</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Studying HCI teaches you a process and a mindset that are crucial for building 
            the technology of the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {takeaways.map((takeaway, index) => {
            const Icon = takeaway.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${takeaway.color} p-3 rounded-xl flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 pt-1">
                    {takeaway.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Message */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-white mb-4">The Power of HCI</h3>
          <p className="text-cyan-50 mb-8">
            The research and principles of HCI are essential for turning powerful technology 
            into truly usable and valuable products. By putting users at the center of design, 
            we create systems that don't just work—they delight, empower, and improve lives.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors shadow-lg">
              Explore HCI Careers
            </button>
            <button className="bg-cyan-700 text-white px-8 py-3 rounded-lg hover:bg-cyan-800 transition-colors shadow-lg border border-cyan-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 HCI Educational Guide • Designed with User-Centered Design Principles
          </p>
        </div>
      </div>
    </section>
  );
}
