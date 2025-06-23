"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";
import SocialButtons from "../ui/SocialButtons";

const LoginSchema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z.string().min(6, { message: "비밀번호는 최소 6자 이상입니다." }),
});

type LoginInput = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const user = await login(data);
      localStorage.setItem("access_token", user.token);
      window.location.href = "/";
    } catch (err) {
      alert("로그인 실패!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-zinc-900 p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>

      <Input type="email" placeholder="이메일" {...register("email")} />
      {errors.email && <p className="text-red-400 text-sm mb-3">{errors.email.message}</p>}

      <Input type="password" placeholder="비밀번호" {...register("password")} />
      {errors.password && <p className="text-red-400 text-sm mb-3">{errors.password.message}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "로그인 중..." : "로그인"}
      </Button>

      <div className="text-center my-4 text-zinc-400">또는</div>

      <div className="flex flex-col gap-3">
        <SocialButtons />
      </div>

      <div className="text-center mt-6">
        <a href="/join" className="text-blue-400 hover:underline">
          아직 회원이 아니신가요? 회원가입
        </a>
      </div>
    </form>
  );
}
