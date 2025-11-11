import { XCircle, CheckCircle, Heart } from "lucide-react";

export function WhyHCI() {
  return (
    <section id="why-hci" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why is HCI Important?</h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            The primary importance of HCI lies in its power to improve the usability and 
            user experience of technology, which has a direct impact on our daily lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Prevent Poorly Designed Products */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">Prevent Poorly Designed Products</h3>
                <p className="text-gray-600 text-lg">
                  Many systems fail because they are designed without the user in mind, 
                  causing frustration, errors, and abandonment.
                </p>
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-4 mt-4">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">Real-Life Example:</p>
              <p className="text-gray-700 text-lg">
                An online ticket booking website with a confusing layout, unclear buttons, 
                and a checkout process that keeps timing out. Users will quickly get frustrated 
                and leave to book their tickets on a competitor's more intuitive site, 
                leading to lost business and poor brand reputation.
              </p>
            </div>
          </div>

          {/* Design Supportive Technology */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Create Better User Experiences</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Good design can actively support people in their everyday work and personal lives, 
                  making tasks easier and more enjoyable.
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 mt-4">
              <p className="text-green-900 text-lg mb-2">Real-Life Example:</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                A fitness tracking app like Strava or Fitbit uses HCI principles to support users. 
                It provides clear visual feedback on progress (charts, rings), offers social motivation 
                (sharing activities with friends), and uses simple, one-tap actions to start and stop workouts.
              </p>
            </div>
          </div>
        </div>

        {/* Create Usable and Effective Systems */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl text-white max-w-5xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="mb-2">To Create Usable and Effective Systems</h3>
              <p className="text-cyan-50 text-sm">
                The ultimate goal is to create products that are not only functional 
                but also easy and pleasant to use.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="mb-2">Easy to learn</p>
              <p className="text-cyan-50 text-sm">
                A new user can quickly understand how to use it.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="mb-2">Effective to use</p>
              <p className="text-cyan-50 text-sm">
                Users can achieve their goals with accuracy and completeness.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="mb-2">Enjoyable</p>
              <p className="text-cyan-50 text-sm">
                The experience is satisfying and engaging.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-6">
            <p className="text-cyan-100 text-sm mb-2">Real-Life Example:</p>
            <p className="text-white text-sm">
              A modern video streaming service like Netflix has a highly usable interface. 
              New users can easily figure out how to search for shows, browse categories, 
              and play content. The recommendation engine makes it effective at helping users 
              find things they will enjoy, and the seamless playback provides an enjoyable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
