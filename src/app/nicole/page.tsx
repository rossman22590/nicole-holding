'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NicolePage() {
  const [activeDemo, setActiveDemo] = useState('text');

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Ultra Creative Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 60% 40%, #06b6d4 0%, transparent 50%)',
                'radial-gradient(circle at 40% 70%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 60% 30%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 20% 20%, #06b6d4 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Particles - Reduced */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -50, -10],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: Math.random() * 4
              }}
            />
          ))}
          
          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          {/* Logo Animation */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                  <Image
                    src="/IMG_9617.jpeg"
                    alt="NICOLE Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Title with Typewriter Effect */}
          <motion.div className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                NICOLE
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-base md:text-xl text-blue-300">Neural</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-base md:text-xl text-purple-300">Intelligence</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-base md:text-xl text-cyan-300">Companion</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-base md:text-xl text-pink-300">Operating</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-base md:text-xl text-green-300">Language</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-base md:text-xl text-yellow-300">Engine</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Subtitle with Glitch Effect */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            The world&#39;s first AI with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">genuine emotional intelligence</span>. 
            NICOLE doesn&#39;t just understand your words—she understands <span className="text-cyan-400 font-semibold">you</span>.
          </motion.p>

          {/* CTA Buttons (Matched to Homepage) */}
          <div className="z-50 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center no-underline bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl outline-none focus:outline-none"
            >
              Try NICOLE Now
            </Link>
            <Link 
              href="/pricing" 
              className="inline-flex items-center justify-center no-underline bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl outline-none focus:outline-none"
            >
              Get Lifetime Access for $25
            </Link>
          </div>

          
        </div>
      </section>

      {/* Revolutionary Capabilities Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-black overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -80, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What Makes NICOLE{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Four breakthrough capabilities that <span className="text-cyan-400 font-semibold">redefine</span> the future of AI interaction
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Emotional Intelligence",
                description: "Advanced neural networks analyze voice patterns, micro-expressions, and contextual cues to understand your emotional state in real-time",
                icon: "🧠",
                gradient: "from-blue-500 to-cyan-500",
                features: ["Voice tone analysis", "Behavioral patterns", "Contextual awareness", "Empathetic responses"]
              },
              {
                title: "Quantum Translation",
                description: "Breakthrough language processing that preserves emotional nuance and cultural context across 50+ languages instantly",
                icon: "🌐",
                gradient: "from-purple-500 to-pink-500", 
                features: ["Real-time processing", "Cultural context", "Emotional preservation", "50+ languages"]
              },
              {
                title: "Crisis Detection",
                description: "AI-powered emergency awareness system that can detect distress signals and coordinate immediate assistance when needed",
                icon: "🚨",
                gradient: "from-red-500 to-orange-500",
                features: ["Distress detection", "Emergency protocols", "Instant alerts", "Crisis intervention"]
              },
              {
                title: "Zero-Trust Privacy",
                description: "Military-grade encryption with complete user control over data. Your conversations remain private with instant deletion capabilities",
                icon: "🔒",
                gradient: "from-green-500 to-teal-500",
                features: ["End-to-end encryption", "Data sovereignty", "Instant deletion", "Zero logs policy"]
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  {/* Glowing border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${capability.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">{capability.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {capability.description}
                  </p>
                  
                  {/* Feature list */}
                  <div className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${capability.gradient} rounded-full mr-3 flex-shrink-0`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.5 }}
                        />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Experience the next evolution of artificial intelligence
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/demo" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                See NICOLE in Action
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Experience NICOLE</h2>
            <p className="text-xl text-slate-600">Try both text and voice interactions</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Demo Type Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
                <button
                  onClick={() => setActiveDemo('text')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeDemo === 'text' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Text Chat
                </button>
                <button
                  onClick={() => setActiveDemo('voice')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeDemo === 'voice' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Voice Chat
                </button>
              </div>
            </div>

            {/* Demo Interface */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              {activeDemo === 'text' ? (
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl px-6 py-4 max-w-md shadow-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">N</span>
                        </div>
                        <span className="font-semibold">NICOLE</span>
                      </div>
                      <p>Hi! I&#39;m NICOLE. I notice this is your first time here. I&#39;m excited to get to know you! What would you like to talk about today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-slate-100 text-slate-900 rounded-2xl px-6 py-4 max-w-md">
                      <p>I&#39;m feeling a bit overwhelmed with work lately. Can you help me organize my thoughts?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl px-6 py-4 max-w-md shadow-lg">
                      <p>I can hear that you&#39;re feeling stressed, and that&#39;s completely understandable. Let&#39;s break this down together. What specific aspects of work are weighing on you most right now?</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center space-x-2 text-sm text-blue-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>NICOLE detected emotional stress and adapted her response tone</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Voice Chat Demo</h3>
                  <p className="text-slate-600 mb-6">Experience NICOLE&#39;s emotional intelligence through voice interaction</p>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Voice Demo
                  </button>
                  <p className="text-sm text-slate-500 mt-4">*Voice demo available in full version</p>
                </div>
              )}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/demo" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Try Full Interactive Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Meet NICOLE?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join over 100,000 people already experiencing the future of AI assistance
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/demo" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Experience NICOLE Now
            </Link>
            <Link 
              href="/pricing" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Lifetime Access - $25
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
