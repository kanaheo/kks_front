import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  nickname: string;
  sub: string;
  exp: number;
};

export function getAuthUser(): { nickname: string; isLoggedIn: boolean } {
  try {
    const token = localStorage.getItem("access_token");
    console.log("token");
    console.log(token);
    if (!token) return { nickname: "", isLoggedIn: false };

    const decoded = jwtDecode<JwtPayload>(token);
    return { nickname: decoded.nickname, isLoggedIn: true };
  } catch {
    return { nickname: "", isLoggedIn: false };
  }
}
