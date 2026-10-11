# SmartCredit Affiliate Portal: Vercel & Google Search Console Setup

This guide walks you through deploying your **5,000-article** affiliate portal to **Vercel** and optimizing it for **Google Search Console (GSC)** indexing.

---

## 1. Affiliate Link Details
- **Target Affiliate Link:** `https://www.smartcredit.com/join/?pid=46160`
- **Link Attribute Standards:** Tagged with `rel="noopener noreferrer sponsored"` across all CTAs, navigation buttons, and sticky widgets to strictly comply with Google affiliate guidelines and FTC disclosure rules.

---

## 2. 5,000 Articles Architecture & Performance
Your portal features **5,000 distinct, programmatic SEO articles** organized into 10 high-intent clusters (500 articles per cluster):
1. **Score Improvement & Optimization (500 articles):** 25 score jumps (500 to 650, 580 to 740, etc.) x 20 utilization and timing tactics.
2. **Direct Creditor Disputes (500 articles):** 25 major banks (Chase, Capital One, Amex, Discover, etc.) x 20 dispute scenarios.
3. **Debt Collections & Legal Defense (500 articles):** 25 major collection agencies (Midland, Portfolio, LVNV, etc.) x 20 FDCPA defense angles.
4. **State-Specific Credit Rights (500 articles):** 50 US States x 10 legal consumer protection statutes.
5. **Mortgage & Home Loan Readiness (500 articles):** 25 mortgage programs x 20 underwriting and tri-merge credit prep hurdles.
6. **Auto Loans & Vehicle Financing (500 articles):** 25 auto finance brands x 20 subprime refinance and repossession tactics.
7. **Credit Card Management & Utilization (500 articles):** 25 premier rewards cards x 20 statement cut date & balance tricks.
8. **Identity Theft & Privacy Defense (500 articles):** 25 identity theft and data leak scenarios x 20 PrivacyMaster recovery plans.
9. **Life Events & Credit Recovery (500 articles):** 25 life milestones (bankruptcy, divorce, job loss) x 20 rebuilding milestones.
10. **Consumer Rights & Credit Laws (500 articles):** 25 credit statutes (FCRA, FDCPA, CFPB, Metro 2) x 20 statutory enforcement actions.

### High-Performance Hybrid ISR Engine
- **Instant Build Time:** Builds in ~10 seconds by prerendering core hub pages and top articles, while using Next.js on-demand rendering and Vercel edge caching for the remaining articles.
- **Sitemap Coverage:** `/sitemap.xml` dynamically lists all **5,000 article URLs** so Googlebot crawls and indexes every page.
- **Client Search:** High-speed client-side search and filtering across all 5,000 articles with zero latency.

---

## 3. Deploying to Vercel (2 Simple Options)

### Option A: 1-Click Deployment via Vercel CLI
From the project folder (`C:\Users\nickd\.gemini\antigravity\scratch\smartcredit-portal`):

```bash
# 1. Login to Vercel (if not already logged in)
npx vercel login

# 2. Deploy to production
npx vercel --prod
```
The CLI will automatically detect Next.js and deploy the site in ~45 seconds.

### Option B: Deploying via GitHub / GitLab / Bitbucket
1. Initialize or push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete 5,000-article SmartCredit affiliate portal"
   git remote add origin https://github.com/YOUR_USERNAME/smartcredit-portal.git
   git push -u origin master
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `smartcredit-portal` repository.
4. Add the Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com` (or your `.vercel.app` URL)
   - `NEXT_PUBLIC_GSC_VERIFICATION`: *(Your Google Search Console token)*
5. Click **Deploy**.

---

## 4. Google Search Console (GSC) Setup & Optimization

Your portal is engineered specifically for fast Google crawling and rich snippets:

### Step 1: Add Property in Google Search Console
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Choose **URL prefix** (e.g. `https://smartcredit-portal.vercel.app` or your custom domain).

### Step 2: Verification
Choose **HTML tag** verification:
1. Copy the code from Google, which looks like:
   `<meta name="google-site-verification" content="YOUR_TOKEN_HERE" />`
2. Add your token to your Vercel Environment Variables:
   - Variable Name: `NEXT_PUBLIC_GSC_VERIFICATION`
   - Value: `YOUR_TOKEN_HERE`
3. Redeploy on Vercel, or click **Verify** in Google Search Console.

### Step 3: Submit Your XML Sitemap
1. In Google Search Console, go to **Index** > **Sitemaps**.
2. In the "Add a new sitemap" box, enter:
   `sitemap.xml`
3. Click **Submit**.
4. The sitemap will automatically submit all **5,018 URLs** (all 5,000 articles + categories + feature hubs + homepage) directly to Googlebot for immediate crawl prioritization.

---

## 5. Built-in SEO & Schema Features

| Feature | Implementation | Purpose |
| :--- | :--- | :--- |
| **Dynamic Sitemap** | `/sitemap.xml` | Feeds all 5,000 articles + categories to search engines with update frequencies. |
| **Robots Directive** | `/robots.txt` | Directs all search crawlers to index pages and references `/sitemap.xml`. |
| **Article Schema** | JSON-LD `Article` on every guide | Enables Google rich cards with headline, publisher, author, and date. |
| **FAQPage Schema** | JSON-LD `FAQPage` on every guide | Triggers high-CTR expandable FAQ rich snippets in Google search results. |
| **Breadcrumbs** | JSON-LD `BreadcrumbList` | Displays structured hierarchy in Google SERPs (`Home > Category > Article`). |
| **Canonical Tags** | Auto-generated via `metadataBase` | Prevents duplicate content penalties across all 5,000 pages. |
| **FTC Compliance** | Dedicated top disclaimer + footer notices | Safeguards affiliate compliance and consumer transparency. |
