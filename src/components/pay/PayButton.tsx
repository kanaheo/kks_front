"use client";

import { requestPayment } from "@/lib/api";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";

type Props = {
  productId: string;
};

export default function PayButton({ productId }: Props) {
  const router = useRouter();

  const handlePayment = async () => {
    try {
      const data = await requestPayment(productId);
      router.push(`/orders/${data.orderId}`);
    } catch (err) {
      console.error(err);
      alert("결제 실패 ㅠㅠ");
    }
  };

  return (
    <Button onClick={handlePayment} className="mt-6 w-full">
      💳 결제하기
    </Button>
  );
}
