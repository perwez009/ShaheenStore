import Link from "next/link";

const sponsorshipTiers = [
  {
    name: "Title Sponsor",
    price: "₹250–300 / shirt",
    logoPlacement: "Front center (largest)",
    exclusivity: "Category exclusive + title rights",
    batchSize: "500–5,000 shirts",
    features: [
      "Largest logo on front chest",
      "Category exclusivity (one brand per vertical)",
      "Co-branded campaign landing page",
      "QR code with UTM tracking",
      "Post-campaign impression report",
      "Social media amplification",
      "First right of renewal",
    ],
    cta: "Become Title Sponsor",
    popular: true,
  },
  {
    name: "Co-Sponsor",
    price: "₹150–200 / shirt",
    logoPlacement: "Back (below collar) or sleeve",
    exclusivity: "Limited to 2 co-sponsors per batch",
    batchSize: "500–5,000 shirts",
    features: [
      "Logo on back or sleeve placement",
      "Shared batch with title sponsor",
      "QR code tracking included",
      "Impression dashboard access",
      "Mention in distribution posts",
      "Bundle discount for multi-campaign",
    ],
    cta: "Become Co-Sponsor",
    popular: false,
  },
  {
    name: "Sleeve / Category Exclusive",
    price: "₹100–150 / shirt",
    logoPlacement: "Sleeve (left/right) or small chest",
    exclusivity: "One brand per product category",
    batchSize: "1,000+ shirts",
    features: [
      "Sleeve or small chest logo",
      "Category exclusivity (e.g., only fintech)",
      "Basic impression tracking",
      "Cost-effective entry point",
      "Ideal for startup budgets",
      "Can combine with other tiers",
    ],
    cta: "Get Category Exclusive",
    popular: false,
  },
];

const audienceStats = [
  { label: "Primary Audience", value: "18–24 years", detail: "College students & early professionals" },
  { label: "Gender Split", value: "52% / 48%", detail: "Female / Male (varies by campus)" },
  { label: "Top Cities", value: "12 metros", detail: "Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai..." },
  { label: "Avg Impressions/Shirt", value: "25,000+", detail: "Over 6–12 month garment lifetime" },
  { label: "Wear Frequency", value: "1.8x / week", detail: "Based on post-distribution surveys" },
  { label: "Social Shares", value: "12% of recipients", detail: "Post unboxing/wearing on Instagram" },
];

const campaignProcess = [
  { step: 1, title: "Brief & Match", description: "Share target audience, budget, timeline. We match you with relevant campus drops (fests, hackathons, marathons, orientation weeks)." },
  { step: 2, title: "Design & Approve", description: "Our design team integrates your brand into wearable aesthetics. You approve mockups. No billboard-looking tees — designs students actually want to wear." },
  { step: 3, title: "Produce & Print", description: "180 GSM cotton, screen/DTF printing at Tirupur partner factories. 2–3 week turnaround. Quality checks at every stage." },
  { step: 4, title: "Distribute & Track", description: "Campus partners distribute at events. QR codes on hangtags/print link to your landing page. Real-time impression dashboard." },
  { step: 5, title: "Report & Renew", description: "Post-campaign report: impressions, scans, social mentions, wear-rate survey. First right of renewal for next season." },
];

const caseStudies = [
  {
    brand: "FoodEase (Food Delivery)",
    campaign: "IIT Delhi Fresher Orientation • 2,000 tees",
    investment: "₹4.5L (Title Sponsor, ₹225/tee)",
    results: "48M impressions • 3,200 QR scans • 18% app install rate • ₹14 CAC vs ₹85 digital",
    quote: "Best offline ROI in 3 years. Students wore tees daily in mess, library, metro. Brand recall was incredible.",
  },
  {
    brand: "CodeSync (Dev Tools)",
    campaign: "Hackathon Season • 12 colleges • 3,000 tees",
    investment: "₹5.4L (Title + Co-sponsor slots)",
    results: "72M impressions • 5,100 dev signups • 23% activated account • 40% wore at next hackathon",
    quote: "Developers are allergic to marketing. But they wore our tee because the design was clean. That's the difference.",
  },
  {
    brand: "HydroBoost (Sports Drink)",
    campaign: "City Marathon Series • 5 cities • 5,000 tees",
    investment: "₹7.5L (Title Sponsor, ₹150/tee at scale)",
    results: "125M impressions • 8,400 QR scans • 31% trial purchase • 3x repeat rate vs sampling",
    quote: "Sampling at events gives 1 sip. A tee gives 6 months of brand visibility every time they train.",
  },
];

export default function ForBrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/30 to-indigo-50/20 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            ShaheenStore
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="/#sponsored" className="hover:text-indigo-600">Free Tees</a>
            <a href="/#how-it-works" className="hover:text-indigo-600">How It Works</a>
            <a href="/for-brands" className="text-indigo-600 font-medium">For Brands</a>
            <a href="/#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 sm:text-sm">
              Back to Store
            </Link>
            <Link href="#contact" className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
              Start Campaign
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <section className="text-center max-w-3xl mx-auto">
          <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-4">
            Wearable Out-of-Home Media for Brands
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Put Your Brand on <span className="text-emerald-600">50,000+ Students</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Lower CPM than billboards. Higher recall than digital ads. Students wear your logo daily on campus, at events, on social media — for 6–12 months.
            QR-tracked. Measurable. Actually wearable.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Book a Campaign
            </a>
            <a href="#packages" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
              View Packages
            </a>
          </div>
        </section>

        <section id="audience" className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Audience That Matters</h2>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600">
              India's most valuable demographic: 18–24 year olds with disposable income, high social influence, and 4+ years of purchasing lifetime ahead.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {audienceStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur text-center">
                <p className="text-2xl font-bold text-emerald-600">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="packages" className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Sponsorship Packages</h2>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600">
              Priced at 1.2–2x production cost. All-inclusive: manufacturing, printing, distribution, tracking, reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative rounded-2xl border border-white/60 bg-white/80 p-6 shadow-md backdrop-blur transition hover:shadow-xl ${
                  tier.popular ? "border-emerald-300 shadow-emerald-100/50" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-1 text-2xl font-extrabold text-emerald-600">{tier.price}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium text-slate-900">Placement:</span> {tier.logoPlacement}</p>
                  <p><span className="font-medium text-slate-900">Exclusivity:</span> {tier.exclusivity}</p>
                  <p><span className="font-medium text-slate-900">Batch Size:</span> {tier.batchSize}</p>
                </div>
                <ul className="mt-5 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 block w-full h-11 rounded-full text-sm font-semibold text-center transition ${
                    tier.popular
                      ? "bg-emerald-600 text-white hover:bg-emerald-500"
                      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Campaign in 5 Steps</h2>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600">
              From brief to report in 4–6 weeks. We handle production, logistics, and tracking.
            </p>
          </div>
          <div className="space-y-4">
            {campaignProcess.map((step) => (
              <article key={step.step} className="flex gap-4 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-emerald-600">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cases" className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Case Studies</h2>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600">
              Real campaigns, real results. CPM 60–80% lower than billboards and digital video.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <article key={cs.brand} className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-md backdrop-blur">
                <p className="text-sm font-semibold text-emerald-600">{cs.brand}</p>
                <h3 className="mt-1 font-semibold text-slate-900">{cs.campaign}</h3>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <p className="text-slate-500">Investment</p>
                  <p className="font-medium text-slate-900">{cs.investment}</p>
                  <p className="text-slate-500">Results</p>
                  <p className="font-medium text-slate-900 text-emerald-600">View Details →</p>
                </div>
                <p className="mt-4 text-sm text-slate-600 italic">"{cs.quote}"</p>
              </article>
            ))}
          </div>
        </section>

        <section id="comparison" className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why Wearable OOH Beats Traditional Media</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-3 font-semibold text-slate-900"></th>
                  <th className="text-left p-3 font-semibold text-slate-900">ShaheenStore Tees</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Billboards</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Digital Video</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Event Sampling</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium text-slate-900">CPM (₹)</td>
                  <td className="p-3 text-emerald-600 font-semibold">₹8–12</td>
                  <td className="p-3 text-slate-600">₹150–400</td>
                  <td className="p-3 text-slate-600">₹80–150</td>
                  <td className="p-3 text-slate-600">₹200–500</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium text-slate-900">Exposure Duration</td>
                  <td className="p-3 text-emerald-600 font-semibold">6–12 months</td>
                  <td className="p-3 text-slate-600">4–8 weeks</td>
                  <td className="p-3 text-slate-600">5–30 seconds</td>
                  <td className="p-3 text-slate-600">1-time</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium text-slate-900">Impressions/Unit</td>
                  <td className="p-3 text-emerald-600 font-semibold">25,000+</td>
                  <td className="p-3 text-slate-600">500k–2M/month</td>
                  <td className="p-3 text-slate-600">Per view</td>
                  <td className="p-3 text-slate-600">1–3</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium text-slate-900">Brand Recall</td>
                  <td className="p-3 text-emerald-600 font-semibold">High (worn daily)</td>
                  <td className="p-3 text-slate-600">Medium</td>
                  <td className="p-3 text-slate-600">Low (skipped)</td>
                  <td className="p-3 text-slate-600">Low</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium text-slate-900">Measurability</td>
                  <td className="p-3 text-emerald-600 font-semibold">QR + Survey</td>
                  <td className="p-3 text-slate-600">Estimated</td>
                  <td className="p-3 text-slate-600">Exact</td>
                  <td className="p-3 text-slate-600">Manual</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 font-medium text-slate-900">Cost per Acquisition</td>
                  <td className="p-3 text-emerald-600 font-semibold">₹14–45</td>
                  <td className="p-3 text-slate-600">₹200+</td>
                  <td className="p-3 text-slate-600">₹80–200</td>
                  <td className="p-3 text-slate-600">₹150+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Start Your Campus Campaign</h2>
            <p className="mt-3 text-slate-300">
              Minimum batch: 500 shirts. Lead time: 3–4 weeks. We handle everything — design, production, distribution, reporting.
            </p>
            <form className="mt-8 space-y-4 max-w-md mx-auto text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input type="text" className="w-full h-11 rounded-lg border border-slate-700 bg-slate-800 px-4 text-white outline-none ring-emerald-300 focus:ring-2" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Company</label>
                  <input type="text" className="w-full h-11 rounded-lg border border-slate-700 bg-slate-800 px-4 text-white outline-none ring-emerald-300 focus:ring-2" placeholder="Brand name" required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input type="email" className="w-full h-11 rounded-lg border border-slate-700 bg-slate-800 px-4 text-white outline-none ring-emerald-300 focus:ring-2" placeholder="you@brand.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Role</label>
                  <select className="w-full h-11 rounded-lg border border-slate-700 bg-slate-800 px-4 text-white outline-none ring-emerald-300 focus:ring-2">
                    <option>Marketing Manager</option>
                    <option>Brand Manager</option>
                    <option>Founder / CEO</option>
                    <option>Agency Account Lead</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Campaign Brief</label>
                <textarea rows={4} className="w-full h-28 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-emerald-300 focus:ring-2" placeholder="Target audience, budget range, timeline, preferred campuses/events, any specific goals..." required></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Estimated Budget</label>
                <select className="w-full h-11 rounded-lg border border-slate-700 bg-slate-800 px-4 text-white outline-none ring-emerald-300 focus:ring-2">
                  <option>₹2–5 Lakh (Pilot)</option>
                  <option>₹5–15 Lakh (Multi-campus)</option>
                  <option>₹15–50 Lakh (Seasonal)</option>
                  <option>₹50 Lakh+ (Annual partnership)</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <button type="submit" className="w-full h-11 rounded-full bg-emerald-500 px-6 text-sm font-semibold text-white transition hover:bg-emerald-400">
                Submit Brief → We'll respond in 24 hours
              </button>
            </form>
            <p className="mt-6 text-xs text-slate-500">
              Prefer email? Write to <a href="mailto:brands@shaheenstore.in" className="text-emerald-400 hover:underline">brands@shaheenstore.in</a> with your brief.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-bold text-slate-900">ShaheenStore</p>
            <p className="mt-2 text-sm text-slate-600">India's first ad-supported campus wear platform. Premium tees free for students, measurable impressions for brands.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">For Brands</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#packages" className="hover:text-indigo-600">Sponsorship Packages</a></li>
              <li><a href="#process" className="hover:text-indigo-600">Campaign Process</a></li>
              <li><a href="#cases" className="hover:text-indigo-600">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-indigo-600">Start Campaign</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Media Kit (PDF)</a></li>
              <li><a href="#" className="hover:text-indigo-600">Rate Card</a></li>
              <li><a href="#" className="hover:text-indigo-600">Brand Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-600">Legal / IP Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ShaheenStore
        </div>
      </footer>
    </div>
  );
}