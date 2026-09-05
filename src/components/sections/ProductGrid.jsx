import React, { useState } from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';
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
    <section id="shop" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
              100% ROASTED SNACK PACKS BY SNOWFLAKZ FOODS
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900">
              Best Selling Products
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 bg-white p-1.5 rounded border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="plain-card p-4 flex flex-col justify-between group">
              <div>
                {/* Image Box */}
                <div className="relative w-full h-64 rounded overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-amber-500 text-white font-bold font-sans text-[11px]">
                    {product.badge}
                  </span>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Quick view ${product.title}`}
                    className="absolute bottom-3 right-3 p-2 bg-white/90 text-slate-800 rounded border border-slate-200 hover:bg-white transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-sans">
                  <span className="text-amber-700 font-semibold">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-slate-800 font-bold">{product.rating}</span>
                  </div>
                </div>

                <h3
                  onClick={() => setSelectedProduct(product)}
                  className="font-serif font-bold text-xl text-slate-900 hover:text-amber-600 transition-colors cursor-pointer mb-1"
                >
                  {product.title}
                </h3>

                <p className="text-slate-600 text-xs line-clamp-2 mb-4 font-sans">
                  {product.tagline}
                </p>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-xl text-slate-900 block">
                    ₹{product.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through font-sans">
                    ₹{product.originalPrice}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product, product.weights[0], 1)}
                  className="btn-primary"
                >
                  <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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
