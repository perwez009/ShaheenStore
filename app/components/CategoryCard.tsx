import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  image: string;
  href: string;
  description: string;
  itemCount: number;
};

export default function CategoryCard({
  title,
  image,
  href,
  description,
  itemCount,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-3xl border border-white/30 bg-white/70 shadow-lg shadow-blue-100/50 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={640}
          height={640}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-1 p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-sm text-slate-600">{description}</p>
        <p className="pt-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {itemCount} Items
        </p>
      </div>
    </Link>
  );
}
