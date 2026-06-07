"use client";

import Image from "next/image";
import type { Product, Sponsor } from "../data/products";
import { useState } from "react";
import QRCodeDisplay from "./QRCodeDisplay";

type ProductCardProps = {
  product: Product;
};

function SponsorLogos({ sponsors }: { sponsors?: Sponsor[] }) {
  if (!sponsors || sponsors.length === 0) return null;

  return (
    <div className="space-y-2 pt-2 border-t border-slate-100">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        Powered by
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1.5"
          >
            <span className="text-[10px] font-medium text-slate-400 uppercase">
              {sponsor.placement}
            </span>
            <span className="text-xs font-semibold text-slate-700">{sponsor.name}</span>
            {sponsor.tier === "title" && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
                Title
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceDisplay({ product }: { product: Product }) {
  const { price, compareAtPrice, consumerPrice, isSponsored } = product;

  if (isSponsored) {
    if (consumerPrice === 0 || consumerPrice === undefined) {
      return (
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-emerald-600">FREE</span>
          {compareAtPrice && (
            <span className="text-sm text-slate-400 line-through">
              ₹{new Intl.NumberFormat("en-IN").format(compareAtPrice)}
            </span>
          )}
        </div>
      );
    }
    return (
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-indigo-600">
          ₹{new Intl.NumberFormat("en-IN").format(consumerPrice ?? 0)}
        </span>
        {compareAtPrice && (
          <span className="text-sm text-slate-400 line-through">
            ₹{new Intl.NumberFormat("en-IN").format(compareAtPrice)}
          </span>
        )}
        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
          Sponsor Price
        </span>
      </div>
    );
  }

  return (
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
  );
}

function QuickViewModal({ product, isOpen, onClose }: { product: Product; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const {
    name,
    image,
    rating,
    reviews,
    sizes,
    colors,
    isSponsored,
    sponsors,
    consumerPrice,
    compareAtPrice,
    impressions,
    qrCode,
    description,
  } = product;

  const imageSrc =
    process.env.NODE_ENV === "production" && image.startsWith("/")
      ? `/ShaheenStore${image}`
      : image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-slate-500 hover:text-slate-900 backdrop-blur"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto min-h-[300px] overflow-hidden rounded-t-3xl md:rounded-t-none md:rounded-l-3xl">
            <Image
              src={imageSrc}
              alt={name}
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
            {isSponsored && (
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                  {consumerPrice === 0 ? "FREE" : `₹${consumerPrice}`}
                </span>
                {impressions && (
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    ~{new Intl.NumberFormat("en-IN").format(impressions)} impressions
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {product.tag}
              </span>
              {product.badge ? (
                <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {product.badge}
                </span>
              ) : null}
            </div>

            <h2 className="text-2xl font-bold text-slate-900">{name}</h2>

            <p className="text-sm font-medium text-slate-600">
              ★ {rating.toFixed(1)} · {new Intl.NumberFormat("en-IN").format(reviews)} Reviews
            </p>

            <PriceDisplay product={product} />

            {description && (
              <p className="text-sm text-slate-600 border-t border-slate-100 pt-4">{description}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600"
                >
                  {size}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-500">
              Colors: {colors.join(", ")}
            </p>

            {isSponsored && sponsors && (
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Powered by</p>
                <div className="flex flex-wrap items-center gap-2">
                  {sponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className="flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1.5"
                    >
                      <span className="text-[10px] font-medium text-slate-400 uppercase">{sponsor.placement}</span>
                      <span className="text-xs font-semibold text-slate-700">{sponsor.name}</span>
                      {sponsor.tier === "title" && (
                        <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">Title</span>
                      )}
                    </div>
                  ))}
                </div>
                {qrCode && <QRCodeDisplay qrCodeUrl={qrCode} productName={name} size={100} />}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={onClose}
                className="h-12 rounded-full bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {isSponsored ? "Claim Free Tee" : "Add to Cart"}
              </button>
              <button
                onClick={onClose}
                className="h-12 rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    isSponsored,
    sponsors,
    consumerPrice,
    impressions,
    qrCode,
  } = product;
  const imageSrc =
    process.env.NODE_ENV === "production" && image.startsWith("/")
      ? `/ShaheenStore${image}`
      : image;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/80 shadow-lg shadow-slate-200/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            width={640}
            height={640}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
          {isSponsored && (
            <div className="absolute top-3 left-3 right-3 flex justify-between">
              <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                FREE
              </span>
              {impressions && (
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  ~{new Intl.NumberFormat("en-IN").format(impressions)} impressions
                </span>
              )}
            </div>
          )}
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

          <PriceDisplay product={product} />

          <div className="flex flex-wrap gap-2">
            {sizes.slice(0, 4).map((size) => (
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

          {isSponsored && <SponsorLogos sponsors={sponsors} />}

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => setShowModal(true)}
              className="h-10 rounded-full bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              {isSponsored ? "Claim Free" : "Add to Cart"}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="h-10 rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Quick View
            </button>
          </div>
        </div>
      </div>

      <QuickViewModal product={product} isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
