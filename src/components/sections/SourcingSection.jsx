import React from 'react';
import { Leaf, ShieldCheck, Sparkles, Award, MapPin, CheckCircle2 } from 'lucide-react';

export default function SourcingSection() {
  const processSteps = [
    {
      step: '01',
      title: 'Organic Wetland Cultivation',
      desc: 'Sourced from pristine freshwater lotus ponds of Bihar and certified organic farms without synthetic fertilizers or chemical pesticides.',
      tag: '100% Organic Source'
    },
    {
      step: '02',
      title: 'Hygienic Washing & Destoning',
      desc: 'Automated machine cleaning, gravity destoning, and multi-stage stainless steel sorting eliminate dust and impurities.',
      tag: 'Zero Human Contact'
    },
    {
      step: '03',
      title: 'Precision Popping & Air Dehydration',
      desc: 'Makhana is hand-popped at high heat. Garlic, onion, cumin, and coconut are dehydrated under 60°C to lock in essential oils.',
      tag: 'Moisture Controlled'
    },
    {
      step: '04',
      title: 'ISO Cleanroom Packaging',
      desc: 'Packaged in sanitary, FSSAI & ISO 22000 certified cleanrooms using moisture-barrier foil packaging for long shelf life.',
      tag: 'Lab Quality Inspected'
    },
  ];

  return (
    <section id="sourcing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-3 font-sans">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            ORGANIC & HYGIENIC FARMING & PROCESSING
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-slate-900 mb-4">
            Farm to Factory Transparency
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            From certified organic aquatic lotus harvesting to automated cleanroom dehydration and roasting, Snowflakz Foods adheres to strict international food safety standards.
          </p>
        </div>

        {/* Feature Grid: Organic & Hygienic Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Detailed Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-1">
                    100% Organic & Chemical-Free Farming
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Our lotus seeds, cumin, garlic, onions, and copra are harvested from non-GMO certified organic farms. We ensure zero exposure to synthetic fertilizers, chemical preservatives, or artificial enhancers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-1">
                    Hygienic Cleanroom Dehydration & Processing
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Processed inside sanitary ISO 22000 & HACCP compliant facilities. Low-temperature air dehydration locks in essential volatile oils, natural pungency, and vital nutrients with strict moisture control under 5%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-1">
                    100% Direct Pond-to-Pack Traceability
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Every batch comes with complete farm-level origin tracking. Our direct contract farming guarantees fair trade pricing to local farmers while providing commercial buyers with total transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans text-xs font-semibold text-slate-700">
              <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-GMO</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pesticide Free</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISO Certified</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>FSSAI Approved</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Process Images */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="relative h-48 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/assets/1718795813makhana-harvesrtwebp.jpg"
                  alt="Organic Wetland Harvest"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
                />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px] font-sans">
                  ORGANIC HARVEST
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900 px-1">Organic Wetland Harvesting</h4>
              <p className="text-slate-500 text-xs px-1 font-sans">Harvested by skilled farmers from pristine freshwater ponds.</p>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="relative h-48 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/assets/factory.webp"
                  alt="Hygienic Roasting Facility"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/12-1-scaled.jpg'; }}
                />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded bg-amber-600 text-white font-bold text-[10px] font-sans">
                  SANITARY FACILITY
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900 px-1">Hygienic Cleanroom Processing</h4>
              <p className="text-slate-500 text-xs px-1 font-sans">Automated destoning, roasting, and sanitary air dehydration.</p>
            </div>
          </div>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s) => (
            <div key={s.step} className="plain-card p-6 flex flex-col justify-between group hover:border-amber-400 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-serif font-bold text-amber-600">{s.step}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold font-sans">
                    {s.tag}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
