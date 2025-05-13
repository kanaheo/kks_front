"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getAuthUser } from "@/lib/auth";

type AuthState = {
  nickname: string;
  isLoggedIn: boolean;
};

const AuthContext = createContext<AuthState>({
  nickname: "",
  isLoggedIn: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({ nickname: "", isLoggedIn: false });

  useEffect(() => {
    const user = getAuthUser();
    setAuth(user);
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
