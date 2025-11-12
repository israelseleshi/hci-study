import { Monitor, ArrowRight, ArrowLeft, Cpu } from "lucide-react";

export function HeroChapter3() {
  return (
    <section id="hero-chapter3" className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Chapter Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
            <Monitor className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm font-mono text-teal-600 uppercase tracking-wider">Chapter 3</div>
            <div className="text-lg font-semibold text-slate-700">Computer Systems in HCI</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-slate-900 mb-6 leading-tight">
            The Computer:
            <span className="block text-teal-600">Technology That</span>
            <span className="block">Defines Interaction</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
            To fully grasp Human-Computer Interaction, we need to understand both sides of the conversation: 
            the human and the computer. The technology available fundamentally defines and constrains 
            the type of interaction we can design.
          </p>
        </div>

        {/* Input-Output-Processing Model Diagram */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
          <h3 className="text-lg font-mono font-semibold text-slate-800 mb-8 text-center">
            Simple Computer Model
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* User */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full border-2 border-slate-300 flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
              </div>
              <span className="text-sm font-mono text-slate-600">USER</span>
            </div>

            {/* Input Arrow */}
            <div className="flex flex-col items-center">
              <ArrowRight className="w-8 h-8 text-amber-500 mb-2" />
              <div className="text-xs font-mono text-slate-500 text-center">
                <div>INPUT</div>
                <div className="text-xs text-slate-400">Keyboard, Mouse,</div>
                <div className="text-xs text-slate-400">Touch, Voice</div>
              </div>
            </div>

            {/* Computer */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-teal-50 border-2 border-teal-300 rounded-lg flex flex-col items-center justify-center mb-3">
                <Cpu className="w-8 h-8 text-teal-600 mb-1" />
                <div className="text-xs font-mono text-teal-700">PROCESSING</div>
                <div className="text-xs font-mono text-teal-700">& MEMORY</div>
              </div>
              <span className="text-sm font-mono text-slate-600">COMPUTER</span>
            </div>

            {/* Output Arrow */}
            <div className="flex flex-col items-center">
              <ArrowLeft className="w-8 h-8 text-amber-500 mb-2" />
              <div className="text-xs font-mono text-slate-500 text-center">
                <div>OUTPUT</div>
                <div className="text-xs text-slate-400">Screen, Audio,</div>
                <div className="text-xs text-slate-400">Haptic, Print</div>
              </div>
            </div>

            {/* User (return) */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full border-2 border-slate-300 flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
              </div>
              <span className="text-sm font-mono text-slate-600">USER</span>
            </div>
          </div>

          {/* Feedback Loop Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-amber-700">Continuous Feedback Loop</span>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-12 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h4 className="font-mono font-semibold text-teal-800 mb-2">Key Insight</h4>
              <p className="text-teal-700 leading-relaxed">
                The choice of device dictates the style of interaction. A desktop PC with keyboard and mouse 
                creates a very different user experience than a smartphone with touchscreen or a VR system 
                with headset and hand controllers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
