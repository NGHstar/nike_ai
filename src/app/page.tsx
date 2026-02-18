import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductList } from "@/components/product-list";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Nike Store
          </h1>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {allProducts.length} products
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <ProductList initialProducts={allProducts} />
      </main>
    </div>
  );
}
