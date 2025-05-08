import { getMyOrders } from "@/lib/api";
import { OrderSummary } from "@/types/types";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function OrdersPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const orders = await getMyOrders(cookieHeader);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">📦 주문 내역</h1>

      {orders.length === 0 ? (
        <p className="text-zinc-400">주문 내역이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map((order: OrderSummary) => (
            <div key={order.orderNumber} className="bg-zinc-800 rounded-xl p-5 shadow-md">
              <div className="mb-3 text-sm text-zinc-400">🧾 주문번호: {order.orderNumber}</div>

              {order.productImageUrl && (
                <Image
                  src={order.productImageUrl}
                  alt={order.productName}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover mb-3"
                />
              )}

              <div className="font-semibold text-lg">{order.productName}</div>

              <div className="text-sm text-zinc-500 mt-1">
                주문일: {new Date(order.createdAt).toLocaleDateString("ko-KR")}
              </div>

              <Link
                href={`/orders/${order.orderNumber}`}
                className="inline-block mt-4 text-sm text-blue-400 hover:underline"
              >
                자세히 보기 →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
