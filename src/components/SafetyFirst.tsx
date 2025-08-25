'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function SafetyFirst() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDrainHovered, setIsDrainHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const tabs = [
    {
      title: "Data Control",
      icon: "🔐",
      gradient: "gradient-premium-1",
      color: "from-blue-400 to-cyan-400",
      content: {
        title: "Your Data, Your Rules",
        description: "Complete transparency and control over your personal information.",
        features: [
          "See exactly what data is stored",
          "Delete any information instantly",
          "Control cloud vs local storage",
          "Export your data anytime"
        ]
      }
    },
    {
      title: "Privacy Dashboard",
      icon: "📊",
      gradient: "gradient-premium-3",
      color: "from-purple-400 to-pink-400",
      content: {
        title: "Real-time Transparency",
        description: "Live dashboard showing all AI interactions and data usage.",
        features: [
          "Real-time activity logs",
          "Data usage analytics",
          "Permission controls",
          "Privacy score tracking"
        ]
      }
    },
    {
      title: "Emergency Features",
      icon: "🚨",
      gradient: "gradient-premium-5",
      color: "from-red-400 to-orange-400",
      content: {
        title: "Safety Monitoring",
        description: "Advanced safety features that protect without compromising privacy.",
        features: [
          "Voice tone analysis for distress",
          "Sudden silence detection",
          "Emergency contact alerts",
          "Location sharing controls"
        ]
      }
    }
  ];

  const safetyPromises = [
    {
      title: "NICOLE never takes without asking",
      description: "Every piece of data, every permission, every interaction requires your explicit consent. No hidden data collection.",
      icon: "🛡️",
      gradient: "gradient-premium-4",
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "You are in full control",
      description: "Granular controls for every aspect of AI interaction. Turn features on or off, set boundaries, and customize your experience.",
      icon: "⚙️",
      gradient: "gradient-premium-1",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Transparency is not optional",
      description: "Real-time logs, clear explanations, and open documentation. You always know what NICOLE is doing and why.",
      icon: "👁️",
      gradient: "gradient-premium-3",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-5"></div>
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full filter blur-3xl opacity-15"
        animate={{ 
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
          x: [0, 70, 0],
          y: [0, -40, 0]
        }}
        transition={{ 
          duration: 25,
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
            className="text-6xl md:text-8xl font-bold text-blue-900 mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Safety</span>
            <br />
            <span className="text-4xl md:text-6xl text-blue-800">First</span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-blue-700 max-w-4xl mx-auto font-light leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your safety. Your data. Your control. Built into every aspect of NICOLE AI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/safety" 
              className="magnetic-button bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Safety Features</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Interactive Demo */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200 relative overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ y: -10 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold text-blue-900 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Dashboard Preview
              </motion.h3>
              
              {/* Tab Navigation */}
              <div className="flex space-x-2 mb-8 bg-blue-50/80 p-2 rounded-2xl border border-blue-200">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'text-blue-700 hover:text-blue-900 hover:bg-blue-100'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.title}</span>
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  className="min-h-[400px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h4 
                    className="text-2xl font-bold text-blue-900 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {tabs[activeTab].content.title}
                  </motion.h4>
                  <p className="text-blue-700 mb-8 text-lg leading-relaxed">
                    {tabs[activeTab].content.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {tabs[activeTab].content.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-4 p-4 bg-blue-50/60 rounded-2xl border border-blue-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div 
                          className={`w-3 h-3 bg-gradient-to-r ${tabs[activeTab].color} rounded-full`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-blue-800">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mock Dashboard Element */}
                  <motion.div 
                    className="p-6 bg-blue-50/60 rounded-2xl border border-blue-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-700 font-semibold">Privacy Score</span>
                      <motion.span 
                        className="text-3xl font-bold text-green-400"
                        animate={{ 
                          textShadow: [
                            "0 0 20px rgba(34,197,94,0.4)",
                            "0 0 40px rgba(34,197,94,0.8)",
                            "0 0 20px rgba(34,197,94,0.4)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        98/100
                      </motion.span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-4 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '98%' }}
                        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-blue-600 mt-3">Excellent privacy protection</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Safety Promises */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {safetyPromises.map((promise, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-200 group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-6 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <span className="text-2xl">{promise.icon}</span>
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-blue-900"
                      whileHover={{ x: 5 }}
                    >
                      {promise.title}
                    </motion.h3>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    {promise.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${promise.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </motion.div>
            ))}

            {/* Emergency Data Control */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-red-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setIsDrainHovered(true)}
              onHoverEnd={() => setIsDrainHovered(false)}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"
                animate={isDrainHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-red-400 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  🚨 Emergency Data Control
                </motion.h3>
                <p className="text-blue-700 mb-8 text-lg leading-relaxed">
                  Need to delete everything instantly? One button, complete data removal.
                </p>
                <motion.button 
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-premium hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isDrainHovered ? {
                    boxShadow: [
                      "0 0 20px rgba(239,68,68,0.4)",
                      "0 0 40px rgba(239,68,68,0.8)",
                      "0 0 20px rgba(239,68,68,0.4)"
                    ]
                  } : {}}
                  transition={{ duration: 1, repeat: isDrainHovered ? Infinity : 0 }}
                >
                  <span className="relative z-10">🗑️ Drain My Data</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                <motion.p 
                  className="text-red-400/60 mt-4 text-sm"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  *Demo button - no actual data will be deleted
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
