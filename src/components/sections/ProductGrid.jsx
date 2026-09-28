import React, { useState } from 'react';
import { Star, Eye, Send, PackageCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import QuickViewModal from './QuickViewModal';
import SampleInquiryModal from '../ui/SampleInquiryModal';
import { productsData } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('sample');
  const [modalProduct, setModalProduct] = useState(null);

  const { addToCart } = useCart();

  // Featured 1 Hero Image Product (Leading to Product Details)
  const heroProduct = productsData[0]; // Peri Peri Makhana

  const handleOpenSample = (product) => {
    addToCart(product, product.weights[0], 1);
    setModalProduct(product);
    setModalTab('sample');
    setModalOpen(true);
  };

  const handleOpenInquiry = (product) => {
    setModalProduct(product);
    setModalTab('inquiry');
    setModalOpen(true);
  };

  const renderProductCard = (product) => (
    <div key={product.id} className="plain-card p-4 flex flex-col justify-between group hover:border-amber-400 transition-all">
      <div>
        {/* Image Box */}
        <div
          onClick={() => setSelectedProduct(product)}
          className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-200 cursor-pointer"
        >
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
            onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
            aria-label={`Quick view ${product.title}`}
            className="absolute bottom-3 right-3 p-2 bg-white/90 text-slate-800 rounded-lg border border-slate-200 hover:bg-white transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-sans">
          <span className="text-amber-700 font-semibold">{product.productCategory || product.category}</span>
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
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2 font-sans">
        <button
          onClick={() => handleOpenSample(product)}
          className="btn-primary flex-1 w-full text-center py-2 text-xs flex items-center justify-center gap-1.5"
        >
          <PackageCheck className="w-3.5 h-3.5" />
          <span>Request Sample</span>
        </button>

        <button
          onClick={() => handleOpenInquiry(product)}
          className="btn-secondary flex-1 w-full text-center py-2 text-xs flex items-center justify-center gap-1.5"
        >
          <Send className="w-3.5 h-3.5 text-amber-600" />
          <span>Inquire Now</span>
        </button>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
            SNOWFLAKZ FOODS PRODUCT RANGE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900">
            Our Products
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-sans">
            Explore our premium selection of 100% organic roasted snacks, spices, dehydrated garlic, onion & dry coconut.
          </p>
        </div>

        {/* --- 1 HERO IMAGE PRODUCT BANNER (Leads to Product Details Page/Modal) --- */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                FEATURED HERO PRODUCT
              </span>

              <h3 className="font-serif font-bold text-3xl sm:text-5xl text-white leading-tight">
                {heroProduct.title}
              </h3>

              <p className="text-amber-300 text-base font-bold">
                {heroProduct.tagline}
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {heroProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-200 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Hand-Roasted Makhana</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Preservatives & Non-GMO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High Protein & Fiber Rich</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Export Grade Packaging</span>
                </div>
              </div>

              {/* Action Buttons to View Product Details */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setSelectedProduct(heroProduct)}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Product Details</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => handleOpenSample(heroProduct)}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold rounded-xl px-6 py-3.5 text-sm flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                >
                  <PackageCheck className="w-4 h-4 text-amber-400" />
                  <span>Request Sample</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image (Clicking Hero Image opens Product Details Modal) */}
            <div
              onClick={() => setSelectedProduct(heroProduct)}
              className="lg:col-span-6 relative h-80 sm:h-[420px] bg-slate-950 overflow-hidden cursor-pointer group flex items-center justify-center"
            >
              <img
                src={heroProduct.image}
                alt={heroProduct.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

              {/* Click Callout */}
              <div className="absolute bottom-6 right-6 bg-slate-900/90 text-amber-400 border border-amber-400/40 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all font-bold text-xs">
                <span>Click Image for Full Product Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <span className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs shadow-lg uppercase">
                {heroProduct.badge || 'BESTSELLER'}
              </span>
            </div>

          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 mb-6">
            All Products & Commercial Range
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map(renderProductCard)}
          </div>
        </div>

      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onOpenSample={(p) => { setSelectedProduct(null); handleOpenSample(p); }}
        onOpenInquiry={(p) => { setSelectedProduct(null); handleOpenInquiry(p); }}
      />

      <SampleInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
        initialProduct={modalProduct}
      />
    </section>
  );
}
