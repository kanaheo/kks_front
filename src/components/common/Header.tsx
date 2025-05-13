"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import HeaderClient from "./HeaderClient"; // 그대로 유지해도 OK
import { useAuth } from "@/contexts/AuthContext";

type JwtPayload = {
  nickname: string;
  sub: string;
  exp: number;
};

export default function Header() {
  const { isLoggedIn, nickname } = useAuth();

  return <HeaderClient isLoggedIn={isLoggedIn} nickname={nickname} />;
}
