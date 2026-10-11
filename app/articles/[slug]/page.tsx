import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getArticleBySlug, getRelatedArticles, getArticleIndex } from '@/lib/articles';
import { SITE_CONFIG } from '@/lib/config';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import JsonLd from '@/components/JsonLd';
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Zap,
  Tag,
  Share2,
  ExternalLink
} from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getArticleIndex();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const url = `${SITE_CONFIG.url}/articles/${article.slug}`;

  return {
    title: `${article.title} | ${SITE_CONFIG.shortName}`,
    description: article.description,
    keywords: [article.targetKeyword, 'smartcredit', 'credit repair', 'credit score improvement', article.category.toLowerCase()],
    authors: [{ name: article.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.categorySlug, 4);

  // Structured Data Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: article.category,
        item: `${SITE_CONFIG.url}/category/${article.categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${SITE_CONFIG.url}/articles/${article.slug}`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/articles/${article.slug}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/categories" className="hover:text-blue-600 transition-colors">
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href={`/category/${article.categorySlug}`}
            className="hover:text-blue-600 transition-colors font-medium text-slate-700"
          >
            {article.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-400 truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/category/${article.categorySlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-lg transition-colors"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </Link>
            <span className="text-xs text-slate-400">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {article.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" />
              <span className="font-semibold text-slate-700">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Target Focus:</span>
              <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                {article.targetKeyword}
              </span>
            </div>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8 space-y-10">
            {/* Section 1: Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                The Consumer Credit Landscape
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4 text-base">
                <p>{article.overview}</p>
              </div>
            </section>

            {/* Section 2: Pain Point Analysis */}
            <section className="space-y-4 bg-amber-50/60 p-6 sm:p-8 rounded-3xl border border-amber-200/80">
              <h2 className="text-xl font-extrabold text-amber-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>Why Conventional Approaches Fail Consumers</span>
              </h2>
              <div className="text-slate-800 leading-relaxed space-y-4 text-sm sm:text-base">
                <p>{article.painPointAnalysis}</p>
              </div>
            </section>

            {/* Mid-Article Affiliate Callout */}
            <div className="my-8">
              <AffiliateCtaBox
                title="Don't Let Bureau Errors Cost You Thousands"
                subtitle="SmartCredit's patented Action buttons connect you directly to over 30,000 creditors for fast, verifiable resolution."
                variant="compact"
              />
            </div>

            {/* Section 3: SmartCredit Solution */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                How SmartCredit Delivers Measurable Results
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4 text-base">
                <p>{article.smartcreditSolution}</p>
              </div>
            </section>

            {/* Section 4: 4-Step Action Blueprint */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Step-by-Step Action Blueprint
              </h2>
              <div className="space-y-4">
                {article.stepByStep.map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                      {s.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-base text-slate-900">
                        {s.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Comparison Table */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Traditional DIY Methods vs SmartCredit Direct Action
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-4">Process / Capability</th>
                      <th className="p-4 text-slate-500">Traditional DIY Credit Repair</th>
                      <th className="p-4 text-blue-700 bg-blue-50/80">SmartCredit Direct Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {article.comparison.map((c, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">{c.feature}</td>
                        <td className="p-4 text-slate-600 text-xs sm:text-sm">{c.traditional}</td>
                        <td className="p-4 font-semibold text-blue-900 bg-blue-50/30 text-xs sm:text-sm">
                          {c.smartcredit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Key Takeaways */}
            <section className="space-y-4 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-800">
              <h2 className="text-xl font-black flex items-center gap-2 text-cyan-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Key Strategic Takeaways</span>
              </h2>
              <ul className="space-y-3 text-sm text-slate-200">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: FAQs */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2"
                  >
                    <h3 className="font-bold text-slate-900 text-base">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Primary Conversion Block */}
            <div className="pt-6">
              <AffiliateCtaBox
                title={`Master Your Credit Profile with SmartCredit`}
                subtitle={`Take action on ${article.targetKeyword} today. Access 3-bureau reports, test ScoreBoost simulations, and deploy patented Action buttons.`}
              />
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Action Card */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 rounded-3xl shadow-xl border border-blue-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 mx-auto flex items-center justify-center text-slate-950 font-black shadow-md">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                    Official Referral
                  </span>
                  <h3 className="font-extrabold text-xl text-white mt-1">
                    Start Your 7-Day Trial
                  </h3>
                  <p className="text-xs text-blue-200 mt-2 leading-relaxed">
                    Test ScoreBoost™, activate your 120-day plan, and direct-action 30,000+ creditors with zero risk.
                  </p>
                </div>

                <a
                  href={SITE_CONFIG.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-black text-sm bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md transition-all transform hover:scale-105 active:scale-95"
                >
                  <span>Join SmartCredit Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-blue-300">
                  100% Soft Pull • No Impact on Credit Score
                </p>
              </div>

              {/* Related Articles in Category */}
              {relatedArticles.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                    Related {article.category} Guides
                  </h3>
                  <div className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/articles/${rel.slug}`}
                        className="group block space-y-1 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <h4 className="font-bold text-xs text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400">
                          <span>{rel.readTime}</span>
                          <span>•</span>
                          <span>{rel.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={`/category/${article.categorySlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      <span>View All in {article.category}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
