import Card from "@/components/Card";
import { cards } from "@/lib/content";

export default function CardGrid() {
  return (
    <section id="menu" className="bg-[var(--bg-50)] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header — bilingual */}
        <div className="mb-12 text-center">
          <p className="text-[var(--red-500)] text-xs font-black uppercase tracking-widest mb-3">
            Our Menu · 인기 메뉴
          </p>
          <h2 className="text-[var(--ink-900)] font-black text-3xl md:text-[40px] leading-[1.15]">
            인기 메뉴 소개
          </h2>
          <p className="text-[var(--ink-500)] text-base md:text-lg font-medium mt-2">
            Our Most-Loved Dishes
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex flex-col items-center justify-center border-2 border-[var(--red-500)] text-[var(--red-500)] hover:bg-[var(--red-500)] hover:text-white h-14 px-10 rounded-[4px] transition-colors gap-0.5"
          >
            <span className="font-bold text-sm leading-tight">전체 메뉴 보기</span>
            <span className="text-[10px] font-semibold opacity-70 tracking-widest uppercase leading-tight">
              View Full Menu
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
