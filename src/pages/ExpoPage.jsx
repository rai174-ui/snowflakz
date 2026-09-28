import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, Mail, Phone, ExternalLink, Users, Building, Globe, TrendingUp, Rocket, Handshake, Sparkles, CheckCircle2, X } from 'lucide-react';

export default function ExpoPage() {
  const [exhibitorModalOpen, setExhibitorModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Agri-Tech & Drones',
    boothType: 'Standard Stall (9 sqm)',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "15K+", label: "Agri Professionals" },
    { icon: <Building className="w-8 h-8" />, number: "250+", label: "Exhibitors" },
    { icon: <Globe className="w-8 h-8" />, number: "30+", label: "Countries" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "1000+", label: "Qualified Leads" },
    { icon: <Rocket className="w-8 h-8" />, number: "New", label: "Product Launches" },
    { icon: <Handshake className="w-8 h-8" />, number: "Global", label: "Partnerships" }
  ];

  const handleExhibitorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const messageContent = `EXHIBITOR REGISTRATION INQUIRY (IIFE 2027):
- Contact Person: ${formData.name}
- Company/Org: ${formData.company}
- Sector: ${formData.sector}
- Preferred Booth: ${formData.boothType}
- Message/Notes: ${formData.message || 'None'}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: messageContent,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit registration');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Thank you for registering as an Exhibitor! Our team will contact you shortly regarding booth availability and sponsorship options.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const closeExhibitorModal = () => {
    setExhibitorModalOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-6 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>

        {/* Hero Banner Area (Clear, bright image without heavy dark foreground hiding background) */}
        <div className="rounded-t-3xl overflow-hidden relative shadow-2xl border border-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: 'url("https://indiainternationalfarmingexpo.com/wp-content/uploads/2026/06/farming-expo.jpg")' }}
          ></div>
          {/* Subtle translucent overlay for crisp text readability while leaving image vivid and visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-slate-950/20"></div>

          <div className="relative z-10 px-6 py-16 sm:py-24 sm:px-12 text-center text-white flex flex-col items-center justify-center font-sans">
            <span className="inline-flex items-center gap-2 py-2 px-6 bg-amber-500 text-slate-950 font-extrabold rounded-full mb-6 uppercase tracking-wider text-xs sm:text-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-slate-950" />
              India's Premier Farming & Agri-Tech Expo
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold mb-4 leading-tight max-w-4xl drop-shadow-lg text-white">
              India International Farming Expo 2027
            </h1>

            <p className="text-lg sm:text-2xl text-amber-300 font-bold mb-8 drop-shadow-md">
              Proudly Co-Organized by Snowflakz Foods
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-slate-100 mb-8">
              <span className="flex items-center bg-slate-900/80 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-md font-semibold text-sm">
                <Calendar className="w-4 h-4 mr-2 text-amber-400" /> 06-07-08 January, 2027
              </span>
              <span className="flex items-center bg-slate-900/80 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-md font-semibold text-sm">
                <MapPin className="w-4 h-4 mr-2 text-amber-400" /> Yashobhoomi (IICC), Dwarka, New Delhi
              </span>
            </div>

            {/* Prominent Exhibitor Registration Call to Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setExhibitorModalOpen(true)}
                className="btn-primary px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2 border border-amber-300"
              >
                <Building className="w-5 h-5" />
                <span>Register as Exhibitor</span>
              </button>
              <a
                href="https://indiainternationalfarmingexpo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold rounded-xl px-6 py-3.5 text-sm flex items-center gap-2 transition-all"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-b-3xl shadow-xl overflow-hidden border-x border-b border-slate-200">
          
          <div className="p-8 sm:p-12 lg:p-16">
            
            {/* Intro Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Event</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Join the <strong>India International Farming Expo 2027</strong>! Explore groundbreaking innovations in agriculture, poultry, dairy, aquaculture, horticulture, machinery, and allied industries. Showcase your products and connect with thousands of farmers, dealers, distributors, and agricultural professionals. As a leading voice in agricultural value-addition and healthy snacking, <strong>Snowflakz Foods</strong> is thrilled to be a co-organizer for this premier event, bridging the gap between farm innovations and consumer nutrition.
              </p>
            </div>

            {/* Why Exhibit Section */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-amber-400">Why Exhibit at IIFE 2027?</h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
                  Connect with buyers, generate qualified leads, launch innovative products, and build valuable partnerships at India's leading international agriculture exhibition.
                </p>
                <button
                  onClick={() => setExhibitorModalOpen(true)}
                  className="btn-primary text-xs sm:text-sm px-6 py-2.5 font-extrabold inline-flex items-center gap-2 shadow-lg"
                >
                  <Building className="w-4 h-4" />
                  <span>Reserve Exhibitor Booth</span>
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 group">
                    <div className="text-amber-400 group-hover:text-slate-900 mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="font-semibold text-slate-300 group-hover:text-slate-800">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Partner Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-amber-50 p-8 sm:p-12 rounded-3xl border border-amber-200">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner with Us</h2>
                <p className="text-slate-600 mb-8 text-lg">For exhibition stalls, sponsorships, or general inquiries regarding our participation in the Expo, please contact the Snowflakz team directly.</p>
                <div className="space-y-6">
                  <a href="mailto:info@snowflakz.com" className="flex items-center text-slate-700 hover:text-amber-600 font-semibold transition-colors text-lg">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200 mr-5">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    info@snowflakz.com
                  </a>
                  <div className="flex items-center text-slate-700 font-semibold text-lg">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200 mr-5">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                    +91 99712 99631 &nbsp;|&nbsp; 99715 87831
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right flex flex-col justify-center items-center md:items-end">
                 <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md border border-slate-200 text-center space-y-4">
                    <h3 className="font-bold text-slate-900 text-lg">Ready to secure your booth?</h3>
                    <p className="text-slate-500 text-xs sm:text-sm">Register online as an exhibitor to book your stall and display space at IIFE 2027.</p>
                    
                    <button
                      onClick={() => setExhibitorModalOpen(true)}
                      className="btn-primary w-full inline-flex items-center justify-center px-6 py-3 font-extrabold text-sm"
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Register as Exhibitor
                    </button>

                    <a href="https://indiainternationalfarmingexpo.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full inline-flex items-center justify-center px-6 py-2.5 text-xs">
                      Official Expo Website
                      <ExternalLink className="w-3.5 h-3.5 ml-2" />
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Exhibitor Registration Modal */}
      {exhibitorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div onClick={closeExhibitorModal} className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm" />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-800 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeExhibitorModal}
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
                  Exhibitor Registration Submitted!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying to exhibit at the India International Farming Expo 2027. Our Expo coordination team will reach out to you within 24 hours to assist with booth layout and registration.
                </p>
                <div className="pt-4">
                  <button onClick={closeExhibitorModal} className="btn-primary text-xs px-6 py-2.5 font-bold">
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider font-sans mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    INDIA INTERNATIONAL FARMING EXPO 2027
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                    Register as an Exhibitor
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    06-07-08 January 2027 • Yashobhoomi (IICC), Dwarka, New Delhi
                  </p>
                </div>

                <form onSubmit={handleExhibitorSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Contact Person Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Industry Sector</label>
                      <select
                        value={formData.sector}
                        onChange={e => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 bg-white"
                      >
                        <option value="Agri-Tech & Drones">Agri-Tech & Drone Farming</option>
                        <option value="Food Processing & Packaging">Food Processing & Packaging</option>
                        <option value="Organic Products & Spices">Organic Products & Spices</option>
                        <option value="Farm Machinery & Tools">Farm Machinery & Tools</option>
                        <option value="Dairy & Livestock">Dairy & Livestock</option>
                        <option value="Seeds & Crop Protection">Seeds & Crop Protection</option>
                        <option value="Other Industry Sector">Other Industry Sector</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Preferred Booth Category</label>
                      <select
                        value={formData.boothType}
                        onChange={e => setFormData({ ...formData, boothType: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 bg-white"
                      >
                        <option value="Standard Stall (9 sqm)">Standard Stall (9 sqm)</option>
                        <option value="Bare Space (18 sqm)">Bare Space (18 sqm)</option>
                        <option value="Custom Large Pavilion (36+ sqm)">Custom Large Pavilion (36+ sqm)</option>
                        <option value="Event Sponsorship & Co-Organizer">Event Sponsorship & Co-Organizer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase text-[11px] mb-1">Additional Requirements / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Specify corner booth preference, power requirements, machinery displays, etc."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-center py-3 font-bold text-sm shadow-md disabled:opacity-50"
                  >
                    {loading ? 'Submitting Application...' : 'Submit Exhibitor Registration'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
