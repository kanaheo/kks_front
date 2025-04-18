import { getProductById } from "@/lib/api";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CheckoutPage(props: Props) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) return notFound();

  return (
    <div className="max-w-xl mx-auto px-4 py-10 text-white">
      <h1 className="text-2xl font-bold mb-6">🧾 주문 결제</h1>

      <div className="mb-6 space-y-2">
        <p>🛍️ 상품명: {product.title}</p>
        <p>💰 가격: {product.price.toLocaleString()}원</p>
      </div>

      <div className="mb-6 space-y-2">
        <Input placeholder="받는 사람" />
        <Input placeholder="주소" />
        <Input placeholder="전화번호" />
      </div>

      <Button variant="primary">💳 결제하기</Button>
    </div>
  );
}
