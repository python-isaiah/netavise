'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { openAuditModal } = useModal(); 

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center mt-6 px-4"
      >
        <motion.div 
          layout
          className={`flex items-center justify-between px-6 md:px-8 py-4 rounded-full border transition-all duration-500 ease-in-out backdrop-blur-xl ${
            isScrolled 
              ? 'w-full max-w-3xl bg-black/80 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
              : 'w-full max-w-6xl bg-black/40 border-transparent shadow-none'
          }`}
        >
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-wide relative z-50">
            <div className="w-6 h-6 bg-gradient-to-tr from-teal-400 to-purple-500 rounded-md" />
            Netavise
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="/#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="/#automations" className="hover:text-white transition-colors">Automations</a>
            
            
            
            
            
            {/* THE NEW LIVE DEMO HUB LINK */}
            <Link 
              href="/demos" 
              className="hover:text-teal-400 text-teal-500 font-semibold transition-colors flex items-center gap-1"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Live Demos
            </Link>

            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <button 
              onClick={openAuditModal} 
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 hover:scale-105 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 relative z-50 focus:outline-none"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <motion.span 
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} 
                className="w-full h-0.5 bg-white block origin-left transition-all"
              />
              <motion.span 
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} 
                className="w-4/5 h-0.5 bg-white block transition-all"
              />
              <motion.span 
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0, width: isMobileMenuOpen ? '100%' : '60%' }} 
                className="h-0.5 bg-white block origin-left transition-all"
              />
            </div>
          </button>
        </motion.div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-3xl flex flex-col items-center justify-center px-6"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col items-center space-y-8 text-2xl font-bold text-gray-300 relative z-10 w-full">
              <a href="/#how-it-works" onClick={toggleMobileMenu} className="hover:text-white transition-colors capitalize tracking-wide border-b border-white/5 w-full text-center pb-4">How it works</a>
              <a href="/#automations" onClick={toggleMobileMenu} className="hover:text-white transition-colors capitalize tracking-wide border-b border-white/5 w-full text-center pb-4">Automations</a>
              
              {/* THE NEW MOBILE LIVE DEMO HUB LINK */}
              <Link 
                href="/demos" 
                onClick={toggleMobileMenu}
                className="text-teal-400 hover:text-teal-300 transition-colors capitalize tracking-wide border-b border-white/5 w-full text-center pb-4 flex items-center justify-center gap-2"
              >
                <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                Live Demos
              </Link>

              <a href="/#pricing" onClick={toggleMobileMenu} className="hover:text-white transition-colors capitalize tracking-wide border-b border-white/5 w-full text-center pb-4">Pricing</a>
              
              <button 
                onClick={() => { toggleMobileMenu(); openAuditModal(); }}
                className="w-full max-w-xs bg-gradient-to-r from-teal-500 to-blue-600 text-white py-5 rounded-full mt-8 text-xl shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-105 transition-transform"
              >
                Book Your Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}