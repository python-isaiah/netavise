"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: The Hard Truth */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-red-300 uppercase tracking-wider">
              The Revenue Leakage
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            You do the hard part well. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              The digital gap is costing you.
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Most local businesses master the product and the community. But
            where you actually lose customers is the easy part—scattered
            listings, wrong hours, no owned website, and zero automated
            follow-up.
          </p>

          {/* The Stacked Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stat 1: Listings */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-black text-red-400">73%</div>
              <h4 className="text-white font-bold">Loss of Trust</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Consumers who abandon a local brand if Google or Yelp show
                conflicting hours.
              </p>
            </div>

            {/* Stat 2: Fees */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-black text-orange-400">30%</div>
              <h4 className="text-white font-bold">3rd-Party Tax</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                The average commission taken by aggregators when you don't own
                your ordering.
              </p>
            </div>

            {/* Stat 3: SEO Gap */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-black text-purple-400">88%</div>
              <h4 className="text-white font-bold">Missed Local Intent</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Mobile users who search for a local business call or visit
                within 24 hours. If your SEO is invisible, they go to your
                competitor.
              </p>
            </div>

            {/* Stat 4: No Follow-up */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl font-black text-blue-400">80%</div>
              <h4 className="text-white font-bold">Uncaptured Foot Traffic</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Walk-in customers who leave without entering an automated
                follow-up or win-back sequence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Animated Data Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">
                Monthly Revenue Retention
              </h3>
              <span className="text-xs text-gray-500 font-mono">
                Simulated 30-Day Period
              </span>
            </div>

            <div className="space-y-8">
              {/* Chart Bar 1: The Old Way */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 font-medium">
                    The Old Way (Fragmented)
                  </span>
                  <span className="text-red-400 font-bold">
                    $14,200 Retained
                  </span>
                </div>
                <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden relative flex">
                  {/* Base Revenue */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-red-500/80 rounded-l-full"
                  />
                  {/* Lost to 3rd Party */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "30%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2 }}
                    className="h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-red-900/40 border-l border-red-500/50 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-[10px] text-red-200 whitespace-nowrap px-1">
                      Fees
                    </span>
                  </motion.div>
                  {/* Lost to Bad Listings / SEO */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "35%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
                    className="h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-orange-900/30 border-l border-orange-500/50 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-[10px] text-orange-200 whitespace-nowrap px-1">
                      Lost Traffic
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="h-px bg-white/10 w-full" />
                <span className="text-xs font-bold text-gray-600 uppercase">
                  VS
                </span>
                <div className="h-px bg-white/10 w-full" />
              </div>

              {/* Chart Bar 2: The Netavise Standard */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-teal-400 font-bold">
                    The Netavise Standard
                  </span>
                  <span className="text-teal-400 font-bold">
                    $22,500 Retained
                  </span>
                </div>
                <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-3 text-right">
                  * 100% owned ordering, synchronized omnichannel listings,
                  captured leads.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 max-w-4xl mx-auto"
      >
        <a href="/case-studies/cafe-united" className="block bg-white/[0.03] border border-white/10 hover:border-teal-500/30 hover:bg-white/[0.05] transition-all rounded-3xl p-6 md:p-8 group relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Featured Case Study</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Café UNITED</h3>
              <p className="text-gray-400">See how we recaptured $4,250/mo in lost aggregator fees.</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 group-hover:bg-teal-500 group-hover:text-black transition-all">
              &rarr;
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
