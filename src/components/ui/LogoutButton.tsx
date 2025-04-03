"use client";

import { logout } from "@/lib/api";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  return (
    <button className="hover:text-zinc-400 flex items-center gap-1" onClick={handleLogout}>
      <LogOut size={16} /> 로그아웃
    </button>
  );
};
