'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavBar';

export default function WebRevampDemo() {
  const [isModernized, setIsModernized] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-amber-500 selection:text-black relative overflow-hidden flex flex-col">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-red-500/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Consistent Navbar */}
      <SimpleNavbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-amber-400 transition-colors mb-8"
        >
          ← Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <span>⚡ Live Feature Module</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Instant Website Revamp & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">Conversion Engine</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Most local business websites leak 70% of their visitors due to slow load speeds, broken mobile layouts, and zero conversion prompts. Toggle below to witness the Netavise transformation.
          </p>
        </div>

        {/* Control Bar: Toggle Between Legacy vs Modernized */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-1">Live Storefront State Simulator</h2>
            <p className="text-sm text-gray-400">Switch between what local businesses currently have vs. what Netavise deploys.</p>
          </div>

          <div className="flex items-center p-1.5 bg-black/60 border border-white/10 rounded-2xl w-full md:w-auto">
            <button
              onClick={() => setIsModernized(false)}
              className={`flex-1 md:flex-initial px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                !isModernized
                  ? 'bg-red-500/20 border border-red-500/40 text-red-300 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⚠️ Outdated Legacy Site
            </button>
            <button
              onClick={() => setIsModernized(true)}
              className={`flex-1 md:flex-initial px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isModernized
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⚡ Netavise Revamp
            </button>
          </div>
        </div>

        {/* Main Display Grid: Performance Metrics vs Interactive Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Performance Metrics Comparison (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md space-y-6">
              <h3 className="text-lg font-bold">Performance Breakdown</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-gray-400">Mobile Page Speed</span>
                    <span className={isModernized ? 'text-amber-400 font-mono font-bold' : 'text-red-400 font-mono font-bold'}>
                      {isModernized ? '99 / 100 (Blazing)' : '38 / 100 (Sluggish)'}
                    </span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${isModernized ? 'bg-amber-400' : 'bg-red-500'}`}
                      animate={{ width: isModernized ? '99%' : '38%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-gray-400">Conversion Rate</span>
                    <span className={isModernized ? 'text-amber-400 font-mono font-bold' : 'text-red-400 font-mono font-bold'}>
                      {isModernized ? '8.4% (Optimized)' : '1.2% (Leaking)'}
                    </span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${isModernized ? 'bg-amber-400' : 'bg-red-500'}`}
                      animate={{ width: isModernized ? '84%' : '12%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-gray-400">Online Ordering / Booking</span>
                    <span className={isModernized ? 'text-amber-400 font-bold' : 'text-red-400 font-bold'}>
                      {isModernized ? 'Instant 1-Click Flow' : 'PDF Menu / Dead Voicemail'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
                <span className="font-bold">💡 Sales Takeaway:</span> When you show local owners that their current site scores a 38 on mobile speed while competitors score a 99, they immediately understand why they are losing revenue.
              </div>
            </div>
          </div>

          {/* Right Side: Live Interactive Browser Mockup (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[32px] p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="bg-black/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-400 bg-black/40 px-4 py-1 rounded-lg border border-white/5">
                    {isModernized ? 'https://cafeunited.com (Netavise Optimized)' : 'https://cafe-united-old.com (Legacy Site)'}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isModernized ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isModernized ? 'LIVE V2.4' : 'LEGACY'}
                  </span>
                </div>

                {/* Simulated Browser Viewport */}
                <div className="p-6 md:p-8 min-h-[440px] flex flex-col justify-between transition-all">
                  
                  <AnimatePresence mode="wait">
                    {!isModernized ? (
                      /* OUTDATED LEGACY VIEW */
                      <motion.div
                        key="legacy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6 text-gray-400 font-serif"
                      >
                        <div className="border-b border-dashed border-gray-700 pb-4 text-center">
                          <h4 className="text-xl font-bold text-gray-300">WELCOME TO CAFE UNITED HOME PAGE!!!</h4>
                          <p className="text-xs text-gray-500 mt-1">Est. 2011 • Call us at 555-0192 (Please leave message)</p>
                        </div>

                        <div className="bg-red-950/20 border border-red-500/30 p-4 rounded-lg text-center text-xs text-red-300">
                          ⚠️ Warning: PDF Menu is currently unreadable on mobile devices.
                        </div>

                        <div className="flex justify-center gap-4 text-xs font-sans">
                          <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded">Home</span>
                          <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded">About Us</span>
                          <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded">Directions</span>
                        </div>
                      </motion.div>
                    ) : (
                      /* NETAVISE MODERNIZED VIEW */
                      <motion.div
                        key="modern"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6 font-sans"
                      >
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                          <div>
                            <div className="text-xs text-amber-400 font-mono font-bold uppercase tracking-widest">Café UNITED</div>
                            <h4 className="text-2xl font-extrabold text-white mt-0.5">Artisan Coffee & Kitchen</h4>
                          </div>
                          <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs shadow-md">
                            Order Now 🚀
                          </span>
                        </div>

                        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-5 rounded-2xl flex items-center justify-between">
                          <div>
                            <div className="text-xs text-amber-400 font-bold mb-1">⚡ Instant QR Table Ordering Active</div>
                            <div className="text-sm font-bold text-white">Skip the line. Order right from your phone.</div>
                          </div>
                          <span className="px-4 py-2 bg-amber-500 text-black font-bold text-xs rounded-xl">Scan & Order</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="font-bold text-white mb-0.5">Signature Latte</div>
                            <div className="text-amber-400 font-mono">$6.50 • Ready in 4m</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="font-bold text-white mb-0.5">Almond Croissant</div>
                            <div className="text-amber-400 font-mono">$4.75 • Freshly Baked</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Browser Footer Status */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>Engine: {isModernized ? 'Netavise High-Speed Edge' : 'Legacy Shared Hosting'}</span>
                    <span className={isModernized ? 'text-amber-400' : 'text-red-400'}>
                      {isModernized ? 'Conversion Ready' : 'High Bounce Rate'}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}