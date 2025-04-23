"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Product } from "@/types/types";
import { requestOrder } from "@/lib/api";
import { useRouter } from "next/navigation";

// ✅ 유효성 검사 스키마 정의
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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error || !paymentMethod) {
      alert(error?.message || "결제 오류");
      return;
    }

    try {
      const res = await requestOrder({
        productId: product.id,
        paymentMethodId: paymentMethod.id,
        ...data,
      });

      router.push(`/orders/${res.orderId}`);
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

      <div className="p-4 bg-zinc-800 rounded">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#ffffff",
                "::placeholder": { color: "#a3a3a3" },
              },
              invalid: { color: "#ef4444" },
            },
          }}
        />
      </div>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "결제 중..." : "💳 결제하기"}
      </Button>
    </form>
  );
}
