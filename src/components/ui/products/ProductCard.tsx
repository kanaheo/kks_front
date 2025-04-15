import Image from "next/image";
import Link from "next/link";
import { ProductResponse } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale/ko";

interface Props {
  product: ProductResponse;
}

export default function ProductCard({ product }: Props) {
  const timeAgo = product.createdAt
    ? formatDistanceToNow(new Date(product.createdAt), {
        addSuffix: true,
        locale: ko,
      })
    : "방금 전";

  return (
    <Link href={`/products/detail/${product.id}`}>
      <div className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
        <div className="relative w-full h-64">
          {product.imageUrl ? (
            <Image src={product.imageUrl} alt={product.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-white text-sm">
              이미지 없음
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-white text-sm font-medium line-clamp-2">{product.title}</h2>
          <p className="text-white text-base font-bold mt-1">{product.price.toLocaleString()}원</p>
          <p className="text-zinc-400 text-sm mt-1">{product.location}</p>
          <p className="text-zinc-500 text-xs mt-1">{timeAgo}</p>
        </div>
      </div>
    </Link>
  );
}
