import { Info } from 'lucide-react';

export default function AffiliateBanner() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <p className="leading-tight">
            <span className="font-semibold text-slate-200">FTC Affiliate Disclosure:</span> We provide independent consumer finance analysis. If you click our links and register for SmartCredit, we may earn an affiliate commission at no additional cost to you.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-3 shrink-0 text-[11px] font-medium text-slate-300">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Official SmartCredit Partner Link Verified</span>
        </div>
      </div>
    </div>
  );
}
