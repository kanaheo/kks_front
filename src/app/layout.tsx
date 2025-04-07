// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
