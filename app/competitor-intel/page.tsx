'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavBar';

const mockCompetitors = [
  { name: "The Daily Grind Cafe", threat: "Medium", change: "Dropped cold brew price by $0.75", action: "AI suggests matching via loyalty perk" },
  { name: "Urban Bean Roastery", threat: "High", change: "Launched Instagram weekend ad campaign", action: "AI generated counter-ad deployed" },
  { name: "Cornerstone Bakery", threat: "Low", change: "Closed early on Sunday", action: "Opportunity to capture spillover traffic" }
];

export default function CompetitorIntelDemo() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [aiCounterStrategy, setAiCounterStrategy] = useState<string | null>(null);

  const handleRunScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setAiCounterStrategy(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setAiCounterStrategy(
        "⚡ Netavise Counter-Strategy: Competitor #1 lowered prices, but their customer ratings dropped 12% this week. Do NOT lower prices—instead, broadcast an SMS campaign highlighting your superior quality and artisan roast origin."
      );
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black relative overflow-hidden flex flex-col">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-orange-500/10 via-amber-500/10 to-red-500/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Consistent Navbar */}
      <SimpleNavbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-orange-400 transition-colors mb-8"
        >
          ← Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <span>⚡ Live Feature Module</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Competitor Price & Offer <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-red-500">Intelligence Radar</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Never get blindsided by local rivals again. Netavise continuously monitors competitor pricing, social ad spends, and promotional shifts, giving you autonomous counter-strategies.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Control Panel & Live Scanner (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-2">Local Radius Intelligence Scan</h2>
              <p className="text-sm text-gray-400 mb-6">Scan your 3-mile geographic zone for competitor price movements and active ads.</p>

              <button
                onClick={handleRunScan}
                disabled={isScanning}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mb-6"
              >
                {isScanning ? (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
                    <span>AI Crawling Local Competitors...</span>
                  </>
                ) : (
                  <>
                    <span>📡 Run Neighborhood Market Scan</span>
                  </>
                )}
              </button>

              <div className="space-y-3">
                {mockCompetitors.map((comp, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{comp.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                          comp.threat === 'High' ? 'bg-red-500/20 text-red-400' :
                          comp.threat === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {comp.threat} Threat
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{comp.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: AI Strategic Counter-Play Terminal (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[40px] p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Phone / Terminal Frame */}
              <div className="bg-[#0a0a0a] rounded-[32px] border border-white/10 p-6 min-h-[520px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Terminal Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Autonomous Strategy Engine</div>
                      <div className="text-sm font-bold text-white">Netavise AI Command Feed</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  </div>

                  <div className="space-y-4">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">AI Counter-Play Output</div>

                    <AnimatePresence>
                      {scanComplete && aiCounterStrategy ? (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="bg-gray-800 border border-orange-500/40 text-white p-4 rounded-2xl text-xs space-y-3 shadow-xl"
                        >
                          <div className="flex items-center justify-between text-[10px] text-orange-400 font-bold uppercase tracking-wider">
                            <span>⚡ Market Intelligence Report</span>
                            <span>Just now</span>
                          </div>
                          <p className="leading-relaxed text-gray-200">
                            {aiCounterStrategy}
                          </p>
                          <button
                            onClick={() => alert("Counter-strategy successfully deployed to executive dashboard!")}
                            className="w-full py-2.5 rounded-xl bg-orange-500 text-black font-extrabold text-xs shadow-md transition-all cursor-pointer hover:bg-orange-400"
                          >
                            Execute Counter-Strategy 🚀
                          </button>
                        </motion.div>
                      ) : (
                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-center text-gray-600 text-xs italic">
                          Click &quot;Run Neighborhood Market Scan&quot; to generate real-time AI competitive intelligence.
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Terminal Footer Status */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Status: {scanComplete ? '🟢 Intelligence Synced' : '⚪ Standby'}</span>
                  <span className="text-orange-400 font-semibold">Netavise Intel AI</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}