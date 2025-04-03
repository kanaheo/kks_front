import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const isLoggedIn = !!token;
  const { pathname } = request.nextUrl;

  // ✅ 로그인 해야만 접근 가능한 비공개 경로
  const privatePaths = ["/mypage", "/cart", "/orders"];

  const isPrivate = privatePaths.includes(pathname);
  const isAuthPage = pathname === "/login" || pathname === "/join";

  // ✅ 로그인 안 한 사람이 비공개 페이지 접근 시 → 로그인으로 튕김
  if (!isLoggedIn && isPrivate) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ 로그인 한 사람이 로그인/회원가입 페이지 접근 시 → 홈으로 튕김
  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
