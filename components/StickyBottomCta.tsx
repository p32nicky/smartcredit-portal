'use client';

import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function StickyBottomCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-auto sm:right-6 z-40 max-w-md animate-in fade-in slide-in-from-bottom duration-300">
      <div className="bg-slate-950 text-white rounded-2xl p-4 shadow-2xl border border-blue-500/50 flex items-center justify-between gap-4 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm text-white leading-tight">Ready to Boost Your Credit?</p>
            <p className="text-xs text-slate-300">ScoreBuilder® 120-Day Plan</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SITE_CONFIG.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md transition-all whitespace-nowrap"
          >
            <span>Start Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
