export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">상품 불러오는 중...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-zinc-800 rounded-lg h-[200px]" />
        ))}
      </div>
    </div>
  );
}
