import { Stripe, StripeElements } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { requestOrder } from "@/lib/api";
import { Product, Order } from "@/types/types";

export const handleCheckoutSubmit = async ({
  data,
  stripe,
  elements,
  product,
}: {
  data: Order;
  stripe: Stripe | null;
  elements: StripeElements | null;
  product: Product;
}): Promise<number> => {
  if (!stripe || !elements) throw new Error("Stripe가 준비되지 않았습니다.");

  const cardElement = elements.getElement(CardElement);
  if (!cardElement) throw new Error("카드 정보가 없습니다.");

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
  });

  if (error || !paymentMethod) throw new Error(error?.message || "결제 실패");

  const orderId = await requestOrder({
    ...data,
    productId: product.id,
    paymentMethodId: paymentMethod.id,
  });

  return orderId;
};
