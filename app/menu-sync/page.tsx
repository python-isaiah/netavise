'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavBar';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  active: boolean;
}

const initialItems: MenuItem[] = [
  { id: 1, name: "Signature Truffle Latte", category: "Drinks", price: "$6.50", active: true },
  { id: 2, name: "Artisan Almond Croissant", category: "Bakery", price: "$4.75", active: true },
  { id: 3, name: "Matcha Green Tea Supreme", category: "Drinks", price: "$7.00", active: true },
  { id: 4, name: "Avocado Sourdough Toast", category: "Food", price: "$9.50", active: false },
];

export default function MenuSyncDemo() {
  const [items, setItems] = useState<MenuItem[]>(initialItems);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Drinks');
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const handleToggleItem = (id: number) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, active: !item.active } : item))
    );
    triggerSyncAlert("Item status updated instantly across QR & App menus.");
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice) return;

    const newItem: MenuItem = {
      id: Date.now(),
      name: newItemName,
      category: newItemCategory,
      price: newItemPrice.startsWith('$') ? newItemPrice : `$${newItemPrice}`,
      active: true,
    };

    setItems([newItem, ...items]);
    setNewItemName('');
    setNewItemPrice('');
    triggerSyncAlert("New product deployed live to customer menus instantly!");
  };

  const triggerSyncAlert = (msg: string) => {
    setSyncStatus(msg);
    setTimeout(() => setSyncStatus(null), 3500);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-teal-500 selection:text-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-purple-500/10 to-blue-500/15 blur-[140px] pointer-events-none rounded-full" />

      <SimpleNavbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Back Link */}
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-teal-400 transition-colors mb-8"
        >
          ← Back to Demos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
            <span>⚡ Live Feature Module</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Instant Menu & Catalog <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500">Sync Engine</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            Say goodbye to printing new menus or waiting days for web developers. Push real-time inventory updates, price modifications, or flash items instantly across all customer-facing touchpoints.
          </p>
        </div>

        {/* Main Grid: Control Panel vs Live Customer View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Control & Add Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Add Item Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-2">Deploy New Menu Item</h2>
              <p className="text-sm text-gray-400 mb-6">Type an item name and price to instantly broadcast it to your storefront.</p>

              <form onSubmit={handleAddItem} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Item Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Vanilla Bean Cold Brew"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Price</label>
                    <input
                      type="text"
                      placeholder="e.g. $5.25"
                      value={newItemPrice}
                      onChange={(e) => setNewItemPrice(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Category</label>
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="Drinks" className="bg-black">Drinks</option>
                    <option value="Bakery" className="bg-black">Bakery</option>
                    <option value="Food" className="bg-black">Food</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-black font-bold text-sm shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Broadcast to Storefront</span>
                  <span>🚀</span>
                </button>
              </form>
            </div>

            {/* Existing Items Manager */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="text-xl font-bold mb-2">Active Inventory Manager</h2>
              <p className="text-sm text-gray-400 mb-6">Toggle items on/off instantly if stock runs out.</p>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-xs text-teal-400 font-mono mt-0.5">{item.price}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs ${item.active ? 'text-teal-400' : 'text-gray-600'}`}>
                        {item.active ? 'Live' : 'Hidden'}
                      </span>
                      <button
                        onClick={() => handleToggleItem(item.id)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                          item.active ? 'bg-teal-500' : 'bg-white/10'
                        }`}
                      >
                        <motion.div
                          layout
                          className="bg-black w-4 h-4 rounded-full shadow-md"
                          animate={{ x: item.active ? 24 : 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Live Customer Phone Preview (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-[40px] p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Sync Feedback Toast */}
              <AnimatePresence>
                {syncStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="absolute top-6 left-6 right-6 z-30 bg-teal-500 text-black font-bold text-xs p-3 rounded-2xl shadow-lg flex items-center justify-between"
                  >
                    <span>✨ {syncStatus}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Simulated Phone Frame */}
              <div className="bg-[#0a0a0a] rounded-[32px] border border-white/10 p-6 min-h-[520px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Phone Notch & Header */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Customer Mobile View</div>
                      <div className="text-base font-bold text-white">Café UNITED Storefront</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  </div>

                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Live Menu ({items.filter(i => i.active).length} items active)
                  </div>

                  {/* Dynamic Items List inside Phone */}
                  <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                    <AnimatePresence>
                      {items
                        .filter(i => i.active)
                        .map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 flex items-center justify-between"
                          >
                            <div>
                              <div className="text-xs font-bold text-white">{item.name}</div>
                              <div className="text-[10px] text-gray-400">{item.category}</div>
                            </div>
                            <div className="text-xs font-mono font-bold text-teal-400">{item.price}</div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Footer CTA */}
                <div className="pt-4 border-t border-white/5 text-center">
                  <div className="text-[10px] text-gray-500">
                    Powered by <span className="text-teal-400 font-semibold">Netavise Sync</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}