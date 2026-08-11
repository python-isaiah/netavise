'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavBar';

export default function YieldOptimizerDemo() {
  const [trafficHour, setTrafficHour] = useState(16); // 4:00 PM default (slow period)
  const [isSurgeActive, setIsSurgeActive] = useState(false);
  const [broadcastType, setBroadcastType] = useState<'slow' | 'peak' | null>(null);

  const isPeak = trafficHour >= 18 || trafficHour <= 13; // Dinner/Lunch rush vs Slow afternoon

  const handleTriggerSurge = () => {
    setIsSurgeActive(true);
    setBroadcastType(isPeak ? 'peak' : 'slow');
    setTimeout(() => {
      setBroadcastType(null);
    }, 4500);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black relative overflow-hidden flex flex-col">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-teal-500/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Consistent Navbar */}
      <SimpleNavbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors mb-8"
        >
          ← Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <span>⚡ Live Feature Module</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Dynamic Yield & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">Happy Hour Optimizer</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Empty tables during off-peak hours destroy profit margins. Watch how Netavise detects slow foot-traffic windows and triggers dynamic pricing contextually.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Control Panel & Timeline Slider (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Traffic Hour Simulator Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Storefront Traffic Forecaster</h2>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {trafficHour}:00 {trafficHour >= 12 ? 'PM' : 'AM'}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-6">Drag the clock slider to simulate off-peak lulls vs. peak dinner hours.</p>

              <div className="space-y-4 mb-8">
                <input
                  type="range"
                  min="10"
                  max="22"
                  value={trafficHour}
                  onChange={(e) => {
                    setTrafficHour(Number(e.target.value));
                    setIsSurgeActive(false);
                    setBroadcastType(null);
                  }}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>10 AM</span>
                  <span className={trafficHour >= 14 && trafficHour <= 17 ? 'text-cyan-400 font-bold' : ''}>4 PM (Slow Lull)</span>
                  <span>10 PM</span>
                </div>
              </div>

              {/* Contextual Warning */}
              {!isPeak ? (
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 text-xs mb-6 space-y-1">
                  <div className="font-bold uppercase tracking-wider text-[10px] text-cyan-400">⚡ Off-Peak Window Detected</div>
                  <p>Foot traffic is slow. AI recommends a Happy Hour discount pulse to fill seats.</p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs mb-6 space-y-1">
                  <div className="font-bold uppercase tracking-wider text-[10px] text-amber-400">🔥 Peak Dinner Rush Active</div>
                  <p>Storefront is packed at 95% capacity. AI will pivot to a Priority Queue / VIP Perk broadcast.</p>
                </div>
              )}

              <button
                onClick={handleTriggerSurge}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isPeak ? '⚡ Trigger Peak Priority VIP Pulse' : '⚡ Broadcast Happy Hour Flash Discount'}</span>
              </button>
            </div>

            {/* Projected Revenue Boost Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold mb-2">Yield Optimization Metrics</h3>
              <p className="text-xs text-gray-400 mb-6">Estimated weekly recovery from automated traffic balancing.</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-mono">Slow Hours Recovery</div>
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">+34%</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Tables filled during lulls</div>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-mono">Monthly Revenue Lift</div>
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">+$4,250</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Pure incremental profit</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Live Interactive Phone Display (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[40px] p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Phone Frame */}
              <div className="bg-[#0a0a0a] rounded-[32px] border border-white/10 p-6 min-h-[520px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Phone Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Customer SMS Blast</div>
                      <div className="text-sm font-bold text-white">Café UNITED VIP Feed</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Pricing Menu Transformation Preview */}
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Live Digital Menu Pricing</div>
                    
                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Signature Truffle Latte</div>
                        <div className="text-[10px] text-gray-400">House Cold Brew & Foam</div>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-mono font-bold ${isSurgeActive && broadcastType === 'slow' ? 'text-cyan-400 line-through opacity-50 block text-[10px]' : 'text-cyan-400'}`}>
                          $6.50
                        </span>
                        {isSurgeActive && broadcastType === 'slow' && (
                          <span className="text-xs font-mono font-bold text-emerald-400">$4.50 (Happy Hour)</span>
                        )}
                        {isSurgeActive && broadcastType === 'peak' && (
                          <span className="text-xs font-mono font-bold text-amber-400">$6.50 (Prime Hours)</span>
                        )}
                      </div>
                    </div>

                    {/* Contextual Broadcast SMS Alert */}
                    <AnimatePresence>
                      {broadcastType === 'slow' && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="bg-gray-800 border border-cyan-500/30 text-white p-4 rounded-2xl text-xs space-y-2 shadow-lg"
                        >
                          <div className="flex items-center justify-between text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                            <span>⚡ Happy Hour Flash Alert (Off-Peak)</span>
                            <span>Just now</span>
                          </div>
                          <p className="leading-relaxed">
                            &quot;Beat the afternoon slump! Stop by Café UNITED right now for $4.50 Truffle Lattes and half-off bakery items until 6 PM. See you soon! ☕✨&quot;
                          </p>
                        </motion.div>
                      )}

                      {broadcastType === 'peak' && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="bg-gray-800 border border-amber-500/30 text-white p-4 rounded-2xl text-xs space-y-2 shadow-lg"
                        >
                          <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                            <span>🔥 Dinner Rush VIP Pass (Peak)</span>
                            <span>Just now</span>
                          </div>
                          <p className="leading-relaxed">
                            &quot;We are live and buzzing for dinner at Café UNITED! Show this text to our host at the door to jump the line and secure priority seating for your party tonight. 🍷🍽️&quot;
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Footer Status */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Status: {isSurgeActive ? (broadcastType === 'slow' ? '🟢 Off-Peak Discount Fired' : '🔥 Peak VIP Pass Fired') : '⚪ Standard Operation'}</span>
                  <span className="text-cyan-400 font-semibold">Netavise Yield AI</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}