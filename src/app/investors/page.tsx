"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* Light background accents */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Building The Embedded AI Layer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A secure, on-device intelligence platform for the next decade of consumer and enterprise devices.
            Shipping today. Designed to scale.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              href="/pricing"
              className="inline-flex items-center px-7 py-4 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow transition-transform hover:scale-[1.01]"
            >
              See Traction
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-4 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white transition-transform hover:scale-[1.01]"
            >
              Contact Founders
            </Link>
          </motion.div>

          {/* KPI STRIP */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "ARR", v: "$420k", sub: "+ MoM 28%" },
              { k: "Users", v: "82,000", sub: "NPS 72" },
              { k: "Retention", v: "62%", sub: "90-day" },
              { k: "Gross Margin", v: "88%", sub: "blended" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm"
              >
                <div className="text-slate-500 text-sm uppercase tracking-widest">{m.k}</div>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900">{m.v}</div>
                  {/* Sparkline */}
                  <svg viewBox="0 0 120 36" className="w-28 h-8 text-indigo-500">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      points="2,30 18,26 34,28 50,22 66,18 82,12 98,16 118,8"
                    />
                    <circle cx="118" cy="8" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div className="mt-1 text-slate-500">{m.sub}</div>
              </div>
            ))}
          </div>
          {/* Investor Highlights */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            {[
              { h: "Shipping today", d: "Production app with strong early retention and rapid iteration cadence." },
              { h: "On‑device moat", d: "Edge-first architecture with personal memory graph and safety layer." },
              { h: "OEM demand", d: "Active convos with top device makers; pilots across categories." },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold text-slate-900">{x.h}</div>
                <div className="mt-2 text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS + TRACTION (condensed) */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Focus</span>
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700 text-lg">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" /> On‑device agent platform (privacy, latency, cost)</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" /> Personal memory graph and safety layer</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" /> OEM integrations across mobile, wearable, home</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Traction</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { t: "82k MAU", d: "v1 GA" },
                { t: "$420k ARR", d: "+28% MoM" },
                { t: "24 pilots", d: "enterprise" },
              ].map((b) => (
                <div key={b.t} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <div className="text-2xl font-semibold text-slate-900">{b.t}</div>
                  <div className="text-slate-600">{b.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKET SIZING */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Market</span>
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {[{ t: 'Total Addressable', v: '$48B' }, { t: 'Serviceable Available', v: '$9.2B' }].map((c) => (
              <div key={c.t} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                <div className="mx-auto w-40 h-40 relative">
                  {/* Simple donut */}
                  <svg viewBox="0 0 42 42" className="w-full h-full">
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#6366f1" strokeWidth="6" strokeDasharray="70 30" strokeDashoffset="25" />
                  </svg>
                </div>
                <div className="mt-4 text-2xl font-semibold text-slate-900">{c.v}</div>
                <div className="text-slate-600">{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION TIMELINE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Traction</span>
          </h2>
          <div className="mt-10 space-y-8">
            {[
              { q: 'Q4 ’24', t: 'Beta launched', d: '10k users in 6 weeks; 24 enterprise pilots' },
              { q: 'Q1 ’25', t: 'v1 GA', d: '82k MAU; $420k ARR; on-device ASR + RAG' },
              { q: 'Q2 ’25', t: 'SDK', d: 'OEM integrations; edge-to-cloud sync' },
            ].map((e) => (
              <div key={e.q} className="grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" /> {e.q}
                  </div>
                </div>
                <div className="md:col-span-3 text-slate-900 font-semibold">{e.t}</div>
                <div className="md:col-span-7 text-slate-600">{e.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS / LOGOS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm uppercase tracking-widest text-slate-500">In conversations with</div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {["/next.svg","/globe.svg","/file.svg","/next.svg"].map((src, i) => (
              <div key={i} className="opacity-70 hover:opacity-90 transition-opacity">
                <Image src={src} alt="logo" width={120} height={28} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE MATRIX */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Positioning</span>
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left">
              <thead className="text-slate-600 text-sm">
                <tr>
                  <th className="px-6 py-4">Vendor</th>
                  <th className="px-6 py-4">On‑device</th>
                  <th className="px-6 py-4">Memory</th>
                  <th className="px-6 py-4">Safety</th>
                  <th className="px-6 py-4">OEM SDK</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {[
                  { n: 'NickCall', a: ['Yes','Yes','Yes','Yes'] },
                  { n: 'Cloud‑only A', a: ['No','Partial','Partial','No'] },
                  { n: 'Voice OS B', a: ['Partial','No','No','Partial'] },
                ].map((r) => (
                  <tr key={r.n} className="bg-white">
                    <td className="px-6 py-4 font-semibold text-slate-900">{r.n}</td>
                    {r.a.map((v, i) => (
                      <td key={i} className="px-6 py-4">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL + UNIT ECONOMICS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Business Model</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Consumer Lifetime license (one‑time)</li>
              <li>OEM SDK licensing + support</li>
              <li>Enterprise seat pricing for admin tools</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Unit Economics</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { k: 'COGS', v: '$0.08 / hr' },
                { k: 'LTV', v: '$38' },
                { k: 'CAC', v: '$6' },
                { k: 'Payback', v: '< 30 days' },
              ].map((c) => (
                <div key={c.k} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                  <div className="text-sm uppercase tracking-widest text-slate-500">{c.k}</div>
                  <div className="mt-1 text-2xl font-semibold text-slate-900">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {[
              { t: 'Q3 ’25', d: 'Wearable SDK beta' },
              { t: 'Q4 ’25', d: 'Home hub integration' },
              { t: 'Q1 ’26', d: 'Enterprise admin suite' },
              { t: 'Q2 ’26', d: 'Auto + XR pilots' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" /> {s.t}
                </div>
                <div className="mt-3 text-slate-900 font-semibold">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">We’re raising to accelerate OEM integrations</span>
            </h3>
            <p className="mt-4 text-slate-600 text-lg">Warm introductions welcome. We share a succinct 8‑slide deck and live demo.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:invest@nickcall.com?subject=Investor%20Intro&body=Hi%20NickCall%20Team,%20we'd%20love%20to%20connect."
                className="inline-flex items-center px-7 py-4 rounded-full bg-slate-900 text-white font-semibold shadow-sm hover:shadow transition-transform hover:scale-[1.01]"
              >
                Email invest@nickcall.com
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-4 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white transition-transform hover:scale-[1.01]"
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
