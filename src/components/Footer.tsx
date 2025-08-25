'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "NICOLE AI", href: "/nicole", icon: "🤖" },
        { name: "Future Products", href: "/future-products", icon: "🚀" },
        { name: "Devices", href: "/devices", icon: "📱" },
        { name: "Roadmap", href: "/roadmap", icon: "🗺️" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about", icon: "🏢" },
        { name: "Safety", href: "/safety", icon: "🛡️" },
        { name: "Pricing", href: "/pricing", icon: "💰" },
        { name: "Contact", href: "/contact", icon: "📧" }
      ]
    }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Legal", href: "/legal" }
  ];

  return (
    <footer ref={ref} className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-5"></div>
      <motion.div 
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-full filter blur-3xl opacity-15"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, 40, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">N</span>
              </motion.div>
              <motion.span 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                NickCall Technology
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-white/70 mb-8 max-w-md text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building the most emotionally intelligent, safety-focused, and trustworthy AI ecosystem. 
              <span className="text-white font-semibold"> AI you can trust. A future you can shape.</span>
            </motion.p>
            
            <motion.div 
              className="space-y-3 text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.p whileHover={{ x: 5, color: '#ffffff' }}>
                <strong className="text-white">Development:</strong> NickCall Technology for the Future LLC
              </motion.p>
              <motion.p whileHover={{ x: 5, color: '#ffffff' }}>
                <strong className="text-white">IP Owner:</strong> Archene Holdings (Pty) Ltd
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + sectionIndex * 0.2, duration: 0.8 }}
            >
              <motion.h3 
                className="text-xl font-bold text-white mb-6"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + sectionIndex * 0.2 + linkIndex * 0.1, duration: 0.6 }}
                  >
                    <Link 
                      href={link.href} 
                      className="group flex items-center space-x-3 text-white/70 hover:text-white transition-all duration-300"
                    >
                      <motion.span 
                        className="text-lg"
                        whileHover={{ scale: 1.3, rotate: 10 }}
                      >
                        {link.icon}
                      </motion.span>
                      <motion.span 
                        className="group-hover:text-white transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-6 text-white/60"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {legalLinks.map((link, index) => (
                <motion.div key={link.name} whileHover={{ y: -2 }}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-white/60 text-center md:text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              © 2024 NickCall Technology for the Future LLC. All rights reserved.
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 text-white/40 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            whileHover={{ scale: 1.02, color: '#ffffff' }}
          >
            Intellectual Property licensed from Archene Holdings (Pty) Ltd
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </footer>
  );
}
