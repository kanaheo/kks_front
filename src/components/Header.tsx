"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-zinc-900 text-zinc-100 py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-white">KKS Shop</div>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="hover:text-zinc-400">
          Home
        </Link>
        <Link href="/login" className="hover:text-zinc-400">
          Login
        </Link>
        <Link href="/join" className="hover:text-zinc-400">
          Join
        </Link>
      </nav>
    </header>
  );
};

export default Header;
