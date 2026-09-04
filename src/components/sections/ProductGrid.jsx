import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import QuickViewModal from './QuickViewModal';
import { productsData } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Spicy', 'Classic', 'Gourmet', 'Combos'];

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="relative py-28 bg-dark-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>100% Roasted Lotus Seed Flavors</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight">
              Best Selling Products<span className="text-amber-400">.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 glass-panel p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  hoverTilt={false}
                  className="group h-full flex flex-col justify-between border-white/10 hover:border-amber-400/40 transition-all duration-300 !p-4"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative w-full h-64 rounded-xl overflow-hidden glass-panel border border-white/10 bg-slate-950 mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />

                      {/* Badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold font-mono text-[10px]">
                        {product.badge}
                      </span>

                      {/* Quick View Hover Button */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        aria-label={`Quick view ${product.title}`}
                        className="absolute bottom-3 right-3 p-2.5 rounded-full glass-panel border border-white/20 text-slate-200 hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span className="text-amber-400 font-semibold">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-slate-200 font-bold">{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-display font-bold text-xl text-slate-100 hover:text-amber-400 transition-colors cursor-pointer mb-1"
                    >
                      {product.title}
                    </h3>

                    <p className="text-slate-400 text-xs line-clamp-2 mb-4">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Footer Price & Add to Cart */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-display font-extrabold text-xl text-amber-400 block">
                        ₹{product.price}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, product.weights[0], 1)}
                      className="px-4 py-2 rounded-xl text-xs font-display font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Basket</span>
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
