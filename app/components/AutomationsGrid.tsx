'use client';

import { motion } from 'framer-motion';

const automations = [
  { title: "Listing Sync & Cleanup", description: "Pushes accurate hours, address, menu link, and photos from one place.", whiteLabel: "Yes", icon: "📍" },
  { title: "Review Collection", description: "Auto-requests reviews from happy customers and drafts responses.", whiteLabel: "Yes", icon: "⭐" },
  { title: "Online Ordering Setup", description: "Connects an order-ahead tool (Square / Toast) and links it cleanly.", whiteLabel: "Partial", icon: "🛍️" },
  { title: "Social-to-Site Funnel", description: "Routes Instagram / Facebook traffic back to the owned website.", whiteLabel: "Yes", icon: "🔄" },
  { title: "Lead Capture", description: "Email/text list signup plus automated welcome and win-back sequences.", whiteLabel: "Yes", icon: "✉️" },
  { title: "Reporting Dashboard", description: "Weekly snapshot of traffic, reviews, orders, and key ops KPIs.", whiteLabel: "Yes", icon: "📊" },
  { title: "Ground-Up Web Builds", description: "We deploy a high-converting, fully owned central hub built specifically for local businesses.", whiteLabel: "Yes", icon: "🏗️" },
  { title: "Digital Revamps", description: "We take outdated, clunky sites and modernize them for speed, SEO, and mobile conversions.", whiteLabel: "Yes", icon: "✨" },
  { title: "Brand & Logo Kits", description: "Clean, professional branding packages that bridge the gap between your physical shop and digital presence.", whiteLabel: "Yes", icon: "🎨" }
];

export default function AutomationsGrid() {
  return (
    <section id="automations" className="py-24 px-6 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Toolkit</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built once, deployed perfectly every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((item, index) => {
            const randomDelay = index * 0.15; 
            
            return (
              // OUTER WRAPPER: Handles only the scroll reveal (Opacity stays at 1 permanently after this)
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: randomDelay }}
              >
                {/* INNER WRAPPER: Handles only the continuous breathing (Never touches opacity) */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: randomDelay,
                  }}
                  className="h-full p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-white/30 transition-colors group backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* THE HOP: The icon jumps quickly every few seconds */}
                    <motion.div 
                      animate={{ y: [0, -12, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 4 + (index % 3), // Staggers the hops based on column
                        ease: "easeInOut"
                      }}
                      className="text-4xl mb-4 inline-block origin-bottom"
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300">
                      White-label: {item.whiteLabel}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}