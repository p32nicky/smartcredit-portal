# SmartCredit Affiliate Portal: Vercel & Google Search Console Setup

This guide walks you through deploying your 500-article affiliate site to **Vercel** and optimizing it for **Google Search Console (GSC)** indexing.

---

## 1. Affiliate Link Details
- **Target Affiliate Link:** `https://www.smartcredit.com/join/?pid=46160`
- **Link Attribute Standards:** Tagged with `rel="noopener noreferrer sponsored"` across all CTAs and navigation buttons to comply with Google affiliate guidelines and FTC disclosure rules.

---

## 2. Deploying to Vercel (2 Simple Options)

### Option A: 1-Click Deployment via Vercel CLI
From the project folder (`C:\Users\nickd\.gemini\antigravity\scratch\smartcredit-portal`):

```bash
# 1. Login to Vercel (if not already logged in)
npx vercel login

# 2. Deploy to preview or production
npx vercel --prod
```
The CLI will automatically detect Next.js and deploy the site in ~45 seconds.

### Option B: Deploying via GitHub / GitLab / Bitbucket
1. Initialize or push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: 500-article SmartCredit affiliate portal with GSC optimization"
   git remote add origin https://github.com/YOUR_USERNAME/smartcredit-portal.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `smartcredit-portal` repository.
4. Add the Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com` (or your `.vercel.app` URL)
   - `NEXT_PUBLIC_GSC_VERIFICATION`: *(Your Google Search Console token)*
5. Click **Deploy**.

---

## 3. Google Search Console (GSC) Setup & Optimization

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
*(Alternatively, you can verify instantly using Domain DNS TXT record or the Vercel DNS integration).*

### Step 3: Submit Your XML Sitemap
1. In Google Search Console, go to **Index** > **Sitemaps**.
2. In the "Add a new sitemap" box, enter:
   `sitemap.xml`
3. Click **Submit**.
4. The sitemap will automatically submit all **525 URLs** (500 articles + categories + feature hubs + homepage) directly to Googlebot for immediate crawl prioritization.

---

## 4. Built-in SEO & Schema Features

| Feature | Implementation | Purpose |
| :--- | :--- | :--- |
| **Dynamic Sitemap** | `/sitemap.xml` | Feeds all 500 articles + categories to search engines with update frequencies. |
| **Robots Directive** | `/robots.txt` | Directs all search crawlers to index pages and references `/sitemap.xml`. |
| **Article Schema** | JSON-LD `Article` on every guide | Enables Google rich cards with headline, publisher, author, and date. |
| **FAQPage Schema** | JSON-LD `FAQPage` on every guide | Triggers high-CTR expandable FAQ rich snippets in Google search results. |
| **Breadcrumbs** | JSON-LD `BreadcrumbList` | Displays structured hierarchy in Google SERPs (`Home > Category > Article`). |
| **Canonical Tags** | Auto-generated via `metadataBase` | Prevents duplicate content penalties across all 500 pages. |
| **FTC Compliance** | Dedicated top disclaimer + footer notices | Safeguards affiliate compliance and consumer transparency. |

---

## 5. Adding More Articles in the Future
To modify or regenerate content clusters, edit `scripts/generate-articles.ts` and run:
```bash
npx tsx scripts/generate-articles.ts
npm run build
```
