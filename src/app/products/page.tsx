import Link from 'next/link';

export default function ProductsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-32 min-h-screen flex items-start">
      {/* Background Elements (match homepage Hero) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Products</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thoughtfully designed, privacy-first, and emotionally intelligent tools for the future.
          </p>
        </div>

        {/* CTA buttons (match homepage style) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* NICOLE AI */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">Flagship</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">NICOLE AI</h2>
            <p className="text-gray-600 mb-6">
              The first emotionally intelligent assistant. Empathetic by design, private by default, and powerful when you need it.
            </p>
            <div className="flex gap-3">
              <Link
                href="/demo"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Experience Demo
              </Link>
              <Link
                href="/nicole"
                className="bg-white text-gray-900 px-5 py-3 rounded-full text-sm font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Future Tools */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">Coming Soon</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Creator Suite</h2>
            <p className="text-gray-600 mb-6">
              A toolkit of empathetic, AI-powered apps focused on safety, creativity, and collaborative workflows.
            </p>
            <div className="flex gap-3">
              <Link
                href="/pricing"
                className="bg-white text-gray-900 px-5 py-3 rounded-full text-sm font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              >
                Reserve Access
              </Link>
            </div>
          </div>

          {/* Privacy & Safety */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700">Core Principle</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Privacy & Safety</h2>
            <p className="text-gray-600 mb-6">
              Zero-trust privacy, instant deletion, and user data sovereignty. Explore our approach to building safe AI.
            </p>
            <div className="flex gap-3">
              <Link
                href="/safety"
                className="bg-white text-gray-900 px-5 py-3 rounded-full text-sm font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Why people choose our tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                t: 'Privacy by Default', d: 'Local-first when possible, encrypted by design, and full control over your data.'
              },{
                t: 'Emotionally Intelligent', d: 'Understands tone and intent to reduce friction and increase clarity.'
              },{
                t: 'Calm UX', d: 'Thoughtful motion and clear hierarchy—no noise, no cognitive overload.'
              },{
                t: 'Fast & Reliable', d: 'Snappy interactions, sensible fallbacks, and predictable behavior.'
              }].map((f) => (
                <div key={f.t} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <div className="text-xl font-semibold text-gray-900 mb-2">{f.t}</div>
                  <p className="text-gray-600">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Built for real workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                t: 'Creators', d: 'Plan shoots, organize ideas, and draft content with gentle guidance—never heavy-handed.'
              },{
                t: 'Engineers', d: 'Summarize threads, clarify requirements, and keep context without leaking data.'
              },{
                t: 'Teams', d: 'Shared notes and tasks with clear ownership, privacy controls, and calm notifications.'
              }].map((u) => (
                <div key={u.t} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <div className="text-xl font-semibold text-gray-900 mb-2">{u.t}</div>
                  <p className="text-gray-600">{u.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">How we compare</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                <thead>
                  <tr className="text-gray-700">
                    <th className="px-6 py-4">Feature</th>
                    <th className="px-6 py-4">NICOLE</th>
                    <th className="px-6 py-4">Typical AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {f:'Privacy-first', a:'On-device when possible; encrypted.', b:'Cloud-first; unclear storage.'},
                    {f:'Tone awareness', a:'Understands nuance + boundaries.', b:'Literal or brittle responses.'},
                    {f:'UX & motion', a:'Calm, guided, accessible.', b:'Noisy or inconsistent.'},
                    {f:'Data control', a:'Instant delete; user-owned.', b:'Limited, opaque controls.'},
                  ].map((r) => (
                    <tr key={r.f} className="text-gray-700">
                      <td className="px-6 py-4 font-medium">{r.f}</td>
                      <td className="px-6 py-4 text-emerald-700">{r.a}</td>
                      <td className="px-6 py-4 text-gray-500">{r.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">FAQ</h2>
            <div className="max-w-3xl mx-auto divide-y divide-gray-200 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              {[{
                q:'Is my data private?', a:'Yes. We favor on-device processing where possible, encrypt your data, and give you simple deletion controls.'
              },{
                q:'Is there a free trial?', a:'You can try the demo any time. For full products, we offer a low lifetime price during early access.'
              },{
                q:'Where can I follow progress?', a:'Check the Devices and About pages for transparent updates and roadmap notes.'
              }].map((item) => (
                <details key={item.q} className="group open:bg-gray-50">
                  <summary className="list-none cursor-pointer select-none px-6 py-5 flex items-center justify-between text-gray-900 font-semibold">
                    {item.q}
                    <span className="ml-4 inline-flex w-6 h-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-700">{item.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to build with us?</h3>
            <p className="text-gray-600 mb-8">Get early access and help shape the roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Lifetime Access for $25
              </Link>
              <Link
                href="/demo"
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Try the Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
