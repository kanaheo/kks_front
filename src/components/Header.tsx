// src/components/layout/Header.tsx (서버 컴포넌트)

import Link from "next/link";
import { cookies } from "next/headers";
import { Home, User, ShoppingCart, PackageCheck, Bell, LogIn, UserPlus } from "lucide-react";
import { LogoutButton } from "./ui/LogoutButton";

export default async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  const isLoggedIn = !!token;

  return (
    <header className="bg-zinc-900 text-zinc-100 py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-white">KKS Shop</div>

      <nav className="flex items-center space-x-6 text-sm">
        <Link href="/" className="flex items-center gap-1 hover:text-zinc-400">
          <Home size={16} /> Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link href="/mypage" className="flex items-center gap-1 hover:text-zinc-400">
              <User size={16} /> 회원정보
            </Link>
            <Link href="/cart" className="flex items-center gap-1 hover:text-zinc-400">
              <ShoppingCart size={16} /> 장바구니
            </Link>
            <Link href="/orders" className="flex items-center gap-1 hover:text-zinc-400">
              <PackageCheck size={16} /> 주문이력
            </Link>
            <Link href="/notifications" className="flex items-center gap-1 hover:text-zinc-400">
              <Bell size={16} /> 알림
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login" className="flex items-center gap-1 hover:text-zinc-400">
              <LogIn size={16} /> Login
            </Link>
            <Link href="/join" className="flex items-center gap-1 hover:text-zinc-400">
              <UserPlus size={16} /> Join
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
