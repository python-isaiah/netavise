'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/ModalContext";
import { X, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function AuditModal() {
  const { isAuditModalOpen, closeAuditModal } = useModal();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    businessType: "Restaurant / Cafe / Bakery",
    mainPainPoint: "Missed phone calls & empty tables",
    monthlyVolume: "1,000 - 5,000 customers / month",
    currentWebsiteStatus: "Outdated / Slow legacy website",
    customNotes: "",
    name: "",
    business: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("API Error:", result);
        alert("Failed to submit diagnostic. Check the console.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuditModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAuditModal}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 relative pointer-events-auto shadow-2xl overflow-hidden"
        >
          <button
            onClick={closeAuditModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>

          {!success ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 font-mono mb-2">
                  <span>Diagnostic Step {step} of 5</span>
                  <span>{Math.round((step / 5) * 100)}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-teal-500 h-full transition-all duration-300"
                    style={{ width: `${(step / 5) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                
                {/* STEP 1: Business Profile */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">What type of business do you run?</h2>
                    <p className="text-gray-400 text-sm mb-4">This helps us benchmark your digital stack against top-performing competitors.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Restaurant / Cafe / Bakery",
                        "Bar / Nightlife / Lounge",
                        "Salon / Spa / Wellness",
                        "Local Service / Contractor"
                      ].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, businessType: type })}
                          className={`p-4 rounded-xl border text-left text-sm font-medium transition-all cursor-pointer ${
                            formData.businessType === type
                              ? 'bg-teal-500/10 border-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    >
                      <span>Continue</span>
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: Monthly Foot Traffic / Volume */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">What is your approximate monthly customer volume?</h2>
                    <p className="text-gray-400 text-sm mb-4">Allows us to calculate your exact revenue leakage from missed calls and third-party fees.</p>
                    
                    <div className="space-y-3">
                      {[
                        "Under 1,000 customers / month",
                        "1,000 - 5,000 customers / month",
                        "5,000 - 15,000 customers / month",
                        "15,000+ customers / month (Multi-location)"
                      ].map((vol) => (
                        <button
                          type="button"
                          key={vol}
                          onClick={() => setFormData({ ...formData, monthlyVolume: vol })}
                          className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all cursor-pointer ${
                            formData.monthlyVolume === vol
                              ? 'bg-teal-500/10 border-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          {vol}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                      >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Current Website & Tech Status */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">How would you rate your current digital setup?</h2>
                    <p className="text-gray-400 text-sm mb-4">Be honest—how well does your website convert mobile visitors into paying customers?</p>
                    
                    <div className="space-y-3">
                      {[
                        "Outdated / Slow legacy website (Hard to update or read on mobile)",
                        "Decent website, but zero automated back-office or review tools",
                        "Relying heavily on DoorDash, Yelp, or third-party apps taking 30% fees",
                        "Fully custom setup, looking to optimize speed and conversion rates"
                      ].map((status) => (
                        <button
                          type="button"
                          key={status}
                          onClick={() => setFormData({ ...formData, currentWebsiteStatus: status })}
                          className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                            formData.currentWebsiteStatus === status
                              ? 'bg-teal-500/10 border-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                      >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Core Bottleneck */}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">What is your biggest operational frustration?</h2>
                    <p className="text-gray-400 text-sm mb-4">Where do you want our AI automation to step in first?</p>
                    
                    <div className="space-y-3">
                      {[
                        "Missed phone calls & empty tables during off-peak hours",
                        "Low Google review volume & bad local search positioning",
                        "Never capturing customer data for repeat marketing / SMS win-backs",
                        "Managing menu changes, pricing, and QR codes manually"
                      ].map((pain) => (
                        <button
                          type="button"
                          key={pain}
                          onClick={() => setFormData({ ...formData, mainPainPoint: pain })}
                          className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                            formData.mainPainPoint === pain
                              ? 'bg-teal-500/10 border-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          {pain}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                      >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                      >
                        <span>Continue</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Open Response & Contact Info */}
                {step === 5 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Any specific goals or details to share?</h2>
                    <p className="text-gray-400 text-sm mb-3">Tell us in your own words what you want your digital presence to achieve.</p>
                    
                    <textarea
                      rows={3}
                      placeholder="e.g. We want to stop losing catering orders on weekends and push more people to order directly instead of through DoorDash..."
                      value={formData.customNotes}
                      onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    />

                    <div className="space-y-3 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                        <input
                          required
                          placeholder="Business Name"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          required
                          type="email"
                          placeholder="Business Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                        <input
                          required
                          type="tel"
                          placeholder="Mobile Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-6 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                      >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                      </button>
                      <button
                        disabled={loading}
                        type="submit"
                        className="flex-1 bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                      >
                        {loading ? "Generating Diagnostic..." : "Get Custom Audit 🚀"}
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle2 className="w-16 h-16 text-teal-400 mx-auto mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Diagnostic Complete
              </h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                We have logged your inputs for <span className="text-white font-bold">{formData.business || 'your business'}</span>. Our engineers are reviewing your custom notes and metrics now. Expect your video audit within 24 hours.
              </p>
              <button
                onClick={closeAuditModal}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}