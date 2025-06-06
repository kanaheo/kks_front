import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/common/Header";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-gray-900 text-white">
        <AuthProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">{children}</main>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
