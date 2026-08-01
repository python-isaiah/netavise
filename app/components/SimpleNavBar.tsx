'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function SimpleNavbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center mt-6 px-4"
    >
      <motion.div 
        layout
        className={`flex items-center px-8 py-4 rounded-full border transition-all duration-500 ease-in-out backdrop-blur-xl ${
          isScrolled 
            ? 'bg-black/80 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-black/40 border-transparent shadow-none'
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-wide">
          <div className="w-6 h-6 bg-gradient-to-tr from-teal-400 to-purple-500 rounded-md" />
          Netavise
        </Link>
      </motion.div>
    </motion.nav>
  );
}