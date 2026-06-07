import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { categories } from "../../data/categories";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

type CategoryPageProps = {
  params?: {
    slug?: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const slug = params?.slug ?? "";
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  const isSponsoredCategory = slug === "sponsored";

  return (
    <div className={`min-h-screen px-6 py-16 ${isSponsoredCategory ? "bg-gradient-to-b from-slate-50 via-emerald-50/30 to-indigo-50/20" : "bg-gradient-to-b from-slate-50 via-blue-50/40 to-indigo-50/40"}`}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-700 hover:text-indigo-600"
          >
            ← Back to Home
          </Link>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Sort: Popular
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Price: Low to High
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              In Stock
            </button>
          </div>
        </div>

        <header className="mt-4 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {category.title}
            </h1>
            {isSponsoredCategory && (
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Ad-Supported
              </span>
            )}
          </div>
          <p className="mt-2 max-w-2xl text-slate-600">{category.description}</p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            {filteredProducts.length} Products available
          </p>
          {isSponsoredCategory && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-sm text-emerald-800">
                <strong>How it works:</strong> Brands sponsor these tees so you get them FREE or at a token price (₹99).
                Each shirt features partner logos — wearable advertising that funds your wardrobe.
              </p>
            </div>
          )}
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600">
            Products for this category are coming soon.
          </div>
        ) : null}
      </div>
    </div>
  );
}
