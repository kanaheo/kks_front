import { getProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import CheckoutForm from "@/components/orders/CheckoutForm"; // 👈 요걸 새로 만들자!

export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return notFound();

  return <CheckoutForm product={product} />;
}
