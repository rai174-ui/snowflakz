import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, Mail, Phone, ExternalLink, Users, Building, Globe, TrendingUp, Rocket, Handshake } from 'lucide-react';

export default function ExpoPage() {
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

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>

        {/* Hero Banner Area */}
        <div className="bg-slate-900 rounded-t-3xl overflow-hidden relative shadow-xl">
          <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url("https://indiainternationalfarmingexpo.com/wp-content/uploads/2026/06/farming-expo.jpg")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="relative z-10 px-6 py-20 sm:px-12 text-center text-white flex flex-col items-center justify-center">
            <span className="inline-block py-2 px-6 bg-amber-500 text-slate-900 font-bold rounded-full mb-6 uppercase tracking-wider text-sm">🌾 India's Premier Farming & Agri-Tech Expo</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-6 leading-tight max-w-4xl">India International Farming Expo 2027</h1>
            <p className="text-xl sm:text-2xl text-amber-300 font-semibold mb-8">Proudly Co-Organized by Snowflakz Foods</p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-200">
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"><Calendar className="w-5 h-5 mr-2 text-amber-400" /> 06-07-08 January, 2027</span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"><MapPin className="w-5 h-5 mr-2 text-amber-400" /> India (Location TBA)</span>
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
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Connect with buyers, generate qualified leads, launch innovative products, and build valuable partnerships at India's leading international agriculture exhibition.
                </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-amber-50 p-8 sm:p-12 rounded-3xl border border-amber-100">
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
                    +91 99712 99631 &nbsp;|&nbsp; 997158 7831
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right mt-8 md:mt-0 flex flex-col justify-center items-center md:items-end">
                 <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <h3 className="font-bold text-slate-900 mb-2">Ready to secure your spot?</h3>
                    <p className="text-slate-500 text-sm mb-6">Visit the official event portal to read the brochure, view the floor plan, or register as an exhibitor.</p>
                    <a href="https://indiainternationalfarmingexpo.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full inline-flex items-center justify-center px-6 py-3">
                      Visit Official Expo Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
