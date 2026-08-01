'use client';

import { motion } from 'framer-motion';

export default function DashboardSection() {
  return (
    <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: The Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">The Command Center</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Total clarity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Zero dashboard fatigue.
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            You don't need to learn another software stack, and you shouldn't have to hunt for your own metrics. We consolidate everything into a single, white-labeled weekly snapshot.
          </p>
          
          <ul className="space-y-6">
            {[
              { title: "Consolidated KPIs", desc: "Track foot traffic, online orders, and listing views in one clean interface." },
              { title: "Review Management", desc: "See your average rating climb across Google, Yelp, and Apple simultaneously." },
              { title: "Automated Weekly Delivery", desc: "We push the insights directly to your inbox every Friday. No logging in required." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                  <span className="text-teal-400 text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: The Mock Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-3xl pointer-events-none" />
          
          <div className="relative z-10">
            {/* Mock Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-lg" />
                <span className="font-bold text-white tracking-wide">Netavise Pulse</span>
              </div>
              <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">This Week</span>
            </div>

            {/* Mock KPI Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">Total Orders</div>
                <div className="text-2xl font-black text-white">428</div>
                <div className="text-xs text-teal-400 mt-2 font-medium">↑ 12% vs last week</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">New Reviews</div>
                <div className="text-2xl font-black text-white">14</div>
                <div className="text-xs text-teal-400 mt-2 font-medium">Avg 4.9 Stars</div>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-40 flex flex-col justify-end gap-2 relative overflow-hidden">
              <div className="absolute top-4 left-5 text-xs text-gray-500 uppercase tracking-wider font-semibold">Customer Capture Rate</div>
              <div className="flex items-end justify-between h-24 gap-2 mt-4">
                {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1), type: "spring" }}
                    className="w-full bg-gradient-to-t from-blue-600/50 to-teal-400/80 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}