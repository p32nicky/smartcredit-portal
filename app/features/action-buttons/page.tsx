import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import { Zap, CheckCircle2, ShieldCheck, MailX } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SmartCredit Patented Action Buttons: Direct to 30,000+ Creditors',
  description: 'Bypass certified letters. Use SmartCredit patented Action buttons to send factual, electronic dispute and verification notices directly to creditors and bureaus.',
};

export default function ActionButtonsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>Patented Communication Technology</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Patented Action Buttons Direct to 30,000+ Creditors
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          The fastest, most legally sound way to communicate with financial institutions, dispute errors, and correct derogatory remarks without mailing a single letter.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-black text-slate-900">
          The Problem with Traditional Bureau Mailings
        </h2>
        <p className="text-slate-700 leading-relaxed text-base">
          For decades, traditional credit repair involved drafting generic letters and mailing them via certified USPS mail to bureau mailrooms. When these letters arrive at credit bureau facilities, they are fed into optical character recognition (OCR) scanners that reduce complex disputes into generic 2-digit e-OSCAR codes. In many cases, bureaus dismiss them as "frivolous" or "unverified."
        </p>

        <h3 className="text-xl font-extrabold text-slate-900 pt-4">
          The SmartCredit Direct Action Advantage
        </h3>
        <p className="text-slate-700 leading-relaxed text-base">
          ConsumerDirect’s patented Action button technology changes the game. By clicking an Action button next to any tradeline in your SmartCredit report:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Direct Electronic Transmission</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Your inquiry is delivered straight to the compliance or loss mitigation desk of over 30,000 banks, loan servicers, and collection agencies.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Legally Documented Paper Trail</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Every transmission is time-stamped and recorded, establishing verifiable proof of contact under FCRA and FDCPA statutes.
            </p>
          </div>
        </div>
      </div>

      <AffiliateCtaBox
        title="Experience Direct Creditor Action Today"
        subtitle="Start your SmartCredit 7-day trial and take direct electronic action on your credit report."
      />
    </div>
  );
}
