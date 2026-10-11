import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import { Lock, ShieldCheck, EyeOff, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SmartCredit PrivacyMaster® & $1M Identity Fraud Protection',
  description: 'Scrub your personal information from data broker websites and protect your family with $1 Million identity theft insurance through SmartCredit PrivacyMaster.',
};

export default function PrivacyMasterPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>Identity & Data Broker Defense</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          SmartCredit PrivacyMaster®
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Automated data broker opt-out requests, dark web credential surveillance, and $1,000,000 in whole-family identity theft insurance coverage.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <h2 className="text-2xl font-black text-slate-900">
          The Hidden Link Between Data Brokers and Credit Fraud
        </h2>
        <p className="text-slate-700 leading-relaxed text-base">
          Identity theft rarely begins with a stolen physical wallet. In modern cybercrime, scammers purchase comprehensive consumer dossiers—including previous home addresses, phone numbers, relatives, and partial SSNs—from public people-search directories and data broker sites.
        </p>
        <p className="text-slate-700 leading-relaxed text-base">
          PrivacyMaster® continuously scans major data broker networks and automatically submits recurring opt-out and record deletion requests on your behalf. By cutting off the supply chain of your personal records, you drastically decrease your exposure to synthetic identity theft, unauthorized credit inquiries, and targeted phishing scams.
        </p>

        <h3 className="text-xl font-extrabold text-slate-900 pt-4">
          $1,000,000 Whole-Family Fraud Insurance
        </h3>
        <p className="text-slate-700 leading-relaxed text-base">
          If identity fraud ever does strike, you are backed by a comprehensive $1 Million policy covering legal representation, lost wages, and fraudulent transaction recovery, supported by dedicated US-based case restoration specialists.
        </p>
      </div>

      <AffiliateCtaBox
        title="Lock Down Your Financial Privacy Today"
        subtitle="Activate PrivacyMaster® and $1M family fraud defense with your SmartCredit 7-day trial."
      />
    </div>
  );
}
