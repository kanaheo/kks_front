"use client";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "danger" | "outline";
};

export default function Button({ className, children, variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "w-full font-bold py-2 px-4 rounded transition duration-200 transform";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white",
    danger: "bg-red-600 hover:bg-red-500 text-white",
    outline: "border border-gray-400 text-white hover:bg-gray-800",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        "hover:scale-[1.03] active:scale-[0.98]", // ✅ 애니메이션 효과!
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
