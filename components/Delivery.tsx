import { deliveryContent } from "@/lib/content";

export default function Delivery() {
  return (
    <section id="delivery" className="bg-[var(--ink-900)] py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Text */}
          <div>
            <p className="text-[var(--red-500)] text-xs font-black uppercase tracking-widest mb-3">
              {deliveryContent.eyebrow} · {deliveryContent.eyebrowEn}
            </p>
            <h2 className="text-white font-black text-2xl md:text-[32px] leading-tight mb-1">
              {deliveryContent.headline}
            </h2>
            <p className="text-white/50 text-sm md:text-base font-medium">
              {deliveryContent.headlineEn}
            </p>
            <p className="text-white/60 text-sm mt-2">{deliveryContent.subline}</p>
            <p className="text-white/35 text-xs mt-0.5">{deliveryContent.sublineEn}</p>
          </div>

          {/* Platform Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {deliveryContent.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className="inline-flex flex-col items-center justify-center border border-white/20 hover:border-white/60 text-white h-16 px-8 rounded-[4px] transition-colors hover:bg-white/5 gap-0.5"
              >
                <span className="font-bold text-sm leading-tight">{platform.name}</span>
                <span className="text-[10px] font-medium text-white/50 tracking-wide leading-tight">
                  {platform.nameEn}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider callout */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            배달 가능 지역 · 홍대, 연남동, 합정, 망원 외 / Delivery to Hongdae, Yeonnam, Hapjeong & more
          </p>
          <span className="text-white/25 text-xs">평균 배달 시간 30–45분 · Avg. delivery 30–45 min</span>
        </div>
      </div>
    </section>
  );
}
