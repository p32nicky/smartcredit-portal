import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import { Sliders, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SmartCredit ScoreBoost™: Credit Card Spending & Payment Timing Simulator',
  description: 'Understand how credit card balances affect credit scores. Use SmartCredit ScoreBoost to calculate the exact dates and amounts to pay down debt.',
};

export default function ScoreBoostPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider">
          <Sliders className="w-3.5 h-3.5" />
          <span>Interactive Spending Simulator</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          SmartCredit ScoreBoost™
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          The patented simulation engine that reveals how credit card spending, payment timing, and statement cut dates directly influence your credit scores.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-black text-slate-900">
          The Statement Date vs Due Date Dilemma
        </h2>
        <p className="text-slate-700 leading-relaxed text-base">
          Did you know that paying your credit card on the due date does <strong>not</strong> guarantee a low reported utilization? Credit card companies take a snapshot of your account balance on your <strong>statement closing date</strong> and transmit that number to TransUnion, Experian, and Equifax.
        </p>
        <p className="text-slate-700 leading-relaxed text-base">
          If you charge $4,000 on a $5,000 card limit during the month, the bureau records an 80% utilization ratio—even if you pay the balance off three weeks later on your due date! This single reporting misunderstanding costs millions of borrowers 30 to 70 points every single month.
        </p>

        <h3 className="text-xl font-extrabold text-slate-900 pt-4">
          How ScoreBoost™ Solves This
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Interactive Balance Sliders</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Adjust sliders on each credit card to see how much your score will rise before you spend or pay off cash.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Exact Payment Calendar</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ScoreBoost displays the exact calendar dates to submit payments so that zero or minimal balances are reported to bureaus.
            </p>
          </div>
        </div>
      </div>

      <AffiliateCtaBox
        title="Simulate Your Credit Score Jump Today"
        subtitle="Test the ScoreBoost™ simulator with your live card balances on SmartCredit's 7-day trial."
      />
    </div>
  );
}
