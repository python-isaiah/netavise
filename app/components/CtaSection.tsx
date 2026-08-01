'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';

export default function CtaSection() {
  const { openAuditModal } = useModal();

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-black/50 border border-white/10 p-12 md:p-20 text-center"
        >
          {/* Intense background glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-600/30 to-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to own your digital presence?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Stop letting scattered tools and broken listings cost you customers. Get a complete digital audit and see exactly what a repeatable, automated foundation looks like for your business.
            </p>
            
            {/* Book an Audit - Opens the Modal */}
            <button 
              onClick={openAuditModal}
              className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all relative z-50"
            >
              Book a Free Audit
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-tr from-teal-400 to-purple-500 rounded-sm" />
          Netavise
        </div>
        <p className="text-gray-500 text-sm">
          Build once. Deliver many. Own the relationship.
        </p>
        <div className="flex gap-6 text-sm text-gray-500 relative z-50">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </footer>
    </section>
  );
}