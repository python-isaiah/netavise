"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/ModalContext";

export default function SidePanel() {
  const { isSidePanelOpen, closeSidePanel } = useModal();

  return (
    <AnimatePresence>
      {isSidePanelOpen && (
        <>
          {/* Invisible backdrop to close when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidePanel}
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm"
          />

          {/* The Sliding Side Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 z-[9999] p-10 shadow-2xl flex flex-col justify-center"
          >
            {/* Glowing Accent */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />

            <button
              onClick={closeSidePanel}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center mb-6"
            >
              <span className="text-teal-400 text-2xl">✓</span>
            </motion.div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Audit Requested.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We've received your information. Our team is running a full
              diagnostic on your digital presence and will reach out shortly.
            </p>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="text-sm font-bold text-white mb-2">
                What happens next?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-teal-400">1.</span> We analyze your
                  listings & SEO.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-teal-400">2.</span> We identify revenue
                  leakage.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-teal-400">3.</span> We send your custom
                  roadmap.
                </li>
              </ul>
            </div>

            <button
              onClick={closeSidePanel}
              className="w-full bg-white/10 text-white font-bold py-4 rounded-xl mt-8 hover:bg-white/20 transition-all"
            >
              Back to site
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
