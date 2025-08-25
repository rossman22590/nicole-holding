'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navItems = [
    { name: 'NICOLE', href: '/nicole' },
    { name: 'Products', href: '/products' },
    { name: 'Devices', href: '/devices' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Safety', href: '/safety' },
    { name: 'About', href: '/about' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-visible ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-blue-200/50 shadow-lg shadow-blue-500/10' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.320, 1] }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center py-6 overflow-visible">
            {/* Logo */}
            <motion.div 
              className="group relative z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
                <motion.div 
                  className="relative w-12 h-12 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/IMG_9617.jpeg" 
                    alt="NICOLE Logo" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  NickCall
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 overflow-visible">
              {navItems.map((item) => (
                <motion.div key={item.name} className="relative">
                  <motion.div>
                    <Link 
                      href={item.href}
                      className={`inline-flex items-center whitespace-nowrap px-3 py-2 lg:px-4 lg:py-2 rounded-xl font-medium transition-all duration-200 bg-white border border-gray-200 shadow-sm hover:border-blue-300 hover:bg-blue-50 ${
                        isScrolled 
                          ? 'text-slate-700 hover:text-blue-600' 
                          : 'text-slate-700 hover:text-blue-600'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm lg:text-base`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <motion.div
              className="hidden md:block flex-shrink-0 ml-2"
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
              className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-6 h-0.5 bg-slate-900 block"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-slate-900 block mt-1.5"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-slate-900 block mt-1.5"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.320, 1] }}
            >
              <div className="p-6 pt-24">
                {/* Mobile Navigation Links */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-lg font-medium"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Link
                    href="/pricing"
                    className="block w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center py-4 rounded-xl font-semibold shadow-lg"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                </motion.div>

                {/* Close hint */}
                <motion.p
                  className="text-center text-sm text-gray-500 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Tap outside or press ESC to close
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
