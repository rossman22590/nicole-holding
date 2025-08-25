'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function FutureProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      name: "NICOLE Agri",
      category: "Agriculture",
      description: "Farm mapping, contractor synchronization, and smart spray integration for precision agriculture.",
      icon: "🌾",
      gradient: "gradient-premium-4",
      color: "from-green-400 to-emerald-400",
      features: ["Real-time field mapping", "Equipment coordination", "Weather integration", "Yield optimization"]
    },
    {
      name: "NICOLE Build",
      category: "Construction",
      description: "Task coordination, incident logging, and safety monitoring for construction sites.",
      icon: "🏗️",
      gradient: "gradient-premium-2",
      color: "from-orange-400 to-red-400",
      features: ["Project coordination", "Safety incident tracking", "Resource management", "Progress monitoring"]
    },
    {
      name: "NICOLE Mine",
      category: "Mining",
      description: "Open-cast safety monitoring, machine optimization, and operational efficiency.",
      icon: "⛏️",
      gradient: "gradient-premium-1",
      color: "from-gray-400 to-slate-400",
      features: ["Safety monitoring", "Equipment optimization", "Environmental tracking", "Compliance reporting"]
    },
    {
      name: "NICOLE Care",
      category: "Healthcare",
      description: "Real-time surgical support, patient assistance, and medical data management.",
      icon: "🏥",
      gradient: "gradient-premium-5",
      color: "from-pink-400 to-rose-400",
      features: ["Surgical assistance", "Patient monitoring", "Medical records", "Emergency response"]
    },
    {
      name: "NICOLE Learn",
      category: "Education",
      description: "Personalized learning, language support, and special needs assistance.",
      icon: "📚",
      gradient: "gradient-premium-3",
      color: "from-blue-400 to-indigo-400",
      features: ["Adaptive learning", "Multi-language support", "Accessibility tools", "Progress tracking"]
    },
    {
      name: "NICOLE Navigate",
      category: "Mapping & Logistics",
      description: "Cross-platform contractor guidance via Maps and logistics optimization.",
      icon: "🗺️",
      gradient: "gradient-premium-1",
      color: "from-cyan-400 to-teal-400",
      features: ["Route optimization", "Real-time tracking", "Multi-platform integration", "Delivery coordination"]
    }
  ];

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-5"></div>
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full filter blur-3xl opacity-15"
        animate={{ 
          scale: [1.3, 1, 1.3],
          x: [0, 80, 0],
          y: [0, -30, 0]
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
            className="text-6xl md:text-8xl font-bold text-amber-900 mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Future Products</span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-amber-800 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            NICOLE AI is just the beginning. We&#39;re building specialized AI solutions for every industry, 
            each tailored to unique challenges and workflows.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              selectedCategory === null 
                ? 'bg-amber-700 text-white shadow-lg' 
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
            }`}
            onClick={() => setSelectedCategory(null)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            All Industries
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group ${
                selectedCategory === category
                  ? 'bg-amber-700 text-white shadow-lg scale-105 border border-amber-800'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200 hover:text-amber-900 shadow-md border border-amber-300'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                className="group relative"
                layout
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0 
                }}
                exit={{ opacity: 0, y: -100, rotateX: 30 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.23, 1, 0.320, 1]
                }}
                whileHover={{ 
                  y: -20,
                  rotateY: 5,
                  scale: 1.05
                }}
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group border border-amber-200"
                  whileHover={{ 
                    borderColor: 'rgba(6,182,212,0.5)'
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-300 transition-all duration-500"
                    whileHover={{ 
                      boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)"
                    }}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {product.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-2xl font-bold text-amber-900 mb-4"
                      whileHover={{ x: 5 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    <p className="text-amber-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="text-lg font-bold text-amber-900">
                        Coming Soon
                      </span>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-amber-800 text-sm">Key Features:</h4>
                      <ul className="text-sm text-amber-600 space-y-2">
                        {product.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + idx * 0.1 }}
                          >
                            <motion.div 
                              className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mr-3`}
                              whileHover={{ scale: 1.5 }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Coming Soon Badge */}
                    <motion.div 
                      className="mt-8 pt-6 border-t border-white/10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span 
                        className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full"
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(251,191,36,0.4)",
                            "0 0 40px rgba(251,191,36,0.8)",
                            "0 0 20px rgba(251,191,36,0.4)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Coming Soon
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ecosystem Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-amber-200 relative overflow-hidden"
            whileHover={{ 
              y: -10,
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 opacity-50"
              animate={{ 
                background: [
                  "linear-gradient(45deg, rgb(254, 243, 199), rgb(255, 237, 213))",
                  "linear-gradient(135deg, rgb(255, 237, 213), rgb(254, 215, 170))",
                  "linear-gradient(225deg, rgb(254, 215, 170), rgb(253, 186, 116))",
                  "linear-gradient(315deg, rgb(253, 186, 116), rgb(254, 243, 199))"
                ]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl md:text-5xl font-bold text-amber-900 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">One Ecosystem</span>, Infinite Possibilities
              </motion.h3>
              <motion.p 
                className="text-xl md:text-2xl text-amber-800 mb-10 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                Each NICOLE variant shares the same emotional intelligence core, privacy-first design, 
                and seamless integration capabilities. Your data and preferences sync across all environments.
              </motion.p>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <button className="magnetic-button bg-amber-700 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Join the Waitlist</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
