"use client";

import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import HomeCategoryDropdown from "./HomeCategoryDropdown";

export default function HomeSearchBar() {
  return (
    <>
      <div className="flex justify-center mb-6 gap-4">
        {/* 지역 버튼 */}
        <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold shadow">
          <FaMapMarkerAlt />
          서초4동
          <MdOutlineArrowDropDown size={24} />
        </button>

        {/* 검색 바 */}
        <div className="bg-zinc-800 text-white flex items-center pl-6 pr-5 py-3 rounded-full w-[600px] shadow">
          <HomeCategoryDropdown />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="bg-transparent px-4 outline-none flex-1 text-lg placeholder-zinc-400"
          />
          <FaSearch className="text-zinc-400 text-xl" />
        </div>
      </div>

      {/* 인기 검색어 */}
      <div className="text-center text-base text-zinc-400 mb-8 font-light">
        인기 검색어 · 굿즈 · 알바 · 카페 · 노트북 · 원룸 · 현대 중고차 · 이사집 알바 · 근처 맛집 · 동네친구 · 배드민턴
      </div>
    </>
  );
}
