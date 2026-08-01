'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    number: "01",
    title: "Deploy the Foundation",
    subtitle: "The Finite Overhaul",
    description: "We don't do endless, dragging projects. Phase 1 has a definitive finish line. We seize control of your domain, build a high-converting proprietary site, untangle your broken listings, and seamlessly integrate your online ordering.",
    deliverables: ["Domain & Asset Ownership", "Custom Web Hub Deployment", "Menu & Ordering Integration", "Aggregator Cleanup"],
    isRecurring: false,
    color: "from-teal-400 to-teal-600"
  },
  {
    number: "02",
    title: "The Automated Pulse",
    subtitle: "Keep It Current",
    description: "Once the foundation is locked, we transition into the recurring heartbeat of your digital presence. This is ongoing, light-touch upkeep. We ensure your hours never lie, your reviews never go unanswered, and your local events are constantly broadcasted.",
    deliverables: ["Omnichannel Listing Sync", "Automated Review Collection", "On-Brand Response Drafting", "Menu & Post Upkeep"],
    isRecurring: true,
    color: "from-blue-400 to-blue-600"
  },
  {
    number: "03",
    title: "Scale & Dominate",
    subtitle: "The Growth Engine",
    description: "With a flawless baseline and a pulsing automated system, we turn our attention to acquisition. Once the foundation is solid, the focus shifts aggressively to bringing new people through your doors.",
    deliverables: ["Local SEO Amplification", "Social-to-Site Funnels", "Owned Audience Building", "Automated Win-Back Sequences"],
    isRecurring: true,
    color: "from-purple-400 to-purple-600"
  }
];

export default function PhaseStructure() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tracks how far the user has scrolled through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Maps the scroll progress to the height of the glowing line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-32 px-6 relative z-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">The Methodology</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Engineering your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Digital Dominance
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
            We lead with a brutal, finite win to prove our value, then seamlessly convert your business into a recurring, automated machine.
          </p>
        </div>

        <div className="relative">
          {/* The Background Track for the Timeline */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* The Glowing Animated Timeline Line */}
          <motion.div 
            className="absolute left-[27px] md:left-[39px] top-0 w-[2px] bg-gradient-to-b from-teal-400 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-0 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative z-10 pl-16 md:pl-24">
                
                {/* The Timeline Node / Number */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`absolute left-0 md:left-3 top-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#050505] border-2 border-white/20 flex items-center justify-center shadow-lg ${
                    index === 0 ? 'border-teal-500/50 text-teal-400' : 
                    index === 1 ? 'border-blue-500/50 text-blue-400' : 
                    'border-purple-500/50 text-purple-400'
                  }`}
                >
                  <span className="text-lg md:text-2xl font-black">{phase.number}</span>
                </motion.div>

                {/* The Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:bg-white/[0.04] transition-all hover:border-white/20 group relative overflow-hidden"
                >
                  {/* Subtle Background Glow inside the card */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-1">{phase.subtitle}</h4>
                        <h3 className="text-3xl font-extrabold text-white">{phase.title}</h3>
                      </div>
                      <span className={`inline-flex px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                        phase.isRecurring ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                      }`}>
                        {phase.isRecurring ? 'Recurring Lifecycle' : 'Finite Project'}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color}`} />
                          <span className="text-gray-300 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}