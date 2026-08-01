'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function RevenueLoopDemo() {
  const [day, setDay] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOptedIn, setIsOptedIn] = useState(false);

  const handleOptIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length > 9) setIsOptedIn(true);
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-hidden flex flex-col items-center justify-center p-6 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Link href="/demos" className="absolute top-8 left-8 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors z-50">
        &larr; Back to Demos
      </Link>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: The Controls */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">SMS Simulator</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4">The Automated Win-Back.</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Restaurants lose 80% of foot traffic simply because they never follow up. Watch how our automated system captures a customer and brings them back from the dead.
          </p>

          {!isOptedIn ? (
            <motion.form 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
              onSubmit={handleOptIn} className="space-y-4"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-sm text-gray-300 mb-4 font-medium">Step 1: Customer opts in at the counter for 10% off.</p>
                <input 
                  type="tel" 
                  required
                  placeholder="(555) 000-0000" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors mb-4" 
                />
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-xl transition-colors">
                  Join Loyalty List
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
              className="p-6 bg-white/5 border border-purple-500/30 rounded-2xl"
            >
              <p className="text-sm text-gray-300 mb-6 font-medium">Step 2: Fast forward time. See what happens when they don't return.</p>
              
              <div className="mb-2 flex justify-between items-center text-sm font-bold">
                <span className="text-gray-400">Day 1</span>
                <span className="text-purple-400 text-xl">Day {day}</span>
                <span className="text-gray-400">Day 14</span>
              </div>
              
              <input 
                type="range" 
                min="1" max="14" 
                value={day} 
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <p className="text-xs text-gray-500 mt-4 text-center">
                {day < 14 ? "System is monitoring customer activity..." : "Triggering automated SMS win-back sequence!"}
              </p>
            </motion.div>
          )}
        </div>

        {/* Right Side: The Mock iPhone */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[600px] bg-black border-[8px] border-gray-800 rounded-[3rem] relative shadow-2xl overflow-hidden flex flex-col">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20" />
            
            {/* Phone Screen Background */}
            <div className="flex-grow bg-[#1c1c1e] p-4 pt-12 flex flex-col">
              <div className="text-center text-gray-400 text-xs font-semibold mb-6">Today</div>
              
              <AnimatePresence>
                {isOptedIn && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, originX: 1, originY: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none self-end max-w-[80%] mb-4 text-sm shadow-md"
                  >
                    Opt-in successful. Enjoy 10% off today at Café UNITED!
                  </motion.div>
                )}

                {day === 14 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.9, originX: 0, originY: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="bg-gray-700 text-white p-3 rounded-2xl rounded-bl-none self-start max-w-[85%] text-sm shadow-md"
                  >
                    <p className="font-bold text-xs text-gray-400 mb-1">Café UNITED</p>
                    Hey! We miss you. ☕️ Show this text at the register today for a completely FREE coffee with any pastry purchase. See you soon!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}