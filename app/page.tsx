import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import { categories } from "./data/categories";
import { products } from "./data/products";

const stats = [
  { label: "Shirts Distributed", value: "50k+" },
  { label: "Campus Partners", value: "180+" },
  { label: "Brand Partners", value: "45+" },
  { label: "Avg Impressions/Shirt", value: "25k+" },
];

const trustPoints = [
  "Premium tees FREE or at token price",
  "Wearable advertising for brands",
  "Campus distribution network",
  "QR-tracked impressions for sponsors",
];

const testimonials = [
  {
    name: "Aditi R. (Student, IIT Delhi)",
    quote:
      "Got a premium tee for FREE at our college fest. The design is actually wearable - not just a walking billboard. Love the quality!",
  },
  {
    name: "Rahul S. (Founder, FoodEase)",
    quote:
      "ShaheenStore delivered 2,000 impressions per ₹1 spent. Best offline ROI we've seen. Students actually wear these on campus daily.",
  },
  {
    name: "Samina K. (Event Lead, Hackathon)",
    quote:
      "Our hackathon tees were sponsored fully. 500 participants got quality shirts, brands got visibility. Win-win for everyone.",
  },
  {
    name: "Prashansa T. (Student, Mumbai)",
    quote:
      "Finally a merch brand that gets it - students want good design, not logos everywhere. These tees actually look good.",
  },
];

const faqItems = [
  {
    question: "How are the T-shirts free?",
    answer: "Brands pay to place their logos on the tees. Their sponsorship covers manufacturing, printing, and distribution costs - so you get premium shirts at ₹0 or a token price (₹99).",
  },
  {
    question: "Can I choose a tee without sponsor logos?",
    answer: "All sponsored tees feature brand logos as part of the deal. For logo-free options, browse our regular Clothing collection at standard prices.",
  },
  {
    question: "How do I get free tees on my campus?",
    answer: "We partner with college fests, clubs, and student bodies. Have your cultural/sports secretary reach out via our For Brands page, or we may already have a drop scheduled!",
  },
  {
    question: "What's the catch? Are these low quality?",
    answer: "No catch. We use 180 GSM cotton/poly-cotton blends with screen printing or DTF. Brands pay for visibility, so they want you to actually wear the shirts - quality is non-negotiable.",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const sponsoredProducts = products.filter((p) => p.isSponsored).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/30 to-indigo-50/20 text-slate-900">
      <div className="bg-emerald-700 px-6 py-2 text-center text-xs font-medium text-emerald-50">
        Premium Tees FREE or ₹99 — Powered by Brand Partners
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            ShaheenStore
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#sponsored">Free Tees</a>
            <a href="#how-it-works">How It Works</a>
            <a href="/for-brands" className="text-indigo-600 hover:text-indigo-500 font-medium">For Brands</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 sm:text-sm">
              Search
            </button>
            <button className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <section className="grid gap-6 rounded-3xl border border-white/60 bg-white/75 p-6 shadow-xl shadow-emerald-100/60 backdrop-blur lg:grid-cols-[1.2fr_1fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              India's First Ad-Supported Campus Wear Platform
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Premium Tees, <span className="text-emerald-600">Zero Cost</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Brands sponsor the shirts. Students wear them. Everyone wins. Quality campus wear
              distributed free or at token prices across 180+ college campuses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sponsored"
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Browse Free Tees
              </a>
              <a
                href="/for-brands"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Advertise With Us
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How It Works</h2>
            <p className="text-sm font-medium text-slate-500">Three-sided marketplace: Brands → ShaheenStore → Students</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-md shadow-emerald-100/50 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Brands Sponsor</h3>
              <p className="mt-2 text-sm text-slate-600">
                Companies pay ₹180–300/shirt for logo placement. Title, co-sponsor, and sleeve slots available. Priced at 1.2–2x production cost.
              </p>
            </article>
            <article className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-md shadow-emerald-100/50 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">We Produce & Distribute</h3>
              <p className="mt-2 text-sm text-slate-600">
                180 GSM cotton tees, screen/DTF printed. Distributed at college fests, hackathons, marathons, and campus pop-ups across 180+ partners.
              </p>
            </article>
            <article className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-md shadow-emerald-100/50 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Students Wear Free</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tees distributed at ₹0 or ₹99. QR codes track impressions. Brands get ~25k impressions/shirt. Students get premium wear they actually like.
              </p>
            </article>
          </div>
        </section>

        <section id="sponsored" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Free & Sponsored Tees</h2>
            <p className="text-sm font-medium text-slate-500">Current drops — claim yours before stocks run out</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsoredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/category/sponsored"
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              View All Sponsored Drops →
            </a>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">For Brands — Wearable OOH Media</p>
          <h2 className="mt-3 text-3xl font-bold">Reach 25,000+ Impressions per T-Shirt</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
            Lower CPM than billboards. Higher recall than digital. Students wear your brand daily on campus, at events, on social media. QR-tracked, measurable, and actually wearable.
          </p>
          <a href="/for-brands" className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-white transition hover:bg-emerald-400">
            Start a Campaign
          </a>
        </section>

        <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-white/50 bg-white/75 p-5 text-sm font-medium text-slate-700 shadow-sm"
            >
              {point}
            </article>
          ))}
        </section>

        <section id="reviews" className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What People Say</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-600">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  {item.question}
                </summary>
                <p className="pt-3 text-sm text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Get Early Access to Free Drops</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Join the waitlist for campus drops, exclusive sponsored collections, and brand partner launches.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-full border border-slate-300 bg-white px-4 text-sm outline-none ring-emerald-300 focus:ring-2"
            />
            <button className="h-11 rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Join Waitlist
            </button>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-lg font-bold text-slate-900">ShaheenStore</p>
            <p className="mt-2 text-sm text-slate-600">India's first ad-supported campus wear platform. Premium tees free for students, measurable impressions for brands.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">For Students</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#sponsored" className="hover:text-indigo-600">Free Tees</a></li>
              <li><a href="/category/clothing" className="hover:text-indigo-600">Regular Store</a></li>
              <li><a href="#" className="hover:text-indigo-600">Campus Drops</a></li>
              <li><a href="#" className="hover:text-indigo-600">How It Works</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">For Brands</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/for-brands" className="hover:text-indigo-600">Advertise With Us</a></li>
              <li><a href="#" className="hover:text-indigo-600">Sponsorship Packages</a></li>
              <li><a href="#" className="hover:text-indigo-600">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-600">Media Kit</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Support</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Returns</a></li>
              <li><a href="#" className="hover:text-indigo-600">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
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
