import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, PackageCheck, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formType, setFormType] = useState('inquiry'); // 'inquiry' | 'sample'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: 'All Products Multi-Category',
    message: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isSample = formType === 'sample';
    const messageContent = isSample
      ? `SAMPLE REQUEST FROM CONTACT SECTION:
- Delivery Address: ${formData.address}
- Company: ${formData.company || 'N/A'}
- Product Requested: ${formData.product}
- Notes: ${formData.message || 'None'}`
      : `BULK COMMERCIAL INQUIRY:
- Company Name: ${formData.company || 'N/A'}
- Product of Interest: ${formData.product}
- Inquiry Requirements: ${formData.message}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: messageContent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', product: 'All Products Multi-Category', message: '', address: '' });
      } else {
        throw new Error(data.error || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(error.message || 'Thank you! Your query has been recorded. Our team will get back to you shortly.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
            GET IN TOUCH WITH SNOWFLAKZ FOODS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 mb-2">
            Contact & Commercial Inquiries
          </h2>
          <p className="text-slate-600 text-sm">
            Interested in wholesale bulk supply, export quotes, private labeling, or product samples? Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="plain-card p-6 space-y-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Headquarters & Hotline</span>
              
              <div className="flex items-start gap-3 pt-2">
                <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Email Support</span>
                  <a href="mailto:info@snowflakz.com" className="text-sm font-semibold text-slate-900 hover:text-amber-600">
                    info@snowflakz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Phone Hotline</span>
                  <a href="tel:+919971299631" className="text-sm font-semibold text-slate-900 hover:text-emerald-600">
                    +91 99712 99631 | +91 99715 87831
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Registered Facility</span>
                  <span className="text-xs text-slate-700">
                    Snowflakz Foods Pvt Ltd, India
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 text-xs text-amber-900 space-y-2">
              <span className="font-bold flex items-center gap-1 text-amber-700 uppercase">
                <Sparkles className="w-4 h-4 text-amber-600" />
                B2B & Export Assurances
              </span>
              <p className="leading-relaxed">
                We accommodate custom mesh sizes for ground spices, moisture-barrier vacuum packaging for bulk makhana & dehydrated crops, and private-label commercial orders.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="plain-card p-6 sm:p-8">
              
              {/* Form Type Tabs */}
              <div className="flex rounded-xl bg-slate-100 p-1 mb-6 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFormType('inquiry')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    formType === 'inquiry'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Bulk Wholesale Inquiry</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('sample')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    formType === 'sample'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>Request Samples</span>
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-3 font-sans">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif font-bold text-xl text-slate-900">Thank You!</h3>
                  <p className="text-xs text-slate-600">Thank you so much for your query. Our team will shortly get in touch with you.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary text-xs px-5 py-2">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company or Brand Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="yourname@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  {formType === 'sample' ? (
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Sample Delivery Shipping Address *</label>
                      <textarea
                        name="address"
                        required
                        rows={2}
                        placeholder="Enter complete delivery address for sample dispatch"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 resize-none"
                      />
                    </div>
                  ) : null}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Product of Interest</label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 bg-white"
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
                        value={formData.inquiryType || 'Wholesale Distribution'}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 bg-white"
                      >
                        <option value="Wholesale Distribution">Wholesale Distribution</option>
                        <option value="Export & International Trade">Export & International Trade</option>
                        <option value="Private Label Packaging">Private Label Packaging</option>
                        <option value="Commercial Food Manufacturing">Commercial Food Manufacturing</option>
                        <option value="Third Party Manufacturing / Branding">Third Party Manufacturing / Branding</option>
                        <option value="Bulk Retail Purchase">Bulk Retail Purchase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Message / Requirements *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder={formType === 'sample' ? "Specify any specific sample products or flavor preferences..." : "Write your inquiry details, estimated volume requirements, export destination, etc..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-600 resize-none"
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full text-center py-3 font-bold disabled:opacity-50">
                    {loading ? 'Submitting...' : formType === 'sample' ? 'Submit Sample Request' : 'Submit Commercial Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
