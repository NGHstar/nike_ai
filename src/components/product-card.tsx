"use client";

import Image from "next/image";
import type { Product } from "@/db/schema";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-zinc-900">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            {product.name}
          </h3>
          <span className="shrink-0 font-semibold text-zinc-900 dark:text-white">
            ${product.price}
          </span>
        </div>

        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          {product.category}
        </p>

        <p className="mb-3 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {product.color}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {product.sizes?.length ?? 0} sizes
          </span>
        </div>
      </div>
    </div>
  );
}
