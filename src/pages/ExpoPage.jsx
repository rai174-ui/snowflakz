import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';

export default function ExpoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 px-8 py-14 text-center text-white relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://indiainternationalfarmingexpo.com/wp-content/uploads/2026/06/farming-expo.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 leading-tight">India International Farming Expo 2027</h1>
              <p className="text-amber-400 font-semibold text-lg sm:text-xl tracking-wide uppercase">Proudly Co-Organized by Snowflakz Foods</p>
            </div>
          </div>
          
          <div className="p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Event</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Join the <strong>India International Farming Expo 2027</strong>! Explore groundbreaking innovations in agriculture, poultry, dairy, aquaculture, horticulture, machinery, and allied industries. As a leading voice in agricultural value-addition and healthy snacking, <strong>Snowflakz Foods</strong> is thrilled to be a co-organizer for this premier event, bridging the gap between farm innovations and consumer nutrition.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl mr-4 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Venue</h3>
                  <p className="text-slate-600">India<br/><span className="text-sm opacity-80">(Location TBA)</span></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl mr-4 shadow-sm">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Dates</h3>
                  <p className="text-slate-600">2027</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Partner with Us</h2>
              <p className="text-slate-600 mb-6">For exhibition stalls, sponsorships, or general inquiries regarding our participation in the Expo, please contact the Snowflakz team directly:</p>
              
              <div className="space-y-4">
                <a href="mailto:info@snowflakz.com" className="flex items-center text-slate-700 hover:text-amber-600 font-medium transition-colors">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mr-4">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  info@snowflakz.com
                </a>
                <div className="flex items-center text-slate-700 font-medium">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mr-4">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  +91 99712 99631 &nbsp;|&nbsp; 997158 7831
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href="https://indiainternationalfarmingexpo.com/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
                Visit Official Expo Website
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
