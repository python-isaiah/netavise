'use client';

import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

export default function Hero() {
  const { openAuditModal } = useModal();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Immersive Glowing Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="z-10 max-w-5xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-teal-400" />
          <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Digital Services for Local Business</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          The New Standard For <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
            Local Business
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          We give great local businesses a digital presence — and back-office automation — that actually matches how good they are in person.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-50">
          
          {/* See Our Process - Smooth Scrolls to the Timeline */}
          <motion.a 
            href="#how-it-works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all w-full sm:w-auto block"
          >
            See Our Process
          </motion.a>
          
          {/* Book an Audit - Opens the Modal */}
          <motion.button 
            onClick={openAuditModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            Book an Audit
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}