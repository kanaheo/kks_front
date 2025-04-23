"use client";
import { CardElement } from "@stripe/react-stripe-js";

export default function CheckoutCardInput() {
  return (
    <div className="p-4 bg-zinc-800 rounded">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#fff",
              "::placeholder": { color: "#a3a3a3" },
            },
            invalid: { color: "#ef4444" },
          },
        }}
      />
    </div>
  );
}
