"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SimpleNavBar from "../components/SimpleNavBar";

// This is your dynamic data array. Add new features here as we build them!
const demoFeatures = [
  {
    id: "review-router",
    title: "The Review Router",
    description:
      "Test the Reputation Management MVP. See how we filter 1-star reviews into private feedback and push 5-star reviews to Google.",
    href: "/review?customer_name=Demo%20User&order_id=0000",
    status: "Live",
    color: "from-teal-400 to-emerald-500",
    icon: "★",
  },
  {
    id: "revenue-loop",
    title: "Automated Revenue Loop",
    description:
      "A simulated 14-day SMS win-back sequence. Watch how the system automatically texts inactive customers with targeted offers to drive them back.",
    href: "/revenue-loop",
    status: "Live",
    color: "from-purple-400 to-pink-500",
    icon: "💬",
  },
  {
    id: "command-center",
    title: "Client Command Center",
    description:
      "The unified white-label dashboard. Experience exactly what your clients will see when they check their traffic, reviews, and revenue.",
    href: "/command-center",
    status: "Live",
    color: "from-blue-400 to-indigo-500",
    icon: "📊",
  },
  {
    id: "menu-sync",
    title: "Instant Menu Sync Engine",
    description:
      "Instantly push inventory updates, price changes, or flash items across QR codes and mobile storefronts in real-time.",
    status: "Live",
    href: "/menu-sync",
    color: "from-teal-400 to-blue-500",
    icon: "📋",
  },
  {
    id: "voice-agent",
    title: "AI Voice Receptionist & Booking",
    description:
      "Never miss a missed call. AI answers inbound calls 24/7, answers customer questions, and books tables instantly.",
    status: "Live",
    href: "/voice-agent",
    color: "from-emerald-400 to-teal-500",
    icon: "📞",
  },
  {
    id: "seo-autopilot",
    title: "AI Local SEO & Social Autopilot",
    description:
      "Dominate local search results. Auto-generate geo-targeted content and broadcast to Google Business & socials instantly.",
    status: "Live",
    href: "/seo-autopilot",
    color: "from-blue-400 to-indigo-500",
    icon: "🌐",
  },
  {
    id: "web-revamp",
    title: "Instant Website Revamp & Conversion Engine",
    description:
      "Turn sluggish legacy sites into blazing-fast, mobile-optimized conversion machines with instant ordering and booking flows.",
    status: "Live",
    href: "/web-revamp",
    color: "from-amber-400 to-orange-500",
    icon: "💻",
  },
  {
    id: "yield-optimizer",
    title: "AI Dynamic Pricing & Happy Hour Optimizer",
    description:
      "Fill empty tables during slow hours. Detect off-peak traffic lulls and auto-broadcast flash discounts to local subscribers.",
    status: "Live",
    href: "/yield-optimizer",
    color: "from-cyan-400 to-blue-500",
    icon: "📈",
  },
  {
  id: 'competitor-intel',
  title: 'AI Competitor Price & Offer Intel Radar',
  description: 'Monitor rival pricing shifts, social ad spending, and local promotions in real-time with autonomous AI counter-strategies.',
  status: 'Live',
  href: '/competitor-intel',
  color: 'from-orange-400 to-amber-500',
  icon: '🕵️‍♂️',
}
];

export default function DemoHubPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-teal-500/30 overflow-x-hidden pb-24">
      <SimpleNavBar />

      <section className="pt-40 px-6 max-w-6xl mx-auto relative z-10">
        {/* Immersive Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Live Playground
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            Experience the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Netavise Ecosystem.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Test drive the exact proprietary
            software we deploy to completely automate your customer retention
            and reputation.
          </motion.p>
        </div>

        {/* The Dynamic Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {demoFeatures.map((feature, index) => {
            const isLive = feature.status === "Live";

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Wrap in Link only if it's Live */}
                {isLive ? (
                  <Link href={feature.href} className="block h-full">
                    <DemoCard feature={feature} isLive={isLive} />
                  </Link>
                ) : (
                  <div className="h-full cursor-not-allowed opacity-75">
                    <DemoCard feature={feature} isLive={isLive} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// Extracted Card Component for clean code
function DemoCard({ feature, isLive }: { feature: any; isLive: boolean }) {
  return (
    <div
      className={`bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full flex flex-col relative overflow-hidden group transition-all duration-500 ${isLive ? "hover:bg-white/[0.05] hover:border-white/20" : ""}`}
    >
      {/* Hover Gradient Background */}
      {isLive && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
        />
      )}

      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          {feature.icon}
        </div>
        <span
          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isLive ? "bg-teal-500/20 text-teal-400 border border-teal-500/30" : "bg-blue-800 text-blue-300 border border-blue-700"}`}
        >
          {feature.status}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
        {feature.description}
      </p>

      {isLive && (
        <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
          Launch Demo <span>&rarr;</span>
        </div>
      )}
    </div>
  );
}
