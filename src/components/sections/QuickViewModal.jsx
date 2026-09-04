import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, ShieldCheck, Flame, Tag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product?.weights[0] || '100g');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, selectedWeight, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-3xl glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 bg-slate-900 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close product quick view"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white glass-panel rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Product Image Preview */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-4 bg-slate-950">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 sm:h-80 object-cover rounded-xl"
                  onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
                />
                <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold font-mono text-xs">
                  {product.badge}
                </span>
              </div>

              {/* Product Details & Selection */}
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                  {product.category} Makhana
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-100 mt-1">
                  {product.title}
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {product.tagline}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-bold">{product.rating}</span>
                  <span className="text-xs text-slate-500">({product.reviewsCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="font-display font-extrabold text-3xl text-amber-400">
                    ₹{product.price}
                  </span>
                  <span className="text-sm font-mono text-slate-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                  {product.description}
                </p>

                {/* Nutrition Highlights */}
                <div className="grid grid-cols-4 gap-2 mt-4 p-3 rounded-xl glass-panel border border-white/5 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Protein</span>
                    <span className="text-xs font-mono font-bold text-amber-400">{product.nutrition.protein}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Calories</span>
                    <span className="text-xs font-mono font-bold text-slate-200">{product.nutrition.calories}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Dietary Fiber</span>
                    <span className="text-xs font-mono font-bold text-slate-200">{product.nutrition.fiber}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Trans Fat</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">0.0g</span>
                  </div>
                </div>

                {/* Weight Selector */}
                <div className="mt-5">
                  <label className="block text-xs font-mono text-slate-300 uppercase font-bold mb-2">
                    Select Pack Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.weights.map((w) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(w)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                          selectedWeight === w
                            ? 'border-amber-400 bg-amber-400/20 text-white font-bold'
                            : 'border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Actions */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="flex items-center border border-white/10 rounded-xl glass-panel px-3 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-slate-400 hover:text-white px-2 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-mono font-bold text-amber-400">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-slate-400 hover:text-white px-2 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className="flex-1 py-3 rounded-xl font-display font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Snack Basket</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
