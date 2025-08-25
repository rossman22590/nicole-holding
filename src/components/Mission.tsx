'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const missionItems = [
    {
      icon: "💝",
      title: "Empathy",
      description: "AI that understands human emotions, adapts to your needs, and responds with genuine care and understanding.",
      gradient: "gradient-premium-1",
      delay: 0
    },
    {
      icon: "🛡️",
      title: "Safety",
      description: "Privacy-first design with complete transparency. Your data stays yours, with full control over what's shared.",
      gradient: "gradient-premium-4",
      delay: 0.2
    },
    {
      icon: "⚡",
      title: "Innovation",
      description: "Cutting-edge technology that pushes boundaries while maintaining ethical standards and human-centered design.",
      gradient: "gradient-premium-2",
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-cream-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-10"></div>
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 gradient-premium-3 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 gradient-premium-5 rounded-full filter blur-3xl opacity-15"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
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
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Our Mission</span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building the most emotionally intelligent, safety-focused, and trustworthy AI ecosystem
          </motion.p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {missionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateY: 0 
              } : { 
                opacity: 0, 
                y: 100, 
                rotateY: -30 
              }}
              transition={{ 
                delay: item.delay,
                duration: 0.8,
                ease: [0.23, 1, 0.320, 1]
              }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                scale: 1.05
              }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden border border-blue-100">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-3xl font-bold text-slate-800 mb-6 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-center text-lg">
                  {item.description}
                </p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Structure Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100">
            <motion.div 
              className="text-center mb-12"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Our Structure</span>
              </h3>
              <p className="text-xl text-slate-600">Built for transparency and trust</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "NickCall Technology for the Future LLC",
                  subtitle: "Development & Operations Company",
                  items: [
                    "Software development and deployment",
                    "User experience and support", 
                    "Technology infrastructure"
                  ],
                  gradient: "gradient-premium-1"
                },
                {
                  title: "Archene Holdings (Pty) Ltd",
                  subtitle: "Intellectual Property Owner",
                  items: [
                    "AI technology patents and IP",
                    "Research and development oversight",
                    "Strategic licensing partnerships"
                  ],
                  gradient: "gradient-premium-2"
                }
              ].map((company, index) => (
                <motion.div
                  key={company.title}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden border border-blue-100"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02
                  }}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 ${company.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  <h4 className="text-2xl font-bold text-slate-800 mb-3 relative z-10">
                    {company.title}
                  </h4>
                  <p className="text-slate-600 mb-6 text-lg relative z-10">
                    {company.subtitle}
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {company.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-slate-600 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 1.2 + index * 0.2 + itemIndex * 0.1 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
