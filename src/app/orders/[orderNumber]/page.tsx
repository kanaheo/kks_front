import { getOrderByOrderNumber } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function OrderCompletePage({ params }: { params: Promise<{ orderNumber: string }> }) {
  const { orderNumber } = await params;
  if (!orderNumber) return notFound();
  const order = await getOrderByOrderNumber(orderNumber);
  if (!order) return notFound();

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-white text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 주문이 완료되었습니다!</h1>
      <p className="text-lg mb-2">고객님의 주문이 정상적으로 처리되었습니다.</p>

      <div className="bg-zinc-800 rounded-lg p-6 mt-6 text-left">
        <p className="mb-2">
          🧾 주문번호: <strong>{orderNumber}</strong>
        </p>
        <p className="mb-2">🛍️ 상품명: {order.productName}</p>
        {order.productImageUrl && (
          <Image
            src={order.productImageUrl}
            alt={order.productName}
            width={500}
            height={300}
            className="mt-4 w-full h-auto rounded-lg object-cover"
          />
        )}
        <p className="text-sm text-zinc-400">감사합니다. 곧 배송을 시작하겠습니다.</p>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Link href="/" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded">
          🏠 메인으로
        </Link>
        <Link href="/orders" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded">
          📦 주문 내역 보기
        </Link>
      </div>
    </div>
  );
}
