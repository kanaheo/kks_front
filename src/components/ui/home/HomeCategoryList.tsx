import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { BiHomeAlt, BiCar } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiNotebookLight } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import React from "react";
import { CATEGORY_LIST } from "@/lib/constants/categories";
import Link from "next/link";

export const getIconColor = (name: string) => {
  switch (name) {
    case "중고거래":
      return "#ff6f0f";
    case "알바":
      return "#ff6f0f";
    case "부동산":
      return "#e35ddb";
    case "중고차":
      return "#58a5f0";
    case "동네업체":
      return "#ffd85c";
    case "동네생활":
      return "#f17427";
    case "모임":
      return "#f17427";
    default:
      return "#ffffff";
  }
};

export default function HomeCategoryList() {
  const towns = [
    "송도동",
    "역삼동",
    "물금읍",
    "봉담읍",
    "배방읍",
    "서초동",
    "옥정동",
    "신림동",
    "불당동",
    "항남읍",
    "청담동",
    "다산동",
    "별내동",
    "화도읍",
    "다사읍",
    "마곡동",
    "압구정동",
    "배곧동",
    "고덕동",
    "오창읍",
  ];

  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
        {CATEGORY_LIST.map((c, idx) => (
          <Link
            key={idx}
            href={`/category/${encodeURIComponent(c.name)}`}
            className="bg-[#3c3c3c] hover:bg-[#4b4b4b] rounded-xl w-[90px] h-[90px] flex flex-col items-center justify-center"
          >
            <div className="mb-4">{React.cloneElement(c.icon, { size: 24, color: getIconColor(c.name) })}</div>
            <div className="text-sm text-white text-center">{c.name}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-10 gap-2 justify-center mb-4 px-4 max-w-5xl mx-auto">
        {towns.map((town, idx) => (
          <div
            key={idx}
            className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-full text-sm text-center whitespace-nowrap"
          >
            {town}
          </div>
        ))}
      </div>
    </>
  );
}
