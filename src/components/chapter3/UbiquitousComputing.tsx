import { Smartphone, Tv, Car, CreditCard, Home, Plane } from "lucide-react";

export function UbiquitousComputing() {
  const computerCategories = [
    {
      title: "In Your Pocket",
      icon: Smartphone,
      color: "bg-blue-500",
      items: [
        { name: "Smartphone", desc: "Powerful computer" },
        { name: "Digital Camera", desc: "Image processing" },
        { name: "Wireless Earbuds", desc: "Audio processing" },
        { name: "Smart Credit Cards", desc: "Transaction processing" }
      ]
    },
    {
      title: "In Your House",
      icon: Home,
      color: "bg-green-500",
      items: [
        { name: "Smart TV", desc: "Media processing" },
        { name: "Wi-Fi Router", desc: "Network management" },
        { name: "Microwave Oven", desc: "Control systems" },
        { name: "Digital Thermostat", desc: "Climate control" }
      ]
    },
    {
      title: "In Your Car",
      icon: Car,
      color: "bg-red-500",
      items: [
        { name: "Engine Control", desc: "Performance optimization" },
        { name: "Braking System", desc: "Safety management" },
        { name: "Infotainment", desc: "Media & navigation" },
        { name: "Climate Control", desc: "Comfort systems" }
      ]
    },
    {
      title: "In the Environment",
      icon: Plane,
      color: "bg-purple-500",
      items: [
        { name: "Transit Tickets", desc: "Payment processing" },
        { name: "ATM Machines", desc: "Banking interface" },
        { name: "Self-Checkout", desc: "Retail automation" },
        { name: "Airport Displays", desc: "Information systems" }
      ]
    }
  ];

  return (
    <section id="ubiquitous-computing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            What is a "Computer" in the Modern World?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The traditional image of a desktop PC is incredibly narrow. HCI now deals with a vast ecosystem 
            of computing devices embedded into our daily lives—a concept known as <strong>ubiquitous computing</strong>.
          </p>
        </div>

        {/* Ubiquitous Computing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {computerCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono font-semibold text-slate-800">{category.title}</h3>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">{item.name}</div>
                      <div className="text-xs text-slate-500 font-mono">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Central Message */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-200 p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">∞</span>
            </div>
            <h3 className="text-2xl font-mono font-bold text-slate-800 mb-4">
              The Goal of HCI
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Design the interaction for <strong>all these devices</strong>, not just the traditional desktop. 
              Every computing device requires thoughtful interface design to create meaningful human-computer interactions.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-teal-600">50+</div>
            <div className="text-sm text-slate-600 font-mono">Computers per car</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-blue-600">10+</div>
            <div className="text-sm text-slate-600 font-mono">Smart devices per home</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-green-600">24/7</div>
            <div className="text-sm text-slate-600 font-mono">Always connected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-purple-600">∞</div>
            <div className="text-sm text-slate-600 font-mono">Interaction possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
