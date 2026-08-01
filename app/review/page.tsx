'use client';

import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ReviewFunnel() {
  const searchParams = useSearchParams();
  const customerName = searchParams.get('customer_name') || 'Guest';
  const orderId = searchParams.get('order_id') || 'Unknown';

  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Paste your actual generated link right here:
  const GOOGLE_REVIEW_LINK = "https://g.page/r/YOUR_ACTUAL_CODE/review"; 

  const handleFeedbackSubmit = async () => {
    // We send the private feedback AND the hidden customer data to our database
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ customerName, orderId, rating, feedback }),
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-center relative">
        {/* Back to Demos Button */}
        <Link href="/demos" className="absolute top-8 left-8 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors z-50">
          &larr; Back to Demos
        </Link>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md">
          <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
          <h2 className="text-3xl font-bold text-white mb-2">Message Sent.</h2>
          <p className="text-gray-400">Thank you, {customerName}. The owner has been notified directly and will make this right.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Back to Demos Button */}
      <Link href="/demos" className="absolute top-8 left-8 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors z-50">
        &larr; Back to Demos
      </Link>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl relative z-10 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">How was your experience?</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Tap a star to rate your order.</p>

        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-4xl transition-all ${rating && rating >= star ? 'text-yellow-400 scale-110' : 'text-gray-600 hover:text-gray-400 hover:scale-105'}`}
            >
              ★
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          {rating && rating >= 4 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="text-center">
              <p className="text-teal-400 font-medium mb-4">We're so glad you loved it!</p>
              <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noreferrer" className="block w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Share the love on Google
              </a>
            </motion.div>
          )}

          {rating && rating <= 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
              <p className="text-red-400 font-medium mb-4 text-center">We're so sorry. How can we fix this?</p>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what went wrong..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-teal-500/50 min-h-[120px] mb-4"
              />
              <button onClick={handleFeedbackSubmit} className="w-full bg-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/20 transition-all">
                Send to Management
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Wrap in Suspense to safely use useSearchParams in Next.js
export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
      <ReviewFunnel />
    </Suspense>
  );
}