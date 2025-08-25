'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SafetyPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dataDeleted, setDataDeleted] = useState(false);

  const handleDrainData = () => {
    setDataDeleted(true);
    setTimeout(() => setDataDeleted(false), 3000);
  };

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
            Your safety. Your data. {""}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your control.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Transparency isn&#39;t optional — it&#39;s built into every aspect of NICOLE AI. Experience complete control over your data and privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/demo"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try NICOLE Now
            </a>
            <a 
              href="/pricing"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Lifetime Access for $25
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Live Privacy Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what NICOLE knows and control every aspect of your data
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 bg-gray-100 p-2 rounded-2xl">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'dashboard' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Data Dashboard
              </button>
              <button
                onClick={() => setActiveTab('controls')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'controls' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Privacy Controls
              </button>
              <button
                onClick={() => setActiveTab('transparency')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'transparency' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Transparency Logs
              </button>
              <button
                onClick={() => setActiveTab('emergency')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'emergency' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Emergency Features
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[500px]">
              {activeTab === 'dashboard' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Data Overview</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Conversations</h4>
                      <div className="text-3xl font-bold text-blue-600">247</div>
                      <p className="text-sm text-blue-700">Total interactions</p>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-green-900 mb-2">Data Stored</h4>
                      <div className="text-3xl font-bold text-green-600">2.3MB</div>
                      <p className="text-sm text-green-700">Locally processed</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-purple-900 mb-2">Privacy Score</h4>
                      <div className="text-3xl font-bold text-purple-600">98/100</div>
                      <p className="text-sm text-purple-700">Excellent protection</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h5 className="font-semibold text-gray-900">Personal Preferences</h5>
                        <p className="text-sm text-gray-600">Communication style, topics of interest</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h5 className="font-semibold text-gray-900">Conversation History</h5>
                        <p className="text-sm text-gray-600">Last 30 days of interactions</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Export Data</button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h5 className="font-semibold text-gray-900">Emergency Contacts</h5>
                        <p className="text-sm text-gray-600">2 contacts configured</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Manage</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'controls' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy Controls</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Storage Location</h4>
                        <p className="text-gray-600">Choose where your data is processed and stored</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">Local Only</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">Cloud Sync</button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Emotional Analysis</h4>
                        <p className="text-gray-600">Allow NICOLE to analyze your emotional state</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Emergency Monitoring</h4>
                        <p className="text-gray-600">Monitor for distress signals and emergencies</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Analytics</h4>
                        <p className="text-gray-600">Share anonymized data to improve NICOLE</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transparency' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-time Transparency Logs</h3>
                  
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-blue-900">Emotional Analysis</span>
                          <span className="text-xs text-blue-600">2 minutes ago</span>
                        </div>
                        <p className="text-sm text-blue-700">Detected positive sentiment in your message about the project completion</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-green-900">Data Processing</span>
                          <span className="text-xs text-green-600">5 minutes ago</span>
                        </div>
                        <p className="text-sm text-green-700">Processed conversation locally, no data sent to cloud</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-purple-900">Memory Update</span>
                          <span className="text-xs text-purple-600">12 minutes ago</span>
                        </div>
                        <p className="text-sm text-purple-700">Updated preference: prefers detailed explanations for technical topics</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-yellow-900">Safety Check</span>
                          <span className="text-xs text-yellow-600">18 minutes ago</span>
                        </div>
                        <p className="text-sm text-yellow-700">Routine wellness check completed, all indicators normal</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'emergency' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Safety Features</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                      <h4 className="font-bold text-red-900 mb-4">🚨 Distress Detection</h4>
                      <ul className="space-y-2 text-sm text-red-700 mb-4">
                        <li>• Voice tone analysis for stress/panic</li>
                        <li>• Sudden silence detection</li>
                        <li>• Keyword-based emergency triggers</li>
                        <li>• Behavioral pattern anomalies</li>
                      </ul>
                      <div className="bg-red-100 rounded-lg p-3">
                        <p className="text-xs text-red-800">Status: Active • Last check: 30 seconds ago</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                      <h4 className="font-bold text-orange-900 mb-4">📞 Emergency Response</h4>
                      <ul className="space-y-2 text-sm text-orange-700 mb-4">
                        <li>• Automatic contact notification</li>
                        <li>• Location sharing (if enabled)</li>
                        <li>• Emergency services integration</li>
                        <li>• Medical information access</li>
                      </ul>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                        Configure Contacts
                      </button>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                      <h4 className="font-bold text-blue-900 mb-4">🩺 Health Monitoring</h4>
                      <ul className="space-y-2 text-sm text-blue-700 mb-4">
                        <li>• Emotional state tracking</li>
                        <li>• Sleep pattern analysis</li>
                        <li>• Stress level monitoring</li>
                        <li>• Wellness check-ins</li>
                      </ul>
                      <div className="bg-blue-100 rounded-lg p-3">
                        <p className="text-xs text-blue-800">Wellness Score: 85/100 • Trending positive</p>
                      </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                      <h4 className="font-bold text-green-900 mb-4">🔒 Privacy Protection</h4>
                      <ul className="space-y-2 text-sm text-green-700 mb-4">
                        <li>• Emergency data is encrypted</li>
                        <li>• Contacts only notified when needed</li>
                        <li>• Location data auto-deleted</li>
                        <li>• Full audit trail maintained</li>
                      </ul>
                      <div className="bg-green-100 rounded-lg p-3">
                        <p className="text-xs text-green-800">Privacy Score: 98/100 • Fully compliant</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Drain Data Demo */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ultimate Data Control
          </h2>
          <p className="text-xl text-red-700 mb-12">
            Need to delete everything instantly? One button, complete data removal.
          </p>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            {!dataDeleted ? (
              <>
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Data Deletion</h3>
                <p className="text-gray-600 mb-8">
                  This will permanently delete all your data, conversations, preferences, and settings. 
                  This action cannot be undone.
                </p>
                <button 
                  onClick={handleDrainData}
                  className="bg-red-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-all transform hover:scale-105"
                >
                  🗑️ Drain My Data
                </button>
                <p className="text-xs text-red-600 mt-4">*Demo button - no actual data will be deleted</p>
              </>
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">Data Successfully Deleted</h3>
                <p className="text-green-700 mb-4">
                  All your data has been permanently removed from our systems.
                </p>
                <div className="bg-green-50 rounded-lg p-4 text-sm text-green-800">
                  ✓ Conversations deleted<br/>
                  ✓ Preferences cleared<br/>
                  ✓ Emergency contacts removed<br/>
                  ✓ All traces eliminated
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Safety Promises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Safety Promises
            </h2>
            <p className="text-xl text-gray-600">
              These aren&#39;t just features — they&#39;re our fundamental commitments to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">NICOLE never takes without asking</h3>
              <p className="text-gray-600">Every piece of data, every permission, every interaction requires your explicit consent. No hidden collection, ever.</p>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You are in full control</h3>
              <p className="text-gray-600">Granular controls for every aspect of AI interaction. Set boundaries, customize experiences, and change settings anytime.</p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency is not optional</h3>
              <p className="text-gray-600">Real-time logs, clear explanations, and open documentation. You always know what NICOLE is doing and why.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience True AI Safety
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Try NICOLE and see how AI should work — with complete transparency and your control
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Try Safety Features
            </Link>
            <Link 
              href="/pricing" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
            >
              Get Lifetime Access - $25
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
