import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import { categories } from "./data/categories";
import { products } from "./data/products";

const stats = [
  { label: "Orders Delivered", value: "12k+" },
  { label: "Campus Partners", value: "180+" },
  { label: "Repeat Customers", value: "82%" },
  { label: "Average Rating", value: "4.8/5" },
];

const trustPoints = [
  "Free shipping on orders above ₹999",
  "7-day hassle-free returns",
  "Secure payments and COD available",
  "Bulk orders for clubs and events",
];

const testimonials = [
  {
    name: "Aditi R.",
    quote:
      "The quality is premium and delivery was super quick. Perfect for our college fest team.",
  },
  {
    name: "Rahul S.",
    quote:
      "Loved the hoodie fit and the packaging. ShaheenStore feels like a real brand, not generic merch.",
  },
  {
    name: "Samina K.",
    quote:
      "We ordered in bulk for our society. Great support and smooth order experience.",
  },
];

const faqItems = [
  {
    question: "Do you offer COD?",
    answer: "Yes, COD is available for eligible pin codes across India.",
  },
  {
    question: "Can I place bulk college orders?",
    answer:
      "Yes, for clubs and events. Contact support from the footer links for pricing.",
  },
  {
    question: "How long does shipping take?",
    answer: "Most orders are delivered in 3-7 business days.",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const latestDrops = products.filter((item) => item.tag === "New Arrival").slice(0, 4);
  const bestsellers = products.filter((item) => item.tag === "Bestseller").slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/40 to-indigo-50/30 text-slate-900">
      <div className="bg-slate-900 px-6 py-2 text-center text-xs font-medium text-slate-100">
        Free shipping on ₹999+ · New season drop live now
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            ShaheenStore
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#reviews">Reviews</a>
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

      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <section className="grid gap-6 rounded-3xl border border-white/60 bg-white/75 p-6 shadow-xl shadow-blue-100/60 backdrop-blur lg:grid-cols-[1.2fr_1fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
              Commercial Storefront Template
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              ShaheenStore
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Modern campus lifestyle products with premium quality, fast shipping,
              and a polished ecommerce experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="inline-flex h-11 items-center justify-center rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Shop Now
              </a>
              <a
                href="#collections"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Explore Collections
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

        <section id="shop" className="mt-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Shop by Category</h2>
            <p className="text-sm font-medium text-slate-500">All major campus essentials</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const itemCount = products.filter((product) => product.category === category.slug).length;

              return (
                <CategoryCard
                  key={category.id}
                  title={category.title}
                  image={category.image}
                  description={category.description}
                  itemCount={itemCount}
                  href={`/category/${category.slug}`}
                />
              );
            })}
          </div>
        </section>

        <section id="collections" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Products</h2>
            <Link href="/category/clothing" className="text-sm font-semibold text-indigo-700 hover:text-indigo-600">
              Browse all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-md shadow-slate-200/50">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">New Arrivals</h3>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                This Week
              </span>
            </div>
            <div className="space-y-3">
              {latestDrops.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.category}</p>
                  </div>
                  <p className="font-semibold text-slate-800">
                    ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-md shadow-slate-200/50">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Top Sellers</h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Most Loved
              </span>
            </div>
            <div className="space-y-3">
              {bestsellers.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">★ {item.rating.toFixed(1)}</p>
                  </div>
                  <p className="font-semibold text-slate-800">
                    ₹{new Intl.NumberFormat("en-IN").format(item.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Limited Time Offer</p>
          <h2 className="mt-3 text-3xl font-bold">Up to 35% off on selected collections</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
            Upgrade your campus style and workspace setup with value-packed bundles.
          </p>
          <button className="mt-6 h-11 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Claim Offer
          </button>
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
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What Customers Say</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-600">“{item.quote}”</p>
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

        <section className="mt-14 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Get 10% Off Your First Order</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Join the ShaheenStore list for exclusive drops, launch alerts, and special bundles.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-full border border-slate-300 bg-white px-4 text-sm outline-none ring-indigo-300 focus:ring-2"
            />
            <button className="h-11 rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-slate-900">ShaheenStore</p>
            <p className="mt-3 text-sm text-slate-600">
              Campus-first commercial merchandise template with modern ecommerce sections.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Clothing</li>
              <li>Tech</li>
              <li>College</li>
              <li>Neuroscience</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Support</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Shipping Policy</li>
              <li>Returns</li>
              <li>Bulk Orders</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
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
