import React, { useState, useEffect } from 'react';
import { X, PackageCheck, Send, CheckCircle2, Building2, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { productsData } from '../../data/products';

export default function SampleInquiryModal({ isOpen, onClose, initialTab = 'sample', initialProduct = null }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    product: initialProduct?.title || 'Makhana (Roasted Lotus Seeds)',
    sampleProducts: initialProduct ? [initialProduct.title] : ['Peri Peri Makhana', 'Premium Whole Cumin Seeds (Jeera)'],
    inquiryType: 'Wholesale Distribution',
    quantity: '100kg - 500kg',
    message: '',
  });

  useEffect(() => {
    setActiveTab(initialTab);
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        product: initialProduct.title,
        sampleProducts: [initialProduct.title],
      }));
    }
  }, [initialTab, initialProduct]);

  if (!isOpen) return null;

  const sampleOptions = [
    'Peri Peri Makhana',
    'Salt & Pepper Makhana',
    'Spicy Jalapeno Makhana',
    'Tangy Tomato Makhana',
    'Cream & Onion Makhana',
    'Premium Whole Cumin Seeds (Jeera)',
    'Sun-Dried Dry Coconut Halves (Copra)',
    'Dehydrated Dry Garlic Flakes',
    'Dehydrated Red & White Onion Flakes',
  ];

  const handleSampleCheckbox = (itemTitle) => {
    setFormData(prev => {
      const exists = prev.sampleProducts.includes(itemTitle);
      const updated = exists
        ? prev.sampleProducts.filter(t => t !== itemTitle)
        : [...prev.sampleProducts, itemTitle];
      return { ...prev, sampleProducts: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isSample = activeTab === 'sample';
    const subjectText = isSample
      ? `Sample Request from ${formData.name} (${formData.company || 'Individual'})`
      : `Bulk Inquiry: ${formData.product} - ${formData.company || formData.name}`;

    const formattedMessage = isSample
      ? `SAMPLE REQUEST DETAILS:
- Requested Samples: ${formData.sampleProducts.join(', ')}
- Delivery Address: ${formData.address || 'Not specified'}
- Company: ${formData.company || 'N/A'}
- Estimated Bulk Need: ${formData.quantity}
- Notes: ${formData.message || 'None'}`
      : `BULK COMMERCIAL INQUIRY:
- Product of Interest: ${formData.product}
- Inquiry Category: ${formData.inquiryType}
- Target Volume: ${formData.quantity}
- Company Name: ${formData.company || 'N/A'}
- Detailed Requirements: ${formData.message}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formattedMessage,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send request');
      }
    } catch (error) {
      console.error('Inquiry error:', error);
      alert(error.message || 'Thank you for your request. If network issues occur, please email us directly at info@snowflakz.com.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={resetAndClose} className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-800 max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full focus:outline-none transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 font-sans">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-slate-900">
              {activeTab === 'sample' ? 'Sample Request Submitted!' : 'Inquiry Sent Successfully!'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you for contacting Snowflakz Foods. Our commercial representative will review your request and reach out via email or phone within 24 hours.
            </p>
            <div className="pt-4">
              <button onClick={resetAndClose} className="btn-primary text-xs px-6 py-2.5">
                Close & Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider font-sans mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                SNOWFLAKZ COMMERCIAL CONNECT
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                {activeTab === 'sample' ? 'Request Free Product Samples' : 'Commercial & Wholesale Inquiry'}
              </h2>
            </div>

            {/* Tab Switcher */}
            <div className="flex rounded-xl bg-slate-100 p-1 mb-6 border border-slate-200 font-sans">
              <button
                onClick={() => setActiveTab('sample')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'sample'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <PackageCheck className="w-4 h-4" />
                <span>Request Samples</span>
              </button>
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'inquiry'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Bulk / Wholesale Inquiry</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Company / Business Name</label>
                  <input
                    type="text"
                    placeholder="Company or Brand Name"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Tab Specific Fields */}
              {activeTab === 'sample' ? (
                <>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Shipping Address for Sample Delivery *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Street address, city, state, pin code"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[11px] mb-2">Select Products for Sample Pack (Multiple Allowed):</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 max-h-40 overflow-y-auto">
                      {sampleOptions.map(item => (
                        <label key={item} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900">
                          <input
                            type="checkbox"
                            checked={formData.sampleProducts.includes(item)}
                            onChange={() => handleSampleCheckbox(item)}
                            className="rounded text-amber-500 focus:ring-amber-400"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Product of Interest</label>
                      <select
                        value={formData.product}
                        onChange={e => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 bg-white"
                      >
                        <option value="Makhana (Roasted Lotus Seeds)">Makhana (Roasted Lotus Seeds)</option>
                        <option value="Jeera (Cumin Seeds)">Jeera (Cumin Seeds)</option>
                        <option value="Dry Coconut (Copra)">Dry Coconut (Copra)</option>
                        <option value="Dehydrated Dry Garlic">Dehydrated Dry Garlic</option>
                        <option value="Dehydrated Dry Onion">Dehydrated Dry Onion</option>
                        <option value="All Products Multi-Category">All Products Multi-Category</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 bg-white"
                      >
                        <option value="Wholesale Distribution">Wholesale Distribution</option>
                        <option value="Export & International Trade">Export & International Trade</option>
                        <option value="Private Label Packaging">Private Label Packaging</option>
                        <option value="Commercial Food Manufacturing">Commercial Food Manufacturing</option>
                        <option value="Bulk Retail Purchase">Bulk Retail Purchase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Inquiry Details / Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Specify estimated volume requirements, packaging specifications, target delivery timeline, etc."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-center py-3 font-bold text-sm shadow-md disabled:opacity-50"
              >
                {loading
                  ? 'Submitting Request...'
                  : activeTab === 'sample'
                  ? 'Submit Sample Request'
                  : 'Submit Commercial Inquiry'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
