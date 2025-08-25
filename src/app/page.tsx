'use client';

import { useEffect } from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import ProductSpotlight from '../components/ProductSpotlight';
import FutureProducts from '../components/FutureProducts';
import DevicesPreview from '../components/DevicesPreview';
import SafetyFirst from '../components/SafetyFirst';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling setup
    const setupSmoothScroll = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis();

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (error) {
        console.log('Lenis not available, using default scroll');
      }
    };

    setupSmoothScroll();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cream-50 overflow-x-hidden">
      <Hero />
      <Mission />
      <ProductSpotlight />
      <FutureProducts />
      <DevicesPreview />
      <SafetyFirst />
    </main>
  );
}
