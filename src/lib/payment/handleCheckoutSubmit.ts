import { Stripe, StripeElements } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { requestOrder } from "@/lib/api";
import { Product } from "@/types/types";
import { Paymant } from "@/types/types";

export const handleCheckoutSubmit = async ({
  data,
  stripe,
  elements,
  product,
}: {
  data: Paymant;
  stripe: Stripe;
  elements: StripeElements;
  product: Product;
}) => {
  const cardElement = elements.getElement(CardElement);
  if (!cardElement) throw new Error("카드 정보가 없습니다.");

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
  });

  if (error || !paymentMethod) {
    throw new Error(error?.message || "결제 오류 발생");
  }

  const res = await requestOrder({
    ...data,
    productId: product.id,
    paymentMethodId: paymentMethod.id,
  });

  return res.orderId;
};
