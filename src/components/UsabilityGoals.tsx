import { Target, Gauge, Shield, Wrench, GraduationCap, Brain } from "lucide-react";

export function UsabilityGoals() {
  const goals = [
    {
      icon: Target,
      title: "Effectiveness",
      description: "How accurately can a user achieve their goal?",
      example: "A GPS app like Waze is effective if it consistently provides the correct and fastest route to a user's destination.",
      color: "cyan",
    },
    {
      icon: Gauge,
      title: "Efficiency",
      description: "How quickly can a user perform tasks?",
      example: "Experienced users of Adobe Photoshop use keyboard shortcuts (e.g., Ctrl+C for copy, Ctrl+V for paste) to perform actions much faster than navigating through menus with a mouse.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "How well does the system protect the user from making serious errors and allow them to recover if an error is made?",
      example: "When you try to permanently delete a file from your computer's recycling bin, the system presents a confirmation dialog box asking, \"Are you sure you want to permanently delete this file?\" This safety feature prevents accidental data loss.",
      color: "green",
    },
    {
      icon: Wrench,
      title: "Utility",
      description: "Does the system provide the right set of features to allow the user to do what they need?",
      example: "A spreadsheet program like Microsoft Excel has high utility for an accountant because it offers a vast range of functions—from simple sums and averages to complex financial modeling tools like pivot tables.",
      color: "purple",
    },
    {
      icon: GraduationCap,
      title: "Learnability",
      description: "How easy is it for a new user to start using the system effectively?",
      example: "A ride-sharing app like Uber has high learnability. A person who has never used it before can typically open the app and successfully book their first ride in just a couple of minutes without needing instructions.",
      color: "orange",
    },
    {
      icon: Brain,
      title: "Memorability",
      description: "If a user steps away from the system for a period of time, how easily can they remember how to use it upon returning?",
      example: "An e-commerce site like Amazon has good memorability. Even if you only shop there once every few months, you can easily recall how to search for a product, add it to your cart, and complete the checkout process.",
      color: "pink",
    },
  ];

  const colorClasses = {
    cyan: {
      bg: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      exampleBg: "bg-cyan-100/50",
      exampleText: "text-cyan-900",
    },
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      exampleBg: "bg-blue-100/50",
      exampleText: "text-blue-900",
    },
    green: {
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      exampleBg: "bg-green-100/50",
      exampleText: "text-green-900",
    },
    purple: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      exampleBg: "bg-purple-100/50",
      exampleText: "text-purple-900",
    },
    orange: {
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      exampleBg: "bg-orange-100/50",
      exampleText: "text-orange-900",
    },
    pink: {
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      exampleBg: "bg-pink-100/50",
      exampleText: "text-pink-900",
    },
  };

  return (
    <section id="usability" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Core Usability Goals</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Usability can be broken down into specific, measurable goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            const colors = colorClasses[goal.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`${colors.iconBg} p-3 rounded-lg flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-gray-700 text-sm">
                      {goal.description}
                    </p>
                  </div>
                </div>
                
                <div className={`${colors.exampleBg} rounded-lg p-3 border-l-2 ${colors.iconBg}`}>
                  <p className={`${colors.exampleText} text-sm`}>
                    {goal.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
