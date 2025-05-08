import { JSX } from "react";

export type Category = {
  name: string;
  icon: JSX.Element;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  category: string;
  imageUrl?: string | null;
  sellerNickname: string;
  createdAt?: string;
};

export type User = {
  id: number;
  email: string;
  nickname: string;
  isSocial: boolean;
};

export type Order = {
  recipient: string;
  address: string;
  phone: string;
  productId: number;
  paymentMethodId: string;
  orderNumber?: string;
};

// 주문 이력
export type OrderSummary = {
  orderNumber: string;
  productName: string;
  productImageUrl: string | null;
  createdAt: string;
};
