import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          👋 Welcome to <span className="text-blue-400">KKS Shop</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl">
          이곳은 간단하고 깔끔한 다크모드 기반의 쇼핑몰입니다. 로그인하고 멋진 상품들을 구경해보세요!
        </p>
      </main>
    </div>
  );
}
