import { SITE_CONFIG } from '@/lib/config';
import { ShieldCheck, Sparkles, Star, CheckCircle2, ArrowRight, Zap, Lock } from 'lucide-react';

interface AffiliateCtaBoxProps {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'inline' | 'compact';
}

export default function AffiliateCtaBox({
  title = "Take Direct Control of Your Credit Profile Today",
  subtitle = "Join over 100,000 consumers using SmartCredit's patented Action buttons, ScoreBuilder®, and ScoreBoost™ to repair errors and build higher scores.",
  variant = 'primary'
}: AffiliateCtaBoxProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 shadow-xl border border-blue-700/50 my-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Recommended DIY Credit Platform</span>
            </div>
            <h4 className="font-extrabold text-lg text-white">{title}</h4>
            <p className="text-blue-100 text-xs">{subtitle}</p>
          </div>
          <a
            href={SITE_CONFIG.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95"
          >
            <span>Activate 7-Day Trial</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-10 shadow-2xl border border-blue-500/30 my-10">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Official SmartCredit® Access Portal</span>
            <span className="text-slate-400">|</span>
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <Star className="w-3 h-3 fill-amber-300" />
              <span>4.9 / 5.0 Rating</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h3>

          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-200 text-left">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Patented Action buttons direct to 30,000+ creditors</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>ScoreBoost™ balance & payment day simulator</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>ScoreBuilder® prioritized 120-day roadmap</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>$1,000,000 whole-family fraud insurance</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto">
          <a
            href={SITE_CONFIG.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-400 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>Join Now at SmartCredit</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>256-Bit Bank Security</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span>100% Soft Pull (No Score Hit)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
