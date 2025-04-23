import { getProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import CheckoutForm from "@/components/pay/CheckoutForm"; // 👈 요걸 새로 만들자!

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CheckoutPage(props: Props) {
  const { id } = await props.params;
  const product = await getProductById(id);
  if (!product) return notFound();

  return <CheckoutForm product={product} />;
}
