'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "AI you can trust.",
    "A future you can shape.",
    "Emotionally intelligent.",
    "Privacy-first design."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-32 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NickCall Technology
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-700">
              for the Future
            </span>
          </h1>

          {/* Animated Tagline */}
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-600 transition-all duration-500">
              {texts[currentText]}
            </p>
          </div>

          {/* Subline */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Creators of <span className="font-semibold text-blue-600">NICOLE AI</span> — the first emotionally intelligent assistant — 
            and the future ecosystem of intelligent tools built on empathy, safety, and innovation.
          </p>

          {/* CTA Buttons */}
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
            <Link 
              href="/deck" 
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Deck
            </Link>
            <Link 
              href="/investors" 
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Investors
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Lifetime Access Spots</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-600">Industry Solutions</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-gray-600">Privacy Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
