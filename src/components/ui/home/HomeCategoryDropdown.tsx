"use client";

import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const categories = ["중고거래", "부동산", "중고차", "알바", "동네업체", "모임"];

export default function HomeCategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("중고거래");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-zinc-800 text-white px-4 py-2 rounded-full text-sm"
      >
        {selected}
        <MdOutlineArrowDropDown size={20} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50">
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 text-sm hover:bg-zinc-700 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
