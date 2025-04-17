import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { BiHomeAlt, BiCar } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiNotebookLight } from "react-icons/pi";
import * as FaIcons from "react-icons/fa";

import { Category } from "@/types/types";

export const CATEGORY_LIST: Category[] = [
  { name: "중고거래", icon: <CiShoppingCart size={24} /> },
  { name: "알바", icon: <CiSearch size={24} /> },
  { name: "부동산", icon: <BiHomeAlt size={24} /> },
  { name: "중고차", icon: <BiCar size={24} /> },
  { name: "동네업체", icon: <HiOutlineBuildingStorefront size={24} /> },
  { name: "동네생활", icon: <PiNotebookLight size={24} /> },
  { name: "모임", icon: <FaIcons.FaRegHandshake size={24} /> },
];
