'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function ProductSpotlight() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const features = [
    {
      title: "Emotional Intelligence",
      description: "NICOLE understands your emotions through voice tone, context, and behavioral patterns, responding with empathy and care.",
      icon: "💝",
      gradient: "gradient-premium-1",
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Real-time Translation",
      description: "Seamlessly communicate across 50+ languages with context-aware translation that preserves meaning and emotion.",
      icon: "🌍",
      gradient: "gradient-premium-4",
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Emergency Awareness",
      description: "Advanced monitoring detects distress signals, sudden silence, or emergency situations to provide immediate assistance.",
      icon: "🚨",
      gradient: "gradient-premium-2",
      color: "from-red-400 to-orange-400"
    },
    {
      title: "Privacy-First Design",
      description: "Your data stays yours. Complete control over what's stored, shared, or processed with transparent data management.",
      icon: "🔒",
      gradient: "gradient-premium-3",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  const chatMessages = [
    {
      type: 'ai',
      text: "I notice you seem a bit stressed today. Would you like me to help you organize your tasks, or would you prefer to talk about what's on your mind? I'm here to support you however you need."
    },
    {
      type: 'user',
      text: "I have a big presentation tomorrow and I'm feeling overwhelmed."
    },
    {
      type: 'ai',
      text: "I understand that feeling. Let's break this down together. What aspects of the presentation are worrying you most?"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-5"></div>
      <motion.div 
        className="absolute top-10 left-10 w-96 h-96 gradient-premium-1 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 gradient-premium-3 rounded-full filter blur-3xl opacity-15"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -80, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-white mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
            whileHover={{ scale: 1.02 }}
          >
            Meet{' '}
            <motion.span 
              className="text-gradient text-glow animate-text-shimmer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              NICOLE AI
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            She remembers you, learns from you, and adapts in real time. The first AI assistant built with emotional intelligence at its core.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/nicole" 
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/50 via-indigo-400/50 to-purple-400/50 blur-xl opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.4 }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🤖
                </motion.span>
                Learn More About NICOLE
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Features List */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                  activeFeature === index
                    ? 'glass shadow-glow scale-105'
                    : 'glass hover:shadow-premium'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: activeFeature === index ? 1.05 : 1.02
                }}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                } : { 
                  opacity: 0, 
                  y: 50, 
                  rotateX: -30 
                }}
                transition={{ 
                  delay: 0.8 + index * 0.1,
                  duration: 0.6,
                  ease: [0.23, 1, 0.320, 1]
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Active indicator */}
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      className="absolute inset-0 border-2 border-cyan-400 rounded-3xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>

                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div 
                    className="text-5xl"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4"
                      whileHover={{ x: 5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-white/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Demo Preview */}
          <motion.div 
            className="sticky top-32"
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0, 
              rotateY: 0 
            } : { 
              opacity: 0, 
              x: 100, 
              rotateY: -30 
            }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div 
              className="glass rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Chat Header */}
              <motion.div 
                className="gradient-premium-1 rounded-2xl p-6 text-white mb-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{ 
                    x: ['-100%', '100%'],
                    skewX: [-45, -45]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="flex items-center space-x-4 mb-6 relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-xl font-bold">N</span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg">NICOLE AI</h4>
                    <motion.p 
                      className="text-sm opacity-80 flex items-center"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-green-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Online • Emotionally Aware
                    </motion.p>
                  </div>
                </div>
                
                <motion.div 
                  className="bg-white/10 rounded-xl p-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <motion.p 
                    className="text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    {chatMessages[0].text}
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Chat Messages */}
              <div className="space-y-6 mb-8">
                <motion.div 
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl px-6 py-4 max-w-sm shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {chatMessages[1].text}
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3, duration: 0.6 }}
                >
                  <motion.div 
                    className="glass text-white rounded-2xl px-6 py-4 max-w-sm border border-white/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {chatMessages[2].text}
                  </motion.div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 0.6 }}
                >
                  <motion.div 
                    className="glass text-white rounded-2xl px-6 py-4 border border-white/20 flex items-center space-x-2"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm">NICOLE is typing</span>
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ 
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div 
                className="pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/demo" 
                    className="w-full magnetic-button gradient-premium-3 text-white py-4 rounded-2xl font-bold text-center block shadow-premium hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Try NICOLE Live Demo</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
