import React, { useState } from 'react';
import { X, Star, ShoppingBag } from 'lucide-react';
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
    isOpen ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div onClick={onClose} className="fixed inset-0 bg-slate-900/60" />

        <div className="relative z-10 w-full max-w-2xl bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xl text-slate-800 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            aria-label="Close product quick view"
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="relative rounded overflow-hidden border border-slate-200 bg-slate-50">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover"
                onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-amber-500 text-white font-bold text-[11px]">
                {product.badge}
              </span>
            </div>

            {/* Details */}
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                {product.category} Makhana
              </span>
              <h2 className="font-serif font-bold text-2xl text-slate-900 mt-1">
                {product.title}
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">
                {product.tagline}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-slate-700 font-bold">{product.rating}</span>
                <span className="text-xs text-slate-500">({product.reviewsCount} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mt-4">
                <span className="font-serif font-bold text-2xl text-slate-900">
                  ₹{product.price}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{product.originalPrice}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Weight Selector */}
              <div className="mt-5">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Select Pack Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
                        selectedWeight === w
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-6">
                <div className="flex items-center border border-slate-200 rounded px-3 py-2 bg-slate-50">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-slate-600 font-bold px-2">-</button>
                  <span className="px-2 text-sm font-bold text-slate-800">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-slate-600 font-bold px-2">+</button>
                </div>

                <button onClick={handleAdd} className="btn-primary flex-1">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}
