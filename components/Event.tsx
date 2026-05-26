export default function Event() {
  return (
    <section id="event" className="bg-[var(--bg-0)] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-[var(--red-500)] text-xs font-black uppercase tracking-widest mb-3">
            Event · 이벤트
          </p>
          <h2 className="text-[var(--ink-900)] font-black text-3xl md:text-[40px] leading-[1.15]">
            이벤트 & 프로모션
          </h2>
          <p className="text-[var(--ink-500)] text-base md:text-lg font-medium mt-2">
            Promotions & Special Offers
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="border-2 border-dashed border-[var(--line-200)] rounded-sm py-16 md:py-24 flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-[var(--bg-50)] flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink-500)" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 7v5l3 3" />
            </svg>
          </div>

          <p className="text-[var(--red-500)] text-xs font-black uppercase tracking-[0.25em] mb-3">
            Coming Soon
          </p>
          <h3 className="text-[var(--ink-900)] font-black text-xl md:text-2xl mb-2">
            오픈 기념 이벤트 준비 중
          </h3>
          <p className="text-[var(--ink-500)] text-sm md:text-base font-medium mb-1">
            Special opening events are on the way!
          </p>
          <p className="text-[var(--ink-500)] text-sm mt-4">
            2026년 6월 오픈과 함께 다양한 이벤트를 만나보세요.
          </p>
          <p className="text-[var(--ink-500)/60] text-xs mt-1">
            Stay tuned for exciting promotions launching this June.
          </p>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/goobne_hongdae"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex flex-col items-center justify-center border-2 border-[var(--red-500)] text-[var(--red-500)] hover:bg-[var(--red-500)] hover:text-white h-14 px-10 rounded-[4px] transition-colors gap-0.5"
          >
            <span className="font-bold text-sm leading-tight">인스타에서 소식 받기</span>
            <span className="text-[10px] font-semibold opacity-70 tracking-widest uppercase leading-tight">
              Follow on Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
