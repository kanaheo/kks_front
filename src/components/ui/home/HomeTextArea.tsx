"use client";

import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const animatedWords = ["맛집", "아이폰", "노트북", "카페", "알바", "냉장고"];

function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % animatedWords.length);
        setFade(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-300 ease-in-out ${
        fade ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      {animatedWords[index]}
    </span>
  );
}

export default function HomeTextArea() {
  return (
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
      <FaMapMarkerAlt className="inline mr-2 text-orange-500" />
      서초4동에서 <AnimatedText /> 찾고 계신가요?
    </h1>
  );
}
