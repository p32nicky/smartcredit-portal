import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import { CalendarCheck, CheckCircle2, ArrowRight, Zap, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SmartCredit ScoreBuilder®: 120-Day Credit Transformation Plan',
  description: 'Learn how SmartCredit ScoreBuilder creates a personalized 120-day roadmap targeting high-impact derogatory marks first to maximize credit score gains.',
};

export default function ScoreBuilderPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Proprietary 120-Day Engine</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          SmartCredit ScoreBuilder®
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          The step-by-step 120-day blueprint designed to systematically eliminate negative tradelines, prioritize high-value score victories, and build prime credit.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-black text-slate-900">
          How ScoreBuilder® Works
        </h2>
        <p className="text-slate-700 leading-relaxed text-base">
          When consumers face derogatory marks—such as late payments, collection accounts, or charge-offs—they often feel overwhelmed. Disputing 10 tradelines simultaneously without an algorithmic strategy frequently triggers bureau automated frivolous rejections and wastes critical time.
        </p>
        <p className="text-slate-700 leading-relaxed text-base">
          ScoreBuilder® audits your entire 3-bureau report (TransUnion, Experian, Equifax) and prioritizes each negative item based on two critical variables: <strong>Point Recovery Value</strong> and <strong>Likelihood of Deletion</strong>. It organizes your actions into clear, bite-sized weekly milestones across a 120-day timeline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
            <span className="text-2xl font-black text-blue-600">Day 1 - 30</span>
            <h3 className="font-extrabold text-slate-900 text-base">Audit & High-Impact Targets</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Identify low-hanging fruit: incorrect personal details, unverified collections, and recent high-impact 30-day lates.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2">
            <span className="text-2xl font-black text-cyan-600">Day 31 - 60</span>
            <h3 className="font-extrabold text-slate-900 text-base">Direct Creditor Actions</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Deploy patented Action buttons directly to 30,000+ creditors for electronic reconciliation and dispute response.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
            <span className="text-2xl font-black text-indigo-600">Day 61 - 120</span>
            <h3 className="font-extrabold text-slate-900 text-base">Re-Aging Defenses & Growth</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Enforce FCRA Section 611 deletions, confirm updated $0 balance reporting, and stabilize new prime tradelines.
            </p>
          </div>
        </div>
      </div>

      <AffiliateCtaBox
        title="Activate Your ScoreBuilder® 120-Day Plan"
        subtitle="Start your 7-day trial of SmartCredit and receive your customized 120-day credit score recovery roadmap immediately."
      />
    </div>
  );
}
