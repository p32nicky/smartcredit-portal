import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { getCategories } from '@/lib/articles';

export default function Footer() {
  const categories = getCategories();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white">
                SmartCredit<span className="text-blue-500">Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An exhaustive consumer intelligence library featuring 500 strategic guides, deep dives into ScoreBuilder®, ScoreBoost™, patented Action buttons direct to 30,000+ creditors, and $1,000,000 identity fraud defense.
            </p>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit SmartCredit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Core Features
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/features/scorebuilder" className="hover:text-blue-400 transition-colors">
                  ScoreBuilder® 120-Day Plan
                </Link>
              </li>
              <li>
                <Link href="/features/scoreboost" className="hover:text-blue-400 transition-colors">
                  ScoreBoost™ Spending Simulator
                </Link>
              </li>
              <li>
                <Link href="/features/action-buttons" className="hover:text-blue-400 transition-colors">
                  Patented Action Buttons
                </Link>
              </li>
              <li>
                <Link href="/features/privacymaster" className="hover:text-blue-400 transition-colors">
                  PrivacyMaster® & $1M Insurance
                </Link>
              </li>
              <li>
                <Link href="/features/scoretracker" className="hover:text-blue-400 transition-colors">
                  ScoreTracker 3-Bureau Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Popular Clusters
            </h3>
            <ul className="space-y-2.5 text-xs">
              {categories.slice(0, 5).map(cat => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="hover:text-blue-400 transition-colors">
                    {cat.name} ({cat.count})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Search & SEO
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/articles" className="hover:text-blue-400 transition-colors">
                  500 Articles Directory
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-blue-400 transition-colors">
                  Topic Categories
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
                  XML Sitemap (500 URLs)
                </Link>
              </li>
              <li>
                <Link href="/robots.txt" className="hover:text-blue-400 transition-colors">
                  Robots.txt Directive
                </Link>
              </li>
              <li>
                <a href={SITE_CONFIG.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="hover:text-blue-400 transition-colors">
                  SmartCredit Official Signup
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-400 space-y-3">
          <p>
            <strong>Important Disclaimer:</strong> Any credit scores, score changes or available plus points shown or inferred are estimates only. Individual results and speed of results may vary, and results are not guaranteed. SmartCredit® is powered by the ConsumerDirect® platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© 2026 SmartCredit Resource Hub. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/articles" className="hover:text-slate-300">Articles</Link>
              <Link href="/categories" className="hover:text-slate-300">Categories</Link>
              <a href={SITE_CONFIG.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-400 hover:underline">
                Affiliate Referral Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
