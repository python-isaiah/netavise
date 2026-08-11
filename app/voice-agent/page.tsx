'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavBar';

interface TranscriptLine {
  speaker: 'AI' | 'Customer';
  text: string;
  time: string;
}

const callScenarios = [
  {
    id: 'reservation',
    title: 'Late-Night Table Booking',
    badge: 'Midnight Call (2:14 AM)',
    transcript: [
      { speaker: 'Customer', text: "Hi, are you guys open for dinner tomorrow? I need a table for 4 at 7 PM.", time: "0:02" },
      { speaker: 'AI', text: "Hello! Thanks for calling Café UNITED. Yes, we have a prime table for 4 available tomorrow at 7:00 PM. Shall I lock that in for you?", time: "0:06" },
      { speaker: 'Customer', text: "That would be amazing. Under the name Sarah Jenkins.", time: "0:10" },
      { speaker: 'AI', text: "All set, Sarah! I’ve confirmed your table for 4 tomorrow at 7 PM and sent a confirmation text to your number. See you then!", time: "0:15" },
    ]
  },
  {
    id: 'catering',
    title: 'Catering & Large Order Inquiry',
    badge: 'Sunday Morning Call',
    transcript: [
      { speaker: 'Customer', text: "Hi, do you guys do catering boxes for office meetings?", time: "0:03" },
      { speaker: 'AI', text: "Good morning! Absolutely. We offer artisan pastry and coffee boxes that feed 10 to 50 people. Would you like me to text you our PDF catering menu right now?", time: "0:08" },
      { speaker: 'Customer', text: "Yes please, text it to this number. I'll order for Friday.", time: "0:12" },
      { speaker: 'AI', text: "Sent! Check your text messages for the direct booking link. Is there anything else I can help you with?", time: "0:15" },
    ]
  }
];

export default function VoiceAgentDemo() {
  const [selectedScenario, setSelectedScenario] = useState(callScenarios[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showSmsAlert, setShowSmsAlert] = useState(false);

  const handleSimulateCall = () => {
    setIsPlaying(true);
    setActiveStep(0);
    setShowSmsAlert(false);

    // Step-by-step transcript revelation
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < selectedScenario.transcript.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsPlaying(false);
          setShowSmsAlert(true);
          return prev;
        }
      });
    }, 2200);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black relative overflow-hidden flex flex-col">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-teal-500/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Consistent Navbar */}
      <SimpleNavbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 w-full">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors mb-8"
        >
          ← Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
            <span>⚡ Live Feature Module</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Voice Receptionist & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Auto-Booking Engine</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Never miss another phone call or lose a booking to voicemail. Watch how our AI voice agent handles inbound calls 24/7, answers custom questions, and books reservations automatically.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Controls & Scenario Selector (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Scenario Picker */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-2">Select Inbound Call Scenario</h2>
              <p className="text-sm text-gray-400 mb-6">Choose what type of inquiry the AI voice assistant is receiving.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {callScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setSelectedScenario(scenario);
                      setIsPlaying(false);
                      setActiveStep(0);
                      setShowSmsAlert(false);
                    }}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedScenario.id === scenario.id
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                        : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/10'
                    }`}
                  >
                    <div className="text-[10px] text-emerald-400 font-mono font-bold mb-1 uppercase tracking-wider">{scenario.badge}</div>
                    <div className="text-sm font-bold text-white">{scenario.title}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleSimulateCall}
                disabled={isPlaying}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                {isPlaying ? (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
                    <span>AI Voice Agent Live on Call...</span>
                  </>
                ) : (
                  <>
                    <span>🎙️ Simulate Inbound AI Call</span>
                  </>
                )}
              </button>
            </div>

            {/* Live SMS Manager Notification Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">📱</span>
                  <h2 className="text-lg font-bold">Manager Instant SMS Alert</h2>
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase">Real-Time CRM Sync</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">The moment a call ends, Netavise pushes a structured summary directly to the owner&apos;s phone.</p>

              <AnimatePresence>
                {showSmsAlert ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs space-y-2 shadow-lg"
                  >
                    <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold">
                      <span>⚡ NETAVISE VOICE BOT SYNC</span>
                      <span>Just now</span>
                    </div>
                    <p className="font-medium text-white leading-relaxed">
                      &quot;New booking secured via AI Receptionist! Table for 4 booked for tomorrow at 7:00 PM under Sarah Jenkins. Customer phone number saved to CRM.&quot;
                    </p>
                  </motion.div>
                ) : (
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-gray-600 text-xs italic text-center">
                    Run the simulation above to see the instant manager SMS sync notification trigger.
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Side: Live Interactive Phone Call UI (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[40px] p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Phone Frame */}
              <div className="bg-[#0a0a0a] rounded-[32px] border border-white/10 p-6 min-h-[520px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Phone Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <div>
                      <div className="text-[10px] text-gray-500 font-mono">Inbound Voice Call</div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Café UNITED AI Line</span>
                        {isPlaying && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      {isPlaying ? 'Active 0:14' : 'Ready'}
                    </span>
                  </div>

                  {/* Audio Wave Visualizer Simulation */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-6 flex items-center justify-center gap-1.5 h-16">
                    {[40, 70, 20, 90, 60, 30, 80, 50, 95, 45, 65, 25, 85, 55, 35].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 rounded-full bg-emerald-400"
                        animate={{
                          height: isPlaying ? [10, height, 10] : 6,
                          opacity: isPlaying ? 1 : 0.3
                        }}
                        transition={{
                          repeat: isPlaying ? Infinity : 0,
                          duration: 0.6,
                          delay: i * 0.05
                        }}
                      />
                    ))}
                  </div>

                  {/* Transcript Feed */}
                  <div className="space-y-3 max-h-[240px] overflow-y-auto pr-1">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Live Transcript Stream</div>
                    {selectedScenario.transcript.slice(0, activeStep + 1).map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`p-3 rounded-2xl text-xs ${
                          line.speaker === 'AI'
                            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 ml-4 rounded-tl-sm'
                            : 'bg-white/[0.04] border border-white/5 text-gray-300 mr-4 rounded-tr-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[9px] text-gray-400 mb-1 font-mono">
                          <span className="font-bold text-white">{line.speaker === 'AI' ? '🤖 Netavise Voice AI' : '👤 Customer'}</span>
                          <span>{line.time}</span>
                        </div>
                        <p className="leading-relaxed">{line.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Phone Footer Status */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Status: {isPlaying ? '🟢 Synthesizing Audio' : showSmsAlert ? '✅ Task Completed' : '⚪ Idle'}</span>
                  <span className="text-emerald-400 font-semibold">Netavise Voice Engine</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}