import React, { useState } from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import QuickViewModal from './QuickViewModal';
import CategoryBanner from './CategoryBanner';
import { productsData } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductGrid() {
  const [activeMainCategory, setActiveMainCategory] = useState('Makhana');
  const [activeMakhanaSubCategory, setActiveMakhanaSubCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const mainCategories = [
    'Makhana',
    'Jeera (Cummin Seeds)',
    'Dry Cocunut (Copra)',
    'Dry Garlic',
    'Dry Onion',
    'All Products'
  ];

  const makhanaSubCategories = ['All', 'Spicy', 'Classic', 'Gourmet', 'Combos'];

  // Helper to render product card
  const renderProductCard = (product) => (
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
      <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-sans">
        <div>
          <span className="font-serif font-bold text-xl text-slate-900 block">
            ₹{product.price}
          </span>
          <span className="text-xs text-slate-400 line-through">
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
  );

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
            SNOWFLAKZ FOODS PRODUCT RANGE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900">
            Our Products
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-sans">
            Explore our premium selection of roasted snacks, spices, dehydrated garlic, onion & dry coconut.
          </p>
        </div>

        {/* Main Product Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveMainCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all font-sans ${
                activeMainCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- CATEGORY SECTION RENDERERS --- */}

        {/* 1. MAKHANA SECTION (Matches requested attached image section layout) */}
        {(activeMainCategory === 'Makhana' || activeMainCategory === 'All Products') && (
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1 font-sans">
                  100% ROASTED SNACK PACKS BY SNOWFLAKZ FOODS
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                  Best Selling Products
                </h3>
              </div>

              {/* Sub-filter Pills for Makhana */}
              <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0 bg-white p-1.5 rounded border border-slate-200 font-sans">
                {makhanaSubCategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => setActiveMakhanaSubCategory(subCat)}
                    className={`px-4 py-1.5 rounded text-xs font-semibold transition-colors ${
                      activeMakhanaSubCategory === subCat
                        ? 'bg-slate-905 text-white font-bold bg-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {subCat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData
                .filter(p => p.productCategory === 'Makhana')
                .filter(p => activeMakhanaSubCategory === 'All' || p.category === activeMakhanaSubCategory)
                .map(renderProductCard)}
            </div>
          </div>
        )}

        {/* 2. JEERA (CUMMIN SEEDS) SECTION */}
        {(activeMainCategory === 'Jeera (Cummin Seeds)' || activeMainCategory === 'All Products') && (
          <div className="mb-16">
            <CategoryBanner categoryKey="Jeera (Cummin Seeds)" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData
                .filter(p => p.productCategory === 'Jeera (Cummin Seeds)')
                .map(renderProductCard)}
            </div>
          </div>
        )}

        {/* 3. DRY COCONUT (COPRA) SECTION */}
        {(activeMainCategory === 'Dry Cocunut (Copra)' || activeMainCategory === 'All Products') && (
          <div className="mb-16">
            <CategoryBanner categoryKey="Dry Cocunut (Copra)" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData
                .filter(p => p.productCategory === 'Dry Cocunut (Copra)')
                .map(renderProductCard)}
            </div>
          </div>
        )}

        {/* 4. DRY GARLIC SECTION */}
        {(activeMainCategory === 'Dry Garlic' || activeMainCategory === 'All Products') && (
          <div className="mb-16">
            <CategoryBanner categoryKey="Dry Garlic" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData
                .filter(p => p.productCategory === 'Dry Garlic')
                .map(renderProductCard)}
            </div>
          </div>
        )}

        {/* 5. DRY ONION SECTION */}
        {(activeMainCategory === 'Dry Onion' || activeMainCategory === 'All Products') && (
          <div className="mb-16">
            <CategoryBanner categoryKey="Dry Onion" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData
                .filter(p => p.productCategory === 'Dry Onion')
                .map(renderProductCard)}
            </div>
          </div>
        )}

      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
