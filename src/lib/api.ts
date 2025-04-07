import { fetchGet, fetchPost } from "./fetch";

export const login = (data: { email: string; password: string }) => fetchPost("/login", data);

export const logout = () => fetchPost("/logout", null);

export const getMe = () => fetchGet("/meinfo");

export const signup = (data: { email: string; nickname: string; password: string }) => fetchPost("/signup", data);
