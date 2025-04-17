import { getProductById } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const product = await getProductById(id);
  if (!product) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="mb-4">
        {product.imageUrl ? (
          <Image src={product.imageUrl} alt={product.title} width={500} height={300} />
        ) : (
          <div className="w-full h-60 bg-gray-700 text-white flex items-center justify-center">이미지 없음</div>
        )}
      </div>
      <p className="text-lg mb-2">💰 {product.price.toLocaleString()}원</p>
      <p className="mb-2">📍 {product.location}</p>
      <p className="mb-4">📁 {product.category}</p>
      <p className="text-sm text-zinc-400">🗣 판매자: {product.sellerNickname}</p>
      <p className="mt-6">{product.description}</p>
    </div>
  );
}
