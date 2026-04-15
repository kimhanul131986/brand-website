import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-6xl font-bold text-[var(--red-500)] mb-4">404</h1>
      <p className="text-[var(--ink-700)] text-lg mb-8">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="bg-[var(--red-500)] text-white font-bold px-6 h-12 flex items-center rounded-[4px] hover:bg-[var(--red-700)] transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
