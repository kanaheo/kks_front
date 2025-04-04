"use client";

import SignupForm from "@/components/forms/SignupForm";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
      <SignupForm />
    </div>
  );
}
