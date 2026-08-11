'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavBar';

const mockKeywords = [
  { term: "Best brunch near me", rank: "#1", change: "+4 spots", volume: "18.4k/mo" },
  { term: "Late night coffee shop", rank: "#2", change: "+2 spots", volume: "9.1k/mo" },
  { term: "Private event space Downtown", rank: "#1", change: "+6 spots", volume: "4.3k/mo" },
];

export default function SeoAutopilotDemo() {
  const [targetCity, setTargetCity] = useState("Downtown");
  const [businessType, setBusinessType] = useState("Artisan Café & Bakery");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);
  const [publishStatus, setPublishStatus] = useState<string | null>(null);

  const handleGenerateContent = () => {
    setIsGenerating(true);
    setGeneratedPost(null);
    setPublishStatus(null);

    setTimeout(() => {
      setGeneratedPost(
        `🚨 Weekend Special Alert in ${targetCity}! Looking for the freshest pastries and house-roasted cold brews? Drop by ${businessType} today and mention this post for a free artisanal upgrade with any breakfast order. Open until 10 PM! ☕🥐`
      );
      setIsGenerating(false);
    }, 1500);
  };

  const handlePublishAll = () => {
    setPublishStatus("Deploying live to Google Business Profile, Instagram, and Facebook simultaneously...");
    setTimeout(() => {
      setPublishStatus("Successfully broadcasted across 3 channels! Local SEO ranking updated.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-black relative overflow-hidden flex flex-col">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-teal-500/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Consistent Navbar */}
      <SimpleNavbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          ← Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <span>⚡ Live Feature Module</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Local SEO & Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Autopilot</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Dominate local search results without hiring an expensive marketing agency. Watch how Netavise auto-generates geo-targeted content and climbs Google map rankings on autopilot.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Control Panel & Generator (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Ranking Tracker Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">Local Map Pack Rankings</h2>
                  <p className="text-xs text-gray-400 mt-1">Real-time keyword tracking for your storefront.</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  🟢 100% Dominating
                </span>
              </div>

              <div className="space-y-3">
                {mockKeywords.map((kw, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{kw.term}</div>
                      <div className="text-[11px] text-gray-400 font-mono mt-0.5">Search Volume: {kw.volume}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-blue-400 font-mono">{kw.rank}</div>
                      <div className="text-[10px] text-emerald-400 font-mono">{kw.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Content Generator Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-2">AI Geo-Targeted Content Generator</h2>
              <p className="text-sm text-gray-400 mb-6">Instantly create localized social updates optimized for local search algorithms.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Target Location</label>
                  <input
                    type="text"
                    value={targetCity}
                    onChange={(e) => setTargetCity(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Business Type</label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerateContent}
                disabled={isGenerating}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    <span>AI Generating Optimized Post...</span>
                  </>
                ) : (
                  <>
                    <span>✨ Generate High-Intent SEO Post</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Side: Live Multi-Channel Preview Phone (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[40px] p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Phone Frame */}
              <div className="bg-[#0a0a0a] rounded-[32px] border border-white/10 p-6 min-h-[520px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Phone Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Omnichannel Broadcast</div>
                      <div className="text-sm font-bold text-white">Google Business & Social</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  </div>

                  {/* Generated Content Box */}
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">AI Generated Preview</div>
                    
                    {generatedPost ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/[0.04] border border-blue-500/30 rounded-2xl p-4 text-xs text-gray-200 leading-relaxed shadow-lg"
                      >
                        <div className="flex items-center justify-between text-[10px] text-blue-400 font-bold mb-2">
                          <span>🌐 OPTIMIZED FOR LOCAL MAPS</span>
                          <span>SEO Score: 98/100</span>
                        </div>
                        <p>{generatedPost}</p>

                        <button
                          onClick={handlePublishAll}
                          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors cursor-pointer"
                        >
                          🚀 Push Live to All Platforms
                        </button>
                      </motion.div>
                    ) : (
                      <div className="bg-black/40 border border-white/5 rounded-2xl p-6 text-center text-gray-600 text-xs italic">
                        Click &quot;Generate High-Intent SEO Post&quot; on the left to create live AI content.
                      </div>
                    )}

                    {/* Publish Status Feedback */}
                    <AnimatePresence>
                      {publishStatus && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs text-center font-medium"
                        >
                          {publishStatus}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Footer Status */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Status: {publishStatus ? '🟢 Deployed' : '⚪ Waiting for Input'}</span>
                  <span className="text-blue-400 font-semibold">Netavise SEO Engine</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}