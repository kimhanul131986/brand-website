"use client";

import { useState } from "react";

export default function InquiryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    console.log("[문의 접수]", data);
    setIsSubmitted(true);
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={open}
        aria-label="문의하기"
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--red-500)] text-white shadow-lg transition-colors hover:bg-[var(--red-700)]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-md rounded-t-2xl bg-white p-6 shadow-xl md:rounded-2xl">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[var(--ink-900)]">문의하기</h2>
                <p className="text-xs text-[var(--ink-500)]">Inquiry</p>
              </div>
              <button
                onClick={close}
                aria-label="닫기"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--ink-500)] transition-colors hover:bg-[var(--bg-50)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="mb-1 block text-sm font-medium text-[var(--ink-700)]">
                    이름 <span className="text-xs text-[var(--ink-500)]">Name</span>
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full rounded-lg border border-[var(--line-200)] bg-white px-3 py-2.5 text-sm text-[var(--ink-900)] outline-none transition-colors focus:border-[var(--red-500)]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-phone" className="mb-1 block text-sm font-medium text-[var(--ink-700)]">
                    연락처 <span className="text-xs text-[var(--ink-500)]">Phone</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    className="w-full rounded-lg border border-[var(--line-200)] bg-white px-3 py-2.5 text-sm text-[var(--ink-900)] outline-none transition-colors focus:border-[var(--red-500)]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="mb-1 block text-sm font-medium text-[var(--ink-700)]">
                    문의 내용 <span className="text-xs text-[var(--ink-500)]">Message</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="문의하실 내용을 입력해주세요."
                    className="w-full resize-none rounded-lg border border-[var(--line-200)] bg-white px-3 py-2.5 text-sm text-[var(--ink-900)] outline-none transition-colors focus:border-[var(--red-500)]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-[var(--red-500)] font-bold text-white transition-colors hover:bg-[var(--red-700)]"
                >
                  문의 보내기
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-3 py-8">
                {/* Check icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[var(--ink-900)]">문의가 접수되었습니다</p>
                <p className="text-sm text-[var(--ink-500)]">빠른 시일 내에 연락드리겠습니다.</p>
                <button
                  onClick={close}
                  className="mt-2 h-10 w-full rounded-lg border border-[var(--line-200)] font-medium text-[var(--ink-700)] transition-colors hover:bg-[var(--bg-50)]"
                >
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
