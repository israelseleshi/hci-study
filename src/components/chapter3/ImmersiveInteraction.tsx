import { Headphones, Smartphone, Building, Sofa, Wrench, Eye } from "lucide-react";

export function ImmersiveInteraction() {
  const vrFeatures = [
    {
      title: "Head-Mounted Display (HMD)",
      description: "Two screens (one per eye) create stereoscopic 3D",
      icon: Headphones,
      details: ["Meta Quest", "Valve Index", "Spatial audio", "360° vision"]
    },
    {
      title: "Tracking Systems",
      description: "Monitor head movements for view changes",
      icon: Eye,
      details: ["6DOF tracking", "Inside-out tracking", "Real-time response", "Sub-millimeter precision"]
    },
    {
      title: "Hand Controllers",
      description: "Track hand position and orientation",
      icon: "🎮",
      details: ["Buttons & triggers", "Haptic feedback", "Gesture recognition", "Object interaction"]
    }
  ];

  const arFeatures = [
    {
      title: "Smartphone AR",
      description: "Camera + screen overlay digital content",
      icon: Smartphone,
      details: ["ARKit/ARCore", "Real-time tracking", "Occlusion handling", "Lighting estimation"]
    },
    {
      title: "Smart Glasses",
      description: "Specialized AR hardware",
      icon: "👓",
      details: ["HoloLens", "Magic Leap", "Transparent displays", "Hands-free operation"]
    },
    {
      title: "Computer Vision",
      description: "Understanding real-world context",
      icon: Eye,
      details: ["Object recognition", "Plane detection", "SLAM tracking", "Depth sensing"]
    }
  ];

  return (
    <section id="immersive-interaction" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            Immersive Interaction: VR and AR
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Virtual and Augmented Reality represent a major shift in HCI, moving interaction 
            from 2D screens into 3D space with specialized input and output devices.
          </p>
        </div>

        {/* VR vs AR Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Virtual Reality */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-mono font-bold text-slate-800">Virtual Reality (VR)</h3>
                <p className="text-sm text-slate-600">Complete replacement of real environment</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-mono font-semibold text-purple-800 mb-3">Goal: Create Presence</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                Make the user feel as though they are truly inside the virtual world, 
                completely immersed in a computer-generated environment.
              </p>
            </div>

            {/* VR Components */}
            <div className="space-y-4 mb-6">
              {vrFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="flex items-center gap-3 mb-2">
                    {typeof feature.icon === 'string' ? (
                      <span className="text-xl">{feature.icon}</span>
                    ) : (
                      <feature.icon className="w-5 h-5 text-purple-600" />
                    )}
                    <h5 className="font-mono font-semibold text-slate-800 text-sm">{feature.title}</h5>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{feature.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {feature.details.map((detail, detailIndex) => (
                      <span key={detailIndex} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* VR Example */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-purple-600" />
                <h5 className="font-mono font-semibold text-purple-800 text-sm">Architectural Visualization</h5>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                An architect creates a 3D building model that clients explore in VR. They can physically 
                "walk" through the building before it's built, getting a true sense of space, scale, 
                and layout impossible with 2D drawings.
              </p>
            </div>
          </div>

          {/* Augmented Reality */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-mono font-bold text-slate-800">Augmented Reality (AR)</h3>
                <p className="text-sm text-slate-600">Digital overlay on real world</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-mono font-semibold text-green-800 mb-3">Goal: Enhance Reality</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                Overlay digital information or virtual objects onto the user's view of the real world, 
                combining physical and digital experiences.
              </p>
            </div>

            {/* AR Components */}
            <div className="space-y-4 mb-6">
              {arFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-green-100">
                  <div className="flex items-center gap-3 mb-2">
                    {typeof feature.icon === 'string' ? (
                      <span className="text-xl">{feature.icon}</span>
                    ) : (
                      <feature.icon className="w-5 h-5 text-green-600" />
                    )}
                    <h5 className="font-mono font-semibold text-slate-800 text-sm">{feature.title}</h5>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{feature.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {feature.details.map((detail, detailIndex) => (
                      <span key={detailIndex} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* AR Example */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <Sofa className="w-5 h-5 text-green-600" />
                <h5 className="font-mono font-semibold text-green-800 text-sm">IKEA Place App</h5>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Use your phone's camera to place true-to-scale virtual furniture in your living room. 
                See exactly how a sofa or table would fit and look before purchasing.
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            Real-World Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industrial AR */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-mono font-bold text-slate-800">Industrial Maintenance</h4>
              </div>
              
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                A technician wearing AR glasses looks at complex machinery and sees digital information 
                overlaid directly on top—maintenance instructions, live sensor data, highlighted arrows 
                showing which parts to repair.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h5 className="font-mono font-semibold text-slate-700 mb-2 text-sm">Benefits:</h5>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Combines digital manual with physical object</li>
                  <li>• Faster task completion</li>
                  <li>• Reduced errors</li>
                  <li>• Hands-free operation</li>
                </ul>
              </div>
            </div>

            {/* VR Training */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-mono font-bold text-slate-800">VR Training Simulations</h4>
              </div>
              
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Medical students practice surgery in VR, pilots train in flight simulators, 
                and firefighters experience emergency scenarios—all in safe, controlled environments.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h5 className="font-mono font-semibold text-slate-700 mb-2 text-sm">Benefits:</h5>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Safe practice environment</li>
                  <li>• Repeatable scenarios</li>
                  <li>• Cost-effective training</li>
                  <li>• Immersive learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200 p-8">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-8 text-center">
            VR vs AR: Key Differences
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left font-mono font-semibold text-slate-700 py-3 px-4">Aspect</th>
                  <th className="text-left font-mono font-semibold text-purple-700 py-3 px-4">Virtual Reality</th>
                  <th className="text-left font-mono font-semibold text-green-700 py-3 px-4">Augmented Reality</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Environment</td>
                  <td className="py-3 px-4 text-slate-600">Completely virtual</td>
                  <td className="py-3 px-4 text-slate-600">Real world + digital overlay</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Immersion Level</td>
                  <td className="py-3 px-4 text-slate-600">Full immersion</td>
                  <td className="py-3 px-4 text-slate-600">Partial immersion</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Hardware</td>
                  <td className="py-3 px-4 text-slate-600">Dedicated headset required</td>
                  <td className="py-3 px-4 text-slate-600">Smartphone or smart glasses</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Mobility</td>
                  <td className="py-3 px-4 text-slate-600">Limited by tracking space</td>
                  <td className="py-3 px-4 text-slate-600">Fully mobile</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-700">Use Cases</td>
                  <td className="py-3 px-4 text-slate-600">Gaming, training, visualization</td>
                  <td className="py-3 px-4 text-slate-600">Navigation, shopping, maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Future Implications */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl border border-purple-200 p-8">
          <h3 className="text-2xl font-mono font-bold text-slate-800 mb-6 text-center">
            The Future of Spatial Computing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-3">Emerging Trends</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Mixed Reality (MR) combining VR and AR</li>
                <li>• Hand tracking without controllers</li>
                <li>• Eye tracking for natural interaction</li>
                <li>• Haptic suits for full-body feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-semibold text-slate-700 mb-3">HCI Challenges</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Motion sickness and comfort</li>
                <li>• Natural gesture recognition</li>
                <li>• Social interaction in virtual spaces</li>
                <li>• Accessibility for all users</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
