import { Target, Zap, TrendingUp } from "lucide-react";

export function ThreePillars() {
  const pillars = [
    {
      icon: Target,
      title: "Useful",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "It must accomplish a required task and fulfill a genuine need. The product must have practical value.",
      example: "A word processor like Microsoft Word or Google Docs is useful because it allows users to perform the essential tasks of writing, formatting, and saving documents for work or school.",
    },
    {
      icon: Zap,
      title: "Usable",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      description: "The user must be able to perform the tasks easily, efficiently, and without making critical errors. The interaction should feel natural.",
      example: "A mobile banking app demonstrates good usability when it allows a user to check their account balance and transfer money to a friend in three or four simple taps, with clear labels and intuitive navigation.",
    },
    {
      icon: TrendingUp,
      title: "Used",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      description: "The product must be attractive, engaging, and appealing. People must want to use it over other options. This often relates to aesthetics, branding, and overall experience.",
      example: "The social media app Instagram became widely used not just because it was useful for sharing photos, but because its filters made photos look more appealing, and its simple, visually-driven interface was fun and engaging.",
    },
  ];

  return (
    <section id="three-pillars" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">The Three Pillars of a Successful Product</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            For any product to be truly successful, it must satisfy all three criteria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${pillar.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="">{pillar.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    {pillar.description}
                  </p>
                  
                  <div className={`${pillar.bgColor} rounded-xl p-4`}>
                    <p className={`${pillar.iconColor} text-sm mb-2`}>
                      Real-Life Example:
                    </p>
                    <p className="text-gray-700 text-sm">
                      {pillar.example}
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
