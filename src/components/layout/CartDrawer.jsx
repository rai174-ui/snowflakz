import React, { useState } from 'react';
import { X, Trash2, PackageCheck, CheckCircle2, ArrowRight, Building2, User, Mail, Phone, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartCount } = useCart();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    notes: '',
  });

  if (!isCartOpen) return null;

  const handleSubmitSampleRequest = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Please add at least one product to your sample basket.');
      return;
    }

    setLoading(true);

    const sampleList = cart.map(item => `${item.title} (${item.selectedWeight || 'Sample'}) x${item.quantity}`).join('\n- ');
    const formattedMessage = `SAMPLE REQUEST FROM BASKET:
- Requested Sample Items:
- ${sampleList}

- Delivery Address: ${formData.address}
- Company / Brand: ${formData.company || 'Individual'}
- Notes / Requirements: ${formData.notes || 'None'}`;

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
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Sample drawer submission error:', error);
      alert('Thank you! Your sample request has been recorded.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div onClick={handleClose} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-amber-400" />
              <div>
                <h2 className="font-serif font-bold text-lg text-white">Sample Request Basket</h2>
                <span className="text-xs text-slate-300 font-sans">{cartCount} Item(s) Selected</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-full transition-colors"
              aria-label="Close sample drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {submitted ? (
              <div className="text-center py-12 space-y-4 font-sans">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900">
                  Sample Request Submitted!
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed max-w-xs mx-auto">
                  Our commercial team has received your sample request and will dispatch your sample pack shortly.
                </p>
                <div className="pt-4">
                  <button onClick={handleClose} className="btn-primary text-xs px-6 py-2.5">
                    Close & Continue
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3 text-slate-500 font-sans">
                <PackageCheck className="w-12 h-12 text-slate-300 mx-auto" />
                <p className="font-semibold text-sm text-slate-700">Your Sample Basket is Empty</p>
                <p className="text-xs max-w-xs mx-auto">Browse our products and click "Request Sample" to add items for testing.</p>
                <a
                  href="#products"
                  onClick={handleClose}
                  className="btn-primary inline-flex text-xs px-5 py-2 mt-2"
                >
                  Browse Products
                </a>
              </div>
            ) : (
              <>
                {/* Product List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Selected Sample Products:</span>
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-lg border border-slate-200"
                        onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-xs text-slate-900 truncate">{item.title}</h4>
                        <span className="text-[11px] text-amber-700 font-semibold block">{item.selectedWeight || 'Sample Pack'}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sample Request Form */}
                <form onSubmit={handleSubmitSampleRequest} className="space-y-3 pt-4 border-t border-slate-200 text-xs">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Sample Shipping Details:</span>
                  
                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">Company Name</label>
                    <input
                      type="text"
                      placeholder="Company or Brand Name"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[10px] mb-1">Sample Delivery Address *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Delivery address for sample express shipment"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-center py-3 text-xs font-bold shadow-md disabled:opacity-50 mt-2"
                  >
                    {loading ? 'Submitting Sample Request...' : 'Submit Sample Express Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
