"use client";

import { MasonryGrid } from "@/components/image-testimonial-grid";

const reviews = [
  {
    name: "고객",
    date: "2026.04.28",
    text: "사장님이 너무 친절하시고 매장도 너무 깔끔해요! 치킨도 깔끔하고 맛있어요!",
    image: "/images/review1.png",
  },
  {
    name: "고객",
    date: "2026.04.25",
    text: "늦게 퇴근하고 밥할 시간이 없어서 굽네왔어요. 항상 질도 좋고 따뜻하게 먹어서 배불리 먹고 가요. 남해마늘 진짜맛나요 ☺",
    image: "/images/review2.png",
  },
  {
    name: "고객",
    date: "2026.04.20",
    text: "떡볶이 먹고 싶어 조카랑 방문했는데, 치킨까지 시켰네요~ 굽네치킨 맛있어요~~",
    image: "/images/review3.png",
  },
  {
    name: "고객",
    date: "2026.04.18",
    text: "매장에서 먹으면 더 바삭거리는 닭다리를 먹을수 있어서 좋아요. 오픈형 주방이라서 깔끔하고 마무리 청소하시는거 보고 믿음이 가요.",
    image: "/images/review4.png",
  },
  {
    name: "고객",
    date: "2026.04.15",
    text: "퇴근길 저희의 참새방앗간 굽네치킨입니다. 혼술세트 짱이예요 꼭 주문하세요. 웨지감자랑 고추바사삭 세트 13,000원에 왠만한 치킨 뺨침!",
    image: "/images/review5.png",
  },
  {
    name: "Ku신",
    date: "2026.04.10",
    text: "와 진짜 국물닭발 너무 맛있어요!!! 맛있게 맵다의 정석!!!!",
    image: "/images/review6.png",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[var(--bg-50)] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[var(--red-500)] text-white text-[11px] font-black uppercase tracking-widest px-2.5 py-1 mb-4">
            REVIEWS
          </span>
          <h2 className="text-[var(--ink-900)] text-2xl md:text-4xl font-bold mb-2">
            고객 사진후기
          </h2>
          <p className="text-[var(--ink-500)] text-sm md:text-base">
            Customer Photo Reviews
          </p>
        </div>

        {/* Masonry Grid */}
        <MasonryGrid columns={3} gap={4} className="hidden md:block">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </MasonryGrid>

        {/* Mobile: 1 column */}
        <MasonryGrid columns={1} gap={4} className="md:hidden">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  date,
  text,
  image,
}: {
  name: string;
  date: string;
  text: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--line-200)]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name}님의 후기`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-[var(--ink-700)] text-sm leading-relaxed mb-3">
          &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[var(--ink-900)] text-sm font-semibold">{name}</span>
          <span className="text-[var(--ink-500)] text-xs">{date}</span>
        </div>
      </div>
    </div>
  );
}
