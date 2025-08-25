import Link from 'next/link';
import type React from 'react';

export default function ProductsPage() {
  // Simple icon map for feature cards
  const icons: Record<string, React.ReactNode> = {
    'Privacy by Default': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 3c3 2 6 2 9 0v7c0 5-3.5 9.5-9 11C6.5 19.5 3 15 3 10V3c3 2 6 2 9 0Z" className="fill-blue-100"/>
        <path d="M12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" className="fill-blue-600"/>
      </svg>
    ),
    'Emotionally Intelligent': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10Z" className="fill-pink-500/20"/>
        <circle cx="10" cy="11" r="1" className="fill-pink-600"/>
        <circle cx="14" cy="11" r="1" className="fill-pink-600"/>
      </svg>
    ),
    'Calm UX': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="4" className="fill-purple-500/15"/>
        <path d="M7 12h10" strokeWidth="2" className="stroke-purple-600"/>
      </svg>
    ),
    'Fast & Reliable': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 12h12" strokeWidth="2" className="stroke-emerald-600"/>
        <path d="M9 7l8 5-8 5V7Z" className="fill-emerald-500/30"/>
      </svg>
    ),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-32 min-h-screen">
      {/* Background Elements */}
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

        {/* CTA buttons */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

          {/* Creator Suite */}
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
        </div>

        {/* Feature Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">Why people choose our tools</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Designed to be private, human, and dependable—without the noise.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Privacy by Default', d: 'Local-first when possible, encrypted by design, and full control over your data.' },
              { t: 'Emotionally Intelligent', d: 'Understands tone and intent to reduce friction and increase clarity.' },
              { t: 'Calm UX', d: 'Thoughtful motion and clear hierarchy—no noise, no cognitive overload.' },
              { t: 'Fast & Reliable', d: 'Snappy interactions, sensible fallbacks, and predictable behavior.' },
            ].map((f) => (
              <div key={f.t} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/60 to-white/20 shadow-lg border border-white/50">
                  <div className="rounded-2xl bg-white/70 backdrop-blur-sm p-6 h-full transition-all duration-200 group-hover:translate-y-[-2px]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 ring-1 ring-inset ring-white/60 shadow-sm">
                        {icons[f.t]}
                      </div>
                      <div className="text-lg font-semibold text-gray-900">{f.t}</div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{f.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Built for real workflows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              t: 'Creators', d: 'Plan shoots, organize ideas, and draft content with gentle guidance—never heavy-handed.'
            },{
              t: 'Engineers', d: 'Summarize threads, clarify requirements, and keep context without leaking data.'
            },{
              t: 'Teams', d: 'Shared notes and tasks with clear ownership, privacy controls, and calm notifications.'
            }].map((u) => (
              <div key={u.t} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <div className="text-xl font-semibold text-gray-900 mb-4">{u.t}</div>
                <p className="text-gray-600 leading-relaxed">{u.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">How we compare</h2>
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="min-w-full text-left bg-white/70 backdrop-blur-sm border border-white/60">
              <thead>
                <tr className="text-gray-800">
                  <th className="px-6 py-4 font-semibold bg-gray-50/80">Feature</th>
                  <th className="px-6 py-4 font-semibold bg-gray-50/80">NICOLE</th>
                  <th className="px-6 py-4 font-semibold bg-gray-50/80">Typical AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {f:'Privacy-first', a:'On-device when possible; encrypted.', b:'Cloud-first; unclear storage.'},
                  {f:'Tone awareness', a:'Understands nuance + boundaries.', b:'Literal or brittle responses.'},
                  {f:'UX & motion', a:'Calm, guided, accessible.', b:'Noisy or inconsistent.'},
                  {f:'Data control', a:'Instant delete; user-owned.', b:'Limited, opaque controls.'},
                ].map((r, i) => (
                  <tr key={r.f} className={i % 2 === 0 ? 'bg-white/60' : 'bg-white/40'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{r.f}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {r.a}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        {r.b}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mini FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">FAQ</h2>
          <div className="max-w-4xl mx-auto divide-y divide-gray-200 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            {[{
              q:'Is my data private?', a:'Yes. We favor on-device processing where possible, encrypt your data, and give you simple deletion controls.'
            },{
              q:'Is there a free trial?', a:'You can try the demo any time. For full products, we offer a low lifetime price during early access.'
            },{
              q:'Where can I follow progress?', a:'Check the Devices and About pages for transparent updates and roadmap notes.'
            }].map((item) => (
              <details key={item.q} className="group">
                <summary className="list-none cursor-pointer select-none px-8 py-6 flex items-center justify-between text-gray-900 font-semibold hover:bg-gray-50/50 transition-colors">
                  <span className="text-lg">{item.q}</span>
                  <span className="ml-4 inline-flex w-8 h-8 items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 group-open:rotate-45 group-open:border-blue-500 group-open:text-blue-600 transition-all duration-200">+</span>
                </summary>
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/50">
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to build with us?</h3>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Get early access and help shape the roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Lifetime Access for $25
              </Link>
              <Link
                href="/demo"
                className="bg-white text-gray-900 px-10 py-5 rounded-full text-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
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
