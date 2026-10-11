import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { getCategories, getArticleIndex } from '@/lib/articles';
import AffiliateCtaBox from '@/components/AffiliateCtaBox';
import JsonLd from '@/components/JsonLd';
import {
  ShieldCheck,
  Sparkles,
  Zap,
  ArrowRight,
  Sliders,
  CalendarCheck,
  Lock,
  Layers,
  CheckCircle,
  HelpCircle,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default function HomePage() {
  const categories = getCategories();
  const allArticles = getArticleIndex();
  const featuredArticles = allArticles.slice(0, 6);

  const homeFaq = [
    {
      question: "What is SmartCredit and how does it differ from other credit apps?",
      answer: "SmartCredit is an all-in-one credit and money management platform powered by ConsumerDirect. Unlike passive monitoring tools like Credit Karma, SmartCredit gives you patented Action buttons to communicate directly with over 30,000 creditors, ScoreBuilder® for a personalized 120-day action plan, ScoreBoost™ to simulate payment timing, and PrivacyMaster® with $1 Million whole-family fraud insurance."
    },
    {
      question: "What are SmartCredit's patented Action Buttons?",
      answer: "SmartCredit's patented Action buttons allow you to send electronic dispute notices, inquiries, or goodwill requests directly from your dashboard to creditors and bureaus. This bypasses slow mailrooms and automated bureau OCR scanners, resulting in faster and more accurate corrections."
    },
    {
      question: "How does ScoreBoost™ calculate payment timing?",
      answer: "Credit card issuers report balances on your statement closing date, not your payment due date. ScoreBoost simulates your exact balances and statement dates, calculating the exact day and dollar amount to pay to maximize points on your next credit bureau update."
    },
    {
      question: "Is there a trial available for SmartCredit?",
      answer: "Yes, SmartCredit offers a 7-day trial period so new members can pull their 3-bureau reports, test ScoreBoost simulations, and begin their personalized 120-day ScoreBuilder action plan."
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>500 Comprehensive Strategy Guides & Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            Take Direct Action on Your Credit. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Build Prime Scores in 120 Days.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            Stop sending slow certified letters. Master your credit with patented Action buttons connected to 30,000+ creditors, interactive ScoreBoost™ balance timing, and $1M family fraud defense.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={SITE_CONFIG.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-400 text-slate-950 shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-1"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>Start 7-Day Trial at SmartCredit</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              href="/articles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
            >
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Browse 500 Guides</span>
            </Link>
          </div>

          {/* Social Proof & Metrics */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="font-extrabold text-xl sm:text-2xl text-white">30,000+</span>
              </div>
              <p className="text-xs text-slate-400">Direct Creditors Connected</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <CalendarCheck className="w-4 h-4" />
                <span className="font-extrabold text-xl sm:text-2xl text-white">120 Days</span>
              </div>
              <p className="text-xs text-slate-400">ScoreBuilder® Roadmap</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-extrabold text-xl sm:text-2xl text-white">$1,000,000</span>
              </div>
              <p className="text-xs text-slate-400">Family Fraud Insurance</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="font-extrabold text-xl sm:text-2xl text-white">500</span>
              </div>
              <p className="text-xs text-slate-400">In-Depth Action Guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Patented Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why SmartCredit Outperforms Standard Monitoring
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Standard credit apps merely display your score. SmartCredit provides active, patented tools to repair derogatory items, simulate score points, and safeguard your personal data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">
              Patented Action Buttons
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Communicate electronically with over 30,000 creditors directly from your dashboard. Ask questions, report errors, or dispute late payments without paper letters.
            </p>
            <Link
              href="/features/action-buttons"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Explore Action Buttons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">
              ScoreBoost™ Spending Simulator
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Don't guess when to pay cards. ScoreBoost simulates statement closing snapshots, giving you exact dates and dollar amounts to pay to maximize algorithm points.
            </p>
            <Link
              href="/features/scoreboost"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-700"
            >
              <span>Learn About ScoreBoost</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">
              ScoreBuilder® 120-Day Plan
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Receive a personalized, prioritized 120-day roadmap. ScoreBuilder sequences your actions so you target the highest-impact negative marks first for maximum score jump.
            </p>
            <Link
              href="/features/scorebuilder"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              <span>View 120-Day Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">
              PrivacyMaster® & Data Removal
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Data brokers sell your home address and phone numbers to scammers. PrivacyMaster automates opt-out requests across public search repositories to protect your privacy.
            </p>
            <Link
              href="/features/privacymaster"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
            >
              <span>Discover PrivacyMaster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">
              $1 Million Fraud Insurance
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Rest easy knowing you and your whole family are backed by a $1,000,000 identity fraud insurance policy and dedicated professional case restoration support.
            </p>
            <a
              href={SITE_CONFIG.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700"
            >
              <span>Activate Protection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">
              ScoreTracker & Money Manager
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              View your credit, auto, and insurance scores side-by-side, while consolidating checking, savings, and credit cards in one unified budgeting dashboard.
            </p>
            <Link
              href="/features/scoretracker"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
            >
              <span>Explore ScoreTracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Affiliate Conversion Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AffiliateCtaBox
          title="Ready to Build Prime Credit with Patented Technology?"
          subtitle="Start your 7-day trial of SmartCredit today. Access your 3-bureau reports, simulate your score jump with ScoreBoost™, and launch your 120-day plan."
        />
      </div>

      {/* 10 Topic Categories Hub Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Comprehensive Coverage
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Explore All 10 Topic Hubs
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              50 in-depth articles per cluster addressing every facet of credit repair, mortgage prep, and debt recovery.
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {cat.count} Guides
                </span>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600">
                <span>Browse Cluster</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Strategic Articles */}
      <section className="py-16 bg-slate-100/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Featured Guides
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Latest High-Impact Case Studies
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Step-by-step blueprints solving the most common consumer credit obstacles.
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Browse All 500 Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-[11px]">{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">{article.date}</span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about SmartCredit features, pricing, and trial membership.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaq.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2"
            >
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{item.question}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join thousands of smart consumers who have upgraded their credit scores, removed errors with patented Action buttons, and protected their families with $1M insurance.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-400 text-slate-950 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>Get Started with SmartCredit Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
