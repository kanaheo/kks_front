"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { fetchPost } from "@/lib/fetch";
import { createProduct } from "@/lib/api";

const schema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  description: z.string().min(1, "설명을 입력해주세요."),
  price: z.string().min(1, "가격을 입력해주세요."),
  location: z.string().min(1, "거래지역을 입력해주세요."),
  images: z.any(),
});

type FormData = z.infer<typeof schema>;

export default function ProductCreatePage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: {
      title: string;
      description: string;
      price: string;
      location: string;
      images?: FileList;
    }) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("location", data.location);

      if (data.images) {
        Array.from(data.images).forEach((file) => {
          formData.append("images", file);
        });
      }

      const json = await createProduct(formData);
      if (!json || !json.message) {
        throw new Error("응답이 올바르지 않습니다.");
      }

      return json;
    },

    onSuccess: () => {
      alert("✅ 상품 등록 성공!");
      router.push("/products");
    },

    onError: (err: Error) => {
      alert(`❌ 상품 등록 실패! ${err.message}`);
      console.error("상품 등록 에러:", err);
    },
  });

  return (
    <div className="max-w-xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">상품 등록</h1>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col gap-4">
        <Input type="text" placeholder="제목" {...register("title")} />
        {errors.title && <p className="text-red-400 text-sm">{errors.title.message}</p>}

        <Input type="text" placeholder="설명" {...register("description")} />
        {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}

        <Input type="number" placeholder="가격" {...register("price")} />
        {errors.price && <p className="text-red-400 text-sm">{errors.price.message}</p>}

        <Input type="text" placeholder="거래지역" {...register("location")} />
        {errors.location && <p className="text-red-400 text-sm">{errors.location.message}</p>}

        <Input type="file" accept="image/*" multiple {...register("images")} />

        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "등록 중..." : "등록하기"}
        </Button>
      </form>
    </div>
  );
}
