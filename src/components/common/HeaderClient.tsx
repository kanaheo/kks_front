"use client";

import Link from "next/link";
import { User, ShoppingCart, PackageCheck, Bell, LogIn, UserPlus, PackagePlus } from "lucide-react";
import { LogoutButton } from "../ui/LogoutButton";

type Props = {
  nickname: string;
  isLoggedIn: boolean;
};

const navItemClass = "flex items-center gap-1 hover:text-zinc-400";

export default function HeaderClient({ nickname, isLoggedIn }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-zinc-100 py-4 px-6 flex justify-between items-center shadow-md">
      <Link href="/" className={navItemClass}>
        <div className="text-2xl font-bold text-white">KKS Shop</div>
      </Link>

      <nav className="flex items-center space-x-6 text-sm">
        <div className="text-2xl font-bold text-white">
          👋 Welcome, <span className="text-blue-400">{isLoggedIn ? nickname : "Guest"}</span>
        </div>

        {isLoggedIn ? (
          <>
            <Link href="/product-create" className={navItemClass}>
              <PackagePlus size={16} /> 상품등록
            </Link>
            <Link href="/mypage" className={navItemClass}>
              <User size={16} /> 회원정보
            </Link>
            <Link href="/cart" className={navItemClass}>
              <ShoppingCart size={16} /> 장바구니
            </Link>
            <Link href="/orders" className={navItemClass}>
              <PackageCheck size={16} /> 주문이력
            </Link>
            <Link href="/notifications" className={navItemClass}>
              <Bell size={16} /> 알림
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login" className={navItemClass}>
              <LogIn size={16} /> Login
            </Link>
            <Link href="/join" className={navItemClass}>
              <UserPlus size={16} /> Join
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
