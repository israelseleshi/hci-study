import { Hand, Mic, BrainCircuit, Glasses } from "lucide-react";

export function FutureHCI() {
  const technologies = [
    {
      icon: Hand,
      title: "Gesture Recognition",
      description: "Controlling devices through body movements without physical touch.",
      example: "The Microsoft Kinect for the Xbox allowed players to control games using their entire body without a physical controller. Today, gesture recognition is being explored for controlling smart home devices or navigating virtual reality environments.",
      color: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
    {
      icon: Mic,
      title: "Speech Recognition and Generation",
      description: "Interacting with technology through spoken language.",
      example: "Smart speakers like Amazon Alexa and Google Assistant are now common household devices. Users can play music, check the weather, and control lights simply by speaking, removing the need for a screen or keyboard.",
      color: "from-purple-500 to-pink-600",
      glowColor: "purple",
    },
    {
      icon: BrainCircuit,
      title: "Adaptive Interfaces (Intelligent Agents)",
      description: "Systems that learn from a user's behavior and automatically adapt the interface to their needs.",
      example: "The 'For You' page on TikTok is a powerful adaptive interface. Its algorithm learns what videos a user likes to watch and continuously tailors the feed to show more of that content, creating a highly personalized and engaging experience.",
      color: "from-orange-500 to-red-600",
      glowColor: "orange",
    },
    {
      icon: Glasses,
      title: "Augmented Reality (AR) and Virtual Reality (VR)",
      description: "Technologies that blend the digital and physical worlds, opening up new ways to interact with information.",
      example: "The IKEA Place app uses AR to let you use your smartphone's camera to see how a piece of IKEA furniture would look in your own room at its actual size. This provides a far richer interactive experience than simply looking at a picture online.",
      color: "from-green-500 to-emerald-600",
      glowColor: "green",
    },
  ];

  const glowClasses = {
    cyan: "shadow-cyan-500/50",
    purple: "shadow-purple-500/50",
    orange: "shadow-orange-500/50",
    green: "shadow-green-500/50",
  };

  return (
    <section id="future" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">The Future of HCI</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The field of HCI is constantly evolving as technology becomes more powerful and integrated into our lives. 
            The frontier of interaction is moving beyond the screen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl ${
                  glowClasses[tech.glowColor as keyof typeof glowClasses]
                } hover:scale-105 transition-all`}
              >
                <div className={`bg-gradient-to-r ${tech.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white">{tech.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4">
                    {tech.description}
                  </p>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                    <p className="text-gray-400 text-xs mb-2">Real-Life Example:</p>
                    <p className="text-gray-200 text-sm">
                      {tech.example}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Advantage Section */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-white mb-4 text-center">Why HCI is a Critical Competitive Advantage</h3>
          <p className="text-cyan-50 text-center mb-6">
            As hardware and basic software become commodities, the user interface and overall user experience 
            are becoming the primary differentiators in the market.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-white text-sm mb-2">Real-Life Example:</p>
            <p className="text-cyan-50 text-sm">
              In the late 2000s, many companies produced smartphones. However, the Apple iPhone dominated the market 
              largely because its revolutionary multi-touch interface was far more intuitive, responsive, and enjoyable 
              to use than the clunky, button-based interfaces of its competitors like Nokia and BlackBerry. 
              The superior user experience, a direct result of excellent HCI, was its key competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
