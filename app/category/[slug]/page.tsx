import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategories, getArticlesByCategory, getArticleIndex } from '@/lib/articles';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import ArticleSearch from '@/components/ArticleSearch';
import { Tag, ChevronRight, BookOpen } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  const url = `${SITE_CONFIG.url}/category/${category.slug}`;

  return {
    title: `${category.name} Guides (${category.count} Articles) | ${SITE_CONFIG.shortName}`,
    description: `${category.description} Comprehensive library of ${category.count} data-backed credit guides.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${category.name} Guides | ${SITE_CONFIG.name}`,
      description: category.description,
      url,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const allArticles = getArticleIndex();
  const categoryArticles = allArticles.filter((a) => a.categorySlug === slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/categories" className="hover:text-blue-600 transition-colors">
          Categories
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-700 font-semibold">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-500/20 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>Thematic Cluster</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {category.name}
        </h1>
        <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
          {category.description}
        </p>
        <div className="pt-2 text-xs text-blue-200">
          Showing <strong>{category.count}</strong> complete, in-depth strategy guides in this category.
        </div>
      </div>

      {/* Article Search within Category */}
      <ArticleSearch
        initialArticles={allArticles}
        categories={categories}
        selectedCategory={category.slug}
      />

      <AffiliateCtaBox
        title={`Accelerate Your Progress in ${category.name}`}
        subtitle="Access 3-bureau reports, test ScoreBoost balance simulations, and send direct dispute actions to 30,000+ creditors with SmartCredit."
      />
    </div>
  );
}
