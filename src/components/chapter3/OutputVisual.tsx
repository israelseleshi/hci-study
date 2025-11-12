import { Monitor, Grid3X3, Maximize, Users, MapPin } from "lucide-react";

export function OutputVisual() {
  const displayTypes = [
    {
      title: "Personal Displays",
      icon: Monitor,
      color: "bg-blue-500",
      examples: [
        { name: "Smartphone", resolution: "1080×2340", size: "6.1\"" },
        { name: "Laptop", resolution: "1920×1080", size: "15.6\"" },
        { name: "Desktop Monitor", resolution: "2560×1440", size: "27\"" },
        { name: "4K Display", resolution: "3840×2160", size: "32\"" }
      ]
    },
    {
      title: "Large Displays",
      icon: Users,
      color: "bg-green-500",
      examples: [
        { name: "Surface Hub", resolution: "3840×2560", size: "55\"" },
        { name: "Interactive Whiteboard", resolution: "1920×1080", size: "75\"" },
        { name: "Conference Display", resolution: "4096×2160", size: "85\"" },
        { name: "Digital Signage", resolution: "1920×1080", size: "43\"" }
      ]
    },
    {
      title: "Situated Displays",
      icon: MapPin,
      color: "bg-purple-500",
      examples: [
        { name: "Airport Departures", resolution: "1920×1080", size: "42\"" },
        { name: "Transit Information", resolution: "1366×768", size: "32\"" },
        { name: "Museum Kiosk", resolution: "1920×1080", size: "24\"" },
        { name: "ATM Screen", resolution: "800×600", size: "12\"" }
      ]
    }
  ];

  const resolutionComparison = [
    { name: "HD", resolution: "1280×720", pixels: "0.9M", color: "bg-slate-400" },
    { name: "Full HD", resolution: "1920×1080", pixels: "2.1M", color: "bg-blue-500" },
    { name: "QHD", resolution: "2560×1440", pixels: "3.7M", color: "bg-green-500" },
    { name: "4K UHD", resolution: "3840×2160", pixels: "8.3M", color: "bg-purple-500" }
  ];

  const aspectRatios = [
    { ratio: "4:3", description: "Traditional monitors", width: "4", height: "3", color: "bg-slate-400" },
    { ratio: "16:9", description: "Modern widescreen", width: "16", height: "9", color: "bg-blue-500" },
    { ratio: "21:9", description: "Ultrawide displays", width: "21", height: "9", color: "bg-green-500" }
  ];

  return (
    <section id="output-visual" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-slate-900 mb-6">
            Output Devices: Visual Displays
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Visual displays are the most common and information-rich form of computer output, 
            communicating information back to users through carefully controlled pixels.
          </p>
        </div>

        {/* Bitmap Screen Explanation */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
              <Grid3X3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-mono font-bold text-slate-800">The Bitmap Screen</h3>
          </div>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Nearly every modern display is a <strong>bitmap display</strong>—a vast grid of tiny individual 
            dots called <strong>pixels</strong> (picture elements). The computer controls the color and 
            brightness of each pixel individually to create images, text, and graphics.
          </p>

          {/* Pixel Grid Visualization */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="text-center mb-6">
              <h4 className="font-mono font-semibold text-slate-700 mb-2">Pixel Grid Zoom-In Effect</h4>
              <p className="text-sm text-slate-500">How a single image is composed of individual pixels</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Normal View */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-3 mx-auto"></div>
                <div className="text-sm font-mono text-slate-600">Normal View</div>
                <div className="text-xs text-slate-500">Smooth gradient</div>
              </div>

              <div className="text-2xl text-slate-400">→</div>

              {/* Pixelated View */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3">
                  <div className="grid grid-cols-8 gap-0.5 w-full h-full">
                    {Array.from({ length: 64 }, (_, i) => (
                      <div 
                        key={i} 
                        className={`w-full h-full ${
                          i < 20 ? 'bg-blue-400' : 
                          i < 40 ? 'bg-blue-500' : 
                          i < 50 ? 'bg-purple-500' : 'bg-purple-600'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-sm font-mono text-slate-600">Zoomed View</div>
                <div className="text-xs text-slate-500">Individual pixels</div>
              </div>
            </div>
          </div>

          {/* Technology Evolution */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
              <div className="w-12 h-12 bg-slate-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div className="font-mono font-semibold text-slate-700 mb-1">CRT</div>
              <div className="text-xs text-slate-500">Cathode Ray Tube</div>
              <div className="text-xs text-slate-400">Bulky, like old TVs</div>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div className="font-mono font-semibold text-slate-700 mb-1">LCD</div>
              <div className="text-xs text-slate-500">Liquid Crystal Display</div>
              <div className="text-xs text-slate-400">Thin, low power</div>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div className="font-mono font-semibold text-slate-700 mb-1">OLED</div>
              <div className="text-xs text-slate-500">Organic LED</div>
              <div className="text-xs text-slate-400">Better contrast</div>
            </div>
          </div>
        </div>

        {/* Display Characteristics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Resolution */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Maximize className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-mono font-bold text-slate-800">Resolution</h3>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              The number of pixels in the grid (width × height). Higher resolution means more pixels, 
              resulting in sharper images and more displayable information.
            </p>

            <div className="space-y-4">
              {resolutionComparison.map((res, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-8 h-6 ${res.color} rounded`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-semibold text-slate-800 text-sm">{res.name}</span>
                      <span className="text-xs text-slate-500">{res.pixels} pixels</span>
                    </div>
                    <div className="text-xs text-slate-600 font-mono">{res.resolution}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
              <div className="text-sm font-semibold text-blue-800 mb-1">4K vs Full HD</div>
              <div className="text-xs text-blue-700">
                A 4K monitor has 4× the pixels of Full HD, showing much finer details 
                and smoother lines in high-quality images.
              </div>
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-mono font-bold text-slate-800">Aspect Ratio</h3>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              The proportional relationship between width and height. Different ratios 
              suit different use cases and content types.
            </p>

            <div className="space-y-6">
              {aspectRatios.map((aspect, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div 
                      className={`${aspect.color} rounded`}
                      style={{ 
                        width: `${parseInt(aspect.width) * 8}px`, 
                        height: `${parseInt(aspect.height) * 8}px` 
                      }}
                    ></div>
                  </div>
                  <div className="font-mono font-semibold text-slate-800 text-sm">{aspect.ratio}</div>
                  <div className="text-xs text-slate-600">{aspect.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
              <div className="text-sm font-semibold text-green-800 mb-1">Modern Trend</div>
              <div className="text-xs text-green-700">
                16:9 widescreen is now standard, better for movies and side-by-side windows.
              </div>
            </div>
          </div>
        </div>

        {/* Display Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTypes.map((type, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono font-bold text-slate-800">{type.title}</h3>
              </div>

              <div className="space-y-3">
                {type.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="bg-white rounded-lg p-3 border border-slate-100">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-slate-800 text-sm">{example.name}</span>
                      <span className="text-xs text-slate-500">{example.size}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-600">{example.resolution}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real-Life Examples */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-green-600" />
              <h4 className="font-mono font-semibold text-green-800">Collaborative Display</h4>
            </div>
            <p className="text-sm text-green-700 leading-relaxed">
              <strong>Microsoft Surface Hub:</strong> A large, wall-mounted touchscreen in corporate meeting rooms. 
              The entire team can see and interact simultaneously for brainstorming, presentations, and video conferencing.
            </p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
              <h4 className="font-mono font-semibold text-purple-800">Public Information</h4>
            </div>
            <p className="text-sm text-purple-700 leading-relaxed">
              <strong>Airport Departure Screens:</strong> Situated displays designed for quick, at-a-glance 
              information consumption by large numbers of people. Optimized for readability from distance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
