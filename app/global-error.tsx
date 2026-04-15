"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">오류가 발생했습니다</h2>
        <button
          onClick={reset}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          다시 시도
        </button>
      </body>
    </html>
  );
}
