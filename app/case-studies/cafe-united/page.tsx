"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useModal } from "../../context/ModalContext";

export default function CafeUnitedCaseStudy() {
  const { openAuditModal } = useModal();

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-teal-500/30 overflow-x-hidden pb-24">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 px-6 max-w-5xl mx-auto relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

        <Link
          href="/"
          className="text-teal-400 hover:text-teal-300 text-sm font-semibold mb-8 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 tracking-wide uppercase">
              Case Study
            </span>
            <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-medium text-teal-400 tracking-wide uppercase">
              Food & Beverage
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            How Café UNITED stopped bleeding revenue to 3rd-party apps.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            They had the best coffee in town, but conflicting Google hours and
            heavy reliance on aggregator apps were quietly suffocating their
            margins. Here is how we fixed the foundation.
          </p>
        </motion.div>
      </section>

      {/* The Metrics Dashboard */}
      <section className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              label: "Monthly Revenue Recaptured",
              value: "$4,250",
              color: "text-teal-400",
            },
            {
              label: "Owned Customer Database",
              value: "1,200+",
              color: "text-white",
            },
            {
              label: "Increase in Direct Orders",
              value: "314%",
              color: "text-blue-400",
            },
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-sm text-gray-500 font-medium mb-2 uppercase tracking-wider">
                {metric.label}
              </p>
              <p className={`text-5xl font-black ${metric.color}`}>
                {metric.value}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* The Breakdown */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10">
        <div className="space-y-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm">
                01
              </span>
              The Bleeding
            </h2>
            <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
              <p>
                Café UNITED was doing incredible volume in person, but their
                digital footprint was a liability. Their Google Business Profile
                had the wrong weekend hours, resulting in angry reviews from
                customers who showed up to locked doors.
              </p>
              <p>
                Worse, 80% of their online orders were running through DoorDash
                and UberEats, meaning they were surrendering 30% of their gross
                revenue on pickup orders from regular customers simply because
                they didn't have an owned digital storefront.
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
                02
              </span>
              The Foundation (Phase 1)
            </h2>
            <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
              <p>
                We executed a finite, 14-day deployment to seize control of
                their assets. We claimed and locked their domain, deployed a
                high-converting mobile-first website, and synchronized their
                hours across 40+ directories instantly.
              </p>
              <p>
                Most importantly, we integrated Square directly into their new
                site. We then placed QR codes in-store, routing foot traffic to
                their newly owned ordering system, immediately bypassing
                third-party fees.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm">
                03
              </span>
              The Automation (Phase 2)
            </h2>
            <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
              <p>
                With the foundation built, we converted them to our monthly
                automated retainer. As customers ordered through the new system,
                they were automatically dropped into a lead-capture database.
              </p>
              <p>
                Today, Café UNITED has an owned audience of over 1,200 locals.
                Our automated system sends a win-back text if a customer hasn't
                ordered in 14 days, resulting in a completely automated,
                hands-off revenue loop for the owner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-teal-500/20 rounded-3xl p-12 text-center backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want these results for your business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Stop guessing where you're losing money. Let us run a diagnostic on
            your digital footprint and show you exactly where the revenue is
            leaking.
          </p>
          <button
            onClick={openAuditModal}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all"
          >
            Book Your Free Audit
          </button>
        </motion.div>
      </section>
    </main>
  );
}
