"use client";

import LoginForm from "@/components/forms/LoginForm";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
