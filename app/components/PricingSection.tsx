'use client';

import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

export default function PricingSection() {
  const { openAuditModal } = useModal();

  return (
    <section id="pricing" className="py-32 px-6 relative z-10 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">The Investment</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Stop paying salaries for things <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            software can do better.
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-xl">
          We don't do hourly billing, and we don't do bloated retainers. We build the foundation once, then maintain it for a fraction of what an employee costs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* The Old Way (Human Hire) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0a0a] border border-red-500/20 rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-3xl rounded-full" />
          
          <h3 className="text-2xl font-bold text-white mb-2">The In-House Hire</h3>
          <div className="text-red-400 font-mono text-sm mb-8">Cost: $50,000+ / Year</div>
          
          <ul className="space-y-6">
            {[
              { title: "High Fixed Overhead", desc: "You pay full-time salaries, benefits, and taxes regardless of output." },
              { title: "Inevitable Human Error", desc: "Humans miss bad reviews, forget to update holiday hours, and let leads slip through the cracks." },
              { title: "Slow Execution", desc: "It takes months to build a functional digital ecosystem from scratch." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <span className="text-red-500 text-xs">✕</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* The Netavise Way */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/20 rounded-3xl p-10 relative overflow-hidden group hover:border-teal-500/50 transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full group-hover:bg-teal-500/20 transition-colors duration-700" />
          
          <h3 className="text-2xl font-bold text-white mb-2">The Netavise Partnership</h3>
          <div className="text-teal-400 font-bold text-sm mb-8 tracking-wide">One-Time Deployment + Light Monthly Retainer</div>
          
          <ul className="space-y-6">
            {[
              { title: "Massive Cost Savings", desc: "Save tens of thousands of dollars a year by replacing bloated salaries with hyper-efficient software." },
              { title: "Instant Optimizations", desc: "Flawless listing syncs, immediate automated review replies, and zero human error." },
              { title: "Automated Retention Loops", desc: "Our welcome and win-back sequences run 24/7, driving customers back to your door again and again." }
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

      </div>
      
      {/* Footer CTA of the Pricing Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center relative z-50"
      >
        <p className="text-gray-400 mb-6">Every business is different. Get a custom quote based on your exact needs.</p>
        <button 
          onClick={openAuditModal}
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all"
        >
          Book Your Free Audit
        </button>
      </motion.div>
    </section>
  );
}