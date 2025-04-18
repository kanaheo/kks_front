import { ProductResponse } from "@/types/types";
import { fetchGet, fetchPost } from "./fetch";

export const login = (data: { email: string; password: string }) => fetchPost("/users/login", data, true);

export const logout = () => fetchPost("/users/logout", null);

export const getMe = () => fetchGet("/users/me");

export const signup = (data: { email: string; nickname: string; password: string }) => fetchPost("/users/signup", data);

export const createProduct = (formData: FormData) => fetchPost("/products", formData, true);

export const getProductsByCategory = async (category: string): Promise<ProductResponse[]> => {
  return await fetchGet(`/products?category=${encodeURIComponent(category)}`);
};

export const getProductById = async (id: string): Promise<ProductResponse> => {
  return await fetchGet(`/products/${id}`);
};

export const requestPayment = async (productId: string) => {
  return await fetchPost("/payments/request", { productId }, true);
};

export const getOrderById = async (orderId: string) => {
  return await fetchGet(`/api/orders/${orderId}`);
};
