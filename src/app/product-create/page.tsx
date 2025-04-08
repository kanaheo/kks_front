"use client";

import { useUser } from "@/hooks/useUser";
import { useState } from "react";

export default function ProductCreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const { data: user, isLoading } = useUser();

  console.log("user");
  console.log(user);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    images.forEach((img, i) => formData.append("images", img));

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("상품 등록 성공!");
    } else {
      alert("상품 등록 실패!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">상품 등록</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border px-3 py-2 rounded"
        />
        <textarea
          placeholder="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="거래지역"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
          등록하기
        </button>
      </form>
    </div>
  );
}
