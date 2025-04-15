import { JSX } from "react";

export type Category = {
  name: string;
  icon: JSX.Element;
};

export type ProductResponse = {
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
