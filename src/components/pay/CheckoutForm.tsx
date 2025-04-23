"use client";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { Product } from "@/types/types";
import CheckoutContent from "./CheckoutContent";

export default function CheckoutForm({ product }: { product: Product }) {
  return (
    <div className="max-w-xl mx-auto px-4 py-10 text-white w-full">
      <h1 className="text-2xl font-bold mb-6">🧾 주문 결제</h1>

      <div className="mb-6 space-y-2">
        <p>🛍️ 상품명: {product.title}</p>
        <p>💰 가격: {product.price.toLocaleString()}원</p>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutContent product={product} />
      </Elements>
    </div>
  );
}
