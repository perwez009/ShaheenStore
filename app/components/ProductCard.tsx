import Image from "next/image";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    price,
    compareAtPrice,
    image,
    badge,
    rating,
    reviews,
    sizes,
    colors,
    tag,
  } = product;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/80 shadow-lg shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={640}
          height={640}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
          {badge ? (
            <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              {badge}
            </span>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">
          {name}
        </h3>

        <p className="text-sm font-medium text-slate-600">
          ★ {rating.toFixed(1)} · {new Intl.NumberFormat("en-IN").format(reviews)} Reviews
        </p>

        <div className="flex items-end gap-2">
          <p className="text-base font-semibold text-slate-900">
            ₹{new Intl.NumberFormat("en-IN").format(price)}
          </p>
          {compareAtPrice ? (
            <p className="text-sm text-slate-500 line-through">
              ₹{new Intl.NumberFormat("en-IN").format(compareAtPrice)}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {sizes.slice(0, 3).map((size) => (
            <span
              key={size}
              className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {size}
            </span>
          ))}
        </div>

        <p className="text-xs text-slate-500">
          Colors: {colors.join(", ")}
        </p>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <button className="h-10 rounded-full bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-500">
            Add to Cart
          </button>
          <button className="h-10 rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}
