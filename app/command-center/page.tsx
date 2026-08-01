'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- Mock Data Dictionaries ---
const dashboardData = {
  week: {
    orders: { value: "428", trend: "+12% this week", data: [40, 65, 45, 80, 55, 90, 75] },
    rating: { value: "4.9", trend: "+14 new reviews" },
    capture: { value: "68%", trend: "+5% vs last week" }
  },
  month: {
    orders: { value: "1,842", trend: "+24% this month", data: [120, 150, 110, 180, 210, 190, 250, 280, 310, 290] },
    rating: { value: "4.8", trend: "+52 new reviews" },
    capture: { value: "72%", trend: "+8% vs last month" }
  }
};

const initialReviews = [
  { id: 1, name: "Sarah M.", rating: 5, text: "Best coffee in town! Love the new ordering system.", time: "2 hours ago" },
  { id: 2, name: "David K.", rating: 5, text: "Super fast pickup, friendly staff. Highly recommend.", time: "5 hours ago" },
  { id: 3, name: "Emily R.", rating: 3, text: "Great pastries, but my order was slightly delayed today.", time: "1 day ago" },
];

export default function CommandCenterDemo() {
  const [timeframe, setTimeframe] = useState<'week' | 'month'>('week');
  const [reviews, setReviews] = useState(initialReviews);

  const currentData = dashboardData[timeframe];

  // Helper function to generate the SVG path for the line graph
  const generatePath = (dataPoints: number[]) => {
    const max = Math.max(...dataPoints) * 1.2; // Add 20% headroom
    return dataPoints.map((val, i) => {
      const x = (i / (dataPoints.length - 1)) * 100;
      const y = 100 - (val / max) * 100;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(" ");
  };

  const handleResolveReview = (id: number) => {
    setReviews(prev => prev.filter(review => review.id !== id));
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30 p-6 md:p-12 relative overflow-hidden">
      {/* Immersive Dashboard Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Back to Demos Button */}
      <Link href="/demos" className="absolute top-8 left-8 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors z-50 flex items-center gap-2">
        &larr; Back to Demos
      </Link>

      <div className="max-w-6xl mx-auto mt-16 relative z-10">
        
        {/* Dashboard Header & Interactive Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Command Center</h1>
            <p className="text-gray-400 text-sm">Welcome back, <span className="text-white font-semibold">Café UNITED</span>.</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Functional Timeframe Toggle */}
            <div className="bg-white/5 border border-white/10 rounded-full p-1 flex items-center backdrop-blur-sm">
              <button 
                onClick={() => setTimeframe('week')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${timeframe === 'week' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                7 Days
              </button>
              <button 
                onClick={() => setTimeframe('month')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${timeframe === 'month' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                30 Days
              </button>
            </div>
            
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-300 font-medium tracking-wide">Syncing Live</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div layout className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <h3 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-2">Total Orders</h3>
            <div className="text-4xl font-black text-white">{currentData.orders.value}</div>
            <p className="text-sm mt-3 font-medium text-blue-400">{currentData.orders.trend}</p>
          </motion.div>
          
          <motion.div layout className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <h3 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-2">Avg. Review Rating</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">{currentData.rating.value}</span>
              <span className="text-2xl text-yellow-400">★</span>
            </div>
            <p className="text-sm mt-3 font-medium text-yellow-400">{currentData.rating.trend}</p>
          </motion.div>

          <motion.div layout className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-md">
            <h3 className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-2">Customer Capture Rate</h3>
            <div className="text-4xl font-black text-white">{currentData.capture.value}</div>
            <p className="text-sm mt-3 font-medium text-teal-400">{currentData.capture.trend}</p>
          </motion.div>
        </div>

        {/* Functional Line Graph & Review Feed Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Animated SVG Line Graph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between min-h-[350px]"
          >
            <div className="mb-8 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Traffic & Orders</h3>
                <p className="text-sm text-gray-400">Your owned digital storefront growth.</p>
              </div>
            </div>
            
            <div className="relative h-48 w-full mt-auto">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                    <stop offset="100%" stopColor="#2dd4bf" /> {/* teal-400 */}
                  </linearGradient>
                </defs>
                
                {/* The Animated Line */}
                <motion.path
                  d={generatePath(currentData.orders.data)}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, d: generatePath(currentData.orders.data) }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500 font-medium px-1">
                <span>Start</span>
                <span>{timeframe === 'week' ? 'Past 7 Days' : 'Past 30 Days'}</span>
                <span>Today</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Live Review Feed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Action Center</h3>
              <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-bold">
                {reviews.length} Pending
              </span>
            </div>
            
            <div className="space-y-4 flex-grow overflow-y-auto pr-2">
              <AnimatePresence>
                {reviews.length > 0 ? reviews.map((review) => (
                  <motion.div 
                    key={review.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-black/40 border border-white/5 rounded-2xl p-4 relative group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-sm text-gray-200">{review.name}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, starIdx) => (
                          <span key={starIdx} className={`text-xs ${starIdx < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 italic mb-4">"{review.text}"</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 font-medium">{review.time}</span>
                      
                      {/* Functional Resolve Button */}
                      <button 
                        onClick={() => handleResolveReview(review.id)}
                        className="text-xs bg-white/10 hover:bg-teal-500 hover:text-black text-gray-300 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                      >
                        Resolve
                      </button>
                    </div>
                  </motion.div>
                )) : (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center opacity-50 py-10"
                  >
                    <span className="text-4xl mb-2">🎉</span>
                    <p className="text-sm text-gray-400">All feedback resolved.<br/>Inbox zero achieved.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}