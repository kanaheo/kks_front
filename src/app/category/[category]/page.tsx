import ProductCard from "@/components/ui/products/ProductCard";
import { getProductsByCategory } from "@/lib/api";
import { Product } from "@/types/types";

export default async function ProductListPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const products: Product[] = await getProductsByCategory(decodedCategory);

  await new Promise((res) => setTimeout(res, 1000)); // 로딩 효과용

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">{decodedCategory} 상품</h1>
      {products.length === 0 ? (
        <p className="text-zinc-400">상품이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
