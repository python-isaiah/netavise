"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const automations = [
  {
    title: "Listing Sync & Cleanup",
    description:
      "Pushes accurate hours, address, menu link, and photos from one place.",
    whiteLabel: "Yes",
    icon: "📍",
  },
  {
    title: "Review Collection",
    description:
      "Auto-requests reviews from happy customers and drafts responses.",
    whiteLabel: "Yes",
    icon: "⭐",
  },
  {
    title: "Online Ordering Setup",
    description:
      "Connects an order-ahead tool (Square / Toast) and links it cleanly.",
    whiteLabel: "Partial",
    icon: "🛍️",
  },
  {
    title: "Social-to-Site Funnel",
    description:
      "Routes Instagram / Facebook traffic back to the owned website.",
    whiteLabel: "Yes",
    icon: "🔄",
  },
  {
    title: "Lead Capture",
    description:
      "Email/text list signup plus automated welcome and win-back sequences.",
    whiteLabel: "Yes",
    icon: "✉️",
  },
  {
    title: "Reporting Dashboard",
    description:
      "Weekly snapshot of traffic, reviews, orders, and key ops KPIs.",
    whiteLabel: "Yes",
    icon: "📊",
  },
  {
    title: "Ground-Up Web Builds",
    description:
      "We deploy a high-converting, fully owned central hub built specifically for local businesses.",
    whiteLabel: "Yes",
    icon: "🏗️",
  },
  {
    title: "Digital Revamps",
    description:
      "We take outdated, clunky sites and modernize them for speed, SEO, and mobile conversions.",
    whiteLabel: "Yes",
    icon: "✨",
  },
  {
    title: "Brand & Logo Kits",
    description:
      "Clean, professional branding packages that bridge the gap between your physical shop and digital presence.",
    whiteLabel: "Yes",
    icon: "🎨",
  },
];

export default function AutomationsGrid() {
  return (
    <section id="automations" className="py-24 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Toolkit
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-6">
            Built once, deployed perfectly every time.
          </p>

          {/* Swipe indicator hint with arrow for mobile/tablet users */}
          <div className="inline-flex lg:hidden items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium animate-pulse">
            <span>Swipe to explore toolkit</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ChevronRight size={14} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLLABLE CONTAINER: Horizontal scroll on mobile/tablet, multi-column wrap on large screens */}
      <div className="w-full overflow-x-auto scrollbar-none px-6 pb-6 pt-2">
        <div className="flex lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-max lg:w-full">
          {automations.map((item, index) => {
            const randomDelay = index * 0.15;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: randomDelay }}
                className="w-[300px] sm:w-[350px] lg:w-auto flex-shrink-0"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: randomDelay,
                  }}
                  className="h-full p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-white/30 transition-colors group backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 4 + (index % 3),
                        ease: "easeInOut",
                      }}
                      className="text-4xl mb-4 inline-block origin-bottom"
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 inline-block">
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