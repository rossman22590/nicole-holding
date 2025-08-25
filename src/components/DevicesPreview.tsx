'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function DevicesPreview() {
  const [hoveredDevice, setHoveredDevice] = useState<number | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const devices = [
    {
      name: "Smart Glasses",
      description: "AI overlay for field work, construction, and daily assistance with hands-free interaction.",
      features: ["AR overlay", "Voice commands", "Real-time translation", "Safety alerts"],
      status: "In Development",
      timeline: "2025",
      icon: "👓",
      gradient: "gradient-premium-1",
      color: "from-blue-400 to-cyan-400",
      progress: 75
    },
    {
      name: "Smart Watches",
      description: "Emotional and safety alerts with health monitoring and seamless NICOLE integration.",
      features: ["Health monitoring", "Emotional alerts", "Emergency detection", "Voice interaction"],
      status: "Prototype Phase",
      timeline: "2025",
      icon: "⌚",
      gradient: "gradient-premium-2",
      color: "from-green-400 to-emerald-400",
      progress: 60
    },
    {
      name: "Headsets",
      description: "Immersive hands-free support for professional and personal environments.",
      features: ["Spatial audio", "Noise cancellation", "Extended battery", "Professional grade"],
      status: "Design Phase",
      timeline: "2026",
      icon: "🎧",
      gradient: "gradient-premium-3",
      color: "from-purple-400 to-pink-400",
      progress: 40
    },
    {
      name: "Neural Interface",
      description: "Ethical, opt-in neural connectivity for the future of human-AI interaction.",
      features: ["Thought-to-text", "Emotional sensing", "Privacy controls", "Opt-in only"],
      status: "Research",
      timeline: "2030+",
      icon: "🧠",
      gradient: "gradient-premium-5",
      color: "from-orange-400 to-red-400",
      progress: 15
    }
  ];

  const timelines = [...new Set(devices.map(d => d.timeline))];

  const filteredDevices = selectedTimeline 
    ? devices.filter(d => d.timeline === selectedTimeline)
    : devices;

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        {/* Baby blue header container with moving background */}
        <motion.div 
          className="relative text-center mb-20 rounded-3xl p-12 overflow-hidden bg-gradient-to-br from-sky-100 via-blue-100 to-sky-200 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
        >
          {/* Header-local animated blobs */}
          <motion.div 
            className="absolute -top-10 -left-10 w-80 h-80 rounded-full filter blur-3xl opacity-30 bg-gradient-to-r from-sky-300 to-blue-300"
            style={{ y }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 60, 120, 180],
              x: [0, 20, -20, 0]
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full filter blur-3xl opacity-20 bg-gradient-to-r from-blue-300 to-sky-300"
            animate={{ 
              scale: [1.1, 0.95, 1.1],
              rotate: [180, 120, 60, 0],
              x: [0, -15, 15, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-slate-900 mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-slate-900 drop-shadow-sm">Hardware</span>
            <br />
            <span className="text-4xl md:text-6xl text-slate-700">Roadmap</span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-slate-700 font-semibold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software-first today. Hardware tomorrow.
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We&#39;re developing a complete ecosystem of devices that seamlessly integrate with NICOLE AI, 
            bringing intelligent assistance to every aspect of your life.
          </motion.p>
        </motion.div>

        {/* Timeline Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button
            className={
              `px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ` +
              `bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 shadow-lg`
            }
            onClick={() => setSelectedTimeline(null)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            All Timelines
          </motion.button>
          {timelines.map((timeline, index) => (
            <motion.button
              key={timeline}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedTimeline === timeline 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 shadow-lg' 
                  : 'bg-white/80 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm hover:shadow-md'
              }`}
              onClick={() => setSelectedTimeline(timeline)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              {timeline}
            </motion.button>
          ))}
        </motion.div>

        {/* Devices Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          layout
        >
          {filteredDevices.map((device, index) => (
            <motion.div
              key={device.name}
              className="group relative"
              layout
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0 
              }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.23, 1, 0.320, 1]
              }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                scale: 1.02
              }}
              onHoverStart={() => setHoveredDevice(index)}
              onHoverEnd={() => setHoveredDevice(null)}
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-slate-200"
                whileHover={{ 
                  borderColor: 'rgba(6,182,212,0.4)'
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 ${device.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <motion.div 
                    className="text-6xl"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {device.icon}
                  </motion.div>
                  <div className="text-right">
                    <motion.span 
                      className={`inline-block px-4 py-2 rounded-2xl text-sm font-bold bg-gradient-to-r ${device.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {device.status}
                    </motion.span>
                    <motion.p 
                      className="text-slate-500 mt-2 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {device.timeline}
                    </motion.p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-3xl font-bold text-slate-900 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {device.name}
                  </motion.h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {device.description}
                  </p>
                 
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 text-sm font-semibold">Development Progress</span>
                      <span className="text-slate-800 font-bold">{device.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${device.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${device.progress}%` } : { width: 0 }}
                        transition={{ delay: 1 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                 
                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800 text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {device.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center text-slate-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 1.2 + idx * 0.1 }}
                          whileHover={{ x: 5, color: '#ffffff' }}
                        >
                          <motion.div 
                            className={`w-3 h-3 bg-gradient-to-r ${device.color} rounded-full mr-4`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${device.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div 
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-slate-200 relative overflow-hidden"
            whileHover={{ 
              y: -10,
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 gradient-premium-2 opacity-10"
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
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Our <span className="text-gradient">Hardware Philosophy</span>
              </motion.h3>
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                Every device we create follows our core principles of privacy, empathy, and user control.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Privacy by Design",
                    description: "All processing happens locally when possible, with encrypted communication and user-controlled data sharing.",
                    icon: "🔒",
                    gradient: "gradient-premium-1"
                  },
                  {
                    title: "User Control",
                    description: "Complete control over device functionality, data collection, and AI interaction levels with granular settings.",
                    icon: "⚙️",
                    gradient: "gradient-premium-3"
                  },
                  {
                    title: "Seamless Integration",
                    description: "All devices work together as one ecosystem, sharing context and preferences while maintaining security.",
                    icon: "⚡",
                    gradient: "gradient-premium-5"
                  }
                ].map((principle, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.2, duration: 0.8 }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div 
                      className={`w-20 h-20 ${principle.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-premium group-hover:shadow-glow transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <span className="text-3xl">{principle.icon}</span>
                    </motion.div>
                    <motion.h4 
                      className="text-2xl font-bold text-slate-900 mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {principle.title}
                    </motion.h4>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
