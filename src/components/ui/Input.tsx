import { cn } from "@/lib/utils";

export default function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("w-full p-3 mb-2 rounded bg-zinc-800 text-white placeholder-zinc-500", className)}
      {...props}
    />
  );
}
