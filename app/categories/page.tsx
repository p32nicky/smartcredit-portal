import { Metadata } from 'next';
import Link from 'next/link';
import { getCategories } from '@/lib/articles';
import { Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';

export const metadata: Metadata = {
  title: 'Credit Strategy Topic Categories | 10 Thematic Hubs',
  description: 'Explore 10 comprehensive topic categories covering 500 strategic guides: credit repair, ScoreBoost utilization, 30,000+ creditor disputes, and identity defense.',
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>Topic Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          10 Strategic Topic Clusters
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Each topic hub contains 50 specialized, in-depth guides designed to help you tackle specific credit challenges, optimize scoring algorithms, and enforce your federal consumer rights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold text-blue-700 bg-blue-50">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{cat.count} Detailed Guides</span>
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/category/${cat.slug}`}>
                  {cat.name}
                </Link>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 font-bold text-xs text-blue-600 group-hover:text-blue-700"
              >
                <span>Explore All {cat.count} Guides</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <AffiliateCtaBox
        title="Ready to Put Knowledge into Action?"
        subtitle="Experience the power of direct creditor disputes, interactive ScoreBoost simulations, and $1M family fraud defense with SmartCredit."
      />
    </div>
  );
}
