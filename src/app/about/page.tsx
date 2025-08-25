'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main>
      {/* Hero (Light, Elevated) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-28 pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Subtle radial highlight with micro animation */}
        <motion.div 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),rgba(255,255,255,0)_60%)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Building Human‑Centered AI</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We design emotionally intelligent systems that prioritize privacy, clarity, and calm. Technology that serves people, not the other way around.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/demo"
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all transform hover:translate-y-[-1px] shadow-sm hover:shadow-md"
            >
              See the Demo
            </Link>
            <Link
              href="/products"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all transform hover:translate-y-[-1px] shadow-sm hover:shadow-md"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission + Pillars */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div 
              className="lg:col-span-1 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Build AI that listens first, helps second, and never compromises your privacy. We believe empathy, safety, and user control are non‑negotiable.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[{label:'Empathy', color:'from-pink-500 to-rose-500'},{label:'Safety', color:'from-blue-500 to-cyan-500'},{label:'Privacy', color:'from-emerald-500 to-green-500'}].map((p) => (
                  <div key={p.label} className={`text-center rounded-2xl p-4 bg-gradient-to-r ${p.color} text-white font-semibold shadow-md`}>{p.label}</div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {title:'Emotionally Intelligent', desc:'Technology that understands context, tone, and human nuance—built to support, not distract.' , icon:'💗'},
                {title:'Privacy by Default', desc:'On-device when possible, encrypted by design, and your data is always yours to control.' , icon:'🔐'},
                {title:'Human-Centered', desc:'Practical, approachable interfaces with micro‑animations that guide—not overwhelm.' , icon:'🧭'},
                {title:'Responsible Innovation', desc:'We move fast where it helps people most—and slowly where safety and ethics demand it.' , icon:'⚖️'},
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline (Light) */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {year:'2023', title:'Founded', text:'Started with a vision: caring AI that truly understands.'},
              {year:'2024', title:'NICOLE Alpha', text:'First demos validating emotionally intelligent interactions.'},
              {year:'2025', title:'Creator Suite', text:'Expanding ecosystem with safety and creativity at the core.'},
              {year:'Future', title:'Devices', text:'Smart glasses, watches, and more—privacy-first hardware.'},
            ].map((m, i) => (
              <motion.div
                key={m.year}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-gray-500 font-semibold">{m.year}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{m.title}</div>
                <p className="text-gray-700">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {v:'100%', l:'Privacy Focused'},
              {v:'7+', l:'Industry Solutions'},
              {v:'24/7', l:'Uptime & Support'},
              {v:'∞', l:'Curiosity'},
            ].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="transition-transform duration-300 hover:-translate-y-0.5">
                <div className="text-4xl font-bold text-gray-900">{s.v}</div>
                <div className="text-gray-600">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Team</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {name:'Nick', role:'Founder & Engineering', color:'from-blue-500 to-cyan-500'},
              {name:'Nicole', role:'AI Personality & Voice', color:'from-pink-500 to-purple-500'},
              {name:'You', role:'Community & Creators', color:'from-emerald-500 to-green-500'},
            ].map((p, i) => (
              <motion.div key={p.name} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${p.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>{p.name.charAt(0)}</div>
                <div className="text-xl font-bold text-gray-900">{p.name}</div>
                <div className="text-gray-600">{p.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder’s Note (Elevated) */}
      <section className="relative py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/60"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center text-2xl font-bold">N</div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">A note from the founder</h3>
                <p className="text-gray-700 leading-relaxed">
                  We’re building AI that feels less like software and more like support. Precision over spectacle. Privacy over shortcuts. 
                  Every interaction should reduce cognitive load and increase trust. That’s our bar.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community voices */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            From the community
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Real notes from people building with us.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { q: 'Calm, clear, and actually useful. It gets out of the way.', n: 'Amara', r: 'Founder' },
              { q: 'Privacy‑first and thoughtfully designed. That matters to us.', n: 'Jon', r: 'Engineer' },
              { q: 'The details make it: micro‑animations, tone, pacing. It feels human.', n: 'Lea', r: 'Designer' },
            ].map((t, i) => (
              <motion.figure
                key={i}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <blockquote className="text-gray-900 leading-relaxed">“{t.q}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">{t.n} • {t.r}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Animated, Light) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>FAQ</motion.h2>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-3xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg">
            {[ 
              {q: 'How do you handle privacy?', a: 'We prioritize on-device processing when feasible, encrypt data in transit and at rest, and give users full control over retention and deletion.'},
              {q: 'What makes NICOLE different?', a: 'NICOLE is designed for emotional intelligence and safety. It aims to understand tone, intent, and boundaries—helping without overwhelming.'},
              {q: 'When are devices coming?', a: 'We share timelines transparently on our Devices page. We move responsibly where safety and user benefit are clear.'},
            ].map((item, i) => (
              <motion.details key={i} className="group open:bg-gray-50">
                <summary className="list-none cursor-pointer select-none px-6 py-5 flex items-center justify-between text-gray-900 font-semibold">
                  {item.q}
                  <span className="ml-4 inline-flex w-6 h-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  transition={{ duration: 0.25 }}
                  className="px-6 pb-5 text-gray-700"
                >
                  {item.a}
                </motion.div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Build the future with us</h3>
          <p className="text-gray-600 mb-8">Join our community of creators, builders, and people who care about human‑centered technology.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </main>
  );
}
