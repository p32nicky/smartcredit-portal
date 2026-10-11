import articlesData from '@/data/articles.json';
import indexData from '@/data/articles-index.json';
import { Article } from '@/scripts/generate-articles';

export interface ArticleSummary {
  id: number;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  readTime: string;
  date: string;
  targetKeyword: string;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
  description: string;
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "score-improvement": "Data-driven strategies, 120-day roadmaps, and ScoreBoost tactics to elevate your credit score quickly.",
  "credit-disputes-bureau-errors": "Patented Action Buttons direct to 30,000+ creditors and bureaus. Eliminate inaccuracies without mailing letters.",
  "identity-theft-privacy": "PrivacyMaster, dark web monitoring, $1 Million identity fraud insurance, and automated data broker removals.",
  "mortgage-home-loans": "Prepare your credit for conventional, FHA, and VA home loans. Qualify for the lowest interest rates.",
  "auto-loans-financing": "Lower car payments, escape subprime auto APRs, and negotiate dealership financing with prime credit.",
  "credit-card-management": "Master statement cut dates vs due dates, eliminate utilization drag, and qualify for premium rewards cards.",
  "monitoring-comparison": "Compare SmartCredit vs Credit Karma, Experian, and IdentityIQ. Master VantageScore vs FICO dynamics.",
  "debt-collections-recovery": "Navigate third-party collections, validate debts legally, leverage FDCPA protections, and remove zombie tradelines.",
  "life-milestones-credit": "Rebuild credit after bankruptcy, divorce, job loss, illness, or student loan rehabilitation.",
  "consumer-credit-laws": "Master the FCRA, FDCPA, CFPB regulations, and Metro 2 guidelines. Protect your legal rights against bureaus."
};

const articlesMap = new Map<string, Article>();
for (const article of articlesData as Article[]) {
  articlesMap.set(article.slug, article);
}

export function getAllArticles(): Article[] {
  return articlesData as Article[];
}

export function getArticleIndex(): ArticleSummary[] {
  return indexData as ArticleSummary[];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesMap.get(slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return (articlesData as Article[]).filter(a => a.categorySlug === categorySlug);
}

export function getRelatedArticles(currentSlug: string, categorySlug: string, count = 4): ArticleSummary[] {
  const matching = (indexData as ArticleSummary[])
    .filter(a => a.categorySlug === categorySlug && a.slug !== currentSlug);
  return matching.slice(0, count);
}

export function getCategories(): CategoryInfo[] {
  const counts: Record<string, { name: string; count: number }> = {};
  for (const a of indexData as ArticleSummary[]) {
    if (!counts[a.categorySlug]) {
      counts[a.categorySlug] = { name: a.category, count: 0 };
    }
    counts[a.categorySlug].count++;
  }

  return Object.entries(counts).map(([slug, data]) => ({
    name: data.name,
    slug,
    count: data.count,
    description: CATEGORY_DESCRIPTIONS[slug] || "Comprehensive credit analysis and consumer guidance."
  }));
}
