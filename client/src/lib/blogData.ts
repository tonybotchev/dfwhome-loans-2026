/**
 * DESIGN SYSTEM: Kinetic Texas
 * Shared blog post data — used by Blog index and BlogPost detail pages
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  image: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  content: string; // HTML string for full post body
  schema: Record<string, unknown>;
  faq: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "spring-2026-dfw-housing-market",
    slug: "spring-2026-dfw-housing-market",
    title: "Spring 2026 DFW Housing Market: What North Texas Buyers Need to Know",
    excerpt:
      "Inventory is rising in Celina, Prosper, and Frisco — but rates are still the wildcard. Here's what the data says and how to position yourself before summer competition heats up.",
    category: "Market Update",
    date: "March 28, 2026",
    dateISO: "2026-03-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    featured: true,
    seoTitle: "Spring 2026 DFW Housing Market Update | Tony Botchev NMLS #114198",
    seoDescription:
      "Inventory is rising in Celina, Prosper, and Frisco but rates remain the wildcard. Tony Botchev breaks down the Spring 2026 North DFW housing market data.",
    faq: [
      {
        q: "Is it a good time to buy a home in North DFW in Spring 2026?",
        a: "Yes — rising inventory means more negotiating power for buyers. Rates are still elevated but pre-approval locks in your position before summer competition increases.",
      },
      {
        q: "What is the average home price in Celina TX in 2026?",
        a: "Median home prices in Celina range from $380,000 to $480,000 depending on the community. New build communities like Light Farms and Mustang Lakes offer options at various price points.",
      },
      {
        q: "Should I wait for rates to drop before buying in DFW?",
        a: "Waiting for rates to drop is a gamble — if inventory tightens and prices rise, you could pay more even at a lower rate. The better strategy is to buy now and refinance when rates improve.",
      },
    ],
    content: `
<p>Spring 2026 is shaping up to be one of the most interesting buying windows North DFW has seen in three years. Inventory is climbing — Celina, Prosper, and Frisco are all showing 15–25% more active listings than this time last year — but mortgage rates are still hovering in the 6.5–7% range, which is keeping some buyers on the sidelines.</p>

<p>That hesitation is creating opportunity for buyers who are ready to move.</p>

<h2>What the Inventory Numbers Actually Mean</h2>

<p>More inventory doesn't mean prices are falling. In Celina, median prices are holding firm at $420,000–$480,000 for new construction. What's changing is negotiating leverage. In 2023 and 2024, buyers were routinely offering $20,000–$40,000 over asking with no contingencies. That's no longer required in most neighborhoods.</p>

<p>In Spring 2026, well-qualified buyers are getting:</p>
<ul>
  <li>Builder incentives of $10,000–$30,000 on new construction</li>
  <li>Rate buydowns to 5.5–6% for the first 2–3 years</li>
  <li>Closing cost contributions from sellers on resale homes</li>
  <li>Inspection contingencies accepted again in most transactions</li>
</ul>

<h2>The Rate Situation</h2>

<p>Rates are not dropping to 3% again. Anyone waiting for that is waiting indefinitely. The realistic scenario based on current Fed guidance is rates settling in the 6–6.5% range by late 2026 or early 2027 — a modest improvement from today's 6.75–7%.</p>

<p>The math on waiting: if you buy a $450,000 home today at 6.75% and refinance to 6% in 18 months, your payment drops by roughly $220/month. If you wait 18 months and prices rise 4% (conservative for North DFW), you're buying a $468,000 home at 6% — your payment is actually higher than buying today and refinancing.</p>

<h2>How to Position Yourself Before Summer</h2>

<p>Summer in North DFW brings relocation buyers — families moving from California, Chicago, and the Northeast who are on a timeline and willing to pay to close quickly. That competition drives prices up and eliminates negotiating leverage.</p>

<p>The buyers who win in Spring 2026 are the ones with pre-approval letters already in hand. A pre-approval from a local lender like Tony Botchev at DFW Homes & Loans carries more weight with North DFW builders and listing agents than a pre-approval from a national bank — because local lenders close on time.</p>

<p>If you're planning to buy in Celina, Prosper, Frisco, or McKinney in the next 6 months, the best move is to get pre-approved now, understand your real budget, and be ready to act when the right home comes up.</p>

<p><strong>Tony Botchev, NMLS #114198</strong> | Sponsored by Loan Factory, Inc. NMLS #320841 | Equal Housing Lender</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Spring 2026 DFW Housing Market: What North Texas Buyers Need to Know",
      datePublished: "2026-03-28",
      dateModified: "2026-03-28",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "Inventory is rising in Celina, Prosper, and Frisco — but rates are still the wildcard. Here's what the data says and how to position yourself before summer competition heats up.",
      url: "https://www.dfwhome.loans/blog/spring-2026-dfw-housing-market",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/spring-2026-dfw-housing-market",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    },
  },
  {
    id: "fha-vs-conventional-celina-tx",
    slug: "fha-vs-conventional-celina-tx",
    title: "FHA vs. Conventional Loans in Celina TX: Which Is Right for You in 2026?",
    excerpt:
      "With new build communities exploding in Celina and Prosper, first-time buyers are constantly asking: FHA or Conventional? The answer depends on 3 key numbers — here's how to figure it out.",
    category: "Loan Education",
    date: "March 21, 2026",
    dateISO: "2026-03-21",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
    featured: false,
    seoTitle: "FHA vs Conventional Loans Celina TX 2026 | Tony Botchev NMLS #114198",
    seoDescription:
      "FHA or conventional loan in Celina TX? Tony Botchev breaks down the 3 numbers that determine the right loan for North DFW first-time buyers in 2026.",
    faq: [
      {
        q: "What credit score do I need for an FHA loan in Texas?",
        a: "FHA loans require a minimum 580 credit score for 3.5% down. With a score of 500–579, you can still qualify with 10% down. Conventional loans typically require 620+ for approval.",
      },
      {
        q: "Is FHA or conventional better for first-time buyers in Celina TX?",
        a: "It depends on your credit score and down payment. FHA is better if your score is below 680 or your down payment is under 5%. Conventional is better if your score is 700+ and you can put 5–20% down.",
      },
      {
        q: "Do new construction builders in Celina accept FHA loans?",
        a: "Yes — most major builders in Celina including D.R. Horton, Lennar, and Meritage accept FHA financing. Some builder incentives are only available with their preferred lender, so compare total cost carefully.",
      },
      {
        q: "How much is FHA mortgage insurance in 2026?",
        a: "FHA charges an upfront MIP of 1.75% of the loan amount plus an annual MIP of 0.55% (for most loans). On a $400,000 loan, that's $7,000 upfront and about $183/month added to your payment.",
      },
    ],
    content: `
<p>If you're buying your first home in Celina, Prosper, or anywhere in North DFW in 2026, the FHA vs. conventional question will come up in your first conversation with a lender. The answer isn't one-size-fits-all — it depends on three numbers: your credit score, your down payment, and your debt-to-income ratio.</p>

<h2>The Three Numbers That Decide</h2>

<p><strong>Credit Score:</strong> If your score is below 680, FHA almost always wins. FHA's mortgage insurance pricing doesn't penalize lower scores the way conventional loan pricing adjustments (LLPAs) do. A borrower with a 640 score will pay significantly less in rate adjustments on FHA than on conventional.</p>

<p><strong>Down Payment:</strong> If you're putting down less than 5%, FHA is typically the better path. If you can put down 10% or more, conventional becomes competitive. At 20% down, conventional wins outright — no mortgage insurance at all.</p>

<p><strong>Debt-to-Income Ratio:</strong> FHA allows DTI up to 57% in some cases. Conventional caps at 45–50%. If your student loans, car payment, and credit cards are eating into your DTI, FHA gives you more room.</p>

<h2>Side-by-Side Comparison</h2>

<table>
  <thead>
    <tr><th>Factor</th><th>FHA</th><th>Conventional</th></tr>
  </thead>
  <tbody>
    <tr><td>Minimum Credit Score</td><td>580 (3.5% down)</td><td>620</td></tr>
    <tr><td>Minimum Down Payment</td><td>3.5%</td><td>3%</td></tr>
    <tr><td>Mortgage Insurance</td><td>Required for life of loan (if &lt;10% down)</td><td>Removed at 80% LTV</td></tr>
    <tr><td>Max Loan Limit (Collin County 2026)</td><td>$524,225</td><td>$766,550</td></tr>
    <tr><td>DTI Limit</td><td>Up to 57%</td><td>Up to 50%</td></tr>
    <tr><td>Best For</td><td>Lower credit, lower down payment</td><td>Higher credit, 5%+ down</td></tr>
  </tbody>
</table>

<h2>The Mortgage Insurance Trap</h2>

<p>The biggest downside of FHA is mortgage insurance that never goes away if you put less than 10% down. On a $400,000 loan, FHA mortgage insurance adds about $183/month to your payment — every month, for the life of the loan unless you refinance.</p>

<p>Conventional mortgage insurance (PMI) is removed automatically when your loan balance drops to 80% of the home's value. On a $400,000 home with 5% down, you'd hit that threshold in about 7–8 years, saving you $15,000+ compared to staying in an FHA loan.</p>

<h2>The Right Answer for Most Celina Buyers</h2>

<p>For most first-time buyers in Celina with a 680+ credit score and 5% down, conventional is the better long-term choice. For buyers with scores below 680 or down payments under 5%, FHA is the right starting point — with a plan to refinance into conventional once equity builds.</p>

<p>The best way to know for certain is to run both scenarios with real numbers. That's exactly what Tony Botchev does in a free pre-approval consultation — no pressure, no credit pull, just real numbers so you can make an informed decision.</p>

<p><strong>Tony Botchev, NMLS #114198</strong> | Sponsored by Loan Factory, Inc. NMLS #320841 | Equal Housing Lender</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "FHA vs. Conventional Loans in Celina TX: Which Is Right for You in 2026?",
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "FHA or conventional loan in Celina TX? Tony Botchev breaks down the 3 numbers that determine the right loan for North DFW first-time buyers in 2026.",
      url: "https://www.dfwhome.loans/blog/fha-vs-conventional-celina-tx",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/fha-vs-conventional-celina-tx",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
    },
  },
  {
    id: "down-payment-myths-north-dfw",
    slug: "down-payment-myths-north-dfw",
    title: "5 Down Payment Myths That Are Keeping North DFW Buyers on the Sidelines",
    excerpt:
      "\"I need 20% down\" is the most expensive myth in real estate. In 2026, qualified buyers in Frisco, McKinney, and Celina can get into a home with as little as 3% — sometimes less.",
    category: "First-Time Buyers",
    date: "March 14, 2026",
    dateISO: "2026-03-14",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    featured: false,
    seoTitle: "Down Payment Myths North DFW 2026 | DFW Homes & Loans",
    seoDescription:
      "You don't need 20% down to buy a home in North DFW. Tony Botchev debunks 5 down payment myths keeping Frisco, McKinney, and Celina buyers on the sidelines.",
    faq: [
      {
        q: "How much down payment do I need to buy a home in Celina TX?",
        a: "As little as 3% for conventional loans, 3.5% for FHA, and 0% for VA and USDA loans. The 20% requirement is a myth — most North DFW buyers put down 3–10%.",
      },
      {
        q: "Are there down payment assistance programs in Texas?",
        a: "Yes — the Texas State Affordable Housing Corporation (TSAHC) and My First Texas Home program offer down payment assistance of 3–5% for qualifying buyers. Income and purchase price limits apply.",
      },
      {
        q: "Does a lower down payment mean a higher monthly payment?",
        a: "Yes, slightly — a lower down payment means a larger loan balance and PMI if under 20% down. But the difference is often less than people expect, and it lets you keep cash reserves for repairs and emergencies.",
      },
    ],
    content: `
<p>The single most common reason qualified buyers in North DFW delay purchasing a home is a belief that they need 20% down. On a $420,000 home in Celina, that's $84,000 in cash — a number that feels impossible for most first-time buyers. The good news: it's not required, and it hasn't been for decades.</p>

<h2>Myth 1: "I Need 20% Down"</h2>

<p>The 20% figure comes from a time when mortgage insurance didn't exist and lenders required large equity cushions. Today, conventional loans allow 3% down, FHA allows 3.5%, VA loans require zero down for eligible veterans, and USDA loans offer zero-down financing in qualifying rural areas (which includes parts of Collin and Denton counties).</p>

<p>The real cost of waiting to save 20%: if you're saving $2,000/month toward a down payment and home prices in Celina rise 5% annually, you're losing ground every month you wait.</p>

<h2>Myth 2: "PMI Is a Waste of Money"</h2>

<p>Private mortgage insurance costs roughly 0.5–1% of the loan amount annually — about $175–$350/month on a $420,000 loan. That's real money. But compare it to the alternative: renting while prices rise. If your rent is $2,200/month and you could own for $2,500/month (including PMI), you're building equity and locking in your housing cost while renters face annual increases.</p>

<p>PMI also goes away. On a conventional loan, it's automatically removed when your loan balance drops to 80% of the home's value — typically in 7–10 years.</p>

<h2>Myth 3: "Down Payment Assistance Programs Don't Really Exist"</h2>

<p>They do, and they're underused. The Texas State Affordable Housing Corporation (TSAHC) offers down payment assistance of 3–5% of the loan amount as either a grant (no repayment) or a low-interest second lien. The My First Texas Home program offers similar assistance. Income limits apply, but many North DFW buyers qualify.</p>

<h2>Myth 4: "I Need Perfect Credit to Buy with Less Than 20% Down"</h2>

<p>FHA loans accept credit scores as low as 580 with 3.5% down. Conventional loans start at 620. VA loans have no minimum credit score requirement (though lenders typically require 580–620). You don't need perfect credit — you need a plan and a lender who knows how to structure the loan correctly.</p>

<h2>Myth 5: "Sellers Won't Accept Low-Down-Payment Offers"</h2>

<p>In a competitive market, cash and conventional offers with large down payments do have an edge. But in Spring 2026, with inventory rising in Celina, Prosper, and Frisco, sellers are more flexible. A well-structured FHA or 5%-down conventional offer from a pre-approved buyer with a local lender is competitive. What sellers care about most is certainty of close — not the size of your down payment.</p>

<p>The bottom line: if you're waiting to save 20% down before buying in North DFW, you're likely waiting longer than necessary and losing ground to rising prices. Get pre-approved, understand your real options, and make a decision based on facts — not myths.</p>

<p><strong>Tony Botchev, NMLS #114198</strong> | Sponsored by Loan Factory, Inc. NMLS #320841 | Equal Housing Lender</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "5 Down Payment Myths That Are Keeping North DFW Buyers on the Sidelines",
      datePublished: "2026-03-14",
      dateModified: "2026-03-14",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "5 down payment myths keeping North DFW buyers on the sidelines. Qualified buyers can get into a home with as little as 3% down in Celina, Frisco, and McKinney.",
      url: "https://www.dfwhome.loans/blog/down-payment-myths-north-dfw",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/down-payment-myths-north-dfw",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    },
  },
  {
    id: "dscr-loans-dfw-investors",
    slug: "dscr-loans-dfw-investors",
    title: "DSCR Loans in DFW: The Investor's Secret Weapon for 2026",
    excerpt:
      "Debt Service Coverage Ratio loans let real estate investors qualify based on rental income — not personal income. If you're building a portfolio in North Texas, this is the loan you need to understand.",
    category: "Investment",
    date: "March 7, 2026",
    dateISO: "2026-03-07",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    featured: false,
    seoTitle: "DSCR Loans DFW Investors 2026 | Tony Botchev NMLS #114198",
    seoDescription:
      "DSCR loans let DFW real estate investors qualify based on rental income, not personal income. Tony Botchev explains how DSCR works for North Texas investors.",
    faq: [
      {
        q: "What is a DSCR loan and how does it work in Texas?",
        a: "A DSCR (Debt Service Coverage Ratio) loan qualifies you based on the property's rental income vs. its mortgage payment — not your personal income. If the rent covers 1.0x–1.25x the mortgage, you qualify. No tax returns or pay stubs required.",
      },
      {
        q: "What DSCR ratio do I need to qualify?",
        a: "Most lenders require a minimum DSCR of 1.0 (rent equals mortgage payment). A DSCR of 1.25 or higher gets better rates. Some lenders allow DSCR below 1.0 with a higher down payment.",
      },
      {
        q: "What credit score do I need for a DSCR loan in Texas?",
        a: "Most DSCR lenders require a minimum 640–680 credit score. Higher scores (720+) unlock better rates and terms. Down payment requirements are typically 20–25%.",
      },
      {
        q: "Can I use a DSCR loan to buy a short-term rental in North DFW?",
        a: "Yes — DSCR lenders accept short-term rental income (Airbnb, VRBO) in many cases, using market rent data or actual rental history. Not all lenders accept STR income, so work with a lender experienced in investor loans.",
      },
    ],
    content: `
<p>If you're a real estate investor in North DFW and you've been told you can't qualify for another investment property because your debt-to-income ratio is too high, DSCR loans are the solution you haven't been using.</p>

<p>DSCR — Debt Service Coverage Ratio — is a loan program designed specifically for real estate investors. Instead of qualifying based on your personal income, W-2s, and tax returns, the loan qualifies based on one question: does the property's rental income cover the mortgage payment?</p>

<h2>How DSCR Qualification Works</h2>

<p>The DSCR formula is simple: Monthly Gross Rental Income ÷ Monthly PITIA (Principal, Interest, Taxes, Insurance, Association dues) = DSCR.</p>

<p>A DSCR of 1.0 means the rent exactly covers the mortgage. A DSCR of 1.25 means the rent is 25% more than the mortgage — a comfortable cushion. Most lenders require a minimum DSCR of 1.0, with better rates available at 1.25+.</p>

<p>Example: A single-family home in McKinney rents for $2,800/month. The PITIA on a $380,000 loan is $2,400/month. DSCR = 2,800 ÷ 2,400 = 1.17. That qualifies.</p>

<h2>Why North DFW Is Ideal for DSCR Investing</h2>

<p>North DFW has one of the strongest rental markets in the country. Celina, Prosper, and McKinney are seeing consistent rent growth driven by corporate relocations, population growth, and limited rental supply. The combination of strong rent-to-price ratios and appreciation potential makes DSCR investing in this market particularly attractive.</p>

<p>Typical DSCR metrics for North DFW single-family rentals:</p>
<ul>
  <li>Celina: Median rent $2,600–$3,200 | Median purchase price $380,000–$450,000</li>
  <li>McKinney: Median rent $2,400–$2,900 | Median purchase price $340,000–$420,000</li>
  <li>Prosper: Median rent $2,800–$3,400 | Median purchase price $420,000–$520,000</li>
</ul>

<h2>DSCR Loan Terms in 2026</h2>

<p>Current DSCR loan terms through Loan Factory, Inc. (NMLS #320841):</p>
<ul>
  <li>Rates: 7.5–8.5% (30-year fixed) depending on DSCR, credit score, and LTV</li>
  <li>Down payment: 20–25% minimum</li>
  <li>Credit score: 640 minimum, 720+ for best pricing</li>
  <li>Loan amounts: $100,000–$3,000,000</li>
  <li>Property types: Single-family, 2–4 unit, condos, short-term rentals</li>
  <li>No tax returns, no W-2s, no employment verification required</li>
</ul>

<h2>Who DSCR Loans Are For</h2>

<p>DSCR loans are ideal for self-employed investors whose tax returns show low income due to depreciation and deductions, W-2 earners who are maxed out on conventional investment property loans (Fannie Mae limits you to 10 financed properties), and investors who want to scale quickly without the documentation burden of traditional financing.</p>

<p>If you're building a rental portfolio in North DFW and want to understand exactly what you qualify for, Tony Botchev specializes in investor financing and can run DSCR scenarios on specific properties you're considering.</p>

<p><strong>Tony Botchev, NMLS #114198</strong> | Sponsored by Loan Factory, Inc. NMLS #320841 | Equal Housing Lender</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "DSCR Loans in DFW: The Investor's Secret Weapon for 2026",
      datePublished: "2026-03-07",
      dateModified: "2026-03-07",
      author: { "@type": "Person", name: "Tony Botchev", identifier: "NMLS #114198" },
      publisher: {
        "@type": "Organization",
        name: "DFW Homes & Loans",
        logo: { "@type": "ImageObject", url: "https://www.dfwhome.loans/logo.png" },
      },
      description:
        "DSCR loans let real estate investors qualify based on rental income — not personal income. If you're building a portfolio in North Texas, this is the loan you need.",
      url: "https://www.dfwhome.loans/blog/dscr-loans-dfw-investors",
      mainEntityOfPage: "https://www.dfwhome.loans/blog/dscr-loans-dfw-investors",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    },
  },
];

export const categoryColors: Record<string, string> = {
  "Market Update": "bg-orange-100 text-orange-800",
  "Loan Education": "bg-green-100 text-green-800",
  "First-Time Buyers": "bg-blue-100 text-blue-800",
  Investment: "bg-purple-100 text-purple-800",
};
