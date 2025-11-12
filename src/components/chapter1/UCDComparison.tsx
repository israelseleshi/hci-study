import { X, Check } from "lucide-react";

export function UCDComparison() {
  const comparison = [
    {
      feature: "Primary Focus",
      systemCentered: "The technical functionality of the system.",
      userCentered: "The goals, tasks, and needs of the end-user.",
    },
    {
      feature: "UI Role",
      systemCentered: "An afterthought; tacked on at the end.",
      userCentered: "A central focus from the start of the project.",
    },
    {
      feature: "User Involvement",
      systemCentered: "Users are passive recipients of the final product.",
      userCentered: "Users are active participants in design and evaluation.",
    },
    {
      feature: "Design Driver",
      systemCentered: "Hardware constraints and software capabilities.",
      userCentered: "User research and understanding of tasks.",
    },
    {
      feature: "Success Metric",
      systemCentered: "The software is efficient, bug-free, and technically correct.",
      userCentered: "The software is usable, useful, and meets user needs, leading to success in the market.",
    },
  ];

  return (
    <section id="ucd" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">User-Centered Design (UCD) Methodology</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The shift from system-centered to user-centered design fundamentally changed 
            how interactive systems are created
          </p>
        </div>

        {/* Visual comparison header */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-10 h-10" />
            </div>
            <h3 className="mb-2">System-Centered Design</h3>
            <p className="text-red-50 text-sm">
              Traditional approach focused on technical capabilities
            </p>
            <div className="mt-6 bg-white/10 rounded-lg p-4">
              <p className="text-sm">
                "Early airline reservation systems were text-based terminals that required 
                travel agents to memorize hundreds of cryptic codes and command sequences."
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10" />
            </div>
            <h3 className="mb-2">User-Centered Design</h3>
            <p className="text-green-50 text-sm">
              Modern approach focused on user needs and tasks
            </p>
            <div className="mt-6 bg-white/10 rounded-lg p-4">
              <p className="text-sm">
                "The design process for a modern travel booking app like Kayak starts with researching 
                how people plan vacations, then creates prototypes and tests them with actual travelers."
              </p>
            </div>
          </div>
        </div>

        {/* Detailed comparison table */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
            <div className="text-center">
              <h3>Feature</h3>
            </div>
            <div className="text-center flex items-center justify-center gap-2">
              <X className="w-5 h-5 text-red-400" />
              <h3>System-Centered</h3>
            </div>
            <div className="text-center flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <h3>User-Centered</h3>
            </div>
          </div>

          {comparison.map((row, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-3 gap-4 p-6 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="md:border-r border-gray-200 pr-4">
                <p className="text-gray-900">{row.feature}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-300">
                <p className="text-gray-700 text-sm">{row.systemCentered}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-300">
                <p className="text-gray-700 text-sm">{row.userCentered}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl p-6">
          <p className="text-cyan-900">
            <span className="text-cyan-700">Key Takeaway: </span>
            The main consequence of adopting UCD is that more time and resources are invested in user research, 
            prototyping, and testing. While this may seem like more work initially, it drastically increases 
            the chances of creating a successful product that people will actually use and enjoy.
          </p>
        </div>
      </div>
    </section>
  );
}
