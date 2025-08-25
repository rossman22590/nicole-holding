'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PricingPage() {
  const [lifetimeSlots, setLifetimeSlots] = useState(847392); // Mock counter
  const totalSlots = 1000000;
  const remainingSlots = totalSlots - lifetimeSlots;
  const percentageClaimed = (lifetimeSlots / totalSlots) * 100;

  // Mock real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLifetimeSlots(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section (match Devices/Products style) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-28 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            No tiers, no hidden fees, no subscriptions. Everyone gets the full NICOLE AI experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#lifetime"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Lifetime Access
            </a>
            <a 
              href="/demo"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try NICOLE Now
            </a>
          </div>
        </div>
      </section>

      {/* Lifetime Counter */}
      <section id="lifetime" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🔥 Limited Time: Lifetime Access
            </h2>
            <div className="text-6xl md:text-8xl font-bold mb-4">
              $25
            </div>
            <p className="text-xl md:text-2xl mb-8">
              For the first 1 million users only
            </p>
            
            {/* Counter */}
            <div className="bg-white/20 rounded-2xl p-6 mb-8">
              <div className="text-2xl font-bold mb-4">
                {remainingSlots.toLocaleString()} spots remaining
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 mb-2">
                <div 
                  className="bg-white h-4 rounded-full transition-all duration-1000" 
                  style={{width: `${percentageClaimed}%`}}
                ></div>
              </div>
              <div className="text-sm opacity-80">
                {lifetimeSlots.toLocaleString()} / {totalSlots.toLocaleString()} claimed
              </div>
            </div>

            <Link 
              href="/checkout" 
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Secure Your Lifetime Access
            </Link>
            <p className="text-sm mt-4 opacity-80">
              After 1M users: $25/year • No price increases for lifetime members
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything Included, Forever
            </h2>
            <p className="text-xl text-gray-600">
              No feature restrictions, no usage limits, no surprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full AI Capabilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Emotional intelligence</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Advanced reasoning</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Creative assistance</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Problem solving</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Communication</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>50+ languages</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Real-time translation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Cultural context</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Voice & text</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>End-to-end encryption</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Data transparency</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Instant data deletion</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Local processing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Platform Access</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Web, mobile, desktop</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Sync across devices</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Offline capabilities</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>API access</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Distress detection</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Emergency contacts</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Location services</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>24/7 monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future Updates</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Industry modules</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Hardware integration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>New capabilities</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Free forever</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Lifetime Access?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other AI Assistants</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Monthly subscriptions ($20-50/month)
                </li>
                <li className="flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Usage limits and restrictions
                </li>
                <li className="flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No emotional intelligence
                </li>
                <li className="flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Limited privacy controls
                </li>
                <li className="flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Price increases over time
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-red-800 font-semibold">Total cost over 5 years: $1,200 - $3,000</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">NICOLE AI Lifetime</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One-time payment of $25
                </li>
                <li className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited usage forever
                </li>
                <li className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced emotional intelligence
                </li>
                <li className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete privacy control
                </li>
                <li className="flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All future updates included
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold">Total cost forever: $25</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens after 1 million users?</h3>
              <p className="text-gray-600">After we reach 1 million lifetime users, new users will pay $25 per year. Lifetime members will never pay again and get all future updates for free.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is there really no catch?</h3>
              <p className="text-gray-600">No catch. We believe in transparent pricing and building long-term relationships with our users. The lifetime price helps us fund development while ensuring accessibility.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What if I&#39;m not satisfied?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee. If NICOLE doesn&#39;t meet your expectations, we&#39;ll refund your $25, no questions asked.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Will my data be safe?</h3>
              <p className="text-gray-600">Absolutely. Your privacy and data security are our top priorities. You have complete control over your data with transparent management and instant deletion options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don&#39;t Miss Out
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join {lifetimeSlots.toLocaleString()} others who&#39;ve already secured their lifetime access
          </p>
          <Link 
            href="/checkout" 
            className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Lifetime Access for $25
          </Link>
          <p className="text-sm text-blue-100 mt-4">
            30-day money-back guarantee • Secure payment • Instant access
          </p>
        </div>
      </section>
 
    </div>
  );
}
