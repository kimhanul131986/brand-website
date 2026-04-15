import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  badge: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  link: string;
}

export default function Card({ image, badge, title, titleEn, description, descriptionEn, link }: CardProps) {
  return (
    <div className="bg-[var(--bg-0)] border border-[var(--line-200)] rounded-sm overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[var(--bg-50)] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        <span className="absolute top-3 left-3 bg-[var(--red-500)] text-white text-[10px] font-black px-2.5 py-1 tracking-widest uppercase">
          {badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Title — bilingual */}
        <div className="mb-3">
          <h3 className="text-[var(--ink-900)] font-black text-xl leading-tight">{title}</h3>
          <p className="text-[var(--ink-500)] text-xs font-medium tracking-wide mt-0.5">{titleEn}</p>
        </div>

        {/* Description — Korean */}
        <p className="text-[var(--ink-700)] text-sm leading-relaxed mb-1">{description}</p>
        {/* Description — English */}
        <p className="text-[var(--ink-500)] text-xs leading-relaxed mb-5">{descriptionEn}</p>

        {/* CTA — bilingual */}
        <Link
          href={link}
          className="inline-flex flex-col text-[var(--red-500)] hover:underline"
        >
          <span className="text-sm font-bold leading-tight flex items-center gap-1">
            자세히 보기
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </span>
          <span className="text-[10px] font-semibold opacity-70 tracking-wide uppercase leading-tight">
            See More
          </span>
        </Link>
      </div>
    </div>
  );
}
