"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/ModalContext";
import { X, CheckCircle2 } from "lucide-react";

export default function AuditModal() {
  const { isAuditModalOpen, closeAuditModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // CHANGE THIS PATH TO MATCH YOUR FOLDER STRUCTURE
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
        alert("Failed to send email. Check the console.");
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative pointer-events-auto shadow-2xl overflow-hidden"
        >
          <button
            onClick={closeAuditModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {!success ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">
                Request Your Audit
              </h2>
              <p className="text-gray-400 mb-6">
                Enter your details and we'll analyze your digital footprint.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  required
                  placeholder="Business Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, business: e.target.value })
                  }
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50"
                >
                  {loading ? "Sending Request..." : "Submit Request"}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <CheckCircle2 className="w-16 h-16 text-teal-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Request Received
              </h2>
              <p className="text-gray-400">
                We're auditing your assets now. We'll be in touch within 24
                hours.
              </p>
              <button
                onClick={closeAuditModal}
                className="mt-8 bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
