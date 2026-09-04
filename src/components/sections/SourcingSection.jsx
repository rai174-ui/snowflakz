import React from 'react';

export default function SourcingSection() {
  const steps = [
    { step: '01', title: 'Wetland Harvesting', desc: 'Lotus seed pods harvested from clean Bihar freshwater ponds.' },
    { step: '02', title: 'Sun Drying & Grading', desc: 'Sun-dried and sorted for size and pristine quality.' },
    { step: '03', title: 'High Temp Popping', desc: 'Heated in cast-iron pans and hand-popped into fluffy makhana.' },
    { step: '04', title: 'Slow Olive-Oil Roasting', desc: 'Slow-roasted in olive oil with natural gourmet seasoning.' },
  ];

  return (
    <section id="sourcing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2 font-sans">
              FARM TO BOWL TRANSPARENCY
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-slate-900 mb-4">
              Traceable to Source & Chemical Free
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Sourced from trusted farmers, our Makhana is fully traceable to its origin — no secrets, just honesty.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our Makhana is completely free from chemicals, pesticides, or harmful preservatives. Hand-roasted and perfectly seasoned.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
              <img
                src="/assets/1718795813makhana-harvesrtwebp.jpg"
                alt="Makhana Harvest"
                className="w-full h-48 object-cover rounded"
                onError={(e) => { e.target.src = '/assets/10-1-scaled.jpg'; }}
              />
              <span className="text-xs font-bold text-slate-800 block mt-2">Wetland Harvesting</span>
            </div>

            <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
              <img
                src="/assets/factory.webp"
                alt="Roasting Facility"
                className="w-full h-48 object-cover rounded"
                onError={(e) => { e.target.src = '/assets/12-1-scaled.jpg'; }}
              />
              <span className="text-xs font-bold text-slate-800 block mt-2">Clean Roasting Facility</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="plain-card p-5">
              <span className="text-2xl font-serif font-bold text-amber-600 block mb-2">{s.step}</span>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-1">{s.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
