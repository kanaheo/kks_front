import { cookies } from "next/headers";
import HeaderClient from "./HeaderClient";
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  nickname: string;
  sub: string;
  exp: number;
};

export default async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const isLoggedIn = !!token;

  let nickname = "";
  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      nickname = decoded.nickname;
    } catch (e) {
      console.error("JWT 디코딩 실패:", e);
    }
  }

  return <HeaderClient isLoggedIn={isLoggedIn} nickname={nickname} />;
}
