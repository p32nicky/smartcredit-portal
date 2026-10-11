import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import { Layers, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SmartCredit ScoreTracker & Money Manager: 3-Bureau Dashboard',
  description: 'Track credit, auto, and insurance scores side-by-side with SmartCredit ScoreTracker and manage all your banking in one place with Money Manager.',
};

export default function ScoreTrackerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Unified Financial Intelligence</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          ScoreTracker & Money Manager
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Monitor your credit, auto, and insurance risk scores side-by-side while consolidating all bank, investment, and revolving credit card balances into a single dashboard.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-black text-slate-900">
          Beyond Standard Credit Scoring
        </h2>
        <p className="text-slate-700 leading-relaxed text-base">
          Most apps only display a single, generic credit score. But lenders, auto dealerships, and insurance companies don't look at just one score:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-extrabold text-slate-900 text-base">VantageScore 3.0</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Standard 3-bureau credit scores used by leading credit card issuers, fintechs, and modern personal loan underwriters.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-extrabold text-slate-900 text-base">Auto Risk Score</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Automotive financing score showing your probability of loan default on new, used, or leased vehicle financing.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-extrabold text-slate-900 text-base">Insurance Risk Score</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              The proprietary risk rating car and home insurers use to determine whether to double your monthly premiums.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 pt-4">
          Integrated Money Manager
        </h3>
        <p className="text-slate-700 leading-relaxed text-base">
          SmartCredit’s Money Manager connects with your checking, savings, and credit card accounts so you can track cash flows, set spending targets, and catch unauthorized transactions before they result in overdraft fees or missed payments.
        </p>
      </div>

      <AffiliateCtaBox
        title="Monitor All Your Scores in One Place"
        subtitle="Activate your 7-day SmartCredit trial and unlock ScoreTracker and Money Manager now."
      />
    </div>
  );
}
