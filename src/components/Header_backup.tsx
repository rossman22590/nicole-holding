'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'NICOLE', href: '/nicole' },
    { name: 'Products', href: '/products' },
    { name: 'Devices', href: '/devices' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Safety', href: '/safety' },
    { name: 'About', href: '/about' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-blue-200/50 shadow-lg shadow-blue-500/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.320, 1] }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <motion.div 
            className="group relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="relative w-12 h-12 rounded-2xl overflow-hidden"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.span 
                  className="relative z-10 text-white font-bold text-2xl flex items-center justify-center h-full"
                >
                  N
                </motion.span>
              </motion.div>
              <motion.span 
                className={`font-bold text-xl ${isScrolled ? 'text-slate-800' : 'text-white'} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                NickCall
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-slate-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/pricing"
              className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`w-6 h-0.5 ${isScrolled ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className={`w-6 h-0.5 ${isScrolled ? 'bg-slate-800' : 'bg-white'} mt-1.5 transition-colors duration-300`}
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className={`w-6 h-0.5 ${isScrolled ? 'bg-slate-800' : 'bg-white'} mt-1.5 transition-colors duration-300`}
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <div className="pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="block py-4 text-slate-800 hover:text-blue-600 transition-colors text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Link
              href="/pricing"
              className="block w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center py-4 rounded-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
