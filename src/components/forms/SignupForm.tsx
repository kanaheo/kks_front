"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import SocialButtons from "../ui/SocialButtons";
import { signup } from "@/lib/api";

const SignupSchema = z
  .object({
    email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }),
    password: z.string().min(8, { message: "비밀번호는 최소 8자 이상입니다." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type SignupInput = z.infer<typeof SignupSchema>;

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data: SignupInput) => {
    try {
      await signup(data);
      alert("회원가입 성공!");
      router.push("/login");
    } catch (err) {
      alert("회원가입 실패!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-zinc-900 p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>

      <Input type="email" placeholder="이메일" {...register("email")} />
      {errors.email && <p className="text-red-400 text-sm mb-3">{errors.email.message}</p>}

      <Input type="text" placeholder="닉네임" {...register("nickname")} />
      {errors.nickname && <p className="text-red-400 text-sm mb-3">{errors.nickname.message}</p>}

      <Input type="password" placeholder="비밀번호" {...register("password")} />
      {errors.password && <p className="text-red-400 text-sm mb-3">{errors.password.message}</p>}

      <Input type="password" placeholder="비밀번호 확인" {...register("confirmPassword")} />
      {errors.confirmPassword && <p className="text-red-400 text-sm mb-3">{errors.confirmPassword.message}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "가입 중..." : "회원가입"}
      </Button>

      <div className="text-center my-4 text-zinc-400">또는 소셜 계정으로</div>

      <div className="flex flex-col gap-3">
        <SocialButtons />
      </div>

      <div className="text-center mt-6">
        <a href="/login" className="text-blue-400 hover:underline">
          이미 계정이 있으신가요? 로그인
        </a>
      </div>
    </form>
  );
}
