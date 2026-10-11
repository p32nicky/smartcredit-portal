import { Metadata } from 'next';
import { getArticleIndex, getCategories } from '@/lib/articles';
import ArticleSearch from '@/components/ArticleSearch';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All 5,000 Credit Guides & Strategic Articles',
  description: 'Search and browse our library of 5,000 data-backed guides covering credit repair, 120-day roadmaps, ScoreBoost simulations, direct dispute actions, and mortgage readiness.',
};

export default function ArticlesPage() {
  const articles = getArticleIndex();
  const categories = getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Full Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          5,000 Action-Driven Credit Guides
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Search across all 10 thematic clusters. Find exact step-by-step roadmaps to dispute inaccuracies, master statement closing dates, eliminate zombie collections, and prepare for prime loan rates.
        </p>
      </div>

      {/* Search & Filter Component */}
      <ArticleSearch initialArticles={articles} categories={categories} />

      {/* Mid-page affiliate CTA */}
      <AffiliateCtaBox
        title="Ready to Start Your Credit Transformation?"
        subtitle="Put these guides into practice. Use SmartCredit's patented Action buttons and ScoreBoost simulator today."
        variant="compact"
      />
    </div>
  );
}
