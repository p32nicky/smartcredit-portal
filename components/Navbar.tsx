import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  SmartCredit<span className="text-blue-600">Hub</span>
                </span>
                <span className="text-[10px] text-slate-700 tracking-wider font-semibold uppercase">
                  Action & Strategy Guide
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link href="/articles" className="hover:text-blue-600 transition-colors">
              All 500 Articles
            </Link>
            <Link href="/categories" className="hover:text-blue-600 transition-colors">
              Topic Hubs
            </Link>
            <Link href="/features/scorebuilder" className="hover:text-blue-600 transition-colors">
              ScoreBuilder®
            </Link>
            <Link href="/features/scoreboost" className="hover:text-blue-600 transition-colors">
              ScoreBoost™
            </Link>
            <Link href="/features/action-buttons" className="hover:text-blue-600 transition-colors">
              Action Buttons
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Join SmartCredit</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
