'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "Do I own my website and domain if I cancel?",
    answer: "Yes, 100%. We believe in earning your business every month, not holding it hostage. If you ever decide to leave, we hand over full ownership of your domain, website, and all connected accounts. You own the foundation we build."
  },
  {
    question: "Do I have to switch my POS or ordering system?",
    answer: "No. We integrate seamlessly with the tools you already use (like Square, Toast, or Clover). We build a clean digital storefront that routes customers directly into your existing operational flow, eliminating 3rd-party aggregator fees where possible."
  },
  {
    question: "What exactly happens after Phase 1?",
    answer: "Phase 1 is the heavy lifting (building the site, fixing listings, setting up the ordering flow). Once that finishes, we move to a much smaller monthly retainer. This covers continuous listing synchronization, review management, hosting, security, and deploying your automated win-back emails to keep customers returning."
  },
  {
    question: "Are there any hidden fees or commission cuts?",
    answer: "Absolutely not. We charge a flat, transparent fee for the initial deployment and a flat monthly retainer for upkeep. We do not take a percentage of your online orders. The revenue you generate through the foundation we build belongs entirely to you."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 relative z-10 max-w-4xl mx-auto">
      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-teal-400" />
          <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Common Questions</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Clear answers for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            serious operators.
          </span>
        </h2>
      </div>

      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 backdrop-blur-md ${
                isOpen ? 'bg-white/10 border-teal-500/50' : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-teal-400' : 'text-gray-500'}`}>
                  +
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}