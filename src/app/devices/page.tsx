import DevicesPreview from "@/components/DevicesPreview";
import Link from "next/link";

export default function DevicesPage() {
  return (
    <main>
      {/* Light hero header matching homepage style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-28 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Devices</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our hardware roadmap brings NICOLE to the real world: smart glasses, watches, headsets, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try NICOLE Now
            </Link>
            <Link
              href="/pricing"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Lifetime Access for $25
            </Link>
          </div>
        </div>
      </section>

      {/* Core Principles - aligned 3-column grid */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Privacy by Design */}
            <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white text-2xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy by Design</h3>
              <p className="text-gray-600 leading-relaxed">
                All processing happens locally when possible, with encrypted communication and
                user-controlled data sharing.
              </p>
            </div>

            {/* User Control */}
            <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white text-2xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete control over device functionality, data collection, and AI interaction levels
                with granular settings.
              </p>
            </div>

            {/* Seamless Integration */}
            <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                All devices work together as one ecosystem, sharing context and preferences while
                maintaining security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Roadmap */}
      <DevicesPreview />
    </main>
  );
}
