import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { policiesData } from '../../data/policies';

export default function PolicyModal({ policyType, isOpen, onClose }) {
  if (!isOpen || !policyType || !policiesData[policyType]) return null;

  const policy = policiesData[policyType];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" />

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-3xl bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-800 max-h-[85vh] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-amber-50 text-amber-700 border border-amber-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900">
                {policy.title}
              </h2>
              <span className="text-xs font-sans text-slate-500">
                Last Updated: {policy.lastUpdated} • SNOWFLAKZ Makhana
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close policy view"
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Sections */}
        <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
          {policy.sections.map((section, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded border border-slate-200">
              <h3 className="font-serif font-bold text-base text-slate-900 mb-2">
                {section.heading}
              </h3>
              <div className="whitespace-pre-line text-slate-600 text-xs sm:text-sm">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Questions? Email us at <a href="mailto:info@snowflakz.com" className="text-amber-700 font-semibold hover:underline">info@snowflakz.com</a></span>
          <button onClick={onClose} className="btn-secondary text-xs">
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
}
