import React, { useState } from 'react';
import { Star, Eye, Send, PackageCheck, Sparkles, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import QuickViewModal from './QuickViewModal';
import SampleInquiryModal from '../ui/SampleInquiryModal';
import { productsData } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('sample');
  const [modalProduct, setModalProduct] = useState(null);

  // Track expanded category details (default true so user sees products)
  const [expandedCategories, setExpandedCategories] = useState({
    'Jeera (Cummin Seeds)': true,
    'Dry Cocunut (Copra)': true,
    'Dry Garlic': true,
    'Dry Onion': true,
    'Makhana': true,
  });

  const toggleCategory = (key) => {
    setExpandedCategories(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const { addToCart } = useCart();

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

  // Category Configuration - MAKHANA IS THE LAST ONE!
  const categoriesList = [
    {
      key: 'Jeera (Cummin Seeds)',
      title: 'Jeera (Cumin Seeds)',
      tagline: '100% Pure, Naturally Sun-Dried & Rich in Essential Oils',
      heroProduct: productsData.find(p => p.id === 'jeera-whole-premium') || productsData.find(p => p.productCategory === 'Jeera (Cummin Seeds)'),
      heroImage: '/assets/products/jeera/cumin-3.png',
      description: 'Sourced directly from certified Indian farms. Selected for superior aroma, uniform grain size, and robust natural flavor in every batch.',
      highlights: ['100% Direct Farm Sourced', 'Sun-Dried & Cleaned', 'High Volatile Oil', 'Export Grade'],
    },
    {
      key: 'Dry Cocunut (Copra)',
      title: 'Dry Coconut (Copra)',
      tagline: 'Sun-Dried Whole Coconut Halves & Flakes',
      heroProduct: productsData.find(p => p.id === 'dry-coconut-halves') || productsData.find(p => p.productCategory === 'Dry Cocunut (Copra)'),
      heroImage: '/assets/products/coconut/31.jpeg',
      description: 'Cleaned and dried under natural sunlight. High in healthy fatty acids, pure coconut oil content, and authentic sweet coconut taste.',
      highlights: ['Sun-Dried Copra', 'High Natural Oil Content', 'Unsweetened Flakes', 'Pure & Unadulterated'],
    },
    {
      key: 'Dry Garlic',
      title: 'Dry Garlic',
      tagline: 'Premium Dehydrated Garlic Flakes, Cloves & Powder',
      heroProduct: productsData.find(p => p.id === 'dehydrated-garlic-flakes') || productsData.find(p => p.productCategory === 'Dry Garlic'),
      heroImage: '/assets/products/garlic/garlic.png',
      description: 'Hygienically dehydrated to preserve full-bodied aroma and pungent taste. Perfect for kitchen culinary use, spice blends, and food manufacturing.',
      highlights: ['Zero Water Moisture', 'Pungent Garlic Flavor', 'Hygienically Processed', 'Long Shelf Life'],
    },
    {
      key: 'Dry Onion',
      title: 'Dry Onion',
      tagline: 'Dehydrated Red & White Onion Flakes & Powder',
      heroProduct: productsData.find(p => p.id === 'dehydrated-red-onion-flakes') || productsData.find(p => p.productCategory === 'Dry Onion'),
      heroImage: '/assets/products/onion/onion.jpg',
      description: 'Farm-fresh onions carefully sliced and dehydrated. Save preparation time with zero teary eyes and 100% natural long-lasting freshness.',
      highlights: ['Red & White Varieties', 'Zero Tear Prep', 'Ideal for Commercial Kitchens', '100% Pure Onion'],
    },
    {
      key: 'Makhana',
      title: 'Makhana (Roasted Lotus Seeds)',
      tagline: '100% Roasted Makhana Snack Pack Range',
      heroProduct: productsData.find(p => p.id === 'peri-peri-makhana') || productsData.find(p => p.productCategory === 'Makhana'),
      heroImage: '/assets/10-1-scaled.jpg',
      description: 'Slow-roasted to golden perfection without palm oil or artificial preservatives. Coated with gourmet spices for maximum taste and health.',
      highlights: ['100% Hand-Roasted', 'Zero Palm Oil & Non-GMO', 'High Protein & Fiber', 'Gourmet Flavors'],
    },
  ];

  const renderProductCard = (product) => (
    <div key={product.id} className="plain-card p-4 flex flex-col justify-between group hover:border-amber-400 transition-all">
      <div>
        {/* Image Box */}
        <div
          onClick={() => setSelectedProduct(product)}
          className="relative w-full h-60 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-200 cursor-pointer"
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
          className="font-serif font-bold text-lg text-slate-900 hover:text-amber-600 transition-colors cursor-pointer mb-1"
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
        
        {/* Section Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
            SNOWFLAKZ FOODS PRODUCT RANGE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900">
            Our Products by Category
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-sans">
            Click on any product hero image to view full details and specifications.
          </p>
        </div>

        {/* --- CATEGORY SECTIONS (MAKHANA IS THE LAST ONE) --- */}
        <div className="space-y-16">
          {categoriesList.map((cat, index) => {
            const categoryProducts = productsData.filter(p => p.productCategory === cat.key);
            const isExpanded = expandedCategories[cat.key];

            return (
              <div key={cat.key} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                
                {/* 1 HERO IMAGE CATEGORY BANNER */}
                <div className="rounded-2xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    
                    {/* Left Info Column */}
                    <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-extrabold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        CATEGORY #{index + 1}
                      </span>

                      <h3 className="font-serif font-bold text-2xl sm:text-4xl text-white leading-tight">
                        {cat.title}
                      </h3>

                      <p className="text-amber-300 text-sm font-bold">
                        {cat.tagline}
                      </p>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs text-slate-200 font-sans">
                        {cat.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hero Actions */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedProduct(cat.heroProduct)}
                          className="btn-primary px-6 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Product Details</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>

                        <button
                          onClick={() => toggleCategory(cat.key)}
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold rounded-xl px-5 py-3 text-xs flex items-center gap-2 transition-all"
                        >
                          <span>{isExpanded ? 'Hide Items' : `Show All ${cat.title} Products (${categoryProducts.length})`}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
                        </button>
                      </div>
                    </div>

                    {/* Right 1 Hero Image (Clicking Hero Image opens Product Details Modal) */}
                    <div
                      onClick={() => setSelectedProduct(cat.heroProduct)}
                      className="lg:col-span-6 relative h-64 sm:h-[360px] bg-slate-950 overflow-hidden cursor-pointer group flex items-center justify-center"
                    >
                      <img
                        src={cat.heroImage}
                        alt={cat.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                      {/* Click Callout */}
                      <div className="absolute bottom-4 right-4 bg-slate-900/90 text-amber-400 border border-amber-400/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all font-bold text-xs">
                        <span>Click Image for Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs shadow-lg uppercase">
                        {cat.heroProduct?.badge || 'FEATURED'}
                      </span>
                    </div>

                  </div>
                </div>

                {/* DETAILED PRODUCTS SECTION UNDER THIS CATEGORY */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-serif font-bold text-xl text-slate-900">
                        {cat.title} Products ({categoryProducts.length})
                      </h4>
                      <span className="text-xs text-slate-500 font-sans">Click any card to inspect full specs</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProducts.map(renderProductCard)}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
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
