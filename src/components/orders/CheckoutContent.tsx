"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import CheckoutCardInput from "./CheckoutCardInput";
import { handleCheckoutSubmit } from "@/lib/payment/handleCheckoutSubmit";

const schema = z.object({
  recipient: z.string().min(1, "받는 사람을 입력해주세요"),
  address: z.string().min(1, "주소를 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutContent({ product }: { product: Product }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (!stripe || !elements) return;

    try {
      const orderNumber = await handleCheckoutSubmit({
        data: {
          ...data,
          productId: product.id,
          paymentMethodId: "", // 내부에서 실제 결제 ID 사용
        },
        stripe,
        elements,
        product,
      });

      router.push(`/orders/${orderNumber}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("결제 실패: " + err.message);
      } else {
        alert("알 수 없는 오류 발생");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input placeholder="받는 사람" {...register("recipient")} />
        {errors.recipient && <p className="text-red-400 text-sm mt-1">{errors.recipient.message}</p>}
      </div>
      <div>
        <Input placeholder="주소" {...register("address")} />
        {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>}
      </div>
      <div>
        <Input placeholder="전화번호" {...register("phone")} />
        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <CheckoutCardInput />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "결제 중..." : "💳 결제하기"}
      </Button>
    </form>
  );
}
